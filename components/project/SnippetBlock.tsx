/*
 * 코드 블록의 겉면과 본문 스타일.
 * 블로그 MDX 의 pre 와 이 컴포넌트가 함께 참조한다 — 같은 역할이면 같은 조합이어야 하고,
 * 한쪽만 바뀌어 어긋나는 일이 없어야 한다.
 */
export const CODE_SURFACE =
  "rounded-[var(--radius-300)] border border-[var(--color-divider-alternative)] bg-[var(--color-background-alternative)]";

export const CODE_TEXT =
  "overflow-x-auto p-[var(--space-250)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-neutral)]";

export interface SnippetBlockProps {
  /** 라벨 바에 찍히는 파일명 */
  filename: string;
  /** 파일 원문. 렌더하지 않고 그대로 보여준다 */
  content: string;
}

/**
 * 파일 원문을 파일명과 함께 보여주는 블록.
 * 마크다운을 렌더하지 않는 것이 요점이다 — 실제로 쓴 문서가 어떻게 생겼는지가 내용이다.
 */
export default function SnippetBlock({
  filename,
  content,
}: SnippetBlockProps) {
  return (
    /* 미디어 슬롯과 같은 세로 간격 */
    <figure className={`my-[var(--space-400)] overflow-hidden ${CODE_SURFACE}`}>
      <p className="border-b border-[var(--color-divider-alternative)] bg-[var(--color-gray-050)] px-[var(--space-250)] py-[var(--space-100)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] text-[var(--color-label-assistive)]">
        {filename}
      </p>

      <pre className={CODE_TEXT}>{content}</pre>
    </figure>
  );
}
