"use client";

import { ROUTE_DASHBOARD } from "@/lib/routes";
import { MenuWrap } from "../types";
import { MenuItemTemplate } from "../MenuItemTemplate";

export interface MenuItemDashboardProps extends MenuWrap { }

export function MenuItemAnalytics(props: MenuItemDashboardProps) {
  return <MenuItemTemplate {...props} href={ROUTE_DASHBOARD} label="Аналитика каналов" />;
}
