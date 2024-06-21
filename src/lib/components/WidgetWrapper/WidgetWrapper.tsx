import formatError from '@/lib/format-error';
import { QueryResult } from '@apollo/client';
import { Box, Card, CardContent, Skeleton, Typography } from '@mui/material';
import React from 'react';

export interface WidgetWrapperProps {
  loading?: boolean;
  error?: Error | null;
  query?: QueryResult<any, any>;
  children: React.ReactNode;
  minWidth?: number;
  minHeight?: number;
}

export const WidgetWrapper: React.FC<WidgetWrapperProps> = (props) => {
  const isLoading = props.loading ?? props.query?.loading ?? false;
  const error = props.error ?? props.query?.error ?? null;

  return (
    <Card>
      <CardContent>
        {isLoading ? (
          <Box
            minWidth={props.minWidth}
            minHeight={props.minHeight}
          >
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Box>
        ) : error ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minWidth={props.minWidth}
            minHeight={props.minHeight}
          >
            <Typography color="error">{formatError(error)}</Typography>
          </Box>
        ) : (
          props.children
        )}
      </CardContent>
    </Card>
  );
};
