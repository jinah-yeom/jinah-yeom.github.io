"use client";

import Link from "next/link";
import { useEffect } from "react";

export interface MobileMenuItem {
  label: string;
  href: string;
  /** 현재 경로에 해당하는 항목인지 — 밑줄 표시 기준 */
  active?: boolean;
}

export interface MobileMenuProps {
  /** 오버레이 열림 여부 */
  open?: boolean;
  /** 닫기 요청 (× 클릭 / 항목 클릭 / ESC) */
  onClose?: () => void;
  /** 세로로 나열할 메뉴 항목 */
  items?: MobileMenuItem[];
  /** aria-controls 로 참조되는 id */
  id?: string;
}

/*
 * × 를 글자가 아니라 막대 두 개로 그린다.
 * 글리프는 폰트마다 실제 렌더 크기가 제각각이라 토큰으로 크기를 못 잡는다.
 * 헤더 햄버거와 같은 굵기(--dimension-025), 같은 44×44 히트박스를 쓴다.
 */
const CLOSE_BAR =
  "absolute block w-[var(--dimension-300)] [height:var(--dimension-025)] bg-[var(--color-label-normal)]";

const ITEM_BASE =
  "w-fit text-[length:var(--font-size-500)] leading-[var(--font-line-height-500)] tracking-[var(--font-letter-spacing-display)]";

const ITEM_IDLE =
  "text-[var(--color-label-alternative)] [font-weight:var(--font-weight-500)]";

/* 데스크톱 활성 표시와 같은 규칙 — 색 변화가 아니라 밑줄(하단 보더) */
const ITEM_ACTIVE =
  "text-[var(--color-label-normal)] [font-weight:var(--font-weight-700)] [border-bottom-width:var(--dimension-025)] border-[var(--color-border-contrast)]";

export default function MobileMenu({
  open = false,
  onClose = () => {},
  items = [],
  id = "mobile-menu",
}: MobileMenuProps) {
  /* 열린 동안 배경 스크롤 잠금 — 원래 overflow 값을 복원한다 */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id={id}
      /*
       * 닫힘 상태는 invisible — display:none 과 달리 페이드가 가능하면서
       * 포커스 순서에서는 빠진다. 720px 이상에서는 아예 렌더 대상에서 제외.
       */
      className={`fixed inset-0 z-100 flex flex-col bg-[var(--color-background-normal)] transition-[opacity,visibility] duration-[var(--site-duration-d4)] ease-[var(--motion-easing-out)] min-[720px]:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      {/* 헤더 햄버거 버튼과 같은 좌표에 오도록 폭·패딩·버튼 크기를 헤더와 동일하게 맞춘다 */}
      <div className="mx-auto flex w-full max-w-[var(--site-width-header)] items-center justify-end px-[var(--space-300)] py-[var(--space-250)]">
        <button
          type="button"
          aria-label="메뉴 닫기"
          tabIndex={open ? undefined : -1}
          onClick={onClose}
          className="relative flex h-[var(--site-tap-target)] w-[var(--site-tap-target)] items-center justify-center"
        >
          <span className={`${CLOSE_BAR} rotate-45`} />
          <span className={`${CLOSE_BAR} -rotate-45`} />
        </button>
      </div>

      <nav
        className={`flex flex-col gap-[var(--space-300)] px-[var(--space-300)] pt-[var(--space-400)] transition-transform duration-[var(--site-duration-d4)] ease-[var(--motion-easing-out)] ${
          open ? "translate-y-0" : "translate-y-[var(--space-250)]"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            aria-current={item.active ? "page" : undefined}
            tabIndex={open ? undefined : -1}
            className={`${ITEM_BASE} ${item.active ? ITEM_ACTIVE : ITEM_IDLE}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
