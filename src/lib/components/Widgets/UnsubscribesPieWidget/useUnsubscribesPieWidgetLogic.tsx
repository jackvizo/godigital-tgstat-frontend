// src/lib/components/Widgets/UnsubscribesBySourceWidget/useUnsubscribesPieWidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';

const AGGREGATES_QUERY = graphql(`
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

export interface useUnsubscribesPieWidgetLogicProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function useUnsubscribesPieWidgetLogic({ tgChannelIds, fromDate, toDate }: useUnsubscribesPieWidgetLogicProps) {
  const { loading, error, data } = useQuery(AGGREGATES_QUERY, {
    variables: {
      end_date: toDate,
      start_date: fromDate,
      tg_channel_ids: tgChannelIds
    },
  });

  return {
    loading,
    error,
    data
  };
}
