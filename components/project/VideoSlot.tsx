import AutoplayVideo from "./AutoplayVideo";
import SlotFrame, { type SlotFrameProps } from "./SlotFrame";

export interface VideoSlotProps extends SlotFrameProps {
  /** public/videos/ 의 mp4 경로. 채워지면 플레이스홀더 대신 영상을 렌더한다 */
  src?: string;
  /** 영상이 무엇을 보여주는지 — 없으면 label 을 쓴다 */
  alt?: string;
  /** 첫 프레임 대신 보여줄 이미지. reduce 모션일 때 정지 화면으로도 쓰인다 */
  poster?: string;
}

/* 이 컴포넌트와 SlotFrame 은 서버 컴포넌트로 두고, 재생 제어만 AutoplayVideo 로 넘긴다 */
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
        <AutoplayVideo
          src={src}
          poster={poster}
          label={alt ?? label}
          className="h-full w-full object-cover"
        />
      )}
    </SlotFrame>
  );
}
