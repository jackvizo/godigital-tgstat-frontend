"use client";

import { useSession } from "next-auth/react";
import { useContext } from "react";
import { create } from "zustand";
import { AuthContext } from "./AuthProvider";
import { signIn as NASignIn, signOut as NASignOut } from "next-auth/react";
import { startProgress } from "next-nprogress-bar";

type TSession = ReturnType<typeof useSession>;

export const useAuthStore = create<{ session: TSession | null; setSession: (session: TSession) => void }>((set) => ({
  session: null,
  setSession: (session) => set(() => ({ session })),
}));

export function useAuth() {
  const { session } = useAuthStore();
  const isAuthorized = !!session?.data?.accessToken;
  const isAuthenticated = !!useContext(AuthContext)?.isInitiallyAuthenticated;

  return { session, isAuthorized, isAuthenticated };
}

export const signIn = (...args: Parameters<typeof NASignIn>) => {
  startProgress();
  NASignIn(...args);
};

export const signOut = (...args: Parameters<typeof NASignOut>) => {
  startProgress();
  NASignOut(...args);
};
