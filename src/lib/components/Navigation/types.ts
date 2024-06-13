import { MenuItem } from "./MenuItem";
import { MenuItemTemplateProps } from "./MenuItemTemplate";

export interface MenuWrap {
  MenuItemComponent?: typeof MenuItem;
  onMenuItemClick?: () => void;
}

export interface ProfileMenuItemTemplate extends Omit<MenuItemTemplateProps, "href" | "label"> {}
