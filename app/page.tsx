import PageHero from "@/components/layout/PageHero";
import WorkGrid, { type WorkCard } from "@/components/home/WorkGrid";

const STATEMENT = [
  "Hey! I'm Jinah, a designer",
  "who brings clarity and structure",
  "into complex product experiences.",
];

/* 제품 단위로 묶어 Keeper 셋, KONKRIT 둘, 위시빈 순 — lib/projects.ts 의 상세 페이지 순서와 같다 */
const WORKS: WorkCard[] = [
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
    title: "KONKRIT Partner Center",
    href: "/work/konkrit-partnercenter",
    thumbnail: {
      /* 상세 Hero 와 같은 파일 — 목록과 상세가 같은 얼굴을 갖게 한다 */
      src: "/images/work/konkrit-login.png",
      alt: "노트북 목업 화면에 열린 KONKRIT 파트너센터 로그인 화면 — 로고와 '파트너센터' 아래로 이메일 ID·비밀번호 입력란과 로그인·회원가입 버튼이 놓인다.",
      width: 3200,
      height: 1800,
    },
    tags: ["B2B Admin", "IA", "UX Flow"],
  },
  {
    title: "KONKRIT 3.0 UX 개편",
    href: "/work/konkrit-app",
    thumbnail: {
      /* 상세 Hero 와 같은 파일 — 목록과 상세가 같은 얼굴을 갖게 한다 */
      src: "/images/work/konkrit-app-hero.png",
      alt: "KONKRIT 앱 홈 화면이 켜진 아이폰을 아래쪽에서 비스듬히 당겨 찍은 목업 — 공연 배너 카드 아래로 Home·Discovery·Item·Account 탭바가 놓인다.",
      width: 3200,
      height: 1800,
    },
    tags: ["Mobile App", "NFT", "UX Strategy"],
  },
  {
    title: "위시빈 여행기 UX 개선",
    href: "/work/wishbeen",
    thumbnail: {
      /* 상세 Hero 와 같은 파일 — 목록과 상세가 같은 얼굴을 갖게 한다 */
      src: "/images/work/wishbeen-hero.png",
      alt: "위시빈 여행기 상세 화면이 켜진 스마트폰 목업 — 청록색 프로그래스 바 아래로 DAY 3 제목과 장소 경로가 놓인다.",
      width: 3200,
      height: 1800,
    },
    tags: ["Mobile App", "Content UX", "Travel"],
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
