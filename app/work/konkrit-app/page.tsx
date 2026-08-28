import type { Metadata } from "next";
import ApproachList, {
  type ApproachItem,
} from "@/components/project/ApproachList";
import MediaSlot, { type MediaItem } from "@/components/project/MediaSlot";
import MetaGrid, { type MetaItem } from "@/components/project/MetaGrid";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectNav from "@/components/project/ProjectNav";
import ProseSection, {
  PROSE_PARAGRAPH,
} from "@/components/project/ProseSection";
import SolutionBlock, {
  type SolutionBlockProps,
} from "@/components/project/SolutionBlock";

export const metadata: Metadata = {
  title: "KONKRIT 3.0 UX 개편",
  description:
    "KONKRIT은 니어프로토콜 기반 지갑으로 아이템을 관리하는 NFT 블록체인 플랫폼입니다. NFT 티켓을 결제하는 경험이 모바일 앱에서 일반 티켓을 구매하는 것과 다르지 않아야 한다는 요구에서 시작한 개편입니다.",
};

/*
 * 본문은 konkrit-app.md 원문이다. 문단 단위로만 옮기고 윤문하지 않는다.
 * 피그마 링크는 원고에서 본문 미포함으로 확정돼 넣지 않는다.
 */
const META: MetaItem[] = [
  { label: "Timeline", value: "2024.11 – 2025.02" },
  { label: "Product", value: "App (iOS · Android)" },
  { label: "Team", value: "PD 1 · DEV 2" },
  { label: "Role", value: "UX 전략, UX 설계 및 디자인 전담 (PM & PD 겸임)" },
  { label: "Tools", value: "Figma, Notion, Jira" },
];

const OVERVIEW = [
  "KONKRIT은 니어프로토콜 기반 지갑으로 아이템을 관리하는 NFT 블록체인 플랫폼입니다. 3.0 개편의 요구는 분명했습니다. NFT 티켓을 결제하는 경험이 모바일 앱에서 일반 티켓을 구매하는 것과 다르지 않아야 한다는 것. 암표를 막으면서 N차 거래는 허용하는 NFT 티켓 솔루션 위에서, 저는 UX 전략 수립부터 요구사항 문서화, 화면 설계와 디자인, 개발 핸드오프까지 전 과정을 맡았습니다.",
];

const BACKGROUND = [
  "WEB 3.0은 특수한 사용자 환경입니다. 지갑, 토큰, 온체인 같은 개념이 구매 앞을 가로막고, 빠르게 목적을 달성하려는 사용자일수록 이 장벽에서 이탈합니다. 그래서 이 프로젝트의 방향은 기능 추가가 아니라 앱 경험의 리브랜딩이었습니다. 블록체인이 뒤에서 돌아가되, 앞에서는 일반 티켓 앱과 똑같이 굴러가야 했습니다.",
  "프로젝트는 세 단계로 진행했습니다. 리서치(2024.10)에서 경쟁사와 시장, 사용자 요구사항을 분석하고 기능 요구사항 문서화를 시작했습니다. 디자인 및 프로토타이핑(2024.10 – 2024.11)에서 컨셉을 구체화하고 와이어프레임과 프로토타입을 거쳐 iOS·Android 최종 디자인과 UI 스타일 가이드까지 완성했습니다. 이후 개발 핸드오프와 피드백(2024.11 ~)을 이어가며 디자인을 전달하고 개발 과정의 수정을 반복했습니다.",
];

const PROBLEM = [
  "사용자 조사에서 확인한 문제는 셋이었습니다.",
  "첫째, 구매에 대한 부담감. WEB 3.0 플랫폼을 이해하고 구매하기까지 시간과 노력이 필요할 것이라는 부담이 시작 전부터 사용자를 눌렀습니다. 둘째, 좌석 선택 기능의 부재. 공연 티켓인데 원하는 좌석과 회차를 고를 수 없었습니다. 셋째, 오프라인 환경에서의 오류. 공연장처럼 데이터가 불안정하거나 트래픽이 몰리는 현장에서 오류 발생 빈도가 올라갔습니다.",
  "셋 다 NFT라는 기술의 문제가 아니라 티켓 앱으로서의 기본기 문제였습니다. 개편의 초점을 여기에 맞췄습니다.",
];

