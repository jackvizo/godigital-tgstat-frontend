// src/lib/components/Widgets/UnsubscribesWidget/useUnsubscribesWidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';
import moment from 'moment';

const UNSUBSCRIPTIONS_QUERY = graphql(`
  query UnsubscriptionsCount($tg_channel_id: [bigint!], $from_date: timestamp!, $to_date: timestamp!) {
    stat_user_aggregate(
      where: {
        joined_at: { _gte: $from_date, _lte: $to_date },
        tg_channel_id: { _in: $tg_channel_id },
        left_at: { _is_null: false }
      }
    ) {
      aggregate {
        count(columns: pk)
      }
    }
  }
`);

export interface UseUnsubscribesWidgetLogicProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function useUnsubscribesWidgetLogic({ tgChannelIds, fromDate, toDate }: UseUnsubscribesWidgetLogicProps) {
  const auth = useAuth();
  const { loading, error, data } = useQuery(UNSUBSCRIPTIONS_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      tg_channel_id: tgChannelIds,
      from_date: moment(fromDate).format('YYYY-MM-DDTHH:mm:ssZ'),
      to_date: moment(toDate).format('YYYY-MM-DDTHH:mm:ssZ')
    },
  });

  return {
    loading,
    error,
    data: data ? data?.stat_user_aggregate?.aggregate?.count : null,
  };
}
