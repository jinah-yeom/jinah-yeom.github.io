import ImageSlot, { type ImageSlotProps } from "./ImageSlot";

export interface ProjectHeroProps {
  /** 프로젝트 유형 소제목 — 제목보다 작게 */
  eyebrow?: string;
  title: string;
  /** 한 줄 정의 */
  lede?: string;
  /** 대표 이미지 자리 */
  image?: ImageSlotProps;
}

export default function ProjectHero({
  eyebrow,
  title,
  lede,
  image,
}: ProjectHeroProps) {
  return (
    <section>
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
