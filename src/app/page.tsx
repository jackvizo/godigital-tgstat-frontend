import { CommonLayout } from "@/lib/components/CommonLayout/CommonLayout";
import Box from "@mui/material/Box/index";

export default function Page() {
  return (
    <>
      <CommonLayout>
        <Box sx={{ mx: 3 }}>
          Публичная неавторизованная часть
          <Box sx={{ my: 5 }} />
        </Box>
      </CommonLayout>
    </>
  );
}
