import { signIn } from "./auth/use-auth";

export function staleAuthErrorHandler(error: any) {
  console.error("[staleAuthErrorHandler]", error);

  if (error === "Could not verify JWT: JWTExpired" || error === "UNAUTHORIZED") {
    signIn("keycloak", { callbackUrl: "/dashboard" });
  }
}
