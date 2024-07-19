import prismaClient from "@/lib/prisma-client";

export async function trackChannel(args: {
  userId: string;
  tgChannelId: string;
  tgChannelTitle: string;
  phoneNumbers: string[];
}) {
  const sessionPool = await prismaClient.config__tg_bot_session_pool.findMany({
    where: {
      user_id: args.userId,
      phone_number: {
        in: args.phoneNumbers,
      },
      status: "enabled",
    },
  });

  if (!sessionPool || args.phoneNumbers.length < 1 || sessionPool.length !== args.phoneNumbers.length) {
    throw new Error("PHONE_NUMBERS_MISMATCH");
  }

  await prismaClient.user_tg_channel.create({
    data: {
      tg_channel_id: BigInt(args.tgChannelId),
      user_id: args.userId,
      tg_channel_title: args.tgChannelTitle,
      tg_channel__session: {
        createMany: {
          data: sessionPool.map((session) => ({
            config__tg_bot_session_pool_pk: session.pk,
          })),
        },
      },
    },
  });
}
