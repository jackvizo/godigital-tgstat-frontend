// src/lib/components/Widgets/UnsubscriptionRateWidget/useUnsubscriptionRateWidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';
import moment from 'moment';

export const UNSUBSCRIPTION_RATE_QUERY = graphql(`
  query UnsubscriptionRate($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {
    stat_user_aggregate(
      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }
    ) {
      aggregate {
        count(columns: pk)
      }
    }
    stat_post_info_aggregate(where: { date_of_post: { _gte: $from_date, _lte: $to_date } }) {
      aggregate {
        sum {
          views
        }
      }
    }
  }
`);

export interface UseUnsubscriptionRateWidgetLogicProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function useUnsubscriptionRateWidgetLogic({ tgChannelIds, fromDate, toDate }: UseUnsubscriptionRateWidgetLogicProps) {
  const auth = useAuth();
  const { loading, error, data } = useQuery(UNSUBSCRIPTION_RATE_QUERY, {
    skip: !auth?.session?.data?.accessToken || tgChannelIds.length < 1,
    variables: {
      from_date: moment(fromDate).format('YYYY-MM-DDTHH:mm:ssZ'),
      to_date: moment(toDate).format('YYYY-MM-DDTHH:mm:ssZ'),
      tg_channel_ids: tgChannelIds
    },
  });

  return {
    loading,
    error,
    data: data?.stat_user_aggregate?.aggregate ? ((data?.stat_user_aggregate?.aggregate?.count / data?.stat_post_info_aggregate?.aggregate?.sum?.views!) ?? 0) * 100 : null,
  };
}
