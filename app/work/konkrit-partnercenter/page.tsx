import type { Metadata } from "next";
import ApproachList, {
  type ApproachItem,
} from "@/components/project/ApproachList";
import MediaGrid from "@/components/project/MediaGrid";
import type { MediaItem } from "@/components/project/MediaSlot";
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
  title: "NFT 서비스 운영 효율화를 위한 파트너센터 구축",
  description:
    "KONKRIT 파트너센터는 NFT 서비스 운영사가 상품·혜택·프로젝트 정보를 직접 관리할 수 있도록 새롭게 구축한 B2B 어드민 콘솔입니다.",
};

/*
 * 본문은 konkrit-partnercenter.md 원문이다. 문단 단위로만 옮기고 윤문하지 않는다.
 * 피그마 링크는 원고에서 본문 미포함으로 확정돼 넣지 않는다.
 */
const META: MetaItem[] = [
  { label: "Timeline", value: "2024.06 – 2025.01" },
  { label: "Product", value: "Admin (B2B 파트너센터)" },
  { label: "Team", value: "PO 1 · PD 1 · FE 1 · BE 1" },
  {
    label: "Role",
    value: "사용자 플로우 및 예외 케이스 UX 설계, IA·UX 설계 전담",
  },
  { label: "Tools", value: "Figma, Notion, Google Sheets" },
];

const OVERVIEW = [
  "KONKRIT 파트너센터는 NFT 서비스 운영사가 상품·혜택·프로젝트 정보를 직접 관리할 수 있도록 새롭게 구축한 B2B 어드민 콘솔입니다. 저는 서비스 전체의 IA 설계부터 화면 정책·예외 케이스 정의·개발 핸드오프까지 전 과정을 담당하며, 파트너가 중단 없이 업무를 완결할 수 있는 경험을 구축했습니다.",
];

const BACKGROUND = [
  "빠르게 프로젝트를 생성하고 운영해야 하는 B2B 서비스였기 때문에, 기능 개발·디자인·운영 각 단계에서 예측 가능한 프로세스와 스킬셋이 필수적이었습니다. 이에 따라 전체 프로젝트의 흐름을 한눈에 파악할 수 있는 프로젝트 타임라인 체계를 마련해, 리서치–정책 정의–프로토타이핑–디자인–핸드오프까지의 단계를 구조화했습니다.",
  "프로젝트는 네 단계로 진행되었습니다. 리서치(2024.06)에서 사용 환경·시장 분석과 사용자 리서치를 수행하고, 디자인 및 프로토타이핑(2024.07)에서 컨셉 구체화·화면 설계·초기 프로토타입 세션을 운영했습니다. 개발 협업과 핸드오프(2024.07–09)를 진행하던 중 내부 사정으로 일시 중단되었으나, 2024.12 재개해 화면 설계와 최종 디자인·리소스 전달까지 완결했습니다.",
];

const PROBLEM = [
  "기존에는 파트너의 상품·혜택·프로젝트 정보를 운영팀이 수기로 관리했습니다. 파트너의 요청이 있을 때마다 운영팀이 대신 입력하고 확인하는 구조라 반복적인 문의와 오류 처리가 빈번했고, 정보가 여러 화면과 채널에 파편화되어 있어 파트너가 판매 현황·프로젝트 상태·정산 정보를 스스로 한눈에 파악할 수 있는 방법이 없었습니다.",
  "운영팀에게는 반복 업무가, 파트너에게는 가시성 부재가 쌓이는 구조였고, 이를 해소하려면 개별 화면 개선이 아니라 파트너가 직접 관리할 수 있는 셀프서비스 콘솔을 처음부터 설계해야 했습니다.",
];

