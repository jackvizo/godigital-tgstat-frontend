"use client";

import { ROUTE_UNSUBSCRIBES } from "@/lib/routes";
import { MenuItemTemplate } from "../MenuItemTemplate";
import { MenuWrap } from "../types";

export interface MenuItemUnsubscribesProps extends MenuWrap { }

export function MenuItemUnsubscribes(props: MenuItemUnsubscribesProps) {
  return <MenuItemTemplate {...props} href={ROUTE_UNSUBSCRIBES} label="Отписки" />;
}
