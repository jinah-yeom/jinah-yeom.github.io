import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  /** 파일명에서 온 URL 슬러그 */
  slug: string;
  title: string;
  description: string;
  /** ISO 날짜 문자열 (YYYY-MM-DD) */
  date: string;
  /** frontmatter 의 draft: true — 목록·라우트 양쪽에서 빠진다 */
  draft: boolean;
}

/*
 * YAML 은 따옴표 없는 2026-07-15 를 Date 로 파싱한다.
 * 글 쓰는 쪽에서 따옴표를 기억하게 두지 않고 여기서 흡수한다.
 * (js-yaml 은 UTC 자정으로 만들므로 toISOString 을 잘라도 날짜가 밀리지 않는다)
 */
function toDateString(value: unknown): string | undefined {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function requireString(
  value: unknown,
  key: string,
  fileName: string
): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(
      `content/blog/${fileName}: frontmatter 에 "${key}" 가 없거나 비어 있습니다.`
    );
  }
  return value;
}

function readPost(fileName: string): PostMeta {
  const slug = fileName.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data } = matter(source);
  const date = toDateString(data.date);

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(
      `content/blog/${fileName}: frontmatter 의 "date" 는 YYYY-MM-DD 형식이어야 합니다.`
    );
  }

  return {
    slug,
    title: requireString(data.title, "title", fileName),
    description: requireString(data.description, "description", fileName),
    date,
    draft: data.draft === true,
  };
}

/**
 * 날짜 역순으로 정렬된 공개 글 목록. 빌드 타임에만 호출된다.
 * draft 는 여기서 걸러지므로 목록에도, generateStaticParams 에도 오르지 않는다
 * — 파일은 남고 라우트만 사라진다.
 */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readPost)
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): PostMeta | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

/**
 * 목록·상세에 쓰는 표시용 날짜 (2026-07-15 → 2026.07).
 * Date 객체를 거치지 않는다 — 타임존에 따라 월이 밀리는 것을 막기 위해서다.
 */
export function formatPostDate(date: string): string {
  return date.slice(0, 7).replace("-", ".");
}

// TODO: 빌드 시 RSS(feed.xml) 생성 — getAllPosts() 를 그대로 쓰면 된다.
