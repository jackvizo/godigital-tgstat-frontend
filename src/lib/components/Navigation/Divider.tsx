import React from "react";
import MuiDivider from "@mui/material/Divider";

export interface DividerProps {}

export function Divider(_props: DividerProps) {
  return <MuiDivider sx={{ m: "0 !important" }} />;
}
