"use client";

import { ROUTE_SAMPLE } from "@/lib/routes";
import { MenuWrap } from "../types";
import { MenuItemTemplate } from "../MenuItemTemplate";

export interface MenuItemTariffProps extends MenuWrap { }

export function MenuItemTariff(props: MenuItemTariffProps) {
  return <MenuItemTemplate {...props} href={ROUTE_SAMPLE} label="Пример меню" />;
}
