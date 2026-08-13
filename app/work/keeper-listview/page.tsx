import type { Metadata } from "next";
import ApproachList, {
  type ApproachItem,
} from "@/components/project/ApproachList";
import ImpactStats, {
  type ImpactStat,
} from "@/components/project/ImpactStats";
import MetaGrid, { type MetaItem } from "@/components/project/MetaGrid";
import ProjectNav from "@/components/project/ProjectNav";
import ProblemBlock, {
  type ProblemBlockProps,
} from "@/components/project/ProblemBlock";
import ProjectHero from "@/components/project/ProjectHero";
import ProseSection from "@/components/project/ProseSection";
import SolutionBlock, {
  type SolutionBlockProps,
} from "@/components/project/SolutionBlock";

export const metadata: Metadata = {
  title: "Keeper APP 리스트뷰 UX 개선",
  description:
    "하루 수십 번 반복되던 스크롤 탐색을 조건 기반 탐색으로 바꿔, 키퍼가 업무를 고르는 시간을 줄인 프로젝트.",
};

const META: MetaItem[] = [
  { label: "Timeline", value: "2025.06 – 2025.08" },
  { label: "Product", value: "iOS, Android" },
  { label: "Team", value: "PD 1 · FE 1 · BE 1" },
  { label: "Role", value: "정책·PRD·UX/UI 설계·스프린트 관리 (100%)" },
  { label: "Tools", value: "Figma, Jira, Confluence" },
];

const OVERVIEW = [
  "Keeper 리스트뷰의 탐색 구조를 전면 재설계했습니다. 기존 앱은 조건 기반 탐색 기능이 없고 카드 정보 구조가 일관되지 않아, 키퍼들의 업무 선택 효율이 크게 떨어진 상태였습니다. 필터도, 정렬도, 날짜 이동도 없는 리스트에서 키퍼가 할 수 있는 일은 스크롤뿐이었습니다.",
  "문제 구조를 재정의하는 것부터 시작했습니다. 사용자 행동 분석과 운영팀 요구를 바탕으로 필터·정렬·카드 정보 구조의 신규 정책을 수립하고, 날짜 이동·필터·정렬이 하나의 흐름으로 동작하는 탐색 구조를 설계했습니다. 이 프로젝트에서 정책 수립부터 PRD, 화면 설계, 스프린트 태스크 관리까지 출시의 전 과정을 혼자 맡았습니다.",
];

const IMPACT: ImpactStat[] = [
  { from: "82%", to: "36%", label: "탐색 시 스크롤 반복 경험" },
  { from: "100%", to: "40%", label: "특이사항 확인 누락 경험" },
];

const BACKGROUND = [
  "Keeper는 공간 운영사와 현장 작업자(키퍼)를 연결하는 B2B 플랫폼입니다. 키퍼는 앱의 업무 리스트에서 청소·점검 업무를 직접 잡아 수행합니다. 어떤 업무를 잡을지 판단하는 기준은 명확합니다. 체크아웃 시간, 객실 상태, 야간 여부, 자신의 동선. 즉 리스트뷰는 단순한 목록이 아니라 키퍼의 하루 수입과 동선을 결정하는 의사결정 화면입니다.",
  "그런데 이 화면이 의사결정을 돕지 못하고 있었습니다. 잡기–예약–수행–완료로 이어지는 업무 흐름의 첫 단계가 가장 비효율적이었습니다.",
];

