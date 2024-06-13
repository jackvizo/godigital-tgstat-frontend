import formatError from "./format-error";

export async function serverErrorLog(error: any) {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/client-log`, {
    method: "POST",
    body: JSON.stringify({ type: "error", message: formatError(error) }),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.error(error);
  });
}
