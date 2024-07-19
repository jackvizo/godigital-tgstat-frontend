import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useAuth } from '@/lib/auth/use-auth';

export const SUBSCRIBES_UNSUBSCRIBES_PIE_AGGREGATES_QUERY = graphql(`
query SubcribesUnsubscribesPieAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {
  subscribes: stat_user_aggregate(
    where: {
      tg_channel_id: { _in: $tg_channel_ids }
      joined_at: { _gte: $start_date, _lte: $end_date }
    }
  ) {
    aggregate {
      count
    }
  }
  unsubscribes: stat_user_aggregate(
    where: {
      tg_channel_id: { _in: $tg_channel_ids }
      left_at: { _gte: $start_date, _lte: $end_date, _is_null: false }
    }
  ) {
    aggregate {
      count
    }
  }
}
`);

export interface useUnsubscribesPieWidgetLogicProps extends DashboardFilters {
}

export function useUnsubscribesPieWidgetLogic(props: useUnsubscribesPieWidgetLogicProps) {
  const auth = useAuth();
  const subscribesUnsubscribesPieAggregatesQuery = useQuery(SUBSCRIBES_UNSUBSCRIBES_PIE_AGGREGATES_QUERY, {
    skip: !auth.session?.data?.accessToken || props.tgChannelIds.length < 1,
    variables: {
      end_date: props.endDate,
      start_date: props.startDate,
      tg_channel_ids: props.tgChannelIds
    },
  });

  const subscribesCount = subscribesUnsubscribesPieAggregatesQuery?.data?.subscribes?.aggregate?.count ?? 0
  const unsubscribesCount = subscribesUnsubscribesPieAggregatesQuery?.data?.unsubscribes?.aggregate?.count ?? 0
  const total = subscribesCount + unsubscribesCount;
  const subscribesPercent = (total > 0 ? subscribesCount / total : 0) * 100
  const unsubscribesPercent = (total > 0 ? unsubscribesCount / total : 0) * 100

  return {
    subscribesUnsubscribesPieAggregatesQuery,
    subscribesCount,
    unsubscribesCount,
    subscribesPercent,
    unsubscribesPercent,
  };
}
