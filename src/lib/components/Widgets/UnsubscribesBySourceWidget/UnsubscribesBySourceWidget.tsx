// src/lib/components/Widgets/UnsubscribesBySourceWidget/UnsubscribesBySourceWidget.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { useUnsubscribesBySourceWidgetLogic } from './useUnsubscribesBySourceWidgetLogic';
import 'chart.js/auto';

export interface UnsubscribesBySourceWidgetProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function UnsubscribesBySourceWidget({ tgChannelIds, fromDate, toDate }: UnsubscribesBySourceWidgetProps) {
  const { loading, error, data } = useUnsubscribesBySourceWidgetLogic({ tgChannelIds, fromDate, toDate });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const total = (data?.with_link ?? 0) + (data?.without_link ?? 0);
  const chartData = {
    labels: ['Пришли по пригласительной ссылке', 'Пришли без ссылки'],
    datasets: [
      {
        data: [data.with_link, data.without_link],
        backgroundColor: ['#4CAF50', '#2196F3'],
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Отписалось</Typography>
        <Pie data={chartData} />
        <Typography variant="body2" color="textSecondary">
          Пришли по пригласительной ссылке: {((data?.with_link ?? 0) / total * 100).toFixed(2)}%
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Пришли без ссылки: {((data?.without_link ?? 0) / total * 100).toFixed(2)}%
        </Typography>
      </CardContent>
    </Card>
  );
}
