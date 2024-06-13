"use client";

import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

export function LoadingButton(props: LoadingButtonProps) {
  const { loading, ...rest } = props;
  if (props.size === "small") {
    return (
      <Button
        sx={{ px: 2 }}
        endIcon={props.loading ? <CircularProgress disableShrink size={16} /> : <Box sx={{ width: 16 }} />}
        startIcon={<Box sx={{ width: 16 }} />}
        {...rest}
      >
        {props.children}
      </Button>
    );
  }

  if (props.size === "large") {
    return (
      <Button
        sx={{ px: 2 }}
        endIcon={
          props.loading ? <CircularProgress disableShrink thickness={5} size={21} /> : <Box sx={{ width: 20 }} />
        }
        startIcon={<Box sx={{ width: 20 }} />}
        {...rest}
      >
        {props.children}
      </Button>
    );
  }
  return (
    <Button
      sx={{ px: 2 }}
      endIcon={props.loading ? <CircularProgress disableShrink thickness={5} size={16} /> : <Box sx={{ width: 16 }} />}
      startIcon={<Box sx={{ width: 16 }} />}
      {...rest}
    >
      {props.children}
    </Button>
  );
}
