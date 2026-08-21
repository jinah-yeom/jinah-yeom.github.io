import type { Metadata } from "next";
import ApproachList, {
  type ApproachItem,
} from "@/components/project/ApproachList";
import MediaSlot, { type MediaItem } from "@/components/project/MediaSlot";
import MetaGrid, { type MetaItem } from "@/components/project/MetaGrid";
import ProjectNav from "@/components/project/ProjectNav";
import ProjectHero from "@/components/project/ProjectHero";
import ProseSection, {
  PROSE_HEADLINE,
  PROSE_PARAGRAPH,
} from "@/components/project/ProseSection";
import SolutionBlock, {
  type SolutionBlockProps,
} from "@/components/project/SolutionBlock";
import Pipeline, { type PipelineNode } from "@/components/work/Pipeline";

const LEDE =
  "MUI 기반 제품을 자체 디자인 시스템으로 재구축했습니다 — 토큰 설계부터 33종 컴포넌트, 화면 마이그레이션, 문서까지 한 사람의 손으로.";

export const metadata: Metadata = {
  title: "Keeper Design System",
  description: LEDE,
};

const META: MetaItem[] = [
  { label: "Timeline", value: "2025 – 2026" },
  { label: "Product", value: "Keeper Admin (Web · Mobile Web)" },
  { label: "Team", value: "Designer 1 (개발 협업)" },
  { label: "Role", value: "토큰 설계 · 컴포넌트 · 문서화 · Code Connect (100%)" },
  { label: "Tools", value: "Figma, Token Studio, Style Dictionary, Next.js" },
];

const OVERVIEW = [
  "MUI 라이브러리로 만들어져 있던 Keeper Admin을 자체 디자인 시스템으로 재구축했습니다. shadcn/React 기반으로 33종 컴포넌트를 다시 설계·구현하고 전체 화면을 마이그레이션했으며, Token Studio에서 Style Dictionary를 거쳐 CSS 변수로 빌드되는 토큰 파이프라인과 규칙이 찾아지고 읽히도록 만든 문서 사이트까지 — 시스템의 설계와 구현, 운영을 혼자 완결했습니다.",
  "목표는 \"디자이너와 개발자가 같은 언어로 말하는 상태\"였습니다. 색상 하나를 바꾸기 위해 파일 수십 개를 뒤지지 않아도 되고, Figma의 variant 이름이 코드의 prop 이름과 일치하며, 규칙이 문서에 있어 개발자가 묻기 전에 답을 찾을 수 있는 구조를 만들었습니다.",
];

const BACKGROUND = [
  "KDS 이전의 Keeper Admin은 MUI 라이브러리 위에 만들어져 있었습니다. 빠르게 화면을 만들 수는 있었지만, 제품의 디자인 언어는 MUI의 기본값과 커스텀 오버라이드 사이 어딘가에 있었습니다. 커스터마이징은 오버라이드 위에 오버라이드를 쌓는 일이었고, 무엇보다 토큰 체계가 없어 디자인 결정이 코드 어디에 어떤 값으로 박혀 있는지 추적할 수 없었습니다.",
  "자체 시스템으로의 재구축을 결정했습니다 — shadcn/React 기반으로 컴포넌트를 다시 만들고, 전체 화면을 새 시스템으로 마이그레이션하는 계획이었습니다.",
];

const PROBLEM = [
  "스타일 값이 코드 곳곳에 하드코딩되어 있어 하나를 바꾸려면 전체를 뒤져야 했고, 그마저도 빠뜨린 곳이 남았습니다. 디자인과 코드가 컴포넌트를 서로 다른 이름으로 불러 스펙 전달마다 통역 비용이 발생했고, 재사용을 전제하지 않은 화면 단위 구현은 새 화면을 만들 때마다 비슷한 UI를 처음부터 다시 만들게 했습니다. 일관성의 붕괴는 디자인 부채가 아니라 매 스프린트의 실질 비용이었습니다.",
];

