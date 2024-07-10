import { useMutation, useQuery } from "@apollo/client";
import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { DocumentType } from "@/generated/gql";
import errorHandler from "@/lib/error-handler";
import { usePhoneNumberListLogic } from "@/lib/components/PhoneNumberList/usePhoneNumberListLogic";
import { useEffect } from "react";

const AVALIABLE_TG_CHANNELS = graphql(`
  query TgChannels {
    tg_channels {
      channels {
        channel_id
        title
        phone_number
      }
    }
  }
`);

const TRACKED_TG_CHANNELS = graphql(`
  query TrackedTgChannels($user_id: uuid!) {
    user_tg_channel(where: { user_id: { _eq: $user_id } }) {
      tg_channel_id
      user_id
      phone_number
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
    await trackedTgChannelsQuery.refetch();
  };

  const prevPhoneList = props.phoneNumberListLogic.getUserPhoneNumbersQuery.previousData?.user_phone_number;
  const newPhoneList = props.phoneNumberListLogic.getUserPhoneNumbersQuery.data?.user_phone_number;

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
