/*
 * 챗봇 v1 — 준비된 답변으로 동작한다.
 * 컴포넌트는 아래 export 세 개(GREETING / SUGGESTED_QUESTIONS / answer)만 알고 있으므로,
 * 나중에 LLM 프록시로 바꿀 때 answer() 구현만 갈아끼우면 된다.
 */

export interface SuggestedQuestion {
  id: string;
  question: string;
}

interface Topic extends SuggestedQuestion {
  /** 자유 입력에서 이 주제로 보낼 단서들 — 공백 제거·소문자 상태로 비교한다 */
  keywords: string[];
  answer: string;
}

export const GREETING =
  "안녕하세요! 지나의 버추얼 카피예요.\n지나와 지나의 작업에 대해 무엇이든 물어보세요.";

export const FALLBACK_ANSWER =
  "아직은 준비된 주제 안에서만 답할 수 있어요.\n아래 추천 질문을 눌러보시거나, 작업·스택·연락처에 대해 물어봐 주세요!";

/** 답변 뒤에 남은 질문을 다시 띄울 때 붙이는 한 줄 */
export const FOLLOW_UP_LEAD = "다른 것도 궁금하신가요?";

/** 준비된 질문을 모두 답한 뒤 질문 카드 대신 보여줄 한 줄 */
export const NO_MORE_QUESTIONS = "궁금한 점은 직접 입력해주세요.";

export interface ChatReply {
  text: string;
  /**
   * 매칭된 주제 id. 이미 답한 질문을 다음 카드에서 빼는 데 쓴다.
   * 자유 입력으로 들어와도 주제만 맞으면 채워지므로, 컴포넌트가 문구를 비교할 필요가 없다.
   */
  topicId?: string;
}

/** 봇이 즉답하면 기계적으로 느껴져서 두는 지연. LLM 으로 바꾸면 실제 지연이 이 자리를 대신한다. */
const RESPONSE_DELAY_MS = 300;

