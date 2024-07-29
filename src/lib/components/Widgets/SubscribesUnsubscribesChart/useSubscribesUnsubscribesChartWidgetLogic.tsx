import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';
import { TimeUnit } from 'chart.js';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { fillMissingDates } from '@/lib/helpers/fill-missing-dates';
import dayjs from 'dayjs';

export const SUBSCRIBES_CHART_QUERY = graphql(`
  query SubscribesChart($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {
    user_signups_by_period(
      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }
    ) {
      count
      time_bucket
    }
  }
`);

export const UNSUBSCRIBES_CHART_QUERY = graphql(`
  query UnsubscribesChart($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {
    user_unsubscribes_by_period(
      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }
    ) {
      count
      time_bucket
    }
  }
`);

export interface UseSubscribesUnsubscribesChartWidgetLogicProps extends DashboardFilters {
  displayedCharts?: ('subscribes' | 'unsubscribes')[]
}

const remapTimePriod = (period: TimeUnit | undefined, utcStartDate: string | undefined, utcEndDate: string | undefined): TimeUnit => {
  if (period !== undefined) {
    if (period === 'day') return 'hour';
    if (period === 'week') return 'day';
    if (period === 'month') return 'day';
    if (period === 'year') return 'month';
    return period;
  }

  const start = dayjs(utcStartDate);
  const end = dayjs(utcEndDate);
  const diffInDays = end.diff(start, 'day');

  if (diffInDays <= 1) {
    return 'hour';
  } else if (diffInDays <= 7) {
    return 'day';
  } else if (diffInDays <= 30) {
    return 'week';
  } else if (diffInDays <= 365) {
    return 'month';
  } else {
    return 'year';
  }
};

export function useSubscribesUnsubscribesChartWidgetLogic(props: UseSubscribesUnsubscribesChartWidgetLogicProps) {
  const auth = useAuth();
  const skip = !auth?.session?.data?.accessToken || props.tgChannelIds.length < 1

  const period = remapTimePriod(props.timePeriod, props.utcStartDate, props.utcEndDate);
  const variables = {
    start_date: props.utcStartDate,
    end_date: props.utcEndDate,
    time_period: period,
    tg_channel_ids: `{${props.tgChannelIds.join(',')}}`
  };

  const subscribesQuery = useQuery(SUBSCRIBES_CHART_QUERY, {
    skip: skip || (props.displayedCharts && !props.displayedCharts.includes('subscribes')),
    variables,
  });
  const subscribesSeries = (subscribesQuery?.data?.user_signups_by_period ?? []).map(item => ({ x: item.time_bucket, y: item.count }))

  const unsubscribesQuery = useQuery(UNSUBSCRIBES_CHART_QUERY, {
    skip: skip || (props.displayedCharts && !props.displayedCharts.includes('unsubscribes')),
    variables,
  });
  const unsubscribesSeries = (unsubscribesQuery?.data?.user_unsubscribes_by_period ?? []).map(item => ({ x: item.time_bucket, y: item.count }))

  const subscribesChart = fillMissingDates(subscribesSeries, props.utcStartDate, props.utcEndDate, period).map(item => item.y);
  const unsubscribesChart = fillMissingDates(unsubscribesSeries, props.utcStartDate, props.utcEndDate, period).map(item => item.y);

  const labels = fillMissingDates([], props.utcStartDate, props.utcEndDate, period).map(item => item.x);
  return {
    subscribesSeries,
    unsubscribesSeries,
    subscribesQuery,
    unsubscribesQuery,
    subscribesChart,
    unsubscribesChart,
    labels,
    period
  };
}
