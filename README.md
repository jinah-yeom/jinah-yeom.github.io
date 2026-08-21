# jinah-yeom.github.io — 포트폴리오 & 기술 블로그

> 디자인 시스템을 설계하고 코드로 직접 완성하는 디자이너-개발자의 포트폴리오 사이트입니다.
> 사이트의 모든 스타일은 직접 구축한 **KDS(Keeper Design System) 토큰**으로 렌더링됩니다 — 이 사이트 자체가 디자인 시스템의 데모입니다.

---

## 바로가기

| 항목 | 링크 |
| --- | --- |
| 웹사이트 | **[jinah-yeom.github.io](https://jinah-yeom.github.io)** |
| 대표 케이스 스터디 | [Keeper 리스트뷰 UX 개선](https://jinah-yeom.github.io/work/keeper-listview) — 정책·PRD·설계·스프린트 1인 완결 |
| 디자인 시스템 | [Keeper Design System](https://jinah-yeom.github.io/work/kds) — CSS 변수 346개 · 컴포넌트 33종 · MUI → 자체 시스템 재구축 |

---

## 프로젝트 개요

| 항목 | 내용 |
| --- | --- |
| 유형 | 개인 프로젝트 / 포트폴리오 웹 / 기술 블로그 |
| 담당 범위 | 기획 · 디자인 · 개발 · 콘텐츠 전 과정 (1인) |
| 진행 형태 | 스펙 문서 기반 AI 에이전트 협업 — 전략·검토는 Claude, 구현은 Claude Code |
| 사용 도구 | Figma, Next.js, Claude / Claude Code, ffmpeg, GitHub Actions |

---

## 특징

### 토큰이 곧 규칙이다

- 모든 색상·간격·서체·반경은 `var(--token)` 참조 — 하드코딩 0 (브레이크포인트 리터럴 제외: Tailwind arbitrary variant 제약)
- Tailwind 기본 팔레트를 `@theme { --color-*: initial }` 로 빌드 단계에서 차단 — `bg-gray-500` 같은 위반은 리뷰가 아니라 **빌드 실패**로 드러남
- 사이트 고유 값(헤더 높이, 콘텐츠 폭 등)은 `--site-*` 네임스페이스로 분리해 디자인 시스템 토큰을 오염시키지 않음
- 원본 토큰의 버그(duration 단위 오류)는 포크에서 교정하고 파일 상단에 원본과의 차이를 주석으로 명시

### 정적 사이트, 자동 배포

- Next.js static export → GitHub Actions → GitHub Pages
- 블로그는 MDX 파이프라인 — 파일 추가만으로 라우트 자동 생성, frontmatter 형식 오류는 빌드 실패로 차단
- 이미지 최대 1920px(스펙 문서에 규격 명시) · 영상은 ffmpeg h264 + faststart 압축과 poster 추출로 일관 처리

### 인터페이스 디테일

- FAB 챗봇 — 질문 카드형 FAQ 봇, 응답 로직을 `answer(question: string): Promise<ChatReply>` 인터페이스로 분리해 LLM 교체 가능한 구조
- 접근성 — 모바일 메뉴·챗봇의 `aria-modal` 다이얼로그 처리(닫힘 상태 탭 순서 제외), `prefers-reduced-motion` 시 영상 정지 + poster 복원, 스크린리더 기준의 정직한 `aria-*`
- sticky 헤더 높이를 토큰으로 고정하고 `scroll-padding-top` 하나로 모든 앵커 오프셋을 파생

---

## 작업 방식

기획·검토와 구현을 분리한 AI 협업 파이프라인로 만들었습니다.

| 단계 | 수행 | 도구 |
| --- | --- | --- |
| 전략 · 구조 설계 | 레퍼런스 분석, HTML 프로토타이핑, 스펙 문서 작성 | Claude |
| 구현 | 스펙 기반 단계별 구현, 매 단계 빌드 게이트 후 커밋 | Claude Code |
| 검증 | `tsc` · `eslint` · 클린 빌드 · 프리렌더 HTML 대조 | — |
| 콘텐츠 검수 | 본문-이미지 사실 정합성 전수 검색, 참조 문서 동기화 | Claude |

구현 규칙은 `PORTFOLIO_SPEC.md`(사이트)와 `PROJECT_DETAIL_SPEC.md`(케이스 스터디 템플릿)에 문서화되어 있으며, 페이지와 참조 문서가 어긋나면 페이지를 진실로 삼아 문서를 동기화합니다.

---

## 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| 프레임워크 | Next.js (App Router, static export), React |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4 + KDS 디자인 토큰 (CSS 커스텀 프로퍼티) |
| 콘텐츠 | MDX (`@next/mdx` + remark-frontmatter) |
| 폰트 | Pretendard Variable — dynamic subset 셀프호스팅 |
| 배포 | GitHub Actions → GitHub Pages |

---

## 비공개 정보 보호

이 저장소는 개인 포트폴리오 목적으로 관리합니다. 실무 프로젝트의 화면과 데이터는 포트폴리오 목적에 맞게 더미 데이터로 재구성되며, 기업의 비공개 정보 · 개인정보 · 운영 데이터는 포함하지 않습니다.

## 저작권

© 2026 Jinah Yeom. 포트폴리오 이미지와 케이스 스터디 콘텐츠의 무단 사용을 금합니다.
