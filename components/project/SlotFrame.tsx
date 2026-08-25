import type { ReactNode } from "react";

export type SlotRatio = "tall" | "wide" | "hero" | "square" | "auto";

export interface SlotFrameProps {
  /**
   * 이 자리에 어떤 이미지/영상이 들어갈지 적는다 (예: "as-is/to-be — 날짜 탐색").
   * 파일이 붙기 전까지 플레이스홀더 안에 그대로 보인다.
   */
  label: string;
  ratio?: SlotRatio;
  /** 슬롯 아래에 붙는 캡션 */
  caption?: string;
  /**
   * ratio="auto" 이고 아직 이미지가 없을 때 자리만 잡아 둘 비율 (예: "3200 / 1526").
   * 이미지가 붙으면 높이는 이미지가 정하므로 쓰이지 않는다.
   */
  aspect?: string;
}

/**
 * 이미지가 앉는 자리의 겉면 — 보더·배경·넘침 처리.
 * 홈 워크 카드의 썸네일도 같은 프레임을 쓴다.
 * 라운드는 여기 넣지 않는다 — 상세 슬롯은 둥글고 카드 썸네일은 각져야 해서,
 * 두 곳이 같은 값을 공유하면 한쪽이 반드시 틀린다. 라운드는 쓰는 쪽이 정한다.
 */
export const SLOT_SURFACE =
  "overflow-hidden border border-[var(--color-divider-alternative)] bg-[var(--color-gray-100)]";

/** 도형·표·코드 블록이 함께 쓰는 캡션 스타일 — 슬롯과 같은 톤을 유지한다 */
export const FIGURE_CAPTION =
  "mt-[var(--space-150)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] text-[var(--color-label-assistive)]";

const RATIO: Record<Exclude<SlotRatio, "auto">, string> = {
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
  aspect,
  children,
}: SlotFrameProps & { children?: ReactNode }) {
  /*
   * auto 는 프레임에 높이를 걸지 않고 이미지가 정하게 둔다.
   * 프레임에 aspect-ratio 를 주면 보더 2px 이 비율 계산에 섞여, 안쪽 비율이
   * 이미지와 미세하게 어긋나고 그만큼 잘린다. 높이를 이미지에 맡기면 정확히 0 이다.
   * 이미지가 아직 없을 때만 aspect 로 빈 자리를 잡아 둔다.
   */
  const placeholder = children == null;

  return (
    <figure className="my-[var(--space-400)]">
      <div
        className={`flex items-center justify-center rounded-[var(--radius-500)] ${SLOT_SURFACE} ${
          ratio === "auto" ? "" : RATIO[ratio]
        }`}
        style={
          ratio === "auto" && placeholder && aspect
            ? { aspectRatio: aspect }
            : undefined
        }
      >
        {children ?? (
          <span className="px-[var(--space-300)] text-center text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-500)]">
            {label}
          </span>
        )}
      </div>

      {caption && (
        <figcaption className={FIGURE_CAPTION}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
