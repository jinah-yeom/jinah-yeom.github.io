import { FIGURE_CAPTION } from "./SlotFrame";

export interface FlowTrack {
  /** 이 흐름의 이름 (AS-IS · 직렬) */
  label: string;
  /** 순서대로 놓이는 단계 이름 */
  nodes: string[];
  /** 마지막 단계 뒤에 붙는 한 줄 — 이 흐름의 결과 */
  note?: string;
  /** 강조할 노드의 인덱스 */
  highlight?: number;
}

export interface FlowCompareProps {
  tracks?: FlowTrack[];
  caption?: string;
}

/**
 * 같은 일을 두 순서로 했을 때를 위아래로 놓는 도형.
 * SVG 대신 플렉스로 그린다 — 글자가 길어져도 깨지지 않고, 좁은 화면에서 세로로 접힌다.
 */
export default function FlowCompare({ tracks = [], caption }: FlowCompareProps) {
  return (
    <figure className="my-[var(--space-400)]">
      <div className="flex flex-col gap-[var(--space-400)]">
        {tracks.map((track) => (
          <div
            key={track.label}
            className="border-t border-[var(--color-divider-normal)] pt-[var(--space-250)]"
          >
            <p className="mb-[var(--space-200)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)]">
              {track.label}
            </p>

            <ol className="flex flex-wrap items-center gap-[var(--space-150)]">
              {track.nodes.map((node, index) => (
                <li
                  key={node}
                  className="flex items-center gap-[var(--space-150)]"
                >
                  {index > 0 && (
                    <span
                      aria-hidden
                      className="text-[length:var(--font-size-075)] text-[var(--color-label-assistive)]"
                    >
                      →
                    </span>
                  )}
                  <span
                    className={`rounded-[var(--radius-300)] px-[var(--space-200)] py-[var(--space-100)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] [font-weight:var(--font-weight-600)] ${
                      index === track.highlight
                        ? "bg-[var(--color-gray-950)] text-[var(--color-label-inverse)]"
                        : "bg-[var(--color-background-alternative)] text-[var(--color-label-neutral)]"
                    }`}
                  >
                    {node}
                  </span>
                </li>
              ))}
            </ol>

            {track.note && (
              <p className="mt-[var(--space-150)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)]">
                {track.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {caption && <figcaption className={FIGURE_CAPTION}>{caption}</figcaption>}
    </figure>
  );
}
