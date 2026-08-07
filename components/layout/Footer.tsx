export interface FooterProps {
  /** 푸터 한 줄 텍스트 */
  text?: string;
}

export default function Footer({
  text = "© 2026 Jinah Yeom · Built with KDS tokens",
}: FooterProps) {
  return (
    <footer className="mx-auto w-full max-w-[var(--site-width-content)] border-t border-[var(--color-divider-alternative)] px-[var(--space-300)] py-[var(--space-400)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] text-[var(--color-label-assistive)]">
      {text}
    </footer>
  );
}
