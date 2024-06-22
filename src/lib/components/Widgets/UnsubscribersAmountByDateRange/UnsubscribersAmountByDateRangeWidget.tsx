import { TextWidget } from '@/lib/components/TextWidget/TextWidget';

export interface UnsubscribersAmountByDateRangeWidgetProps {
  unsubscribersAmount: number | undefined;
}

export function UnsubscribersAmountByDateRangeWidget(props: UnsubscribersAmountByDateRangeWidgetProps) {
  return (
    <TextWidget label='Отписалось' value={`${props.unsubscribersAmount}`} />
  );
}