const APPROACHES: ApproachItem[] = [
  {
    label: "토큰",
    title: "모든 스타일 값의 단일 소스",
    bullets: [
      "Token Studio → Style Dictionary → CSS 변수 자동 빌드",
      "하드코딩 값은 시스템의 부채로 규정",
      "생성 파일은 수동 편집 금지",
    ],
  },
  {
    label: "컴포넌트",
    title: "앱의 사정을 모르는 컴포넌트",
    bullets: [
      "콜백과 슬롯만 노출, 앱 로직 비소유",
      "Figma boolean → 코드 ReactNode slot",
      "상태 표현은 배경과 오버레이로 분리",
    ],
  },
  {
    label: "연동",
    title: "디자인과 코드의 1:1 대응",
    bullets: [
      "Figma Code Connect로 컴포넌트 매핑",
      "variant/size/state 명칭 완전 일치",
      "스펙 전달이 아니라 스펙 공유",
    ],
  },
  {
    label: "문서",
    title: "찾을 수 있는 규칙만 지켜진다",
    bullets: [
      "Foundations부터 컴포넌트 가이드까지 문서화",
      "모든 예시는 실제 토큰·컴포넌트로 렌더",
      "문서와 구현이 어긋날 수 없는 구조",
    ],
  },
];

/* 이 사이트의 토큰도 같은 파이프라인을 거쳐 나온다 — tokens.css 가 그 결과물이다 */
const PIPELINE_NODES: PipelineNode[] = [
  { label: "Token Studio" },
  { label: "Style Dictionary" },
  { label: "tokens.css", highlight: true },
  { label: "Components" },
];

const SOLUTION_1 = {
  headline: "색을 고르는 일이 값을 옮기는 일이 되지 않게 했다",
  paragraph:
    "토큰은 Token Studio에서 설계하고, Style Dictionary가 CSS 변수로 빌드합니다. 생성된 tokens.css는 수동 편집이 금지된 산출물이라, 디자인 결정의 출처는 언제나 한 곳입니다. Figma Variables 322개(primitive 266 · semantic 56)가 이 파이프라인을 지나며, 그림자 같은 복합 토큰이 속성 단위로 풀려 346개의 CSS 변수로 빌드됩니다. 컴포넌트는 var(--token) 참조만 허용됩니다. 하드코딩된 값은 리뷰가 아니라 스크립트 검증에서 걸리게 했습니다.",
  /* 원본 16:9 — hero 프레임이라야 Figma 패널 좌우가 잘리지 않는다 */
  media: [
    {
      label: "Figma Variables — semantic 컬렉션",
      ratio: "hero",
      src: "/images/work/kds-var-semantic.png",
      alt: "Figma Variables 패널의 semantic 컬렉션. 좌측에 primitive 266개, semantic 56개, admin_lokalise 1530개 컬렉션이 있고 semantic 아래 color 그룹이 themeDependent·theme·background·foreground·border·divider·label 로 나뉘어 있다. 우측 표에는 primary·secondary·success·warning·danger 같은 이름이 color/blue/500, color/green/600 처럼 primitive 값을 가리키고 있다.",
      width: 1920,
      height: 1056,
      caption: "화면에서 고르는 것은 색이 아니라 primary·danger 같은 역할 이름이다",
    },
    {
      label: "Figma Variables — primitive 컬렉션",
      ratio: "hero",
      src: "/images/work/kds-var-primitive.png",
      alt: "Figma Variables 패널의 primitive 컬렉션. 좌측 그룹 목록에 color 110개, font 49개, dimension 16개, radius 12개, space 18개, motion 10개, shadows 51개가 있고, 우측 표에는 gray 000~950, red 050~900 같은 색상 스케일이 FFFFFF·F7F7FA 처럼 실제 hex 값으로 나열돼 있다.",
      width: 1920,
      height: 1060,
      caption:
        "역할 이름이 가리키는 원시 값 — 색상·서체·간격·모션까지 한 곳에서 정의된다",
    },
  ] satisfies MediaItem[],
};

