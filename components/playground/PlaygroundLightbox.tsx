"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { PlaygroundWork } from "@/lib/playground";

export interface PlaygroundLightboxProps {
  works: PlaygroundWork[];
  /** 펼쳐 볼 작업의 인덱스. null 이면 닫힘 */
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

/*
 * 어두운 면 위의 컨트롤. 원본의 흰색 알파(0.08 → hover 0.18)에 해당하는
 * 토큰이 없어 gray 단계로 옮긴다 — 챗 패널이 어두운 면 UI 를 그리는 방식과 같다.
 * 크기는 --site-tap-target(44px) 이 원본 44px 과 같은 값이다.
 *
 * z 는 형제 순서를 이기려고 둔다. × 와 ← 는 figure 보다 앞에 있어서, 겹치는
 * 자리에서 이미지 아래로 깔린다. 사이트 전역 쌓임 순서(--site-z-*)와는
 * 무관한 다이얼로그 안쪽만의 값이다.
 */
const CONTROL =
  "fixed z-[2] flex h-[var(--site-tap-target)] w-[var(--site-tap-target)] items-center justify-center rounded-[var(--radius-900)] bg-[var(--color-gray-900)] text-[length:var(--font-size-100)] text-[var(--color-label-inverse)] transition-colors duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] hover:bg-[var(--color-gray-800)]";

/* ←/→ 는 좁은 화면에서 이미지 좌우를 가리므로 아래로 내려 나란히 세운다 */
const NAV = `${CONTROL} top-1/2 -translate-y-1/2 max-[560px]:top-auto max-[560px]:bottom-[var(--space-250)] max-[560px]:translate-y-0`;

export default function PlaygroundLightbox({
  works,
  index,
  onClose,
  onPrev,
  onNext,
}: PlaygroundLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  /*
   * 배경 스크롤 잠금. showModal() 은 뒤 페이지가 휠로 밀리는 것까지는 막지
   * 않아서, 확대해 보는 동안 배경이 따라 움직인다. 모바일 메뉴·챗 패널과
   * 같은 방식으로 막는다(lib/hooks/use-dialog.ts 의 lockScroll).
   * 그 훅을 통째로 쓰지는 않는다 — Esc 와 포커스 트랩은 <dialog> 가 이미
   * 하고 있어서, 얹으면 같은 일을 두 번 하게 된다.
   */
  useEffect(() => {
    if (index === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [index]);

  /*
   * 열고 닫는 일은 <dialog> 에 맡긴다 — showModal() 이 포커스 트랩과 Esc,
   * 열기 전 포커스로의 복귀까지 브라우저 쪽에서 해 준다.
   */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
    } else if (!dialog.open) {
      dialog.showModal();
    }
  }, [index]);

  const work = index === null ? null : works[index];

  return (
    <dialog
      ref={dialogRef}
      aria-label="작업 크게 보기"
      /* Esc 로 닫아도 이 이벤트가 온다 — 닫힘 상태를 한 곳에서만 되돌린다 */
      onClose={onClose}
      /* 이미지 바깥(다이얼로그 자신)을 눌렀을 때만 닫는다 */
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") onPrev();
        if (event.key === "ArrowRight") onNext();
      }}
      /*
       * ::backdrop 은 투명하게 두고 다이얼로그 자신이 화면을 덮는다 —
       * 그래야 배경 클릭 판정이 이 요소 하나로 끝난다.
       */
      className="hidden h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] border-0 bg-[var(--color-black-alpha-100)] p-0 backdrop:bg-[var(--color-black-alpha-100)] open:grid open:place-items-center open:bg-[var(--color-black-alpha-1000)]"
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className={`${CONTROL} top-[var(--space-250)] right-[var(--space-250)]`}
      >
        ×
      </button>
      <button
        type="button"
        aria-label="이전 작업"
        onClick={onPrev}
        className={`${NAV} left-[var(--space-250)]`}
      >
        ←
      </button>

      <figure className="flex max-h-[88vh] max-w-[min(var(--site-lightbox-width),92vw)] flex-col items-center gap-[var(--space-175)]">
        {work && (
          <>
            <Image
              src={work.src}
              alt={`${work.title} — ${work.client}`}
              width={work.width}
              height={work.height}
              className="h-auto w-auto max-h-[calc(88vh_-_var(--space-600))] max-w-full rounded-[var(--radius-200)] object-contain"
            />
            <figcaption className="text-center text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-gray-400)]">
              {[work.title, work.client, work.year].filter(Boolean).join(" · ")}
            </figcaption>
          </>
        )}
      </figure>

      <button
        type="button"
        aria-label="다음 작업"
        onClick={onNext}
        className={`${NAV} right-[var(--space-250)]`}
      >
        →
      </button>
    </dialog>
  );
}
