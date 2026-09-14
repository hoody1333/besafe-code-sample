import { useI18n } from "../i18n/I18nProvider.js";
import type { StatusChipProps, StatusChipStatus } from "../types/ui.js";
import type { SampleMessageKey } from "../i18n/messages.js";

function statusChipLabelKey(status: StatusChipStatus): SampleMessageKey {
  switch (status) {
    case "active":
      return "status.active";
    case "local-only":
      return "status.local-only";
    case "beta-working":
      return "status.beta-working";
    case "planned":
      return "status.planned";
    case "pending-audit":
      return "status.pending-audit";
    default: {
      const unexpected: never = status;
      throw new Error(`Unhandled status chip: ${unexpected}`);
    }
  }
}

export function StatusChip({ status }: StatusChipProps) {
  const { t } = useI18n();
  const label = t(statusChipLabelKey(status));

  return (
    <span className={`status-chip status-chip--${status}`} data-status={status}>
      <span className="status-chip-text">{label}</span>
    </span>
  );
}
