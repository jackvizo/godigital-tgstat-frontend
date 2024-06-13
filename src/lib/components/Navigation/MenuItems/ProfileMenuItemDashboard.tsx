import { ROUTE_DASHBOARD } from "@/lib/routes";
import { MenuItemTemplate } from "../MenuItemTemplate";
import { ProfileMenuItemTemplate } from "../types";

export interface ProfileMenuItemDashboardProps extends ProfileMenuItemTemplate { }

export function ProfileMenuItemDashboard(props: ProfileMenuItemDashboardProps) {
  return <MenuItemTemplate {...props} href={ROUTE_DASHBOARD} label="Дашборд" />;
}
