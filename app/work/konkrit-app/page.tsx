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
};

/* 결제 flow 2장 — 01 스윔레인 위, 02 화면 플로우차트 아래 */
const PAYMENT_FLOW_MEDIA: MediaItem[] = [
  { label: "티켓 주문 결제 flow 01 — 스윔레인", ratio: "hero" },
  { label: "티켓 주문 결제 flow 02 — 화면 플로우차트", ratio: "hero" },
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
      { label: "온보딩 플로우 스크린 01", ratio: "hero" },
      { label: "온보딩 플로우 스크린 02", ratio: "hero" },
      { label: "온보딩 플로우 스크린 03", ratio: "hero" },
    ],
  },
  {
    headline: "현장에서 끝나는 티켓 사용 경험",
    paragraphs: [
      "보유한 티켓은 사용가능과 사용완료·만료로 나뉘어 목록에서 바로 구분됩니다. 입장 시에는 생체 인증과 위치 권한 확인을 거쳐 현장에서 티켓을 열고, QR 제시로 입장을 마칩니다. 사용 전 주의사항을 확인 단계로 두어 실수로 티켓을 소진하는 일을 막았고, 캡처 화면으로는 입장할 수 없다는 안내로 부정 사용도 차단했습니다. 오프라인 입장 기술과 맞물리는 화면들이라 현장의 불안정한 환경을 전제로 설계했습니다.",
    ],
    media: [
      { label: "티켓 사용 플로우 스크린 01", ratio: "hero" },
      { label: "티켓 사용 플로우 스크린 02", ratio: "hero" },
    ],
  },
  {
    /* 구매·환불·탐색 스크린 2장은 아직 없어 텍스트만 세운다 */
    headline: "구매부터 환불까지 끊기지 않는 거래 화면",
    paragraphs: [
      "구매내역은 결제완료, 취소·환불, 마켓거래를 한 목록에서 관리합니다. 주문 상세에서 결제 정보를 확인하고 환불 신청까지 이어지는 흐름을 하나의 축으로 정리했고, 환불은 상품 단위 선택과 예정 내역 확인을 거쳐 신청되도록 설계해 부분 환불 상황에서도 사용자가 결과를 예측할 수 있게 했습니다. 탐색 쪽은 검색과 디스커버리, 웹뷰 연결로 앱 밖 콘텐츠까지 이어집니다.",
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
        media={[{ label: "프로젝트 타임라인 다이어그램", ratio: "hero" }]}
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
          { label: "AS-IS / TO-BE 거래 구조 다이어그램", ratio: "hero" },
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
        media={[{ label: "다국어 Variables 시스템", ratio: "hero" }]}
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
