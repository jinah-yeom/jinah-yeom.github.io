import type { Metadata } from "next";
import ApproachList, {
  type ApproachItem,
} from "@/components/project/ApproachList";
import MetaGrid, { type MetaItem } from "@/components/project/MetaGrid";
import ProjectNav from "@/components/project/ProjectNav";
import ProjectHero from "@/components/project/ProjectHero";
import ProseSection from "@/components/project/ProseSection";
import SolutionBlock, {
  type SolutionBlockProps,
} from "@/components/project/SolutionBlock";

export const metadata: Metadata = {
  title: "Keeper Admin 소모품 구매",
  description:
    "외부 서비스에서 진행되던 소모품 구매를 Admin 내부로 통합해, 탐색부터 결제까지 끊기지 않는 흐름을 설계한 프로젝트.",
};

const META: MetaItem[] = [
  { label: "Timeline", value: "2025.09 – 2025.11" },
  { label: "Product", value: "Keeper Admin (Web · B2B)" },
  { label: "Team", value: "PD 1 · FE 1 · BE 1" },
  {
    label: "Role",
    value: "구매 흐름·의사결정 정책 정의 · IA/UX 설계 · 화면 단위 명세",
  },
  { label: "Tools", value: "Figma, Jira" },
];

const OVERVIEW = [
  "Keeper Admin은 그동안 소모품 구매를 외부 서비스(AirSupply)에서 진행한 뒤 다시 Admin에서 승인·정산해야 하는 복잡한 구조였습니다. 구매 흐름이 단절되고 승인 오류와 재요청이 반복되는 등 운영 비효율이 발생하고 있었습니다. 이 프로젝트는 AirSupply의 상품·옵션·가격 정보를 Admin 내부로 통합하여, 사용자가 외부 이동 없이 Admin 안에서 구매 과정을 완결할 수 있는 구조를 구축하는 데 목표를 두었습니다.",
  "이를 위해 기존 구매 여정을 재정의하고, Admin에 적합한 탐색·옵션 선택 경험을 중심으로 UI/UX를 전면 재설계했습니다.",
];

const BACKGROUND = [
  "청소 업무 중 소모품이 부족해지는 상황은 즉시 대응이 필요한 맥락입니다. 그러나 기존 구조에서는 Keeper 안에서 해결할 수 없었습니다. 외부 플랫폼으로 이동해 구매하고, 다시 Admin으로 돌아와 승인·정산하는 동안 업무 흐름이 끊겼습니다. 현장 소모품 사용량은 실시간으로 파악되지 않았고, 정산 증빙과 월별 집계에 과도한 운영 리소스가 들어갔으며, 구매 데이터가 쌓이지 않아 공동구매·도매 협상 같은 신규 매출의 기반도 만들 수 없었습니다.",
];

const PROBLEM = [
  "운영의 단절, 데이터의 분산, 매출 모델의 부재. 세 가지 구조 문제가 동시에 발생하고 있었습니다. 구매가 외부에서 일어나는 한 어느 것도 개별 기능 추가로는 풀리지 않았습니다. 구매 여정 자체를 Admin 내부로 옮기는 것이 유일한 해법이었습니다.",
];

const APPROACH_LEAD = [
  "가설은 하나였습니다. 고객의 소모품 구매 행동을 촉진하는 핵심 동기는 '즉시성'이며, 이를 플랫폼 내부에서 해결할 수 있을 때 구매 전환율과 운영 효율이 함께 상승할 것이다. 이 가설에 따라 화면 이동을 최소화하고 구매 흐름이 한 번에 이어지는 구조로 정책과 IA를 정의했습니다.",
];

const APPROACHES: ApproachItem[] = [
  {
    label: "구매 흐름",
    title: "즉시성을 살리는 Seamless Flow",
    bullets: [
      "탐색에서 결제까지 화면 이동 최소화",
      "'바로 구매' 경험이 빠르게 실행되는 흐름 구조화",
    ],
  },
  {
    label: "정보 구조",
    title: "AirSupply 정책·데이터를 흡수한 IA 재정의",
    bullets: [
      "외부 서비스의 API 구조·옵션 정책·배송지 제약 분석",
      "Keeper Admin 안에서 자연스럽게 쓰이도록 재설계",
    ],
  },
  {
    label: "운영 정책",
    title: "운영팀 워크플로우까지 고려한 정책 설계",
    bullets: [
      "구매·정산 분산으로 생기던 비효율 제거",
      "단계별로 정보가 명확히 전달되는 구조",
    ],
  },
  {
    label: "전체 공통",
    title: "화면보다 명세 먼저",
    bullets: [
      "정책 문서·의사결정 플로우차트·예외 케이스 정책 선행",
      "Jira 기반 화면 단위 명세로 해석 차이 제거",
    ],
  },
];

