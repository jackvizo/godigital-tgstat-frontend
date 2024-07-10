import { NextRequest, NextResponse } from "next/server";
import { reqCtx } from "@/lib/req-ctx";
import { getChannels } from "@/lib/nextjs-api-controller/telegram/get-channels";

export async function POST(request: NextRequest) {
  const { errorHandler } = reqCtx({
    request,
    loggerTag: "tg-channel",
    useBackendAuthorization: true,
  });

  try {
    const body = await request.json();

    const channels = await getChannels({ userId: body.userId! });
    return NextResponse.json({ channels }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
