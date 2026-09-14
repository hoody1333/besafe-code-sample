import { StatusChip } from "./StatusChip.js";
import type { FeatureCardProps } from "../types/ui.js";

export function FeatureCard({ title, summary, status }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <header className="feature-card-header">
        <h3>{title}</h3>
        <StatusChip status={status} />
      </header>
      <p>{summary}</p>
    </article>
  );
}