/*
 * 미디어는 전부 플레이스홀더 — 라벨은 초안의 [export] 항목 그대로다.
 * Solution 마다 같은 흐름의 화면 3장이라 나란히 놓는다 (mediaLayout: "grid").
 */
const SOLUTIONS: SolutionBlockProps[] = [
  {
    headline: "구매의 시작점을 한 화면 안에서 끝냈다",
    paragraphs: [
      "Keeper에서 소모품을 구매하기 위해 필수적인 AirSupply 계정 인증 과정을 한 화면 내에서 명확하게 안내하는 UX를 설계했습니다. 최소한의 입력과 흐름 단절 없이 연동이 완료되도록 단계 수를 줄였으며, 에러 케이스(계정 없음, 비밀번호 불일치 등)도 일관된 패턴으로 정의해 사용자 혼란을 최소화했습니다.",
    ],
    mediaLayout: "grid",
    media: [
      { label: "연동 판단", ratio: "wide" },
      { label: "케이스 라우팅", ratio: "wide" },
      { label: "로그인 플로우", ratio: "wide" },
    ],
  },
  {
    headline: "외부 상품을 Keeper의 탐색 방식으로 다시 담았다",
    paragraphs: [
      "소모품 부족 시 즉시 구매로 이어질 수 있도록, AirSupply 상품을 Keeper UI 패턴에 맞게 재구성했습니다. 필터·정렬은 Keeper Admin의 기존 탐색 기준과 일관되도록 매핑했고, 사용자에게 필요한 정보(상품명·규격·가격·재고)를 한눈에 비교할 수 있는 카드형 UI를 설계했습니다.",
    ],
    mediaLayout: "grid",
    media: [
      { label: "상품 리스트", ratio: "wide" },
      { label: "카드 정보 구조·CTA", ratio: "wide" },
      { label: "빈 상태·오류", ratio: "wide" },
    ],
  },
  {
    headline: "결제를 확인 몇 번의 일로 줄였다",
    paragraphs: [
      "기존 AirSupply 결제 구조를 Keeper 내부에 재정의하여 사용자가 최소한의 확인만으로 결제를 완료할 수 있도록 UX를 단축했습니다. 배송지·수량·결제 수단은 실제 운영에서 가장 자주 쓰이는 항목만 우선 노출하고, 나머지는 단계 후면에서 관리하는 방식으로 흐름을 최적화했습니다.",
    ],
    mediaLayout: "grid",
    media: [
      { label: "배송지 선택", ratio: "wide" },
      { label: "수량·옵션 변경·재고 검증", ratio: "wide" },
      { label: "결제 확인·제출", ratio: "wide" },
    ],
  },
  {
    headline: "구매 직후에 다음 행동이 보이게 했다",
    paragraphs: [
      "결제 완료 후 필요한 정보(주문번호·상품정보·배송지·예상 도착일)를 즉시 확인할 수 있도록 단일 화면으로 요약했습니다. 이후 단계의 업무 효율성을 위해 주문 상태 확인, 재구매, 목록 복귀 등 후속 액션도 명확하게 배치했습니다.",
    ],
    mediaLayout: "grid",
    media: [
      { label: "주문 현황", ratio: "wide" },
      { label: "주문 상세", ratio: "wide" },
      { label: "오류 상태", ratio: "wide" },
    ],
  },
];

