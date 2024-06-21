import Box from "@mui/material/Box/index";
import { ClientContainer } from "./client-container";
import Typography from "@mui/material/Typography/index";

export interface PageProps { }

export default function Page(props: PageProps) {
  return <Box>
    <Typography variant="h4" gutterBottom>Дашборд</Typography>
    <ClientContainer />
  </Box>;
}

export const dynamic = "force-dynamic";
