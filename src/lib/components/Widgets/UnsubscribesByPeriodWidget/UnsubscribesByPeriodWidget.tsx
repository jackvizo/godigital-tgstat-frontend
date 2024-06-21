// src/lib/components/Widgets/UnsubscribesByPeriodWidget/UnsubscribesByPeriodWidget.tsx
import React from 'react';
import { LinearProgress, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useUnsubscribesByPeriodWidgetLogic } from './useUnsubscribesByPeriodWidgetLogic';
import 'chart.js/auto';

export interface UnsubscribesByPeriodWidgetProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

const intervalLabels = {
  '0_TO_1_MIN': '0 минут - 1 минута',
  '1_MIN_TO_1_HOUR': '1 минута - 1 час',
  '1_HOUR_TO_1_DAY': '1 час - 1 день',
  '1_DAY_TO_3_DAYS': '1 день - 3 дня',
  '3_DAYS_TO_7_DAYS': '3 дня - 7 дней',
  '1_WEEK_TO_2_WEEKS': '1 неделя - 2 недели',
  '2_WEEKS_TO_1_MONTH': '2 недели - 1 месяц',
  '1_MONTH_TO_2_MONTHS': '1 месяц - 2 месяца'
};

export function UnsubscribesByPeriodWidget({ tgChannelIds, fromDate, toDate }: UnsubscribesByPeriodWidgetProps) {
  const { loading, error, data } = useUnsubscribesByPeriodWidgetLogic({ tgChannelIds, fromDate, toDate });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Отписки по периодам</Typography>
        <List>
          {data.map((item, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText
                // @ts-expect-error
                primary={intervalLabels?.[item?.interval_label] || item.interval_label}
                secondary={`${item.count || 0} (${item.percentage?.toFixed(2) || 0}%)`}
              />
              <LinearProgress
                variant="determinate"
                value={item.percentage || 0}
                style={{ width: '100px', marginLeft: '10px' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
