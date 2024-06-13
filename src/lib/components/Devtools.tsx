"use client";

import React from "react";
import dynamic from "next/dynamic";

// const RemoteAppStateDebug = dynamic(() => import("./RemoteAppStateDebug"));
const ReactQueryDevtools = dynamic(async () => {
  const Component = await import("@tanstack/react-query-devtools");
  return Component.ReactQueryDevtools;
});

export interface DebugToolsProps { }

export function Devtools(_props: DebugToolsProps) {
  return process.env.NEXT_PUBLIC_DEVTOOLS ? (
    <>
      <ReactQueryDevtools />
      {/* <RemoteAppStateDebug /> */}
    </>
  ) : null;
}
