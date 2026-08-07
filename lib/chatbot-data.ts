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
    id: "kds",
    question: "KDS는 어떤 프로젝트인가요?",
    keywords: ["kds", "디자인시스템", "keeper", "designsystem", "토큰"],
    answer:
      "B2B 어드민 제품을 위한 0→1 디자인 시스템이에요. 토큰 파이프라인(Token Studio → Style Dictionary), 컴포넌트 12개, Figma Code Connect 연동, 문서 사이트까지 혼자 만들었어요. 홈의 KEEPER DESIGN SYSTEM 섹션을 눌러 자세히 볼 수 있어요.",
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
