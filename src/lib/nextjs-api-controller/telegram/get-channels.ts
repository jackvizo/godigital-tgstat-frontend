import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import prismaClient from "@/lib/prisma-client";
import _uniq from "lodash/uniq";

export async function getChannels(args: { userId: string }) {
  const userPhones = await prismaClient.user_phone_number.findMany({
    where: {
      user_id: args.userId,
    },
  });

  if (!userPhones || userPhones.length < 1) {
    return [];
  }

  const phoneNumbers = userPhones.filter((item) => item.status === "enabled").map((item) => item.phone_number);

  const channels = await Promise.all(
    phoneNumbers.map(async (phoneNumber) => {
      const session = await prismaClient.config__tg_bot_session_pool.findFirst({
        where: {
          phone_number: phoneNumber,
          status: "enabled",
        },
      });

      const trackedChannels = await prismaClient.user_tg_channel.findMany({
        where: {
          user_id: args.userId,
        },
      });

      if (!session || !session.session_str || !session.api_hash || !session.api_id) {
        return [];
      }

      const stringSession = new StringSession(session.session_str);
      const client = new TelegramClient(stringSession, +session.api_id, session.api_hash, {
        connectionRetries: 2,
      });
      await client.connect();

      try {
        const dialogs = await client.getDialogs();

        const channels = dialogs
          .filter((dialog) => dialog.isChannel && dialog.entity instanceof Api.Channel && dialog.entity.broadcast)
          .map((item) => ({
            channel_id: item.id?.toString() || "",
            title: item.title || "",
            is_tracked: !!trackedChannels.find(
              (trackedChannel) =>
                trackedChannel.tg_channel_id &&
                item.id &&
                trackedChannel.tg_channel_id?.toString() === item.id?.toString()
            ),
            phone_number: phoneNumber,
          }));

        return channels;
      } finally {
        await client.disconnect();
        await client.destroy();
      }
    })
  );

  return channels.flat();
}
