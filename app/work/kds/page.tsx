import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import CodeCompare from "@/components/project/CodeCompare";
import DataTable from "@/components/project/DataTable";
import FlowCompare from "@/components/project/FlowCompare";
import ImpactStats from "@/components/project/ImpactStats";
import MediaSlot, { type MediaItem } from "@/components/project/MediaSlot";
import MetaGrid, { type MetaItem } from "@/components/project/MetaGrid";
import PrincipleList from "@/components/project/PrincipleList";
import ProjectNav from "@/components/project/ProjectNav";
import ProjectHero from "@/components/project/ProjectHero";
import ProseSection, {
  PROSE_HEADLINE,
  PROSE_PARAGRAPH,
} from "@/components/project/ProseSection";
import SnippetBlock from "@/components/project/SnippetBlock";
import StepFlow from "@/components/project/StepFlow";
import TerminalBlock from "@/components/project/TerminalBlock";
import Pipeline, { type PipelineNode } from "@/components/work/Pipeline";

const LEDE =
  "MUI 라이브러리로 만들어져 있던 Keeper Admin을 자체 디자인 시스템으로 재구축한 프로젝트. 33종 컴포넌트를 다시 설계·구현하고 전체 화면을 순차 이관하면서, 디자이너와 개발자가 같은 언어로 말하는 구조를 만들었습니다.";

export const metadata: Metadata = {
  title: "Keeper Design System",
  description: LEDE,
};

const META: MetaItem[] = [
  { label: "Timeline", value: "2026.01 – 2026.06" },
  { label: "Product", value: "Keeper Admin (Web · B2B)" },
  { label: "Team", value: "디자인 1 · Dev 협업" },
  { label: "Role", value: "시스템 설계·구현·운영 전담 · 레포 오너십" },
  {
    label: "Tools",
    value: "Figma, Token Studio, Style Dictionary, Next.js, Claude Code",
  },
];

/* 이 사이트의 토큰도 같은 파이프라인을 거쳐 나온다 — tokens.css 가 그 결과물이다 */
const PIPELINE_NODES: PipelineNode[] = [
  { label: "Figma" },
  { label: "Token Studio" },
  { label: "Style Dictionary" },
  { label: "tokens.css" },
  { label: "Component", highlight: true },
];

const OVERVIEW = [
  "MUI 라이브러리로 만들어져 있던 Keeper Admin을 자체 디자인 시스템으로 재구축했습니다. shadcn/React 기반으로 33종 컴포넌트를 다시 설계·구현하고 전체 화면을 순차 이관했으며, Token Studio에서 Style Dictionary를 거쳐 CSS 변수로 빌드되는 토큰 파이프라인과 규칙이 찾아지고 읽히도록 만든 문서 사이트까지 — 시스템의 설계와 구현, 운영을 혼자 완결했습니다.",
  "목표는 “디자이너와 개발자가 같은 언어로 말하는 상태”였습니다. 색상 하나를 바꾸기 위해 파일 수십 개를 뒤지지 않아도 되고, Figma의 variant 이름이 코드의 prop 이름과 일치하며, 규칙이 문서에 있어 개발자가 묻기 전에 답을 찾을 수 있는 구조를 만들었습니다.",
];

const BACKGROUND = [
  "KDS 이전의 Keeper Admin은 MUI 라이브러리 위에 만들어져 있었습니다. 빠르게 화면을 만들 수는 있었지만, 제품의 디자인 언어는 MUI의 기본값과 커스텀 오버라이드 사이 어딘가에 있었습니다. 커스터마이징은 오버라이드 위에 오버라이드를 쌓는 일이었고, 무엇보다 토큰 체계가 없어 디자인 결정이 코드 어디에 어떤 값으로 박혀 있는지 추적할 수 없었습니다.",
  "자체 시스템으로의 재구축을 결정했습니다 — shadcn/React 기반으로 컴포넌트를 다시 만들고, 전체 화면을 새 시스템으로 마이그레이션하는 계획이었습니다.",
];

const PROBLEM = [
  "스타일 값이 코드 곳곳에 하드코딩되어 있어 하나를 바꾸려면 전체를 뒤져야 했고, 그마저도 빠뜨린 곳이 남았습니다. 디자인과 코드가 컴포넌트를 서로 다른 이름으로 불러 스펙 전달마다 통역 비용이 발생했고, 재사용을 전제하지 않은 화면 단위 구현은 새 화면을 만들 때마다 비슷한 UI를 처음부터 다시 만들게 했습니다. 일관성의 붕괴는 디자인 부채가 아니라 매 스프린트의 실질 비용이었습니다.",
];

