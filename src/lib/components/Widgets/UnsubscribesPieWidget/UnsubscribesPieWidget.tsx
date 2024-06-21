import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import 'chart.js/auto';
import { useUnsubscribesPieWidgetLogic } from './useUnsubscribesPieWidgetLogic';

export interface UnsubscribesPieWidgetProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function UnsubscribesPieWidget({ tgChannelIds, fromDate, toDate }: UnsubscribesPieWidgetProps) {
  const { loading, error, data } = useUnsubscribesPieWidgetLogic({ tgChannelIds, fromDate, toDate });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const total = (data?.subscribes?.aggregate?.count ?? 0) + (data?.unsubscribes?.aggregate?.count ?? 0);
  const chartData = {
    labels: ['Подписалось', 'Отписалось'],
    datasets: [
      {
        data: [data?.subscribes?.aggregate?.count, data?.unsubscribes?.aggregate?.count],
        backgroundColor: ['#4CAF50', '#2196F3'],
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Отписки</Typography>
        <Pie data={chartData} />
        <Typography variant="body2" color="textSecondary">
          Подписалось: {((data?.subscribes?.aggregate?.count ?? 0) / total * 100).toFixed(2)}%
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Отписалось: {((data?.unsubscribes?.aggregate?.count ?? 0) / total * 100).toFixed(2)}%
        </Typography>
      </CardContent>
    </Card>
  );
}
