"use client";

import { useAuth } from "@/lib/auth/use-auth";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuList from "@mui/material/MenuList";
import React from "react";
import { DrawerAuthenticatedNavigation } from "./DrawerAuthenticatedNavigation";
import { DrawerUnauthenticatedNavigation } from "./DrawerUnauthenticatedNavigation";
import { useDarkMode } from "@/lib/theme/theme";

export interface DrawerNavigationProps {
  isBurgerBgTransparent: boolean;
}

export function DrawerNavigation(props: DrawerNavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };
  const isDarkMode = useDarkMode();
  const auth = useAuth();

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{
          position: "fixed",
          top: 21,
          right: 16,
          backgroundColor: (theme) =>
            props.isBurgerBgTransparent ? "unset" : isDarkMode ? "#121212" : theme.palette.grey[200],
          zIndex: 1000,
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <nav>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70%",
              paddingTop: "3px",
              color: "inherit",
              background: isDarkMode ? "rgba(33,33,33,0.8)" : "rgba(255,255,255,0.9)",
              backdropFilter: "blur(5px)",
            },
          }}
        >
          <MenuList>
            {auth.isAuthenticated ? (
              <DrawerAuthenticatedNavigation onMenuItemClick={closeDrawer} />
            ) : (
              <DrawerUnauthenticatedNavigation onMenuItemClick={closeDrawer} />
            )}
          </MenuList>
        </Drawer>
      </nav>
    </Box>
  );
}
