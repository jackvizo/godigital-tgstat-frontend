// src/lib/components/Widgets/TotalSubscribersWidget/TotalSubscribersWidget.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTotalSubscribersWidgetLogic } from './useTotalSubscribersWidgetLogic';

export interface TotalSubscribersWidgetProps {
  tgChannelIds: number[];
}

export function TotalSubscribersWidget({ tgChannelIds }: TotalSubscribersWidgetProps) {
  const { loading, error, data } = useTotalSubscribersWidgetLogic({ tgChannelIds });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Подписчиков</Typography>
        <Typography variant="h4">{data}</Typography>
      </CardContent>
    </Card>
  );
}
