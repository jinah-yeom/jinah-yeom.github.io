import { PROSE_SUBHEADLINE } from "./ProseSection";

export interface ApproachItem {
  /**
   * 어느 축의 원칙인지 — 날짜 탐색 / 업무 필터 …
   * 항목이 제목만으로 구분되면 비운다. 같은 말을 항목마다 되풀이하는 자리가 아니다.
   */
  label?: string;
  /** 원칙 한 문장 */
  title: string;
  /** 결정과 근거만. 과정 나열 금지 */
  bullets?: string[];
}

export interface ApproachListProps {
  items?: ApproachItem[];
}

export default function ApproachList({ items = [] }: ApproachListProps) {
  return (
    /* 2×2 그리드 — Problem 3개 + 전체 공통 원칙 1개가 한눈에 대응된다 */
    <ul className="grid grid-cols-2 gap-[var(--space-300)] max-[720px]:grid-cols-1">
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-[var(--radius-400)] bg-[var(--color-background-alternative)] p-[var(--space-300)]"
        >
          {item.label && (
            <p className="mb-[var(--space-100)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
              {item.label}
            </p>
          )}

          <h3 className={PROSE_SUBHEADLINE}>{item.title}</h3>

          <ul className="flex flex-col gap-[var(--space-100)]">
            {item.bullets?.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-[var(--space-100)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-neutral)]"
              >
                <span aria-hidden className="text-[var(--color-label-assistive)]">
                  ·
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
