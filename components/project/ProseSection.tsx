import type { ReactNode } from "react";
import MediaSlot, { type MediaItem } from "./MediaSlot";

export interface ProseSectionProps {
  /** 섹션 라벨 (OVERVIEW / BACKGROUND / PROBLEM …) */
  eyebrow?: string;
  /** 주장형 헤드라인 — 라벨이 아니라 문장 */
  headline?: string;
  paragraphs?: string[];
  /** 이미지·영상을 섞어 여러 개 붙일 수 있다 (SolutionBlock 과 같은 방식) */
  media?: MediaItem[];
  /**
   * Problem·Solution 처럼 블록이 반복되는 섹션은 여기에 넣는다.
   * 라벨만 있는 그룹 헤더로도 쓸 수 있게 자식 간 여백까지 이 컴포넌트가 잡는다.
   */
  children?: ReactNode;
}

/*
 * 읽기 폭. 본문 컨테이너가 1552px 이라 그대로 흘리면 한 줄이 140자를 넘어
 * 눈이 다음 줄 첫 글자를 놓친다.
 *
 * 섹션이 아니라 글자에 건다 — ProseSection·SolutionBlock 은 문단과 미디어를
 * 같은 상자 안에 형제로 늘어놓고, konkrit 처럼 children 안에서 둘이 섞이기도
 * 한다. 섹션을 좁히면 미디어까지 따라 좁아지고, 텍스트만 감싸는 래퍼는 섞인
 * 자리에서 깨진다. 글자에 걸어 두면 어디에 놓이든 따라간다.
 */
const MEASURE = "max-w-[var(--site-width-prose)]";

export const PROSE_HEADLINE =
  `mb-[var(--space-250)] text-[length:var(--font-size-300)] leading-[var(--font-line-height-300)] tracking-[var(--font-letter-spacing-heading-sm)] [font-weight:var(--font-weight-700)] ${MEASURE}`;

/** 섹션 헤드라인 아래 단계의 소제목 — Approach 카드 제목, 블로그 h3 */
export const PROSE_SUBHEADLINE =
  `mb-[var(--space-200)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] tracking-[var(--font-letter-spacing-heading-sm)] [font-weight:var(--font-weight-700)] ${MEASURE}`;

export const PROSE_PARAGRAPH =
  `mb-[var(--space-200)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)] last:mb-0 ${MEASURE}`;

/** 본문 속 볼드 — 굵기만이 아니라 색도 한 단계 올려 본문과 구분한다 */
export const PROSE_STRONG =
  "[font-weight:var(--font-weight-700)] text-[var(--color-label-normal)]";

export default function ProseSection({
  eyebrow,
  headline,
  paragraphs = [],
  media = [],
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

      {media.map((item) => (
        <MediaSlot key={item.label} {...item} />
      ))}

      {children && (
        <div className="flex flex-col gap-[var(--space-700)]">{children}</div>
      )}
    </section>
  );
}
