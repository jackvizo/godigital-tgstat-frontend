import { Card, CardContent, Typography } from '@mui/material';

export interface TextWidgetProps {
  label: string;
  value: string;
}

export function TextWidget(props: TextWidgetProps) {
  return (
    <Card sx={{ p: 1, px: 2 }}>
      <Typography variant="subtitle2">{props.label}</Typography>
      <Typography variant="h5">{props.value}</Typography>
    </Card>
  );
}
