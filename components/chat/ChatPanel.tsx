"use client";

import { useEffect, useRef, useState } from "react";
import CloseIcon from "@/components/ui/CloseIcon";
import { useDialog } from "@/lib/hooks/use-dialog";
import {
  answer,
  GREETING,
  SUGGESTED_QUESTIONS,
  type SuggestedQuestion,
} from "@/lib/chatbot-data";

interface ChatMessage {
  id: number;
  role: "user" | "bot";
  text: string;
}

export interface ChatPanelProps {
  open?: boolean;
  onClose?: () => void;
  /** aria-controls 로 참조되는 id */
  id?: string;
  /** 패널 헤더에 표시할 이름 */
  title?: string;
  questions?: SuggestedQuestion[];
}

const MESSAGE_BASE =
  "max-w-[85%] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] whitespace-pre-line";

const MESSAGE_BOT = "self-start text-[var(--color-gray-100)]";

const MESSAGE_USER =
  "self-end rounded-[var(--radius-900)] border border-[var(--color-black-alpha-550)] bg-[var(--color-black-alpha-650)] px-[var(--space-200)] py-[var(--space-075)] text-[var(--color-gray-200)]";

export default function ChatPanel({
  open = false,
  onClose = () => {},
  id = "chat-panel",
  title = "jina_copy.hmn",
  questions = SUGGESTED_QUESTIONS,
}: ChatPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const lastIdRef = useRef(0);

  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, role: "bot", text: GREETING },
  ]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);

  useDialog({ open, onClose, containerRef: panelRef, initialFocusRef: inputRef });

  /* 새 메시지·타이핑 인디케이터가 붙으면 항상 최신이 보이게 */
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [messages, pending, open]);

  const send = async (question: string) => {
    const text = question.trim();
    if (text.length === 0 || pending) return;

    setDraft("");
    setPending(true);
    setMessages((prev) => [
      ...prev,
      { id: ++lastIdRef.current, role: "user", text },
    ]);

    try {
      const reply = await answer(text);
      setMessages((prev) => [
        ...prev,
        { id: ++lastIdRef.current, role: "bot", text: reply },
      ]);
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      id={id}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="지나에게 물어보기"
      aria-hidden={!open}
      /*
       * 닫힘 상태는 invisible — 페이드가 가능하면서 포커스 순서에서는 빠진다.
       * 모바일에서는 FAB 자리만 비우고 화면을 거의 채운다.
       */
      className={`fixed right-[var(--space-300)] bottom-[calc(var(--site-fab-size)_+_var(--space-500))] z-[var(--site-z-chat)] flex h-[var(--site-chat-height)] max-h-[70vh] w-[var(--site-chat-width)] max-w-[calc(100vw_-_var(--space-600))] flex-col overflow-hidden rounded-[var(--radius-600)] bg-[var(--color-gray-950)] text-[var(--color-gray-100)] transition-[opacity,visibility] duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] max-[720px]:inset-x-[var(--space-150)] max-[720px]:top-[var(--space-150)] max-[720px]:bottom-[calc(var(--site-fab-size)_+_var(--space-400))] max-[720px]:h-auto max-[720px]:max-h-none max-[720px]:w-auto max-[720px]:max-w-none ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="flex items-center justify-between px-[var(--space-250)] py-[var(--space-200)] text-[length:var(--font-size-075)] text-[var(--color-gray-500)] [font-weight:var(--font-weight-500)]">
        <span>{title}</span>
        <button
          type="button"
          aria-label="챗봇 닫기"
          tabIndex={open ? undefined : -1}
          onClick={onClose}
          className="relative flex h-[var(--site-tap-target)] w-[var(--site-tap-target)] items-center justify-center text-[var(--color-gray-400)]"
        >
          <CloseIcon />
        </button>
      </div>

      <div
        ref={bodyRef}
        className="flex flex-1 flex-col gap-[var(--space-150)] overflow-y-auto px-[var(--space-250)] py-[var(--space-100)]"
      >
        {messages.map((message) => (
          <p
            key={message.id}
            className={`${MESSAGE_BASE} ${
              message.role === "bot" ? MESSAGE_BOT : MESSAGE_USER
            }`}
          >
            {message.text}
          </p>
        ))}

        {pending && (
          <p
            className={`${MESSAGE_BASE} ${MESSAGE_BOT} flex items-center gap-[var(--space-050)]`}
            aria-label="답변을 작성하는 중"
          >
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="block h-[var(--dimension-075)] w-[var(--dimension-075)] animate-pulse rounded-[var(--radius-900)] bg-[var(--color-gray-500)]"
                style={{ animationDelay: `${dot * 150}ms` }}
              />
            ))}
          </p>
        )}

        {/* 칩은 대화 끝에 계속 남겨 다른 질문을 이어서 누를 수 있게 한다 */}
        <div className="flex flex-col items-end gap-[var(--space-100)] py-[var(--space-100)]">
          {questions.map((item) => (
            <button
              key={item.id}
              type="button"
              disabled={pending}
              tabIndex={open ? undefined : -1}
              onClick={() => send(item.question)}
              className="rounded-[var(--radius-900)] border border-[var(--color-gray-700)] px-[var(--space-200)] py-[var(--space-075)] text-[length:var(--font-size-075)] text-[var(--color-gray-200)] hover:bg-[var(--color-black-alpha-650)] disabled:opacity-50"
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          void send(draft);
        }}
        className="flex items-center gap-[var(--space-100)] px-[var(--space-250)] py-[var(--space-200)]"
      >
        <input
          ref={inputRef}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          disabled={pending}
          tabIndex={open ? undefined : -1}
          aria-label="메시지 입력"
          placeholder="메시지를 입력하세요..."
          className="flex-1 bg-[var(--color-black-alpha-100)] text-[length:var(--font-size-075)] text-[var(--color-gray-100)] outline-none placeholder:text-[var(--color-gray-600)]"
        />
        <button
          type="submit"
          aria-label="보내기"
          disabled={pending || draft.trim().length === 0}
          tabIndex={open ? undefined : -1}
          className="flex h-[var(--dimension-450)] w-[var(--dimension-450)] shrink-0 items-center justify-center rounded-[var(--radius-900)] bg-[var(--color-gray-100)] text-[length:var(--font-size-100)] text-[var(--color-gray-950)] disabled:opacity-50"
        >
          ↑
        </button>
      </form>
    </div>
  );
}