const APPROACH = [
  "재구축의 순서를 정하는 것이 첫 결정이었습니다. 컴포넌트를 먼저 만들면 33종이 쌓이는 동안 각 컴포넌트가 저마다의 값을 들고 있게 되고, 나중에 토큰을 붙이는 일은 결국 33번의 수정 작업이 됩니다. 그래서 Token Studio에서 Style Dictionary를 거쳐 tokens.css로 빌드되는 경로를 먼저 세우고 그 위에 컴포넌트를 올렸습니다. tokens.css는 자동 생성 파일이므로 사람이 손대지 않는다는 것을 원칙으로 두고, 수정은 매핑 레이어에서만 하도록 제한했습니다.",
  "두 번째 결정은 규칙을 검사할 수 있는 형태로 만드는 것이었습니다. “하드코딩 금지”는 문서에 적어두는 것만으로는 지켜지지 않아서, 허용 범위를 var(--token-name) 하나로 좁히고 Tailwind 기본 팔레트는 빌드 단계에서 막았습니다. 여기에 Figma REST API로 실제 변수 바인딩을 읽어 코드와 대조하는 자체 스킬을 붙여, 규칙에서 벗어난 값이 사람 눈에 띄기 전에 먼저 드러나게 했습니다.",
];

const AS_IS_CODE = `<Box sx={{
  bgcolor: '#f0f0f5',
  border: '1px solid #cdced6',
  borderRadius: '8px',
  gap: '12px',
}}>
  <Button variant="contained"
    sx={{ bgcolor: '#1e6ef5' }} />
// 같은 값이 다른 화면에도 각각`;

const TO_BE_CODE = `<div className="flex gap-3
  rounded-[var(--radius-300)]
  bg-[var(--color-gray-100)]
  border-[var(--color-border-secondary)]">
  <Button variant="brand-solid" />
// 값은 tokens.css 한 곳에만`;

const TOKEN_CHECK_OUTPUT = `$ node .claude/skills/11c-token-check/scripts/check-variables.js
  scanning components/ui/*.tsx · figma node 5010:218110

  PASS  button.tsx        42 refs   var(--) 42 / 42
  PASS  input.tsx         38 refs   var(--) 38 / 38
  PASS  checkbox.tsx      21 refs   var(--) 21 / 21
  FAIL  legacy-card.tsx   17 refs   var(--) 14 / 17
        └ L48  background: #f0f0f5      → --color-gray-100
        └ L52  border: 1px solid #cdced6 → --color-border-secondary
        └ L61  gap: 12px                 → --space-150

  ── 결과 ─────────────────────────────────────
  3 / 4 통과 · 하드코딩 3건 · 치환 토큰 자동 제안`;

const ENUM_CODE = `// 아이콘이 늘어날 때마다
// 컴포넌트를 수정해야 함
<Button
  iconType="search"
  // "close" | "add" | ...
/>`;

const SLOT_CODE = `// 컴포넌트는 자리만 열고
// 호출부가 내용을 넣음
<Button
  leadingIcon={<Icon name="Search"/>}
/>`;

const PRINCIPLES = [
  {
    title: "Figma의 boolean·variant는 enum이 아니라 슬롯으로 번역한다",
    body: "“아이콘 있음/없음”을 iconType enum으로 받으면 새 아이콘이 필요할 때마다 컴포넌트를 고쳐야 하지만, ReactNode 슬롯으로 열어두면 호출부가 내용을 주입하면 됩니다.",
  },
  {
    title: "컴포넌트는 콜백을 쏘거나 슬롯을 열 뿐, 앱 로직을 소유하지 않는다",
    body: "KDS 컴포넌트가 앱 전용 컴포넌트를 import하는 순간 그것은 시스템이 아니라 앱의 일부가 되기 때문에, 의존 방향은 언제나 앱 → 시스템 한쪽으로만 두었습니다.",
  },
  {
    title: "컨테이너 스타일은 벗겨낼 수 있게 만든다",
    body: "배경·테두리·반경·그림자를 container 옵션으로 분리해, 같은 컴포넌트를 독립 요소로도 다른 컴포넌트 안의 요소로도 쓸 수 있게 했습니다. TimePicker에서 처음 쓰고 Menu와 Accordion으로 넓혔습니다.",
  },
];

const BRANCH_STEPS = [
  {
    title: "feature 브랜치",
    description: "develop에서 분기. 컴포넌트와 문서는 커밋을 나눕니다.",
  },
  {
    title: "dev 프리뷰 확인",
    description: "배포 프리뷰에서 실제 렌더링을 눈으로 확인합니다.",
  },
  {
    title: "develop 병합",
    description: "토큰 정합성 수정이면 self-merge로 진행합니다.",
  },
  {
    title: "main PR",
    description: "스펙·디자인 변경은 개발 리드 리뷰를 거칩니다.",
  },
  {
    title: "Code Connect 발행",
    description: "Figma main 병합을 확인한 뒤 재발행합니다.",
  },
];

/*
 * 스니펫은 빌드 타임에 파일에서 읽는다 — 페이지 코드에 옮겨 적지 않는다.
 * 문서를 고치면 페이지가 따라 바뀌고, 원문과 화면이 어긋날 자리가 없다.
 */
