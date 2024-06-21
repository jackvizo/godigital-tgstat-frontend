// src/lib/components/Widgets/TotalSubscribersWidget/useTotalSubscribersWidgetLogic.tsx
import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { useQuery } from "@apollo/client";

const TOTAL_SUBSCRIBERS_QUERY = graphql(`
  query TotalSubscribers($tg_channel_id: [bigint!]) {
    stat_user_aggregate(where: { left_at: { _is_null: true }, tg_channel_id: { _in: $tg_channel_id } }) {
      aggregate {
        count(columns: pk)
      }
    }
  }
`);

export interface UseTotalSubscribersWidgetLogicProps {
  tgChannelIds: number[];
}

export function useTotalSubscribersWidgetLogic({ tgChannelIds }: UseTotalSubscribersWidgetLogicProps) {
  const auth = useAuth();
  const { loading, error, data } = useQuery(TOTAL_SUBSCRIBERS_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      tg_channel_id: tgChannelIds,
    },
  });

  return {
    loading,
    error,
    data: data ? data?.stat_user_aggregate.aggregate?.count : null,
  };
}
