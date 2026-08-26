import { ABOUT_ITEM_TITLE, ABOUT_PARAGRAPH } from "./AboutSection";

export interface AboutEntryItem {
  /** Principles 는 번호까지 제목에 포함한다 — 원문 표기를 그대로 옮긴다 */
  title: string;
  body: string;
}

export interface AboutEntryListProps {
  items?: AboutEntryItem[];
}

/** 소제목 + 본문 한 문단이 반복되는 목록 — Strength 와 Principles 가 함께 쓴다 */
export default function AboutEntryList({ items = [] }: AboutEntryListProps) {
  return (
    <div className="flex flex-col gap-[var(--space-500)]">
      {items.map((item) => (
        <div key={item.title}>
          <h3 className={ABOUT_ITEM_TITLE}>{item.title}</h3>
          <p className={ABOUT_PARAGRAPH}>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