function readSnippet(filename: string): string {
  return fs
    .readFileSync(path.join(process.cwd(), "content", "work", filename), "utf8")
    .trimEnd();
}

const SNIPPETS = [
  { filename: "preflight-prompt.md", content: readSnippet("preflight-prompt.md") },
  { filename: "preflight-report.md", content: readSnippet("preflight-report.md") },
];

const TOKEN_MEDIA: MediaItem[] = [
  {
    label: "Figma Variables — semantic 컬렉션",
    /* 원본 16:9 — hero 프레임이라야 Figma 패널 좌우가 잘리지 않는다 */
    ratio: "hero",
    src: "/images/work/kds-var-semantic.png",
    alt: "Figma Variables 패널의 semantic 컬렉션. 좌측에 primitive 266개, semantic 56개, admin_lokalise 1530개 컬렉션이 있고 semantic 아래 color 그룹이 themeDependent·theme·background·foreground·border·divider·label 로 나뉘어 있다. 우측 표에는 primary·secondary·success·warning·danger 같은 이름이 color/blue/500, color/green/600 처럼 primitive 값을 가리키고 있다.",
    width: 1920,
    height: 1056,
    caption:
      "Fig 2 — 컴포넌트가 보는 역할 계층. primary·danger 같은 이름이 원시 값을 가리킨다",
  },
  {
    label: "Figma Variables — primitive 컬렉션",
    ratio: "hero",
    src: "/images/work/kds-var-primitive.png",
    alt: "Figma Variables 패널의 primitive 컬렉션. 좌측 그룹 목록에 color 110개, font 49개, dimension 16개, radius 12개, space 18개, motion 10개, shadows 51개가 있고, 우측 표에는 gray 000~950, red 050~900 같은 색상 스케일이 FFFFFF·F7F7FA 처럼 실제 hex 값으로 나열돼 있다.",
    width: 1920,
    height: 1060,
    caption:
      "Fig 3 — 역할 이름이 가리키는 원시 값. 색상·서체·간격·모션까지 한 곳에서 정의된다",
  },
];

const COMPONENT_MEDIA: MediaItem[] = [
  {
    label: "컴포넌트 전체 — 6개 카테고리 33종",
    /* 원본 2.31 로 매우 넓다 — hero(16:9) 가 wide 보다 좌우를 덜 잘라낸다 */
    ratio: "hero",
    src: "/images/work/kds-components-overview.png",
    alt: "Figma 캔버스에 컴포넌트가 이름표를 달고 격자로 늘어서 있다. 윗줄은 Button·Chip·Floating Action·Checkbox·Date Picker·Field·Radio·Switch·Select·Text Input·Textarea·Time Picker·ToggleGroup·Accordion·Avatar·Badge, 아랫줄은 Alert·Progress·Skeleton·Sonner·Spinner·Dialog·Tooltip·Menu·Popover·BottomSheet·Breadcrumb·Pagination·GNB·Sidebar·Navigation·Tab·Guideline 이다. 각 이름표 아래에는 그 컴포넌트의 가이드와 variant 시트가 여러 장씩 붙어 있다.",
    width: 1920,
    height: 832,
    caption:
      "Fig 5 — 컴포넌트 라이브러리 전체. 6개 카테고리에 33종이 같은 형식의 시트를 갖는다",
  },
  {
    label: "Button 컴포넌트 — variant × state 매트릭스와 속성 패널",
    ratio: "wide",
    src: "/images/work/kds-button-variants.png",
    alt: "Figma 에서 Button 원본 컴포넌트를 선택한 화면. 캔버스의 선택 영역 아래에 “168 Variants” 배지가 붙어 있고, 그 안에 variant 별 행과 상태별 열로 버튼이 채워져 있으며 아래쪽 절반은 같은 조합의 아이콘 전용 버튼이다. 우측 속성 패널에는 Variant(Brand Solid, Brand Outline, Neutral Solid …), Size(Small, Medium, Large), Icon Only(False, True), State(Enabled, Hover, Pressed, Disabled), Loading, Label, Prefix Icon 과 Suffix Icon 이 각각 별도 속성으로 나열돼 있고, 그 아래 Nested instances 로 Leading Icon·Trailing Icon·Interaction 이 있다.",
    width: 1920,
    height: 1243,
    caption:
      "Fig 6 — 버튼 하나가 variant·size·state 조합으로 168개. 상태와 아이콘은 전부 속성으로 분리된다",
  },
];

