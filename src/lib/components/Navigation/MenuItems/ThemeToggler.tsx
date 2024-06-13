"use client";

import { useThemeTick } from "@/lib/theme/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { MenuWrap } from "../types";

export interface ThemeTogglerProps extends MenuWrap {}

export function ThemeToggler(props: ThemeTogglerProps) {
  const theme = useTheme();
  const toggle = useThemeTick((state) => state.toggle);

  const content = (
    <IconButton onClick={toggle} color="inherit">
      {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );

  if (props.MenuItemComponent) {
    return <props.MenuItemComponent>{content}</props.MenuItemComponent>;
  }

  return content;
}
