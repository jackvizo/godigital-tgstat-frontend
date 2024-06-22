import { TextWidget } from '@/lib/components/TextWidget/TextWidget';

export interface TotalSubscribersWidgetProps {
  totalSubscribersAmount: number | undefined
}

export function TotalSubscribersWidget(props: TotalSubscribersWidgetProps) {
  return (
    <TextWidget label='Всего подписчиков' value={`${props.totalSubscribersAmount ?? 0}`} />
  );
}
