"use client";

import { useCallback, useState } from "react";
import ChatPanel from "@/components/chat/ChatPanel";
import CloseIcon from "@/components/ui/CloseIcon";

export interface ChatFabProps {
  /** 닫힘 상태의 버튼 라벨 */
  openLabel?: string;
  /** 열림 상태의 버튼 라벨 */
  closeLabel?: string;
}

export default function ChatFab({
  openLabel = "챗봇 열기",
  closeLabel = "챗봇 닫기",
}: ChatFabProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls="chat-panel"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed right-[var(--space-300)] bottom-[var(--space-300)] z-[var(--site-z-chat)] flex h-[var(--site-fab-size)] w-[var(--site-fab-size)] items-center justify-center rounded-[var(--radius-900)] bg-[var(--color-gray-950)] text-[var(--color-gray-100)] transition-transform duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] hover:scale-105"
      >
        {/* 열려 있으면 닫기 아이콘, 닫혀 있으면 SPEC 의 ● */}
        {open ? (
          <span className="relative flex h-[var(--dimension-300)] w-[var(--dimension-300)] items-center justify-center">
            <CloseIcon />
          </span>
        ) : (
          <span
            aria-hidden
            className="block h-[var(--dimension-150)] w-[var(--dimension-150)] rounded-[var(--radius-900)] bg-current"
          />
        )}
      </button>

      <ChatPanel id="chat-panel" open={open} onClose={close} />
    </>
  );
}
