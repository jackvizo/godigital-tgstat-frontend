import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";

export interface ProvidersServersideProps extends React.PropsWithChildren {}

export function ProvidersServerside(props: ProvidersServersideProps) {
  return <AppRouterCacheProvider>{props.children}</AppRouterCacheProvider>;
}
