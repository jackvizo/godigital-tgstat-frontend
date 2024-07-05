import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import errorHandler from "@/lib/error-handler";
import { useMutation, useQuery } from "@apollo/client";

const GET_PHONE_NUMBERS = graphql(`
  query GetUserPhoneNumbers($user_id: uuid!) {
    user_phone_number(where: { user_id: { _eq: $user_id } }) {
      pk
      phone_number
      status
    }
    get_tg_auth_flow_id {
      flow_id
    }
  }
`);

const REQUEST_2FA_MUTATION = graphql(`
  mutation Request2FA($flow_id: String!, $phone_number: String!) {
    request_2fa(arg1: { flow_id: $flow_id, phone_number: $phone_number }) {
      error_text
      flow_run_id
      status
    }
  }
`);

const CONFIRM_2FA_MUTATION = graphql(`
  mutation Confirm2FA($flow_run_id: String!, $phone_number: String!, $code_2fa: String!, $cloud_password: String) {
    confirm_2fa(
      arg1: {
        code_2fa: $code_2fa
        flow_run_id: $flow_run_id
        phone_number: $phone_number
        cloud_password: $cloud_password
      }
    ) {
      status
      error_text
    }
  }
`);

const REMOVE_PHONE_NUMBER = graphql(`
  mutation RemoveUserPhone($pk: bigint!) {
    update_user_phone_number_by_pk(pk_columns: { pk: $pk }, _set: { status: "deleted" }) {
      pk
    }
  }
`);

export const usePhoneNumberListLogic = () => {
  const auth = useAuth();
  const userId = auth?.session?.data?.userId;

  const getUserPhoneNumbersQuery = useQuery(GET_PHONE_NUMBERS, {
    variables: { user_id: userId },
    skip: !userId,
  });

  const tgAuthFlowId = getUserPhoneNumbersQuery.data?.get_tg_auth_flow_id?.flow_id;

  const request2FAMutation = useMutation(REQUEST_2FA_MUTATION, { onError: errorHandler });
  const confirm2FAMutation = useMutation(CONFIRM_2FA_MUTATION, {
    onError: errorHandler,
    onCompleted: () => {
      getUserPhoneNumbersQuery.refetch();
    },
  });
  const removePhoneNumberMutation = useMutation(REMOVE_PHONE_NUMBER, { onError: errorHandler });

  const onRequest2FA = async (phone_number: string) => {
    await request2FAMutation[0]({ variables: { phone_number, flow_id: tgAuthFlowId! } });
  };

  const onConfirm2FA = async (phone_number: string, code_2fa: string, cloud_password?: string) => {
    await confirm2FAMutation[0]({
      variables: {
        code_2fa,
        cloud_password,
        phone_number,
        flow_run_id: request2FAMutation[1].data?.request_2fa?.flow_run_id!,
      },
    });
  };

  const onRemovePhoneNumber = async (phoneNumberPk: string) => {
    await removePhoneNumberMutation[0]({ variables: { pk: phoneNumberPk } });
  };

  return {
    loadings: {
      isPhoneNumberSubmitting: request2FAMutation[1].loading,
      is2FASubmitting: confirm2FAMutation[1].loading,
    },
    phoneNumbers: (getUserPhoneNumbersQuery.data?.user_phone_number || []).map((item) => ({
      pk: item.pk ?? "",
      phone_number: item.phone_number ?? "",
      status: item.status ?? undefined,
    })),
    getUserPhoneNumbersQuery,
    request2FAMutation,
    confirm2FAMutation,
    removePhoneNumberMutation,
    onRequest2FA,
    onConfirm2FA,
    onRemovePhoneNumber,
  };
};
