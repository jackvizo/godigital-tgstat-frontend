"use client";

import Button from "@mui/material/Button";
import React from "react";
import Typography from "@mui/material/Typography";
import { ROUTE_DASHBOARD } from "@/lib/routes";
import { MenuWrap } from "../types";
import { signIn } from "@/lib/auth/use-auth";

export interface SignInButtonProps extends MenuWrap { }

export function SignInButton(props: SignInButtonProps) {
  const content = (
    <Button
      sx={{ minWidth: 150 }}
      onClick={() => {
        signIn("keycloak", { callbackUrl: ROUTE_DASHBOARD });
      }}
      color="primary"
      variant="contained"
      size="medium"
      data-testid="signin"
    >
      <Typography variant="h6" fontWeight={700}>
        Войти
      </Typography>
    </Button>
  );

  if (props.MenuItemComponent) {
    return <props.MenuItemComponent>{content}</props.MenuItemComponent>;
  }

  return content;
}
