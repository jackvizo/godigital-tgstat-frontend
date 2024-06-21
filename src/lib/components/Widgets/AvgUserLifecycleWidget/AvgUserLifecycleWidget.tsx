// src/lib/components/Widgets/AvgUserLifecycleWidget/AvgUserLifecycleWidget.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useAvgUserLifecycleWidgetLogic } from './useAvgUserLifecycleWidgetLogic';

export interface AvgUserLifecycleWidgetProps {
  tgChannelIds: number[];
}

export function AvgUserLifecycleWidget({ tgChannelIds }: AvgUserLifecycleWidgetProps) {
  const { loading, error, data } = useAvgUserLifecycleWidgetLogic({ tgChannelIds });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Цикл жизни подписчика</Typography>
        <Typography variant="h4">{data} дней</Typography>
      </CardContent>
    </Card>
  );
}
