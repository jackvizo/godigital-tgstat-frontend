// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  /**
   * Extends the User type with additional properties.
   */
  interface User {
    // Add custom properties here. For example:
    // id: string;
  }

  /**
   * Extends the Session type with additional properties.
   */
  interface Session {
    userId?: string;
    accessToken?: string;
    roles: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    provider: string;
    id_token: string;
  }
}