/*
 * 문제와 목표를 한 박스에 묶는다 — 3박스 + 3박스로 나누면 2열 그리드에서
 * 짝이 세로로 끊겨 어느 목표가 어느 문제의 답인지 읽히지 않는다.
 * label 은 비운다. 원고에 그 자리에 쓸 문구가 없다.
 */
const PROBLEM_GOALS: ApproachItem[] = [
  {
    title: "구매에 대한 부담감",
    bullets: ["사용자 앱 경험 리브랜딩"],
  },
  {
    title: "좌석 선택 기능의 부재",
    bullets: ["쉬운 인터페이스"],
  },
  {
    title: "오프라인 환경에서의 오류",
    bullets: ["현장에서의 사용 편의성 개선"],
  },
];

const APPROACH_INTRO = [
  "UX 전략 기획부터 시작했습니다. 프로덕트 로드맵을 정의하고 기능 요구사항을 문서화한 뒤에 화면을 그렸습니다. 요구사항 정의서에는 화면 ID(ORD, PAY, USER 등)와 페이지명, 권한, 요구사항 설명, 우선순위, 구현 여부를 담아 설계와 개발이 같은 표를 보게 했습니다.",
];

/* 요구사항 정의서 뒤에 이어지는 문단 — 원고가 문서와 본문을 번갈아 놓는다 */
const APPROACH_BODY = [
  "세 가지 문제에는 각각 답이 되는 디자인 목표를 세웠습니다. 구매 부담감에는 사용자 앱 경험 리브랜딩, 좌석 선택 부재에는 실시간 좌석·회차 현황을 제공하는 쉬운 인터페이스, 오프라인 오류에는 자체 개발한 오프라인 입장 기술로 현장 사용 편의성 개선. 문제와 목표가 1대1로 대응하니 이후의 모든 화면 결정에 근거가 생겼습니다.",
  "핵심 플로우인 티켓 주문 결제는 두 층위로 문서화했습니다. User, Client, Server, Database 네 축의 스윔레인으로 각 단계에서 어떤 요청이 오가고 어떤 데이터가 생성되는지까지 담았고, 화면 단위의 흐름은 별도 플로우차트로 정리해 분기와 예외를 한눈에 읽을 수 있게 했습니다. 설계와 개발이 같은 문서를 보고 움직인 기반입니다.",
];

const REQUIREMENTS_MEDIA: MediaItem = {
  label: "요구사항 정의서 (Notion 표)",
  ratio: "hero",
  src: "/images/work/konkrit-app-requirements.png",
  alt: "Notion 으로 만든 요구사항 정의서 표. 요구사항 ID, 페이지명, 권한, 요구사항명, 요구사항 설명, Property, 구현 여부 열로 짜여 있고 ORD-001~004 주문 페이지, DETAIL-001 제품상세 페이지, PAY-001~006 결제 페이지, USER-001 유저 페이지 순으로 행이 이어진다. 권한은 모두 회원이고 Property 에 상·하 우선순위가 붙어 있으며 구현 여부는 체크박스로 비어 있다.",
  width: 3200,
  height: 1800,
};