const PROBLEMS: ProblemBlockProps[] = [
  {
    headline: "조건으로 업무를 찾을 수 없어, 하루 수십 번 전체 리스트를 스크롤한다",
    paragraphs: [
      "키퍼는 체크아웃 시간·객실 상태·야간 여부를 기준으로 업무를 선택해야 합니다. 그러나 기존 앱에는 필터가 없었습니다. 원하는 조건의 업무 하나를 찾기 위해 전체 리스트를 처음부터 끝까지 훑는 일이 하루에도 수십 번 반복됐습니다. 파일럿 조사에서 키퍼의 82%가 탐색 시 스크롤 반복이 많다고 답했습니다. 탐색이 길어질수록 좋은 조건의 업무는 다른 키퍼에게 먼저 넘어갑니다. 탐색 비용이 곧 기회 손실이었습니다.",
    ],
  },
  {
    headline: "날짜 기준 탐색이 불가능해, 일정 계획을 세울 수 없다",
    paragraphs: [
      "특정 날짜의 업무를 바로 찾을 방법이 없었습니다. 키퍼는 하루치 리스트를 모두 스크롤하며 원하는 날짜를 직접 찾거나, 내일·모레의 업무량을 눈으로 비교해야 했습니다. \"모레는 업무가 많은가?\"라는 단순한 질문에 답하려면 리스트 전체를 두 번 훑어야 했습니다. 날짜 기반 탐색의 부재는 탐색 비용 증가를 넘어, 키퍼가 자신의 일주일을 계획하지 못하게 만드는 구조적 문제였습니다.",
    ],
  },
  {
    headline: "판단에 필요한 정보가 카드 하단에 숨어 있다",
    paragraphs: [
      "기존 카드 UI는 특이사항·요청사항·시간 같은 핵심 정보가 카드 하단에 배치돼 있었습니다. 빠르게 스크롤하는 탐색 상황에서 하단 정보는 사실상 보이지 않는 정보입니다. 그 결과 키퍼 100%가 특이사항 확인을 놓친 경험이 있다고 답했습니다. 특이사항을 놓치면 현장에서 업무 범위가 달라지고, 운영팀 CS로 이어집니다. 색상과 강조도 실제 위험도와 무관하게 쓰이고 있어 시각적 우선순위가 판단을 돕지 못했습니다.",
    ],
  },
];

const APPROACHES: ApproachItem[] = [
  {
    lead: "탐색의 시작점을 \"훑기\"에서 \"조건 정하기\"로 옮긴다.",
    body: "리스트를 훑다가 고르는 구조에서는 필터를 하나 붙여도 스크롤이 사라지지 않습니다. 조건을 먼저 정하고 결과만 보는 구조로 흐름 자체를 뒤집었습니다.",
  },
  {
    lead: "날짜를 탐색의 첫 행동으로 만든다.",
    body: "날짜 이동을 부가 기능이 아니라 탐색의 진입점으로 설계해, 날짜를 고르는 행동이 곧 일정 계획이 되게 했습니다.",
  },
  {
    lead: "카드의 정보 우선순위를 판단 기준에 맞춘다.",
    body: "업무를 잡을지 말지 결정하는 데 필요한 정보 순서대로 카드를 다시 쌓았습니다.",
  },
];

