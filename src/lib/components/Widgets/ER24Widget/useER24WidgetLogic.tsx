import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useAuth } from '@/lib/auth/use-auth';

export const ER24_QUERY = graphql(`
  query ER24($tg_channel_ids: [bigint!]!, $date: timestamp!) {
    stat_post_aggregate(where: { tg_channel_id: { _in: $tg_channel_ids }, timestamp: { _lte: $date } }) {
      aggregate {
        sum {
          view_24h
        }
      }
    }
  }
`);

export interface UseER24WidgetLogicProps extends DashboardFilters {
}

export function useER24WidgetLogic(props: UseER24WidgetLogicProps) {
  const auth = useAuth();
  const er24Query = useQuery(ER24_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      tg_channel_ids: props.tgChannelIds,
      date: props.startDate
    },
  });

  return {
    er24Query,
    er24Percent: er24Query?.data?.stat_post_aggregate?.aggregate?.sum?.view_24h ?? 0
  };
}
