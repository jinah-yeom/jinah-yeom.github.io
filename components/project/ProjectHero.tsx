import ImageSlot, { type ImageSlotProps } from "./ImageSlot";

export interface ProjectHeroProps {
  /** 프로젝트 유형 소제목 — 제목보다 작게 */
  eyebrow?: string;
  title: string;
  /** 한 줄 정의 */
  lede?: string;
  /**
   * 대표 이미지 자리.
   * TODO: 대표 영상이 필요해지면 SolutionBlock 처럼 media?: MediaItem[] 로 바꾼다.
   */
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
        /*
         * 본문과 같은 읽기 폭 — 한 줄로 끝나는 케이스도 있지만 kds·supplies 는
         * 100자를 넘는다. text-wrap:balance 로 줄을 고르게 나눈다 — 이 폭에서
         * konkrit 은 마지막 줄이 "과정." 세 글자만 남았다. pretty 는 이 경우를
         * 잡지 못했고(65/3 그대로), balance 라야 33/35 로 갈린다.
         */
        <p className="mt-[var(--space-200)] max-w-[var(--site-width-prose)] [text-wrap:balance] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] text-[var(--color-label-alternative)]">
          {lede}
        </p>
      )}

      {image && <ImageSlot ratio="hero" {...image} />}
    </section>
  );
}
