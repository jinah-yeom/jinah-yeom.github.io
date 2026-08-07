import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    /*
     * frontmatter 는 lib/blog.ts 가 파일에서 직접 읽는다.
     * 여기서는 본문에 --- 블록이 그대로 렌더되지 않도록 파싱만 시킨다.
     * Turbopack 은 플러그인을 문자열 이름으로 받는다 (함수는 Rust 로 넘길 수 없음).
     */
    remarkPlugins: [["remark-frontmatter", { type: "yaml", marker: "-" }]],
  },
});

export default withMDX(nextConfig);