const DOCS_MEDIA: MediaItem[] = [
  {
    label: "문서 사이트 — Button Variant·Size",
    /* 원본 3:2 — wide 프레임에서 위아래가 조금 잘리지만 본문은 온전히 남는다 */
    ratio: "wide",
    src: "/images/work/kds-docs-02.png",
    alt: "문서 사이트의 Button 페이지 Variant 섹션. Brand Solid, Brand Outline, Neutral Solid, Neutral Outline, Neutral Weak, Critical Solid, Ghost 일곱 가지가 실제 버튼으로 렌더돼 있고 각각 옆에 언제 쓰는지 한 줄 설명이 붙어 있다. 아래 Size 섹션에는 Small 32px, Medium 40px, Large 48px 세 버튼이 나란히 놓여 있다.",
    width: 1920,
    height: 1293,
    caption:
      "Fig 8 — 문서의 예시는 이미지가 아니라 실제 컴포넌트다. 토큰이 바뀌면 이 화면도 함께 바뀐다",
  },
  {
    label: "문서 사이트 — Button Definition·Anatomy",
    ratio: "wide",
    src: "/images/work/kds-docs-01.png",
    alt: "문서 사이트의 Button 페이지 상단. Definition 에 버튼의 정의가, Anatomy 에 Container·Leading Icon·Label·Trailing Icon 네 부분을 번호로 짚은 도해와 설명이 있고 그 아래 Properties 와 Variant 섹션이 이어진다. 좌측 사이드바에는 Actions·Controls·Display·Feedback 카테고리별 컴포넌트 목록이 있고 아직 문서화되지 않은 항목은 흐리게 표시돼 있다.",
    width: 1920,
    height: 1303,
    caption:
      "Fig 9 — 언제 쓰는지, 무엇으로 이루어졌는지까지 컴포넌트마다 같은 형식으로 적어 뒀다",
  },
];

const CODE_CONNECT_MEDIA: MediaItem = {
  label: "Code Connect 연결 화면 — Figma Dev Mode",
  ratio: "hero",
  src: "/images/work/kds-codeconnect-02.png",
  alt: "Figma Dev Mode 에서 Button 컴포넌트를 선택한 화면. 가운데 다이얼로그 왼쪽에 파란 Label 버튼이, 오른쪽에 GitHub 저장소의 button.tsx 로 연결된 코드가 <Button variant=\"brand-solid\" size=\"medium\">Label</Button> 로 표시되고 상단에 Connected 배지가 붙어 있다. 우측 Inspect 패널의 Variant 는 Brand Solid, Size 는 Medium 으로 코드의 prop 값과 이름이 같다.",
  width: 1920,
  height: 1047,
  caption:
    "Fig 10 — Figma 에서 고른 Brand Solid·Medium 이 코드의 variant·size prop 과 같은 이름으로 나온다",
};

const COLLAB_MEDIA: MediaItem[] = [
  {
    label: "PR — TabsTrigger suffixIcon prop 추가",
    /* 원본 1920×1183 — 16:10 에 거의 맞아 wide 프레임에서 거의 잘리지 않는다 */
    ratio: "wide",
    src: "/images/work/kds-collab-pr-01.png",
    alt: "GitHub Pull Request 화면. 제목은 “feat: TabsTrigger suffixIcon prop 추가” 이고 Merged 상태이며 리뷰어 한 명이 승인 표시를 남겼다. 본문이 요약·배경·변경·설계 결정·하위호환·관련 티켓으로 나뉘어 있고, 설계 결정 항목에는 Figma 의 boolean 이 아니라 ReactNode 슬롯으로 받는 이유, notification dot 앵커를 옮기지 않는 이유, 아이콘 크기를 20px 로 고정하고 sizeConfig 를 건드리지 않는 이유가 각각 한 줄로 적혀 있다.",
    width: 1920,
    height: 1183,
    caption:
      "Fig 15 — 결정과 근거를 PR 본문에 적어 두면 리뷰가 코드가 아니라 판단을 본다",
  },
  {
    label: "PR — Chip 컴포넌트 Figma 스펙 반영",
    ratio: "wide",
    src: "/images/work/kds-collab-pr-04.png",
    alt: "GitHub Pull Request 화면. 제목은 “feat: Chip 컴포넌트 Figma 스펙 반영 및 오버레이 구조 개선” 이고 Merged 상태다. 본문은 리팩터와 스펙 반영 두 커밋으로 나뉘어 있고, 스펙 반영 쪽에 size 별 paddingH·gap·icon 값을 as-is 와 to-be 두 열로 비교한 표가 --space-100(8) → --space-150(12) 처럼 토큰 이름과 픽셀 값을 함께 적어 놓았다. 아래에는 Outline border 색을 상태별로 비교한 표가 이어진다.",
    width: 1920,
    height: 1184,
    caption:
      "Fig 16 — Figma 가 바뀌면 무엇이 어떤 토큰으로 바뀌는지 표로 옮겨 놓고 합의했다",
  },
];

