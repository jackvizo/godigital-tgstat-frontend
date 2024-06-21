// src/lib/components/Widgets/SignupsUnsubscribesChart/useSignupsUnsubscribesChartLogic.tsx
import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';
import moment from 'moment';

const SIGNUPS_QUERY = graphql(`
  query SignupsByPeriod1($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {
    user_signups_by_period(
      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }
    ) {
      count
      time_bucket
    }
  }
`);

const UNSUBSCRIBES_QUERY = graphql(`
  query UnsubscribesByPeriod($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {
    user_unsubscribes_by_period(
      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }
    ) {
      count
      time_bucket
    }
  }
`);

export interface UseSignupsUnsubscribesChartLogicProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
  timePeriod: string;
}

export function useSignupsUnsubscribesChartLogic({ tgChannelIds, fromDate, toDate, timePeriod }: UseSignupsUnsubscribesChartLogicProps) {
  const auth = useAuth();

  const { loading: signupsLoading, error: signupsError, data: signupsData } = useQuery(SIGNUPS_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      end_date: toDate,
      start_date: fromDate,
      time_period: timePeriod,
      tg_channel_ids: `{${tgChannelIds.join(',')}}`
    },
  });

  const { loading: unsubscribesLoading, error: unsubscribesError, data: unsubscribesData } = useQuery(UNSUBSCRIBES_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      end_date: toDate,
      start_date: fromDate,
      time_period: timePeriod,
      tg_channel_ids: `{${tgChannelIds.join(',')}}`
    },
  });

  return {
    loading: signupsLoading || unsubscribesLoading,
    error: signupsError || unsubscribesError,
    signupsData: signupsData ? signupsData.user_signups_by_period : [],
    unsubscribesData: unsubscribesData ? unsubscribesData.user_unsubscribes_by_period : [],
  };
}
