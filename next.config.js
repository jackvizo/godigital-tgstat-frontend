const envalid = require("envalid");

envalid.cleanEnv(process.env, {
  DATABASE_URL: envalid.str(),
  KEYCLOAK_ID: envalid.str(),
  KEYCLOAK_SECRET: envalid.str(),
  KEYCLOAK_ISSUER: envalid.str(),
  LOG_LEVEL: envalid.str(),
  NEXT_PUBLIC_HASURA_GQL_WS_URL: envalid.str(),
  NEXT_PUBLIC_HASURA_GQL_HTTP_URL: envalid.str(),
  NEXT_PUBLIC_HASURA_REST_URL: envalid.str(),
  BACKEND_TOKEN_HEADER: envalid.str(),
  BACKEND_TOKEN: envalid.str(),
  KEYCLOAK_ADMIN_USER: envalid.str(),
  KEYCLOAK_ADMIN_PASSWORD: envalid.str(),
  KEYCLOAK_ADMIN_CLI_URL: envalid.str(),
  PREFECT_URL: envalid.str(),
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  output: "standalone",
  redirects: async () => [{ source: "/", destination: "/dashboard", statusCode: 301 }],
};

module.exports = nextConfig;