/* 결제 flow 2장 — 01 스윔레인 위, 02 화면 플로우차트 아래 */
const PAYMENT_FLOW_MEDIA: MediaItem[] = [
  {
    label: "티켓 주문 결제 flow 01 — 스윔레인",
    ratio: "hero",
    src: "/images/work/konkrit-app-flow-payment-01.png",
    alt: "티켓 주문 결제 스윔레인의 앞 구간을 확대한 화면. User, Client, Server, Database 네 축이 Phase 1~4 로 세로 띠를 이루고, 앱 실행에서 자동 로그인 요청과 기기 로그인 데이터 확인 요청을 거쳐 User DB 로 이어지는 흐름이 가로 화살표로 그려져 있다. 홈 화면, 상품 선택, 상품 상세 정보 확인을 지나 '구매 가능한 상태인가?' 분기가 나오고, Database 축 옆 노란 메모에 아이디·비밀번호·지갑주소 같은 User DB 항목과 상품코드·판매유형·좌석 등급별 수량 같은 Product DB 항목이 적혀 있다. 아래쪽 노드는 프레임 밖으로 이어진다.",
    width: 3200,
    height: 1800,
  },
  {
    label: "티켓 주문 결제 flow 02 — 화면 플로우차트",
    ratio: "hero",
    src: "/images/work/konkrit-app-flow-payment-02.png",
    alt: "화면 단위 플로우차트의 결제 구간을 확대한 화면. 홈 화면에서 상품 선택, 상품 상세 정보 확인을 지나 '구매 가능한 상태인가?' 분기가 놓이고, N 이면 홈 화면으로 되돌아가는 주황색 경로가, Y 면 구매하기로 이어지는 경로가 그려져 있다. 오른쪽으로 상품 상세 조건 선택 화면(관람일자), 주문 화면, 권종 및 수량 선택, 결제 수단 선택, 취소 수수료 및 제3자 정보 제공 관련 약관 동의가 차례로 이어지고 양옆 노드는 프레임 밖으로 계속된다.",
    width: 3200,
    height: 1800,
  },
];

const UX_STRATEGY = [
  "KONKRIT의 티켓은 발행만으로 끝나지 않습니다. NFT 티켓 발행으로 암표 거래 방지에 기여해야 하고, 동시에 2차 마켓에서의 N차 거래 경험도 최초 구매와 일관되어야 했습니다. 기존 거래 구조를 AS-IS와 TO-BE로 분석해 불필요한 단계를 걷어냈고, 2차 마켓의 판매 가격을 제한된 배수(0.8배 ~ 3배) 안에 두어 건전한 리셀 문화의 기반을 만들었습니다. 좌석 맵에서 리셀 상품을 발견하면 복잡한 설정 없이 바로 구매를 시작할 수 있는 Quick Start도 이 전략에서 나왔습니다.",
];

/*
 * 스크린은 파일 한 장이 이미 폰 서너 대가 늘어선 시퀀스라 전폭으로 쌓는다.
 * 격자에 넣으면 폰 하나가 100px 아래로 내려가 화면을 읽을 수 없다.
 */
