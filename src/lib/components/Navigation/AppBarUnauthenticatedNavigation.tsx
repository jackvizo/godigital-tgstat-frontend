"use client";

import { ThemeToggler } from "./MenuItems/ThemeToggler";
// import { MenuItemDashboard } from "./MenuItems/MenuItemDashboard";
// import { MenuItemUnsubscribes } from "./MenuItems/MenuItemUnsubscribes";
import { SignInButton } from "./MenuItems/SignInButton";
import { MenuItemAnalytics } from "./MenuItems/MenuItemAnalytics";

export interface AppBarUnauthenticatedNavigationProps { }

export function AppBarUnauthenticatedNavigation(_props: AppBarUnauthenticatedNavigationProps) {
  return (
    <>
      <ThemeToggler />
      {/* <MenuItemDashboard /> */}
      <MenuItemAnalytics />
      {/* <MenuItemUnsubscribes /> */}
      <SignInButton />
    </>
  );
}
