// src/lib/components/Widgets/UnsubscribesBySourceWidget/useUnsubscribesBySourceWidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import moment from 'moment';

const UNSUBSCRIBES_BY_SOURCE_QUERY = graphql(`
  query UnsubscribesUsersByLinksAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {
    without_link: stat_user_aggregate(
      where: {
        tg_channel_id: { _in: $tg_channel_ids }
        left_at: { _gte: $start_date, _lte: $end_date }
        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]
      }
    ) {
      aggregate {
        count
      }
    }
    with_link: stat_user_aggregate(
      where: {
        tg_channel_id: { _in: $tg_channel_ids }
        left_at: { _gte: $start_date, _lte: $end_date }
        is_joined_by_link: { _eq: true }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`);

export interface UseUnsubscribesBySourceWidgetLogicProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function useUnsubscribesBySourceWidgetLogic({ tgChannelIds, fromDate, toDate }: UseUnsubscribesBySourceWidgetLogicProps) {
  const { loading, error, data } = useQuery(UNSUBSCRIBES_BY_SOURCE_QUERY, {
    variables: {
      end_date: moment(toDate).format('YYYY-MM-DDTHH:mm:ssZ'),
      start_date: moment(fromDate).format('YYYY-MM-DDTHH:mm:ssZ'),
      tg_channel_ids: tgChannelIds
    },
  });

  return {
    loading,
    error,
    data: data ? { with_link: data?.with_link?.aggregate?.count, without_link: data?.without_link?.aggregate?.count } : { with_link: 0, without_link: 0 },
  };
}
