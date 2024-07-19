import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useAuth } from '@/lib/auth/use-auth';

export const ER24_QUERY = graphql(`
  query ER24($tg_channel_ids: [bigint!]!) {
    stat_post_info_aggregate(where: { tg_channel_id: { _in: $tg_channel_ids } }) {
      aggregate {
        sum {
          view_24h
          views
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
    skip: !auth?.session?.data?.accessToken || props.tgChannelIds.length < 1,
    variables: {
      tg_channel_ids: props.tgChannelIds,
    },
  });

  const views24 = er24Query?.data?.stat_post_info_aggregate?.aggregate?.sum?.view_24h ?? 0;
  const viewsTotal = er24Query?.data?.stat_post_info_aggregate?.aggregate?.sum?.views ?? 0;

  const er24Percent = (viewsTotal > 0 ? views24 / viewsTotal : 0) * 100

  return {
    er24Query,
    er24Percent
  };
}