/* TODO: 프로토타입·컴포넌트 링크는 공개 URL 이 정해지면 캡션을 링크로 바꾼다 */
const SOLUTIONS: SolutionBlockProps[] = [
  {
    headline: "탐색의 시작을 날짜 선택으로 바꿨다",
    paragraphs: [
      "날짜 Bottom Sheet를 도입해 탐색의 첫 행동을 재정의했습니다. 키퍼는 업무를 탐색하기 전에 먼저 \"언제 일하고 싶은가\"를 정합니다. Bottom Sheet 안에서 전·후일의 업무량을 함께 보여줘, 날짜를 고르는 행동이 곧 일정 계획이 되도록 했습니다. 리스트 전체를 두 번 훑어야 했던 업무량 비교가 시트 하나에서 끝납니다. 날짜를 화면 상단 고정 요소로 두어, 탐색 중 언제든 기준 날짜를 확인하고 이동할 수 있게 했습니다.",
    ],
    media: [
      {
        kind: "video",
        label: "날짜 선택 Bottom Sheet 흐름",
        /* 1080×2826 세로 영상 — contain 이라야 폰 화면 전체가 잘리지 않고 들어간다 */
        ratio: "wide",
        fit: "contain",
        src: "/videos/date-picker-flow.mp4",
        poster: "/videos/date-picker-flow-poster.jpg",
        alt: "업무 리스트 상단의 날짜 영역을 눌러 날짜 선택 Bottom Sheet를 열고, 달력에서 날짜를 고르면 해당 날짜의 업무 리스트로 바뀌는 화면 녹화.",
        caption: "날짜를 고르는 행동이 곧 일정 계획이 되는 탐색 흐름",
      },
    ],
  },
  {
    headline: "여러 유형을 한 번에 묶어 거르는 업무 필터를 만들었다",
    paragraphs: [
      "기존에는 모든 유형의 업무가 한 리스트에 섞여 있어, 특정 업무만 수행하는 키퍼도 전체를 훑어야 했습니다. 업무 필터를 Bottom Sheet의 칩 다중 선택으로 설계해, 자신이 수행하는 유형들 — 정규 숙박 청소와 재실청소처럼 — 을 한 번에 묶어 선택하고 적용하도록 했습니다. 조건을 고르는 동안 리스트가 바뀌지 않고 적용하기를 누른 시점에 한 번에 갱신되는 구조라, 여러 조건을 조합하는 중간 과정이 탐색을 방해하지 않습니다. 초기화 버튼으로 언제든 전체 리스트로 돌아갈 수 있고, 적용된 조건은 리스트 상단 칩에 남아 지금 보고 있는 리스트의 범위를 놓치지 않게 했습니다.",
    ],
    media: [
      {
        kind: "video",
        label: "업무 필터 선택 플로우",
        /* 세로 영상 — Solution 1 과 같은 프레임·맞춤 방식 */
        ratio: "wide",
        fit: "contain",
        src: "/videos/task-filter-flow.mp4",
        poster: "/videos/task-filter-flow-poster.jpg",
        alt: "업무 필터 Bottom Sheet를 열어 수행할 업무 유형 칩을 여러 개 고르고, 적용하기를 누르면 해당 유형의 업무만 남도록 리스트가 갱신되는 화면 녹화.",
        caption: "조건을 고르는 동안 리스트는 그대로, 적용하기를 누른 시점에 한 번에 갱신된다",
      },
    ],
  },
  {
    headline: "판단에 중요한 정보가 먼저 보이도록 카드를 다시 설계했다",
    paragraphs: [
      "카드의 정보 우선순위를 새로 정의했습니다. 특이사항 → 시간/범위 → 객실 정보 순. 업무를 잡을지 말지 판단하는 데 결정적인 정보부터 위에서 아래로 배치했습니다. 특이사항은 색상 강조를 실제 위험도에 맞게 다시 설계해, 놓치면 안 되는 정보일수록 시각적으로 먼저 걸리게 했습니다. 반대로 판단에 영향이 적은 정보는 강조를 걷어냈습니다. 강조가 많은 카드는 강조가 없는 카드와 같기 때문입니다.",
    ],
    media: [
      {
        label: "as-is/to-be 비교 — 카드 정보 구조",
        ratio: "wide",
        caption: "카드 UI 컴포넌트 링크 (준비 중)",
      },
    ],
  },
];

