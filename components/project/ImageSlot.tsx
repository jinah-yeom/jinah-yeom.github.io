import Image from "next/image";
import SlotFrame, { type SlotFrameProps, type SlotRatio } from "./SlotFrame";

export type ImageRatio = SlotRatio;

export interface ImageSlotProps extends SlotFrameProps {
  /** 채워지면 플레이스홀더 대신 실제 이미지를 렌더한다 */
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  /** 첫 화면에 보이는 이미지(히어로)에만 — 지연 로딩을 끄고 미리 불러온다 */
  priority?: boolean;
  /**
   * 슬롯 비율과 이미지 비율이 다를 때 처리 — VideoSlot 과 같은 규칙.
   * cover 는 꽉 채우고 잘라내며, contain 은 전체를 보이고 남는 자리를 배경으로 둔다.
   * 가로로 아주 긴 다이어그램은 contain 이어야 양 끝 노드가 잘리지 않는다.
   */
  fit?: "cover" | "contain";
}

const FIT = {
  cover: "object-cover",
  contain: "object-contain",
} as const;

export default function ImageSlot({
  label,
  ratio,
  caption,
  src,
  alt,
  width = 1600,
  height = 1000,
  priority,
  fit = "cover",
}: ImageSlotProps) {
  return (
    <SlotFrame
      label={label}
      ratio={ratio}
      caption={caption}
      /* 이미지가 붙기 전까지 빈 프레임이 같은 비율로 서 있게 한다 */
      aspect={ratio === "auto" ? `${width} / ${height}` : undefined}
    >
      {src && (
        <Image
          src={src}
          alt={alt ?? label}
          width={width}
          height={height}
          priority={priority}
          /* auto 는 이미지가 프레임 높이를 정한다 — object-fit 이 개입할 여지가 없다 */
          className={
            ratio === "auto" ? "h-auto w-full" : `h-full w-full ${FIT[fit]}`
          }
        />
      )}
    </SlotFrame>
  );
}
