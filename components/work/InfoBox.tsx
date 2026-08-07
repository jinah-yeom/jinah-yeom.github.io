import type { ReactNode } from "react";

export interface InfoRow {
  term: string;
  description: ReactNode;
}

export interface InfoBoxProps {
  rows?: InfoRow[];
}

export default function InfoBox({ rows = [] }: InfoBoxProps) {
  return (
    <dl className="my-[var(--space-300)] grid grid-cols-[var(--site-infobox-term-width)_1fr] gap-x-[var(--space-200)] gap-y-[var(--space-100)] rounded-[var(--radius-400)] border border-[var(--color-divider-neutral)] p-[var(--space-250)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)]">
      {rows.map((row) => (
        <div key={row.term} className="contents">
          <dt className="text-[var(--color-label-assistive)] [font-weight:var(--font-weight-500)]">
            {row.term}
          </dt>
          <dd className="text-[var(--color-label-normal)] [font-weight:var(--font-weight-500)]">
            {row.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
