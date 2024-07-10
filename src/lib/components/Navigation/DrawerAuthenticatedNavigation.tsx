"use client";

import Box from "@mui/material/Box";
import { Divider } from "./Divider";
import { MenuItem } from "./MenuItem";
import { MenuItemDashboard } from "./MenuItems/MenuItemDashboard";
import { ProfileMenuItemDashboard } from "./MenuItems/ProfileMenuItemDashboard";
import { ProfileMenuItemSignOut } from "./MenuItems/ProfileMenuItemSignOut";
import { ThemeToggler } from "./MenuItems/ThemeToggler";
import { MenuItemUnsubscribes } from "./MenuItems/MenuItemUnsubscribes";

export interface DrawerAuthenticatedNavigationProps {
  onMenuItemClick?: () => void;
}

export function DrawerAuthenticatedNavigation(props: DrawerAuthenticatedNavigationProps) {
  return (
    <>
      <Box
        component="li"
        sx={{ justifyContent: "space-between", display: "flex", flexDirection: "row", p: 2, pt: 0.5 }}
      >
        <ThemeToggler />
      </Box>
      <Divider />
      <MenuItemDashboard MenuItemComponent={MenuItem} onMenuItemClick={props.onMenuItemClick} />
      {/* <MenuItemUnsubscribes MenuItemComponent={MenuItem} onMenuItemClick={props.onMenuItemClick} /> */}
      <ProfileMenuItemSignOut MenuItemComponent={MenuItem} onMenuItemClick={props.onMenuItemClick} />
    </>
  );
}
