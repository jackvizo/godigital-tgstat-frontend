import Alert from "@mui/material/Alert/index";
import formatError from "@/lib/format-error";
import Box from "@mui/material/Box/index";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export interface ErrorDisplayProps {
  error: any;
  fancy?: boolean;
}

export function ErrorDisplay(props: ErrorDisplayProps) {
  if (!props.error) {
    return null;
  }

  if (props.fancy) {
    return (
      <Paper sx={{ my: 2 }} variant="outlined">
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="h3">
            Ошибка
          </Typography>

          <Box>
            <Alert severity="error">{formatError(props.error)}</Alert>
          </Box>
        </Box>
      </Paper>
    );
  }

  return <Alert severity="error">{formatError(props.error)}</Alert>;
}
