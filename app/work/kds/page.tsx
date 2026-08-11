import type { Metadata } from "next";
import DocSideNav, { type DocNavGroup } from "@/components/work/DocSideNav";
import InfoBox, { type InfoRow } from "@/components/work/InfoBox";
import Pipeline, { type PipelineNode } from "@/components/work/Pipeline";
import ProjectNav from "@/components/project/ProjectNav";

export const metadata: Metadata = {
  title: "Keeper Design System",
  description:
    "B2B 어드민 제품의 0→1 디자인 시스템을 디자이너 겸 개발자로서 혼자 설계하고 구축한 프로젝트.",
};

/*
 * 목차는 본문에 실제로 존재하는 섹션만 넣는다 — 죽은 앵커를 만들지 않기 위해서다.
 * TODO: 프로토타입에 있던 '컴포넌트 원칙' · '문서화' · '회고' 는 본문이 써지면 추가한다.
 * TODO: 스크롤 위치에 따라 current 를 옮기려면 클라이언트 스크롤스파이가 필요하다.
 */
const NAV_GROUPS: DocNavGroup[] = [
  { items: [{ label: "개요", href: "#overview", current: true }] },
  {
    label: "SYSTEM",
    items: [
      { label: "토큰 파이프라인", href: "#token-pipeline" },
      { label: "Figma ↔ 코드 연동", href: "#figma-code-connect" },
    ],
  },
  {
    label: "PROCESS",
    items: [{ label: "AI 워크플로", href: "#ai-workflow" }],
  },
];

const INFO_ROWS: InfoRow[] = [
  { term: "기간", description: "2025 — 2026" },
  { term: "역할", description: "Design · Development (1인)" },
  { term: "스택", description: "Next.js · Tailwind v4 · Token Studio" },
  { term: "산출물", description: "토큰 300+ · 컴포넌트 12 · 문서 사이트" },
];

const PIPELINE_NODES: PipelineNode[] = [
  { label: "Token Studio" },
  { label: "Style Dictionary" },
  { label: "tokens.css", highlight: true },
  { label: "Components" },
];

const HEADING =
  "mt-[var(--space-500)] mb-[var(--space-150)] border-t border-[var(--color-divider-alternative)] pt-[var(--space-300)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] [font-weight:var(--font-weight-700)]";

const BODY =
  "mb-[var(--space-150)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)]";

export default function KdsPage() {
  return (
    <>
      <div className="grid grid-cols-[var(--site-doc-nav-width)_1fr] gap-[var(--space-500)] max-[720px]:grid-cols-1">
        <DocSideNav groups={NAV_GROUPS} />

        <article>
          <p className="mb-[var(--space-100)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)]">
            WORK / KEEPER DESIGN SYSTEM
          </p>

          <h1
            id="overview"
            className="mb-[var(--space-150)] text-[length:var(--font-size-500)] leading-[var(--font-line-height-500)] tracking-[var(--font-letter-spacing-heading-lg)] [font-weight:var(--font-weight-800)]"
          >
            Keeper Design System
          </h1>

          <p className={BODY}>
            B2B 어드민 제품의 0→1 디자인 시스템을 디자이너 겸 개발자로서 혼자
            설계하고 구축한 프로젝트입니다.
          </p>

          <InfoBox rows={INFO_ROWS} />

          <h2 id="token-pipeline" className={HEADING}>
            토큰 파이프라인
          </h2>
          <p className={BODY}>
            모든 스타일 값은 단일 소스에서 자동 생성됩니다. 하드코딩된 색상·간격·폰트
            값이 0인 것을 스크립트로 검증합니다.
          </p>
          <Pipeline nodes={PIPELINE_NODES} />

          <h2 id="figma-code-connect" className={HEADING}>
            Figma ↔ 코드 1:1 연동
          </h2>
          <p className={BODY}>
            Code Connect로 Figma 컴포넌트와 코드 컴포넌트를 매핑해, variant·size·state
            명칭이 디자인과 코드에서 완전히 일치합니다.
          </p>

          <h2 id="ai-workflow" className={HEADING}>
            AI 워크플로
          </h2>
          <p className={BODY}>
            토큰 정합성 검사, 컴포넌트 생성 절차를 Claude 스킬로 만들어 반복 작업을
            자동화했습니다. 이 사이트의 스타일도 KDS 토큰으로 렌더링됩니다.
          </p>
        </article>
      </div>

      {/* 본문 레이아웃 밖 — 사이드 내비 그리드에 끼지 않게 그리드 뒤에 둔다 */}
      <div className="mt-[var(--space-900)]">
        <ProjectNav slug="kds" />
      </div>
    </>
  );
}
