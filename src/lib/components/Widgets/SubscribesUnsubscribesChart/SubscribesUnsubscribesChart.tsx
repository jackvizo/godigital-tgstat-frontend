import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import 'chart.js/auto';
import 'chartjs-adapter-moment';
import React from 'react';
import { Line } from 'react-chartjs-2';

export interface SubscribesUnsubscribesChartProps {
  title: string;
  subscribesChart?: number[]
  unsubscribesChart?: number[]
  labels: (string | Date)[]
}
export function SubscribesUnsubscribesChart(props: SubscribesUnsubscribesChartProps) {
  const theme = useTheme();

  const data: React.ComponentProps<typeof Line>['data'] = {
    labels: props.labels,
    datasets: []
  };

  if (props.subscribesChart !== undefined) {
    data.datasets.push({
      label: 'Подписки',
      data: props.subscribesChart,
      borderColor: theme.palette.primary.main,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    })
  }
  if (props.unsubscribesChart !== undefined) {
    data.datasets.push({
      label: 'Отписки',
      data: props.unsubscribesChart,
      borderColor: theme.palette.error.main,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    })
  }

  return (
    <Card>
      <CardContent sx={{ minWidth: { md: '500px' }, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography gutterBottom variant="subtitle2">{props.title}</Typography>
        <Box sx={{ flex: 1 }} >
          <Box sx={{ position: 'relative', height: '100%' }} >
            <Line data={data}
              options={{
                plugins: {
                  legend: {
                    position: 'bottom',
                    display: true,
                    align: 'start',
                    labels: {
                      usePointStyle: true,
                    },
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
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
        </Box>
      </CardContent>
    </Card>
  );
}
