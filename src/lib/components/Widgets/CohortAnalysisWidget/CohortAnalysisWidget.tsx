import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export interface CohortAnalysisWidgetProps {
  formattedMatrixData: {
    join_date?: string;
    left_date?: string;
    joined_count?: number;
    left_count?: number;
    formattedJoinDate?: string;
    formattedLeftDate?: string;
    percentage?: string;
    heat?: number;
  }[][];
  dates: string[];
}


const getColor = (heat: number | undefined) => {
  if (heat === undefined || heat === 0) {
    return undefined
  }
  const color = Math.floor(heat * 255);
  return `rgba(${color}, 0, 0, 0.5)`;
};

export function CohortAnalysisWidget(props: CohortAnalysisWidgetProps) {
  const { formattedMatrixData, dates } = props;

  return (
    <Card sx={{ overflow: 'scroll' }}>
      <CardContent>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {dates.map((date, index) => (
                <TableCell key={index} align="center">{date}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {formattedMatrixData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{row[0].formattedJoinDate}</TableCell>
                {row.map((cell, colIndex) => (
                  rowIndex <= colIndex ? (
                    <TableCell key={colIndex} align="center" sx={{ backgroundColor: getColor(cell.heat) }}>
                      {cell.left_count}<br />({cell.percentage})
                    </TableCell>
                  ) : (
                    <TableCell key={colIndex} align="center"></TableCell>
                  )
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
