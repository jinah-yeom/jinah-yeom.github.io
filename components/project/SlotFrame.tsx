import type { ReactNode } from "react";

export type SlotRatio = "tall" | "wide" | "hero" | "square";

export interface SlotFrameProps {
  /**
   * 이 자리에 어떤 이미지/영상이 들어갈지 적는다 (예: "as-is/to-be — 날짜 탐색").
   * 파일이 붙기 전까지 플레이스홀더 안에 그대로 보인다.
   */
  label: string;
  ratio?: SlotRatio;
  /** 슬롯 아래에 붙는 캡션 */
  caption?: string;
}

const RATIO: Record<SlotRatio, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  hero: "aspect-[16/9]",
  square: "aspect-square",
};

/**
 * 이미지·영상 슬롯이 공유하는 껍데기.
 * 라운드·배경·비율·플레이스홀더·캡션을 한 곳에서만 정의해 두 슬롯이 어긋나지 않게 한다.
 */
export default function SlotFrame({
  label,
  ratio = "wide",
  caption,
  children,
}: SlotFrameProps & { children?: ReactNode }) {
  return (
    <figure className="my-[var(--space-400)]">
      <div
        className={`flex items-center justify-center overflow-hidden rounded-[var(--radius-500)] border border-[var(--color-divider-alternative)] bg-[var(--color-gray-100)] ${RATIO[ratio]}`}
      >
        {children ?? (
          <span className="px-[var(--space-300)] text-center text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-500)]">
            {label}
          </span>
        )}
      </div>

      {caption && (
        <figcaption className="mt-[var(--space-150)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] text-[var(--color-label-assistive)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
