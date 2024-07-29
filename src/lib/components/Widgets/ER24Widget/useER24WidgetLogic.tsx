import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { useState } from 'react';

export const ER24_QUERY = graphql(`
  query ER24($tg_channel_ids: [bigint!]!, $date: timestamp!) {
    stat_post_info(where: { tg_channel_id: { _in: $tg_channel_ids }, date_of_post: { _lte: $date } }, order_by:{ date_of_post:desc }, limit: 1) {
      views
      view_24h
    }
  }
`);

export interface UseER24WidgetLogicProps extends DashboardFilters {
}

export function useER24WidgetLogic(props: UseER24WidgetLogicProps) {
  const auth = useAuth();
  const [dateOfPostLte] = useState(dayjs().subtract(24, 'hours').toISOString())
  const er24Query = useQuery(ER24_QUERY, {
    skip: !auth?.session?.data?.accessToken || props.tgChannelIds.length < 1,
    variables: {
      tg_channel_ids: props.tgChannelIds,
      date: dateOfPostLte
    },
  });

  const views24 = er24Query?.data?.stat_post_info?.[0]?.view_24h ?? 0;
  const viewsTotal = er24Query?.data?.stat_post_info?.[0]?.views ?? 0;

  const er24Percent = (viewsTotal > 0 ? views24 / viewsTotal : 0) * 100

  return {
    er24Query,
    er24Percent
  };
}
