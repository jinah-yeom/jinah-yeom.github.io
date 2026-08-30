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
  "운영의 단절, 데이터의 분산, 매출 모델의 부재라는 세 가지 구조 문제가 동시에 발생하고 있었습니다. 구매가 외부에서 일어나는 한 어느 것도 개별 기능 추가로는 풀리지 않았고, 구매 여정 자체를 Admin 내부로 옮기는 것이 유일한 해법이었습니다.",
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
        label: "연동 판단",
        ratio: "wide",
        src: "/images/work/supplies-sol1-01.png",
        alt: "Keeper Admin 소모품구매 > 상품목록 화면. 좌측 내비에 상품목록·주문현황이 있고, 본문 가운데에 느낌표 아이콘과 \"소모품 구매를 위해서는 에어서플라이 연동이 필요합니다.\" 문구, 그 아래 파랑 로그인하기 버튼만 놓인 빈 상태다.",
        width: 1920,
        height: 1186,
      },
      {
        label: "케이스 라우팅",
        ratio: "wide",
        src: "/images/work/supplies-sol1-02.png",
        alt: "로그인 모달의 입력 오류 상태. 이메일 필드와 비밀번호 필드가 모두 빨간 테두리로 바뀌고 각 필드 아래에 \"올바른 이메일 형식이 아닙니다\", \"비밀번호는 최소 4자 이상이어야 합니다\" 메시지가 붙는다. 하단에 회원가입·비밀번호 찾기 링크가 있고 로그인 버튼은 비활성이다.",
        width: 1920,
        height: 1186,
      },
      {
        label: "로그인 플로우",
        ratio: "wide",
        src: "/images/work/supplies-sol1-03.png",
        alt: "로그인 모달의 정상 입력 상태. 이메일과 비밀번호가 모두 채워져 두 필드가 파란 배경으로 바뀌었고, 우측 하단 로그인 버튼이 파랑으로 활성화됐다.",
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
        label: "상품 리스트",
        ratio: "wide",
        src: "/images/work/supplies-sol2-01.png",
        alt: "소모품구매 상품 목록 화면. 상단에 조직별 탭 줄과 폴더 칩, 우측에 장바구니 배지(6)와 상품 등록 버튼이 있다. 표는 체크박스·상품이미지·상품명·판매가·판매상태·카테고리·판매채널·배송방법·등록일시 열로 구성되고, 청소기 두 건이 판매중 배지와 함께 놓여 있다.",
        width: 1920,
        height: 1186,
      },
      {
        label: "카드 정보 구조·CTA",
        ratio: "wide",
        src: "/images/work/supplies-sol2-02.png",
        alt: "장바구니 화면. 왼쪽에는 상품마다 옵션 행이 접혀 들어가 옵션별 수량 스테퍼와 금액, 상품금액＋배송비 합계 줄이 붙고, 각 상품 우측에 옵션변경·선택삭제 버튼이 있다. 오른쪽 고정 요약 카드에 총 상품금액 149,000원, 배송비 3,000원, 결제금액 152,000원과 구매하기(6개) 버튼이 놓인다.",
        width: 1920,
        height: 1186,
      },
      {
        label: "빈 상태·오류",
        ratio: "wide",
        src: "/images/work/supplies-sol2-03.png",
        alt: "상품 상세 화면 위에 뜬 안내 모달. 뒤로는 상품 사진과 썸네일 줄, 가격, 등록 플랫폼·배송정보·배송비, 옵션 선택 드롭다운과 바로구매 버튼이 보이고, 앞에 \"옵션을 선택한 후에 버튼을 클릭해 주세요.\" 안내와 확인 버튼이 있는 모달이 떠 있다.",
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
        label: "배송지 선택",
        ratio: "wide",
        src: "/images/work/supplies-sol3-01.png",
        alt: "주문/결제 화면 위에 뜬 배송지 정보 모달. 모달 안에 배송지명 검색창과 배송지 추가하기 버튼, 라디오 버튼으로 고르는 배송지 목록이 있고 첫 항목이 선택돼 있다. 상세 주소와 연락처는 회색 막대로 가려져 있다. 뒤로는 결제자 정보와 주문 상품 목록, 우측 결제 요약이 보인다.",
        width: 1920,
        height: 1186,
      },
      {
        label: "수량·옵션 변경·재고 검증",
        ratio: "wide",
        src: "/images/work/supplies-sol3-02.png",
        alt: "장바구니 위에 뜬 옵션변경 모달. 옵션·추가 옵션 드롭다운 아래에 이미 담긴 옵션 두 건이 수량 스테퍼와 금액과 함께 나열되고, 맨 아래 총 상품금액 45,700원과 취소·확인 버튼이 있다.",
        width: 1920,
        height: 1186,
      },
      {
        label: "결제 확인·제출",
        ratio: "wide",
        src: "/images/work/supplies-sol3-03.png",
        alt: "\"주문이 완료되었습니다\" 화면. 결제자 정보(이름·조직), 배송지 정보(수령인·주소·연락처·배송시 요청사항), 결제 정보(결제수단 카드결제, 총 결제금액 152,000원), 주문 상품 순으로 한 화면에 쌓여 있다. 주소·연락처·요청사항은 회색 막대로 가려져 있다.",
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
        label: "주문 현황",
        ratio: "wide",
        src: "/images/work/supplies-sol4-01.png",
        alt: "주문 현황(42) 목록 화면. 상단에 시작·종료 날짜 필터와 상태 드롭다운, 상품명·주문번호 검색창이 있다. 표는 상품 주문번호·주문상태·상품이미지·상품명·옵션명·판매가·수량·결제금액·배송비·배송방법·택배사·송장번호·결제일시 열로 이어지고, CancelAccept·Ready·배송완료·구매확정 상태의 주문이 섞여 있다.",
        width: 1920,
        height: 1186,
      },
      {
        label: "주문 상세",
        ratio: "wide",
        src: "/images/work/supplies-sol4-02.png",
        alt: "주문 상세 모달. 맨 위에 결제완료 → 배송중 → 배송완료 3단계 진행 표시가 모두 체크된 상태로 놓이고, 그 아래 주문 정보(주문번호·주문일시·주문상태), 상품 표, 배송지 정보, 결제 정보(판매가·배송비·결제금액·결제자·결제수단·결제일자)가 이어진다. 연락처와 배송지 주소는 회색 막대로 가려져 있다.",
        width: 1920,
        height: 1186,
      },
      {
        label: "오류 상태",
        ratio: "wide",
        src: "/images/work/supplies-sol4-03.png",
        alt: "주문 현황의 검색 결과 없음 상태. 날짜 필터와 검색창은 그대로 남고 표 머리글 아래 본문에 느낌표 아이콘과 \"주문내역이 없습니다.\" 문구만 놓여, 조건을 바로 고칠 수 있는 경로가 화면에 남아 있다.",
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
        eyebrow="PRODUCT UX"
        title="Keeper Admin 소모품 구매"
        lede="외부 서비스에서 진행되던 소모품 구매를 Admin 내부로 통합했습니다. 탐색부터 결제까지 끊기지 않는 흐름을 설계해, 외부 이탈 없이 구매가 완결되는 구조를 만들었습니다."
        image={{
          label: "대표 이미지 — 소모품구매 주문 현황",
          ratio: "hero",
          src: "/images/work/supplies-hero.webp",
          alt: "파란 소파 위에 놓인 노트북 화면에 열린 Keeper Admin 소모품구매 주문 현황. 상단 검정 바에 KEEPER 로고와 UTC·Asia/Seoul 서버 시각이 있고, 좌측 내비의 소모품구매 아래 상품목록·주문현황 중 주문현황이 켜져 있다. 본문은 '주문 현황 (42)' 제목과 2025-10-23 부터 2025-11-22 까지의 기간 필터, 상품명 또는 상품 주문번호 검색창, 그리고 상품 주문번호·주문상태·상품 이미지·상품명·옵션명·판매가·수량·결제금액·배송비·배송방법·택배사·송장번호·결제일시 열로 된 표다. 주문상태 열에는 CancelAccept·Ready·배송완료·구매확정이 섞여 있고 표 아래에 1·2·3 페이지네이션이 있다.",
          width: 3200,
          height: 1800,
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
            label: "외부 서비스 AirSupply 어드민",
            ratio: "hero",
            src: "/images/work/supplies-asis-flow.png",
            alt: "브라우저로 연 외부 서비스 AirSupply 어드민(office.airsupply.kr/admin)의 조직 관리 화면. 좌측에 내 활동·상품리스트·회사 관리·고객센터 아이콘 내비가 있고, 그 옆 2차 내비에 정보관리·상품관리·구매관리·데이터센터가 펼쳐져 있다. 본문에는 조직 추가하기 버튼과 검색창, 조직 이름·구성원 수·생성일 열로 된 표가 놓여 있다.",
            width: 1920,
            height: 1080,
            caption:
              "구매가 일어나던 Keeper 바깥의 화면. 소모품이 부족할 때마다 이곳까지 다녀와야 했다",
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
        /* 두 장 세로로 — 전체 뷰로 구조를 보이고, 확대본으로 분기를 읽힌다 */
        media={[
          {
            label: "의사결정 플로우차트 — 전체",
            /* 2.097:1 — 프리셋 어디에도 없는 비율이라 이미지 비율을 그대로 쓴다 */
            ratio: "auto",
            src: "/images/work/supplies-decision-flow.png",
            alt: "소모품 구매 여정 전체를 그린 의사결정 플로우차트. 회색 라벨이 붙은 두 영역으로 나뉜다. 위는 상품 탐색 / 구매, 아래는 결재 승인 / 반려다. 두 영역 모두 오른쪽 절반이 결제 권한 O(파란 배경)와 결제 권한 X(붉은 배경) 두 갈래로 다시 갈라진다. 보라 원은 진입점, 파란 사각형은 화면 진입, 주황 평행사변형은 사용자 액션, 마름모는 분기, 흰 사각형은 시스템 출력이다. 위 영역은 상품 목록 화면 진입에서 시작해 접근 권한·계정 연동·상품 데이터 존재 여부를 거쳐 상품 상세로 이어지고, 아래 영역은 구매요청 관리 화면 진입에서 시작해 접근 권한이 있는가, 데이터가 존재하는가, 구매요청 리스트 출력, 구매내역 행 선택, 구매내역 상세 모달 출력을 지나 결제권한 있는가 분기에서 두 갈래로 나뉜다.",
            width: 3200,
            height: 1526,
            caption:
              "구매 여정 전체의 의사결정 흐름. 결제 권한 유무에 따라 분기가 달라진다",
          },
          {
            label: "의사결정 플로우차트 — 확대",
            ratio: "hero",
            src: "/images/work/supplies-decision-flow-detail.png",
            alt: "상품 탐색 / 구매 영역의 앞부분을 확대한 화면. 왼쪽 끝 \"연동된 계정 정보가 변경되었는가?\"에서 시작해 NO면 상품 목록 화면 진입, YES면 에어서플라이 회원가입 채널 새 탭 이동과 로그인 버튼 비활성화로 갈라진다. 이어 상품 데이터가 존재하는가 분기에서 NO면 \"등록된 상품이 없습니다\" 표시와 상품 등록 버튼 클릭, 상품 등록 모달 출력, 유효한 상품 url 입력 여부, 등록 버튼 클릭 여부, 등록 성공 여부를 거쳐 토스트 메시지로 끝난다. 오른쪽은 상품을 구매하려 하는가 분기에서 상품 선택과 장바구니 버튼 클릭, 상품 상세 화면 진입, 옵션 및 수량 모두 선택되었는가, 바로 구매할 것인가로 이어지고, 아래로는 상품 선택 후 삭제 버튼 클릭과 삭제 안내 모달, 삭제 여부 확인 갈래가 뻗어 있다.",
            width: 1920,
            height: 1080,
            caption:
              "상품 탐색·구매 축의 앞부분 확대 — 계정 연동 확인에서 상품 등록·선택·삭제 분기까지",
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
            alt: "Jira 이슈 \"예외케이스 리스트업, 정책 업데이트\" 문서. 구분·케이스·정책 세 열로 된 표에 네트워크(서버 응답 없음·타임아웃), API 오류(에러코드 반환·데이터 구조 깨짐), 인증(세션 만료), 권한(접근 권한 부족), 상품(등록된 상품 없음) 행이 있고, 각 행마다 화면에 노출할 문구와 토스트·모달·페이지 중 어떤 방식으로 띄울지가 적혀 있다.",
            width: 1920,
            height: 1080,
            caption: "케이스마다 노출 문구와 표시 방식까지 확정해, 구현 단계에서 판단이 갈리지 않게 했다",
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
            alt: "Jira 명세 문서 세 쪽을 나란히 편 모습. 왼쪽은 페이지 여백·영역 간격·폰트와 색상·반응형 대응 여부를 적은 화면 정의와 로그인 플로우, 가운데는 삭제 버튼·상품 삭제 팝업·장바구니 버튼·장바구니 뱃지·상품 상세 이동·상품 등록 버튼별로 조건·트리거·동작·예외를 나눠 적은 인터랙션/동작, 오른쪽은 로그인 버튼의 정상 입력·입력 에러 케이스·계정 검증 실패·권한 없음을 단계별로 정의한 문서다.",
            width: 1920,
            height: 1080,
            caption: "화면 정의 · 인터랙션/동작 · 예외 처리 세 축으로 나눠 Jira 티켓에 붙였다",
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
