export default function HomePage() {
  return (
    <div className="min-h-[62vh]">
      {/* TODO(2단계): garri식 히어로 + 워크 섹션 ×4 + 국영문 2단 소개 */}
      <p className="text-[length:var(--font-size-550)] leading-[var(--font-line-height-600)] tracking-[var(--font-letter-spacing-display)] [font-weight:var(--font-weight-500)] max-[720px]:text-[length:var(--font-size-400)] max-[720px]:leading-[var(--font-line-height-400)]">
        디자인 시스템을 설계하고
        <br />
        코드로 직접 완성하는
        <br />
        디자이너-개발자입니다
      </p>
    </div>
  );
}