/* TODO: 이미지가 준비되면 각 media 에 src·alt·width·height 를 채운다 */
const SOLUTIONS: SolutionBlockProps[] = [
  {
    headline: "컴포넌트가 앱을 알수록 재사용은 죽는다",
    paragraphs: [
      "Actions·Controls·Display·Feedback·Layout·Navigation 6개 카테고리, 33종의 컴포넌트를 하나의 원칙으로 설계했습니다 — 컴포넌트는 콜백을 쏘고 슬롯을 열어둘 뿐, 자신이 어디에 쓰이는지 소유하지 않습니다. Figma의 boolean prop은 코드에서 enum이 아니라 ReactNode slot이 됩니다. 호출하는 쪽이 내용을 주입하고 컴포넌트는 구조만 책임지는 경계를 지켰습니다.",
      "상태 표현도 규칙으로 분리했습니다. 선택됨은 배경 토큰으로, 인터랙션(hover·pressed)은 오버레이로 표현해 두 상태가 겹쳐도 충돌하지 않습니다. 시트에 담겨야 하는 컴포넌트는 container prop으로 자신의 크롬(배경·보더·반경·그림자)을 벗을 수 있어, 같은 컴포넌트가 독립 화면과 Bottom Sheet 양쪽에서 동작합니다.",
    ],
    media: [
      { label: "컴포넌트 variant 세트 + container prop 전후 비교", ratio: "wide" },
    ],
  },
  {
    headline: "스펙을 전달하지 않고 공유하게 했다",
    paragraphs: [
      "Figma Code Connect로 디자인 컴포넌트와 코드 컴포넌트를 매핑해, Figma에서 컴포넌트를 선택하면 해당하는 실제 코드 스니펫이 보입니다. variant·size·state의 이름이 양쪽에서 완전히 같아, \"이 버튼의 그 상태\"를 설명하는 통역이 사라졌습니다. 개발자와 기획자는 디자인 목업이 아니라 스펙 그 자체에서 작업을 시작합니다.",
    ],
    media: [
      {
        label: "Code Connect 연결 화면 — Figma Dev Mode",
        ratio: "hero",
        src: "/images/work/kds-codeconnect-02.png",
        alt: "Figma Dev Mode 에서 Button 컴포넌트를 선택한 화면. 가운데 다이얼로그 왼쪽에 파란 Label 버튼이, 오른쪽에 GitHub 저장소의 button.tsx 로 연결된 코드가 <Button variant=\"brand-solid\" size=\"medium\">Label</Button> 로 표시되고 상단에 Connected 배지가 붙어 있다. 우측 Inspect 패널의 Variant 는 Brand Solid, Size 는 Medium 으로 코드의 prop 값과 이름이 같다.",
        width: 1920,
        height: 1047,
        caption:
          "Figma 에서 고른 Brand Solid·Medium 이 코드의 variant·size prop 과 같은 이름으로 나온다",
      },
    ],
  },
  {
    headline: "규칙은 찾아지고 읽힐 때에만 지켜진다",
    paragraphs: [
      "Foundations(색상·타이포·간격)부터 컴포넌트별 가이드까지 담은 문서 사이트를 만들었습니다. 문서의 모든 예시는 이미지가 아니라 실제 토큰과 컴포넌트로 렌더됩니다 — 토큰이 바뀌면 문서도 함께 바뀌므로, 문서와 구현이 어긋날 수 없는 구조입니다.",
    ],
    /* 원본 3:2 — wide 프레임에서 위아래가 조금 잘리지만 본문은 온전히 남는다 */
    media: [
      {
        label: "문서 사이트 — Button Variant·Size",
        ratio: "wide",
        src: "/images/work/kds-docs-02.png",
        alt: "문서 사이트의 Button 페이지 Variant 섹션. Brand Solid, Brand Outline, Neutral Solid, Neutral Outline, Neutral Weak, Critical Solid, Ghost 일곱 가지가 실제 버튼으로 렌더돼 있고 각각 옆에 언제 쓰는지 한 줄 설명이 붙어 있다. 아래 Size 섹션에는 Small 32px, Medium 40px, Large 48px 세 버튼이 나란히 놓여 있다.",
        width: 1920,
        height: 1293,
        caption:
          "일곱 가지 variant 를 이미지가 아니라 실제 컴포넌트로 렌더한다 — 토큰이 바뀌면 이 화면도 함께 바뀐다",
      },
      {
        label: "문서 사이트 — Button Definition·Anatomy",
        ratio: "wide",
        src: "/images/work/kds-docs-01.png",
        alt: "문서 사이트의 Button 페이지 상단. Definition 에 버튼의 정의가, Anatomy 에 Container·Leading Icon·Label·Trailing Icon 네 부분을 번호로 짚은 도해와 설명이 있고 그 아래 Properties 와 Variant 섹션이 이어진다. 좌측 사이드바에는 Actions·Controls·Display·Feedback 카테고리별 컴포넌트 목록이 있고 아직 문서화되지 않은 항목은 흐리게 표시돼 있다.",
        width: 1920,
        height: 1303,
        caption:
          "언제 쓰는지, 무엇으로 이루어졌는지까지 컴포넌트마다 같은 형식으로 적어 뒀다",
      },
    ],
  },
];

