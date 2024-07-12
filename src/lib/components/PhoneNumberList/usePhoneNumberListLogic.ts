import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import errorHandler from "@/lib/error-handler";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const _crotch_AVALIABLE_TG_CHANNELS = graphql(`
  query TgChannels($title_search: String!) {
    tg_channels(arg1: { title_search: $title_search }) {
      channels {
        channel_id
        title
        phone_numbers
      }
    }
  }
`);

const _crotch_TRACKED_TG_CHANNELS = graphql(`
  query TrackedTgChannels($user_id: uuid!) {
    user_tg_channel(where: { user_id: { _eq: $user_id } }) {
      tg_channel_id
      user_id
    }
  }
`);

const _crotch_TRACK_TG_CHANNEL = graphql(`
  mutation TrackTgChannel($phone_numbers: [String!]!, $tg_channel_id: String!) {
    track_tg_channel(arg1: { phone_numbers: $phone_numbers, tg_channel_id: $tg_channel_id }) {
      success
    }
  }
`);

const _crotch_UNTRACK_TG_CHANNEL = graphql(`
  mutation UntrackTgChannel($user_id: uuid!, $tg_channel_id: bigint!) {
    delete_user_tg_channel(where: { user_id: { _eq: $user_id }, tg_channel_id: { _eq: $tg_channel_id } }) {
      affected_rows
    }
  }
`);

const GET_PHONE_NUMBERS = graphql(`
  query GetUserPhoneNumbers($user_id: uuid!) {
    config__tg_bot_session_pool(where: { user_id: { _eq: $user_id } }) {
      pk
      phone_number
      status
    }
    get_tg_auth_deployment_id {
      deployment_id
    }
  }
`);

const GET_FLOW_RUN_STATE = graphql(`
  query FlowRunState($flow_run_id: String!) {
    flow_run(arg1: { flow_run_id: $flow_run_id }) {
      state
    }
  }
`);

const REQUEST_2FA_MUTATION = graphql(`
  mutation Request2FA($deployment_id: String!, $phone_number: String!, $api_hash: String!, $api_id: String!) {
    request_2fa(
      arg1: { deployment_id: $deployment_id, phone_number: $phone_number, api_hash: $api_hash, api_id: $api_id }
    ) {
      error_text
      flow_run_id
      status
    }
  }
`);

const CONFIRM_2FA_MUTATION = graphql(`
  mutation Confirm2FA($flow_run_id: String!, $code_2fa: String!, $cloud_password: String) {
    confirm_2fa(arg1: { code_2fa: $code_2fa, flow_run_id: $flow_run_id, cloud_password: $cloud_password }) {
      status
      error_text
    }
  }
`);

const REMOVE_PHONE_NUMBER = graphql(`
  mutation DeletePhoneNumber($phone_number: String!) {
    delete_config__tg_bot_session_pool(where: { phone_number: { _eq: $phone_number } }) {
      affected_rows
    }
  }
`);

