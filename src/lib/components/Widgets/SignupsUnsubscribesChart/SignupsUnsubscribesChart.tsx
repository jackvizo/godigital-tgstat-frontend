import { fillMissingDates } from '@/lib/helpers/fill-missing-dates';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { TimeUnit } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSignupsUnsubscribesChartLogic } from './useSignupsUnsubscribesChartLogic';
import 'chartjs-adapter-moment';
import 'chart.js/auto';

export interface SignupsUnsubscribesChartProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
  timePeriod: TimeUnit;
  hideSubscribes?: boolean
}

const remapTimePriod = (period: TimeUnit) => {
  if (period === 'day') return 'hour';
  if (period === 'week') return 'day';
  if (period === 'month') return 'day';
  if (period === 'year') return 'month';
  return period
}

export function SignupsUnsubscribesChart({ tgChannelIds, fromDate, toDate, timePeriod, hideSubscribes }: SignupsUnsubscribesChartProps) {
  const period = remapTimePriod(timePeriod);
  const { loading, error, signupsData, unsubscribesData } = useSignupsUnsubscribesChartLogic({ tgChannelIds, fromDate, toDate, timePeriod: period });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // @ts-expect-error
  const labels = fillMissingDates([], fromDate, toDate, period).map(item => item.x);

  const data: React.ComponentProps<typeof Line>['data'] = {
    labels,
    datasets: []
  };

  if (!hideSubscribes) {
    data.datasets.push({
      label: 'Подписки',
      // @ts-expect-error
      data: fillMissingDates(signupsData.map(item => ({ x: item.time_bucket, y: item.count })), fromDate, toDate, period),
      borderColor: 'blue',
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    })
  }

  data.datasets.push({
    label: 'Отписки',
    // @ts-expect-error
    data: fillMissingDates(unsubscribesData.map(item => ({ x: item.time_bucket, y: item.count })), fromDate, toDate, period),
    borderColor: 'red',
    fill: false,
    cubicInterpolationMode: 'monotone',
    tension: 0.4
  })

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{hideSubscribes ? 'Отписалось' : 'Подписалось/Отписалось'}</Typography>
        {/* <Typography variant="body2" color="textSecondary">За период:</Typography> */}
        <Box sx={{ minWidth: { md: '500px' } }}>
          <Line data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                x: {
                  beginAtZero: true,
                  offset: true,
                  min: 0,
                  ticks: {}
                },
                y: {
                  beginAtZero: true,
                },
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
