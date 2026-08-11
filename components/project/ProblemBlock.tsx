import { PROSE_HEADLINE, PROSE_PARAGRAPH } from "./ProseSection";

export interface ProblemBlockProps {
  /** 주장 문장 — 라벨이 아니다 */
  headline: string;
  paragraphs?: string[];
}

export default function ProblemBlock({
  headline,
  paragraphs = [],
}: ProblemBlockProps) {
  return (
    <article>
      <h3 className={PROSE_HEADLINE}>{headline}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}
    </article>
  );
}
