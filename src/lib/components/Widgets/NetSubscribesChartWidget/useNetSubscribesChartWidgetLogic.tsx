import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useSubscribesUnsubscribesChartWidgetLogic } from '../SubscribesUnsubscribesChart/useSubscribesUnsubscribesChartWidgetLogic';

export interface UseNetSubscribesChartWidgetLogicProps extends DashboardFilters {
  subscribesUnsubscribesChartWidgetLogic: ReturnType<typeof useSubscribesUnsubscribesChartWidgetLogic>
}

export function useNetSubscribesChartWidgetLogic(props: UseNetSubscribesChartWidgetLogicProps) {
  const netChart = props.subscribesUnsubscribesChartWidgetLogic.subscribesChart.map((item, index) => item - props.subscribesUnsubscribesChartWidgetLogic.unsubscribesChart[index])
  const labels = props.subscribesUnsubscribesChartWidgetLogic.labels;

  let maxAbsValue = Math.max(...(netChart?.map(Math.abs) ?? [0]));
  if (maxAbsValue === 0) {
    maxAbsValue = 1
  }

  return {
    netChart,
    labels,
    maxAbsValue
  };
}
