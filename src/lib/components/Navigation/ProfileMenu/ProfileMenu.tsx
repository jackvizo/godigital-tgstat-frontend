"use client";

import { hexToRgba, proSidebarMenuItemStyles, proSidebarThemes } from "@/lib/theme/pro-sidebar-theme";
import { useDarkMode } from "@/lib/theme/theme";
// import { Dashboard, Logout, Unsubscribe } from "@mui/icons-material";
// import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Menu, Sidebar } from "react-pro-sidebar";
import { ProfileMenuItemSignOut } from "../MenuItems/ProfileMenuItemSignOut";
// import { setProfileMenuCollapsedServerAction } from "./set-profile-menu-collapsed-server-action";
import { ProfileMenuItemDashboard } from "../MenuItems/ProfileMenuItemDashboard";
import { ProfileMenuItemUnsubscribe } from "../MenuItems/ProfileMenuItemUnsubscribe";

export interface ProfileMenuProps {
  isInitialProfileMenuCollapsed: boolean;
}

export function ProfileMenu(props: ProfileMenuProps) {
  const isDarkMode = useDarkMode();
  const theme = isDarkMode ? "dark" : "light";

  const [collapsed, setCollapsed] = useState<boolean>(props.isInitialProfileMenuCollapsed);

  // const toggleCollapsed = () => {
  //   const newValue = !collapsed;
  //   setCollapsed(newValue);
  //   setProfileMenuCollapsedServerAction(newValue);
  // };

  return (
    <Box sx={{ position: "sticky", top: 0, height: "100vh", display: { xs: "none", md: "block" } }}>
      <Sidebar
        collapsed={collapsed}
        breakPoint="md"
        backgroundColor={hexToRgba(proSidebarThemes[theme].sidebar.backgroundColor, 1)}
        rootStyles={{
          color: proSidebarThemes[theme].sidebar.color,
          borderRight: proSidebarThemes[theme].sidebar.borderRight,
          height: "100%",
        }}
      >
        <Menu menuItemStyles={proSidebarMenuItemStyles(isDarkMode ? "dark" : "light")}>
          {/* <ProfileMenuItemDashboard isRpsMenuItem RpsMenuItemProps={{ icon: <Dashboard /> }} />
          <ProfileMenuItemUnsubscribe isRpsMenuItem RpsMenuItemProps={{ icon: <Unsubscribe /> }} />
          <ProfileMenuItemSignOut isRpsMenuItem RpsMenuItemProps={{ icon: <Logout /> }} /> */}
          <ProfileMenuItemDashboard isRpsMenuItem />
          {/* <ProfileMenuItemUnsubscribe isRpsMenuItem /> */}
          <ProfileMenuItemSignOut isRpsMenuItem />

        </Menu>
      </Sidebar>
      <Box sx={{ position: "sticky", bottom: 0, zIndex: 10 }}>
        {/* <IconButton onClick={toggleCollapsed} sx={{ position: "absolute", bottom: 0, m: 1.75 }}>
          <MenuIcon fontSize="large" />
        </IconButton> */}
      </Box>
    </Box>
  );
}
