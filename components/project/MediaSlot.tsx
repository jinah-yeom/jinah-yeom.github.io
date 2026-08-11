import ImageSlot, { type ImageSlotProps } from "./ImageSlot";
import VideoSlot, { type VideoSlotProps } from "./VideoSlot";

/**
 * 한 섹션 안에서 이미지와 영상을 섞어 쓰기 위한 판별 유니온.
 * kind 를 생략하면 이미지로 본다.
 */
export type MediaItem =
  | ({ kind?: "image" } & ImageSlotProps)
  | ({ kind: "video" } & VideoSlotProps);

export default function MediaSlot(item: MediaItem) {
  return item.kind === "video" ? (
    <VideoSlot {...item} />
  ) : (
    <ImageSlot {...item} />
  );
}
