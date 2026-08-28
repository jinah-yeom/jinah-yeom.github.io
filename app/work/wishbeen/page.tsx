import type { Metadata } from "next";
import ApproachList, {
  type ApproachItem,
} from "@/components/project/ApproachList";
import MetaGrid, { type MetaItem } from "@/components/project/MetaGrid";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectNav from "@/components/project/ProjectNav";
import ProseSection from "@/components/project/ProseSection";
import SolutionBlock, {
  type SolutionBlockProps,
} from "@/components/project/SolutionBlock";

export const metadata: Metadata = {
  title: "위시빈 여행기 UX 개선",
  description:
    "위시빈은 여행정보를 추천하고 공유하는 플랫폼입니다. 사용자가 남긴 여행기를 중심으로 도시별 콘텐츠와 커뮤니티가 이어지는 서비스에서, 저는 가장 많은 방문이 모이는 여행기 상세의 UX 개선을 맡아 문제 정의부터 와이어프레임, 최종 화면 설계까지 진행했습니다.",
};

/*
 * 본문은 wishbeen.md 원문이다. 문단 단위로만 옮기고 윤문하지 않는다.
 * Collaboration 은 소스 부재로, UX Strategy 는 원고에 없어 넣지 않는다.
 * 피그마 링크는 원고에서 본문 미포함으로 확정돼 넣지 않는다.
 */
const META: MetaItem[] = [
  { label: "Timeline", value: "2022.12 – 2023.05" },
  { label: "Product", value: "App (여행정보 추천·공유 플랫폼)" },
  { label: "Team", value: "PD 1 · DEV 2" },
  { label: "Role", value: "UX Designer, UI 설계 및 디자인 전담" },
  { label: "Tools", value: "Figma" },
];

const OVERVIEW = [
  "위시빈은 여행정보를 추천하고 공유하는 플랫폼입니다. 사용자가 남긴 여행기를 중심으로 도시별 콘텐츠와 커뮤니티가 이어지는 서비스에서, 저는 가장 많은 방문이 모이는 여행기 상세의 UX 개선을 맡아 문제 정의부터 와이어프레임, 최종 화면 설계까지 진행했습니다.",
];

const BACKGROUND = [
  "내부 데이터가 보여주는 상황은 엇갈렸습니다. 채널별 유입 수는 늘어나고 있는데, 사이트에서 유저의 평균 체류 시간은 GA 기준 30초 내외에 그쳤습니다. 들어온 사람이 곧바로 나가는 구조였습니다.",
  "유입 경로별로 가장 많이 방문하는 페이지 1위는 여행기였습니다. 그래서 여행기 개선이 곧 위시빈 생태계의 기반을 다지는 일이 될 수 있었고, 개선 효과가 입증되면 장소, 여행일정, 커뮤니티 등에도 같은 기능을 넣어 확장할 계획이었습니다. 개선의 거점을 여행기로 잡은 이유입니다.",
];

const PROBLEM = [
  "개선은 이 가설에서 출발했습니다. 문제를 두 축으로 정리했습니다.",
  "하나는 여행기 페이지의 러닝 커브입니다. 평균 체류 시간이 30초 내외에 머물렀고, 긴 여행기를 읽어 내려가는 스크롤의 압박이 모바일 사용자에게 크게 다가왔습니다. 오래 머무를 수 있는 페이지가 되어야 했습니다.",
  "다른 하나는 플랫폼 마중물로서의 역할입니다. 여행기가 사이트의 마중물 역할을 수행하고 있었고, 여행기 안에서 관련 도시 콘텐츠를 탐색하려는 니즈가 컸습니다. 읽기에서 끝나지 않고 다양한 시도가 가능한 구조가 필요했습니다.",
  "두 축을 모아 목표를 세웠습니다. 쉽고 빠르게, 한눈에 이해되는 블록 경험. 콘텐츠의 현재 위치를 바로 파악할 수 있는 편리한 UX, 그리고 다양한 콘텐츠를 자연스럽게 탐색할 수 있는 환경 조성입니다.",
];

/*
 * 문제 2축을 박스로 조판한다 — 각 축의 근거와 방향을 2불릿으로 나눠,
 * 본문에서 문단으로 흐르던 대응 관계를 한눈에 보이게 한다.
 * label 은 비운다. 원고에 그 자리에 쓸 문구가 없다.
 */
const PROBLEM_AXES: ApproachItem[] = [
  {
    title: "여행기 페이지 러닝 커브",
    bullets: [
      "평균 체류 시간 30초 내외, 모바일 스크롤 압박",
      "오래 머무를 수 있도록",
    ],
  },
  {
    title: "플랫폼 마중물 역할 강화",
    bullets: [
      "여행기가 마중물, 도시 콘텐츠 탐색 니즈",
      "다양한 시도를 가능하게",
    ],
  },
];

const APPROACH = [
  "앱 실행 이후 여행기 상세 페이지에서 다른 콘텐츠로 파생되는 플로우에 맞춰 레이아웃을 설계했습니다. 복잡한 내비게이션을 더하는 대신, 버티컬 스크롤 구현만으로 더 쉽게 탐색되는 앱을 만드는 것이 방향이었습니다.",
  "서비스의 간략한 흐름을 전체적으로 보기 위해 와이어프레임 단계를 거쳤습니다. 여행기 본문에서 공유, 관련 도시, 댓글, 큐레이션으로 이어지는 화면 흐름을 와이어프레임으로 먼저 합의한 뒤 최종 디자인으로 넘어갔습니다.",
];

