import type { ReactElement } from "react";
import { LOCALES, type Locale } from "./locale.js";
import { useI18n } from "./I18nProvider.js";
import type { LanguageSwitcherProps } from "../types/ui.js";

export function LanguageSwitcher({
  variant = "header",
}: LanguageSwitcherProps): ReactElement {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={
        variant === "segmented" ? "lang-switch lang-switch--segmented" : "lang-switch"
      }
      role="group"
      aria-label={t("language.switcher")}
    >
      {LOCALES.map((code, index) => {
        const pressed = locale === code;
        return (
          <span key={code} className="lang-switch-item">
            {variant === "header" && index > 0 ? (
              <span className="lang-switch-sep" aria-hidden="true">
                |
              </span>
            ) : null}
            <button
              type="button"
              className="lang-switch-btn"
              aria-pressed={pressed}
              aria-current={pressed ? true : undefined}
              aria-label={t(languageLabelKey(code))}
              onClick={() => setLocale(code)}
            >
              {code.toUpperCase()}
            </button>
          </span>
        );
      })}
    </div>
  );
}

function languageLabelKey(locale: Locale): "language.en" | "language.pl" {
  switch (locale) {
    case "en":
      return "language.en";
    case "pl":
      return "language.pl";
    default: {
      const unexpected: never = locale;
      throw new Error(`Unhandled locale: ${unexpected}`);
    }
  }
}
