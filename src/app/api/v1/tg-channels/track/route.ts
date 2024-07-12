import { trackChannel } from "@/lib/nextjs-api-controller/telegram/track-channel";
import { reqCtx } from "@/lib/req-ctx";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { errorHandler } = reqCtx({
    request,
    loggerTag: "tg-channel/track",
    useBackendAuthorization: true,
  });

  try {
    const body = await request.json();
    const userId = body.user_id;
    const tgChannelId = body.tg_channel_id;
    const phoneNumbers = body.phone_numbers;

    await trackChannel({ userId, tgChannelId, phoneNumbers });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
