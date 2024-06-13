import { cookies } from "next/headers";
import { COOKIE_KEY_NEXT_AUTH_SESSION_TOKEN } from "@/lib/consts";

export function getIsAuthenticatedSsr() {
  const cookieStore = cookies();
  const isAuthorized = !!cookieStore
    .getAll()
    .find(
      (item) =>
        item.name.indexOf(COOKIE_KEY_NEXT_AUTH_SESSION_TOKEN) === 0 ||
        item.name.indexOf(`__Secure-${COOKIE_KEY_NEXT_AUTH_SESSION_TOKEN}`) === 0
    )?.value;

  return isAuthorized;
}
