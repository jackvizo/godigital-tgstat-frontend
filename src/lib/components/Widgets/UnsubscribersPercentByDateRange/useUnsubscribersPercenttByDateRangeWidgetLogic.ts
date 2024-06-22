import { useSubscribersAmountWidgetLogic } from "@/lib/components/Widgets/SubscribersAmountByDateRange/useSubscribersAmountByDateRangeWidgetLogic";
import { useUnsubscribersAmountWidgetLogic } from "@/lib/components/Widgets/UnsubscribersAmountByDateRange/useUnsubscribersAmountByDateRangeWidgetLogic";

export interface UseUnsubscribersPercentWidgetLogicProps {
  subscribersAmountWidgetLogic: ReturnType<typeof useSubscribersAmountWidgetLogic>;
  unsubscribersAmountWidgetLogic: ReturnType<typeof useUnsubscribersAmountWidgetLogic>;
}

export function useUnsubscribersPercentWidgetLogic(props: UseUnsubscribersPercentWidgetLogicProps) {
  const subscribersAmount = props?.subscribersAmountWidgetLogic?.subscribersAmount ?? 0;
  const unsubscribersAmount = props?.unsubscribersAmountWidgetLogic?.unsubscribersAmount ?? 0;

  const unsubscribesPercent = (subscribersAmount > 0 ? unsubscribersAmount / subscribersAmount : 0) * 100;

  return {
    unsubscribesPercent,
  };
}
