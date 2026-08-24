# 프로젝트 상세 페이지 구현 스펙 (v2 템플릿)

## 목표
`포트폴리오_웹_템플릿.md`(프로젝트 루트)의 14섹션 템플릿을 재사용 가능한 컴포넌트 세트로 구현하고, 첫 케이스로 **Keeper APP 리스트뷰 UX 개선** 페이지를 만든다. 콘텐츠는 템플릿 파일의 예시 본문을 그대로 사용한다.

## 라우트
| 라우트 | 프로젝트 | 템플릿 |
|---|---|---|
| `app/work/keeper-listview/page.tsx` | Keeper APP 리스트뷰 UX 개선 | v2 기준선 |
| `app/work/kds/page.tsx` | Keeper Design System | v2 확장형 |
| `app/work/keeper-supplies/page.tsx` | Keeper Admin 소모품 구매 | v2 기준선 (미디어 전부 플레이스홀더) |

노출 순서는 `lib/projects.ts` 의 `PROJECTS` 배열이 정한다 — 홈 워크 그리드와 이전/다음 내비가 같은 배열을 본다.

이후 프로젝트가 같은 컴포넌트를 재사용하므로, 페이지는 조립만 하고 표현은 전부 `components/project/`에 둔다.

## 컴포넌트 분해 (components/project/)
| 컴포넌트 | 템플릿 섹션 | 비고 |
|---|---|---|
| `ProjectHero` | 1 | 태그 칩 배열 + 소제목 + 제목 + 한 줄 정의 + 대표 이미지 슬롯 |
| `MetaGrid` | 2 | 5칸 (Timeline/Product/Team/Role/Tools), 모바일 2열→1열 스택 |
| `ImpactStats` | 4 | 큰 숫자 강조 (before → after), 캡션. 숫자는 `--font-size-500` 이상 |
| `ProseSection` | 3,5,10,11,12 | 섹션 라벨(eyebrow) + 주장형 헤드라인 + 문단 |
| `ProblemBlock` | 6 | 독립 블록 반복. 헤드라인 + 본문 |
| `ApproachList` | 7 | 볼드 리드-인 문단 반복 |
| `SolutionBlock` | 8,9 | 헤드라인 + 본문 + 이미지 슬롯(캡션 포함) |
| `ImageSlot` | 공통 | 플레이스홀더 → 추후 실제 이미지 교체. aspect 지정 가능 |
| `NextCase` | 13 | 썸네일 + 프로젝트명 + 태그 + 목록 복귀 링크 |
| `ContactCta` | 14 | 프로젝트 페이지 공통 푸터. Email/이력서/LinkedIn — 값 없는 항목은 비활성 칩 (About과 동일 규칙) |

Props는 interface, 콘텐츠는 페이지에서 데이터로 주입 (JSX 하드코딩 최소화). 다음 프로젝트에서 페이지 파일만 복제하면 되는 구조가 목표.

## 스타일 규칙 (기존과 동일)
- 전부 KDS 토큰, 모노톤. 본문 폭 `--site-width-content`(960px), 긴 프로즈는 680px 내외 max-width로 읽기 폭 제한
- 섹션 사이 여백 `--space-800` 이상 — 케이스 스터디는 호흡이 길어야 함
- Impact 숫자, Problem 헤드라인 등 위계는 크기·굵기로만
- **라이트/다크 이미지 스왑은 구현하지 않음** — 사이트가 라이트 단일 모드. 템플릿의 해당 항목은 무시

## 콘텐츠 처리
- 템플릿 파일의 예시 본문(한국어)을 그대로 사용. 임의 수정·요약 금지
- 이미지 자리는 전부 `ImageSlot` 플레이스홀더 + 어떤 이미지가 들어갈지 캡션 텍스트로 표기 (예: "as-is/to-be — 날짜 탐색")
- "프로토타입 링크", "컴포넌트 링크" 등 링크류는 TODO 주석 + 비활성 표시
- **이미지 규격: 가로 최대 1920px, 가급적 WebP (없으면 PNG).** `next.config.ts`가 `images.unoptimized`(static export 필수)라 Next가 리사이즈·포맷 변환을 하지 않고 원본이 그대로 내려간다 — 넣기 전에 줄일 것. 리사이즈는 `sips --resampleWidth 1920 <파일> --out <파일>`. 히어로처럼 첫 화면에 보이는 이미지는 `ImageSlot`에 `priority` 지정
- **영상 규격: ffmpeg h264, crf 28, faststart, 무음(`-an`), poster jpg 추출.** 자동재생 영상은 소리가 없어야 하고, faststart 라야 다운로드 완료 전에 첫 프레임이 뜬다. poster 는 `prefers-reduced-motion` 일 때 정지 화면으로도 쓰인다
- Next Case: "Keeper Admin 소모품 구매 기능" — 아직 페이지 없으므로 링크 없이 썸네일 플레이스홀더만

## 홈 연결
- 홈 워크 섹션에 이 프로젝트 추가 — **KDS 위, 맨 앞**에 배치 (UX 케이스가 앞, 시스템 작업이 뒤 순서)
- 좌측 텍스트: Overview 첫 문단 축약 + 메타(Years 2025 / Role 정책·PRD·UX/UI 설계 / Scope Mobile App, UX Redesign / Link Case study ↗ → /work/keeper-listview)
- 우측 비주얼: 세로 3:4 × 2장 슬롯 (모바일 화면이므로)

## 진행 방식
1. 컴포넌트 세트 + 페이지 골격 → 빌드 확인 → 보고
2. 콘텐츠 주입 + 홈 연결 → 빌드 확인 → 보고
단계마다 커밋.

`/work/kds` 는 v2 템플릿의 **확장형**이다 — 섹션 eyebrow 에 번호 체계, Impact 부활, 코드 비교·표·플로우·원칙 블록이 더해진다. keeper-listview 가 템플릿 기준선이고 이쪽 구조를 되돌려 반영하지 않는다.
