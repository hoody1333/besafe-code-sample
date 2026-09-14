import type { Locale } from "./locale.js";

/**
 * Small bilingual table for reviewing i18n shape.
 * This is not the product message catalog.
 */
export const sampleMessages = {
  en: {
    "language.switcher": "Language",
    "language.en": "English",
    "language.pl": "Polish",
    "status.active": "Active",
    "status.local-only": "Local only",
    "status.beta-working": "Beta · working",
    "status.planned": "Planned",
    "status.pending-audit": "Independent audit pending",
    "common.comingSoon": "Coming soon",
    "feature.generator.title": "Password generator",
    "feature.generator.summary": "Creates passwords and passphrases in the browser.",
    "feature.secrets.title": "One-time messages",
    "feature.secrets.summary": "Encrypted one-time payload with TTL and burn-after-reading.",
    "feature.rooms.title": "Temporary 1:1 rooms",
    "feature.rooms.summary": "Temporary encrypted 1:1 room. Production Beta with HTTPS polling.",
  },
  pl: {
    "language.switcher": "Język",
    "language.en": "angielski",
    "language.pl": "polski",
    "status.active": "Aktywne",
    "status.local-only": "Tylko lokalnie",
    "status.beta-working": "Beta · działa",
    "status.planned": "Planowane",
    "status.pending-audit": "Niezależny audyt w przygotowaniu",
    "common.comingSoon": "Wkrótce",
    "feature.generator.title": "Generator haseł",
    "feature.generator.summary": "Tworzy hasła i frazy w przeglądarce.",
    "feature.secrets.title": "Wiadomości jednorazowe",
    "feature.secrets.summary": "Szyfrowana treść jednorazowa z TTL i odczytem jednorazowym.",
    "feature.rooms.title": "Tymczasowe pokoje 1:1",
    "feature.rooms.summary": "Tymczasowy szyfrowany pokój 1:1. Produkcyjna Beta z HTTPS polling.",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type SampleMessageKey = keyof (typeof sampleMessages)["en"];
