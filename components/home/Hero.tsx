import { Fragment } from "react";

export interface HeroProps {
  /** 줄바꿈 단위로 나눈 스테이트먼트 */
  lines?: string[];
}

export default function Hero({ lines = [] }: HeroProps) {
  return (
    <section className="flex min-h-[62vh] items-center justify-center">
      <p className="text-[length:var(--font-size-550)] leading-[var(--font-line-height-600)] tracking-[var(--font-letter-spacing-display)] [font-weight:var(--font-weight-500)] max-[720px]:text-[length:var(--font-size-400)] max-[720px]:leading-[var(--font-line-height-400)]">
        {lines.map((line, index) => (
          <Fragment key={line}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </p>
    </section>
  );
}
