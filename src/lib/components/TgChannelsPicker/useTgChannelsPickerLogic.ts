import { useQuery } from "@apollo/client";
import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";

const GET_TELEGRAM_CHANNELS = graphql(`
  query GetTelegramChannels($user_id: uuid!) {
    user(where: { id: { _eq: $user_id } }) {
      user_tg_channels {
        tg_channel_id
      }
    }
  }
`);

export const useTgChannelsPickerLogic = () => {
  const auth = useAuth();
  const userId = auth?.session?.data?.userId;
  const getTelegramChannelsQuery = useQuery(GET_TELEGRAM_CHANNELS, {
    variables: { user_id: userId },
    skip: !auth.session?.data?.accessToken,
  });

  const channels =
    getTelegramChannelsQuery.data?.user[0]?.user_tg_channels.map((channel) => ({
      tg_channel_id: channel.tg_channel_id,
    })) || [];

  return {
    channels,
    getTelegramChannelsQuery,
  };
};
