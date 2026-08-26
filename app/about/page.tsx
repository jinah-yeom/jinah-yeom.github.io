import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import AboutSection, {
  ABOUT_PARAGRAPH,
} from "@/components/about/AboutSection";
import AboutEntryList, {
  type AboutEntryItem,
} from "@/components/about/AboutEntry";
import CareerTable, { type CareerRow } from "@/components/about/CareerTable";
import ContactRow, { type ContactLink } from "@/components/about/ContactRow";

export const metadata: Metadata = {
  title: "About",
  description:
    "토큰을 단일 소스로 다루고, 도구를 직접 만들어 반복 작업을 구조로 옮기는 방식에 대하여.",
};

/*
 * 본문은 about-page.md 원문이다. 원문의 줄바꿈은 소스 서식이라 문단 단위로만
 * 옮기고, 문단 안의 강제 개행은 재현하지 않는다.
 */
const INFO: string[] = [
  "문제를 화면이 아니라 구조로 푸는 프로덕트 디자이너입니다. B2B SaaS 운영 콘솔부터 커머스, 현장 근무자용 앱까지, '일하는 사람의 도구'를 주로 설계해 왔습니다.",
  "디자인 시스템을 두 조직에서 구축했고, 스쿼드 리드로 정책 수립부터 QA까지 출시 전 과정을 책임졌습니다. 필요한 도구가 없으면 직접 만듭니다. Figma 플러그인을 개발해 배포하고, AI 워크플로우를 설계해 조직의 일하는 방식을 바꿔 왔습니다.",
  "좋은 디자인은 담당자가 바뀌어도 무너지지 않는 구조, 그리고 숫자로 증명되는 개선이라고 믿습니다.",
];

const STRENGTH: AboutEntryItem[] = [
  {
    title: "Design System, 0 to 1",
    body: "토큰 아키텍처부터 컴포넌트 라이브러리, Storybook과 문서 사이트까지. 0에서 한 번, 레거시 전면 재구축으로 한 번 — 디자인과 코드가 단일 기준을 참조하는 체계를 두 번 지었습니다.",
  },
  {
    title: "Define with Data",
    body: "조사로 문제를 정의하고, 출시 후 같은 지표로 검증합니다. 스크롤 반복 82%→36%, 확인 누락 100%→40%. 개선은 숫자로 말합니다.",
  },
  {
    title: "Build the Tools",
    body: "반복되는 문제는 도구로 해결합니다. Figma 플러그인을 직접 개발해 다국어 파이프라인을 자동화하고, AI 검사 도구로 시스템 규칙을 지킵니다.",
  },
  {
    title: "Design Every Case",
    body: "정상 플로우만이 아니라 엣지와 에러 케이스까지 정의합니다. 출시 후 명세 관련 재요청 0건. 예외 없는 설계가 협업의 언어입니다.",
  },
];

const PRINCIPLES: AboutEntryItem[] = [
  {
    title: "조사로 시작해서 지표로 끝냅니다",
    body: "감으로 시작한 프로젝트는 감으로 끝납니다. 문제를 숫자로 정의해야 개선도 숫자로 증명할 수 있습니다.",
  },
  {
    title: "규칙이 사람을 대신하게 만듭니다",
    body: "토큰 네이밍부터 코드 검사까지, 사람의 주의력에 기대는 품질은 반드시 무너집니다. 규칙을 구조에 심습니다.",
  },
  {
    title: "만들어서 검증합니다",
    body: "말로 설득하는 것보다 동작하는 프로토타입이 빠릅니다. 디자인과 구현의 경계를 좁히는 데 AI를 적극적으로 씁니다.",
  },
  {
    title: "상대의 우려를 설계합니다",
    body: "협업의 갈등은 대부분 리스크에 대한 확신 차이에서 옵니다. 우려를 정확히 찾아 해소하는 장치를 만드는 것까지가 디자인입니다.",
  },
];

const CAREER: CareerRow[] = [
  {
    period: "2025.06 – 2026.08",
    company: "열한시",
    role: "Product Designer",
    description:
      "공간 운영 B2B SaaS 'Keeper'의 디자인 시스템과 다국어 파이프라인을 구축하고, 스쿼드 리드로 앱 핵심 화면 개선을 이끌었습니다.",
  },
  {
    period: "2023.11 – 2025.02",
    company: "모던라이언",
    role: "Product Designer",
    description:
      "NFT 커머스 플랫폼 'KONKRIT'의 디자인 시스템 1.0을 0에서 구축하고, 결제·지갑 연결 플로우 개편으로 신규 전환율을 개선했습니다.",
  },
  {
    period: "2022.11 – 2023.06",
    company: "위시빈",
    role: "UX Designer",
    description:
      "여행 콘텐츠 플랫폼의 검색과 일정 관리 UX를 개선하고, 모바일·웹의 컴포넌트 정합성을 정비했습니다.",
  },
  {
    period: "2021.08 – 2022.11",
    company: "로셜컴퍼니",
    role: "UX Designer",
    description:
      "여행·라이프스타일 브랜드의 반응형 웹과 캠페인을 설계하고, 브랜드 가이드를 구축했습니다.",
  },
  {
    period: "2020.06 – 2021.06",
    company: "아메바",
    role: "UI Designer",
    description:
      "SK B tv GUI 리뉴얼에서 컴포넌트 기반 디자인 가이드를 만들어 작업 시간을 20% 단축했습니다.",
  },
  {
    period: "2017.11 – 2019.05",
    company: "북이십일",
    role: "Web Designer",
    description:
      "출판 브랜드의 디지털 접점을 담당하며 상세페이지와 랜딩을 50건 이상 제작했습니다.",
  },
];

const CONTACT_LINKS: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/jinah-yeom" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yja1019/" },
  { label: "Email", href: "mailto:jiinah1019@gmail.com" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero lines={["About"]} />

      {/* 프로토타입의 .ab-section + .ab-section 규칙 — 첫 섹션엔 구분선을 넣지 않는다 */}
      <div className="[&>section+section]:border-t [&>section+section]:border-[var(--color-divider-alternative)]">
        <AboutSection label="Info">
          <div className="flex flex-col gap-[var(--space-250)]">
            {INFO.map((paragraph) => (
              <p key={paragraph} className={ABOUT_PARAGRAPH}>
                {paragraph}
              </p>
            ))}
          </div>
        </AboutSection>

        <AboutSection label="Strength">
          <AboutEntryList items={STRENGTH} />
        </AboutSection>

        <AboutSection label="Principles">
          <AboutEntryList items={PRINCIPLES} />
        </AboutSection>

        {/* 표에 가까운 내용이라 읽기 폭 제한을 푼다 */}
        <AboutSection label="Career" wide>
          <CareerTable rows={CAREER} />
        </AboutSection>

        <AboutSection label="Contact">
          <ContactRow id="contact" links={CONTACT_LINKS} />
        </AboutSection>
      </div>
    </>
  );
}
