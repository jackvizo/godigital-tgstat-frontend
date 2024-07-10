import { useMutation, useQuery } from "@apollo/client";
import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { DocumentType } from "@/generated/gql";
import errorHandler from "@/lib/error-handler";
import { usePhoneNumberListLogic } from "@/lib/components/PhoneNumberList/usePhoneNumberListLogic";
import { useEffect } from "react";

const GET_TELEGRAM_CHANNELS = graphql(`
  query TgChannels {
    tg_channels {
      channels {
        channel_id
        title
        is_tracked
        phone_number
      }
    }
  }
`);

const TRACK_TG_CHANNEL = graphql(`
  mutation TrackTgChannel($phone_number: String!, $tg_channel_id: bigint!, $user_id: uuid!) {
    insert_user_tg_channel_one(
      object: { phone_number: $phone_number, tg_channel_id: $tg_channel_id, user_id: $user_id }
    ) {
      phone_number
      tg_channel_id
      user_id
    }
  }
`);

const UNTRACK_TG_CHANNEL = graphql(`
  mutation UntrackTgChannel($phone_number: String!, $user_id: uuid!, $tg_channel_id: bigint!) {
    delete_user_tg_channel(
      where: {
        phone_number: { _eq: $phone_number }
        user_id: { _eq: $user_id }
        tg_channel_id: { _eq: $tg_channel_id }
      }
    ) {
      affected_rows
    }
  }
`);

export type TgChannelListItem = NonNullable<
  DocumentType<typeof GET_TELEGRAM_CHANNELS>["tg_channels"]
>["channels"][number];

export const useTgChannelsPickerLogic = (props: {
  phoneNumberListLogic: ReturnType<typeof usePhoneNumberListLogic>;
}) => {
  const auth = useAuth();
  const userId = auth.session?.data?.userId!;
  const getTelegramChannelsQuery = useQuery(GET_TELEGRAM_CHANNELS, {
    skip: !auth.session?.data?.accessToken,
    fetchPolicy: "cache-first",
  });

  const trackTgChannelMutation = useMutation(TRACK_TG_CHANNEL, { onError: errorHandler });
  const untrackTgChannelMutation = useMutation(UNTRACK_TG_CHANNEL, { onError: errorHandler });
  const channels = getTelegramChannelsQuery.data?.tg_channels?.channels || [];

  const onTrackToggle = async (channel: TgChannelListItem) => {
    const variables = { phone_number: channel.phone_number, tg_channel_id: channel.channel_id, user_id: userId };
    if (channel.is_tracked) {
      await untrackTgChannelMutation[0]({
        variables,
      });
    } else {
      await trackTgChannelMutation[0]({
        variables,
      });
    }
    await getTelegramChannelsQuery.refetch();
  };

  const prevPhoneList = props.phoneNumberListLogic.getUserPhoneNumbersQuery.previousData?.user_phone_number;
  const newPhoneList = props.phoneNumberListLogic.getUserPhoneNumbersQuery.data?.user_phone_number;

  useEffect(() => {
    const isShallRefetchChannels = prevPhoneList && newPhoneList && prevPhoneList.length !== newPhoneList.length;

    if (isShallRefetchChannels) {
      getTelegramChannelsQuery.refetch();
    }
  }, [prevPhoneList, newPhoneList, getTelegramChannelsQuery]);

  return {
    channels,
    getTelegramChannelsQuery,
    trackTgChannelMutation,
    untrackTgChannelMutation,
    loadings: { isSomeChannelToggling: trackTgChannelMutation[1].loading || untrackTgChannelMutation[1].loading },
    onTrackToggle,
  };
};