const APPROACH = [
  "화면을 그리기 전에 정보 구조부터 세웠습니다. 전체 서비스의 콘텐츠를 분류해 IA 구조도를 먼저 구축하고, 모든 화면 설계가 이 구조도를 기준으로 파생되도록 했습니다.",
  "모든 화면에는 ID 체계(SG·PRD 등)를 부여하고, 각 화면정의를 \"[사용자]는 [상품 목록]에서 [현재 등록된 상품 정보를 확인]할 수 있다\"와 같은 유저스토리 문장으로 시작해 화면의 존재 이유가 스펙 자체에 담기도록 했습니다. 정상 플로우만이 아니라 Empty·Error·Edge case까지 상태 정의를 스펙에 포함해, 해석의 여지가 없는 문서로 개발과 협업하는 것을 원칙으로 삼았습니다.",
];

const UX_STRATEGY = [
  "KONKRIT 파트너센터의 핵심 목표는 사용자들이 판매 현황·프로젝트 상태·정산 정보를 빠르게 확인하고 필요한 액션을 즉시 수행할 수 있도록 하는 것입니다. 이를 위해 먼저 전체 서비스의 콘텐츠를 분류하고, 목적별로 정리된 IA 구조도를 구축했습니다.",
  "이 구조도를 기반으로 화면 간 이동 흐름을 단순화하고, 사용자가 가장 많이 사용하는 메뉴를 중심으로 정보 배치를 재설계했습니다. 이를 통해 페이지 깊이를 줄이고, 파편화되어 있던 정보들을 하나의 논리적 구조로 묶어 사용자가 직관적으로 탐색할 수 있는 기반을 마련했습니다.",
];

/* 인증 8장 — 파일명 번호가 곧 배치 순서(좌상→우상→좌하→우하) */
const AUTH_FLOW: MediaItem[] = [
  {
    label: "회원가입·로그인 플로우 프레임 01",
    ratio: "hero",
    src: "/images/work/konkrit-flow-auth-01.png",
    alt: "회원가입 첫 화면. '계정으로 사용할 이메일 인증이 필요합니다' 안내 아래 아이디(이메일) 입력란이 비어 있고, 이메일 인증 버튼은 비활성 상태다. 아래에 '이미 계정이 있으신가요? 로그인' 링크가 있다.",
    width: 1600,
    height: 900,
  },
  {
    label: "회원가입·로그인 플로우 프레임 02",
    ratio: "hero",
    src: "/images/work/konkrit-flow-auth-02.png",
    alt: "이메일을 입력하고 인증을 요청한 상태. '인증 메일 발송 완료' 팝업이 떠 발송된 인증 메일을 확인해 달라는 안내와 확인 버튼을 보여준다.",
    width: 1600,
    height: 900,
  },
  {
    label: "회원가입·로그인 플로우 프레임 03",
    ratio: "hero",
    src: "/images/work/konkrit-flow-auth-03.png",
    alt: "인증 링크가 만료된 예외 화면. '잘못된 요청입니다.' 제목 아래 '유효시간이 초과되어 가입 인증 링크가 만료되었습니다. 새로운 메일로 가입해 주세요.' 안내가 두 줄로 놓이고, 그 아래 노란 '회원가입 하러가기' 버튼이 있다.",
    width: 1600,
    height: 900,
  },
  {
    label: "회원가입·로그인 플로우 프레임 04",
    ratio: "hero",
    src: "/images/work/konkrit-flow-auth-04.png",
    alt: "인증 메일을 받은 지메일 화면. '[KONKRIT] 회원가입 인증을 완료해주세요' 제목의 메일이 열려 있고, 본문에 KONKRIT 로고와 '이메일 인증을 완료해주세요.' 제목, 계정 생성을 위해 아래 버튼을 눌러 달라는 안내, 노란 인증하기 버튼이 있다.",
    width: 1600,
    height: 900,
  },
  {
    label: "회원가입·로그인 플로우 프레임 05",
    ratio: "hero",
    src: "/images/work/konkrit-flow-auth-05.png",
    alt: "이메일 인증을 마치고 기본정보를 입력하는 화면. 아이디는 입력값이 채워진 채 비활성이고 비밀번호·비밀번호 확인란은 비어 있다. '영문 대소문자, 숫자, 특수문자 조합 8~16자' 규칙이 적혀 있고, 전체 약관 동의와 파트너 약관 동의(필수)·개인정보 수집 및 약관 동의(필수) 체크박스가 모두 해제돼 가입하기 버튼이 비활성이다.",
    width: 1600,
    height: 900,
  },
  {
    label: "회원가입·로그인 플로우 프레임 06",
    ratio: "hero",
    src: "/images/work/konkrit-flow-auth-06.png",
    alt: "같은 기본정보 화면에서 비밀번호와 비밀번호 확인을 모두 채우고 약관 세 항목에 체크한 상태. 가입하기 버튼이 노란색으로 활성화됐다.",
    width: 1600,
    height: 900,
  },
  {
    label: "회원가입·로그인 플로우 프레임 07",
    ratio: "hero",
    src: "/images/work/konkrit-flow-auth-07.png",
    alt: "파트너센터 로그인 화면. 아이디와 비밀번호 입력란이 비어 있고 아이디 저장 체크박스는 해제돼 있으며, 로그인 버튼 아래로 회원가입 버튼과 아이디 찾기·비밀번호 찾기 링크가 놓인다.",
    width: 1600,
    height: 900,
  },
  {
    label: "회원가입·로그인 플로우 프레임 08",
    ratio: "hero",
    src: "/images/work/konkrit-flow-auth-08.png",
    alt: "로그인 화면에 아이디와 비밀번호를 입력하고 아이디 저장에 체크한 상태.",
    width: 1600,
    height: 900,
  },
];

