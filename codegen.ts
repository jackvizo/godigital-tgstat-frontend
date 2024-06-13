import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_HASURA_GQL_HTTP_URL!]: {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
          "x-hasura-role": "admin",
        },
      },
    },
  ],
  documents: ["./src/**/*.tsx", "./src/**/*.ts"],
  overwrite: true,

  generates: {
    "./src/generated/gql/": {
      preset: "client",
      config: {
        flattenGeneratedTypes: true,
        flattenGeneratedTypesIncludeFragments: true,
        namingConvention: {
          enumValues: "keep",
        },
      },
    },
  },
};

export default config;
