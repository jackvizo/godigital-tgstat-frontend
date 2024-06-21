import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useCohortAnalysisWidgetLogic } from './useCohortAnalysisWidgetLogic';
import moment from 'moment';

export interface CohortAnalysisWidgetProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function CohortAnalysisWidget({ tgChannelIds, fromDate, toDate }: CohortAnalysisWidgetProps) {
  const { loading, error, data } = useCohortAnalysisWidgetLogic({ tgChannelIds, fromDate, toDate });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const formatDate = (date: string) => moment(date).format('DD.MM.YYYY');
  // @ts-expect-error
  const joinDates = [...new Set(data.map(item => formatDate(item.join_date)))];
  // @ts-expect-error
  const leftDates = [...new Set(data.map(item => formatDate(item.left_date)))];

  const getLeftCount = (joinDate: string, leftDate: string) => {
    const cohort = data.find(item => formatDate(item.join_date) === joinDate && formatDate(item.left_date) === leftDate);
    return cohort ? cohort.left_count : null;
  };

  const getPercentage = (joinDate: string, leftDate: string) => {
    const cohort = data.find(item => formatDate(item.join_date) === joinDate && formatDate(item.left_date) === leftDate);
    return cohort ? ((cohort.left_count / cohort.joined_count) * 100).toFixed(2) + '%' : null;
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Когорта отписок</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {leftDates.map((date, index) => (
                <TableCell key={index} align="center">{date}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {joinDates.map((joinDate, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{joinDate}</TableCell>
                {leftDates.map((leftDate, colIndex) => {
                  const leftCount = getLeftCount(joinDate, leftDate);
                  const percentage = getPercentage(joinDate, leftDate);
                  return (
                    <TableCell key={colIndex} align="center">
                      {leftCount !== null ? `${leftCount} (${percentage})` : ''}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
