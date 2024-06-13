"use client";

import { createApolloClient } from "@/lib/apollo-client";
import { AuthProvider } from "@/lib/auth/AuthProvider";
import { useAuth, useAuthStore } from "@/lib/auth/use-auth";
import { createQueryClient } from "@/lib/get-query-client";
import { ThemeProvider, ThemeProviderProps } from "@/lib/theme/ThemeProvider";
import { ApolloProvider } from "@apollo/client/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider, useSession } from "next-auth/react";
import { FC, useEffect, useMemo, useState } from "react";

const GqlProvider: FC<React.PropsWithChildren> = (props) => {
  const { session } = useAuth();
  const accessToken = session?.data?.accessToken || "";

  const client = useMemo(
    () =>
      createApolloClient({
        gqlHttpUri: process.env.NEXT_PUBLIC_HASURA_GQL_HTTP_URL,
        gqlWsUri: process.env.NEXT_PUBLIC_HASURA_GQL_WS_URL,
        getAuthJwt: () => accessToken || "",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accessToken]
  );

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

function SessionProviderChild(props: React.PropsWithChildren) {
  const [queryClient] = useState(createQueryClient);
  const session = useSession();
  const { setSession } = useAuthStore();
  const [prevToken, setPrevToken] = useState(session?.data?.accessToken);

  useEffect(() => {
    setSession(session);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSession(session);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  useEffect(() => {
    if (prevToken !== session?.data?.accessToken) {
      setSession(session);
      setPrevToken(session?.data?.accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.data?.accessToken, prevToken]);

  return (
    <GqlProvider>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </GqlProvider>
  );
}

export interface ProvidersClientsideProps extends React.PropsWithChildren {
  ThemeProviderProps: ThemeProviderProps;
  isAuthenticated: boolean;

}

export function ProvidersClientside(props: ProvidersClientsideProps) {
  return (
    <AuthProvider initialIsAuthenticated={props.isAuthenticated}>
      <SessionProvider refetchOnWindowFocus={false}>
        <SessionProviderChild>
          <ThemeProvider {...props.ThemeProviderProps}>{props.children}</ThemeProvider>
        </SessionProviderChild>
      </SessionProvider>
    </AuthProvider>
  );
}
