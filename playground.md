# Playground 큐레이션 기록

Astro 산출물로 넘어온 페이지를 Next.js App Router 로 이식해 둔 상태다.
이 문서는 무엇을 왜 실었는지에 대한 기록이고, 앞으로 손댈 때 필요한 절차만
남긴다.

## 이식 완료 상태

| | |
|---|---|
| 페이지 | `app/playground/page.tsx` |
| 그리드·라이트박스 | `components/playground/PlaygroundGrid.tsx`, `PlaygroundLightbox.tsx` |
| 데이터 | `lib/playground.ts` 의 `PLAYGROUND_WORKS` |
| 이미지 | `public/playground/` |
| 내비 | `components/layout/Header.tsx` 의 `NAV_ITEMS` 맨 뒤 (모바일 메뉴도 이 배열을 쓴다) |

산출물의 `.pg` 변수 블록(`--pg-bg/fg/muted/line`)과 fallback 값은 없앴다.
색은 사이트 토큰을 직접 쓴다 — 썸네일 면이 `--color-background-normal`,
보더가 `--color-divider-normal` 이고, 글자색은 `body` 에서
`--color-label-normal` 을 물려받는다. 어두운 면 위에 뜨는 라이트박스는 챗
패널과 같은 gray 단계를 쓴다. 사이트가 라이트 전용이라 다크모드 블록은 뺐고,
스케일에 없던 값은 `--site-lightbox-width` 하나뿐이다.

## 캡션 수정

`lib/playground.ts` 의 `PLAYGROUND_WORKS` 에서 고친다. 배열 순서 = 그리드
노출 순서이고, 정렬 원칙은 강한 작업(WELLFISH)이 첫 화면, 오래된 작업(B tv)이
마지막이다. 문구를 고쳐도 순서는 건드리지 않는다.

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

## 이미지 추가·교체 방법

1. 원본을 WebP 로 변환한다 — **긴 변 1800px, 품질 82**. 지금 실린 전부가
   이 규격이다.
2. `public/playground/` 에 넣는다.
3. `lib/playground.ts` 의 `PLAYGROUND_WORKS` 에 항목을 더한다.
   - `src` 는 `/playground/<파일명>.webp`
   - `title` · `client` · `year` 는 캡션에 그대로 나온다 (`제목 · 클라이언트 · 연도`)
   - `width` · `height` 는 실측값을 적는다 — 지연 로딩 중 열이 튀지 않게 잡아 두는 값이다
   - `tall` 은 세로로 긴 이미지에만 `true`. 지금은 아무 동작도 걸려 있지 않고
     보존만 하는 필드다
4. 이 문서의 큐레이션 기록(장수·구성)도 함께 고친다.

**이미지 파일과 배열 항목은 한 커밋으로 묶는다.** 한쪽만 바뀌면 배열이 없는
파일을 가리켜 그 자리가 깨진다 — 실제로 파일만 먼저 바꿨다가 어긋난 적이 있다.
빼는 경우도 같다: 배열 항목 제거와 파일 삭제를 함께 한다.
