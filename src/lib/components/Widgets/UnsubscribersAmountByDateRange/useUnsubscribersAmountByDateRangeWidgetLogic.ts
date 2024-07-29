import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { DashboardFilters } from "@/lib/components/DashboardFilters/useDashboardFiltersLogic";
import { useQuery } from "@apollo/client";

export const UNSUBSCRIBERS_BY_DATE_RANGE_QUERY = graphql(`
  query UnsubscribersAmountByDateRage($end_date: timestamp!, $start_date: timestamp!, $tg_channel_ids: [bigint!]) {
    stat_user_aggregate(
      where: {
        left_at: { _is_null: false, _lte: $end_date, _gte: $start_date }
        tg_channel_id: { _in: $tg_channel_ids }
      }
    ) {
      aggregate {
        count(columns: pk)
      }
    }
  }
`);

export interface UseUnsubscribersAmountWidgetLogicProps extends DashboardFilters {}

export function useUnsubscribersAmountWidgetLogic(props: UseUnsubscribersAmountWidgetLogicProps) {
  const auth = useAuth();
  const unsubscribersAmountByDateRangeQuery = useQuery(UNSUBSCRIBERS_BY_DATE_RANGE_QUERY, {
    skip: !auth.session?.data?.accessToken || props.tgChannelIds.length < 1 || !props.utcStartDate || !props.utcEndDate,
    variables: {
      end_date: props.utcEndDate,
      start_date: props.utcStartDate,
      tg_channel_ids: props.tgChannelIds,
    },
  });

  return {
    unsubscribersAmountByDateRangeQuery,
    unsubscribersAmount: unsubscribersAmountByDateRangeQuery?.data?.stat_user_aggregate?.aggregate?.count ?? 0,
  };
}