const SOLUTIONS: SolutionBlockProps[] = [
  {
    headline: "지갑을 의식하지 않는 온보딩",
    paragraphs: [
      "가입은 휴대폰 인증으로 시작합니다. 번호 입력, 인증번호 확인, 약관 동의까지는 여느 앱과 같고, 그 뒤에 생체 인증 설정과 지갑 닉네임 지정이 이어집니다. 니어프로토콜 지갑이 이 과정에서 만들어지지만 사용자에게는 닉네임 하나를 정하는 일로 보입니다. 블록체인 온보딩의 무게를 일반 회원가입의 리듬 안에 숨긴 설계입니다.",
    ],
    media: [
      {
        label: "온보딩 플로우 스크린 01",
        ratio: "hero",
        src: "/images/work/konkrit-app-screen-onboarding-01.png",
        alt: "온보딩 앞 구간 네 화면. 왼쪽부터 KONKRIT 로고와 시작하기 버튼만 놓인 스플래시, '휴대폰 인증을 해주세요' 아래 국가번호 +82 와 번호 입력란이 비어 있고 다음 버튼이 비활성인 화면, 번호를 입력해 숫자 키패드가 올라오고 다음 버튼이 노랗게 켜진 화면, 인증 번호 입력란에 123456 과 02:50 타이머·재요청 버튼이 붙고 확인 버튼이 켜진 화면이다.",
        width: 3200,
        height: 1800,
      },
      {
        label: "온보딩 플로우 스크린 02",
        ratio: "hero",
        src: "/images/work/konkrit-app-screen-onboarding-02.png",
        alt: "약관 동의와 생체 인증 구간 네 화면. 서비스 이용약관 화면에서 전체 동의와 필수·선택 항목이 모두 체크돼 동의하고 가입하기 버튼이 켜져 있고, 이어서 알림 권한을 묻는 시스템 팝업이 뜬다. 다음으로 '보안을 위해 생체 인증을 설정해 주세요' 화면에 사람 아이콘과 설정하기 버튼이 놓이고, 마지막에 Face ID 시스템 시트가 올라온다.",
        width: 3200,
        height: 1800,
      },
      {
        label: "온보딩 플로우 스크린 03",
        ratio: "hero",
        src: "/images/work/konkrit-app-screen-onboarding-03.png",
        alt: "지갑 닉네임 지정과 진입 세 화면. Face ID 인증이 완료된 화면, '지갑 닉네임을 설정해 주세요' 화면에서 konkrit.near 를 입력하고 7/15 글자 수와 입력 규칙 안내, 저장 버튼과 '먼저 둘러보고 설정할게요' 링크가 함께 놓인 화면, 마지막으로 '대체 불가능한 경험, 시작할 준비 되셨나요?' 아래 시작하기 버튼이 놓인 화면이다.",
        width: 3200,
        height: 1800,
      },
    ],
  },
  {
    headline: "현장에서 끝나는 티켓 사용 경험",
    paragraphs: [
      "보유한 티켓은 사용가능과 사용완료·만료로 나뉘어 목록에서 바로 구분됩니다. 입장 시에는 생체 인증과 위치 권한 확인을 거쳐 현장에서 티켓을 열고, QR 제시로 입장을 마칩니다. 사용 전 주의사항을 확인 단계로 두어 실수로 티켓을 소진하는 일을 막았고, 캡처 화면으로는 입장할 수 없다는 안내로 부정 사용도 차단했습니다. 오프라인 입장 기술과 맞물리는 화면들이라 현장의 불안정한 환경을 전제로 설계했습니다.",
    ],
    media: [
      {
        label: "티켓 사용 플로우 스크린 01",
        ratio: "hero",
        src: "/images/work/konkrit-app-screen-ticket-01.png",
        alt: "티켓 목록에서 입장 준비까지 네 화면. 보유 티켓 목록이 사용가능 5 와 사용완료/만료 5 탭으로 나뉘고 NFT 카드가 겹쳐 쌓여 있으며, 아래에 현대카드 Curated 92 공연의 스탠딩 A구역 입장번호 65 티켓이 놓인다. 이어서 Face ID 시트가 올라오고, 위치 권한이 필요하다는 '권한 설정 안내' 팝업과 액세스 권한이 없어 앱 설정으로 이동할지 묻는 시스템 팝업이 차례로 뜬다.",
        width: 3200,
        height: 1800,
      },
      {
        label: "티켓 사용 플로우 스크린 02",
        ratio: "hero",
        src: "/images/work/konkrit-app-screen-ticket-02.png",
        alt: "현장 입장 네 화면. 위치 사용을 허용할지 묻는 시스템 팝업, 공연 포스터와 장소·관람일·인원이 적힌 티켓 상세와 입장하기 버튼, QR 스캔 화면, 그리고 '사용 전 주의사항' 팝업에서 확인을 누르면 사용 취소가 불가하다고 알리는 화면이 이어진다. 티켓 상세 하단에는 해당 화면을 직원에게 보여주되 캡쳐화면 제시 시 사용이 불가하다는 안내가 붙어 있다.",
        width: 3200,
        height: 1800,
      },
    ],
  },
  {
    headline: "구매부터 환불까지 끊기지 않는 거래 화면",
    paragraphs: [
      "구매내역은 결제완료, 취소·환불, 마켓거래를 한 목록에서 관리합니다. 주문 상세에서 결제 정보를 확인하고 환불 신청까지 이어지는 흐름을 하나의 축으로 정리했고, 환불은 상품 단위 선택과 예정 내역 확인을 거쳐 신청되도록 설계해 부분 환불 상황에서도 사용자가 결과를 예측할 수 있게 했습니다. 탐색 쪽은 검색과 디스커버리, 웹뷰 연결로 앱 밖 콘텐츠까지 이어집니다.",
    ],
    media: [
      {
        label: "구매·환불 스크린 01",
        ratio: "hero",
        src: "/images/work/konkrit-app-screen-order-01.png",
        alt: "구매내역에서 환불까지 네 화면. 전체·결제완료·취소/환불 탭이 놓인 구매내역 목록에 결제완료와 마켓거래, 결제 취소완료 항목이 쌓여 있고, 주문 상세에서 주문번호와 주문 상품정보·결제 정보를 확인한 뒤 환불 신청하기 버튼으로 이어진다. 환불 신청 화면은 취소 상품을 전체 선택 (1/2) 로 고르게 하고 환불 상품 금액·할인금액·취소 수수료·환불 수단과 총 환불 예정 금액을 보여주며, 마지막 화면에서 해당 상품이 결제 취소완료로 바뀐다.",
        width: 3200,
        height: 1800,
      },
      {
        label: "탐색 스크린 02",
        ratio: "hero",
        src: "/images/work/konkrit-app-screen-order-02.png",
        alt: "주문 상세와 탐색 네 화면. 결제 취소완료가 반영된 주문 상세에 이어, 검색어 또는 URL 입력창과 최근 검색 키워드 칩이 놓인 디스커버리 화면, 'kon' 을 입력해 konkrit.io 가 제안되고 키보드가 올라온 검색 화면, 그리고 konkrit.io 웹뷰에서 최근 등록 순으로 Coldplay asian tour 같은 Ticket·Membership 카드가 격자로 놓인 화면이 이어진다.",
        width: 3200,
        height: 1800,
      },
    ],
  },
];

