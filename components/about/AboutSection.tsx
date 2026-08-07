import type { ReactNode } from "react";

export interface AboutColumn {
  paragraphs: string[];
  /** 문단 아래 붙는 불릿 목록 */
  list?: string[];
}

export interface AboutItem {
  title: string;
  ko: AboutColumn;
  en: AboutColumn;
}

export interface AboutSectionProps {
  /** How I Think / How I Work / Strengths */
  category: string;
  items?: AboutItem[];
  /** 섹션 끝에 덧붙일 내용 (연락처 행 등) */
  children?: ReactNode;
}

const PARAGRAPH =
  "mb-[var(--space-150)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-neutral)]";

function Column({ column, lang }: { column: AboutColumn; lang?: string }) {
  return (
    <div lang={lang}>
      {column.paragraphs.map((paragraph) => (
        <p key={paragraph} className={PARAGRAPH}>
          {paragraph}
        </p>
      ))}
      {column.list && (
        <ul className="mt-[var(--space-150)] ml-[var(--space-200)] flex list-disc flex-col gap-[var(--space-100)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)]">
          {column.list.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AboutSection({
  category,
  items = [],
  children,
}: AboutSectionProps) {
  return (
    <section className="py-[var(--space-600)]">
      <h2 className="mb-[var(--space-500)] text-[length:var(--font-size-300)] leading-[var(--font-line-height-300)] tracking-[var(--font-letter-spacing-heading-md)] [font-weight:var(--font-weight-800)]">
        {category}
      </h2>

      <div className="flex flex-col gap-[var(--space-600)]">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="mb-[var(--space-250)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] [font-weight:var(--font-weight-700)]">
              {item.title}
            </h3>
            <div className="grid grid-cols-2 gap-[var(--space-600)] max-[720px]:grid-cols-1 max-[720px]:gap-[var(--space-300)]">
              <Column column={item.ko} />
              <Column column={item.en} lang="en" />
            </div>
          </div>
        ))}
      </div>

      {children}
    </section>
  );
}
