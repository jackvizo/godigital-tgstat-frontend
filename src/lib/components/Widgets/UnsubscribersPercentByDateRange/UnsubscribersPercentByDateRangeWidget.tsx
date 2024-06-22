import { TextWidget } from '@/lib/components/TextWidget/TextWidget';

export interface UnsubscribersPercentByDateRangeWidgetProps {
  unsubscribesPercent: number | undefined;
}

export function UnsubscribersPercentByDateRangeWidget(props: UnsubscribersPercentByDateRangeWidgetProps) {
  return (
    <TextWidget label='% Отписок' value={`${props.unsubscribesPercent?.toFixed(2)}`} />
  );
}
