// src/lib/components/Widgets/UnsubscribesByPeriodWidget/useUnsubscribesByPeriodWidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import moment from 'moment';

const UNSUBSCRIBES_BY_PERIODS_QUERY = graphql(`
  query UnsubscribesByPeriods($start_date: timestamp!, $end_date: timestamp!, $tg_channel_ids: _int8!) {
    unsubscribes_by_periods(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {
      interval_label
      count
      percentage
    }
  }
`);

export interface UseUnsubscribesByPeriodWidgetLogicProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function useUnsubscribesByPeriodWidgetLogic({ tgChannelIds, fromDate, toDate }: UseUnsubscribesByPeriodWidgetLogicProps) {
  const { loading, error, data } = useQuery(UNSUBSCRIBES_BY_PERIODS_QUERY, {
    variables: {
      start_date: fromDate,
      end_date: toDate,
      tg_channel_ids: `{${tgChannelIds.join(',')}}`
    },
  });

  return {
    loading,
    error,
    data: data ? data.unsubscribes_by_periods : [],
  };
}
