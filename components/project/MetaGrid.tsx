export interface MetaItem {
  /** Timeline / Product / Team / Role / Tools */
  label: string;
  value: string;
}

export interface MetaGridProps {
  items?: MetaItem[];
}

export default function MetaGrid({ items = [] }: MetaGridProps) {
  return (
    <section>
      <dl className="grid grid-cols-5 gap-[var(--space-300)] border-t border-[var(--color-divider-normal)] pt-[var(--space-300)] max-[720px]:grid-cols-2 max-[480px]:grid-cols-1">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="mb-[var(--space-075)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
              {item.label}
            </dt>
            <dd className="text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-neutral)]">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
