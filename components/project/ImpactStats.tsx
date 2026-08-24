export interface ImpactStat {
  /** 수치 본체 (33, 346, 0 …) */
  value: string;
  /** 수치 뒤에 붙는 단위 (종, 개, 건) */
  unit?: string;
  /** 이 수치가 무엇인지 */
  label: string;
}

export interface ImpactShift {
  /** 무엇에 드는 일이 바뀌었는지 */
  label: string;
  /** 개선 전 — 취소선으로 표시된다 */
  from: string;
  /** 개선 후 */
  to: string;
}

export interface ImpactStatsProps {
  eyebrow?: string;
  stats?: ImpactStat[];
  /** 수치 아래 한 줄 as-is → to-be 비교 */
  shift?: ImpactShift;
  /** 수치의 출처·집계 방식 */
  basis?: string;
}

export default function ImpactStats({
  eyebrow = "IMPACT",
  stats = [],
  shift,
  basis,
}: ImpactStatsProps) {
  return (
    <section>
      {eyebrow && (
        <p className="mb-[var(--space-300)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
          {eyebrow}
        </p>
      )}

      <dl className="grid grid-cols-3 gap-[var(--space-500)] max-[720px]:grid-cols-1 max-[720px]:gap-[var(--space-400)]">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dd className="text-[length:var(--font-size-500)] leading-[var(--font-line-height-500)] tracking-[var(--font-letter-spacing-display)] [font-weight:var(--font-weight-800)]">
              {stat.value}
              {stat.unit && (
                <span className="ml-[var(--space-050)] text-[length:var(--font-size-200)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-500)]">
                  {stat.unit}
                </span>
              )}
            </dd>
            <dt className="mt-[var(--space-100)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)]">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>

      {shift && (
        /* 수치가 아니라 일하는 방식이 바뀐 지점 — 반전 배경으로 한 줄만 강조한다 */
        <p className="mt-[var(--space-500)] flex flex-wrap items-baseline gap-x-[var(--space-250)] gap-y-[var(--space-100)] rounded-[var(--radius-300)] bg-[var(--color-gray-950)] px-[var(--space-300)] py-[var(--space-250)]">
          <span className="text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-assistive)]">
            {shift.label}
          </span>
          <span className="flex flex-wrap items-baseline gap-[var(--space-150)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)]">
            <s className="text-[var(--color-label-assistive)]">{shift.from}</s>
            <span aria-hidden className="text-[var(--color-label-assistive)]">
              →
            </span>
            <b className="text-[var(--color-label-inverse)] [font-weight:var(--font-weight-700)]">
              {shift.to}
            </b>
          </span>
        </p>
      )}

      {basis && (
        <p className="mt-[var(--space-300)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] text-[var(--color-label-assistive)]">
          {basis}
        </p>
      )}
    </section>
  );
}
