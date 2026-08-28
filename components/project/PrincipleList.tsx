export interface Principle {
  /** 원칙 한 문장 */
  title: string;
  /** 왜 그렇게 정했는지 */
  body: string;
}

export interface PrincipleListProps {
  items?: Principle[];
}

export default function PrincipleList({ items = [] }: PrincipleListProps) {
  return (
    /* 1열 전폭 박스 — 같은 페이지의 본문·미디어와 오른쪽 끝을 맞춘다 */
    <ul className="flex flex-col gap-[var(--space-300)]">
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-[var(--radius-400)] bg-[var(--color-background-alternative)] p-[var(--space-300)]"
        >
          <h4 className="mb-[var(--space-100)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] [font-weight:var(--font-weight-700)]">
            {item.title}
          </h4>
          <p className="text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-neutral)]">
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