/* 상품 등록 — 유형별로 4장씩 나뉘어 라벨이 붙는다 */
const REGISTER_VOUCHER: MediaItem[] = [
  {
    label: "상품 등록 플로우 프레임 바우처형 01",
    ratio: "hero",
    src: "/images/work/konkrit-flow-register-voucher-01.png",
    alt: "상품 추가 패널의 기본 정보 탭. 전시 정보에서 진열안함·판매대기가 선택돼 있고, 기본 정보에 상품코드·상품명·서브 상품명·상품 검색어 입력란과 1:1·3:4 목록 이미지 업로드 자리가 있다. 판매 정보의 판매유형에서 바우처형이 선택되고 판매기간·사용기간·판매수량 입력란이 이어진다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 등록 플로우 프레임 바우처형 02",
    ratio: "hero",
    src: "/images/work/konkrit-flow-register-voucher-02.png",
    alt: "바우처형 상품의 옵션 정보 입력. 옵션 구성방식은 단독형, 옵션 개수는 2개이고 옵션 1에 'Portal Pass', 옵션 2에 'Secret, Cool'을 넣어 옵션 목록 적용하기를 누른 결과가 아래 표에 Portal Pass Secret·Portal Pass Cool 두 행으로 만들어져 각각 판매가·판매기간·사용기간을 입력하게 돼 있다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 등록 플로우 프레임 바우처형 03",
    ratio: "hero",
    src: "/images/work/konkrit-flow-register-voucher-03.png",
    alt: "상품 등록 중 장소를 지정하는 '위치 정보' 모달. 검색창이 놓인 지도 아래로 장소명, 반경 설정(1km), 상세 주소 입력란이 모두 필수 표시와 함께 이어지고 하단에 취소·등록 버튼이 있다. 뒤로는 공지사항과 고객문의, 구매/사용 조건, 취소/환불 규정이 놓인 상품 추가 패널이 비친다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 등록 플로우 프레임 바우처형 04",
    ratio: "hero",
    src: "/images/work/konkrit-flow-register-voucher-04.png",
    alt: "바우처형 상품의 구매/사용 조건과 취소/환불 규정, 결제방식 입력. 최대 구매수량 설정·이용 가능 연령·바로 사용 설정이 모두 사용안함이고, 취소 설정은 취소가능(승인 취소)에 취소 가능 기한은 이용일 기준이다. 취소 수수료와 취소/환불 규정 입력란이 있고, 결제수단으로 현대카드·카드결제·계좌이체가 체크돼 있으며 할인설정은 사용함이다.",
    width: 1600,
    height: 900,
  },
];

