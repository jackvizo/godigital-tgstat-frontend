import Box from "@mui/material/Box/index";
import { ClientContainer } from "./client-container";

export interface PageProps { }

export default function Page(props: PageProps) {
  return <Box>
    Здесь будет дашборд
    <ClientContainer />
  </Box>;
}

export const dynamic = "force-dynamic";
