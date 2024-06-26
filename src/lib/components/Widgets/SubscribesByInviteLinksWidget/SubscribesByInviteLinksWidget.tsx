import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography, useTheme } from '@mui/material';

export interface SubscribesByInviteLinksWidgetProps {
  withLinkPercent: number;
  withoutLinkPercent: number;
  withLinkCount: number;
  withoutLinkCount: number;
}

export function SubscribesByInviteLinksWidget(props: SubscribesByInviteLinksWidgetProps) {
  const labelWithLinkPercent = `Пришли по ссылке: ${props.withLinkPercent.toFixed(2)}%`;
  const labelWithoutLinkPercent = `Пришли без ссылки: ${props.withoutLinkPercent.toFixed(2)}%`;

  const theme = useTheme()

  const chartData = {
    labels: [labelWithLinkPercent, labelWithoutLinkPercent],
    datasets: [
      {
        data: [props.withLinkCount, props.withoutLinkCount],
        backgroundColor: [theme.palette.primary.main, theme.palette.secondary.main],
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>Подписалось</Typography>
        <Doughnut data={chartData} options={{
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
        }} />
      </CardContent>
    </Card>
  );
}