export default function KeeperSuppliesPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 1. Hero */}
      <ProjectHero
        eyebrow="KEEPER ADMIN"
        title="Keeper Admin 소모품 구매"
        lede="외부 서비스에서 진행되던 소모품 구매를 Admin 내부로 통합했습니다. 탐색부터 결제까지 끊기지 않는 흐름을 설계해, 외부 이탈 없이 구매가 완결되는 구조를 만들었습니다."
        image={{ label: "대표 이미지 — 덱 표지의 화면 콜라주", ratio: "hero" }}
      />

      {/* 2. Meta Grid */}
      <MetaGrid items={META} />

      {/* 3. Overview */}
      <ProseSection eyebrow="OVERVIEW" paragraphs={OVERVIEW} />

      {/* 4. Background */}
      <ProseSection
        eyebrow="BACKGROUND"
        paragraphs={BACKGROUND}
        media={[
          {
            label:
              "as-is 플로우 — 소모품 부족 감지 → 플랫폼 외 이탈 → 가격·배송 비교 반복 → 구매 지연",
            ratio: "wide",
          },
        ]}
      />

      {/* 5. Problem */}
      <ProseSection eyebrow="PROBLEM" paragraphs={PROBLEM} />

      {/* 6. Approach */}
      <ProseSection eyebrow="APPROACH" paragraphs={APPROACH_LEAD}>
        <ApproachList items={APPROACHES} />
      </ProseSection>

      {/* 7. Solution */}
      <ProseSection eyebrow="SOLUTION">
        {SOLUTIONS.map((solution) => (
          <SolutionBlock key={solution.headline} {...solution} />
        ))}
      </ProseSection>

      {/* 8. Interaction Detail */}
      <ProseSection
        eyebrow="INTERACTION DETAIL"
        paragraphs={[
          "상품 없음·계정 미연동·배송지 없음 등 다양한 예외 케이스를 UX 레벨에서 선제적으로 처리하는 정책을 정의했습니다. 네트워크·인증·권한·상품 각 영역의 케이스를 리스트업하고 케이스별 정책을 문서로 확정해, 어떤 경로로 진입해도 막다른 화면이 없게 했습니다.",
        ]}
        media={[{ label: "예외 케이스 정책 문서", ratio: "hero" }]}
      />

      {/* 9. Collaboration */}
      <ProseSection
        eyebrow="COLLABORATION"
        paragraphs={[
          "디자인–개발 간 해석 차이를 최소화하기 위해 UI 요소 정의부터 인터랙션 트리거·결과 구조화까지 명세서로 정리하고, Jira 티켓 기준으로 바로 구현 가능한 형태로 전달했습니다. 화면 단위 구현 명세서, 인터랙션·동작 정의, Edge case·Error 처리의 세 축으로 나눠 문서화했습니다. 출시 후 명세 관련 재요청은 0건이었습니다.",
        ]}
        media={[
          {
            label: "명세 문서 3종 — 정책·플로우차트 포함 조합 이미지",
            ratio: "hero",
          },
        ]}
      />

      {/* 10. Outcome */}
      <ProseSection
        eyebrow="OUTCOME"
        paragraphs={[
          "외부 플랫폼 이탈 없이 검색부터 결제, 배송 조회까지 Admin 안에서 단일 흐름으로 완결되는 구조를 확보했습니다. 출시 후 명세 관련 재요청은 0건이었고, 권한 기반 승인이 도입되면서 운영 효율도 올라갔습니다. 구매 데이터가 쌓이기 시작하면서 공동구매, 도매 단가 협상, 자동 발주 추천 같은 신규 매출 파이프라인의 기반도 생겼습니다.",
        ]}
      />

      {/* 11. Reflection */}
      <ProseSection
        eyebrow="REFLECTION"
        paragraphs={[
          "외부 서비스를 품는 일은 화면을 새로 그리는 일이 아니라 정책을 번역하는 일에 가까웠습니다. AirSupply의 옵션 구조와 배송지 제약, 결제 규칙은 Keeper의 화면 문법과 맞지 않았고, 그대로 옮기면 사용자가 두 서비스의 규칙을 동시에 배워야 했습니다.",
          "그래서 화면보다 정책을 먼저 정리했습니다. 어떤 규칙을 그대로 흡수하고 어떤 규칙을 Keeper 기준으로 바꿀지 케이스별로 정한 뒤에야 화면을 그렸고, 그 순서 덕분에 설계 단계의 판단이 개발 단계로 밀리지 않았습니다. 출시 후 명세 관련 재요청이 0건으로 남은 것도 여기서 나온 결과라고 생각합니다.",
        ]}
      />

      {/* 12. 이전/다음 프로젝트 */}
      <ProjectNav slug="keeper-supplies" />
    </div>
  );
}
