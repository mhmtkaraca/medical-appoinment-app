import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "de", "fr", "ar", "it", "tr", "pt", "ro", "fi", "el"],
  defaultLocale: "en",
});

export function middleware(request) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
