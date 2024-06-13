"use server";

import { COOKIE_KEY_PROFILE_MENU_COLLAPSED } from "@/lib/consts";
import { cookies } from "next/headers";

export async function setProfileMenuCollapsedServerAction(collapsed: boolean) {
  const cookieStore = cookies();
  cookieStore.set(COOKIE_KEY_PROFILE_MENU_COLLAPSED, JSON.stringify(collapsed), { sameSite: "lax" });
}
