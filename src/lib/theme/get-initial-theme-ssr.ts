import { cookies } from "next/headers";
import { COOKIE_KEY_THEME } from "../consts";
import type { PaletteMode } from "@mui/material";

export function getInitialThemeSsr() {
  const cookieStore = cookies();

  return (cookieStore.get(COOKIE_KEY_THEME)?.value || "light") as PaletteMode;
}
