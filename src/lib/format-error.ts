import axios, { AxiosError } from "axios";

export function fallbackError() {
  return "Неизвестная ошибка";
}

export function formatPlainError(error: any): string | undefined {
  if (!error) return undefined;
  if (typeof error === "string") return error;
  if (error?.message) return error.message;
  if (typeof error?.error === "string") {
    return error?.error;
  }
  if (Array.isArray(error) && typeof error?.[0] === "string") {
    return error[0];
  }
  if (typeof error === "string" && error.indexOf("<html") === 0) {
    return undefined;
  }
  return undefined;
}

export function formatApolloError(error: any): string | undefined {
  if (Array.isArray(error)) {
    return formatPlainError(error?.[0]);
  }
  return error?.messsage;
}

export function formatAxiosError(error: AxiosError) {
  if (axios.isAxiosError(error) && error.response) {
    if (
      (error.response.status === 400 && error.response.data instanceof Buffer) ||
      error.response.data instanceof ArrayBuffer
    ) {
      const decoder = new TextDecoder("utf-8");
      const errorText = decoder.decode(error.response.data);
      try {
        const errorData = JSON.parse(errorText);
        return formatPlainError(errorData);
      } catch (parseError) {
        return formatPlainError(parseError);
      }
    }
  }

  if (error?.isAxiosError && error?.response?.status === 404) {
    return formatPlainError(error?.message);
  }
  if (error?.isAxiosError && error?.response?.status !== 404) {
    return formatPlainError(error?.response?.data) || formatPlainError(error?.message);
  }
  return formatPlainError(error);
}

export default function formatError(error: any, options?: { noFallbackMessage?: boolean }): string | undefined {
  return (
    formatApolloError(error) ||
    formatAxiosError(error) ||
    formatPlainError(error) ||
    (options?.noFallbackMessage ? undefined : fallbackError())
  );
}
