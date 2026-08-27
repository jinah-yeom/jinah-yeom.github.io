import MediaSlot, { type MediaItem } from "./MediaSlot";
import {
  PROSE_HEADLINE,
  PROSE_PARAGRAPH,
  PROSE_SUBHEADLINE,
} from "./ProseSection";

export interface SolutionBlockProps {
  /** 결정을 드러내는 주장형 헤드라인 */
  headline: string;
  /**
   * 헤드라인이 대상을 가리키는 이름일 때, 그 아래에서 주장을 잇는 문장.
   * 원고가 이름과 주장을 두 층으로 나눠 준 경우에만 쓴다.
   */
  subheadline?: string;
  paragraphs?: string[];
  /** 이미지·영상을 섞어 여러 개 붙일 수 있다 */
  media?: MediaItem[];
  /**
   * 미디어를 쌓을지 나란히 놓을지.
   * 한 장면을 크게 봐야 하면 stack, 같은 흐름의 화면 여러 장을 견주는
   * 거라면 grid — 세로로 쌓으면 앞뒤를 한눈에 비교할 수 없다.
   */
  mediaLayout?: "stack" | "grid";
}

/* 슬롯 자체의 세로 여백은 끄고 그리드가 한 덩어리로 여백을 잡는다 */
const MEDIA_GRID =
  "my-[var(--space-400)] grid grid-cols-3 gap-[var(--space-250)] max-[720px]:grid-cols-1 [&>figure]:my-0";

export default function SolutionBlock({
  headline,
  subheadline,
  paragraphs = [],
  media = [],
  mediaLayout = "stack",
}: SolutionBlockProps) {
  const slots = media.map((item) => <MediaSlot key={item.label} {...item} />);

  return (
    <article>
      <h3 className={PROSE_HEADLINE}>{headline}</h3>
      {subheadline && <p className={PROSE_SUBHEADLINE}>{subheadline}</p>}
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}
      {mediaLayout === "grid" ? (
        <div className={MEDIA_GRID}>{slots}</div>
      ) : (
        slots
      )}
    </article>
  );
}
