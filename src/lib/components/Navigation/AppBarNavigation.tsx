"use client";

import { useAuth } from "@/lib/auth/use-auth";
import { AppBarAuthenticatedNavigation } from "./AppBarAuthenticatedNavigation";
import { AppBarUnauthenticatedNavigation } from "./AppBarUnauthenticatedNavigation";

export interface AppBarNavigationProps {}

export function AppBarNavigation(_props: AppBarNavigationProps) {
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <AppBarAuthenticatedNavigation />;
  }

  return <AppBarUnauthenticatedNavigation />;
}
