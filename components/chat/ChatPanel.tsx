"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import CloseIcon from "@/components/ui/CloseIcon";
import { useDialog } from "@/lib/hooks/use-dialog";
import {
  answer,
  GREETING,
  SUGGESTED_QUESTIONS,
  type SuggestedQuestion,
} from "@/lib/chatbot-data";

/*
 * 추천 질문 칩도 대화의 한 항목이다.
 * "처음으로" 가 인사말 + 칩 세트를 대화 맨 아래에 다시 붙이는 동작이라,
 * 칩을 대화 밖 고정 영역에 두면 표현할 수 없다.
 */
type ChatEntry =
  | {
      id: number;
      kind: "text";
      role: "user" | "bot";
      text: string;
      /** 이 답변 아래에 "처음으로" 를 보일지 — 첫 인사말에는 붙이지 않는다 */
      showRestart?: boolean;
    }
  | { id: number; kind: "chips" };

const INITIAL_ENTRIES: ChatEntry[] = [
  { id: 0, kind: "text", role: "bot", text: GREETING },
  { id: 1, kind: "chips" },
];

interface ChatState {
  /** 리셋될 때마다 올라간다 — 지난 대화의 뒤늦은 답변을 걸러내는 기준 */
  session: number;
  entries: ChatEntry[];
  pending: boolean;
}

const INITIAL_CHAT: ChatState = {
  session: 0,
  entries: INITIAL_ENTRIES,
  pending: false,
};

export interface ChatPanelProps {
  open?: boolean;
  onClose?: () => void;
  /** aria-controls 로 참조되는 id */
  id?: string;
  /** 패널 헤더에 표시할 이름 */
  title?: string;
  questions?: SuggestedQuestion[];
  /** 처음으로 버튼 문구 */
  restartLabel?: string;
}

const MESSAGE_BASE =
  "max-w-[85%] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] whitespace-pre-line";

const MESSAGE_BOT = "self-start text-[var(--color-gray-100)]";

const MESSAGE_USER =
  "self-end rounded-[var(--radius-900)] border border-[var(--color-black-alpha-550)] bg-[var(--color-black-alpha-650)] px-[var(--space-200)] py-[var(--space-075)] text-[var(--color-gray-200)]";

const CHIP =
  "rounded-[var(--radius-900)] border border-[var(--color-gray-700)] px-[var(--space-200)] py-[var(--space-075)] text-[length:var(--font-size-075)] text-[var(--color-gray-200)] hover:bg-[var(--color-black-alpha-650)] disabled:opacity-50";

/* 질문 칩과 구분되도록 더 작고 보더 없이 어두운 배경 */
const RESTART_CHIP =
  "self-center rounded-[var(--radius-900)] bg-[var(--color-black-alpha-650)] px-[var(--space-150)] py-[var(--space-050)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] [font-weight:var(--font-weight-500)] text-[var(--color-gray-300)] hover:bg-[var(--color-black-alpha-700)] disabled:opacity-50";

export default function ChatPanel({
  open = false,
  onClose = () => {},
  id = "chat-panel",
  title = "jina_copy.hmn",
  questions = SUGGESTED_QUESTIONS,
  restartLabel = "처음으로",
}: ChatPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const lastIdRef = useRef(INITIAL_ENTRIES.length - 1);

  /*
   * 세션·대화·대기 상태를 한 덩어리로 둔다.
   * 답변을 기다리는 사이 패널이 닫혔다 열리면 세션이 올라가는데,
   * 세션을 같은 상태에 두어야 updater 안에서 순수하게 비교하고 버릴 수 있다.
   */
  const [chat, setChat] = useState<ChatState>(INITIAL_CHAT);
  const [draft, setDraft] = useState("");

  const [openedWith, setOpenedWith] = useState(open);
  if (open !== openedWith) {
    setOpenedWith(open);
    /*
     * 리셋 시점은 "닫을 때" 가 아니라 "열 때" 다.
     * 닫는 순간 비우면 페이드아웃 200ms 동안 내용이 사라지는 게 그대로 보인다.
     * 열 때 비우면 보이는 결과는 같으면서(항상 첫 인사 + 칩) 그 깜빡임이 없다.
     */
    if (open) {
      setChat((prev) => ({ ...INITIAL_CHAT, session: prev.session + 1 }));
      setDraft("");
    }
  }

  const { entries, pending } = chat;

  useDialog({
    open,
    onClose,
    containerRef: panelRef,
    initialFocusRef: inputRef,
  });

  /* 항목이 늘거나 인디케이터가 켜지면 항상 최신이 보이게 (포커스는 옮기지 않는다) */
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [entries, pending, open]);

  /* id 발급은 setState 밖에서 — updater 는 순수해야 한다 */
  const nextId = () => ++lastIdRef.current;

  const send = async (question: string) => {
    const text = question.trim();
    if (text.length === 0 || pending) return;

    /* 이 질문이 속한 세션. 답변이 돌아왔을 때 아직 같은 대화인지 판단하는 기준 */
    const sentIn = chat.session;
    const userId = nextId();

    setDraft("");
    setChat((prev) =>
      prev.session !== sentIn
        ? prev
        : {
            ...prev,
            entries: [
              ...prev.entries,
              { id: userId, kind: "text", role: "user", text },
            ],
            pending: true,
          }
    );

    try {
      const reply = await answer(text);
      const botId = nextId();
      /* 기다리는 사이 패널이 닫혔다 열렸으면 이 답변은 지난 대화의 것이라 버린다 */
      setChat((prev) =>
        prev.session !== sentIn
          ? prev
          : {
              ...prev,
              entries: [
                ...prev.entries,
                {
                  id: botId,
                  kind: "text",
                  role: "bot",
                  text: reply,
                  showRestart: true,
                },
              ],
              pending: false,
            }
      );
    } finally {
      /* answer() 가 던진 경우에도 대기 상태가 남지 않게 한다 */
      setChat((prev) =>
        prev.session !== sentIn || !prev.pending
          ? prev
          : { ...prev, pending: false }
      );
    }
  };

  const restart = () => {
    /* 맨 아래가 이미 칩 세트면 같은 것을 또 붙이지 않는다 */
    if (pending || entries[entries.length - 1]?.kind === "chips") return;

    const greetingId = nextId();
    const chipsId = nextId();
    setChat((prev) => ({
      ...prev,
      entries: [
        ...prev.entries,
        { id: greetingId, kind: "text", role: "bot", text: GREETING },
        { id: chipsId, kind: "chips" },
      ],
    }));
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
        {entries.map((entry) =>
          entry.kind === "chips" ? (
            <div
              key={entry.id}
              className="flex flex-col items-end gap-[var(--space-100)] py-[var(--space-100)]"
            >
              {questions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  disabled={pending}
                  tabIndex={open ? undefined : -1}
                  onClick={() => send(item.question)}
                  className={CHIP}
                >
                  {item.question}
                </button>
              ))}
            </div>
          ) : (
            <Fragment key={entry.id}>
              <p
                className={`${MESSAGE_BASE} ${
                  entry.role === "bot" ? MESSAGE_BOT : MESSAGE_USER
                }`}
              >
                {entry.text}
              </p>
              {entry.showRestart && (
                <button
                  type="button"
                  aria-label="첫 인사와 추천 질문 다시 보기"
                  disabled={pending}
                  tabIndex={open ? undefined : -1}
                  onClick={restart}
                  className={RESTART_CHIP}
                >
                  {restartLabel}
                </button>
              )}
            </Fragment>
          )
        )}

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
