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
  "rounded-[var(--radius-900)] border px-[var(--space-200)] py-[var(--space-075)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] [font-weight:var(--font-weight-500)]";

const CHIP_LINK =
  "border-[var(--color-border-secondary)] hover:bg-[var(--color-background-alternative)]";

const CHIP_DISABLED =
  "border-[var(--color-border-disabled)] text-[var(--color-label-disabled)]";

export default function ContactRow({ links = [], id }: ContactRowProps) {
  return (
    <div
      id={id}
      className="mt-[var(--space-300)] flex flex-wrap gap-[var(--space-150)]"
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
