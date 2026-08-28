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
 * 프로즈에는 읽기 폭을 걸지 않는다 — 워크 상세는 글과 미디어가 한 흐름으로
 * 번갈아 나오는 화면이라, 글만 800px 로 좁히면 문단마다 오른쪽 끝이 미디어와
 * 어긋나 흐름이 끊겼다. 글도 미디어와 같은 컨테이너 폭으로 흐른다.
 *
 * 블로그 상세는 <article> 이 통째로 읽기 폭을 잡는다(app/blog/[slug]/page.tsx).
 * 이 상수들은 거기서도 쓰이지만 바깥 래퍼가 이미 좁혀 둔 뒤라 영향이 없다.
 */
export const PROSE_HEADLINE =
  "mb-[var(--space-250)] text-[length:var(--font-size-300)] leading-[var(--font-line-height-300)] tracking-[var(--font-letter-spacing-heading-sm)] [font-weight:var(--font-weight-700)]";

/** 섹션 헤드라인 아래 단계의 소제목 — Approach 카드 제목, 블로그 h3 */
export const PROSE_SUBHEADLINE =
  "mb-[var(--space-200)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] tracking-[var(--font-letter-spacing-heading-sm)] [font-weight:var(--font-weight-700)]";

export const PROSE_PARAGRAPH =
  "mb-[var(--space-200)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)] last:mb-0";

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
