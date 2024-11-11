"use client";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

export interface ErrorLayoutProps {
  error: Error & { digest?: string };
  reset(): void;
}

export function ErrorLayout({ error, reset }: ErrorLayoutProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        minHeight: { xs: "calc(100vh - 250px)", md: "calc(100vh - 170px)" },
      }}
    >
      <Box sx={{ maxWidth: "620px", display: "flex", alignItems: "center", flexDirection: "column", gap: 1 }}>
        <Typography gutterBottom align="center" variant="h4">
          На странице произошла ошибка. Возможно, пропал интернет.
        </Typography>

        <Button variant="outlined" onClick={() => reset()}>
          Перезагрузить
        </Button>
      </Box>
    </Box>
  );
}
