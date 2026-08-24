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
  "가설은 하나였습니다. 고객의 소모품 구매 행동을 촉진하는 핵심 동기는 '즉시성'이며, 이를 플랫폼 내부에서 해결할 수 있을 때 구매 전환율과 운영 효율이 함께 상승할 것이다. 청소 중 소모품이 부족해지는 상황은 예측이 어렵고 즉각적인 대응이 필요한데, 외부 쇼핑몰을 거치는 구조는 그 자체가 행동 진입 장벽이었습니다. 이 가설에 따라 화면 이동을 최소화하고 구매 흐름이 한 번에 이어지는 구조로 정책과 IA를 정의했습니다.",
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
      "구매 과정의 CS 포인트를 예측해 안내·정책·상태 처리 정의",
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
      {
        label: "\uc5f0\ub3d9 \ud310\ub2e8",
        ratio: "wide",
        src: "/images/work/supplies-sol1-01.png",
        alt: "Keeper Admin \uc18c\ubaa8\ud488\uad6c\ub9e4 > \uc0c1\ud488\ubaa9\ub85d \ud654\uba74. \uc88c\uce21 \ub0b4\ube44\uc5d0 \uc0c1\ud488\ubaa9\ub85d\u00b7\uc8fc\ubb38\ud604\ud669\uc774 \uc788\uace0, \ubcf8\ubb38 \uac00\uc6b4\ub370\uc5d0 \ub290\ub08c\ud45c \uc544\uc774\ucf58\uacfc \"\uc18c\ubaa8\ud488 \uad6c\ub9e4\ub97c \uc704\ud574\uc11c\ub294 \uc5d0\uc5b4\uc11c\ud50c\ub77c\uc774 \uc5f0\ub3d9\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\" \ubb38\uad6c, \uadf8 \uc544\ub798 \ud30c\ub791 \ub85c\uadf8\uc778\ud558\uae30 \ubc84\ud2bc\ub9cc \ub193\uc778 \ube48 \uc0c1\ud0dc\ub2e4.",
        width: 1920,
        height: 1186,
      },
      {
        label: "\ucf00\uc774\uc2a4 \ub77c\uc6b0\ud305",
        ratio: "wide",
        src: "/images/work/supplies-sol1-02.png",
        alt: "\ub85c\uadf8\uc778 \ubaa8\ub2ec\uc758 \uc785\ub825 \uc624\ub958 \uc0c1\ud0dc. \uc774\uba54\uc77c \ud544\ub4dc\uc640 \ube44\ubc00\ubc88\ud638 \ud544\ub4dc\uac00 \ubaa8\ub450 \ube68\uac04 \ud14c\ub450\ub9ac\ub85c \ubc14\ub00c\uace0 \uac01 \ud544\ub4dc \uc544\ub798\uc5d0 \"\uc62c\ubc14\ub978 \uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4\", \"\ube44\ubc00\ubc88\ud638\ub294 \ucd5c\uc18c 4\uc790 \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4\" \uba54\uc2dc\uc9c0\uac00 \ubd99\ub294\ub2e4. \ud558\ub2e8\uc5d0 \ud68c\uc6d0\uac00\uc785\u00b7\ube44\ubc00\ubc88\ud638 \ucc3e\uae30 \ub9c1\ud06c\uac00 \uc788\uace0 \ub85c\uadf8\uc778 \ubc84\ud2bc\uc740 \ube44\ud65c\uc131\uc774\ub2e4.",
        width: 1920,
        height: 1186,
      },
      {
        label: "\ub85c\uadf8\uc778 \ud50c\ub85c\uc6b0",
        ratio: "wide",
        src: "/images/work/supplies-sol1-03.png",
        alt: "\ub85c\uadf8\uc778 \ubaa8\ub2ec\uc758 \uc815\uc0c1 \uc785\ub825 \uc0c1\ud0dc. \uc774\uba54\uc77c\uacfc \ube44\ubc00\ubc88\ud638\uac00 \ubaa8\ub450 \ucc44\uc6cc\uc838 \ub450 \ud544\ub4dc\uac00 \ud30c\ub780 \ubc30\uacbd\uc73c\ub85c \ubc14\ub00c\uc5c8\uace0, \uc6b0\uce21 \ud558\ub2e8 \ub85c\uadf8\uc778 \ubc84\ud2bc\uc774 \ud30c\ub791\uc73c\ub85c \ud65c\uc131\ud654\ub410\ub2e4.",
        width: 1920,
        height: 1186,
      },
    ],
  },
  {
    headline: "외부 상품을 Keeper의 탐색 방식으로 다시 담았다",
    paragraphs: [
      "소모품 부족 시 즉시 구매로 이어질 수 있도록, AirSupply 상품을 Keeper UI 패턴에 맞게 재구성했습니다. 필터·정렬은 Keeper Admin의 기존 탐색 기준과 일관되도록 매핑했고, 사용자에게 필요한 정보(상품명·규격·가격·재고)를 한눈에 비교할 수 있는 카드형 UI를 설계했습니다.",
    ],
    mediaLayout: "grid",
    media: [
      {
        label: "\uc0c1\ud488 \ub9ac\uc2a4\ud2b8",
        ratio: "wide",
        src: "/images/work/supplies-sol2-01.png",
        alt: "\uc18c\ubaa8\ud488\uad6c\ub9e4 \uc0c1\ud488 \ubaa9\ub85d \ud654\uba74. \uc0c1\ub2e8\uc5d0 \uc870\uc9c1\ubcc4 \ud0ed \uc904\uacfc \ud3f4\ub354 \uce69, \uc6b0\uce21\uc5d0 \uc7a5\ubc14\uad6c\ub2c8 \ubc30\uc9c0(6)\uc640 \uc0c1\ud488 \ub4f1\ub85d \ubc84\ud2bc\uc774 \uc788\ub2e4. \ud45c\ub294 \uccb4\ud06c\ubc15\uc2a4\u00b7\uc0c1\ud488\uc774\ubbf8\uc9c0\u00b7\uc0c1\ud488\uba85\u00b7\ud310\ub9e4\uac00\u00b7\ud310\ub9e4\uc0c1\ud0dc\u00b7\uce74\ud14c\uace0\ub9ac\u00b7\ud310\ub9e4\ucc44\ub110\u00b7\ubc30\uc1a1\ubc29\ubc95\u00b7\ub4f1\ub85d\uc77c\uc2dc \uc5f4\ub85c \uad6c\uc131\ub418\uace0, \uccad\uc18c\uae30 \ub450 \uac74\uc774 \ud310\ub9e4\uc911 \ubc30\uc9c0\uc640 \ud568\uaed8 \ub193\uc5ec \uc788\ub2e4.",
        width: 1920,
        height: 1186,
      },
      {
        label: "\uce74\ub4dc \uc815\ubcf4 \uad6c\uc870\u00b7CTA",
        ratio: "wide",
        src: "/images/work/supplies-sol2-02.png",
        alt: "\uc7a5\ubc14\uad6c\ub2c8 \ud654\uba74. \uc67c\ucabd\uc5d0\ub294 \uc0c1\ud488\ub9c8\ub2e4 \uc635\uc158 \ud589\uc774 \uc811\ud600 \ub4e4\uc5b4\uac00 \uc635\uc158\ubcc4 \uc218\ub7c9 \uc2a4\ud14c\ud37c\uc640 \uae08\uc561, \uc0c1\ud488\uae08\uc561\uff0b\ubc30\uc1a1\ube44 \ud569\uacc4 \uc904\uc774 \ubd99\uace0, \uac01 \uc0c1\ud488 \uc6b0\uce21\uc5d0 \uc635\uc158\ubcc0\uacbd\u00b7\uc120\ud0dd\uc0ad\uc81c \ubc84\ud2bc\uc774 \uc788\ub2e4. \uc624\ub978\ucabd \uace0\uc815 \uc694\uc57d \uce74\ub4dc\uc5d0 \ucd1d \uc0c1\ud488\uae08\uc561 149,000\uc6d0, \ubc30\uc1a1\ube44 3,000\uc6d0, \uacb0\uc81c\uae08\uc561 152,000\uc6d0\uacfc \uad6c\ub9e4\ud558\uae30(6\uac1c) \ubc84\ud2bc\uc774 \ub193\uc778\ub2e4.",
        width: 1920,
        height: 1186,
      },
      {
        label: "\ube48 \uc0c1\ud0dc\u00b7\uc624\ub958",
        ratio: "wide",
        src: "/images/work/supplies-sol2-03.png",
        alt: "\uc0c1\ud488 \uc0c1\uc138 \ud654\uba74 \uc704\uc5d0 \ub72c \uc548\ub0b4 \ubaa8\ub2ec. \ub4a4\ub85c\ub294 \uc0c1\ud488 \uc0ac\uc9c4\uacfc \uc378\ub124\uc77c \uc904, \uac00\uaca9, \ub4f1\ub85d \ud50c\ub7ab\ud3fc\u00b7\ubc30\uc1a1\uc815\ubcf4\u00b7\ubc30\uc1a1\ube44, \uc635\uc158 \uc120\ud0dd \ub4dc\ub86d\ub2e4\uc6b4\uacfc \ubc14\ub85c\uad6c\ub9e4 \ubc84\ud2bc\uc774 \ubcf4\uc774\uace0, \uc55e\uc5d0 \"\uc635\uc158\uc744 \uc120\ud0dd\ud55c \ud6c4\uc5d0 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694.\" \uc548\ub0b4\uc640 \ud655\uc778 \ubc84\ud2bc\uc774 \uc788\ub294 \ubaa8\ub2ec\uc774 \ub5a0 \uc788\ub2e4.",
        width: 1920,
        height: 1186,
      },
    ],
  },
  {
    headline: "결제를 확인 몇 번의 일로 줄였다",
    paragraphs: [
      "기존 AirSupply 결제 구조를 Keeper 내부에 재정의하여 사용자가 최소한의 확인만으로 결제를 완료할 수 있도록 UX를 단축했습니다. 배송지·수량·결제 수단은 실제 운영에서 가장 자주 쓰이는 항목만 우선 노출하고, 나머지는 단계 후면에서 관리하는 방식으로 흐름을 최적화했습니다.",
    ],
    mediaLayout: "grid",
    media: [
      {
        label: "\ubc30\uc1a1\uc9c0 \uc120\ud0dd",
        ratio: "wide",
        src: "/images/work/supplies-sol3-01.png",
        alt: "\uc8fc\ubb38/\uacb0\uc81c \ud654\uba74 \uc704\uc5d0 \ub72c \ubc30\uc1a1\uc9c0 \uc815\ubcf4 \ubaa8\ub2ec. \ubaa8\ub2ec \uc548\uc5d0 \ubc30\uc1a1\uc9c0\uba85 \uac80\uc0c9\ucc3d\uacfc \ubc30\uc1a1\uc9c0 \ucd94\uac00\ud558\uae30 \ubc84\ud2bc, \ub77c\ub514\uc624 \ubc84\ud2bc\uc73c\ub85c \uace0\ub974\ub294 \ubc30\uc1a1\uc9c0 \ubaa9\ub85d\uc774 \uc788\uace0 \uccab \ud56d\ubaa9\uc774 \uc120\ud0dd\ub3fc \uc788\ub2e4. \uc0c1\uc138 \uc8fc\uc18c\uc640 \uc5f0\ub77d\ucc98\ub294 \ud68c\uc0c9 \ub9c9\ub300\ub85c \uac00\ub824\uc838 \uc788\ub2e4. \ub4a4\ub85c\ub294 \uacb0\uc81c\uc790 \uc815\ubcf4\uc640 \uc8fc\ubb38 \uc0c1\ud488 \ubaa9\ub85d, \uc6b0\uce21 \uacb0\uc81c \uc694\uc57d\uc774 \ubcf4\uc778\ub2e4.",
        width: 1920,
        height: 1186,
      },
      {
        label: "\uc218\ub7c9\u00b7\uc635\uc158 \ubcc0\uacbd\u00b7\uc7ac\uace0 \uac80\uc99d",
        ratio: "wide",
        src: "/images/work/supplies-sol3-02.png",
        alt: "\uc7a5\ubc14\uad6c\ub2c8 \uc704\uc5d0 \ub72c \uc635\uc158\ubcc0\uacbd \ubaa8\ub2ec. \uc635\uc158\u00b7\ucd94\uac00 \uc635\uc158 \ub4dc\ub86d\ub2e4\uc6b4 \uc544\ub798\uc5d0 \uc774\ubbf8 \ub2f4\uae34 \uc635\uc158 \ub450 \uac74\uc774 \uc218\ub7c9 \uc2a4\ud14c\ud37c\uc640 \uae08\uc561\uacfc \ud568\uaed8 \ub098\uc5f4\ub418\uace0, \ub9e8 \uc544\ub798 \ucd1d \uc0c1\ud488\uae08\uc561 45,700\uc6d0\uacfc \ucde8\uc18c\u00b7\ud655\uc778 \ubc84\ud2bc\uc774 \uc788\ub2e4.",
        width: 1920,
        height: 1186,
      },
      {
        label: "\uacb0\uc81c \ud655\uc778\u00b7\uc81c\ucd9c",
        ratio: "wide",
        src: "/images/work/supplies-sol3-03.png",
        alt: "\"\uc8fc\ubb38\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4\" \ud654\uba74. \uacb0\uc81c\uc790 \uc815\ubcf4(\uc774\ub984\u00b7\uc870\uc9c1), \ubc30\uc1a1\uc9c0 \uc815\ubcf4(\uc218\ub839\uc778\u00b7\uc8fc\uc18c\u00b7\uc5f0\ub77d\ucc98\u00b7\ubc30\uc1a1\uc2dc \uc694\uccad\uc0ac\ud56d), \uacb0\uc81c \uc815\ubcf4(\uacb0\uc81c\uc218\ub2e8 \uce74\ub4dc\uacb0\uc81c, \ucd1d \uacb0\uc81c\uae08\uc561 152,000\uc6d0), \uc8fc\ubb38 \uc0c1\ud488 \uc21c\uc73c\ub85c \ud55c \ud654\uba74\uc5d0 \uc313\uc5ec \uc788\ub2e4. \uc8fc\uc18c\u00b7\uc5f0\ub77d\ucc98\u00b7\uc694\uccad\uc0ac\ud56d\uc740 \ud68c\uc0c9 \ub9c9\ub300\ub85c \uac00\ub824\uc838 \uc788\ub2e4.",
        width: 1920,
        height: 1186,
      },
    ],
  },
  {
    headline: "구매 직후에 다음 행동이 보이게 했다",
    paragraphs: [
      "결제 완료 후 필요한 정보(주문번호·상품정보·배송지·예상 도착일)를 즉시 확인할 수 있도록 단일 화면으로 요약했습니다. 이후 단계의 업무 효율성을 위해 주문 상태 확인, 재구매, 목록 복귀 등 후속 액션도 명확하게 배치했습니다.",
    ],
    mediaLayout: "grid",
    media: [
      {
        label: "\uc8fc\ubb38 \ud604\ud669",
        ratio: "wide",
        src: "/images/work/supplies-sol4-01.png",
        alt: "\uc8fc\ubb38 \ud604\ud669(42) \ubaa9\ub85d \ud654\uba74. \uc0c1\ub2e8\uc5d0 \uc2dc\uc791\u00b7\uc885\ub8cc \ub0a0\uc9dc \ud544\ud130\uc640 \uc0c1\ud0dc \ub4dc\ub86d\ub2e4\uc6b4, \uc0c1\ud488\uba85\u00b7\uc8fc\ubb38\ubc88\ud638 \uac80\uc0c9\ucc3d\uc774 \uc788\ub2e4. \ud45c\ub294 \uc0c1\ud488 \uc8fc\ubb38\ubc88\ud638\u00b7\uc8fc\ubb38\uc0c1\ud0dc\u00b7\uc0c1\ud488\uc774\ubbf8\uc9c0\u00b7\uc0c1\ud488\uba85\u00b7\uc635\uc158\uba85\u00b7\ud310\ub9e4\uac00\u00b7\uc218\ub7c9\u00b7\uacb0\uc81c\uae08\uc561\u00b7\ubc30\uc1a1\ube44\u00b7\ubc30\uc1a1\ubc29\ubc95\u00b7\ud0dd\ubc30\uc0ac\u00b7\uc1a1\uc7a5\ubc88\ud638\u00b7\uacb0\uc81c\uc77c\uc2dc \uc5f4\ub85c \uc774\uc5b4\uc9c0\uace0, CancelAccept\u00b7Ready\u00b7\ubc30\uc1a1\uc644\ub8cc\u00b7\uad6c\ub9e4\ud655\uc815 \uc0c1\ud0dc\uc758 \uc8fc\ubb38\uc774 \uc11e\uc5ec \uc788\ub2e4.",
        width: 1920,
        height: 1186,
      },
      {
        label: "\uc8fc\ubb38 \uc0c1\uc138",
        ratio: "wide",
        src: "/images/work/supplies-sol4-02.png",
        alt: "\uc8fc\ubb38 \uc0c1\uc138 \ubaa8\ub2ec. \ub9e8 \uc704\uc5d0 \uacb0\uc81c\uc644\ub8cc \u2192 \ubc30\uc1a1\uc911 \u2192 \ubc30\uc1a1\uc644\ub8cc 3\ub2e8\uacc4 \uc9c4\ud589 \ud45c\uc2dc\uac00 \ubaa8\ub450 \uccb4\ud06c\ub41c \uc0c1\ud0dc\ub85c \ub193\uc774\uace0, \uadf8 \uc544\ub798 \uc8fc\ubb38 \uc815\ubcf4(\uc8fc\ubb38\ubc88\ud638\u00b7\uc8fc\ubb38\uc77c\uc2dc\u00b7\uc8fc\ubb38\uc0c1\ud0dc), \uc0c1\ud488 \ud45c, \ubc30\uc1a1\uc9c0 \uc815\ubcf4, \uacb0\uc81c \uc815\ubcf4(\ud310\ub9e4\uac00\u00b7\ubc30\uc1a1\ube44\u00b7\uacb0\uc81c\uae08\uc561\u00b7\uacb0\uc81c\uc790\u00b7\uacb0\uc81c\uc218\ub2e8\u00b7\uacb0\uc81c\uc77c\uc790)\uac00 \uc774\uc5b4\uc9c4\ub2e4. \uc5f0\ub77d\ucc98\uc640 \ubc30\uc1a1\uc9c0 \uc8fc\uc18c\ub294 \ud68c\uc0c9 \ub9c9\ub300\ub85c \uac00\ub824\uc838 \uc788\ub2e4.",
        width: 1920,
        height: 1186,
      },
      {
        label: "\uc624\ub958 \uc0c1\ud0dc",
        ratio: "wide",
        src: "/images/work/supplies-sol4-03.png",
        alt: "\uc8fc\ubb38 \ud604\ud669\uc758 \uac80\uc0c9 \uacb0\uacfc \uc5c6\uc74c \uc0c1\ud0dc. \ub0a0\uc9dc \ud544\ud130\uc640 \uac80\uc0c9\ucc3d\uc740 \uadf8\ub300\ub85c \ub0a8\uace0 \ud45c \uba38\ub9ac\uae00 \uc544\ub798 \ubcf8\ubb38\uc5d0 \ub290\ub08c\ud45c \uc544\uc774\ucf58\uacfc \"\uc8fc\ubb38\ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.\" \ubb38\uad6c\ub9cc \ub193\uc5ec, \uc870\uac74\uc744 \ubc14\ub85c \uace0\uce60 \uc218 \uc788\ub294 \uacbd\ub85c\uac00 \ud654\uba74\uc5d0 \ub0a8\uc544 \uc788\ub2e4.",
        width: 1920,
        height: 1186,
      },
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
        image={{
          label: "대표 이미지 — 소모품구매 상품 목록",
          ratio: "hero",
          src: "/images/work/supplies-hero.png",
          alt: "Keeper Admin \uc18c\ubaa8\ud488\uad6c\ub9e4 \uc0c1\ud488 \ubaa9\ub85d \ud654\uba74. \uc0c1\ub2e8 \uac80\uc815 \ubc14\uc5d0 KEEPER \ub85c\uace0\uc640 \uc11c\ubc84 \uc2dc\uac01, \uc88c\uce21 \ub0b4\ube44\uc5d0 \uc0c1\ud488\ubaa9\ub85d\u00b7\uc8fc\ubb38\ud604\ud669\uc774 \uc788\uace0, \ubcf8\ubb38\uc5d0 \uc870\uc9c1\ubcc4 \ud0ed \uc904\uacfc \ud3f4\ub354 \uce69, \uc7a5\ubc14\uad6c\ub2c8 \ubc30\uc9c0\uc640 \uc0c1\ud488 \ub4f1\ub85d \ubc84\ud2bc, \uadf8\ub9ac\uace0 \uc0c1\ud488\uc774\ubbf8\uc9c0\u00b7\uc0c1\ud488\uba85\u00b7\ud310\ub9e4\uac00\u00b7\ud310\ub9e4\uc0c1\ud0dc\u00b7\uce74\ud14c\uace0\ub9ac\u00b7\ud310\ub9e4\ucc44\ub110\u00b7\ubc30\uc1a1\ubc29\ubc95\u00b7\ub4f1\ub85d\uc77c\uc2dc \uc5f4\ub85c \ub41c \ud45c\uac00 \ub193\uc5ec \uc788\ub2e4.",
          width: 1920,
          height: 1080,
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
        headline="운영팀은 매번 외부 플랫폼을 거쳐 소모품을 구매해야 했습니다"
        paragraphs={BACKGROUND}
        /* 원본이 16:9 — wide(16:10) 프레임에 넣으면 브라우저 창 좌우가 잘린다 */
        media={[
          {
            label: "as-is/to-be 플로우 비교",
            ratio: "hero",
            src: "/images/work/supplies-asis-flow.png",
            alt: "\ube0c\ub77c\uc6b0\uc800\ub85c \uc5f0 \uc678\ubd80 \uc11c\ube44\uc2a4 AirSupply \uc5b4\ub4dc\ubbfc(office.airsupply.kr/admin)\uc758 \uc870\uc9c1 \uad00\ub9ac \ud654\uba74. \uc88c\uce21\uc5d0 \ub0b4 \ud65c\ub3d9\u00b7\uc0c1\ud488\ub9ac\uc2a4\ud2b8\u00b7\ud68c\uc0ac \uad00\ub9ac\u00b7\uace0\uac1d\uc13c\ud130 \uc544\uc774\ucf58 \ub0b4\ube44\uac00 \uc788\uace0, \uadf8 \uc606 2\ucc28 \ub0b4\ube44\uc5d0 \uc815\ubcf4\uad00\ub9ac\u00b7\uc0c1\ud488\uad00\ub9ac\u00b7\uad6c\ub9e4\uad00\ub9ac\u00b7\ub370\uc774\ud130\uc13c\ud130\uac00 \ud3bc\uccd0\uc838 \uc788\ub2e4. \ubcf8\ubb38\uc5d0\ub294 \uc870\uc9c1 \ucd94\uac00\ud558\uae30 \ubc84\ud2bc\uacfc \uac80\uc0c9\ucc3d, \uc870\uc9c1 \uc774\ub984\u00b7\uad6c\uc131\uc6d0 \uc218\u00b7\uc0dd\uc131\uc77c \uc5f4\ub85c \ub41c \ud45c\uac00 \ub193\uc5ec \uc788\ub2e4.",
            width: 1920,
            height: 1080,
            caption: "\uc18c\ubaa8\ud488\uc744 \uc0ac\ub824\uba74 Keeper \ubc16\uc758 \uc774 \ud654\uba74\uae4c\uc9c0 \ub2e4\ub140\uc640\uc57c \ud588\ub2e4 \u2014 \uad6c\ub9e4\uc640 \uc2b9\uc778\u00b7\uc815\uc0b0\uc774 \uc11c\ub85c \ub2e4\ub978 \uc11c\ube44\uc2a4\uc5d0 \ub098\ub258\uc5b4 \uc788\ub358 \uad6c\uc870",
          },
        ]}
      />

      {/* 5. Problem */}
      <ProseSection
        eyebrow="PROBLEM"
        headline="구매가 밖에서 일어나는 한, 안의 문제는 풀리지 않았다"
        paragraphs={PROBLEM}
      />

      {/* 6. Approach */}
      <ProseSection eyebrow="APPROACH" paragraphs={APPROACH_LEAD}>
        <ApproachList items={APPROACHES} />
      </ProseSection>

      {/* 7. Flow Analysis */}
      <ProseSection
        eyebrow="FLOW ANALYSIS"
        headline="구매 여정을 분해해 의사결정 구조부터 분석했다"
        paragraphs={[
          "설정한 가설을 검증하기 위해 고객의 소모품 구매 여정을 단계별로 분해하고, 의사결정 흐름을 플로우차트로 재정리했습니다. '필요한 순간에 즉시 해결할 수 있는가'를 중심으로 탐색, 선택, 결제 단계의 병목을 파악했고, 결제 권한 유무에 따른 분기까지 포함해 Airsupply 연동 시 어떤 흐름이 가장 효율적인지 분석했습니다. 이 결과를 기반으로 구매 플로우 정책과 예외·빈 상태 대응, 상품 탐색 UI 구조를 정의했으며, 이를 실제 기능으로 연결하기 위한 MVP 와이어프레임을 제작했습니다.",
        ]}
        /* 플로우차트는 좌우 끝까지 노드가 있다 — 16:9 원본 그대로 hero 프레임에 */
        media={[
          {
            label: "의사결정 플로우차트",
            ratio: "hero",
            src: "/images/work/supplies-decision-flow.png",
            alt: "\uc18c\ubaa8\ud488 \uad6c\ub9e4 \uc5ec\uc815\uc744 \uadf8\ub9b0 \uc758\uc0ac\uacb0\uc815 \ud50c\ub85c\uc6b0\ucc28\ud2b8. \ud30c\ub780 \uc0ac\uac01\ud615\uc740 \ud654\uba74 \uc9c4\uc785(\uc0c1\ud488 \ubaa9\ub85d\u00b7\uc0c1\ud488 \uc0c1\uc138), \uc8fc\ud669 \ud3c9\ud589\uc0ac\ubcc0\ud615\uc740 \uc0ac\uc6a9\uc790 \uc561\uc158(\uc0c1\ud488 \uc120\ud0dd\u00b7\uc7a5\ubc14\uad6c\ub2c8 \ubc84\ud2bc \ud074\ub9ad\u00b7\uc0ad\uc81c \ubc84\ud2bc \ud074\ub9ad), \ub9c8\ub984\ubaa8\ub294 \ubd84\uae30, \ud770 \uc0ac\uac01\ud615\uc740 \uc2dc\uc2a4\ud15c \ucd9c\ub825\uc774\ub2e4. \uc67c\ucabd \ub05d \"\uc5f0\ub3d9\ub41c \uacc4\uc815 \uc815\ubcf4\uac00 \ubcc0\uacbd\ub418\uc5c8\ub294\uac00?\"\uc5d0\uc11c \uc2dc\uc791\ud574 \ud68c\uc6d0\uac00\uc785\u00b7\ub85c\uadf8\uc778 \ube44\ud65c\uc131 \uac08\ub798\ub85c \uac08\ub77c\uc9c0\uace0, \uc624\ub978\ucabd\uc73c\ub85c \uc0c1\ud488 \ub370\uc774\ud130 \uc874\uc7ac \uc5ec\ubd80, \uc0c1\ud488 \ub4f1\ub85d \ubaa8\ub2ec\uc758 URL \uac80\uc99d\u00b7\ub4f1\ub85d \uc131\uacf5 \uc5ec\ubd80, \uad6c\ub9e4 \uc5ec\ubd80, \uc635\uc158\u00b7\uc218\ub7c9 \uc120\ud0dd \uc5ec\ubd80, \ubc14\ub85c \uad6c\ub9e4 \uc5ec\ubd80\uae4c\uc9c0 \uc774\uc5b4\uc9c4\ub2e4. \uc544\ub798\ucabd\uc73c\ub85c\ub294 \uc0c1\ud488 \uc0ad\uc81c \ud655\uc778 \ubaa8\ub2ec\uacfc \ub4a4\ub85c\uac00\uae30 \ucc98\ub9ac \uac08\ub798\uac00 \ubed7\uc5b4 \uc788\ub2e4.",
            width: 1920,
            height: 1080,
            caption: "\ud0d0\uc0c9\u00b7\uc120\ud0dd\u00b7\uacb0\uc81c \uac01 \ub2e8\uacc4\uc758 \ubd84\uae30\uc640 \uc608\uc678\ub97c \uba3c\uc800 \ud655\uc815\ud55c \ub4a4\uc5d0 \ud654\uba74\uc744 \uadf8\ub838\ub2e4",
          },
        ]}
      />

      {/* 8. Solution */}
      <ProseSection eyebrow="SOLUTION">
        {SOLUTIONS.map((solution) => (
          <SolutionBlock key={solution.headline} {...solution} />
        ))}
      </ProseSection>

      {/* 9. Interaction Detail */}
      <ProseSection
        eyebrow="INTERACTION DETAIL"
        headline="어떤 경로로 들어와도 막다른 화면이 없게 했다"
        paragraphs={[
          "상품 없음·계정 미연동·배송지 없음 등 다양한 예외 케이스를 UX 레벨에서 선제적으로 처리하는 정책을 정의했습니다. 네트워크·인증·권한·상품 각 영역의 케이스를 리스트업하고 케이스별 정책을 문서로 확정해, 어떤 경로로 진입해도 막다른 화면이 없게 했습니다.",
        ]}
        media={[
          {
            label: "예외 케이스 정책 문서",
            ratio: "hero",
            src: "/images/work/supplies-edge-policy.png",
            alt: "Jira \uc774\uc288 \"\uc608\uc678\ucf00\uc774\uc2a4 \ub9ac\uc2a4\ud2b8\uc5c5, \uc815\ucc45 \uc5c5\ub370\uc774\ud2b8\" \ubb38\uc11c. \uad6c\ubd84\u00b7\ucf00\uc774\uc2a4\u00b7\uc815\ucc45 \uc138 \uc5f4\ub85c \ub41c \ud45c\uc5d0 \ub124\ud2b8\uc6cc\ud06c(\uc11c\ubc84 \uc751\ub2f5 \uc5c6\uc74c\u00b7\ud0c0\uc784\uc544\uc6c3), API \uc624\ub958(\uc5d0\ub7ec\ucf54\ub4dc \ubc18\ud658\u00b7\ub370\uc774\ud130 \uad6c\uc870 \uae68\uc9d0), \uc778\uc99d(\uc138\uc158 \ub9cc\ub8cc), \uad8c\ud55c(\uc811\uadfc \uad8c\ud55c \ubd80\uc871), \uc0c1\ud488(\ub4f1\ub85d\ub41c \uc0c1\ud488 \uc5c6\uc74c) \ud589\uc774 \uc788\uace0, \uac01 \ud589\ub9c8\ub2e4 \ud654\uba74\uc5d0 \ub178\ucd9c\ud560 \ubb38\uad6c\uc640 \ud1a0\uc2a4\ud2b8\u00b7\ubaa8\ub2ec\u00b7\ud398\uc774\uc9c0 \uc911 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ub744\uc6b8\uc9c0\uac00 \uc801\ud600 \uc788\ub2e4.",
            width: 1920,
            height: 1080,
            caption: "\ucf00\uc774\uc2a4\ub9c8\ub2e4 \ub178\ucd9c \ubb38\uad6c\uc640 \ud45c\uc2dc \ubc29\uc2dd\uae4c\uc9c0 \ud655\uc815\ud574, \uad6c\ud604 \ub2e8\uacc4\uc5d0\uc11c \ud310\ub2e8\uc774 \uac08\ub9ac\uc9c0 \uc54a\uac8c \ud588\ub2e4",
          },
        ]}
      />

      {/* 10. Collaboration */}
      <ProseSection
        eyebrow="COLLABORATION"
        headline="화면별 상태·동작·예외를 Jira 기반으로 문서화했습니다"
        paragraphs={[
          "디자인–개발 간 해석 차이를 최소화하기 위해 UI 요소 정의부터 인터랙션 트리거·결과 구조화까지 명세서로 정리하고, Jira 티켓 기준으로 바로 구현 가능한 형태로 전달했습니다. 화면 단위 구현 명세서, 인터랙션·동작 정의, Edge case·Error 처리의 세 축으로 나눠 문서화했습니다. 출시 후 명세 관련 재요청은 0건이었습니다.",
        ]}
        media={[
          {
            label: "명세 문서 3종 — 정책·플로우차트 포함 조합 이미지",
            ratio: "hero",
            src: "/images/work/supplies-spec-docs.png",
            alt: "Jira \uba85\uc138 \ubb38\uc11c \uc138 \ucabd\uc744 \ub098\ub780\ud788 \ud3b8 \ubaa8\uc2b5. \uc67c\ucabd\uc740 \ud398\uc774\uc9c0 \uc5ec\ubc31\u00b7\uc601\uc5ed \uac04\uaca9\u00b7\ud3f0\ud2b8\uc640 \uc0c9\uc0c1\u00b7\ubc18\uc751\ud615 \ub300\uc751 \uc5ec\ubd80\ub97c \uc801\uc740 \ud654\uba74 \uc815\uc758\uc640 \ub85c\uadf8\uc778 \ud50c\ub85c\uc6b0, \uac00\uc6b4\ub370\ub294 \uc0ad\uc81c \ubc84\ud2bc\u00b7\uc0c1\ud488 \uc0ad\uc81c \ud31d\uc5c5\u00b7\uc7a5\ubc14\uad6c\ub2c8 \ubc84\ud2bc\u00b7\uc7a5\ubc14\uad6c\ub2c8 \ubc43\uc9c0\u00b7\uc0c1\ud488 \uc0c1\uc138 \uc774\ub3d9\u00b7\uc0c1\ud488 \ub4f1\ub85d \ubc84\ud2bc\ubcc4\ub85c \uc870\uac74\u00b7\ud2b8\ub9ac\uac70\u00b7\ub3d9\uc791\u00b7\uc608\uc678\ub97c \ub098\ub220 \uc801\uc740 \uc778\ud130\ub799\uc158/\ub3d9\uc791, \uc624\ub978\ucabd\uc740 \ub85c\uadf8\uc778 \ubc84\ud2bc\uc758 \uc815\uc0c1 \uc785\ub825\u00b7\uc785\ub825 \uc5d0\ub7ec \ucf00\uc774\uc2a4\u00b7\uacc4\uc815 \uac80\uc99d \uc2e4\ud328\u00b7\uad8c\ud55c \uc5c6\uc74c\uc744 \ub2e8\uacc4\ubcc4\ub85c \uc815\uc758\ud55c \ubb38\uc11c\ub2e4.",
            width: 1920,
            height: 1080,
            caption: "\ud654\uba74 \uc815\uc758 \u00b7 \uc778\ud130\ub799\uc158/\ub3d9\uc791 \u00b7 \uc608\uc678 \ucc98\ub9ac \uc138 \ucd95\uc73c\ub85c \ub098\ub220 Jira \ud2f0\ucf13\uc5d0 \ubd99\uc600\ub2e4",
          },
        ]}
      />

      {/* 11. Outcome */}
      <ProseSection
        eyebrow="OUTCOME"
        headline="외부 이탈 없는 구매 완결, 운영 효율과 신규 매출 기반을 확보했습니다"
        paragraphs={[
          "외부 플랫폼 이탈 없이 검색부터 결제, 배송 조회까지 Admin 안에서 단일 흐름으로 완결되는 구조를 확보했습니다. 출시 후 명세 관련 재요청은 0건이었고, 권한 기반 승인이 도입되면서 운영 효율도 올라갔습니다. 구매 데이터가 쌓이기 시작하면서 공동구매, 도매 단가 협상, 자동 발주 추천 같은 신규 매출 파이프라인의 기반도 생겼습니다.",
        ]}
      />

      {/* 12. Reflection */}
      <ProseSection
        eyebrow="REFLECTION"
        paragraphs={[
          "외부 서비스를 품는 일은 화면을 새로 그리는 일이 아니라 정책을 번역하는 일에 가까웠습니다. AirSupply의 옵션 구조와 배송지 제약, 결제 규칙은 Keeper의 화면 문법과 맞지 않았고, 그대로 옮기면 사용자가 두 서비스의 규칙을 동시에 배워야 했습니다.",
          "그래서 화면보다 정책을 먼저 정리했습니다. 어떤 규칙을 그대로 흡수하고 어떤 규칙을 Keeper 기준으로 바꿀지 케이스별로 정한 뒤에야 화면을 그렸고, 그 순서 덕분에 설계 단계의 판단이 개발 단계로 밀리지 않았습니다. 출시 후 명세 관련 재요청이 0건으로 남은 것도 여기서 나온 결과라고 생각합니다.",
        ]}
      />

      {/* 13. 이전/다음 프로젝트 */}
      <ProjectNav slug="keeper-supplies" />
    </div>
  );
}
