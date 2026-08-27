import type { Metadata } from "next";
import MetaGrid, { type MetaItem } from "@/components/project/MetaGrid";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectNav from "@/components/project/ProjectNav";
import ProseSection from "@/components/project/ProseSection";
import SolutionBlock, {
  type SolutionBlockProps,
} from "@/components/project/SolutionBlock";

export const metadata: Metadata = {
  title: "NFT 서비스 운영 효율화를 위한 파트너센터 구축",
  description:
    "KONKRIT 파트너센터는 NFT 서비스 운영사가 상품·혜택·프로젝트 정보를 직접 관리할 수 있도록 새롭게 구축한 B2B 어드민 콘솔입니다.",
};

/*
 * 본문은 konkrit-partnercenter.md 원문이다. 문단 단위로만 옮기고 윤문하지 않는다.
 * 피그마 링크는 원고에서 "미결" 로 표시돼 본문에 넣지 않는다.
 */
const META: MetaItem[] = [
  { label: "Timeline", value: "2024.06 – 2025.01" },
  { label: "Product", value: "Admin (B2B 파트너센터)" },
  {
    label: "Team",
    value:
      "1 Product Owner, 1 Product Designer, 1 Frontend Developer, 1 Backend Developer",
  },
  { label: "Role", value: "사용자 플로우 및 예외 케이스 UX 설계, IA·UX 설계 전담" },
  { label: "Tools", value: "Figma, Notion, Google Sheets" },
];

const OVERVIEW = [
  "KONKRIT 파트너센터는 NFT 서비스 운영사가 상품·혜택·프로젝트 정보를 직접 관리할 수 있도록 새롭게 구축한 B2B 어드민 콘솔입니다. 기존에는 운영팀이 수기로 정보를 관리하며 반복적인 문의와 오류 처리가 빈번했고, 파트너가 판매 현황·정산 정보를 한눈에 파악할 수 있는 구조가 없었습니다.",
  "저는 서비스 전체의 IA 설계부터 화면 정책·예외 케이스 정의·개발 핸드오프까지 전 과정을 담당하며, 파트너가 중단 없이 업무를 완결할 수 있는 경험을 구축했습니다.",
];

const BACKGROUND = [
  "빠르게 프로젝트를 생성하고 운영해야 하는 B2B 서비스였기 때문에, 기능 개발·디자인·운영 각 단계에서 예측 가능한 프로세스와 스킬셋이 필수적이었습니다. 이에 따라 전체 프로젝트의 흐름을 한눈에 파악할 수 있는 프로젝트 타임라인 체계를 마련해, 리서치–정책 정의–프로토타이핑–디자인–핸드오프까지의 단계를 구조화했습니다.",
  "프로젝트는 네 단계로 진행되었습니다. 리서치(2024.06)에서 사용 환경·시장 분석과 사용자 리서치를 수행하고, 디자인 및 프로토타이핑(2024.07)에서 컨셉 구체화·화면 설계·초기 프로토타입 세션을 운영했습니다. 개발 협업과 핸드오프(2024.07–09)를 진행하던 중 내부 사정으로 일시 중단되었으나, 2024.12 재개해 화면 설계와 최종 디자인·리소스 전달까지 완결했습니다.",
];

const UX_STRATEGY = [
  "KONKRIT 파트너센터의 핵심 목표는 사용자들이 판매 현황·프로젝트 상태·정산 정보를 빠르게 확인하고 필요한 액션을 즉시 수행할 수 있도록 하는 것입니다. 이를 위해 먼저 전체 서비스의 콘텐츠를 분류하고, 목적별로 정리된 IA 구조도를 구축했습니다.",
  "이 구조도를 기반으로 화면 간 이동 흐름을 단순화하고, 사용자가 가장 많이 사용하는 메뉴를 중심으로 정보 배치를 재설계했습니다. 이를 통해 페이지 깊이를 줄이고, 파편화되어 있던 정보들을 하나의 논리적 구조로 묶어 사용자가 직관적으로 탐색할 수 있는 기반을 마련했습니다.",
  "모든 화면에는 ID 체계(SG·PRD·BNFT 등)를 부여하고, 각 화면정의를 \"[사용자]는 [상품 목록]에서 [현재 등록된 상품 정보를 확인]할 수 있다\"와 같은 유저스토리 문장으로 시작해 화면의 존재 이유가 스펙 자체에 담기도록 했습니다.",
];

/*
 * 원고가 제목을 두 층으로 준다 — 괄호 안 이름이 대상을, 소제목이 주장을 말한다.
 * 이름을 h3 로 두고 주장을 그 아래 문장으로 잇는다.
 */
