"use client";

import { ThemeToggler } from "./MenuItems/ThemeToggler";
import { MenuItemDashboard } from "./MenuItems/MenuItemDashboard";
import { SignInButton } from "./MenuItems/SignInButton";
import { MenuItemUnsubscribes } from "./MenuItems/MenuItemUnsubscribes";

export interface AppBarUnauthenticatedNavigationProps { }

export function AppBarUnauthenticatedNavigation(_props: AppBarUnauthenticatedNavigationProps) {
  return (
    <>
      <ThemeToggler />
      <MenuItemDashboard />
      {/* <MenuItemUnsubscribes /> */}
      <SignInButton />
    </>
  );
}