export default function KdsPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 01 Hero */}
      <ProjectHero
        eyebrow="Design System · Replatforming · 2026"
        title="Keeper Design System"
        lede={LEDE}
        image={{
          label: "대표 이미지 — 토큰과 컴포넌트 매트릭스",
          ratio: "hero",
          src: "/images/work/kds-hero.png",
          alt: "왼쪽에 Semantic/themeDependent 표가 primary → blue-500 → #1E6EF5FF 처럼 이름·토큰·값 세 열로 놓여 있고, 그 아래 Primitive/blue 색상 램프와 blue-050 #ECF2FE 부터 이어지는 hex 목록이 있다. 오른쪽에는 Button 컴포넌트가 큰 매트릭스로 펼쳐져 파랑 솔리드·아웃라인·어두운 솔리드·회색·빨강 등 variant 가 행마다 바뀌고, 한 행 안에서 기본·호버·눌림·비활성 상태가 나란히 이어지며, 아래쪽에는 같은 조합의 아이콘 전용 버튼이 놓여 있다.",
          width: 1920,
          height: 1080,
          priority: true,
        }}
      />

      {/* 02 Meta */}
      <section>
        <MetaGrid items={META} />
        <Pipeline nodes={PIPELINE_NODES} />
      </section>

      {/* 03 Overview */}
      <ProseSection eyebrow="03 OVERVIEW" paragraphs={OVERVIEW} />

      {/* 04 Impact */}
      <ImpactStats
        eyebrow="04 IMPACT"
        stats={[
          {
            value: "33",
            unit: "종",
            label:
              "다시 설계·구현한 컴포넌트. 6개 카테고리에 걸쳐 Figma 컴포넌트와 이름이 1:1로 대응합니다.",
          },
          {
            value: "346",
            unit: "개",
            label:
              "Token Studio에서 자동 빌드되는 CSS 변수. 이 중 79개는 원시 값이 아니라 역할을 가리키는 별칭입니다.",
          },
          {
            value: "0",
            unit: "건",
            label:
              "컴포넌트 코드에 남은 하드코딩된 색상·간격 값. 검사 스크립트로 상시 확인합니다.",
          },
        ]}
        shift={{
          label: "색상 하나를 바꾸는 데 드는 일",
          from: "파일 수십 개를 뒤지고, 빠뜨린 곳이 남음",
          to: "토큰 값 1개 수정 후 빌드",
        }}
        basis="측정 기준 — CSS 변수 수는 styles/tokens.css 집계값, 하드코딩 0건은 토큰 검사 스크립트 결과입니다."
      />

      {/* 05 Background */}
      <ProseSection
        eyebrow="05 BACKGROUND"
        headline="제품의 디자인 언어가 MUI의 기본값과 오버라이드 사이에 있었다"
        paragraphs={BACKGROUND}
      />

      {/* 06 Problem */}
      <ProseSection
        eyebrow="06 PROBLEM"
        headline="무엇을 바꾸려 해도 어디를 바꿔야 하는지 알 수 없었다"
        paragraphs={PROBLEM}
      >
        <div>
          <CodeCompare
            before={{ label: "AS-IS · 값이 화면에 박혀 있는 상태", code: AS_IS_CODE }}
            after={{ label: "TO-BE · 값이 토큰에만 있는 상태", code: TO_BE_CODE }}
            caption="Fig 1 — 같은 화면을 두 방식으로 썼을 때의 차이. 왼쪽은 값을 바꾸려면 이 파일을 찾아야 하고, 오른쪽은 찾을 파일이 하나입니다."
          />
        </div>
      </ProseSection>

      {/* 07 Approach */}
      <ProseSection
        eyebrow="07 APPROACH"
        headline="컴포넌트보다 토큰 파이프라인을 먼저 만들었다"
        paragraphs={APPROACH}
      />

      {/* 08 Solution */}
      <ProseSection eyebrow="08 SOLUTION">
        <article>
          <h3 className={PROSE_HEADLINE}>
            토큰이 Figma에서 코드까지 한 방향으로 흐르게 했습니다
          </h3>
          <p className={PROSE_PARAGRAPH}>
            Token Studio에서 정의한 토큰이 Style Dictionary 빌드를 거쳐
            styles/tokens.css로 출력되고, 컴포넌트는 그 CSS 변수만 참조합니다.
            Foundation → Semantic → Component의 3단 계층을 두어 컴포넌트가
            --color-blue-500 같은 원시 값이 아니라 --color-border-primary 같은
            역할을 참조하게 했는데, 346개 변수 중 79개가 이 역할 계층입니다.
            브랜드 컬러를 교체하는 작업이 Foundation 값 하나를 바꾸는 일로 끝나는
            것도 이 구조 덕분입니다.
          </p>
          {TOKEN_MEDIA.map((item) => (
            <MediaSlot key={item.label} {...item} />
          ))}
        </article>

        <article>
          <h3 className={PROSE_HEADLINE}>
            하드코딩 금지를 문서가 아니라 검사로 만들었습니다
          </h3>
          <p className={PROSE_PARAGRAPH}>
            모든 스타일 값을 var(--token-name) 형태로만 참조한다는 원칙을 세우고,
            HEX·rgb와 Tailwind 기본 팔레트를 직접 쓰지 못하게 막았습니다. 원칙만으로는
            부족해서 11c-token-check 스킬을 만들어, Figma REST API로 실제 노드의 변수
            바인딩을 읽고 코드와 대조하도록 했습니다. 위반 위치만 알려주면 결국
            무엇으로 바꿔야 할지 다시 찾게 되기 때문에 치환할 토큰까지 함께 출력하게
            했고, 마이그레이션 기간에는 이 검사가 게이트 역할을 해서 화면을 옮길
            때마다 남은 하드코딩이 자동으로 드러났습니다.
          </p>
          <TerminalBlock
            content={TOKEN_CHECK_OUTPUT}
            caption="Fig 4 — 토큰 검사 리포트. 위반을 잡는 데서 끝내지 않고 어떤 토큰으로 바꿔야 하는지까지 함께 출력합니다."
          />
        </article>

        <article>
          <h3 className={PROSE_HEADLINE}>
            shadcn 구조를 개조해 33종을 Figma 스펙 기준으로 다시 만들었습니다
          </h3>
          <p className={PROSE_PARAGRAPH}>
            접근성과 키보드 인터랙션처럼 이미 검증된 부분을 다시 만들 이유가 없어서,
            컴포넌트를 처음부터 쓰지 않고 shadcn 구조를 개조하는 방식을 택했습니다.
            Button, TextInput, Select, Table, Dialog, Tooltip, Popover, Sidebar,
            Field를 포함해 6개 카테고리 33종을 구현하면서 variant·size·state 이름을
            Figma 컴포넌트와 그대로 맞췄고, 그 결과 Figma의 Brand/Solid가 코드에서
            variant=&quot;brand-solid&quot;, Medium이 size=&quot;medium&quot;이 되어 스펙을 전달할 때
            통역할 것이 남지 않았습니다.
          </p>
          {COMPONENT_MEDIA.map((item) => (
            <MediaSlot key={item.label} {...item} />
          ))}
          <DataTable
            headers={["Figma Variant", "Code prop", "대응"]}
            monoColumns={[0, 1]}
            rows={[
              ["Type = Brand / Style = Solid", 'variant="brand-solid"', "1:1"],
              ["Type = Neutral / Style = Weak", 'variant="neutral-weak"', "1:1"],
              ["Size = Medium (40px)", 'size="medium"', "1:1"],
              ["Icon = True (boolean)", "leadingIcon={<Icon/>}", "슬롯 변환"],
              ["State = Hovered / Pressed", "CSS ::before overlay", "상태 변환"],
            ]}
            caption="Fig 7 — 이름은 그대로 옮기되, Figma의 boolean은 코드에서 enum이 아니라 슬롯으로 번역했습니다. 이유는 10에 적었습니다."
          />
        </article>

        <article>
          <h3 className={PROSE_HEADLINE}>
            규칙이 찾아지고 읽히도록 문서 사이트를 만들었습니다
          </h3>
          <p className={PROSE_PARAGRAPH}>
            토큰과 컴포넌트가 코드에만 있으면 개발자 외에는 볼 수 없습니다.
            Foundations(Color·Typography·Space·Radius·Shadow·Motion·Icon·Logo)와
            컴포넌트별 스펙·사용 지침을 담은 문서 사이트를 만들고 prod와 dev 두
            환경으로 나눠 운영했습니다. 문서를 코드에서 생성하도록 해서 구현과 문서가
            어긋날 여지를 없앴고, 개발자가 &quot;이 경우엔 어떻게 되나요&quot;라고 묻기 전에
            답이 문서에 있는 상태를 목표로 삼았습니다.
          </p>
          {DOCS_MEDIA.map((item) => (
            <MediaSlot key={item.label} {...item} />
          ))}
        </article>

        <article>
          <h3 className={PROSE_HEADLINE}>
            Figma와 코드의 연결을 사람이 아니라 도구가 읽게 했습니다
          </h3>
          <p className={PROSE_PARAGRAPH}>
            Figma Code Connect를 도입해 Figma 컴포넌트와 components/ui/*.tsx를 1:1로
            매핑했는데, 이 연결의 쓸모는 사람이 보는 핸드오프 문서보다 도구가 읽는
            맥락에 있습니다. Figma MCP로 화면을 읽고 코드를 생성할 때 어떤 구현체를
            써야 하는지를 도구가 스스로 알게 되기 때문입니다. 다만 연결 대상이 실제
            사용 레포가 아니면 엉뚱한 구현체를 참조하게 되어 props 이름과 토큰 사용
            방식이 전부 어긋나므로, 개발팀이 쓰는 레포 기준으로 다시 연결하도록
            정리했습니다.
          </p>
          <MediaSlot {...CODE_CONNECT_MEDIA} />
        </article>

        <article>
          <h3 className={PROSE_HEADLINE}>
            파일럿으로 검증하고, 매핑 테이블로 패턴화한 뒤 전체로 확산했습니다
          </h3>
          <p className={PROSE_PARAGRAPH}>
            전체를 한 번에 옮기는 방식은 되돌릴 수 없어서 화면 하나를 파일럿으로 잡아
            교체 가능성을 먼저 확인했습니다. 그 과정에서 나온 MUI ↔ KDS 대응을 매핑
            테이블로 정리하면서, 1:1로 바꿀 수 있는 것과 props 구조를 다시 설계해야
            하는 것, KDS에 아직 없어 별도 처리가 필요한 것을 미리 분류했습니다. 이후
            화면은 판단하는 작업이 아니라 표를 보고 옮기는 작업이 됐고, 이 순서로 화면
            단위 이관을 진행했습니다.
          </p>
          <DataTable
            headers={["MUI", "KDS", "교체 방식"]}
            monoColumns={[0, 1]}
            rows={[
              ['Button variant="contained"', 'Button variant="brand-solid"', "1:1 교체"],
              ["FormControl + Select + MenuItem", "Select", "1:1 교체"],
              ["Box sx={{…}}", "div + var(--token)", "1:1 교체"],
              ["Typography", "div + 타이포 토큰", "1:1 교체"],
              ["CustomModal", "Dialog", "props 재설계"],
              ["DatePicker", "DatePicker (신규 구축)", "선행 구축"],
              ["CircularProgress", "Progress (신규 구축)", "선행 구축"],
            ]}
            caption="Fig 11 — 판단이 필요한 지점을 미리 분류해두면, 마이그레이션은 판단이 아니라 실행이 됩니다."
          />
        </article>

        <article>
          <h3 className={PROSE_HEADLINE}>
            기획자가 시안 없이 프로토타입을 만들 수 있게 했습니다
          </h3>
          <p className={PROSE_PARAGRAPH}>
            KDS와 Claude Code를 결합해 기획자가 PRD만으로 KDS가 적용된 프로토타입을
            만들 수 있는 워크플로우를 설계했습니다. 다만 여러 사람이 시스템 레포를
            직접 건드리면 거버넌스가 무너지기 때문에, 디자인 시스템 레포는 읽기
            전용으로 두고 기획자는 별도 환경에서 클론해 쓰는 원칙을 함께
            정의했습니다. 기획 그룹 대상 가이드 문서와 접근 권한을 정리해 전사에
            공유하면서, 디자인 시스템이 UI 라이브러리를 넘어 기획·디자인·개발이 같은
            컴포넌트를 쓰는 협업 인프라가 됐습니다.
          </p>
          <FlowCompare
            tracks={[
              {
                label: "AS-IS · 직렬",
                nodes: ["PRD 작성", "디자인 시안", "개발 구현", "검증"],
                note: "검증에서야 오류가 드러납니다.",
              },
              {
                label: "TO-BE · 병렬",
                nodes: ["PRD 작성", "KDS + Claude Code", "검증"],
                highlight: 2,
                note: "기획 단계에서 바로 검증합니다 — 디자인 시스템 레포는 read-only clone 으로 씁니다.",
              },
            ]}
            caption="Fig 12 — 검증 시점을 앞으로 당기면 디자인과 개발은 이미 검증된 안에서 시작합니다."
          />
        </article>
      </ProseSection>

      {/* 09 Interaction Detail */}
      <ProseSection
        eyebrow="09 INTERACTION DETAIL"
        headline="AI 워크플로"
        paragraphs={[
          "반복 검증은 사람이 아니라 구조가 하도록 도구를 만들었습니다. 토큰 정합성 검사 스킬은 하드코딩된 색상·간격 값을 잡아내고, 마이그레이션을 마친 화면은 핸드오프 전에 스킬로 정합성을 검사했습니다 — API 응답 필드와 화면 텍스트의 1:1 대조, 엣지 케이스 커버리지, 조건부 필드 존재 여부까지 검사 기준을 프롬프트에 명시하고, 결과를 수정 필수·협의·확인 완료로 분류해 받았습니다. 아래는 실제 사용한 프롬프트와 리포트의 발췌입니다.",
        ]}
      >
        {/*
         * ProseSection 의 children 은 블록 사이를 space-700 으로 벌린다.
         * 스니펫끼리는 미디어 슬롯과 같은 간격이어야 해서 한 겹으로 묶어,
         * 사이 간격을 SnippetBlock 자신의 상하 마진이 정하게 한다.
         */}
        <div>
          {SNIPPETS.map((snippet) => (
            <SnippetBlock key={snippet.filename} {...snippet} />
          ))}
        </div>
      </ProseSection>

      {/* 10 Design Detail */}
      <ProseSection
        eyebrow="10 DESIGN DETAIL"
        headline="컴포넌트가 앱의 사정을 알지 않게 했다"
        paragraphs={[
          "재사용을 전제로 만든 컴포넌트도 쓰이는 동안 앱 로직을 조금씩 끌어안게 됩니다. 33종을 만들면서 세 가지 기준을 두고 예외를 만들지 않았습니다.",
        ]}
      >
        <div>
          <CodeCompare
            before={{ label: "enum으로 받으면", code: ENUM_CODE }}
            after={{ label: "슬롯으로 열어두면", code: SLOT_CODE }}
            caption="Fig 13 — Figma의 “아이콘 있음/없음” 변형을 코드에서 어떻게 번역하느냐가 컴포넌트의 수명을 결정합니다."
          />
        </div>
        <PrincipleList items={PRINCIPLES} />
      </ProseSection>

      {/* 11 Collaboration */}
      <ProseSection eyebrow="11 COLLABORATION">
        <article>
          <h3 className={PROSE_HEADLINE}>
            리뷰 강도를 변경의 성격에 따라 나눴습니다
          </h3>
          <p className={PROSE_PARAGRAPH}>
            혼자 만드는 시스템이지만 개발팀이 쓰는 시스템이라, 모든 변경에 같은 리뷰를
            요구하면 병목이 되고 아무 리뷰도 없으면 스펙이 흔들립니다. 그래서 변경을 두
            종류로 나눠, 토큰 정합성 수정처럼 스펙이 바뀌지 않는 작업은 self-merge를
            허용하고 스펙이나 디자인이 바뀌는 변경은 개발 리드 리뷰를 필수로 뒀습니다.
            브랜치 전략도 각 단계에서 무엇을 확인하는지가 정해지도록 정리해서, 누가
            작업하더라도 같은 순서를 밟게 했습니다.
          </p>
          <StepFlow
            steps={BRANCH_STEPS}
            caption="Fig 14 — 리뷰가 필요한 변경과 그렇지 않은 변경을 미리 나눠두면, 리뷰는 병목이 아니라 게이트가 됩니다."
          />
          {COLLAB_MEDIA.map((item) => (
            <MediaSlot key={item.label} {...item} />
          ))}
        </article>

        <article>
          <h3 className={PROSE_HEADLINE}>합의를 단계적으로 만들었습니다</h3>
          <p className={PROSE_PARAGRAPH}>
            디자인 시스템은 다 만든 뒤에 설득하면 늦습니다. 착수 전 PoC 공유 미팅에서
            &quot;Figma 토큰이 코드로 자동 반영되는가&quot;를 라이브로 시연해 Token Studio와
            shadcn/ui 채택을 그 자리에서 확정했고, 이후 중간 공유 미팅으로 진행 현황과
            핸드오프 방안을 검토받았습니다. 기술 선택을 혼자 결정하고 통보하는 대신
            검증 결과를 먼저 보여주는 순서로 진행한 덕분에, 개발팀이 쓰기 시작하는
            시점에 설득할 일이 남아 있지 않았습니다.
          </p>
        </article>
      </ProseSection>

      {/* 12 Outcome */}
      <ProseSection
        eyebrow="12 OUTCOME"
        headline="디자이너와 개발자가 같은 언어로 말하게 됐다"
        paragraphs={[
          "MUI 의존을 걷어내며 전체 화면을 KDS로 옮기는 이관을 진행했습니다. 색상 하나를 바꾸려면 파일 수십 개를 뒤져야 했던 일이 토큰 값 하나를 고치는 일로 바뀌었고, Figma의 variant 이름과 코드의 prop 이름이 일치하면서 스펙을 전달할 때의 통역 비용이 사라졌습니다. 규칙은 문서 사이트에 있어 개발자가 묻지 않고 찾을 수 있게 됐고, 기획자는 디자인 시안을 기다리지 않고도 KDS 기반 프로토타입으로 화면을 검증할 수 있게 됐습니다.",
          "프로젝트를 마무리하면서는 토큰 파이프라인, Figma 파일 오너십, 레포 권한, 진행 중이던 작업을 정리한 핸드오버 문서를 작성해 인계했습니다. 만든 사람이 없어도 굴러가는 상태까지가 시스템을 만드는 일이라고 봤습니다.",
          "돌아보면 가장 중요했던 산출물은 33종의 컴포넌트가 아니라 순서와 검사였습니다. 컴포넌트를 먼저 만들었다면 33개의 컴포넌트와 33번의 수정 작업을 함께 갖게 됐을 것이고, “하드코딩하지 말자”를 문서에만 적어뒀다면 지금도 화면마다 값이 조금씩 다른 상태였을 겁니다. 값이 흐르는 경로를 먼저 만들고, 규칙을 검사할 수 있는 형태로 바꾼 뒤에야 개수를 늘려도 일관성이 유지됐습니다.",
        ]}
      />

      {/* 13 이전/다음 프로젝트 */}
      <ProjectNav slug="kds" />
    </div>
  );
}
