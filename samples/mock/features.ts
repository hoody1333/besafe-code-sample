import type { FeatureRecord } from "../types/feature-status.js";
import type { StatusChipStatus } from "../types/ui.js";

/**
 * Static mock rows for UI review. Not production data and not a live API.
 */
export interface MockFeatureCard {
  id: FeatureRecord["id"];
  lane: FeatureRecord["lane"];
  status: StatusChipStatus;
  titleKey: "feature.generator.title" | "feature.secrets.title" | "feature.rooms.title";
  summaryKey:
    | "feature.generator.summary"
    | "feature.secrets.summary"
    | "feature.rooms.summary";
}

export const MOCK_FEATURE_CARDS: readonly MockFeatureCard[] = [
  {
    id: "password-generator",
    lane: "core",
    status: "local-only",
    titleKey: "feature.generator.title",
    summaryKey: "feature.generator.summary",
  },
  {
    id: "one-time-messages",
    lane: "core",
    status: "active",
    titleKey: "feature.secrets.title",
    summaryKey: "feature.secrets.summary",
  },
  {
    id: "rooms-1to1",
    lane: "beta",
    status: "beta-working",
    titleKey: "feature.rooms.title",
    summaryKey: "feature.rooms.summary",
  },
];
