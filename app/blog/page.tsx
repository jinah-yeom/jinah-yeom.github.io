import type { Metadata } from "next";
import PostList from "@/components/blog/PostList";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "디자인 시스템을 만들며 배운 것들 — 과정, 실패, 판단의 기록.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <p className="mb-[var(--space-100)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
        BLOG
      </p>

      <h1 className="mb-[var(--space-200)] text-[length:var(--font-size-550)] leading-[var(--font-line-height-600)] tracking-[var(--font-letter-spacing-display)] [font-weight:var(--font-weight-800)] max-[720px]:text-[length:var(--font-size-450)] max-[720px]:leading-[var(--font-line-height-500)]">
        기술 블로그
      </h1>

      <p className="text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] text-[var(--color-label-alternative)]">
        디자인 시스템을 만들며 배운 것들 — 과정, 실패, 판단의 기록.
      </p>

      <div className="mt-[var(--space-400)]">
        <PostList posts={posts} />
      </div>
    </>
  );
}
