import { PROSE_PARAGRAPH } from "./ProseSection";

export interface ApproachItem {
  /** 볼드 리드-인 — 원칙 한 문장 */
  lead: string;
  /** 리드에 이어지는 설명 */
  body?: string;
}

export interface ApproachListProps {
  /** 목록 앞에 오는 문단 */
  intro?: string[];
  items?: ApproachItem[];
  /** 목록 뒤에 오는 문단 */
  outro?: string[];
}

export default function ApproachList({
  intro = [],
  items = [],
  outro = [],
}: ApproachListProps) {
  return (
    <>
      {intro.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}

      <ul className="my-[var(--space-400)] flex flex-col gap-[var(--space-300)]">
        {items.map((item) => (
          <li
            key={item.lead}
            className="text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)]"
          >
            <strong className="[font-weight:var(--font-weight-700)] text-[var(--color-label-normal)]">
              {item.lead}
            </strong>
            {item.body && ` ${item.body}`}
          </li>
        ))}
      </ul>

      {outro.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}
    </>
  );
}
