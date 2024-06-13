import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import * as errorConsts from "@/lib/error-contst";

export async function withAuth(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    throw new Error(errorConsts.UNAUTHORIZED, { cause: 401 });
  }

  return token;
}
