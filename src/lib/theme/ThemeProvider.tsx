"use client";

import { ThemeProvider as MUIThemeProvider } from "@emotion/react";
import type { PaletteMode } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { setThemeServerAction } from "./set-theme-server-action";
import { darkTheme, lightTheme } from "./theme";
import { create } from "zustand";
import { LS_KEY_MANUAL_SET_THEME, LS_KEY_THEME_CHANGED_AT } from "@/lib/consts";
import moment from "moment";

export const useThemeTick = create<{ tick: number; toggle: () => void }>((set) => ({
  tick: 0,
  toggle: () => set((state) => ({ tick: state.tick + 1 })),
}));

export interface ThemeProviderProps extends React.PropsWithChildren {
  initialTheme: PaletteMode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const [manualSetTheme, setManualSetTheme] = useState<PaletteMode | undefined>(
    typeof localStorage !== "undefined"
      ? (localStorage.getItem(LS_KEY_MANUAL_SET_THEME) as PaletteMode) || undefined
      : undefined
  );
  const [theme, setTheme] = useState(manualSetTheme || props.initialTheme);
  const [themeManuallyChangedAt, setThemeManuallyChangedAt] = useState<Date | undefined>(
    typeof localStorage !== "undefined"
      ? (localStorage.getItem(LS_KEY_THEME_CHANGED_AT) &&
          new Date(JSON.parse(localStorage.getItem(LS_KEY_THEME_CHANGED_AT) || ""))) ||
          undefined
      : undefined
  );
  const tick = useThemeTick((state) => state.tick);
  const [prevTick, setPrevTick] = useState(tick);
  const preferredTheme = (
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  ) as PaletteMode;

  useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (themeManuallyChangedAt && moment().diff(themeManuallyChangedAt, "hours") >= 1) {
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem(LS_KEY_MANUAL_SET_THEME);
        localStorage.removeItem(LS_KEY_THEME_CHANGED_AT);
        setThemeManuallyChangedAt(undefined);
      }
    }
  }, [themeManuallyChangedAt]);

  useEffect(() => {
    if (!manualSetTheme) {
      setTheme(preferredTheme);
      setThemeServerAction(preferredTheme).catch(console.log);
    }
  }, [preferredTheme, manualSetTheme]);

  useEffect(() => {
    if (tick !== prevTick) {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);

      if (typeof localStorage !== "undefined") {
        const d = new Date();
        localStorage.setItem(LS_KEY_MANUAL_SET_THEME, newTheme);
        localStorage.setItem(LS_KEY_THEME_CHANGED_AT, JSON.stringify(d));
        setThemeManuallyChangedAt(d);
        setManualSetTheme(newTheme);
      }

      setPrevTick(tick);
      setThemeServerAction(newTheme).catch(console.log);
    }
  }, [tick, prevTick, theme]);

  return <MUIThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}> {props.children}</MUIThemeProvider>;
}