const SOLUTIONS: SolutionBlockProps[] = [
  {
    headline: "앱 콘텐츠 완독 시간 단축",
    paragraphs: [
      "여행기 상단에 프로그래스 바를 추가했습니다. 긴 여행기를 읽는 동안 필요한 내용이 어디쯤 있는지, 지금 어디를 읽고 있는지가 화면에 늘 드러나도록 해, 스크롤의 압박을 위치 감각으로 바꿨습니다. DAY 단위로 나뉜 본문 구조와 장소 카드가 그 위치 감각을 받쳐줍니다.",
    ],
  },
  {
    headline: "한 화면에서 경험하는 다양한 기능",
    paragraphs: [
      "콘텐츠를 읽는 도중 유저가 바로 액션을 취할 수 있도록 고정 네비게이터 바에 좋아요와 공유 아이콘을 추가했습니다. 공유는 카카오톡과 링크 복사로 바로 이어지고, 위시빈의 콘텐츠 품질 향상에 기여할 수 있도록 신고하기 버튼도 함께 두었습니다. 읽기 화면을 떠나지 않고 반응, 공유, 신고까지 끝나는 구성입니다.",
    ],
  },
  {
    headline: "즐거운 탐색으로 이어지는 큐레이션",
    paragraphs: [
      "여행기 하단에 큐레이션 영역을 추가해 여러 콘텐츠를 동시다발적으로 노출했습니다. 같은 도시의 인기글, 지금 뜨는 게시글, 작성자 프로필로 이어지는 동선을 본문 끝에 두어, 여행기를 다 읽은 사용자가 자연스럽게 다음 콘텐츠로 넘어가게 했습니다. 여행기를 마중물로 삼아 탐색을 넓힌다는 목표가 화면으로 내려온 자리입니다.",
    ],
  },
];

/*
 * 원고의 Outcome 은 굵은 소제목 + 문단이 세 번 반복되는 구조라 블록으로 옮긴다.
 * 재측정 정량 데이터가 없어 산출물 기반의 정성 서술이고, 이미지도 없다.
 * 블록 앞에 놓을 도입 문단은 원고에 없어 eyebrow 만으로 시작한다.
 */
const OUTCOMES: SolutionBlockProps[] = [
  {
    headline: "읽는 위치가 보이는 여행기",
    paragraphs: [
      "프로그래스 바와 DAY 구조로 긴 여행기의 현재 위치가 항상 드러나는 읽기 경험을 완성했습니다. 스크롤 압박이라는 모바일의 문제를 위치 정보로 바꾼 설계입니다.",
    ],
  },
  {
    headline: "읽기에서 끝나지 않는 화면",
    paragraphs: [
      "고정 내비의 액션과 하단 큐레이션으로, 여행기 한 화면 안에서 반응하고 공유하고 다음 콘텐츠로 이동하는 흐름을 만들었습니다. 여행기를 플랫폼의 마중물로 삼는다는 전략이 화면 구조로 구현되었습니다.",
    ],
  },
  {
    headline: "확장을 전제한 개선",
    paragraphs: [
      "여행기에서 검증한 블록 경험을 장소, 여행일정, 커뮤니티로 확장한다는 전제 아래 설계해, 이후 같은 패턴을 다른 콘텐츠 유형에 적용할 수 있는 기준을 남겼습니다.",
    ],
  },
];

export default function WishbeenPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 1. Hero — lede 와 대표 이미지는 다음 단계에서 채운다 */}
      <ProjectHero eyebrow="PRODUCT UX" title="위시빈 여행기 UX 개선" />

      {/* 2. Meta Grid */}
      <MetaGrid items={META} />

      {/* 3. Overview */}
      <ProseSection eyebrow="OVERVIEW" paragraphs={OVERVIEW} />

      {/* 4. Background */}
      <ProseSection
        eyebrow="BACKGROUND"
        headline="유입은 늘고, 머무는 시간은 30초"
        paragraphs={BACKGROUND}
      />

      {/* 5. Problem — 문제 2축을 박스로 조판, 이미지 없음 */}
      <ProseSection
        eyebrow="PROBLEM"
        headline="직관적인 콘텐츠 위치 UI를 제공하면 사용자는 이탈하지 않을 것이다"
        paragraphs={PROBLEM}
      >
        <ApproachList items={PROBLEM_AXES} />
      </ProseSection>

      {/* 6. Approach */}
      <ProseSection
        eyebrow="APPROACH"
        headline="버티컬 스크롤 하나로 탐색이 끝나는 구조"
        paragraphs={APPROACH}
      />

      {/* 7. Solution — eyebrow 하나 아래 소제목 블록 셋 */}
      <ProseSection eyebrow="SOLUTION">
        {SOLUTIONS.map((solution) => (
          <SolutionBlock key={solution.headline} {...solution} />
        ))}
      </ProseSection>

      {/* 8. Outcome — 정성 서술 세 블록, 이미지 없음 */}
      <ProseSection eyebrow="OUTCOME">
        {OUTCOMES.map((outcome) => (
          <SolutionBlock key={outcome.headline} {...outcome} />
        ))}
      </ProseSection>

      {/* 9. 이전/다음 프로젝트 — PROJECTS 등록은 마지막 단계 */}
      <ProjectNav slug="wishbeen" />
    </div>
  );
}
