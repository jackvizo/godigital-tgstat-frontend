// src/lib/components/Widgets/ER24Widget/ER24Widget.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useER24WidgetLogic } from './useER24WidgetLogic';

export interface ER24WidgetProps {
  tgChannelIds: number[];
  date: Date;
}

export function ER24Widget({ tgChannelIds, date }: ER24WidgetProps) {
  const { loading, error, data } = useER24WidgetLogic({ tgChannelIds, date });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">ER 24</Typography>
        <Typography variant="h4">{data}%</Typography>
      </CardContent>
    </Card>
  );
}
