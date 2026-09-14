import { useI18n } from "../i18n/I18nProvider.js";
import type { ComingSoonButtonProps } from "../types/ui.js";

export function ComingSoonButton({ label }: ComingSoonButtonProps) {
  const { t } = useI18n();
  const status = t("common.comingSoon");

  return (
    <button
      type="button"
      className="btn coming-soon"
      disabled
      aria-disabled="true"
      aria-label={`${label}. ${status}`}
    >
      {label}
      <span className="pill">{status}</span>
    </button>
  );
}
