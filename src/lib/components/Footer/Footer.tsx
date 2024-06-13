import Container from "@mui/material/Container/index";
import Box from "@mui/material/Box/index";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography/index";
import React from "react";
import { FooterNavigation } from "./FooterNavigation";

export interface FooterProps { }

const year = new Date().getFullYear();

export function Footer(_props: FooterProps) {
  return (
    <Box sx={{ mt: "auto", width: "100%" }}>
      <Paper sx={{ borderRadius: 0, py: 2, pb: 6 }}>
        <Container>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
            gap={2}
          >
            <Typography>{year} GoDigital.</Typography>
            <Box gap={2} display="flex" flexDirection={{ xs: "column", md: "row" }}>
              <FooterNavigation />
            </Box>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}
