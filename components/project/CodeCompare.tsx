import { FIGURE_CAPTION } from "./SlotFrame";
import { CODE_SURFACE, CODE_TEXT } from "./SnippetBlock";

export interface CodePanel {
  /** 패널 머리말 (AS-IS · 값이 화면에 박혀 있는 상태) */
  label: string;
  /** 코드 원문. 렌더하지 않고 그대로 보여준다 */
  code: string;
}

export interface CodeCompareProps {
  /** 왼쪽 — 개선 전 */
  before: CodePanel;
  /** 오른쪽 — 개선 후 */
  after: CodePanel;
  caption?: string;
}

const PANEL_LABEL =
  "border-b border-[var(--color-divider-alternative)] px-[var(--space-250)] py-[var(--space-100)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)]";

/**
 * 같은 화면을 두 방식으로 썼을 때를 나란히 놓는 블록.
 * 코드 블록과 같은 겉면·본문 스타일을 쓰되, 머리말 색으로만 전후를 구분한다.
 */
export default function CodeCompare({
  before,
  after,
  caption,
}: CodeCompareProps) {
  return (
    <figure className="my-[var(--space-400)]">
      <div className="grid grid-cols-2 gap-[var(--space-250)] max-[720px]:grid-cols-1">
        {[
          { panel: before, tone: "text-[var(--color-foreground-danger-on-transparent)]" },
          { panel: after, tone: "text-[var(--color-foreground-success-on-transparent)]" },
        ].map(({ panel, tone }) => (
          <div
            key={panel.label}
            className={`overflow-hidden ${CODE_SURFACE}`}
          >
            <p className={`${PANEL_LABEL} ${tone}`}>{panel.label}</p>
            <pre className={CODE_TEXT}>{panel.code}</pre>
          </div>
        ))}
      </div>

      {caption && <figcaption className={FIGURE_CAPTION}>{caption}</figcaption>}
    </figure>
  );
}
