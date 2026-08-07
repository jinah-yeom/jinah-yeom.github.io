import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="min-h-[40vh]">
      {/* TODO(3단계): How I Think / How I Work / Strengths — 소제목별 국영문 2단 */}
      <h1 className="text-[length:var(--font-size-300)] leading-[var(--font-line-height-300)] tracking-[var(--font-letter-spacing-heading-md)] [font-weight:var(--font-weight-800)]">
        About
      </h1>
    </div>
  );
}
