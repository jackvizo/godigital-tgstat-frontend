import { useSubscribersAmountByDateRangeWidgetLogic } from "@/lib/components/Widgets/SubscribersAmountByDateRange/useSubscribersAmountByDateRangeWidgetLogic";
import { useUnsubscribersAmountWidgetLogic } from "@/lib/components/Widgets/UnsubscribersAmountByDateRange/useUnsubscribersAmountByDateRangeWidgetLogic";

export interface UseUnsubscribersPercentWidgetLogicProps {
  subscribersAmountWidgetLogic: ReturnType<typeof useSubscribersAmountByDateRangeWidgetLogic>;
  unsubscribersAmountWidgetLogic: ReturnType<typeof useUnsubscribersAmountWidgetLogic>;
}

export function useUnsubscribersPercentWidgetLogic(props: UseUnsubscribersPercentWidgetLogicProps) {
  const subscribersAmount = props?.subscribersAmountWidgetLogic?.subscribersAmount ?? 0;
  const unsubscribersAmount = props?.unsubscribersAmountWidgetLogic?.unsubscribersAmount ?? 0;

  let unsubscribesPercent = (subscribersAmount > 0 ? unsubscribersAmount / subscribersAmount : 0) * 100;

  if (subscribersAmount === 0 && unsubscribersAmount > 0) {
    unsubscribesPercent = unsubscribersAmount * 100;
  }

  return {
    unsubscribesPercent,
  };
}
