"use client";

import { toast } from "react-toastify";
import formatError from "./format-error";
import { staleAuthErrorHandler } from "./stale-auth-error-handler";

const ignoreMessages = ["Missing queryFn for queryKey"];

function errorHandler(error: any) {
  if (typeof error === "string" && ignoreMessages.find((item) => error.indexOf(item) !== -1)) {
    return;
  }
  const errorText = formatError(error);
  staleAuthErrorHandler(errorText);
  toast(errorText, { type: "error" });
}

export default errorHandler;
