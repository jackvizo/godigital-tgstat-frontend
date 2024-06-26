import { Card, CardContent, Typography, useTheme } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

export interface UnsubscribesPieWidgetProps {
  subscribesCount: number;
  unsubscribesCount: number;
  subscribesPercent: number;
  unsubscribesPercent: number;
}

export function UnsubscribesPieWidget(props: UnsubscribesPieWidgetProps) {
  const labelSubscribesPercent = `Подписалось: ${props.subscribesPercent.toFixed(2)}%`;
  const labelUnsubscribesPercent = `Отписалось: ${props.unsubscribesPercent.toFixed(2)}%`;

  const theme = useTheme()

  const chartData = {
    labels: [labelSubscribesPercent, labelUnsubscribesPercent],
    datasets: [
      {
        data: [props.subscribesPercent, props.unsubscribesPercent],
        backgroundColor: [theme.palette.primary.main, theme.palette.secondary.main],
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>Отписки</Typography>
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