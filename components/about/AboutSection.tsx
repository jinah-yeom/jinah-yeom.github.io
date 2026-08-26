import type { ReactNode } from "react";

export interface AboutSectionProps {
  /** 좌측 라벨 — Info / Strength / Principles / Career */
  label: string;
  /**
   * 본문 열의 읽기 폭 제한을 풀지.
   * Career 처럼 표에 가까운 내용은 800px 안에서 세 열이 눌린다.
   */
  wide?: boolean;
  children?: ReactNode;
}

/** 문단이 이어지는 본문의 공통 스타일 — 항목 본문과 Info 문단이 같이 쓴다 */
export const ABOUT_PARAGRAPH =
  "text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] text-[var(--color-label-neutral)]";

/** 항목 소제목 — Strength·Principles 제목 */
export const ABOUT_ITEM_TITLE =
  "mb-[var(--space-150)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] [font-weight:var(--font-weight-700)]";

export default function AboutSection({
  label,
  wide = false,
  children,
}: AboutSectionProps) {
  return (
    /* 좌 라벨 / 우 본문. 720px 아래에서는 라벨이 본문 위 소제목으로 내려앉는다 */
    <section
      className={`grid gap-[var(--space-600)] py-[var(--space-600)] max-[720px]:grid-cols-1 max-[720px]:gap-[var(--space-300)] ${
        wide
          ? "grid-cols-[var(--site-about-label-width)_1fr]"
          : "grid-cols-[var(--site-about-label-width)_minmax(0,var(--site-width-prose))]"
      }`}
    >
      {/* 라벨은 제목이 아니라 이정표다 — 본문과 같은 크기로 낮추고 톤만 한 단계 뺀다 */}
      <h2 className="text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] [font-weight:var(--font-weight-500)] text-[var(--color-label-alternative)]">
        {label}
      </h2>

      <div>{children}</div>
    </section>
  );
}
