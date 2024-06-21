// src/lib/components/Widgets/UnsubscribesWidget/UnsubscribesWidget.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useUnsubscribesWidgetLogic } from './useUnsubscribesWidgetLogic';

export interface UnsubscribesWidgetProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function UnsubscribesWidget({ tgChannelIds, fromDate, toDate }: UnsubscribesWidgetProps) {
  const { loading, error, data } = useUnsubscribesWidgetLogic({ tgChannelIds, fromDate, toDate });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Отписалось</Typography>
        <Typography variant="h4">{data}</Typography>
      </CardContent>
    </Card>
  );
}
