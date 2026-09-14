export const LOCALES = ["en", "pl"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Only a language code is stored. Never secrets, passwords, or codes. */
export const LOCALE_STORAGE_KEY = "besafe.ui.locale";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function parseLocale(value: string | null | undefined): Locale {
  if (typeof value === "string" && isLocale(value)) {
    return value;
  }
  return DEFAULT_LOCALE;
}

export function localeToHtmlLang(locale: Locale): "en" | "pl" {
  switch (locale) {
    case "en":
      return "en";
    case "pl":
      return "pl";
    default: {
      const unexpected: never = locale;
      throw new Error(`Unhandled locale: ${unexpected}`);
    }
  }
}
