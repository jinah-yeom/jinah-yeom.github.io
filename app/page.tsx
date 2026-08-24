import Hero from "@/components/home/Hero";
import WorkSection, { type WorkSectionProps } from "@/components/home/WorkSection";

const STATEMENT = [
  "디자인 시스템을 설계하고",
  "코드로 직접 완성하는",
  "디자이너-개발자입니다",
];

/* UX 케이스가 앞, 시스템 작업이 뒤 — lib/projects.ts 의 상세 페이지 순서와 같다 */
const WORKS: WorkSectionProps[] = [
  {
    title: "KEEPER APP 리스트뷰 UX 개선",
    href: "/work/keeper-listview",
    paragraphs: [
      "Keeper 리스트뷰의 탐색 구조를 전면 재설계했습니다. 기존 앱은 필터가 가로 스와이프 칩에 갇혀 있고 날짜 탐색이 불가능하며 카드 정보 구조가 일관되지 않아, 키퍼들의 업무 선택 효율이 크게 떨어진 상태였습니다.",
      "조건을 정해 좁힐 수도, 날짜로 건너뛸 수도 없는 리스트에서 키퍼가 할 수 있는 일은 스크롤뿐이었습니다.",
    ],
    meta: [
      { label: "Years", value: "2025" },
      { label: "Role", value: "정책 · PRD · UX/UI 설계" },
      {
        label: "Scope",
        value: (
          <>
            Mobile App,
            <br />
            UX Redesign
          </>
        ),
      },
      {
        label: "Link",
        value: (
          <span className="underline underline-offset-[var(--space-050)]">
            Case study ↗
          </span>
        ),
      },
    ],
    visuals: [
      {
        /* 상세 페이지 Hero 와 같은 이미지 — 목록과 상세가 같은 얼굴을 갖게 한다 */
        src: "/images/work/keeper-listview-hero.png",
        alt: "개선된 Keeper 앱 화면 세 개 — 업무 리스트, 날짜 선택 Bottom Sheet, 지점·동·층 필터 Bottom Sheet.",
        ratio: "wide",
        tone: "light",
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    title: "KEEPER DESIGN SYSTEM",
    href: "/work/kds",
    paragraphs: [
      "MUI 라이브러리로 만들어져 있던 Keeper Admin을 자체 디자인 시스템으로 재구축했습니다.",
      "shadcn/React 기반으로 33종 컴포넌트를 다시 설계·구현하고 전체 화면을 순차 이관하며, 토큰 파이프라인과 문서 사이트까지 시스템의 설계·구현·운영을 혼자 완결했습니다.",
    ],
    meta: [
      { label: "Years", value: "2025 – 2026" },
      { label: "Role", value: "Designer · Developer (1인)" },
      {
        label: "Scope",
        value: (
          <>
            Design Tokens, 33 Components,
            <br />
            Migration, Docs
          </>
        ),
      },
      {
        label: "Link",
        value: (
          <span className="underline underline-offset-[var(--space-050)]">
            Case study ↗
          </span>
        ),
      },
    ],
    visuals: [
      {
        /* 상세 페이지 Hero 와 같은 이미지 — 목록과 상세가 같은 얼굴을 갖게 한다 */
        src: "/images/work/kds-hero.png",
        alt: "왼쪽에 시맨틱 토큰 표와 프리미티브 색상 램프, 오른쪽에 Button 의 variant × state 매트릭스가 펼쳐진 화면.",
        ratio: "wide",
        tone: "light",
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    title: "SHEETS TO VARIABLES",
    paragraphs: [
      "Google Sheets의 언어팩·토큰 데이터를 Figma Variables로 동기화하는 플러그인을 만들었습니다.",
      "Apps Script로 시트 변경을 감지해 Slack으로 알리고, 플러그인에서 한 번에 반영합니다. 수작업 복사를 없애 디자인-데이터 불일치를 구조적으로 제거했습니다.",
    ],
    meta: [
      { label: "Years", value: "2026" },
      { label: "Role", value: "Design · Development" },
      {
        label: "Scope",
        value: (
          <>
            Figma Plugin, Apps Script,
            <br />
            Slack Integration
          </>
        ),
      },
    ],
    visuals: [
      {
        src: "/images/work/sheets-to-variables.svg",
        alt: "Google Sheets 와 Figma Variables 동기화",
        ratio: "wide",
        tone: "light",
        width: 960,
        height: 600,
      },
    ],
  },
  {
    title: "DESIGN REVIEW AGENT",
    paragraphs: [
      "토큰 정합성 검사와 컴포넌트 생성 절차를 AI 스킬로 만들어, 리뷰와 반복 작업을 자동화했습니다.",
      "하드코딩된 색상·간격 값을 잡아내고 Figma 스펙과 코드의 어긋남을 리포트합니다.",
    ],
    meta: [
      { label: "Years", value: "2026" },
      { label: "Role", value: "Workflow Design" },
      {
        label: "Scope",
        value: (
          <>
            Claude Skills, Figma API,
            <br />
            Token Validation
          </>
        ),
      },
    ],
    visuals: [
      {
        src: "/images/work/design-review-agent.svg",
        alt: "디자인 리뷰 에이전트 리포트",
        ratio: "wide",
        tone: "dark",
        width: 960,
        height: 600,
      },
    ],
  },
];

const BIO_KO =
  "디자인과 개발의 경계에서 일하는 디자이너-개발자입니다. B2B 어드민 제품의 디자인 시스템을 0부터 설계하고 직접 구현했습니다. Token Studio에서 시작해 Style Dictionary를 거쳐 CSS 변수로 빌드되는 토큰 파이프라인을 구축했고, Figma Code Connect로 디자인과 코드가 1:1로 대응되는 구조를 만들었습니다. 컴포넌트 라이브러리와 문서 사이트, 그리고 반복 작업을 자동화하는 AI 워크플로우까지 — 시스템의 설계와 구현, 운영을 한 사람의 손으로 완결했습니다.";

const BIO_EN =
  "I am a designer-developer working at the boundary between design and code. I built a design system for a B2B admin product from zero: a token pipeline running from Token Studio through Style Dictionary to CSS variables, a 1:1 design-to-code mapping via Figma Code Connect, a component library with a documentation site, and AI workflows that automate repetitive checks. I designed, implemented, and operated the whole system single-handedly.";

const BIO_TEXT =
  "text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)]";

export default function HomePage() {
  return (
    <>
      <Hero lines={STATEMENT} />

      {WORKS.map((work) => (
        <WorkSection key={work.title} {...work} />
      ))}

      <section className="grid grid-cols-2 gap-[var(--space-600)] border-t border-[var(--color-divider-alternative)] py-[var(--space-700)] max-[720px]:grid-cols-1 max-[720px]:gap-[var(--space-300)]">
        <p className={BIO_TEXT}>{BIO_KO}</p>
        <p className={BIO_TEXT} lang="en">
          {BIO_EN}
        </p>
      </section>
    </>
  );
}
