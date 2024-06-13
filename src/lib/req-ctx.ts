import { Ctx } from "@/types";
import { NextRequest } from "next/server";
import { v4 as uuid } from "uuid";
import winston from "winston";
import { loggerOptions } from "./logger";
import { withAuth } from "./with-auth";
import { JWT } from "next-auth/jwt";
import { apiErrorHandler } from "./api-error-handler";
import * as errorConsts from "@/lib/error-contst";

export const reqCtx = (args: {
  request: NextRequest;
  loggerTag: string;
  useAuthorization?: boolean;
  useBackendAuthorization?: boolean;
}) => {
  const reqId = uuid();

  let jwt: JWT | null = null;
  let log = winston.createLogger({
    ...loggerOptions,
    defaultMeta: {
      d: {
        endpoint: args?.loggerTag,
        reqId,
      },
    },
  });

  return {
    errorHandler: apiErrorHandler,
    getCtx: async () => {
      if (args.useAuthorization) {
        jwt = await withAuth(args.request);
        log = winston.createLogger({
          ...loggerOptions,
          defaultMeta: {
            d: {
              endpoint: args?.loggerTag,
              reqId,
              userId: jwt?.sub,
            },
          },
        });
      }

      if (args.useBackendAuthorization) {
        if (args.request.headers.get(process.env.BACKEND_TOKEN_HEADER) !== process.env.BACKEND_TOKEN) {
          throw new Error(errorConsts.UNAUTHORIZED, { cause: 401 });
        }
      }

      const ctx: Ctx = {
        log,
        jwt,
        request: args.request,
        userId: jwt?.sub,
      };

      return ctx;
    },
  };
};
