'use client'
import { createI18nClient } from "next-international/client";

const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
} = createI18nClient({
  en: () => import("./en"),
  de: () => import("./de"),
  fr: () => import("./fr"),
  ar: () => import("./ar"),
  it: () => import("./it"),
  tr: () => import("./tr"),
  pt: () => import("./pt"),
  ro: () => import("./ro"),
});

export {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
};
