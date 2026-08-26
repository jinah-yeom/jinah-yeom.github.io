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

export default function HomePage() {
  return (
    <>
      <PageHero lines={STATEMENT} animate />

      <WorkGrid cards={WORKS} />
    </>
  );
}