const REGISTER_DATESEAT: MediaItem[] = [
  {
    label: "상품 등록 플로우 프레임 날짜·좌석 선택형 01",
    ratio: "hero",
    src: "/images/work/konkrit-flow-register-dateseat-01.png",
    alt: "날짜+좌석선택형을 고른 상품 추가 화면. 판매유형에서 날짜+좌석선택형이 선택되고 판매기간·사용기간·판매수량·판매가·최대 구매 수량·사용횟수 입력란과 적용하기 버튼이 있다. 아래로 좌석배치도 업로드 자리와 좌석 등급·좌석 key 입력란을 가진 좌석 정보 영역이 이어지고, 옵션 구성방식은 조합형으로 고정돼 있다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 등록 플로우 프레임 날짜·좌석 선택형 02",
    ratio: "hero",
    src: "/images/work/konkrit-flow-register-dateseat-02.png",
    alt: "좌석 정보와 옵션 정보를 채운 상태. 좌석배치도 이미지가 올라가 있고 좌석 등급에 'VIP석', 'R석', 좌석 key 에 식별자가 들어가 있다. 옵션 입력의 회차정보에 20:00, 21:00, 좌석등급에 VIP석, R석 을 넣어 옵션 목록 적용하기를 누른 결과가 20:00 VIP석·20:00 R석·21:00 VIP석·21:00 R석 네 행으로 조합돼 있다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 등록 플로우 프레임 날짜·좌석 선택형 03",
    ratio: "hero",
    src: "/images/work/konkrit-flow-register-dateseat-03.png",
    alt: "상품 정보 제공 고시와 구매/사용 조건, 취소/환불 규정 입력. 품목정보가 공연으로 선택돼 있고 주최 또는 기획·관람등급·관람시간·장소·공지사항·고객문의 항목이 이어진다. 구매/사용 조건 세 항목은 사용안함, 취소 설정은 취소불가다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 등록 플로우 프레임 날짜·좌석 선택형 04",
    ratio: "hero",
    src: "/images/work/konkrit-flow-register-dateseat-04.png",
    alt: "입력을 마쳐 등록 버튼이 활성화된 상태. 진열상태는 진열함, 판매상태는 판매대기이고 상품코드 coldplay, 상품명 '콜드플레이 내한공연', 상품 검색어 'coldplay'·'콜드플레이'가 들어가 있으며 1:1·3:4 목록 이미지가 모두 업로드돼 있다. 판매유형은 날짜+좌석선택형이다.",
    width: 1600,
    height: 900,
  },
];

/* 상품 목록 4장 */
const LIST_FLOW: MediaItem[] = [
  {
    label: "상품 목록 플로우 프레임 01",
    ratio: "hero",
    src: "/images/work/konkrit-flow-list-01.png",
    alt: "상품 목록 화면 전체. 좌측 내비에 상품·주문·정산·혜택이 있고, 상단에 전체·판매대기·판매중·품절·판매종료 건수 요약과 검색분류·진열상태·판매상태·날짜 필터, 검색·초기화 버튼이 있다. 아래 상품 목록 표에는 복사·삭제·티켓 발행·진열설정·판매설정 버튼과 상품명·상품코드·판매기간·사용기간·판매상태·진열상태 열로 된 행 네 개, 그리고 페이지네이션이 놓인다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 목록 플로우 프레임 02",
    ratio: "hero",
    src: "/images/work/konkrit-flow-list-02.png",
    alt: "목록에서 한 행을 체크하고 진열설정을 누른 상태. 진열설정으로 진열분류를 변경할 수 있다는 안내와 함께 진열상태(진열함·진열안함), 진열기간 입력란, 취소·적용 버튼을 가진 팝업이 떠 있다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 목록 플로우 프레임 03",
    ratio: "hero",
    src: "/images/work/konkrit-flow-list-03.png",
    alt: "목록에서 한 행을 체크하고 판매설정을 누른 상태. 판매상태를 판매중·판매대기·품절·판매종료 중에서 고르는 팝업이 떠 있고 취소·적용 버튼이 있다.",
    width: 1600,
    height: 900,
  },
  {
    label: "상품 목록 플로우 프레임 04",
    ratio: "hero",
    src: "/images/work/konkrit-flow-list-04.png",
    alt: "표를 가로로 스크롤해 등록일(수정일) 열까지 보이는 상태. 행 오른쪽 끝의 더보기 버튼을 눌러 상품 수정·티켓 발행·좌석 판매 관리 메뉴가 펼쳐져 있다.",
    width: 1600,
    height: 900,
  },
];