const COLLABORATION = [
  "해외 유저 대응에서 협업 방식을 함께 풀었습니다. 언어별 문구를 도메인 구분 없는 하나의 Key-Value 테이블로 관리하고, key 필드와 Language 열거형으로 각 번역의 고유성을 보장했습니다. 모든 언어는 export와 import가 가능해 구글 스프레드시트 기반 자동화로 이어지고, 새 언어를 추가할 때 기존 데이터 구조에 영향을 주지 않고 확장됩니다.",
  "이 테이블을 Figma Variables 866개로 등록해 디자인 파일과 직접 연결했습니다. 화면의 텍스트가 테이블과 같은 소스를 참조하니 문구 수정이 한 곳에서 끝나고, 언어 모드 전환으로 같은 화면을 언어별로 바로 검수할 수 있습니다. 개발자에게는 DEV 모드로 문구의 key와 값을 파일 안에서 직접 조회하게 해, 텍스트 하나를 넘기기 위해 오가던 왕복을 없앴습니다. 문서를 따로 만들어 전달하는 대신 디자인 파일 자체가 전달 채널이 되게 한 설계입니다.",
];

const OUTCOME_INTRO = [
  "이 프로젝트는 출시되지 못했습니다. 회사의 예산 문제로 런웨이가 끝나면서 개발이 중단되었고, 3.0 개편은 핸드오프와 반복 수정 단계에서 멈췄습니다. 결과 지표가 없는 이유입니다. 그래도 설계는 끝까지 갔고, 남은 것들은 분명합니다.",
];

