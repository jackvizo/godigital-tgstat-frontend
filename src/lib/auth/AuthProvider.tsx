"use client";

import { ReactNode, createContext, useState } from "react";

export interface AuthContextType {
  isInitiallyAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export interface AuthProviderProps {
  children: ReactNode;
  initialIsAuthenticated: boolean;
}

export function AuthProvider(props: AuthProviderProps) {
  const [isInitiallyAuthenticated] = useState(props.initialIsAuthenticated);

  return <AuthContext.Provider value={{ isInitiallyAuthenticated }}>{props.children}</AuthContext.Provider>;
}
