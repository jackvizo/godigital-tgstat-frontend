import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';
import { TimeUnit } from 'chart.js';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { fillMissingDates } from '@/lib/helpers/fill-missing-dates';

const SUBSCRIBES_CHART_QUERY = graphql(`
  query SubscribesChart($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {
    user_signups_by_period(
      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }
    ) {
      count
      time_bucket
    }
  }
`);

const UNSUBSCRIBES_CHART_QUERY = graphql(`
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

const remapTimePriod = (period: TimeUnit) => {
  if (period === 'day') return 'hour';
  if (period === 'week') return 'day';
  if (period === 'month') return 'day';
  if (period === 'year') return 'month';
  return period
}

export function useSubscribesUnsubscribesChartWidgetLogic(props: UseSubscribesUnsubscribesChartWidgetLogicProps) {
  const auth = useAuth();
  const skip = !auth?.session?.data?.accessToken

  const period = remapTimePriod(props.timePeriod);
  const tgChannelIds = `{${props.tgChannelIds.join(',')}}`;
  const variables = {
    end_date: props.endDate,
    start_date: props.startDate,
    time_period: period,
    tg_channel_ids: tgChannelIds
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

  const subscribesChart = fillMissingDates(subscribesSeries, props.startDate, props.endDate, period).map(item => item.x);
  const unsubscribesChart = fillMissingDates(unsubscribesSeries, props.startDate, props.endDate, period).map(item => item.x);

  const labels = fillMissingDates([], props.startDate, props.endDate, period).map(item => item.x);

  return {
    subscribesQuery,
    unsubscribesQuery,
    subscribesChart,
    unsubscribesChart,
    labels
  };
}
