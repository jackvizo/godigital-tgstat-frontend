import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { CohortData, getLeftCount, getPercentage } from './useCohortAnalysisWidgetLogic';

export interface CohortAnalysisWidgetProps {
  data: CohortData;
  joinDates: string[];
  leftDates: string[];
}

export function CohortAnalysisWidget(props: CohortAnalysisWidgetProps) {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {props.leftDates.map((date, index) => (
                <TableCell key={index} align="center">{date}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.joinDates.map((joinDate, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{joinDate}</TableCell>
                {props.leftDates.map((leftDate, colIndex) => {
                  const leftCount = getLeftCount(props.data, joinDate, leftDate);
                  const percentage = getPercentage(props.data, joinDate, leftDate);

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
