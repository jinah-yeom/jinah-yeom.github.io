import { FIGURE_CAPTION } from "./SlotFrame";

export interface DataTableProps {
  /** 열 머리말 */
  headers: string[];
  /** 행 — 셀 개수는 headers 와 같아야 한다 */
  rows: string[][];
  /**
   * 모노스페이스로 찍을 열 인덱스. 토큰·prop 이름처럼 문자 그대로가 중요한 열에 쓴다.
   */
  monoColumns?: number[];
  caption?: string;
}

const CELL =
  "border-b border-[var(--color-divider-alternative)] px-[var(--space-150)] py-[var(--space-100)] text-left align-top";

export default function DataTable({
  headers,
  rows,
  monoColumns = [],
  caption,
}: DataTableProps) {
  const mono = new Set(monoColumns);

  return (
    <figure className="my-[var(--space-400)]">
      {/* 스크롤은 래퍼가 맡는다 — table 에 display:block 을 주면 열 너비가 무너진다 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)]">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className={`${CELL} border-[var(--color-divider-normal)] whitespace-nowrap [font-weight:var(--font-weight-700)]`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell, index) => (
                  <td
                    key={cell}
                    className={`${CELL} text-[var(--color-label-neutral)] ${
                      mono.has(index)
                        ? "font-[family-name:var(--site-font-mono)]"
                        : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {caption && <figcaption className={FIGURE_CAPTION}>{caption}</figcaption>}
    </figure>
  );
}
