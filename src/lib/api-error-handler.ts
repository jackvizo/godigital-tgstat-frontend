import { NextResponse } from "next/server";
import formatError from "./format-error";

export function apiErrorHandler(error: any) {
  console.error(error);
  return NextResponse.json(
    { error: formatError(error) },
    {
      status: 400,
    }
  );
}
