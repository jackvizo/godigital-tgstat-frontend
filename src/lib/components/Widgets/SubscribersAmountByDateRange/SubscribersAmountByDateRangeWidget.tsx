import { TextWidget } from '@/lib/components/TextWidget/TextWidget';


export interface SubscribersAmountByDateRangeWidgetProps {
  subscribersAmount: number | undefined;
}

export function SubscribersAmountByDateRangeWidget(props: SubscribersAmountByDateRangeWidgetProps) {
  return (
    <TextWidget label='Подписалось' value={`${props.subscribersAmount}`} />
  );
}
