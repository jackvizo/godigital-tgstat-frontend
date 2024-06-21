// src/lib/components/Widgets/UnsubscriptionRateWidget/UnsubscriptionRateWidget.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useUnsubscriptionRateWidgetLogic } from './useUnsubscriptionRateWidgetLogic';

export interface UnsubscriptionRateWidgetProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function UnsubscriptionRateWidget({ tgChannelIds, fromDate, toDate }: UnsubscriptionRateWidgetProps) {
  const { loading, error, data } = useUnsubscriptionRateWidgetLogic({ tgChannelIds, fromDate, toDate });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">% Отписки</Typography>
        <Typography variant="h4">{data?.toFixed(2)}%</Typography>
      </CardContent>
    </Card>
  );
}
