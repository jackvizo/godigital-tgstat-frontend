import React from "react";
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from "@mui/material/MenuItem";

export interface MenuItemProps extends MuiMenuItemProps {}

export function MenuItem(props: MenuItemProps) {
  return <MuiMenuItem divider {...props} sx={{ py: 2, ...props.sx }} />;
}
