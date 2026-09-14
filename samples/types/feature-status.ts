/**
 * Portfolio sample: public feature lanes used on the BeSafe UI.
 * This is not the product feature registry.
 */

export const FEATURE_LANES = ["core", "beta", "planned"] as const;

export type FeatureLane = (typeof FEATURE_LANES)[number];

export const FEATURE_IDS = [
  "password-generator",
  "one-time-messages",
  "pwa-shell",
  "rooms-1to1",
  "independent-audit",
] as const;

export type FeatureId = (typeof FEATURE_IDS)[number];

export interface FeatureRecord {
  id: FeatureId;
  lane: FeatureLane;
  availableInPreview: boolean;
}

export function assertNever(value: never, label: string): never {
  throw new Error(`Unhandled ${label}: ${String(value)}`);
}

export function laneLabel(lane: FeatureLane): "Core" | "Beta" | "Planned" {
  switch (lane) {
    case "core":
      return "Core";
    case "beta":
      return "Beta";
    case "planned":
      return "Planned";
    default:
      return assertNever(lane, "feature lane");
  }
}
