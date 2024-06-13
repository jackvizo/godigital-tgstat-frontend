import prismaClient from "@/lib/prisma-client";
import { JWT } from "next-auth/jwt";

export async function createUserIfNotExist(args: { jwt: JWT }) {
  const userId = args.jwt.sub;
  if (!userId) {
    return;
  }

  const existUser = await prismaClient.user.findFirst({ where: { id: userId } });

  if (!existUser) {
    await prismaClient.$transaction(async (tx) => {
      await tx.user.create({ data: { id: userId } });
    });
  }
}
