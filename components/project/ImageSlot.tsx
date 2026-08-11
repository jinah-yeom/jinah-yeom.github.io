import Image from "next/image";
import SlotFrame, { type SlotFrameProps, type SlotRatio } from "./SlotFrame";

export type ImageRatio = SlotRatio;

export interface ImageSlotProps extends SlotFrameProps {
  /** 채워지면 플레이스홀더 대신 실제 이미지를 렌더한다 */
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function ImageSlot({
  label,
  ratio,
  caption,
  src,
  alt,
  width = 1600,
  height = 1000,
}: ImageSlotProps) {
  return (
    <SlotFrame label={label} ratio={ratio} caption={caption}>
      {src && (
        <Image
          src={src}
          alt={alt ?? label}
          width={width}
          height={height}
          className="h-full w-full object-cover"
        />
      )}
    </SlotFrame>
  );
}
