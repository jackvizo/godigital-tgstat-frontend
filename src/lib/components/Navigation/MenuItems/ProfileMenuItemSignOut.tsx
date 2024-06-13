import { ROUTE_ROOT } from "@/lib/routes";
import Typography from "@mui/material/Typography";
import React from "react";
import { MenuItem as RpsMenuItem } from "react-pro-sidebar";
import { ProfileMenuItemTemplate } from "../types";
import { signOut } from "@/lib/auth/use-auth";

export interface ProfileMenuItemSignOutProps extends ProfileMenuItemTemplate { }

const label = "Выход";

export function ProfileMenuItemSignOut(props: ProfileMenuItemSignOutProps) {
  const content = (
    <Typography variant="h6" fontWeight={700} color="inherit">
      {label}
    </Typography>
  );

  if (props.isRpsMenuItem) {
    return (
      <RpsMenuItem
        icon={props?.RpsMenuItemProps?.icon}
        component={
          <Typography
            component="span"
            onClick={() => {
              signOut({ callbackUrl: ROUTE_ROOT });
            }}
          />
        }
        {...props.RpsMenuItemProps}
      >
        {label}
      </RpsMenuItem>
    );
  }

  if (props.MenuItemComponent) {
    return (
      <props.MenuItemComponent
        onClick={() => {
          signOut({ callbackUrl: ROUTE_ROOT });
        }}
      >
        {content}
      </props.MenuItemComponent>
    );
  }

  return content;
}
