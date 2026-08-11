import type { ReactNode } from "react";
import ImageSlot, { type ImageSlotProps } from "./ImageSlot";

export interface ProseSectionProps {
  /** 섹션 라벨 (OVERVIEW / BACKGROUND / PROBLEM …) */
  eyebrow?: string;
  /** 주장형 헤드라인 — 라벨이 아니라 문장 */
  headline?: string;
  paragraphs?: string[];
  /* TODO: 이 섹션에도 영상이 필요해지면 SolutionBlock 처럼 media?: MediaItem[] 로 바꾼다 */
  image?: ImageSlotProps;
  /**
   * Problem·Solution 처럼 블록이 반복되는 섹션은 여기에 넣는다.
   * 라벨만 있는 그룹 헤더로도 쓸 수 있게 자식 간 여백까지 이 컴포넌트가 잡는다.
   */
  children?: ReactNode;
}

export const PROSE_HEADLINE =
  "mb-[var(--space-250)] text-[length:var(--font-size-300)] leading-[var(--font-line-height-300)] tracking-[var(--font-letter-spacing-heading-sm)] [font-weight:var(--font-weight-700)]";

export const PROSE_PARAGRAPH =
  "mb-[var(--space-200)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)] last:mb-0";

export default function ProseSection({
  eyebrow,
  headline,
  paragraphs = [],
  image,
  children,
}: ProseSectionProps) {
  return (
    <section>
      {eyebrow && (
        <p className="mb-[var(--space-300)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
          {eyebrow}
        </p>
      )}

      {headline && <h2 className={PROSE_HEADLINE}>{headline}</h2>}

      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}

      {image && <ImageSlot {...image} />}

      {children && (
        <div className="flex flex-col gap-[var(--space-700)]">{children}</div>
      )}
    </section>
  );
}
