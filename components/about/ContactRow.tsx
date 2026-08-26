export interface ContactLink {
  label: string;
  /** 없으면 링크가 아니라 비활성 칩으로 렌더된다 */
  href?: string;
}

export interface ContactRowProps {
  links?: ContactLink[];
  id?: string;
}

const CHIP =
  "rounded-[var(--radius-900)] border px-[var(--space-200)] py-[var(--space-075)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] [font-weight:var(--font-weight-500)]";

const CHIP_LINK =
  "border-[var(--color-border-secondary)] hover:bg-[var(--color-background-alternative)]";

const CHIP_DISABLED =
  "border-[var(--color-border-disabled)] text-[var(--color-label-disabled)]";

export default function ContactRow({ links = [], id }: ContactRowProps) {
  return (
    <div
      id={id}
      /* 위 여백은 두지 않는다 — 섹션의 유일한 내용이라 라벨과 같은 선에서 시작한다 */
      className="flex flex-wrap gap-[var(--space-150)]"
    >
      {links.map((link) =>
        link.href ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`${CHIP} ${CHIP_LINK}`}
          >
            {link.label}
          </a>
        ) : (
          <span key={link.label} className={`${CHIP} ${CHIP_DISABLED}`}>
            {link.label}
          </span>
        )
      )}
    </div>
  );
}
