import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export interface WorkMetaRow {
  /** 좌측 라벨 (Years / Role / Scope / Link) */
  label: string;
  value: ReactNode;
}

export interface WorkVisual {
  src: string;
  alt: string;
  /** 세로형 3:4 / 가로형 16:10 */
  ratio?: "tall" | "wide";
  /** 이미지 자리의 배경 톤 — 이미지 로드 전/투명 영역에 보인다 */
  tone?: "light" | "dark";
  width: number;
  height: number;
}

export interface WorkSectionProps {
  title: string;
  paragraphs?: string[];
  meta?: WorkMetaRow[];
  visuals?: WorkVisual[];
  /** 있으면 섹션 전체가 링크가 된다 */
  href?: string;
}

const SECTION =
  "grid grid-cols-[var(--site-work-text-width)_1fr] gap-[var(--space-600)] border-t border-[var(--color-divider-alternative)] py-[var(--space-700)] max-[720px]:grid-cols-1 max-[720px]:gap-[var(--space-300)]";

const RATIO = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
} as const;

const TONE = {
  light: "bg-[var(--color-background-alternative)]",
  dark: "bg-[var(--color-gray-950)]",
} as const;

export default function WorkSection({
  title,
  paragraphs = [],
  meta = [],
  visuals = [],
  href,
}: WorkSectionProps) {
  const body = (
    <>
      <div>
        <h2 className="mb-[var(--space-250)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] tracking-[var(--site-tracking-work-title)] [font-weight:var(--font-weight-700)] group-hover:underline">
          {title}
        </h2>

        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-[var(--space-150)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-neutral)]"
          >
            {paragraph}
          </p>
        ))}

        {meta.length > 0 && (
          <dl className="mt-[var(--space-400)]">
            {meta.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[var(--site-work-meta-label-width)_1fr] gap-[var(--space-200)] border-t border-[var(--color-divider-alternative)] py-[var(--space-150)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)]"
              >
                <dt className="text-[var(--color-label-assistive)]">
                  {row.label}
                </dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="flex items-stretch gap-[var(--space-250)]">
        {visuals.map((visual) => (
          <div
            key={visual.src}
            className={`flex-1 overflow-hidden rounded-[var(--radius-500)] ${
              RATIO[visual.ratio ?? "wide"]
            } ${TONE[visual.tone ?? "light"]}`}
          >
            <Image
              src={visual.src}
              alt={visual.alt}
              width={visual.width}
              height={visual.height}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );

  if (!href) {
    return <article className={SECTION}>{body}</article>;
  }

  /* 제목 hover 밑줄을 섹션 전체 hover 에 걸기 위해 group 사용 */
  return (
    <Link href={href} className={`group ${SECTION}`}>
      {body}
    </Link>
  );
}
