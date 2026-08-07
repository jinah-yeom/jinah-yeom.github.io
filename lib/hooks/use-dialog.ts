"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export interface UseDialogOptions {
  open: boolean;
  onClose: () => void;
  /** 포커스를 가둘 범위 */
  containerRef: RefObject<HTMLElement | null>;
  /** 열릴 때 포커스를 받을 요소 — 없으면 범위 안 첫 번째 요소 */
  initialFocusRef?: RefObject<HTMLElement | null>;
  /** 열린 동안 배경 스크롤을 잠글지 */
  lockScroll?: boolean;
}

/**
 * 모달성 요소의 공통 동작 — ESC 닫기, 포커스 트랩, 초기 포커스, 닫을 때 포커스 복귀.
 * 모바일 메뉴와 챗 패널이 같은 규칙을 쓰도록 한 곳에 둔다.
 */
export function useDialog({
  open,
  onClose,
  containerRef,
  initialFocusRef,
  lockScroll = false,
}: UseDialogOptions): void {
  useEffect(() => {
    if (!open || !lockScroll) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open, lockScroll]);

  /* 열 때 지정된 요소로 포커스를 옮기고, 닫을 때 열었던 요소로 되돌린다 */
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const target =
      initialFocusRef?.current ??
      containerRef.current?.querySelector<HTMLElement>(FOCUSABLE);
    target?.focus();
    return () => opener?.focus();
  }, [open, containerRef, initialFocusRef]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const container = containerRef.current;
      if (!container) return;
      const focusable = container.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      const outside = !container.contains(active);

      if (event.shiftKey && (outside || active === first)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (outside || active === last)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, containerRef]);
}
