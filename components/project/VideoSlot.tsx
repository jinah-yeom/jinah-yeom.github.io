import AutoplayVideo from "./AutoplayVideo";
import SlotFrame, { type SlotFrameProps } from "./SlotFrame";

export interface VideoSlotProps extends SlotFrameProps {
  /** public/videos/ 의 mp4 경로. 채워지면 플레이스홀더 대신 영상을 렌더한다 */
  src?: string;
  /** 영상이 무엇을 보여주는지 — 없으면 label 을 쓴다 */
  alt?: string;
  /** 첫 프레임 대신 보여줄 이미지. reduce 모션일 때 정지 화면으로도 쓰인다 */
  poster?: string;
  /**
   * 슬롯 비율과 영상 비율이 다를 때 처리.
   * cover 는 꽉 채우고 잘라내며, contain 은 전체를 보이고 남는 자리를 배경으로 둔다.
   * 폰 화면 녹화처럼 세로로 긴 영상은 contain 이어야 화면이 잘리지 않는다.
   */
  fit?: "cover" | "contain";
}

const FIT = {
  cover: "object-cover",
  contain: "object-contain",
} as const;

/* 이 컴포넌트와 SlotFrame 은 서버 컴포넌트로 두고, 재생 제어만 AutoplayVideo 로 넘긴다 */
export default function VideoSlot({
  label,
  ratio,
  caption,
  src,
  alt,
  poster,
  fit = "cover",
}: VideoSlotProps) {
  return (
    <SlotFrame label={label} ratio={ratio} caption={caption}>
      {src && (
        <AutoplayVideo
          src={src}
          poster={poster}
          label={alt ?? label}
          className={`h-full w-full ${FIT[fit]}`}
        />
      )}
    </SlotFrame>
  );
}
