import type { Metadata } from "next";

export const metadata: Metadata = { title: "Keeper Design System" };

export default function KdsPage() {
  return (
    <div className="min-h-[40vh]">
      {/* TODO(3단계): 좌측 사이드 내비 + 인포박스 + 문서형 본문 */}
      <h1 className="text-[length:var(--font-size-300)] leading-[var(--font-line-height-300)] tracking-[var(--font-letter-spacing-heading-md)] [font-weight:var(--font-weight-800)]">
        Keeper Design System
      </h1>
    </div>
  );
}
