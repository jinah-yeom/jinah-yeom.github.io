import ImageSlot, { type ImageSlotProps } from "./ImageSlot";

export interface ProjectHeroProps {
  /** 카테고리 태그 칩 (회사 프로젝트 / B2B / UX 개선 …) */
  tags?: string[];
  /** 프로젝트 유형 소제목 — 제목보다 작게 */
  eyebrow?: string;
  title: string;
  /** 한 줄 정의 */
  lede?: string;
  /** 대표 이미지 자리 */
  image?: ImageSlotProps;
}

const TAG =
  "rounded-[var(--radius-900)] bg-[var(--color-background-alternative)] px-[var(--space-125)] py-[var(--space-025)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] [font-weight:var(--font-weight-500)] text-[var(--color-label-alternative)]";

export default function ProjectHero({
  tags = [],
  eyebrow,
  title,
  lede,
  image,
}: ProjectHeroProps) {
  return (
    <section>
      {tags.length > 0 && (
        <ul className="mb-[var(--space-300)] flex flex-wrap gap-[var(--space-075)]">
          {tags.map((tag) => (
            <li key={tag} className={TAG}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      {eyebrow && (
        <p className="mb-[var(--space-100)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
          {eyebrow}
        </p>
      )}

      <h1 className="text-[length:var(--font-size-550)] leading-[var(--font-line-height-600)] tracking-[var(--font-letter-spacing-display)] [font-weight:var(--font-weight-800)] max-[720px]:text-[length:var(--font-size-450)] max-[720px]:leading-[var(--font-line-height-500)]">
        {title}
      </h1>

      {lede && (
        <p className="mt-[var(--space-200)] max-w-[var(--site-prose-width)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] text-[var(--color-label-alternative)]">
          {lede}
        </p>
      )}

      {image && <ImageSlot ratio="hero" {...image} />}
    </section>
  );
}
