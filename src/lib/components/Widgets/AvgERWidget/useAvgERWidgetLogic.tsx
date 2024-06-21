// src/lib/components/Widgets/AvgERWidget/useAvgERWidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';
import moment from 'moment';

const AVG_ER_QUERY = graphql(`
  query ERAvg($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {
    stat_user_aggregate(
      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }
    ) {
      aggregate {
        count(columns: pk)
      }
    }
    stat_post_aggregate(where: { timestamp: { _gte: $from_date, _lte: $to_date } }) {
      aggregate {
        sum {
          views
        }
      }
    }
  }
`);

export interface UseAvgERWidgetLogicProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function useAvgERWidgetLogic({ tgChannelIds, fromDate, toDate }: UseAvgERWidgetLogicProps) {
  const auth = useAuth();
  const { loading, error, data } = useQuery(AVG_ER_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      from_date: moment(fromDate).format('YYYY-MM-DDTHH:mm:ssZ'),
      to_date: moment(toDate).format('YYYY-MM-DDTHH:mm:ssZ'),
      tg_channel_ids: tgChannelIds
    },
  });

  return {
    loading,
    error,
    data: data?.stat_user_aggregate?.aggregate?.count && data?.stat_post_aggregate?.aggregate?.sum?.views ? (data?.stat_user_aggregate?.aggregate?.count / data?.stat_post_aggregate?.aggregate?.sum?.views * 100) : 0,
  };
}
