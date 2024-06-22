import { TextWidget } from '@/lib/components/TextWidget/TextWidget';

export interface ER24WidgetProps {
  er24Percent: number | undefined;
}

export function ER24Widget(props: ER24WidgetProps) {
  return (
    <TextWidget label='ER 24' value={`${props.er24Percent}%`} />
  )
}
