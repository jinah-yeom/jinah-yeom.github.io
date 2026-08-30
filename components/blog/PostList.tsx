import Link from "next/link";
import { formatPostDate, type PostMeta } from "@/lib/blog";

export interface PostListProps {
  posts?: PostMeta[];
  /** 글이 하나도 없을 때 보여줄 문구 */
  emptyMessage?: string;
}

export default function PostList({
  posts = [],
  emptyMessage = "아직 발행한 글이 없습니다.",
}: PostListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-assistive)]">
        {emptyMessage}
      </p>
    );
  }

  return (
    /*
     * 첫 항목의 위 패딩을 뺀다 — 위 divider 의 아래 여백(24px)에 20px 이
     * 더해지면 그 자리만 44px 이 되어 About 의 같은 자리(24px)와 어긋난다.
     */
    <div className="flex flex-col [&>a:first-child]:pt-0">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex items-baseline justify-between gap-[var(--space-300)] border-b border-[var(--color-divider-alternative)] py-[var(--space-250)]"
        >
          <span>
            <span className="block text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] [font-weight:var(--font-weight-600)] group-hover:underline">
              {post.title}
            </span>
            <span className="mt-[var(--space-050)] block text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)]">
              {post.description}
            </span>
          </span>

          <time
            dateTime={post.date}
            className="shrink-0 text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] [font-weight:var(--font-weight-500)] text-[var(--color-label-assistive)]"
          >
            {formatPostDate(post.date)}
          </time>
        </Link>
      ))}
    </div>
  );
}
