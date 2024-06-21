// SignupsWidget.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useSignupsWidgetLogic } from './useSignupsWidgetLogic';

export interface SignupsWidgetProps {
  signupsData: ReturnType<typeof useSignupsWidgetLogic>['data'];
}

export function SignupsWidget({ signupsData }: SignupsWidgetProps) {
  const totalSignups = signupsData ? signupsData.reduce((sum, item) => sum + item.count, 0) : 0;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Подписалось</Typography>
        <Typography variant="h4">{totalSignups}</Typography>
      </CardContent>
    </Card>
  );
}
