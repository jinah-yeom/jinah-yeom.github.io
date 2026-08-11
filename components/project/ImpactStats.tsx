export interface ImpactStat {
  /** 개선 전 값. 없으면 규모 수치로 보고 단일 값만 표시한다 */
  from?: string;
  /** 개선 후 값 또는 규모 수치 */
  to: string;
  /** 이 수치가 무엇인지 */
  label: string;
}

export interface ImpactStatsProps {
  eyebrow?: string;
  stats?: ImpactStat[];
  /** 측정 조건·출처 등 아래에 붙는 한 줄 */
  caption?: string;
}

export default function ImpactStats({
  eyebrow = "IMPACT",
  stats = [],
  caption,
}: ImpactStatsProps) {
  return (
    <section>
      {eyebrow && (
        <p className="mb-[var(--space-300)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
          {eyebrow}
        </p>
      )}

      <dl className="grid grid-cols-2 gap-[var(--space-600)] max-[720px]:grid-cols-1 max-[720px]:gap-[var(--space-400)]">
        {stats.map((stat) => (
          <div key={stat.label}>
            {/* 개선 전 값은 한 단계 흐리게 — 색이 아니라 대비로 방향을 읽게 한다 */}
            <dd className="flex items-baseline gap-[var(--space-100)] text-[length:var(--font-size-500)] leading-[var(--font-line-height-500)] tracking-[var(--font-letter-spacing-display)] [font-weight:var(--font-weight-800)]">
              {stat.from && (
                <>
                  <span className="text-[var(--color-label-assistive)]">
                    {stat.from}
                  </span>
                  <span
                    aria-hidden
                    className="text-[length:var(--font-size-300)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-500)]"
                  >
                    →
                  </span>
                </>
              )}
              <span>{stat.to}</span>
            </dd>
            <dt className="mt-[var(--space-100)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)]">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>

      {caption && (
        <p className="mt-[var(--space-400)] max-w-[var(--site-prose-width)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-assistive)]">
          {caption}
        </p>
      )}
    </section>
  );
}
