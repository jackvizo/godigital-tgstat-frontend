import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';

export const AVG_ER_QUERY = graphql(`
query ERAvg($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {
  stat_channel_aggregate(where: {timestamp: {_gte: $from_date, _lte: $to_date}, tg_channel_id: {_in: $tg_channel_ids}}) {
    aggregate {
      sum {
        total_participants
      }
    }
  }
  stat_post_aggregate(where: {timestamp: {_gte: $from_date, _lte: $to_date}, tg_channel_id: {_in: $tg_channel_ids}}) {
    aggregate {
      avg {
        views
      }
    }
  }
}
`);

export interface UseAvgERWidgetLogicProps extends DashboardFilters {
}

export function useAvgERWidgetLogic(props: UseAvgERWidgetLogicProps) {
  const auth = useAuth();
  const avgErQuery = useQuery(AVG_ER_QUERY, {
    skip: !auth?.session?.data?.accessToken || props.tgChannelIds.length < 1 || !props.utcStartDate || !props.utcEndDate,
    variables: {
      from_date: props.utcStartDate,
      to_date: props.utcEndDate,
      tg_channel_ids: props.tgChannelIds
    },
  });

  const usersCount = Number(avgErQuery?.data?.stat_channel_aggregate?.aggregate?.sum?.total_participants);
  const views = Number(avgErQuery?.data?.stat_post_aggregate?.aggregate?.avg?.views);

  const avgEr = (!isNaN(usersCount) && !isNaN(views) && views > 0 && usersCount > 0) ? ((views / usersCount) * 100) : 0

  return {
    avgErQuery,
    avgEr,
  };
}
