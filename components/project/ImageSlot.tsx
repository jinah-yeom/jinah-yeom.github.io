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
}

export default function ImageSlot({
  label,
  ratio,
  caption,
  src,
  alt,
  width = 1600,
  height = 1000,
  priority,
}: ImageSlotProps) {
  return (
    <SlotFrame label={label} ratio={ratio} caption={caption}>
      {src && (
        <Image
          src={src}
          alt={alt ?? label}
          width={width}
          height={height}
          priority={priority}
          className="h-full w-full object-cover"
        />
      )}
    </SlotFrame>
  );
}
