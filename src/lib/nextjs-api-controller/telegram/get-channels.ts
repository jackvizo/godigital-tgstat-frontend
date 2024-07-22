import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import prismaClient from "@/lib/prisma-client";
import _uniq from "lodash/uniq";
import _uniqBy from "lodash/uniqBy";

interface Channel {
  channel_id: string;
  title: string;
  phone_numbers: string[];
}

interface PhoneNumberChannels {
  channels: Channel[];
  phoneNumber: string;
}

export async function getChannels(args: { userId: string; titleSearch: string }) {
  const sessionPool = await prismaClient.config__tg_bot_session_pool.findMany({
    where: {
      user_id: args.userId,
      status: "enabled",
    },
  });

  if (!sessionPool || sessionPool.length < 1) {
    return [];
  }

  const channelsByPhoneNumber: PhoneNumberChannels[] = (
    await Promise.all(
      sessionPool.map(async (session) => {
        const stringSession = new StringSession(session.session_str);
        const client = new TelegramClient(stringSession, +session.api_id, session.api_hash, {
          connectionRetries: 2,
        });
        await client.connect();

        try {
          const searchResult = await client.invoke(new Api.contacts.Search({ q: args.titleSearch, limit: 10 }));
          const adminedPublicChannels = await client.invoke(new Api.channels.GetAdminedPublicChannels({}));
          const channels = searchResult.chats
            .filter((chat) => chat instanceof Api.Channel && chat.broadcast && chat.creator)
            .map((item) => ({
              channel_id: (item as Api.Channel).id?.toString() || "",
              title: (item as Api.Channel).title || "",
              phone_numbers: [],
            }));
          const adminedChannels = adminedPublicChannels.chats
            .filter((chat) => chat instanceof Api.Channel && chat.broadcast && chat.creator)
            .map((item) => ({
              channel_id: (item as Api.Channel).id?.toString() || "",
              title: (item as Api.Channel).title || "",
              phone_numbers: [],
            }));

          return {
            channels: _uniqBy([...adminedChannels, ...channels], "channel_id"),
            phoneNumber: session.phone_number,
          };
        } finally {
          await client.disconnect();
          await client.destroy();
        }
      })
    )
  ).flat();

  const uniqueChannels = channelsByPhoneNumber.reduce<{ [key: string]: Channel }>((acc, { channels, phoneNumber }) => {
    channels.forEach(({ channel_id, title }) => {
      if (!acc[channel_id]) {
        acc[channel_id] = { channel_id, title, phone_numbers: [] };
      }
      acc[channel_id].phone_numbers.push(phoneNumber);
    });
    return acc;
  }, {});

  return Object.values(uniqueChannels);
}
