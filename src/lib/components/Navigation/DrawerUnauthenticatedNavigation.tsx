"use client";

import { MenuItemDashboard } from "./MenuItems/MenuItemDashboard";
import { SignInButton } from "./MenuItems/SignInButton";
import { ThemeToggler } from "./MenuItems/ThemeToggler";
import { Divider } from "./Divider";
import { MenuItem } from "./MenuItem";
import Box from "@mui/material/Box";
import { MenuItemUnsubscribes } from "./MenuItems/MenuItemUnsubscribes";

export interface DrawerUnauthenticatedNavigationProps {
  onMenuItemClick?: () => void;
}

export function DrawerUnauthenticatedNavigation(props: DrawerUnauthenticatedNavigationProps) {
  return (
    <>
      <Box
        component="li"
        sx={{ justifyContent: "space-between", display: "flex", flexDirection: "row", p: 2, pt: 0.5 }}
      >
        <SignInButton />
        <ThemeToggler />
      </Box>
      <Divider />

      <MenuItemDashboard MenuItemComponent={MenuItem} onMenuItemClick={props.onMenuItemClick} />
      <MenuItemUnsubscribes MenuItemComponent={MenuItem} onMenuItemClick={props.onMenuItemClick} />
    </>
  );
}
