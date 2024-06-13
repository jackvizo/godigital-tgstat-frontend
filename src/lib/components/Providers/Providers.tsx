import React from "react";
import { ProvidersClientside, ProvidersClientsideProps } from "./ProvidersClientside";
import { ProvidersServerside } from "./ProvidersServerside";

export interface ProvidersProps extends React.PropsWithChildren {
  ProvidersClientsideProps: ProvidersClientsideProps;
}

export function Providers(props: ProvidersProps) {
  return (
    <ProvidersServerside>
      <ProvidersClientside {...props.ProvidersClientsideProps}>{props.children}</ProvidersClientside>
    </ProvidersServerside>
  );
}
