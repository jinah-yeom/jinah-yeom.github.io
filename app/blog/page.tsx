import type { Metadata } from "next";
import PostList from "@/components/blog/PostList";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "디자인 시스템을 만들며 배운 것들 — 과정, 실패, 판단의 기록.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <PostList posts={posts} />;
}
