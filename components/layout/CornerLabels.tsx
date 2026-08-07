export interface CornerLabelsProps {
  /** 좌하단 라벨 */
  left?: string;
  /** 우하단 라벨 */
  right?: string;
}

const CORNER_BASE =
  "fixed bottom-[var(--space-250)] z-[var(--site-z-corner)] pointer-events-none text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-nav)] [font-weight:var(--font-weight-500)] text-[var(--color-label-assistive)] max-[720px]:hidden";

export default function CornerLabels({
  left = "SEOUL",
  right = "©2026",
}: CornerLabelsProps) {
  return (
    <>
      <span aria-hidden className={`${CORNER_BASE} left-[var(--space-300)]`}>
        {left}
      </span>
      <span aria-hidden className={`${CORNER_BASE} right-[var(--space-300)]`}>
        {right}
      </span>
    </>
  );
}
