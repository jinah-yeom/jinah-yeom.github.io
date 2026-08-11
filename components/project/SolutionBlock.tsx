import MediaSlot, { type MediaItem } from "./MediaSlot";
import { PROSE_HEADLINE, PROSE_PARAGRAPH } from "./ProseSection";

export interface SolutionBlockProps {
  /** 결정을 드러내는 주장형 헤드라인 */
  headline: string;
  paragraphs?: string[];
  /** 이미지·영상을 섞어 여러 개 붙일 수 있다 */
  media?: MediaItem[];
}

export default function SolutionBlock({
  headline,
  paragraphs = [],
  media = [],
}: SolutionBlockProps) {
  return (
    <article>
      <h3 className={PROSE_HEADLINE}>{headline}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}
      {media.map((item) => (
        <MediaSlot key={item.label} {...item} />
      ))}
    </article>
  );
}
