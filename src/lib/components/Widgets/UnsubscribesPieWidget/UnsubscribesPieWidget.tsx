import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
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
        data: [props.subscribesCount, props.unsubscribesCount],
        backgroundColor: [theme.palette.primary.main, theme.palette.secondary.main],
      },
    ],
  };


  const isEmptyData = props.subscribesPercent === 0 && props.unsubscribesPercent === 0

  if (isEmptyData) {
    return <Card>
      <CardContent sx={{ height: '100%' }}>
        <Typography variant="subtitle2" gutterBottom>Подписки/отписки</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Typography>Нет данных</Typography>
        </Box>
      </CardContent>
    </Card>
  }


  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>Подписки/отписки</Typography>
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
