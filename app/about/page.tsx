import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import AboutSection, {
  type AboutItem,
} from "@/components/about/AboutSection";
import ContactRow, { type ContactLink } from "@/components/about/ContactRow";

export const metadata: Metadata = {
  title: "About",
  description:
    "토큰을 단일 소스로 다루고, 도구를 직접 만들어 반복 작업을 구조로 옮기는 방식에 대하여.",
};

const HOW_I_THINK: AboutItem[] = [
  {
    title: "토큰은 단일 소스다",
    ko: {
      paragraphs: [
        "색상과 간격, 서체가 하나의 출처에서 생성될 때 디자인과 코드는 같은 언어로 말하게 됩니다. 저는 하드코딩된 스타일 값을 시스템의 부채로 봅니다. 값 하나를 고치기 위해 파일 수십 개를 뒤지는 비용은 결국 일관성의 붕괴로 이어지기 때문입니다. 그래서 모든 스타일이 토큰을 참조하도록 파이프라인을 설계하고, 스크립트로 위반을 잡아내는 구조를 만듭니다.",
      ],
    },
    en: {
      paragraphs: [
        "When color, spacing, and type are generated from a single source, design and code speak the same language. I treat hardcoded style values as system debt — the cost of hunting through dozens of files to change one value eventually collapses consistency. So I design pipelines where every style references a token, and build scripts that catch violations automatically.",
      ],
    },
  },
  {
    title: "좋은 컴포넌트는 앱의 사정을 모른다",
    ko: {
      paragraphs: [
        "컴포넌트가 자신이 어디에 쓰이는지 알기 시작하면 재사용성은 끝납니다. 콜백을 쏘고 슬롯을 열어둘 뿐, 앱의 로직을 소유하지 않는 것 — 이것이 제가 컴포넌트 API를 설계할 때 지키는 원칙입니다. Figma의 boolean prop이 코드에서 ReactNode 슬롯이 되는 이유도 같습니다. 호출하는 쪽이 내용을 주입하고, 컴포넌트는 구조만 책임집니다.",
      ],
    },
    en: {
      paragraphs: [
        "The moment a component knows where it is used, reusability ends. It should fire callbacks and expose slots without owning app logic — the principle I hold when designing component APIs. It is also why a Figma boolean becomes a ReactNode slot in code: callers inject content, and the component is responsible only for structure.",
      ],
    },
  },
  {
    title: "같은 텍스트가 같은 의미는 아니다",
    ko: {
      paragraphs: [
        "i18n 키를 정리하며 배운 것입니다. 표시되는 문자열이 같다고 섣불리 키를 합치면, 한쪽만 바뀌어야 하는 순간 결합 비용이 돌아옵니다. 눈에 보이는 중복보다 맥락의 차이를 먼저 봐야 합니다. 이 감각은 토큰 네이밍과 컴포넌트 분리 판단에도 똑같이 적용됩니다.",
      ],
    },
    en: {
      paragraphs: [
        "A lesson from governing i18n keys: merging keys just because the visible strings match brings coupling costs back the moment one instance needs to diverge. Context matters more than visible duplication — a sense that applies equally to token naming and component boundaries.",
      ],
    },
  },
];

const HOW_I_WORK: AboutItem[] = [
  {
    title: "스카우트 먼저, 코드는 나중에",
    ko: {
      paragraphs: [
        "구현 전에 반드시 Figma 스펙과 기존 코드를 먼저 읽습니다. 발견한 것을 보고하고, 방향을 확인받은 뒤, 작은 단위의 diff로 나눠 진행합니다. API 스펙 확인 → 구조 스캔 → 텍스트 추출 → 갭 리포트 → 수정으로 이어지는 검증 파이프라인을 만들어 핸드오프 전에 어긋남을 잡습니다.",
      ],
    },
    en: {
      paragraphs: [
        "Before writing code, I read the Figma spec and the existing codebase first. I report findings, confirm direction, then proceed in small reviewable diffs. A validation pipeline — spec check, structure scan, text extraction, gap report, fix — catches mismatches before handoff.",
      ],
    },
  },
  {
    title: "도구를 만드는 것도 디자인이다",
    ko: {
      paragraphs: [
        "반복되는 확인 작업은 사람이 아니라 구조가 해야 한다고 믿습니다. 토큰 정합성 검사 스크립트, 시트-피그마 동기화 플러그인, 컴포넌트 생성 스킬 같은 도구를 직접 만들어 팀의 실수 가능성을 줄였습니다. 도구가 규칙을 지켜주면 사람은 판단에 집중할 수 있습니다.",
      ],
    },
    en: {
      paragraphs: [
        "Repetitive verification belongs to structure, not people. I build the tools myself — token-compliance scripts, a Sheets-to-Figma sync plugin, component-generation skills — so that rules are enforced by tooling and people can focus on judgment.",
      ],
    },
  },
];

const STRENGTHS: AboutItem[] = [
  {
    title: "설계부터 배포까지, 한 사람의 손으로",
    ko: {
      paragraphs: [
        "디자인 시스템의 전 과정을 혼자 완결할 수 있습니다. Figma에서의 토큰 설계와 컴포넌트 스펙, Next.js 구현, 문서화, 배포 파이프라인까지 다른 손을 거치지 않습니다.",
      ],
      list: [
        "디자인 시스템 재구축 — CSS 변수 346개, 컴포넌트 33종",
        "Token Studio → Style Dictionary → CSS 변수 파이프라인 설계",
        "Figma Code Connect로 디자인-코드 1:1 매핑 운영",
        "AI 워크플로우 구축 — 토큰 검사·컴포넌트 생성 자동화",
      ],
    },
    en: {
      paragraphs: [
        "I can complete the entire design-system lifecycle alone — token architecture and component specs in Figma, implementation in Next.js, documentation, and the deployment pipeline, without handing off to anyone.",
      ],
      list: [
        "Rebuilt a product on an in-house design system — 346 CSS variables, 33 components",
        "Designed the Token Studio → Style Dictionary → CSS pipeline",
        "Operated 1:1 design-to-code mapping via Figma Code Connect",
        "Automated token checks and component generation with AI workflows",
      ],
    },
  },
];

/*
 * TODO: LinkedIn URL, 공개용 이메일 주소가 정해지면 href 를 채운다.
 * href 가 없는 항목은 비활성 칩으로 렌더된다 (죽은 링크를 만들지 않기 위해).
 */
const CONTACT_LINKS: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/jinah-yeom" },
  { label: "LinkedIn" },
  { label: "Email" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero lines={["About"]} />

      {/* 프로토타입의 .ab-section + .ab-section 규칙 — 첫 섹션엔 구분선을 넣지 않는다 */}
      <div className="[&>section+section]:border-t [&>section+section]:border-[var(--color-divider-alternative)]">
        <AboutSection category="How I Think" items={HOW_I_THINK} />
        <AboutSection category="How I Work" items={HOW_I_WORK} />
        <AboutSection category="Strengths" items={STRENGTHS}>
          <ContactRow id="contact" links={CONTACT_LINKS} />
        </AboutSection>
      </div>
    </>
  );
}
