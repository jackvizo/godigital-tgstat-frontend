"use client";

import React from "react";
import { ThemeToggler } from "./MenuItems/ThemeToggler";
import { MenuItemDashboard } from "./MenuItems/MenuItemDashboard";
import { MenuItemUnsubscribes } from "./MenuItems/MenuItemUnsubscribes";

export interface AppBarAuthenticatedNavigationProps { }

export function AppBarAuthenticatedNavigation(_props: AppBarAuthenticatedNavigationProps) {
  return (
    <>
      <ThemeToggler />
      <MenuItemDashboard />
      {/* <MenuItemUnsubscribes /> */}
    </>
  );
}