export default function KeeperListviewPage() {
  return (
    <div className="flex flex-col gap-[var(--space-900)]">
      {/* 1. Hero */}
      <ProjectHero
        eyebrow="Mobile APP UX Redesign"
        title="Keeper APP 리스트뷰 UX 개선"
        lede="하루 수십 번 반복되던 스크롤 탐색을 조건 기반 탐색으로 바꿔, 키퍼가 업무를 고르는 시간을 줄인 프로젝트."
        image={{
          label: "대표 이미지 — 개선된 리스트뷰 화면",
          ratio: "hero",
          src: "/images/work/keeper-listview-hero.png",
          alt: "개선된 Keeper 앱 화면 세 개. 왼쪽은 상단에 날짜 스트립과 마감임박순·체크아웃됨·업무·지점 필터 칩이 놓인 업무 리스트, 가운데는 월 단위 달력이 열린 날짜 선택 Bottom Sheet, 오른쪽은 지점·동·층을 체크박스로 좁히는 필터 Bottom Sheet.",
          width: 1920,
          height: 1080,
          priority: true,
        }}
      />

      {/* 2. Meta Grid */}
      <MetaGrid items={META} />

      {/* 3. Overview */}
      <ProseSection eyebrow="OVERVIEW" paragraphs={OVERVIEW} />

      {/* 4. Impact */}
      <ImpactStats
        stats={IMPACT}
        caption="운영팀 파일럿 테스트 기준. 특이사항 인지율 상승과 판단 부담 감소 피드백 확인."
      />

      {/* 5. Background */}
      <ProseSection
        eyebrow="BACKGROUND"
        headline="키퍼는 리스트에서 하루의 일을 고른다"
        paragraphs={BACKGROUND}
      />

      {/* 6. Problem */}
      <ProseSection eyebrow="PROBLEM">
        {PROBLEMS.map((problem) => (
          <ProblemBlock key={problem.headline} {...problem} />
        ))}
      </ProseSection>

      {/* 7. Approach */}
      <ProseSection eyebrow="APPROACH">
        <ApproachList
          intro={["Problem 세 개에 각각 대응하는 원칙을 세웠습니다."]}
          items={APPROACHES}
          outro={[
            "이 원칙들이 충돌 없이 동작하도록 화면보다 정책을 먼저 세웠습니다. 필터 적용 중 날짜를 바꾸면 필터는 유지되는가, 정렬 기준은 초기화되는가 같은 질문에 화면을 그리기 전에 답을 만들어뒀고, PRD는 화면 단위로 작성해 개발과의 해석 차이를 줄였습니다.",
          ]}
        />
      </ProseSection>

      {/* 8. Solution */}
      <ProseSection eyebrow="SOLUTION">
        {SOLUTIONS.map((solution) => (
          <SolutionBlock key={solution.headline} {...solution} />
        ))}
      </ProseSection>

      {/* 9. Interaction Detail */}
      <ProseSection
        eyebrow="INTERACTION DETAIL"
        headline="조건에 맞는 업무가 없을 때도 탐색이 끊기지 않는다"
        paragraphs={[
          "필터를 도입하면 필연적으로 \"결과 없음\" 상태가 생깁니다. 빈 화면으로 끝내지 않고, 어떤 조건 때문에 결과가 없는지 보여주고 조건을 바로 수정할 수 있는 경로를 함께 제공했습니다. 날짜·필터·정렬의 조합에서 발생하는 상태들을 케이스별로 정의해, 어떤 조합에서도 키퍼가 막다른 화면을 만나지 않도록 했습니다.",
        ]}
      />

      {/* 10. Collaboration */}
      <ProseSection
        eyebrow="COLLABORATION"
        headline="정책 문서와 화면 단위 PRD로 해석 차이를 없앴다"
        paragraphs={[
          "3인 팀에서 디자이너가 정책과 스프린트까지 쥐고 있었기 때문에, 문서가 곧 커뮤니케이션이었습니다. 일관된 탐색 경험을 보장하는 서비스 정책 문서와, 사용자 흐름·요구사항을 화면 단위로 정의한 PRD를 작성해 전달했습니다. 개발자가 \"이 경우엔 어떻게 되나요?\"라고 묻기 전에 문서에 답이 있는 상태를 목표로 했습니다. 스프린트 태스크 관리도 직접 맡아, 설계 의도가 구현 우선순위에 그대로 반영되도록 했습니다.",
        ]}
        image={{ label: "PRD·정책 문서", ratio: "wide" }}
      />

      {/* 11. Outcome */}
      <ProseSection
        eyebrow="OUTCOME"
        headline="탐색이 빨라지자 판단이 정확해졌다"
        paragraphs={[
          "탐색 시 스크롤 반복 경험이 82%에서 36%로 줄었습니다. 특이사항 확인 누락 경험은 100%에서 40%로 줄었습니다. 운영팀 파일럿에서는 \"특이사항 인지율이 높아졌다\", \"업무 선택까지의 판단 부담이 줄었다\"는 피드백을 확인했습니다. 탐색 효율 개선이 단순히 시간 단축에 그치지 않고 판단 정확도까지 끌어올린 것입니다.",
        ]}
      />

      {/* 12. Reflection */}
      <ProseSection
        eyebrow="REFLECTION"
        paragraphs={[
          "이 프로젝트에서 확인한 것은 순서의 힘입니다. 필터·정렬·날짜 이동처럼 서로 얽힌 기능은 화면을 먼저 그리면 반드시 충돌합니다. 정책을 먼저 세우고 화면을 나중에 그리는 순서가, 얽힌 기능을 일관되게 만드는 가장 빠른 길이었습니다.",
          "정책 문서를 쓰는 데 들인 시간은 화면을 그리는 시간보다 길었지만, 개발 단계에서 되돌아온 질문은 거의 없었습니다. 이 경험 이후로 저는 얽힌 기능을 설계할 때 항상 규칙표부터 만듭니다.",
        ]}
      />

      {/* 13. 이전/다음 프로젝트 */}
      <ProjectNav slug="keeper-listview" />
    </div>
  );
}
