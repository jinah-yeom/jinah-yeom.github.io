import SlotFrame, { type SlotFrameProps } from "./SlotFrame";

export interface VideoSlotProps extends SlotFrameProps {
  /** public/videos/ 의 mp4 경로. 채워지면 플레이스홀더 대신 영상을 렌더한다 */
  src?: string;
  /** 영상이 무엇을 보여주는지 — 없으면 label 을 쓴다 */
  alt?: string;
  /** 첫 프레임 대신 보여줄 이미지 */
  poster?: string;
}

export default function VideoSlot({
  label,
  ratio,
  caption,
  src,
  alt,
  poster,
}: VideoSlotProps) {
  return (
    <SlotFrame label={label} ratio={ratio} caption={caption}>
      {src && (
        /*
         * muted 없이는 브라우저가 autoplay 를 막고, playsInline 없이는
         * iOS 가 전체화면으로 띄운다. 셋은 세트로 붙어야 한다.
         */
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={alt ?? label}
          className="h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </SlotFrame>
  );
}
