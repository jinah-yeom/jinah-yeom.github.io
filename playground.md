# Playground 페이지 적용 가이드

## 적용 순서

1. `images/` 폴더 전체를 사이트 저장소의 `public/playground/` 로 복사
2. `playground.astro` 를 `src/pages/playground.astro` 로 복사
3. 사이트 공통 레이아웃(예: BaseLayout)이 있으면 파일 상단·하단의 주석 처리된 래퍼를 해제
4. 네비게이션에 링크 추가: Work — About — Blog — **Playground** (맨 뒤)

## 사이트 토큰 연결

`.pg` 블록의 CSS 변수 4개(`--pg-bg`, `--pg-fg`, `--pg-muted`, `--pg-line`)는
사이트에 `--color-bg` 등의 토큰이 정의돼 있으면 자동으로 그걸 따릅니다.
토큰명이 다르면 fallback 값 위치만 바꾸면 됩니다. 다크모드는 `prefers-color-scheme` 기준.

## 캡션 수정

`playground.astro` 상단 `works` 배열에서 수정. 항목 순서 = 그리드 노출 순서.
현재 정렬 원칙: 강한 작업(WELLFISH)이 첫 화면, 오래된 작업(Btv)이 마지막.

두레블 연도는 5항목 모두 `2022` 로 채워져 있음.

## 큐레이션 판정 기록 (2026.08 기준)

포함 (30장):
- WELLFISH 3 — 아이덴티티·패키지·옥외. Behance 공개작
- HI-FIVE 3 — 집행된 행사 그래픽
- IPSL 3 — 집행된 행사 그래픽 (인쇄용 포스터 포함)
- 한강그룹 2 — 웹사이트
- 두레블 5 — 모바일/웹 화면
- 아치미당 3 — 박스 패키지, 병 패키지, SNS 콘텐츠 (2022)
- B tv 11 — 가이드라인, 배너 규격, TV 시리즈 2, 영화 배너 모음,
  영화 프로모션, 배너·이벤트 모음, 키즈 4

미포함 (원본 PDF p1):
- B tv 홈 화면 종합 — 한때 넣었다가 다시 뺌
  (같은 PDF p4 의 B tv 영화 배너 모음은 포함으로 확정)

리스크 메모 (2026.08): B tv 프로모션·키즈 컷에는 디즈니·뽀로로 등 타사 IP와
제휴 브랜드 요소가 화면의 주인공으로 포함됨. 게재는 본인 결정으로 진행
(문제 제기 시 해당 컷만 works 배열에서 제거하면 즉시 내려감).

추후 추가 예정:
- LOCIAL Website — Behance 원본 이미지 확보 후 wellfish 앞이나 뒤에 배치
- WELLFISH 가이드라인 컷 — Behance 게시물에서 추가 확보 가능

## 이미지 추가 방법

1. 원본을 WebP로 변환 (긴 변 1800px, 품질 82 권장)
2. `public/playground/` 에 추가
3. `works` 배열에 항목 추가
