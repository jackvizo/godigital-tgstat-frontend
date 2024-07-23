import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import 'chart.js/auto';
import 'chartjs-adapter-moment';
import React from 'react';
import { Line } from 'react-chartjs-2';

export interface NetSubscribesChartProps {
  netChart?: number[]
  labels: (string | Date)[],
  maxAbsValue: number;
}
export function NetSubscribesChart(props: NetSubscribesChartProps) {
  const theme = useTheme();

  const data: React.ComponentProps<typeof Line>['data'] = {
    labels: props.labels,
    datasets: [{
      label: 'Прирост канала',
      data: props.netChart,
      borderColor: theme.palette.primary.main,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }]
  };


  return (
    <Card>
      <CardContent sx={{ minWidth: { md: '500px' }, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography gutterBottom variant="subtitle2">Прирост канала</Typography>
        <Box sx={{ flex: 1, minHeight: '300px' }} >
          <Box sx={{ position: 'relative', height: '100%' }} >
            <Line data={data}
              options={{
                plugins: {
                  legend: {
                    position: 'bottom',
                    display: false,
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
                    ticks: {
                      display: false,
                      autoSkip: true
                    },
                    grid: {
                      drawOnChartArea: false,
                      drawTicks: true,
                      offset: true,
                    },
                    alignToPixels: true,
                    position: 'center',
                  },
                  y: {
                    beginAtZero: true,
                    min: -props.maxAbsValue,
                    max: props.maxAbsValue
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
