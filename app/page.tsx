import PageHero from "@/components/layout/PageHero";
import WorkGrid, { type WorkCard } from "@/components/home/WorkGrid";

const STATEMENT = [
  "Hey! I'm Jinah, a designer",
  "who brings clarity and structure",
  "into complex product experiences.",
];

/* UX 케이스가 앞, 시스템 작업이 뒤 — lib/projects.ts 의 상세 페이지 순서와 같다 */
const WORKS: WorkCard[] = [
  {
    title: "KEEPER APP 리스트뷰 UX 개선",
    href: "/work/keeper-listview",
    thumbnail: {
      src: "/images/work/keeper-listview-hero.png",
      alt: "개선된 Keeper 앱 화면 세 개 — 업무 리스트, 날짜 선택 Bottom Sheet, 지점·동·층 필터 Bottom Sheet.",
      width: 1920,
      height: 1080,
    },
    tags: ["B2B Mobile App", "Task List", "UX Redesign"],
  },
  {
    title: "KEEPER DESIGN SYSTEM",
    href: "/work/kds",
    thumbnail: {
      src: "/images/work/kds-hero.png",
      alt: "왼쪽에 시맨틱 토큰 표와 프리미티브 색상 램프, 오른쪽에 Button 의 variant × state 매트릭스가 펼쳐진 화면.",
      width: 1920,
      height: 1080,
    },
    tags: ["B2B Admin", "Design System Replatforming"],
  },
  {
    title: "KEEPER ADMIN 소모품 구매",
    href: "/work/keeper-supplies",
    thumbnail: {
      /* 상세 페이지 Hero 와 같은 이미지 — 목록과 상세가 같은 얼굴을 갖게 한다 */
      src: "/images/work/supplies-hero.png",
      alt: "Keeper Admin 소모품구매 상품 목록 화면 — 조직별 탭과 폴더 칩 아래로 상품명·판매가·판매상태·카테고리가 열로 놓인 표.",
      width: 1920,
      height: 1080,
    },
    tags: ["B2B Admin", "Procurement"],
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
      <PageHero lines={STATEMENT} animate />

      <WorkGrid cards={WORKS} />

      {/* 페이지의 마지막 블록이라 아래 여백은 두지 않는다 — 그 자리는 main 의 --site-page-mb 가 갖는다 */}
      <section className="grid grid-cols-2 gap-[var(--space-600)] border-t border-[var(--color-divider-alternative)] pt-[var(--space-700)] max-[720px]:grid-cols-1 max-[720px]:gap-[var(--space-300)]">
        <p className={BIO_TEXT}>{BIO_KO}</p>
        <p className={BIO_TEXT} lang="en">
          {BIO_EN}
        </p>
      </section>
    </>
  );
}
