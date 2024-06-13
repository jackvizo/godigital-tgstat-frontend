import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import React from "react";
import { MenuItem as RpsMenuItem, MenuItemProps as RpsMenuItemProps } from "react-pro-sidebar";
import { MenuWrap } from "./types";

export interface MenuItemTemplateProps extends MenuWrap {
  label: string;
  href: string;
  isRpsMenuItem?: boolean;
  RpsMenuItemProps?: RpsMenuItemProps;
  testId?: string
}

export function MenuItemTemplate(props: MenuItemTemplateProps) {
  const content = (
    <MuiLink
      href={props.href}
      color="inherit"
      component={NextLink}
      variant="h6"
      data-testid={props.testId}
      sx={{ width: props.MenuItemComponent ? "100%" : "auto" }}
    >
      {props.label}
    </MuiLink>
  );

  if (props.isRpsMenuItem) {
    return (
      <RpsMenuItem
        icon={props?.RpsMenuItemProps?.icon}
        component={<NextLink href={props.href} />}
        data-testid={props.testId}
        {...props.RpsMenuItemProps}
      >
        {props.label}
      </RpsMenuItem>
    );
  }

  if (props.MenuItemComponent) {
    return <props.MenuItemComponent data-testid={props.testId} onClick={props.onMenuItemClick}>{content}</props.MenuItemComponent>;
  }

  return content;
}
