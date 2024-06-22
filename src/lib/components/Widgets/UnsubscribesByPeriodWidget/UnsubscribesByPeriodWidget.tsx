import { Card, CardContent, LinearProgress, List, ListItem, ListItemText, Typography } from '@mui/material';

export interface UnsubscribesByPeriodWidgetProps {
  data: { label: string; value: string; percentage: number }[]
}

export function UnsubscribesByPeriodWidget(props: UnsubscribesByPeriodWidgetProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">Отписки по периодам</Typography>
        <List>
          {props.data.map((item, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText
                primary={item.label}
                secondary={item.value}
              />
              <LinearProgress
                variant="determinate"
                value={item.percentage || 0}
                sx={{ width: '100%', marginLeft: 2 }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