/* 원고의 Outcome 은 굵은 소제목 + 문단이 세 번 반복되는 구조라 블록으로 옮긴다 */
const OUTCOMES: SolutionBlockProps[] = [
  {
    headline: "끝까지 완성한 설계",
    paragraphs: [
      "가입과 지갑 생성부터 결제, 현장 입장, 환불까지 전체 여정을 iOS·Android 최종 디자인과 UI 스타일 가이드로 완성해 개발에 전달했습니다. 블록체인을 드러내지 않는 티켓 앱이라는 방향은 화면 단위까지 구현 가능한 상태로 정리되어 있습니다.",
    ],
  },
  {
    headline: "해외 확장까지 준비된 다국어 기반",
    paragraphs: [
      "Key-Value 테이블과 스프레드시트 자동화, Figma Variables 866개로 이어지는 다국어 체계를 갖춰, 언어를 추가할 때 기존 데이터와 화면을 건드리지 않는 확장 구조를 만들었습니다.",
    ],
  },
  {
    headline: "문서로 남은 결정들",
    paragraphs: [
      "요구사항 정의서와 스타일 가이드, 개발용 DEV 모드까지 설계 결정이 전부 문서와 파일에 남아 있습니다. 프로젝트는 멈췄지만 왜 그렇게 설계했는지는 지워지지 않았고, 이 기록이 제가 일하는 방식이기도 합니다.",
    ],
  },
];

