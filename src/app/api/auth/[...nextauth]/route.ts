import { LS_KEY_CHECKED_TG_CHANNELS } from "@/lib/consts";
import { createUserIfNotExist } from "@/lib/nextjs-api-controller/user";
import axios, { AxiosError } from "axios";
import jwt, { JwtPayload } from "jsonwebtoken";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import Keycloak from "next-auth/providers/keycloak";

const keycloakProvider = Keycloak({
  name: "Email",
  style: {
    bg: "#ffffff",
    logo: "",
    text: "",
  },

  clientId: process.env.KEYCLOAK_ID,
  clientSecret: process.env.KEYCLOAK_SECRET,
  issuer: process.env.KEYCLOAK_ISSUER,
});

async function doFinalSignoutHandshake(token: JWT) {
  const { provider, id_token } = token;

  if (provider == keycloakProvider.id) {
    try {
      const params = new URLSearchParams();
      params.append("id_token_hint", id_token);
      await axios.get(`${keycloakProvider.options!.issuer}/protocol/openid-connect/logout?${params.toString()}`);
    } catch (e: any) {
      console.error("Unable to perform post-logout handshake", (e as AxiosError)?.code || e);
    }
  }
}

function clearLocalStorage() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(LS_KEY_CHECKED_TG_CHANNELS);
  }
}

const handler = NextAuth({
  callbacks: {
    jwt: async ({ token, account, user }) => {
      await createUserIfNotExist({ jwt: token });
      if (account && user) {
        const payload = jwt.decode(account.access_token!) as JwtPayload;
        const roles = payload?.resource_access?.godigital?.roles;

        return {
          ...token,
          id_token: account.id_token!,
          provider: account.provider!,
          accessToken: account.access_token,
          roles,
        };
      }

      return token;
    },
    session: async ({ session, token }) => {
      session.accessToken = (token.accessToken || "") as string;
      session.roles = (token.roles || []) as string[];
      session.userId = token.sub;
      return session;
    },
  },
  events: {
    async signOut({ token }) {
      clearLocalStorage();
      return doFinalSignoutHandshake(token);
    },
    async signIn() {
      clearLocalStorage();
    },
  },

  providers: [keycloakProvider],
  pages: {
    signIn: "/auth",
  },
});

export { handler as GET, handler as POST };

export const dynamic = "force-dynamic";
