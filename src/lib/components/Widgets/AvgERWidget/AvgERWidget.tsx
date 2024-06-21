// src/lib/components/Widgets/AvgERWidget/AvgERWidget.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useAvgERWidgetLogic } from './useAvgERWidgetLogic';

export interface AvgERWidgetProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function AvgERWidget({ tgChannelIds, fromDate, toDate }: AvgERWidgetProps) {
  const { loading, error, data } = useAvgERWidgetLogic({ tgChannelIds, fromDate, toDate });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">ER средний</Typography>
        <Typography variant="h4">{data?.toFixed(2)}%</Typography>
      </CardContent>
    </Card>
  );
}
