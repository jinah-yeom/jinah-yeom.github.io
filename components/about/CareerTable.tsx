import { ABOUT_PARAGRAPH } from "./AboutSection";

export interface CareerRow {
  /** 2025.06 – 2026.08 */
  period: string;
  company: string;
  role: string;
  description: string;
}

export interface CareerTableProps {
  rows?: CareerRow[];
}

const CELL =
  "text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)]";

export default function CareerTable({ rows = [] }: CareerTableProps) {
  return (
    <div className="flex flex-col">
      {rows.map((row) => (
        /* 행마다 상단 보더 — 첫 행에도 넣어 라벨과 같은 선에서 시작한다 */
        <div
          key={row.period}
          className="grid grid-cols-[140px_220px_1fr] gap-[var(--space-300)] border-t border-[var(--color-divider-alternative)] py-[var(--space-250)] max-[720px]:grid-cols-1 max-[720px]:gap-[var(--space-100)]"
        >
          <p className={`${CELL} text-[var(--color-label-alternative)]`}>
            {row.period}
          </p>

          <p className={CELL}>
            <span className="[font-weight:var(--font-weight-700)]">
              {row.company}
            </span>
            <span className="text-[var(--color-label-alternative)]">
              {" · "}
              {row.role}
            </span>
          </p>

          <p className={ABOUT_PARAGRAPH}>{row.description}</p>
        </div>
      ))}
    </div>
  );
}
