import { PROSE_STRONG } from "./ProseSection";

export interface QuoteBlockProps {
  /** 정의 대상의 이름 — 굵게 앞에 선다 */
  term?: string;
  /** 이름에 이어지는 정의 문장 */
  description: string;
}

/**
 * 인용·정의 블록의 겉면.
 * 블로그 마크다운의 blockquote 와 같은 값을 쓴다 — 같은 역할이면 같은 조합이어야
 * 하므로 한 곳에서만 정의하고 mdx-components 가 이 상수를 가져다 쓴다.
 */
export const QUOTE_SURFACE =
  "my-[var(--space-300)] border-l-[length:var(--dimension-025)] border-[var(--color-divider-normal)] pl-[var(--space-250)] text-[var(--color-label-alternative)]";

/** 본문 안에서 용어를 정의하는 인용 블록 — 원고의 > 블록 자리 */
export default function QuoteBlock({ term, description }: QuoteBlockProps) {
  return (
    <blockquote
      className={`${QUOTE_SURFACE} text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)]`}
    >
      {term && (
        <>
          <strong className={PROSE_STRONG}>{term}</strong>{" "}
        </>
      )}
      : {description}
    </blockquote>
  );
}
