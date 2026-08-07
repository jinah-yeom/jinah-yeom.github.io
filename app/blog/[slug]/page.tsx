import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";

/* generateStaticParams 에 없는 슬러그는 빌드되지 않고 404 가 된다 (static export 필수 조건) */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="max-w-[var(--site-lede-width)]">
      <p className="mb-[var(--space-100)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
        BLOG
      </p>

      <h1 className="mb-[var(--space-150)] text-[length:var(--font-size-500)] leading-[var(--font-line-height-500)] tracking-[var(--font-letter-spacing-heading-lg)] [font-weight:var(--font-weight-800)]">
        {post.title}
      </h1>

      <p className="mb-[var(--space-100)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-alternative)]">
        {post.description}
      </p>

      <time
        dateTime={post.date}
        className="mb-[var(--space-500)] block text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] [font-weight:var(--font-weight-500)] text-[var(--color-label-assistive)]"
      >
        {formatPostDate(post.date)}
      </time>

      <Post />
    </article>
  );
}
