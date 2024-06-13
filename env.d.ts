declare namespace NodeJS {
  interface ProcessEnv {
    POSTGRES_PORT: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
    POSTGRES_USER: string;
    POSTGRES_HOST: string;
    DATABASE_URL_IN_HOST_MACHINE_NETWORK: string;
    DATABASE_URL_IN_DOCKER_NETWORK: string;
    DATABASE_URL: string;
    NEXTJS_PORT: string;
    HASURA_PORT: string;
    KEYCLOAK_PORT: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
    KEYCLOAK_ID: string;
    KEYCLOAK_SECRET: string;
    KEYCLOAK_ISSUER: string;
    S3_URL: string;
    S3_BUCKET_NAME: string;
    S3_ACCESS_KEY_ID: string;
    S3_SECRET_ACCESS_KEY: string;
    LOG_LEVEL: string;
    NEXTJS_BASE_URL: string;
    NEXT_PUBLIC_BACKEND_URL: string;
    NEXT_PUBLIC_YOOKASSA_REDIRECT_URL: string;
    HASURA_SCHEMA_URL: string;
    HASURA_GRAPHQL_ADMIN_SECRET: string;
    HASURA_REST_SWAGGER_URL: string;
    NEXT_PUBLIC_HASURA_GQL_WS_URL: string;
    NEXT_PUBLIC_HASURA_GQL_HTTP_URL: string;
    NEXT_PUBLIC_HASURA_REST_URL: string;
    BACKEND_TOKEN_HEADER: string;
    BACKEND_TOKEN: string;
    NEXT_PUBLIC_FEEDBACK_EMAIL: string;
    KEYCLOAK_ADMIN_USER: string;
    KEYCLOAK_ADMIN_PASSWORD: string;
    KEYCLOAK_ADMIN_CLI_URL: string;
  }
}