/*
 * 상품 유형 정의 — 원고의 인용 두 줄을 제목과 불릿으로 나눠 담는다.
 * label(eyebrow)은 비운다. 제목이 곧 유형 이름이라 같은 말을 위에 한 번 더
 * 얹을 자리가 아니고, 원고에도 그 자리에 쓸 문구가 없다.
 */
const PRODUCT_TYPES: ApproachItem[] = [
  {
    title: "바우처형",
    bullets: [
      "사용 기간 내 원하는 시점에 현장에 방문해 사용하는 NFT 상품",
      "예: PC방 4시간 이용권",
    ],
  },
  {
    title: "날짜·좌석 선택형",
    bullets: [
      "사용 기간 내 정해진 날짜의 회차를 선택해 사용하는 NFT 상품",
      "예: 콘서트 티켓",
    ],
  },
];

/* 인용 뒤에 이어지는 상품 등록 블록의 나머지 문단 */
const REGISTER_BODY = [
  "두 유형을 하나의 플로우로 등록하지 않고 분리한 것은 NFT의 기술 특성 때문입니다. NFT는 발행 시점에 상품 속성이 토큰에 고정되므로, 등록 단계에서 유형별로 필요한 속성이 정확히 정의되어야 합니다. 바우처형은 사용 기간과 수량만 확정하면 되지만, 날짜·좌석 선택형은 날짜·회차 단위의 재고 구조까지 등록 시점에 결정됩니다. 하나의 플로우로 합치면 유형과 무관한 입력 항목과 검증 케이스가 뒤섞이므로, 유형 선택을 첫 단계에 두고 이후 입력 흐름을 유형별로 분기했습니다.",
  "이 구조 위에서 초기 진입–유형 선택–입력–검증–등록 완료까지 모든 단계의 상태를 정의해 사용자가 혼란 없이 진행할 수 있도록 흐름을 설계했으며, 입력 오류와 같은 예외 상황에서도 즉시 원인을 인지하고 복구할 수 있도록 화면 스펙을 세분화해 개발팀에 전달했습니다.",
];

const AUTH_SOLUTION: SolutionBlockProps = {
  headline: "예외까지 고려한 안정적인 인증 경험 설계",
  paragraphs: [
    "회원가입·로그인 플로우에서 발생할 수 있는 다양한 케이스를 명확하게 구분하고, 사용자가 중단 없이 인증을 완료할 수 있도록 전체 UX 흐름을 설계했습니다. 초기 진입–인증–재전송–에러–예외 케이스까지 모든 단계의 상태를 정의해 사용자 혼란을 줄였으며, 개발팀이 즉시 구현할 수 있도록 플로우 기준과 화면 스펙을 세분화해 전달했습니다.",
  ],
  media: AUTH_FLOW,
  mediaLayout: "grid-2",
};

const LIST_SOLUTION: SolutionBlockProps = {
  headline: "명확한 상품 관리 경험을 위한 직관적 정보 구조 설계",
  paragraphs: [
    "상품 목록 화면은 사용자가 현재 등록된 상품 정보를 빠르게 파악하고, 필터·정렬·상세 이동 등 핵심 액션을 즉시 수행할 수 있어야 했습니다. '전체 목록–스크롤 이동' 등 목록이 가질 수 있는 상태를 정의하여 혼란을 줄였고, 각 케이스에서 사용자가 어떤 결정을 내려야 하는지 명확히 이해할 수 있도록 화면 구조와 메시지를 정교하게 설계했습니다.",
  ],
  media: LIST_FLOW,
  mediaLayout: "grid-2",
};

