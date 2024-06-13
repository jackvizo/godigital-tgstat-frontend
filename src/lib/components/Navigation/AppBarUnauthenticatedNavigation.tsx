"use client";

import { ThemeToggler } from "./MenuItems/ThemeToggler";
import { MenuItemDashboard } from "./MenuItems/MenuItemDashboard";
import { SignInButton } from "./MenuItems/SignInButton";

export interface AppBarUnauthenticatedNavigationProps { }

export function AppBarUnauthenticatedNavigation(_props: AppBarUnauthenticatedNavigationProps) {
  return (
    <>
      <ThemeToggler />
      <MenuItemDashboard />
      <SignInButton />
    </>
  );
}
