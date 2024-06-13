import axios from "axios";

async function getAdminToken() {
  const params = new URLSearchParams();
  params.append("username", process.env.KEYCLOAK_ADMIN_USER);
  params.append("password", process.env.KEYCLOAK_ADMIN_PASSWORD);
  params.append("grant_type", "password");
  params.append("client_id", "admin-cli");

  const res = await axios.post<{
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
    "not-before-policy": number;
    session_state: string;
    scope: string;
  }>(`${process.env.KEYCLOAK_ADMIN_CLI_URL}/realms/master/protocol/openid-connect/token`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const token = res?.data?.access_token;

  return token;
}

export async function getUser(args: { userId: string }) {
  const token = await getAdminToken();
  const res = await axios.get<{
    id: string;
    username: string;
    email: string;
    emailVerified: boolean;
    createdTimestamp: number;
    enabled: boolean;
    totp: boolean;
    disableableCredentialTypes: string[];
    requiredActions: string[];
    notBefore: number;
    access: {
      manageGroupMembership: boolean;
      view: boolean;
      mapRoles: boolean;
      impersonate: boolean;
      manage: boolean;
    };
  }>(`${process.env.KEYCLOAK_ADMIN_CLI_URL}/admin/realms/godigital/users/${args.userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res?.data;
}
