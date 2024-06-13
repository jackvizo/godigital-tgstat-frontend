"use server";

import { COOKIE_KEY_THEME } from "@/lib/consts";
import type { PaletteMode } from "@mui/material";
import { cookies } from "next/headers";

export async function setThemeServerAction(theme: PaletteMode) {
  const cookieStore = cookies();
  cookieStore.set(COOKIE_KEY_THEME, theme, { sameSite: 'lax' });
}
