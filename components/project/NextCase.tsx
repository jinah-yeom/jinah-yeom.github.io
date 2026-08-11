import Link from "next/link";
import ImageSlot, { type ImageSlotProps } from "./ImageSlot";

export interface NextCaseProps {
  eyebrow?: string;
  /** 다음 프로젝트명 */
  title: string;
  /** 한 줄 태그 (예: "B2B Admin · 외부 서비스 연동") */
  tagline?: string;
  /** 아직 페이지가 없으면 비워둔다 — 링크 없이 썸네일만 렌더된다 */
  href?: string;
  thumbnail?: ImageSlotProps;
  /** 목록 복귀 링크 */
  backHref?: string;
  backLabel?: string;
}

export default function NextCase({
  eyebrow = "NEXT CASE",
  title,
  tagline,
  href,
  thumbnail,
  backHref = "/",
  backLabel = "전체 프로젝트 보기",
}: NextCaseProps) {
  const card = (
    <>
      {thumbnail && <ImageSlot ratio="wide" {...thumbnail} />}
      <h2 className="text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] [font-weight:var(--font-weight-700)] group-hover:underline">
        {title}
      </h2>
      {tagline && (
        <p className="mt-[var(--space-050)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-assistive)]">
          {tagline}
        </p>
      )}
    </>
  );

  return (
    <section className="border-t border-[var(--color-divider-alternative)] pt-[var(--space-400)]">
      <p className="mb-[var(--space-300)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
        {eyebrow}
      </p>

      {href ? (
        <Link href={href} className="group block">
          {card}
        </Link>
      ) : (
        <div>{card}</div>
      )}

      <Link
        href={backHref}
        className="mt-[var(--space-400)] inline-block text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)] underline underline-offset-[var(--space-050)]"
      >
        {backLabel}
      </Link>
    </section>
  );
}
