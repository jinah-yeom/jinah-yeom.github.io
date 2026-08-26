"use client";

import Link from "next/link";
import { useRef } from "react";
import CloseIcon from "@/components/ui/CloseIcon";
import { useDialog } from "@/lib/hooks/use-dialog";

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
 * 헤더 내비와 같은 규칙 — 항목을 나란히 두고 현재 위치는 aria-current 로만
 * 남긴다. hover 도 같은 문법(투명도)이고, Tailwind 가 hover 를 hover 가능한
 * 기기로 한정하므로 터치에서 눌린 상태가 남지 않는다.
 */
const ITEM =
  "w-fit text-[length:var(--font-size-500)] leading-[var(--font-line-height-500)] tracking-[var(--font-letter-spacing-display)] [font-weight:var(--font-weight-500)] text-[var(--color-label-normal)] opacity-100 transition-opacity duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] hover:opacity-60";

export default function MobileMenu({
  open = false,
  onClose = () => {},
  items = [],
  id = "mobile-menu",
}: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  /* ESC 닫기 · 포커스 트랩 · 초기 포커스 · 배경 스크롤 잠금 — 챗 패널과 같은 규칙 */
  useDialog({
    open,
    onClose,
    containerRef: overlayRef,
    initialFocusRef: closeButtonRef,
    lockScroll: true,
  });

  return (
    <div
      id={id}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="사이트 메뉴"
      /*
       * 닫힘 상태는 invisible — display:none 과 달리 페이드가 가능하면서
       * 포커스 순서에서는 빠진다. 720px 이상에서는 아예 렌더 대상에서 제외.
       */
      className={`fixed inset-0 z-[var(--site-z-menu)] flex flex-col bg-[var(--color-background-normal)] transition-[opacity,visibility] duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] min-[720px]:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      {/* 헤더 햄버거 버튼과 같은 좌표에 오도록 높이·폭·패딩·버튼 크기를 헤더와 동일하게 맞춘다 */}
      <div className="mx-auto flex h-[var(--site-header-height)] w-full max-w-[var(--site-width-header)] items-center justify-end px-[var(--space-300)]">
        <button
          type="button"
          ref={closeButtonRef}
          aria-label="메뉴 닫기"
          tabIndex={open ? undefined : -1}
          onClick={onClose}
          className="relative flex h-[var(--site-tap-target)] w-[var(--site-tap-target)] items-center justify-center text-[var(--color-label-normal)]"
        >
          <CloseIcon />
        </button>
      </div>

      <nav
        className={`flex flex-col gap-[var(--space-300)] px-[var(--space-300)] pt-[var(--space-400)] transition-transform duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] ${
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
            className={ITEM}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
