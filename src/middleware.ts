export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    /*
     * Запросы, которые будут проходить через middleware:
     * Исключаем маршруты вида /api/v1, которые проверяются по специальному токену BACKEND_TOKEN,
     * а не средствами NextAuth
     */
    "/((?!api/v1).*)",
  ],
};