const COLLABORATION = [
  "협업은 화면 ID가 붙은 피그마 프레임 위에서 이루어졌습니다. 개발·디자인 간의 질문과 확인은 해당 화면의 코멘트로 남겼습니다. 버튼 비활성화 조건, 목록에서의 수정 가능 범위, 입력 제한 정책 같은 질문에 정책 기준과 구체적인 값(타이포 스타일 명 등)으로 답하고, 결정된 내용은 화면정의에 반영해 논의가 문서 밖으로 흩어지지 않도록 했습니다.",
  "핸드오프는 프레임 단위 상태 라벨(\"Ready for Review\", \"Ready for develop\")로 어떤 화면이 리뷰 또는 구현 가능한 상태인지 명시해 진행했습니다. 디자인·개발 간 진행 상황에 대한 확인 비용을 줄였고, 프로젝트가 일시 중단되었다가 재개된 뒤에도 질문과 결정이 화면 위에 남아 있는 이 체계 덕분에 흐름을 끊긴 지점부터 그대로 이어 붙일 수 있었습니다.",
];

/* konkrit-lede-reflection.md 원문 */
const REFLECTION = [
  "이 프로젝트에서 가장 오래 남은 배움은 예외를 정의하는 일이 곧 협업의 언어라는 점이었습니다. 인증, 상품 목록, 혜택 등록 어느 플로우에서든 정상 경로보다 예외 경로에서 질문이 생겼고, 진입부터 에러·엣지 케이스까지 상태를 미리 정의해 전달할수록 개발과의 왕복이 줄었습니다. 화면 ID와 유저스토리 문장으로 스펙의 존재 이유를 명시한 것도 같은 맥락이었습니다.",
  "프로젝트가 내부 사정으로 중단되었다가 재개되는 과정도 설계 방식에 영향을 줬습니다. 몇 달의 공백 뒤에 작업을 이어 붙일 수 있었던 것은 IA 구조도와 화면정의서가 사람의 기억이 아니라 문서에 남아 있었기 때문입니다. 담당자가 바뀌어도, 흐름이 끊겨도 무너지지 않는 구조를 만드는 일이 디자인의 범위라는 확신이 이 프로젝트에서 굳어졌습니다.",
];

/* 원고의 Outcome 은 굵은 소제목 + 문단이 세 번 반복되는 구조라 블록으로 옮긴다 */
const OUTCOMES: SolutionBlockProps[] = [
  {
    headline: "흩어진 판매·프로젝트 정보를 한눈에 파악",
    paragraphs: [
      "복잡하게 분산돼 있던 판매 현황, 프로젝트 상태, 혜택 정보 등을 하나의 패턴과 IA 기준으로 재정리함으로써, 사용자는 여러 화면을 오가며 확인하던 업무를 한눈에 빠르게 판단하고 실행할 수 있는 경험을 얻게 되었습니다. 정보의 우선순위와 깊이를 재조정한 결과, 더 적은 인지 부담으로 핵심 정보를 파악할 수 있게 되었습니다.",
    ],
  },
  {
    headline: "파트너센터 운영팀의 반복 업무 감소와 협업 효율 향상",
    paragraphs: [
      "템플릿 기반의 일관된 화면 구조를 도입하여 운영팀이 수기로 관리하던 정보 입력·확인 프로세스가 단축되었습니다. 운영팀의 반복적 문의 및 오류 처리 업무가 줄었고, 디자인–개발–운영 간 의사소통 기준도 통일되어 전체적인 협업 속도와 품질이 향상되었습니다.",
    ],
  },
  {
    headline: "신규 페이지 확장에 대응 가능한 재사용성 높은 UI 기반 마련",
    paragraphs: [
      "프로젝트 구조 분석을 통해 공통 플로우·예외 케이스·에러 구조를 선제적으로 정의함으로써, 이후 새로운 기능 또는 프로젝트 유형이 추가되더라도 일관된 기준으로 빠르게 확장할 수 있는 체계적인 기반이 구축되었습니다.",
    ],
  },
];

