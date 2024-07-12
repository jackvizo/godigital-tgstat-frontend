import { DocumentType, graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { usePhoneNumberListLogic } from "@/lib/components/PhoneNumberList/usePhoneNumberListLogic";
import errorHandler from "@/lib/error-handler";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";

const AVALIABLE_TG_CHANNELS = graphql(`
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

const TRACKED_TG_CHANNELS = graphql(`
  query TrackedTgChannels($user_id: uuid!) {
    user_tg_channel(where: { user_id: { _eq: $user_id } }) {
      tg_channel_id
      user_id
    }
  }
`);

const TRACK_TG_CHANNEL = graphql(`
  mutation TrackTgChannel($phone_numbers: [String!]!, $tg_channel_id: String!) {
    track_tg_channel(arg1: { phone_numbers: $phone_numbers, tg_channel_id: $tg_channel_id }) {
      success
    }
  }
`);

const UNTRACK_TG_CHANNEL = graphql(`
  mutation UntrackTgChannel($user_id: uuid!, $tg_channel_id: bigint!) {
    delete_user_tg_channel(where: { user_id: { _eq: $user_id }, tg_channel_id: { _eq: $tg_channel_id } }) {
      affected_rows
    }
  }
`);

export type TgChannelListItem = NonNullable<
  DocumentType<typeof AVALIABLE_TG_CHANNELS>["tg_channels"]
>["channels"][number] & { is_tracked: boolean };

export const useTgChannelsPickerLogic = (props: {
  phoneNumberListLogic: ReturnType<typeof usePhoneNumberListLogic>;
}) => {
  const auth = useAuth();
  const userId = auth.session?.data?.userId!;
  const trackedTgChannelsQuery = useQuery(TRACKED_TG_CHANNELS, {
    skip: !auth.session?.data?.accessToken,
  });
  const getTelegramChannelsQuery = useQuery(AVALIABLE_TG_CHANNELS, {
    skip: !auth.session?.data?.accessToken || trackedTgChannelsQuery.loading,
    fetchPolicy: "cache-first",
  });
  const trackedTgChannels = trackedTgChannelsQuery.data?.user_tg_channel || [];
  const trackTgChannelMutation = useMutation(TRACK_TG_CHANNEL, { onError: errorHandler });
  const untrackTgChannelMutation = useMutation(UNTRACK_TG_CHANNEL, { onError: errorHandler });
  const channels: TgChannelListItem[] = (getTelegramChannelsQuery.data?.tg_channels?.channels || []).map((item) => ({
    ...item,
    is_tracked: !!trackedTgChannels.find(
      (trackedTgChannel) => trackedTgChannel.tg_channel_id.toString() === item.channel_id.toString()
    ),
  }));

  const onTrackToggle = async (channel: TgChannelListItem) => {
    if (channel.is_tracked) {
      await untrackTgChannelMutation[0]({
        variables: { tg_channel_id: channel.channel_id, user_id: userId },
      });
    } else {
      await trackTgChannelMutation[0]({
        variables: { phone_numbers: channel.phone_numbers, tg_channel_id: channel.channel_id },
      });
    }
    await trackedTgChannelsQuery.refetch();
  };

  const prevPhoneList = props.phoneNumberListLogic.getUserPhoneNumbersQuery.previousData?.config__tg_bot_session_pool;
  const newPhoneList = props.phoneNumberListLogic.getUserPhoneNumbersQuery.data?.config__tg_bot_session_pool;

  useEffect(() => {
    const isShallRefetchTrackedChannels = prevPhoneList && newPhoneList && prevPhoneList.length !== newPhoneList.length;

    if (isShallRefetchTrackedChannels) {
      trackedTgChannelsQuery.refetch();
    }
  }, [prevPhoneList, newPhoneList, trackedTgChannelsQuery]);

  return {
    channels,
    trackedTgChannelsQuery,
    getTelegramChannelsQuery,
    trackTgChannelMutation,
    untrackTgChannelMutation,
    loadings: { isSomeChannelToggling: trackTgChannelMutation[1].loading || untrackTgChannelMutation[1].loading },
    onTrackToggle,
  };
};
