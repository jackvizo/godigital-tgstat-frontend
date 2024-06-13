"use client";

import { inter } from "@/lib/font";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import useTheme from "@mui/material/styles/useTheme";
import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import colors from "./colors.module.scss";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors["primary"],
    },
    secondary: {
      main: colors["secondary"],
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "& a": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          height: 76,
          paddingTop: 8,
        },
      },
    },
    MuiLink: {
      variants: [
        {
          props: { variant: "h6" },
          style: { textDecoration: "none", fontWeight: 700 },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontWeight: 600,
          textTransform: "initial",
        },
        sizeMedium: {
          fontSize: "1rem",
        },
        sizeLarge: {
          fontSize: "1.2rem",
        },
      },
    },
  },
};

let darkTheme = createTheme({
  ...themeOptions,
  palette: {
    ...themeOptions.palette,
    mode: "dark",
  },
});

let lightTheme = createTheme({
  ...themeOptions,
  palette: {
    ...themeOptions.palette,
    mode: "light",
  },
});

darkTheme = responsiveFontSizes(darkTheme);
lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };

export function useDarkMode() {
  const theme = useTheme();

  return theme.palette.mode === "dark";
}