export default function KdsPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 1. Hero */}
      <ProjectHero
        eyebrow="KEEPER DESIGN SYSTEM"
        title="Keeper Design System"
        lede={LEDE}
        image={{
          label: "대표 이미지 — 컴포넌트 세트 또는 토큰 팔레트",
          ratio: "hero",
        }}
      />

      {/* 2. Meta Grid */}
      <MetaGrid items={META} />

      {/* 3. Overview */}
      <ProseSection eyebrow="OVERVIEW" paragraphs={OVERVIEW} />

      {/* 4. Background */}
      <ProseSection eyebrow="BACKGROUND" paragraphs={BACKGROUND} />

      {/* 5. Problem */}
      <ProseSection eyebrow="PROBLEM" paragraphs={PROBLEM} />

      {/* 6. Approach */}
      <ProseSection eyebrow="APPROACH">
        <ApproachList items={APPROACHES} />
      </ProseSection>

      {/* 7. Solution */}
      <ProseSection eyebrow="SOLUTION">
        {/*
         * Solution 1 만 직접 조립한다 — 파이프라인 도식이 본문과 이미지 사이에
         * 들어가야 해서 SolutionBlock 의 (본문 → 미디어) 순서로는 표현되지 않는다.
         */}
        <article>
          <h3 className={PROSE_HEADLINE}>{SOLUTION_1.headline}</h3>
          <p className={PROSE_PARAGRAPH}>{SOLUTION_1.paragraph}</p>
          <Pipeline nodes={PIPELINE_NODES} />
          {SOLUTION_1.media.map((item) => (
            <MediaSlot key={item.label} {...item} />
          ))}
        </article>

        {SOLUTIONS.map((solution) => (
          <SolutionBlock key={solution.headline} {...solution} />
        ))}
      </ProseSection>

      {/* 8. Interaction Detail */}
      <ProseSection
        eyebrow="INTERACTION DETAIL"
        headline="AI 워크플로"
        paragraphs={[
          "반복 검증은 사람이 아니라 구조가 하도록 도구를 만들었습니다. 토큰 정합성 검사 스킬은 하드코딩된 색상·간격 값을 잡아내고, 컴포넌트 생성 절차를 자동화해 새 컴포넌트가 규칙 위에서 시작하게 했습니다.",
        ]}
      />

      {/* 9. Collaboration */}
      <ProseSection
        eyebrow="COLLABORATION"
        paragraphs={[
          "혼자 만드는 시스템이어도 혼자 결정하지 않았습니다. 스펙 변경은 PR 리뷰를 거쳤고, 개발 리뷰어와의 논의가 컴포넌트 API의 경계를 다듬었습니다. Figma가 항상 진실이었습니다 — 코드와 Figma가 어긋나면 어느 쪽이 맞는지 먼저 확정하고 다른 쪽을 고쳤습니다.",
        ]}
        /* 원본 1920×1183 — 16:10 에 거의 맞아 wide 프레임에서 거의 잘리지 않는다 */
        media={[
          {
            label: "PR — TabsTrigger suffixIcon prop 추가",
            ratio: "wide",
            src: "/images/work/kds-collab-pr-01.png",
            alt: "GitHub Pull Request 화면. 제목은 \"feat: TabsTrigger suffixIcon prop 추가\" 이고 Merged 상태이며 리뷰어 한 명이 승인 표시를 남겼다. 본문이 요약·배경·변경·설계 결정·하위호환·관련 티켓으로 나뉘어 있고, 설계 결정 항목에는 Figma 의 boolean 이 아니라 ReactNode 슬롯으로 받는 이유, notification dot 앵커를 옮기지 않는 이유, 아이콘 크기를 20px 로 고정하고 sizeConfig 를 건드리지 않는 이유가 각각 한 줄로 적혀 있다.",
            width: 1920,
            height: 1183,
            caption:
              "결정과 근거를 PR 본문에 적어 두면 리뷰가 코드가 아니라 판단을 본다",
          },
          {
            label: "PR — Chip 컴포넌트 Figma 스펙 반영",
            ratio: "wide",
            src: "/images/work/kds-collab-pr-04.png",
            alt: "GitHub Pull Request 화면. 제목은 \"feat: Chip 컴포넌트 Figma 스펙 반영 및 오버레이 구조 개선\" 이고 Merged 상태다. 본문은 리팩터와 스펙 반영 두 커밋으로 나뉘어 있고, 스펙 반영 쪽에 size 별 paddingH·gap·icon 값을 as-is 와 to-be 두 열로 비교한 표가 --space-100(8) → --space-150(12) 처럼 토큰 이름과 픽셀 값을 함께 적어 놓았다. 아래에는 Outline border 색을 상태별로 비교한 표가 이어진다.",
            width: 1920,
            height: 1184,
            caption:
              "Figma 가 바뀌면 무엇이 어떤 토큰으로 바뀌는지 표로 옮겨 놓고 합의했다",
          },
        ]}
      />

      {/* 10. Outcome */}
      <ProseSection
        eyebrow="OUTCOME"
        paragraphs={[
          "CSS 변수 346개 · 컴포넌트 33종(6개 카테고리) · 텍스트 스타일 25종 · 문서 사이트 1개. 전체 화면 마이그레이션은 화면 단위로 진행하며 시스템과 제품이 함께 이관되는 중이었습니다. 숫자보다 중요한 변화는 작업 방식이었습니다 — 새 화면은 컴포넌트 조립으로 시작하고, 스타일 논쟁은 토큰 선택으로 끝나며, 규칙은 문서에서 찾습니다.",
        ]}
      />

      {/* 11. Reflection */}
      <ProseSection
        eyebrow="REFLECTION"
        paragraphs={[
          "시스템은 만드는 것보다 지키게 만드는 것이 어려웠습니다. 규칙을 문서에 적는 것으로는 부족했고, 위반이 빌드와 스크립트에서 드러나는 구조를 만들었을 때에야 규칙이 살아남았습니다.",
          "버그도 시스템의 일부였습니다. 이후 이 토큰 시스템을 개인 프로젝트에 이식하면서 duration 토큰이 ms가 아닌 px 단위로 빌드되는 오류를 발견했는데, 토큰이 단일 소스라는 말은 오류도 단일 소스로 퍼진다는 뜻이었습니다. 파이프라인에는 생성만큼 검증이 필요하다는 것을 배웠습니다.",
        ]}
      />

      {/* 12. 이전/다음 프로젝트 */}
      <ProjectNav slug="kds" />
    </div>
  );
}