const TOPICS: Topic[] = [
  {
    id: "role",
    question: "어떤 일을 하시나요?",
    keywords: ["어떤일", "무슨일", "하는일", "직무", "소개", "누구", "role"],
    answer:
      "디자인과 개발을 함께하는 디자이너-개발자예요. 디자인 시스템을 Figma에서 설계하고, Next.js로 직접 구현하고, 문서화까지 운영합니다.",
  },
  {
    id: "listview",
    question: "리스트뷰 개선은 어떤 프로젝트인가요?",
    keywords: [
      "리스트뷰",
      "listview",
      "리스트",
      "업무리스트",
      "키퍼앱",
      "탐색",
      "필터",
      "스크롤",
    ],
    answer:
      "Keeper 앱 리스트뷰의 탐색 구조를 전면 재설계한 프로젝트예요. 기존 앱은 필터가 가로 스와이프 칩에 갇혀 있고 날짜 탐색이 불가능하며 카드 정보 구조가 일관되지 않아, 조건을 정해 좁힐 수도 날짜로 건너뛸 수도 없는 리스트에서 키퍼가 할 수 있는 일은 스크롤뿐이었어요. 사용자 행동 분석과 운영팀 요구를 바탕으로 필터·카드 정보 구조의 신규 정책을 수립하고, 날짜 선택에서 시작해 조건을 좁혀가는 탐색 구조를 설계했어요. 정책 수립부터 PRD, 화면 설계, 스프린트 태스크 관리까지 출시의 전 과정을 혼자 맡았고, 탐색 시 스크롤 반복 경험은 82%에서 36%로, 특이사항 확인 누락 경험은 100%에서 40%로 줄었어요. /work/keeper-listview 에서 자세히 볼 수 있어요.",
  },
  {
    id: "kds",
    question: "KDS는 어떤 프로젝트인가요?",
    /*
     * keeper 단독 키워드는 뺀다 — Keeper 케이스가 셋이라 "keeper 소모품" 같은
     * 입력까지 이 주제가 먼저 채 갔다. 브랜드명이 아니라 이 케이스만 가리키는
     * 말로만 잡는다.
     */
    keywords: [
      "kds",
      "디자인시스템",
      "designsystem",
      "토큰",
      "컴포넌트",
      "스타일딕셔너리",
    ],
    answer:
      "MUI 로 만들어져 있던 B2B 어드민 제품을 자체 디자인 시스템으로 재구축한 프로젝트예요. 토큰 파이프라인(Token Studio → Style Dictionary), CSS 변수 346개, 컴포넌트 33종, Figma Code Connect 연동, 문서 사이트까지 혼자 만들었어요. /work/kds 에서 자세히 볼 수 있어요.",
  },
  {
    id: "supplies",
    question: "소모품 구매는 어떤 프로젝트인가요?",
    /*
     * 결제·구매 단독은 빼둔다 — konkrit-app 도 티켓 결제와 환불을 다루는
     * 케이스라, 앞선 이 주제가 "티켓 결제" 까지 채 갔다. 두 케이스가 나눠 쓰는
     * 일반어는 어느 쪽에도 두지 않는다는 원칙을 여기에도 맞춘다.
     */
    keywords: [
      "소모품",
      "supplies",
      "airsupply",
      "에어서플라이",
      "procurement",
    ],
    answer:
      "외부 서비스(AirSupply)에서 진행되던 소모품 구매를 B2B 어드민 안으로 통합한 프로젝트예요. 구매 여정을 분해해 의사결정 플로우차트로 다시 그리고, 계정 연동부터 상품 탐색·결제·주문 요약까지 화면 이동 없이 이어지는 흐름을 설계했어요. 예외 케이스 정책과 화면 단위 명세까지 문서로 확정해서 출시 후 명세 관련 재요청은 0건이었어요. /work/keeper-supplies 에서 자세히 볼 수 있어요.",
  },
  {
    id: "konkrit",
    question: "KONKRIT 파트너센터는 어떤 프로젝트인가요?",
    /*
     * KONKRIT 케이스가 둘이라 브랜드를 가리키는 말(konkrit·콘크릿·nft·모던라이언)은
     * 어느 쪽에도 두지 않는다 — 한쪽에 붙이면 "konkrit 티켓" 같은 입력까지 그쪽이
     * 채 간다. keeper 를 세 케이스에서 뺀 것과 같은 이유다.
     */
    keywords: [
      "파트너센터",
      "partnercenter",
      /* 두 글자 ia 단독은 두지 않는다 — media·social 처럼 그 두 글자가 박힌 말까지 잡아챈다 */
      "ia설계",
      "ia구조",
      "정보구조",
    ],
    answer:
      "NFT 서비스 운영사가 상품·혜택·프로젝트 정보를 직접 관리하도록 새로 구축한 B2B 어드민 콘솔이에요. 운영팀이 수기로 대신 처리하던 구조를 셀프서비스로 바꾸는 게 목표라, 화면을 그리기 전에 IA 구조도부터 세우고 모든 화면 설계가 그 구조도에서 파생되게 했어요. 화면마다 ID를 붙이고 화면정의를 유저스토리 문장으로 시작해 스펙 자체에 존재 이유가 담기게 했고, 인증·상품 등록·상품 목록의 예외 케이스까지 상태를 정의해 전달했어요. /work/konkrit-partnercenter 에서 자세히 볼 수 있어요.",
  },
  {
    id: "konkrit-app",
    question: "KONKRIT 3.0 개편은 어떤 프로젝트인가요?",
    keywords: [
      "3.0",
      "티켓",
      "ticket",
      "암표",
      "지갑",
      "온보딩",
      "니어프로토콜",
      "앱개편",
      "리셀",
    ],
    answer:
      "KONKRIT은 니어프로토콜 기반 지갑으로 아이템을 관리하는 NFT 블록체인 플랫폼이고, 3.0 개편의 요구는 NFT 티켓을 결제하는 경험이 모바일 앱에서 일반 티켓을 구매하는 것과 다르지 않아야 한다는 것이었어요. 지갑 생성을 닉네임 하나 정하는 일로 보이게 만든 온보딩, 생체 인증과 QR 제시로 현장에서 끝나는 티켓 사용, 구매부터 환불까지 끊기지 않는 거래 화면을 설계했어요. UX 전략 수립부터 요구사항 문서화, 화면 설계와 디자인, 개발 핸드오프까지 전 과정을 맡았습니다. 회사의 런웨이가 끝나면서 출시에는 이르지 못했지만, iOS·Android 최종 디자인과 UI 스타일 가이드, Figma Variables 866개로 이어지는 다국어 기반까지 완성해 전달했어요. /work/konkrit-app 에서 자세히 볼 수 있어요.",
  },
  {
    id: "wishbeen",
    question: "위시빈은 어떤 프로젝트인가요?",
    /*
     * 탐색은 두지 않는다 — listview 가 가진 말이다. 위시빈도 탐색을 다루지만
     * 두 케이스가 나눠 쓰는 말은 어느 쪽에도 두지 않는다는 원칙을 따른다.
     * 프로그래스는 붙여쓴 "프로그래스바" 대신 단독으로 둔다 — 입력은 공백을
     * 지우고 비교하므로 "프로그래스 바" 도 이 한 단어로 걸린다.
     * 여행기는 여행에 포함되지만(부분 문자열) 이 케이스를 가리키는 고유어라 남긴다.
     */
    keywords: [
      "위시빈",
      "wishbeen",
      "여행기",
      "여행",
      "프로그래스",
      "큐레이션",
    ],
    answer:
      "위시빈은 여행정보를 추천하고 공유하는 플랫폼이고, 가장 많은 방문이 모이는 여행기 상세의 UX 개선을 맡아 문제 정의부터 와이어프레임, 최종 화면 설계까지 진행했어요. 채널별 유입은 늘어나는데 평균 체류 시간은 GA 기준 30초 내외에 그쳤고, 직관적인 콘텐츠 위치 UI를 제공하면 사용자는 이탈하지 않을 것이라는 가설에서 출발했어요. 여행기 상단에 프로그래스 바를 추가해 스크롤의 압박을 위치 감각으로 바꾸고, 고정 네비게이터 바에 좋아요와 공유 아이콘을 두어 읽기 화면을 떠나지 않고 반응·공유·신고까지 끝나게 했고, 하단에는 큐레이션 영역을 추가해 여행기를 다 읽은 사용자가 자연스럽게 다음 콘텐츠로 넘어가게 했어요. 재측정 데이터가 남아 있지 않아 결과 수치로 닫지는 못했지만, 여행기에서 검증한 블록 경험을 장소, 여행일정, 커뮤니티로 확장할 수 있는 기준을 남겼어요. /work/wishbeen 에서 자세히 볼 수 있어요.",
  },
  {
    id: "stack",
    question: "주로 쓰는 스택은?",
    keywords: ["스택", "기술", "도구", "툴", "stack", "tech", "언어"],
    answer:
      "Next.js, Tailwind CSS, TypeScript, shadcn/ui 기반이고, 토큰은 Token Studio와 Style Dictionary로 관리해요. Figma API와 Claude 스킬로 워크플로 자동화도 합니다.",
  },
  {
    id: "contact",
    question: "연락하려면 어떻게 하나요?",
    keywords: [
      "연락",
      "contact",
      "이메일",
      "메일",
      "email",
      "링크드인",
      "linkedin",
      "github",
      "깃허브",
    ],
    answer:
      "About 페이지 아래쪽의 GitHub / LinkedIn / Email 링크로 연락 주세요!",
  },
];

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = TOPICS.map(
  ({ id, question }) => ({ id, question })
);

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "");
}

function findTopic(question: string): Topic | undefined {
  const normalized = normalize(question);
  if (normalized.length === 0) return undefined;

  /* 칩으로 들어온 질문은 문구가 그대로라 먼저 맞춰본다 */
  const exact = TOPICS.find(
    (topic) => normalize(topic.question) === normalized
  );
  if (exact) return exact;

  return TOPICS.find((topic) =>
    topic.keywords.some((keyword) => normalized.includes(keyword))
  );
}

export async function answer(question: string): Promise<ChatReply> {
  await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY_MS));

  const topic = findTopic(question);
  return topic
    ? { text: topic.answer, topicId: topic.id }
    : { text: FALLBACK_ANSWER };
}
