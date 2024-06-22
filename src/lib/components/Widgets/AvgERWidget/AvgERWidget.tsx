import { TextWidget } from '@/lib/components/TextWidget/TextWidget';

export interface AvgERWidgetProps {
  avgEr: number | undefined
}

export function AvgERWidget(props: AvgERWidgetProps) {
  return (
    <TextWidget label='ER средний' value={`${props.avgEr?.toFixed(2)}%`} />
  );
}
