import { TypedDocumentNode } from "@apollo/client";
import { Prisma } from "@prisma/client";
import { JWT } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { Logger } from "winston";

export interface Ctx {
  request?: NextRequest;
  log: Logger;
  jwt: JWT | null;
  userId?: string;
}

export interface Transactable {
  tx?: Prisma.TransactionClient;
}

export type DocumentVariablesType<TDocumentNode extends TypedDocumentNode<any, any>> =
  TDocumentNode extends TypedDocumentNode<any, infer TType> ? TType : never;
