import { PROSE_HEADLINE, PROSE_PARAGRAPH } from "./ProseSection";

export interface ProblemStat {
  /** 82% / 100% 처럼 문제의 크기를 보여주는 수치 */
  num: string;
  /** 이 수치가 무엇인지 */
  label: string;
}

export interface ProblemBlockProps {
  /** 주장 문장 — 라벨이 아니다 */
  headline: string;
  /** 본문에 섞여 묻히던 조사 수치를 헤드라인 바로 아래로 끌어올린다 */
  stat?: ProblemStat;
  paragraphs?: string[];
}

export default function ProblemBlock({
  headline,
  stat,
  paragraphs = [],
}: ProblemBlockProps) {
  return (
    <article>
      <h3 className={PROSE_HEADLINE}>{headline}</h3>

      {stat && (
        <p className="mb-[var(--space-250)] flex items-baseline gap-[var(--space-150)]">
          <span className="text-[length:var(--font-size-450)] leading-[var(--font-line-height-400)] tracking-[var(--font-letter-spacing-display)] [font-weight:var(--font-weight-800)]">
            {stat.num}
          </span>
          <span className="text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)]">
            {stat.label}
          </span>
        </p>
      )}

      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}
    </article>
  );
}
