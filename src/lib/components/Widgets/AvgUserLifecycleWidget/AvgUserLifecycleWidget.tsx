
import React from 'react';
import { TextWidget } from '@/lib/components/TextWidget/TextWidget';
export interface AvgUserLifecycleWidgetProps {
  days: number | undefined;
}

export function AvgUserLifecycleWidget(props: AvgUserLifecycleWidgetProps) {
  return (
    <TextWidget label='Цикл жизни подписчика' value={`${props.days?.toFixed(2)} Дней`} />
  );
}
