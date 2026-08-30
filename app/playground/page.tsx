import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PlaygroundGrid from "@/components/playground/PlaygroundGrid";

/*
 * 검색 결과와 공유 미리보기에 쓰는 소개 문장. 화면에는 내보내지 않는다 —
 * 제목 아래 곧바로 작업이 시작되는 편이 아카이브답다. 산출물 원문 그대로라
 * 설명문을 새로 짓지 않는다.
 */
const DESCRIPTION =
  "프로덕트 작업 밖에서 해온 그래픽·브랜딩 작업 아카이브. 브랜드 아이덴티티부터 IPTV 화면 규격까지, 연차별로 쌓아둡니다.";

export const metadata: Metadata = {
  title: "Playground",
  description: DESCRIPTION,
};

export default function PlaygroundPage() {
  return (
    <>
      <PageHero lines={["Playground"]} divider />

      {/* 제목을 PageHero 가 <p> 로 그려 h1 이 없다 — About·Blog 와 같은 상태라 이름은 여기서 준다 */}
      <section aria-label="Playground">
        <PlaygroundGrid />
      </section>
    </>
  );
}