const SOLUTIONS: SolutionBlockProps[] = [
  {
    headline: "Account Linking & Login Flow",
    subheadline: "예외까지 고려한 안정적인 인증 경험 설계",
    paragraphs: [
      "회원가입·로그인 플로우에서 발생할 수 있는 다양한 케이스를 명확하게 구분하고, 사용자가 중단 없이 인증을 완료할 수 있도록 전체 UX 흐름을 설계했습니다. 초기 진입–인증–재전송–에러–예외 케이스까지 모든 단계의 상태를 정의해 사용자 혼란을 줄였으며, 개발팀이 즉시 구현할 수 있도록 플로우 기준과 화면 스펙을 세분화해 전달했습니다.",
    ],
    media: [
      {
        label:
          "인증 Flow Frame — 재발송 초과·형식 오류·중복 아이디 등 에러/엣지 프레임",
        ratio: "wide",
      },
    ],
  },
  {
    headline: "Product List",
    subheadline: "명확한 상품 관리 경험을 위한 직관적 정보 구조 설계",
    paragraphs: [
      "상품 목록 화면은 사용자가 현재 등록된 상품 정보를 빠르게 파악하고, 필터·정렬·상세 이동 등 핵심 액션을 즉시 수행할 수 있어야 했습니다. 이를 위해 '전체 목록–스크롤 이동–Empty/Error/Edge case'까지 모든 상태를 정의하여 혼란을 줄였고, 각 케이스에서 사용자가 어떤 결정을 내려야 하는지 명확히 이해할 수 있도록 화면 구조와 메시지를 정교하게 설계했습니다.",
    ],
    media: [
      {
        label: "상품 목록 상태 정의 프레임 — 전체/스크롤/Empty/Edge",
        ratio: "wide",
      },
    ],
  },
  {
    headline: "Benefit Register",
    subheadline: "누락 없이 등록 가능한 혜택 관리 플로우 구축",
    paragraphs: [
      "혜택 등록 과정은 입력 항목이 많고 Edge case가 다양한 만큼, 단계별로 사용자가 혼란 없이 진행할 수 있도록 흐름을 단순화하는 것이 핵심이었습니다. 초기 진입–입력–검증–저장–예외 처리(중복, 권한 부족 등)까지 모든 상태를 정의해 한눈에 이해되는 UX 흐름을 설계했습니다. 특히 입력 오류·저장 실패와 같은 예외 상황에서도 사용자가 즉시 원인을 인지하고 복구할 수 있도록 명확한 오류 메시지와 인터랙션 패턴을 통일해, 개발팀과 동일한 기준으로 문서화하여 전달했습니다.",
    ],
    media: [
      {
        label: "혜택 등록 플로우 프레임 — 기본/Edge/Error",
        ratio: "wide",
      },
    ],
  },
];

/* 원고의 Outcome 은 굵은 소제목 + 문단이 세 번 반복되는 구조라 블록으로 옮긴다 */
const OUTCOMES: SolutionBlockProps[] = [
  {
    headline: "1. 흩어진 판매·프로젝트 정보를 한눈에 파악",
    paragraphs: [
      "복잡하게 분산돼 있던 판매 현황, 프로젝트 상태, 혜택 정보 등을 하나의 패턴과 IA 기준으로 재정리함으로써, 사용자는 여러 화면을 오가며 확인하던 업무를 한눈에 빠르게 판단하고 실행할 수 있는 경험을 얻게 되었습니다. 정보의 우선순위와 깊이를 재조정한 결과, 더 적은 인지 부담으로 핵심 정보를 파악할 수 있게 되었습니다.",
    ],
  },
  {
    headline: "2. 파트너센터 운영팀의 반복 업무 감소와 협업 효율 향상",
    paragraphs: [
      "템플릿 기반의 일관된 화면 구조를 도입하여 운영팀이 수기로 관리하던 정보 입력·확인 프로세스가 단축되었습니다. 운영팀의 반복적 문의 및 오류 처리 업무가 줄었고, 디자인–개발–운영 간 의사소통 기준도 통일되어 전체적인 협업 속도와 품질이 향상되었습니다.",
    ],
  },
  {
    headline: "3. 신규 페이지 확장에 대응 가능한 재사용성 높은 UI 기반 마련",
    paragraphs: [
      "프로젝트 구조 분석을 통해 공통 플로우·예외 케이스·에러 구조를 선제적으로 정의함으로써, 이후 새로운 기능 또는 프로젝트 유형이 추가되더라도 일관된 기준으로 빠르게 확장할 수 있는 체계적인 기반이 구축되었습니다.",
    ],
  },
];

export default function KonkritPartnerCenterPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 1. Hero — lede 는 원고 준비 중이라 비워 둔다 */}
      <ProjectHero
        eyebrow="KONKRIT Partner Center"
        title="NFT 서비스 운영 효율화를 위한 파트너센터 구축"
        image={{
          label: "대표 이미지 — 파트너센터 로그인 화면 목업",
          ratio: "hero",
          priority: true,
        }}
      />

      {/* 2. Meta Grid */}
      <MetaGrid items={META} />

      {/* 3. Overview */}
      <ProseSection eyebrow="OVERVIEW" paragraphs={OVERVIEW} />

      {/* 4. Background */}
      <ProseSection
        eyebrow="BACKGROUND"
        headline="예측 가능한 프로세스가 필요했던 B2B 프로젝트"
        paragraphs={BACKGROUND}
        media={[{ label: "프로젝트 타임라인 다이어그램", ratio: "wide" }]}
      />

      {/* 5. UX Strategy */}
      <ProseSection
        eyebrow="UX STRATEGY"
        headline="명확한 정보 구조(IA)가 구축되어야 비로소 사용자 경험이 정교해진다"
        paragraphs={UX_STRATEGY}
        media={[{ label: "IA 구조도 시트", ratio: "wide" }]}
      />

      {/* 6. Solution */}
      <ProseSection eyebrow="SOLUTION">
        {SOLUTIONS.map((solution) => (
          <SolutionBlock key={solution.headline} {...solution} />
        ))}
      </ProseSection>

      {/* 7. Outcome */}
      <ProseSection eyebrow="OUTCOME">
        {OUTCOMES.map((outcome) => (
          <SolutionBlock key={outcome.headline} {...outcome} />
        ))}
      </ProseSection>

      {/* 8. 이전/다음 프로젝트 — PROJECTS 등록은 3단계 */}
      <ProjectNav slug="konkrit-partnercenter" />
    </div>
  );
}
