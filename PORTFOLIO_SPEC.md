# jinah-yeom.github.io 구현 지시문

## 목표
`portfolio-prototype.html`(프로젝트 루트에 있음)을 시각 기준으로 삼아, 이 Next.js 프로젝트를 포트폴리오 + 기술 블로그 사이트로 구현한다. 프로토타입은 구조·타이포·간격·톤의 기준이며, 코드는 그대로 옮기지 말고 Next.js/React 방식으로 재구현한다.

## 제약 (절대 규칙)
- **GitHub Pages static export** 유지: `output: "export"` 삭제 금지. API Route, 서버 액션, SSR 사용 금지. dynamic route는 `generateStaticParams` 필수.
- **토큰 시스템**: 프로토타입 상단 `:root` 블록을 `app/tokens.css`로 분리해 전역 로드. 모든 색상·간격·서체·반경은 `var(--token-name)` 참조. HEX/rgb/px 하드코딩 금지. Tailwind 기본 팔레트(bg-gray-500 등) 금지 — `bg-[var(--color-gray-950)]` 형태로 사용.
- **모노톤**: 유채색 토큰(blue/red/green 등) 사용 금지. gray 스케일 + label/divider 시맨틱 토큰만.
- **폰트**: Pretendard. CDN 대신 `public/fonts`에 셀프호스팅 (npm pretendard → woff2 복사) 권장.

## 페이지 구조
```
/            홈: garri식 히어로(대형 스테이트먼트 3줄) → 워크 섹션 ×4 → 국영문 2단 소개
/work/kds    KDS 상세: 좌측 사이드 내비 + 인포박스 + 문서형 본문 (프로토타입 참조)
/blog        글 목록 (날짜 역순)
/blog/[slug] 개별 글 — content/blog/*.mdx 기반, generateStaticParams로 정적화
/about       How I Think / How I Work / Strengths — 소제목별 국영문 2단
```

## 공통 레이아웃
- 헤더: 3분할 그리드 — 좌 `JINAH YEOM`(홈 링크) / 중앙 `WORK ABOUT BLOG` / 우 `CONTACT`
- 활성 내비: 밑줄(border-bottom) 표시. hover는 색상 전환만
- 링크 hover는 underline (색 변화 아님)

## 워크 섹션 (홈, 4개)
좌 300px 텍스트 / 우 이미지, 순서:
1. Keeper APP 리스트뷰 UX 개선 → /work/keeper-listview 링크
2. Keeper Design System → /work/kds 링크
3. Sheets to Variables
4. Design Review Agent

KDS Documentation 은 별도 섹션이 아니라 KDS 케이스 스터디의 Solution 으로 들어간다 — 문서 사이트는 시스템의 일부이지 별개 작업이 아니다.

각 섹션: 대문자 제목 → 문단 1–2개 → 메타 표(Years/Role/Scope/Link, 라벨-값 행 + 상단 보더). 텍스트는 프로토타입 문구 사용. 이미지는 `public/images/work/` 플레이스홀더로 두고 `<Image>` 자리만 잡을 것 (unoptimized).

## 블로그 (MDX)
- `content/blog/*.mdx` + frontmatter(title, description, date)
- 목록: 프로토타입 post-list 스타일 (제목/설명 좌, 날짜 우, divider)
- 첫 글 1개는 샘플로 생성 (제목: "Style Dictionary 커스텀 transform 삽질기", 본문은 TODO 표시)
- 빌드 시 RSS 생성은 후순위 (TODO 주석만)

## FAB 챗봇
- 우하단 fixed FAB(●) → 다크 패널 (gray-950 배경)
- v1은 FAQ 봇: 추천 질문 칩 4개 + 준비된 답변 (프로토타입의 answers 객체 재사용), 자유 입력은 폴백 응답
- 답변 데이터는 `lib/chatbot-data.ts`로 분리 — 이후 LLM 프록시로 교체 가능한 인터페이스로 (async answer(question): string 형태)

## 컴포넌트 분리 가이드
- `components/layout/Header.tsx`, `Footer.tsx`
- `components/home/Hero.tsx`, `WorkSection.tsx` (props: title, paragraphs, meta[], visual, href)
- `components/blog/PostList.tsx`
- `components/chat/ChatFab.tsx`, `ChatPanel.tsx`
- Props는 interface로 정의, 기본값 설정

## 진행 방식
1. 토큰 CSS 분리 + 레이아웃(헤더/푸터/코너) 먼저 → 확인
2. 홈(히어로 + 워크 섹션 + 소개) → 확인
3. /work/kds, /about → 확인
4. 블로그(MDX 파이프라인) → 확인
5. 챗봇 → 확인
각 단계마다 `npm run build`로 export 통과 확인 후 커밋. 커밋 메시지는 한국어 + 시맨틱 prefix.
