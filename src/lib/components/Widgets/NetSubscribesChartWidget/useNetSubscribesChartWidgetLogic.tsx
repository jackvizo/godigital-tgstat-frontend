import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { fillMissingDates } from '@/lib/helpers/fill-missing-dates';
import { useSubscribesUnsubscribesChartWidgetLogic } from '../SubscribesUnsubscribesChart/useSubscribesUnsubscribesChartWidgetLogic';

export interface UseNetSubscribesChartWidgetLogicProps extends DashboardFilters {
  subscribesUnsubscribesChartWidgetLogic: ReturnType<typeof useSubscribesUnsubscribesChartWidgetLogic>
}

export function useNetSubscribesChartWidgetLogic(props: UseNetSubscribesChartWidgetLogicProps) {
  const netSeries = props.subscribesUnsubscribesChartWidgetLogic.subscribesSeries.map((subscribe, index) => ({
    x: subscribe.x,
    y: subscribe.y - (props.subscribesUnsubscribesChartWidgetLogic.unsubscribesSeries[index]?.y || 0)
  }));
  const netChart = fillMissingDates(netSeries, props.startDate, props.endDate, props.subscribesUnsubscribesChartWidgetLogic.period).map(item => item.y);
  const labels = fillMissingDates([], props.startDate, props.endDate, props.subscribesUnsubscribesChartWidgetLogic.period).map(item => item.x);
  let maxAbsValue = Math.max(...(netChart?.map(Math.abs) ?? [0]));
  if (maxAbsValue === 0) maxAbsValue = 1

  return {
    netSeries,
    netChart,
    labels,
    maxAbsValue
  };
}
