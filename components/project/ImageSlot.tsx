import Image from "next/image";

export type ImageRatio = "tall" | "wide" | "hero" | "square";

export interface ImageSlotProps {
  /**
   * 이 자리에 어떤 이미지가 들어갈지 적는다 (예: "as-is/to-be — 날짜 탐색").
   * 실제 이미지로 교체되기 전까지 플레이스홀더 안에 그대로 보인다.
   */
  label: string;
  ratio?: ImageRatio;
  /** 이미지 아래에 붙는 캡션 */
  caption?: string;
  /** 채워지면 플레이스홀더 대신 실제 이미지를 렌더한다 */
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const RATIO: Record<ImageRatio, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  hero: "aspect-[16/9]",
  square: "aspect-square",
};

export default function ImageSlot({
  label,
  ratio = "wide",
  caption,
  src,
  alt,
  width = 1600,
  height = 1000,
}: ImageSlotProps) {
  return (
    <figure className="my-[var(--space-400)]">
      <div
        className={`flex items-center justify-center overflow-hidden rounded-[var(--radius-500)] border border-[var(--color-divider-alternative)] bg-[var(--color-background-alternative)] ${RATIO[ratio]}`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            width={width}
            height={height}
            className="h-full w-full object-cover"
          />
        ) : (
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
