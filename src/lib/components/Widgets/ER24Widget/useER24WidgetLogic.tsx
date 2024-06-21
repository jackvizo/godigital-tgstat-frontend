// src/lib/components/Widgets/ER24Widget/useER24WidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import moment from 'moment';

const ER24_QUERY = graphql(`
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

export interface UseER24WidgetLogicProps {
  tgChannelIds: number[];
  date: Date;
}

export function useER24WidgetLogic({ tgChannelIds, date }: UseER24WidgetLogicProps) {
  const { loading, error, data } = useQuery(ER24_QUERY, {
    variables: {
      tg_channel_ids: tgChannelIds,
      date: moment(date).format('YYYY-MM-DDTHH:mm:ssZ')
    },
  });

  return {
    loading,
    error,
    data: data?.stat_post_aggregate?.aggregate?.sum?.view_24h ?? 0,
  };
}
