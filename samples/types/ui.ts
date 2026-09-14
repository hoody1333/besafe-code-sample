/**
 * Portfolio sample: UI-facing types only.
 * No transport, crypto, or persistence types.
 */

export const STATUS_CHIP_VALUES = [
  "active",
  "local-only",
  "beta-working",
  "planned",
  "pending-audit",
] as const;

export type StatusChipStatus = (typeof STATUS_CHIP_VALUES)[number];

export interface StatusChipProps {
  status: StatusChipStatus;
}

export interface ComingSoonButtonProps {
  label: string;
}

export type LanguageSwitcherVariant = "header" | "segmented";

export interface LanguageSwitcherProps {
  variant?: LanguageSwitcherVariant;
}

export interface FeatureCardProps {
  title: string;
  summary: string;
  status: StatusChipStatus;
}
