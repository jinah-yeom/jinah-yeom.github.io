import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PlaygroundGrid from "@/components/playground/PlaygroundGrid";

/* 소개 문장은 산출물 원문 그대로다 — 설명문을 따로 쓰지 않고 같은 문장을 쓴다 */
const LEDE =
  "프로덕트 작업 밖에서 해온 그래픽·브랜딩 작업 아카이브. 브랜드 아이덴티티부터 IPTV 화면 규격까지, 연차별로 쌓아둡니다.";

export const metadata: Metadata = {
  title: "Playground",
  description: LEDE,
};

export default function PlaygroundPage() {
  return (
    <>
      <PageHero lines={["Playground"]} divider />

      {/* 제목을 PageHero 가 <p> 로 그려 h1 이 없다 — About·Blog 와 같은 상태라 이름은 여기서 준다 */}
      <section aria-label="Playground">
        <p className="mb-[var(--space-700)] max-w-[var(--site-width-prose)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-alternative)]">
          {LEDE}
        </p>

        <PlaygroundGrid />
      </section>
    </>
  );
}
