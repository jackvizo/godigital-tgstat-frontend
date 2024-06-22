import { ROUTE_UNSUBSCRIBES } from "@/lib/routes";
import { MenuItemTemplate } from "../MenuItemTemplate";
import { ProfileMenuItemTemplate } from "../types";

export interface ProfileMenuItemUnsubscribeProps extends ProfileMenuItemTemplate { }

export function ProfileMenuItemUnsubscribe(props: ProfileMenuItemUnsubscribeProps) {
  return <MenuItemTemplate {...props} href={ROUTE_UNSUBSCRIBES} label="Отписки" />;
}
