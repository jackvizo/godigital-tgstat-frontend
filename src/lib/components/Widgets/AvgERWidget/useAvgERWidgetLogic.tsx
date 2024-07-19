import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';

export const AVG_ER_QUERY = graphql(`
  query ERAvg($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {
    stat_user_aggregate(
      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }
    ) {
      aggregate {
        count(columns: pk)
      }
    }
    stat_post_info_aggregate(where: { date_of_post: { _gte: $from_date, _lte: $to_date, tg_channel_id: { _in: $tg_channel_ids } } }) {
      aggregate {
        sum {
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
    skip: !auth?.session?.data?.accessToken,
    variables: {
      from_date: props.startDate,
      to_date: props.endDate,
      tg_channel_ids: props.tgChannelIds
    },
  });

  const usersCount = Number(avgErQuery?.data?.stat_user_aggregate?.aggregate?.count);
  const views = Number(avgErQuery?.data?.stat_post_aggregate?.aggregate?.sum?.views);
  const avgEr = !isNaN(usersCount) && !isNaN(views) && views > 0 ? ((usersCount / views) * 100) : 0

  return {
    avgErQuery,
    avgEr,
  };
}
