import { FIGURE_CAPTION } from "./SlotFrame";

export interface TerminalBlockProps {
  /** 터미널 출력 원문 */
  content: string;
  caption?: string;
}

/**
 * 스크립트 실행 결과를 터미널 화면 그대로 보여주는 블록.
 * 코드 블록과 달리 어두운 배경을 쓴다 — 사람이 읽는 문서가 아니라 도구의 출력이라는 표시다.
 */
export default function TerminalBlock({
  content,
  caption,
}: TerminalBlockProps) {
  return (
    <figure className="my-[var(--space-400)]">
      <pre className="overflow-x-auto rounded-[var(--radius-300)] bg-[var(--color-gray-950)] p-[var(--space-250)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-gray-100)]">
        {content}
      </pre>

      {caption && <figcaption className={FIGURE_CAPTION}>{caption}</figcaption>}
    </figure>
  );
}
