import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="min-h-[40vh]">
      {/* TODO(4단계): content/blog/*.mdx 기반 글 목록 (날짜 역순) */}
      <h1 className="text-[length:var(--font-size-300)] leading-[var(--font-line-height-300)] tracking-[var(--font-letter-spacing-heading-md)] [font-weight:var(--font-weight-800)]">
        Blog
      </h1>
    </div>
  );
}
