import type { Locale } from "./locale.js";
import { sampleMessages, type SampleMessageKey } from "./messages.js";

export function translate(
  locale: Locale,
  key: SampleMessageKey,
  vars: Record<string, string | number> = {},
): string {
  let text: string = sampleMessages[locale][key];
  for (const [name, value] of Object.entries(vars)) {
    text = text.replaceAll(`{${name}}`, String(value));
  }
  return text;
}
