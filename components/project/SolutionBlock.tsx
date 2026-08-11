import ImageSlot, { type ImageSlotProps } from "./ImageSlot";
import { PROSE_HEADLINE, PROSE_PARAGRAPH } from "./ProseSection";

export interface SolutionBlockProps {
  /** 결정을 드러내는 주장형 헤드라인 */
  headline: string;
  paragraphs?: string[];
  image?: ImageSlotProps;
}

export default function SolutionBlock({
  headline,
  paragraphs = [],
  image,
}: SolutionBlockProps) {
  return (
    <article>
      <h3 className={PROSE_HEADLINE}>{headline}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={PROSE_PARAGRAPH}>
          {paragraph}
        </p>
      ))}
      {image && <ImageSlot {...image} />}
    </article>
  );
}
