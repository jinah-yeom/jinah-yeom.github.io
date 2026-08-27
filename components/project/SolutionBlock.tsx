import type { ReactNode } from "react";
import MediaGrid from "./MediaGrid";
import MediaSlot, { type MediaItem } from "./MediaSlot";
import { PROSE_HEADLINE, PROSE_PARAGRAPH } from "./ProseSection";

export interface SolutionBlockProps {
  /** 결정을 드러내는 주장형 헤드라인 */
  headline: string;
  paragraphs?: string[];
  /** 이미지·영상을 섞어 여러 개 붙일 수 있다 */
  media?: MediaItem[];
  /**
   * 미디어를 쌓을지 나란히 놓을지.
   * 한 장면을 크게 봐야 하면 stack, 같은 흐름의 화면 여러 장을 견주는
   * 거라면 grid — 세로로 쌓으면 앞뒤를 한눈에 비교할 수 없다.
   * 화면이 좌→우로 이어지는 플로우 프레임은 grid-2 라야 한 장이 충분히 크다.
   */
  mediaLayout?: "stack" | "grid" | "grid-2";
  /**
   * 문단 사이에 인용이 끼거나 미디어를 유형별로 나눠 놓는 것처럼,
   * 원고 순서가 headline → paragraphs → media 로 떨어지지 않을 때 쓴다.
   */
  children?: ReactNode;
}

export default function SolutionBlock({
  headline,
  paragraphs = [],
  media = [],
  mediaLayout = "stack",
  children,
}: SolutionBlockProps) {
  return (
    <article>
      <h3 className={PROSE_HEADLINE}>{headline}</h3>

      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}

      {children}

      {mediaLayout === "stack"
        ? media.map((item) => <MediaSlot key={item.label} {...item} />)
        : media.length > 0 && (
            <MediaGrid
              columns={mediaLayout === "grid-2" ? 2 : 3}
              items={media}
            />
          )}
    </article>
  );
}
