import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "ru", "uz", "tr"],
  defaultLocale: "en",
});

export default authMiddleware({
  beforeAuth: (req) => intlMiddleware(req),
  publicRoutes: ["/:lng"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