export default function KonkritPartnerCenterPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 1. Hero */}
      <ProjectHero
        eyebrow="PRODUCT UX"
        title="NFT 서비스 운영 효율화를 위한 파트너센터 구축"
        lede="운영팀의 수기 관리를 셀프서비스 구조로 전환한 B2B 파트너센터의 IA 설계와 예외 케이스 정의, 개발 핸드오프 전 과정."
        image={{
          label: "대표 이미지 — 파트너센터 로그인 화면",
          ratio: "hero",
          src: "/images/work/konkrit-login.png",
          alt: "KONKRIT 파트너센터 로그인 화면. 가운데 KONKRIT 로고와 '파트너센터' 글자 아래로 abcdefg@modernlion.io 자리표시자가 들어간 아이디 입력란과 점으로 가려진 비밀번호 입력란이 있고, 체크되지 않은 아이디 저장 아래 노란 로그인 버튼이 놓인다. 구분선 아래에 회원가입 버튼과 아이디 찾기·비밀번호 찾기 링크가, 맨 아래에 이용약관·개인정보 처리방침과 (주)모던라이언 저작권 표기가 있다.",
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
        headline="예측 가능한 프로세스가 필요했던 B2B 프로젝트"
        paragraphs={BACKGROUND}
        media={[
          {
            label: "프로젝트 타임라인 다이어그램",
            ratio: "hero",
            src: "/images/work/konkrit-timeline.png",
            alt: "프로젝트 타임라인 다이어그램. 리서치, 디자인 및 프로토타이핑, 디자인 개발 협업 및 핸드오프, 디자인 개발 협업 및 핸드오프 재개 네 구간이 가로로 이어지고 각 구간에 Phase 1(2024.06)부터 Phase 4(2024.12–2025.01)까지 색이 다른 막대가 놓인다. 구간마다 리서치·디자인 요구사항, 컨셉 구체화·화면 설계·와이어프레임 및 프로토타입 제작, 최종 디자인 작업·리소스 전달·프로젝트 불발(내부 사정), 화면 설계·최종 디자인 작업·리소스 전달 같은 세부 작업이 설명과 함께 적혀 있고, 아래 띠에 리서치 리드와 기획·디자인 리드가 PO & PD 로 표시돼 있다.",
            width: 3200,
            height: 1800,
          },
        ]}
      />

      {/* 5. Problem — 미디어 없음 */}
      <ProseSection
        eyebrow="PROBLEM"
        headline="수기 운영이 만든 반복 문의와 보이지 않는 판매 현황"
        paragraphs={PROBLEM}
      />

      {/* 6. Approach — 미디어 없음 */}
      <ProseSection
        eyebrow="APPROACH"
        headline="화면보다 구조를 먼저, 스펙에 존재 이유를 담는 설계"
        paragraphs={APPROACH}
      />

      {/* 7. UX Strategy */}
      <ProseSection
        eyebrow="UX STRATEGY"
        headline="명확한 정보 구조(IA)가 구축되어야 비로소 사용자 경험이 정교해집니다"
        paragraphs={UX_STRATEGY}
        media={[
          {
            label: "IA 구조도 시트",
            ratio: "hero",
            src: "/images/work/konkrit-ia-sheet.png",
            alt: "'티켓 파트너 메뉴구조도' 시트. 화면 ID(CODE_na·CODE_no), 1~4 Depth 로 나뉜 범위, 경로/URL, 상세 설명, Popup·Page 형태 열로 짜여 있다. SG 회원가입·로그인, MA 파트너센터 메인, DS 대시보드, PJ 프로젝트, PD 상품, PL 플러그인 순으로 행이 이어지고 각 행에 '파트너센터 메인 > 내 사이트 > 관리 btn > 상품 탭' 같은 경로와 '등록된 상품 목록을 확인하고 상품을 등록할 수 있는 화면' 같은 설명이 붙어 있다.",
            width: 3200,
            height: 1800,
          },
        ]}
      />

      {/* 8. Solution — eyebrow 하나 아래 소제목 블록 셋 */}
      <ProseSection eyebrow="SOLUTION">
        <SolutionBlock {...AUTH_SOLUTION} />

        {/*
         * 원고가 문단 → 인용 둘 → 문단 둘 → 유형별 미디어 순으로 흐른다.
         * headline/paragraphs/media 3단으로 떨어지지 않아 children 으로 잇는다.
         */}
        <SolutionBlock
          headline="유형별 입력 흐름까지 정의한 상품 등록 플로우 구축"
          paragraphs={[
            "상품 등록은 유형 선택부터 기본 정보·옵션 정보 입력, 등록 완료와 승인 요청까지 단계가 길고, 선택한 유형에 따라 입력 항목이 달라지는 플로우였습니다. 파트너센터의 상품은 사용 방식에 따라 두 유형으로 나뉩니다.",
          ]}
        >
          <div className="my-[var(--space-300)]">
            <ApproachList items={PRODUCT_TYPES} />
          </div>

          {REGISTER_BODY.map((paragraph) => (
            <p key={paragraph} className={PROSE_PARAGRAPH}>
              {paragraph}
            </p>
          ))}

          <MediaGrid label="바우처형" columns={2} items={REGISTER_VOUCHER} />
          <MediaGrid
            label="날짜·좌석 선택형"
            columns={2}
            items={REGISTER_DATESEAT}
          />
        </SolutionBlock>

        <SolutionBlock {...LIST_SOLUTION} />
      </ProseSection>

      {/* 9. Collaboration — 코멘트 캡처 2장 세로 스택 */}
      <ProseSection
        eyebrow="COLLABORATION"
        headline="스펙 위에서 질문하고 답하는 협업 구조"
        paragraphs={COLLABORATION}
        media={[
          {
            label: "협업 코멘트 — 상품 파일 코멘트 스레드",
            ratio: "hero",
            src: "/images/work/konkrit-collaboration-01.png",
            alt: "피그마 '[DESIGN] ADMIN_상품' 파일의 Design 페이지. 캔버스에 PRD-001 라벨이 붙은 공통 플로우와 특정 플로우 모음 프레임이 줄지어 있고 곳곳에 코멘트 핀이 찍혀 있다. 우측 코멘트 패널에는 '상품을 선택하지 않았을 경우 해당 버튼들은 비활성화 처리되는 건가요?', '목록에서 바로 기간 수정이 가능한건가요?', '삭제 기능 관련해서는 백엔드 논의에 따라 아래 두 가지 안에서 기능 제공 여부가 달라질 것 같습니다' 같은 스레드가 답글 수와 함께 쌓여 있다.",
            width: 3200,
            height: 1800,
          },
          {
            label: "협업 코멘트 — 로그인 파일 코멘트 상세",
            ratio: "hero",
            src: "/images/work/konkrit-collaboration-02.png",
            alt: "피그마 '[DESIGN] 파트너시스템_로그인' 파일. 캔버스에 로그인(SG-003) 커버와 'Ready for Review' 라벨이 붙은 Core Frame·Flow Frame 이 놓여 있다. 열린 코멘트 스레드에 '해당 텍스트 스타일이 mixed styled로 보이는데, 구체적인 Font 스타일 명을 알 수 있을까요?' 라는 질문과 'text-underline 스타일을 적용하다니 깨진 것 같습니다. 타이포스타일 다음과 같이 전달드립니다 — Label/label-md/Regular' 라는 답이 보이고, 우측 패널에는 placeholder 색상과 아이디 형식에 관한 스레드가 이어진다.",
            width: 3200,
            height: 1800,
          },
        ]}
      />

      {/* 10. Outcome */}
      <ProseSection eyebrow="OUTCOME">
        {OUTCOMES.map((outcome) => (
          <SolutionBlock key={outcome.headline} {...outcome} />
        ))}
      </ProseSection>

      {/* 11. Reflection */}
      <ProseSection eyebrow="REFLECTION" paragraphs={REFLECTION} />

      {/* 12. 이전/다음 프로젝트 — PROJECTS 등록은 마지막 단계 */}
      <ProjectNav slug="konkrit-partnercenter" />
    </div>
  );
}
