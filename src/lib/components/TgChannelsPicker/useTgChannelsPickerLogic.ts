import { DocumentType, graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { usePhoneNumberListLogic } from "@/lib/components/PhoneNumberList/usePhoneNumberListLogic";
import { LS_KEY_CHECKED_TG_CHANNELS } from "@/lib/consts";
import errorHandler from "@/lib/error-handler";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const AVALIABLE_TG_CHANNELS = graphql(`
  query TgChannels($title_search: String!) {
    tg_channels(arg1: { title_search: $title_search }) {
      channels {
        tg_channel_id: channel_id
        tg_channel_title: title
        phone_numbers
      }
    }
  }
`);

const TRACKED_TG_CHANNELS = graphql(`
  query TrackedTgChannels($user_id: uuid!) {
    user_tg_channel(where: { user_id: { _eq: $user_id } }, order_by: { tg_channel_title: asc }) {
      tg_channel_id
      tg_channel_title
    }
  }
`);

const TRACK_TG_CHANNEL = graphql(`
  mutation TrackTgChannel($phone_numbers: [String!]!, $tg_channel_id: String!, $tg_channel_title: String!) {
    track_tg_channel(
      arg1: { phone_numbers: $phone_numbers, tg_channel_id: $tg_channel_id, tg_channel_title: $tg_channel_title }
    ) {
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

export type TgChannelListItem = Omit<
  NonNullable<DocumentType<typeof AVALIABLE_TG_CHANNELS>["tg_channels"]>["channels"][number],
  "__typename"
> & { is_tracked: boolean; is_checked?: boolean };

export const useTgChannelsPickerLogic = (props: {
  phoneNumberListLogic: ReturnType<typeof usePhoneNumberListLogic>;
}) => {
  const auth = useAuth();
  const [checkedTgChannelIds, setCheckedTgChannelIds] = useState<string[]>(() =>
    typeof localStorage !== "undefined"
      ? (localStorage.getItem(LS_KEY_CHECKED_TG_CHANNELS) &&
          JSON.parse(localStorage.getItem(LS_KEY_CHECKED_TG_CHANNELS) || "")) ||
        []
      : []
  );
  const [titleSearch, setTitleSearch] = useState<string | undefined>();
  const userId = auth.session?.data?.userId!;
  const trackedTgChannelsQuery = useQuery(TRACKED_TG_CHANNELS, {
    skip: !auth.session?.data?.accessToken,
    variables: {
      user_id: auth.session?.data?.userId!,
    },
  });
  const getTelegramChannelsQuery = useQuery(AVALIABLE_TG_CHANNELS, {
    skip: !auth.session?.data?.accessToken || trackedTgChannelsQuery.loading || !titleSearch,
    variables: {
      title_search: titleSearch!,
    },
    fetchPolicy: "cache-first",
  });

  const trackTgChannelMutation = useMutation(TRACK_TG_CHANNEL, { onError: errorHandler });
  const untrackTgChannelMutation = useMutation(UNTRACK_TG_CHANNEL, { onError: errorHandler });
  const trackedChannels: TgChannelListItem[] = (trackedTgChannelsQuery.data?.user_tg_channel || []).map((item) => ({
    ...item,
    phone_numbers: [],
    is_tracked: true,
    is_checked: checkedTgChannelIds.includes(`${item.tg_channel_id}`),
  }));
  const foundChannels: TgChannelListItem[] = (getTelegramChannelsQuery.data?.tg_channels?.channels || []).map(
    (item) => ({
      ...item,
      is_tracked: !!trackedChannels.find(
        (trackedTgChannel) => trackedTgChannel.tg_channel_id.toString() === item.tg_channel_id.toString()
      ),
    })
  );

  const onTrackToggle = async (channel: TgChannelListItem) => {
    if (channel.is_tracked) {
      await untrackTgChannelMutation[0]({
        variables: { tg_channel_id: channel.tg_channel_id, user_id: userId },
      });
    } else {
      await trackTgChannelMutation[0]({
        variables: {
          phone_numbers: channel.phone_numbers,
          tg_channel_id: channel.tg_channel_id,
          tg_channel_title: channel.tg_channel_title,
        },
      });
    }
    await trackedTgChannelsQuery.refetch();
    onCheckToggle(channel, !channel.is_tracked);
  };

  const onCheckToggle = (channel: TgChannelListItem, isChecked: boolean) => {
    if (typeof localStorage !== "undefined") {
      const newChannelsIdsSet = new Set(checkedTgChannelIds);
      if (isChecked) {
        newChannelsIdsSet.add(`${channel.tg_channel_id}`);
      } else {
        newChannelsIdsSet.delete(`${channel.tg_channel_id}`);
      }
      const newChannelsIds = Array.from(newChannelsIdsSet);
      localStorage.setItem(LS_KEY_CHECKED_TG_CHANNELS, JSON.stringify(newChannelsIds));
      console.log("LS SET ITEM WTF", LS_KEY_CHECKED_TG_CHANNELS, JSON.stringify(newChannelsIds));
      setCheckedTgChannelIds(newChannelsIds);
    }
  };

  const prevPhoneList = props.phoneNumberListLogic.getUserPhoneNumbersQuery.previousData?.config__tg_bot_session_pool;
  const newPhoneList = props.phoneNumberListLogic.getUserPhoneNumbersQuery.data?.config__tg_bot_session_pool;

  useEffect(() => {
    const isShallRefetchTrackedChannels = prevPhoneList && newPhoneList && prevPhoneList.length !== newPhoneList.length;

    if (isShallRefetchTrackedChannels) {
      trackedTgChannelsQuery.refetch();
    }
  }, [prevPhoneList, newPhoneList, trackedTgChannelsQuery]);

  const onSearchClick = (searchTerm: string) => {
    setTitleSearch(searchTerm);
  };

  const isNoChannelsFound = Boolean(!getTelegramChannelsQuery.loading && !!titleSearch && foundChannels.length < 1);

  return {
    foundChannels,
    trackedChannels,
    trackedTgChannelsQuery,
    getTelegramChannelsQuery,
    trackTgChannelMutation,
    untrackTgChannelMutation,
    loadings: {
      isSomeChannelToggling: trackTgChannelMutation[1].loading || untrackTgChannelMutation[1].loading,
      isSearching: getTelegramChannelsQuery.loading,
    },
    isNoChannelsFound,
    titleSearch,
    onTrackToggle,
    onSearchClick,
    onCheckToggle,
  };
};
