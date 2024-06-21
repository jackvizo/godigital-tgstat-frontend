// src/lib/components/Widgets/SignupsBySourceWidget/SignupsBySourceWidget.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { useSignupsBySourceWidgetLogic } from './useSignupsBySourceWidgetLogic';
import 'chart.js/auto';

export interface SignupsBySourceWidgetProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function SignupsBySourceWidget({ tgChannelIds, fromDate, toDate }: SignupsBySourceWidgetProps) {
  const { loading, error, data } = useSignupsBySourceWidgetLogic({ tgChannelIds, fromDate, toDate });

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
        <Typography variant="h6">Подписалось</Typography>
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
