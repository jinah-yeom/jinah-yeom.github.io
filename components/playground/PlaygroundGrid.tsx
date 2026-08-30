"use client";

import Image from "next/image";
import { useState } from "react";
import PlaygroundLightbox from "./PlaygroundLightbox";
import { PLAYGROUND_WORKS, type PlaygroundWork } from "@/lib/playground";

export interface PlaygroundGridProps {
  works?: PlaygroundWork[];
}

/*
 * CSS multicol masonry. 열 안에서 위에서 아래로 채워지므로 항목 높이가
 * 제각각이어도 아래가 들쭉날쭉하지 않다. 전환 폭(900·560)은 산출물이
 * 정한 값 그대로다 — Tailwind 의 max-[900px] 은 900 을 포함하지 않아
 * 실제 전환은 899px·559px 에서 일어난다.
 */
const GRID =
  "columns-3 gap-x-[var(--space-150)] max-[900px]:columns-2 max-[560px]:columns-1";

/* 열을 가로지르지 않게 묶고, 아래 항목과의 간격은 열 간격과 같은 값으로 */
const ITEM = "mb-[var(--space-150)] break-inside-avoid";

/*
 * 썸네일 전체가 버튼이다. hover·focus 에서 이미지만 아주 조금 밀어 올려
 * 눌리는 면임을 알린다. 포커스 링은 전역 :focus-visible 이 그린다.
 */
const THUMB =
  "group relative block w-full cursor-zoom-in overflow-hidden rounded-[var(--radius-300)] border border-[var(--color-divider-normal)] bg-[var(--color-background-normal)]";

const THUMB_IMAGE =
  "block h-auto w-full transition-transform duration-[var(--motion-duration-d6)] ease-[var(--motion-easing-standard)] group-hover:scale-[1.02] group-focus-visible:scale-[1.02] motion-reduce:transition-none";

/* 작업명 알약 — 평소엔 숨어 있다가 hover·focus 에서 아래에서 떠오른다 */
const CHIP =
  "pointer-events-none absolute bottom-[var(--space-125)] left-[var(--space-125)] translate-y-[var(--space-050)] rounded-[var(--radius-900)] bg-[var(--color-black-alpha-800)] px-[var(--space-125)] py-[var(--space-050)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] text-[var(--color-label-inverse)] opacity-0 transition-[opacity,transform] duration-[var(--motion-duration-d5)] ease-[var(--motion-easing-standard)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none";

export default function PlaygroundGrid({
  works = PLAYGROUND_WORKS,
}: PlaygroundGridProps) {
  /* null 이면 닫힘 — 닫는 순간 확대 이미지도 렌더에서 빠진다 */
  const [index, setIndex] = useState<number | null>(null);

  /* 양 끝에서 반대쪽으로 넘어간다 — 처음에서 ← 는 마지막으로 */
  const move = (step: number) =>
    setIndex((prev) =>
      prev === null ? prev : (prev + step + works.length) % works.length
    );

  return (
    <>
      <ul className={GRID} role="list">
        {works.map((work, i) => (
          <li key={work.src} className={ITEM}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${work.title} 크게 보기`}
              className={THUMB}
            >
              <Image
                src={work.src}
                alt={`${work.title} — ${work.client}`}
                width={work.width}
                height={work.height}
                className={THUMB_IMAGE}
              />
              <span className={CHIP} aria-hidden="true">
                {work.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <PlaygroundLightbox
        works={works}
        index={index}
        onClose={() => setIndex(null)}
        onPrev={() => move(-1)}
        onNext={() => move(1)}
      />
    </>
  );
}
