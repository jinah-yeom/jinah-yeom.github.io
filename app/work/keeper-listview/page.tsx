import type { Metadata } from "next";
import ApproachList, {
  type ApproachItem,
} from "@/components/project/ApproachList";
import ContactCta from "@/components/project/ContactCta";
import ImpactStats, {
  type ImpactStat,
} from "@/components/project/ImpactStats";
import MetaGrid, { type MetaItem } from "@/components/project/MetaGrid";
import NextCase from "@/components/project/NextCase";
import ProblemBlock, {
  type ProblemBlockProps,
} from "@/components/project/ProblemBlock";
import ProjectHero from "@/components/project/ProjectHero";
import ProseSection from "@/components/project/ProseSection";
import SolutionBlock, {
  type SolutionBlockProps,
} from "@/components/project/SolutionBlock";
import type { ContactLink } from "@/components/about/ContactRow";

export const metadata: Metadata = {
  title: "Keeper APP 리스트뷰 UX 개선",
  description:
    "하루 수십 번 반복되던 스크롤 탐색을 조건 기반 탐색으로 바꿔, 키퍼가 업무를 고르는 시간을 줄인 프로젝트.",
};

/*
 * 1단계는 컴포넌트 세트와 페이지 골격까지다.
 * 아래 데이터는 전부 자리만 잡아둔 것으로, 2단계에서 포트폴리오_웹_템플릿.md 의
 * 예시 본문을 그대로 옮겨 채운다.
 */

const META: MetaItem[] = [
  { label: "Timeline", value: "TODO" },
  { label: "Product", value: "TODO" },
  { label: "Team", value: "TODO" },
  { label: "Role", value: "TODO" },
  { label: "Tools", value: "TODO" },
];

const IMPACT: ImpactStat[] = [
  { from: "TODO", to: "TODO", label: "TODO: 지표 1" },
  { from: "TODO", to: "TODO", label: "TODO: 지표 2" },
];

const PROBLEMS: ProblemBlockProps[] = [
  { headline: "TODO: 문제 1 헤드라인", paragraphs: ["TODO: 문제 1 본문"] },
  { headline: "TODO: 문제 2 헤드라인", paragraphs: ["TODO: 문제 2 본문"] },
  { headline: "TODO: 문제 3 헤드라인", paragraphs: ["TODO: 문제 3 본문"] },
];

const APPROACHES: ApproachItem[] = [
  { lead: "TODO: 원칙 1.", body: "TODO: 근거" },
  { lead: "TODO: 원칙 2.", body: "TODO: 근거" },
  { lead: "TODO: 원칙 3.", body: "TODO: 근거" },
];

const SOLUTIONS: SolutionBlockProps[] = [
  {
    headline: "TODO: 해결 1 헤드라인",
    paragraphs: ["TODO: 해결 1 본문"],
    image: { label: "as-is/to-be — 날짜 탐색", ratio: "wide" },
  },
  {
    headline: "TODO: 해결 2 헤드라인",
    paragraphs: ["TODO: 해결 2 본문"],
    image: { label: "as-is/to-be — 지점·동·층 필터", ratio: "wide" },
  },
  {
    headline: "TODO: 해결 3 헤드라인",
    paragraphs: ["TODO: 해결 3 본문"],
    image: { label: "필터·정렬 플로우", ratio: "wide" },
  },
  {
    headline: "TODO: 해결 4 헤드라인",
    paragraphs: ["TODO: 해결 4 본문"],
    image: { label: "as-is/to-be — 카드 정보 구조", ratio: "wide" },
  },
];

// TODO: 이메일·이력서·LinkedIn 값이 정해지면 href 를 채운다 (About 과 같은 규칙)
const CONTACT_LINKS: ContactLink[] = [
  { label: "이메일" },
  { label: "이력서 다운로드" },
  { label: "LinkedIn" },
];

export default function KeeperListviewPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 1. Hero */}
      <ProjectHero
        tags={["회사 프로젝트", "B2B", "UX 개선", "Mobile APP"]}
        eyebrow="Mobile APP UX Redesign"
        title="Keeper APP 리스트뷰 UX 개선"
        lede="TODO: 한 줄 정의"
        image={{ label: "대표 이미지 — 리스트뷰 개선 전후", ratio: "hero" }}
      />

      {/* 2. Meta Grid */}
      <MetaGrid items={META} />

      {/* 3. Overview */}
      <ProseSection eyebrow="OVERVIEW" paragraphs={["TODO: Overview 본문"]} />

      {/* 4. Impact */}
      <ImpactStats stats={IMPACT} caption="TODO: 측정 조건" />

      {/* 5. Background */}
      <ProseSection
        eyebrow="BACKGROUND"
        headline="TODO: Background 헤드라인"
        paragraphs={["TODO: Background 본문"]}
      />

      {/* 6. Problem */}
      <ProseSection eyebrow="PROBLEM">
        {PROBLEMS.map((problem) => (
          <ProblemBlock key={problem.headline} {...problem} />
        ))}
      </ProseSection>

      {/* 7. Approach */}
      <ProseSection eyebrow="APPROACH">
        <ApproachList
          intro={["TODO: Approach 도입 문단"]}
          items={APPROACHES}
          outro={["TODO: Approach 마무리 문단"]}
        />
      </ProseSection>

      {/* 8. Solution */}
      <ProseSection eyebrow="SOLUTION">
        {SOLUTIONS.map((solution) => (
          <SolutionBlock key={solution.headline} {...solution} />
        ))}
      </ProseSection>

      {/* 9. Interaction Detail */}
      <ProseSection
        eyebrow="INTERACTION DETAIL"
        headline="TODO: Interaction Detail 헤드라인"
        paragraphs={["TODO: Interaction Detail 본문"]}
      />

      {/* 10. Collaboration */}
      <ProseSection
        eyebrow="COLLABORATION"
        headline="TODO: Collaboration 헤드라인"
        paragraphs={["TODO: Collaboration 본문"]}
        image={{ label: "PRD·정책 문서", ratio: "wide" }}
      />

      {/* 11. Outcome */}
      <ProseSection
        eyebrow="OUTCOME"
        headline="TODO: Outcome 헤드라인"
        paragraphs={["TODO: Outcome 본문"]}
      />

      {/* 12. Reflection */}
      <ProseSection eyebrow="REFLECTION" paragraphs={["TODO: Reflection 본문"]} />

      {/* 13. Next Case — 아직 페이지가 없어 링크 없이 썸네일만 */}
      <NextCase
        title="Keeper Admin 소모품 구매 기능"
        tagline="B2B Admin · 외부 서비스 연동"
        thumbnail={{ label: "썸네일 — Keeper Admin 소모품 구매", ratio: "wide" }}
      />

      {/* 14. Contact CTA */}
      <ContactCta links={CONTACT_LINKS} />
    </div>
  );
}