export default function KonkritAppPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 1. Hero — lede 는 다음 단계에서 원고로 채운다 */}
      <ProjectHero
        eyebrow="PRODUCT UX"
        title="KONKRIT 3.0 UX 개편"
        image={{
          label: "대표 이미지 — 앱 홈 화면 목업",
          ratio: "hero",
          src: "/images/work/konkrit-app-hero.png",
          alt: "KONKRIT 앱 홈 화면이 켜진 아이폰을 아래쪽에서 비스듬히 당겨 찍은 목업. 어두운 화면 위로 공연 배너 카드와 페이지 인디케이터가 보이고, 하단 탭바에 Home·Discovery·Item·Account 네 항목이 놓여 있으며 Home 만 노란색으로 켜져 있다.",
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
        headline="WEB 3.0 앞에서 멈추는 사용자, 리브랜딩이 필요했던 앱 경험"
        paragraphs={BACKGROUND}
        media={[
  {
    label: "프로젝트 타임라인 다이어그램",
    ratio: "hero",
    src: "/images/work/konkrit-app-timeline.png",
    alt: "프로젝트 타임라인 다이어그램. 리서치, 디자인 및 프로토타이핑, 디자인 개발 협업 및 핸드오프 세 구간이 가로로 이어지고 각 구간에 Phase 1(2024.10), Phase 2(2024.10~2024.11), Phase 3(2024.11~) 막대가 색을 달리해 놓인다. 구간마다 리서치·디자인 요구사항, 컨셉 구체화·와이어프레임 및 프로토타입 제작·UX/UI 디자인, 개발 핸드오프 & 피드백 같은 세부 작업이 설명과 함께 적혀 있고, 아래 띠에 리서치 리드와 기획·디자인 리드가 모두 PD 로 표시돼 있다.",
    width: 3200,
    height: 1800,
  },
        ]}
      />

      {/* 5. Problem — 문제·목표 쌍을 박스로 조판, 이미지 없음 */}
      <ProseSection
        eyebrow="PROBLEM"
        headline="구매를 막는 세 가지 벽"
        paragraphs={PROBLEM}
      >
        <ApproachList items={PROBLEM_GOALS} />
      </ProseSection>

      {/* 6. Approach — 문단과 문서가 번갈아 놓여 children 으로 잇는다 */}
      <ProseSection
        eyebrow="APPROACH"
        headline="로드맵과 요구사항 문서가 먼저, 화면은 그 위에"
        paragraphs={APPROACH_INTRO}
      >
        <MediaSlot {...REQUIREMENTS_MEDIA} />

        {APPROACH_BODY.map((paragraph) => (
          <p key={paragraph} className={PROSE_PARAGRAPH}>
            {paragraph}
          </p>
        ))}

        {PAYMENT_FLOW_MEDIA.map((item) => (
          <MediaSlot key={item.label} {...item} />
        ))}
      </ProseSection>

      {/* 7. UX Strategy */}
      <ProseSection
        eyebrow="UX STRATEGY"
        headline="암표는 막고 N차 거래는 일관되게"
        paragraphs={UX_STRATEGY}
        media={[
  {
    label: "AS-IS / TO-BE 거래 구조 다이어그램",
    ratio: "hero",
    src: "/images/work/konkrit-app-asis-tobe.png",
    alt: "거래 구조를 AS-IS 와 TO-BE 로 견준 시퀀스 다이어그램 두 장. 왼쪽 AS-IS 는 Owner, Market, Sign(off-chain), Market contract(on-chain), NFT contract(on-chain), Buyer 여섯 축 사이로 전송 권한 부여, 판매자 서명, 판매등록, 구매자 서명, 주문 및 서명 정보 검증, NFT 전송요청, 오너정보 변경, 거래 완료까지 열두 단계가 촘촘히 오간다. 오른쪽 TO-BE 는 Buyer-1~4 와 Market, Owner 축만 남아 A 컬렉션 구매 입찰 1.0ETH·0.9ETH 와 구매 침찰 1.1ETH, 소유하고 있는 A컬렉션 NFT 판매, 최고 가격 입찰 및 입찰 빠른 순으로 판매까지 다섯 단계로 줄어 있다.",
    width: 3200,
    height: 1800,
  },
        ]}
      />

      {/* 8. Solution — eyebrow 하나 아래 소제목 블록 셋 */}
      <ProseSection eyebrow="SOLUTION">
        {SOLUTIONS.map((solution) => (
          <SolutionBlock key={solution.headline} {...solution} />
        ))}
      </ProseSection>

      {/* 9. Collaboration */}
      <ProseSection
        eyebrow="COLLABORATION"
        headline="디자인 파일을 문구 전달 채널로 만든 다국어 설계"
        paragraphs={COLLABORATION}
        media={[
  {
    label: "다국어 Variables 시스템",
    ratio: "hero",
    src: "/images/work/konkrit-app-i18n.png",
    alt: "다국어 Variables 시스템을 정리한 문서 위에 피그마 변수 패널이 겹쳐진 화면. 뒤쪽 문서에는 Variable 등록, text Variable 적용, 언어 모드 변경, DEV 모드 네 단계가 캡처와 함께 설명돼 있고 Auto(Korean)·Korean·English 를 고르는 드롭다운과 Content 에서 key 와 값을 조회하는 화면이 보인다. 앞쪽 Text_rb 패널에는 All variables 866 개가 Name·Korean·English 세 열로 나열돼 title_how-to-use 는 '이용 방법'과 'How to use KONKRIT', btn_more 는 '더 보기'와 'More' 처럼 짝을 이룬다.",
    width: 3200,
    height: 1800,
  },
        ]}
      />

      {/* 10. Outcome — 이미지 없이 텍스트로만 */}
      <ProseSection
        eyebrow="OUTCOME"
        headline="출시에 이르지 못한 프로젝트가 남긴 것"
        paragraphs={OUTCOME_INTRO}
      >
        {OUTCOMES.map((outcome) => (
          <SolutionBlock key={outcome.headline} {...outcome} />
        ))}
      </ProseSection>

      {/* 11. Reflection — 다음 단계에서 원고로 채운다 */}

      {/* 12. 이전/다음 프로젝트 — PROJECTS 등록은 마지막 단계 */}
      <ProjectNav slug="konkrit-app" />
    </div>
  );
}
