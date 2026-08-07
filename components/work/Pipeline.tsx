import { Fragment } from "react";

export interface PipelineNode {
  label: string;
  /** 이 사이트가 실제로 쓰는 단계처럼, 강조할 노드 */
  highlight?: boolean;
}

export interface PipelineProps {
  nodes?: PipelineNode[];
  /** 노드 사이 구분 기호 */
  separator?: string;
}

const NODE_BASE =
  "rounded-[var(--radius-300)] border px-[var(--space-150)] py-[var(--space-075)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] [font-weight:var(--font-weight-600)]";

const NODE_IDLE =
  "border-[var(--color-divider-neutral)] bg-[var(--color-background-alternative)]";

const NODE_HIGHLIGHT =
  "border-[var(--color-border-contrast)] bg-[var(--color-gray-950)] text-[var(--color-label-inverse)]";

export default function Pipeline({
  nodes = [],
  separator = "→",
}: PipelineProps) {
  return (
    <div className="my-[var(--space-250)] flex flex-wrap items-center gap-[var(--space-100)]">
      {nodes.map((node, index) => (
        <Fragment key={node.label}>
          {index > 0 && (
            <span
              aria-hidden
              className="text-[length:var(--font-size-075)] text-[var(--color-label-assistive)]"
            >
              {separator}
            </span>
          )}
          <span
            className={`${NODE_BASE} ${
              node.highlight ? NODE_HIGHLIGHT : NODE_IDLE
            }`}
          >
            {node.label}
          </span>
        </Fragment>
      ))}
    </div>
  );
}
