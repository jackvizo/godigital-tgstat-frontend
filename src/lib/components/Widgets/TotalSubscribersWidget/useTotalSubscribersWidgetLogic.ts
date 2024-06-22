import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { useQuery } from "@apollo/client";
import { DashboardFilters } from "@/lib/components/DashboardFilters/useDashboardFiltersLogic";

const TOTAL_SUBSCRIBERS_QUERY = graphql(`
  query TotalSubscribers($tg_channel_id: [bigint!]) {
    stat_user_aggregate(where: { left_at: { _is_null: true }, tg_channel_id: { _in: $tg_channel_id } }) {
      aggregate {
        count(columns: pk)
      }
    }
  }
`);

export interface UseTotalSubscribersWidgetLogicProps extends DashboardFilters {}

export function useTotalSubscribersWidgetLogic(props: UseTotalSubscribersWidgetLogicProps) {
  const auth = useAuth();
  const totalSubscribersQuery = useQuery(TOTAL_SUBSCRIBERS_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      tg_channel_id: props.tgChannelIds,
    },
  });

  return {
    totalSubscribersQuery,
    totalSubscribersAmount: totalSubscribersQuery?.data?.stat_user_aggregate?.aggregate?.count ?? 0,
  };
}
