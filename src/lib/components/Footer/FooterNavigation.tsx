import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import React from "react";

export interface FooterNavigationProps {
  MenuItemComponent?: React.ElementType;
  DividerComponent?: React.ElementType;
}

export function FooterNavigation(props: FooterNavigationProps) {
  const MenuItemComponent = props.MenuItemComponent || React.Fragment;
  const DividerComponent = props.DividerComponent || React.Fragment;

  return (
    <>
      <MenuItemComponent>
        <MuiLink
          href={`mailto:${process.env.NEXT_PUBLIC_FEEDBACK_EMAIL}`}
          color="inherit"
          component={NextLink}
          variant="body2"
        >
          Обратная связь
        </MuiLink>
      </MenuItemComponent>
      <DividerComponent />
    </>
  );
}
