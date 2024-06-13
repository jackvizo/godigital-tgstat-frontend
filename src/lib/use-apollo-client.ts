import { ApolloClient, HttpLink, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { useEffect, useRef } from "react";
import { SubscriptionClient } from "subscriptions-transport-ws";

export const createUseApolloClient = (client: ApolloClient<any>) => (token: string) => {
  const subscriptionClient = useRef<SubscriptionClient | null>(null);

  const httpLink = useRef<HttpLink | null>(null);

  const wsLink = useRef<WebSocketLink | null>(null);

  useEffect(() => {
    subscriptionClient.current?.close();
    subscriptionClient.current = new SubscriptionClient(process.env.NEXT_PUBLIC_HASURA_GQL_WS_URL, {
      reconnect: true,
      ...(token
        ? {
            connectionParams: {
              headers: { Authorization: `Bearer ${token}` },
            },
          }
        : {}),
    });
  }, [token]);

  useEffect(() => {
    const sc = new SubscriptionClient(process.env.NEXT_PUBLIC_HASURA_GQL_WS_URL, {
      reconnect: true,
      ...(token
        ? {
            connectionParams: {
              headers: { Authorization: `Bearer ${token}` },
            },
          }
        : {}),
    });
    subscriptionClient.current = sc;

    const hl = new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_GQL_HTTP_URL!,
      ...(token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : {}),
    });
    httpLink.current = hl;

    const wsl = new WebSocketLink(subscriptionClient.current);
    wsLink.current = wsl;

    client.setLink(
      split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return definition.kind === "OperationDefinition" && definition.operation === "subscription";
        },
        wsLink.current!,
        httpLink.current!
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return client;
};
