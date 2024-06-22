'use client';

import { useAuth } from '@/lib/auth/use-auth';
import formatError from '@/lib/format-error';
import { QueryResult } from '@apollo/client';
import { WarningAmber } from '@mui/icons-material';
import { Alert, Box, BoxProps, Paper, Skeleton, Typography } from '@mui/material';
import React, { useRef } from 'react';

export interface WidgetWrapperProps {
  loading?: boolean;
  error?: Error | null;
  query?: QueryResult<any, any>;
  queries?: QueryResult<any, any>[];
  children: React.ReactNode;
  width?: BoxProps['width'];
  height?: number;
}

export const WidgetWrapper: React.FC<WidgetWrapperProps> = (props) => {
  const auth = useAuth();
  const isLoading = !auth.session?.data?.accessToken || (props.loading ?? props.query?.loading ?? props.queries?.some(item => item.loading) ?? false);
  const error = props.error ?? props.query?.error ?? props.queries?.find(item => item.error) ?? null;
  const width = props.width ?? 100;
  const height = props.height ?? 100;

  if (isLoading || error) {
    return (
      <>
        <Box
          sx={{
            width: width,
            height: height,
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLoading ? (
            <Skeleton sx={{ borderRadius: 1 }} variant="rectangular" width="100%" height={height} />
          ) : null}

          {error && !isLoading ? (
            <Paper sx={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', overflow: 'scroll' }}>
              <Alert severity='error'>
                {formatError(error)}
              </Alert>
            </Paper>
          ) : null}
        </Box>
      </>
    );
  }

  return <>{props.children}</>

};