export const usePhoneNumberListLogic = () => {
  const auth = useAuth();
  const userId = auth?.session?.data?.userId;

  const [addingStep, setAddingStep] = useState<"idle" | "request2fa" | "confirm2fa" | "done">("idle");
  const [isFlowRunPolling, setIsFlowRunPolling] = useState(false);

  const getUserPhoneNumbersQuery = useQuery(GET_PHONE_NUMBERS, {
    variables: { user_id: userId },
    skip: !userId,
    fetchPolicy: "cache-and-network",
  });

  const request2FAMutation = useMutation(REQUEST_2FA_MUTATION, {
    onError: errorHandler,
    onCompleted: (data) => {
      {
        if (data.request_2fa?.status !== "error") {
          setIsFlowRunPolling(true);
        }
        if (data.request_2fa?.status === "error") {
          errorHandler(data.request_2fa.error_text);
        }
      }
    },
  });

  const confirm2FAMutation = useMutation(CONFIRM_2FA_MUTATION, {
    onError: errorHandler,
    onCompleted: (data) => {
      if (data.confirm_2fa?.status !== "error") {
        setIsFlowRunPolling(true);
      }
      if (data.confirm_2fa?.status === "error") {
        errorHandler(data.confirm_2fa.error_text);
      }
    },
  });

  const flowRunId = request2FAMutation[1].data?.request_2fa?.flow_run_id;
  const tgAuthDeploymentId = getUserPhoneNumbersQuery.data?.get_tg_auth_deployment_id?.deployment_id;

  const flowRunStateQuery = useQuery(GET_FLOW_RUN_STATE, {
    pollInterval: 1000,
    skip: !flowRunId || !isFlowRunPolling,
    variables: { flow_run_id: flowRunId! },
  });

  useEffect(() => {
    if (addingStep === "request2fa" && flowRunStateQuery.data?.flow_run?.state === "PAUSED") {
      setIsFlowRunPolling(false);
      setAddingStep("confirm2fa");
    }
    if (addingStep === "confirm2fa" && flowRunStateQuery.data?.flow_run?.state === "COMPLETED") {
      setIsFlowRunPolling(false);
      getUserPhoneNumbersQuery.refetch();
      setAddingStep("done");
    }
    if (addingStep === "idle") {
      setIsFlowRunPolling(false);
    }
  }, [flowRunStateQuery.data?.flow_run?.state, addingStep]);

  const onRequest2FA = async (args: { phoneNumber: string; apiHash: string; apiId: string }) => {
    setAddingStep("request2fa");
    await request2FAMutation[0]({
      variables: {
        phone_number: args.phoneNumber,
        api_hash: args.apiHash,
        api_id: args.apiId,
        deployment_id: tgAuthDeploymentId!,
      },
    });
  };

  const onConfirm2FA = async (args: { code2fa: string; cloudPassword?: string }) => {
    await confirm2FAMutation[0]({
      variables: {
        flow_run_id: request2FAMutation[1].data?.request_2fa?.flow_run_id!,
        code_2fa: args.code2fa,
        cloud_password: args.cloudPassword,
      },
    });
  };

  const removePhoneNumberMutation = useMutation(REMOVE_PHONE_NUMBER, {
    onError: errorHandler,
  });

  const onRemovePhoneNumber = async (phoneNumber: string) => {
    await removePhoneNumberMutation[0]({ variables: { phone_number: phoneNumber } });
    await getUserPhoneNumbersQuery.refetch();
  };

  const phoneNumbers = (getUserPhoneNumbersQuery.data?.config__tg_bot_session_pool || []).map((item) => ({
    pk: item.pk ?? "",
    phone_number: item.phone_number ?? "",
    status: item.status ?? undefined,
  }));

  const resetAdd = () => {
    setAddingStep("idle");
    setIsFlowRunPolling(false);
    request2FAMutation[1].reset();
    confirm2FAMutation[1].reset();
  };

  const request2faError = !!(
    request2FAMutation[1].error ||
    request2FAMutation[1].data?.request_2fa?.status === "error" ||
    request2FAMutation[1]?.data?.request_2fa?.error_text
  );

  const confirm2faError = !!(
    confirm2FAMutation[1].error ||
    confirm2FAMutation[1].data?.confirm_2fa?.status === "error" ||
    confirm2FAMutation[1].data?.confirm_2fa?.error_text
  );

  useEffect(() => {
    if (request2faError || confirm2faError) {
      setIsFlowRunPolling(false);
    }
  }, [request2faError, confirm2faError]);

  return {
    loadings: {
      isPhoneNumberSubmitting: addingStep === "request2fa" && (request2FAMutation[1].loading || isFlowRunPolling),
      is2FASubmitting: addingStep === "confirm2fa" && (confirm2FAMutation[1].loading || isFlowRunPolling),
    },
    errors: {
      request2fa: request2faError,
      confirm2fa: confirm2faError,
    },
    addingStep,
    phoneNumbers,
    getUserPhoneNumbersQuery,
    request2FAMutation,
    confirm2FAMutation,
    removePhoneNumberMutation,
    resetAdd,
    onRequest2FA,
    onConfirm2FA,
    onRemovePhoneNumber,
  };
};
