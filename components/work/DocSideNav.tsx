import Link from "next/link";

export interface DocNavItem {
  label: string;
  /** 본문 섹션 앵커 (#id) */
  href: string;
  current?: boolean;
}

export interface DocNavGroup {
  /** 그룹 라벨 — 없으면 라벨 없이 항목만 나열 */
  label?: string;
  items: DocNavItem[];
}

export interface DocSideNavProps {
  groups?: DocNavGroup[];
  /** 스크린리더용 내비 이름 */
  ariaLabel?: string;
}

const ITEM_BASE =
  "rounded-[var(--radius-200)] px-[var(--space-125)] py-[var(--space-050)]";

const ITEM_IDLE =
  "text-[var(--color-label-alternative)] hover:bg-[var(--color-background-alternative)]";

const ITEM_CURRENT =
  "bg-[var(--color-gray-100)] text-[var(--color-label-normal)] [font-weight:var(--font-weight-600)]";

export default function DocSideNav({
  groups = [],
  ariaLabel = "문서 목차",
}: DocSideNavProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="sticky top-[var(--site-sticky-offset)] flex flex-col gap-[var(--dimension-025)] self-start text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] max-[720px]:static max-[720px]:flex-row max-[720px]:flex-wrap"
    >
      {groups.map((group, index) => (
        <div
          key={group.label ?? index}
          className="flex flex-col gap-[var(--dimension-025)] max-[720px]:flex-row max-[720px]:flex-wrap max-[720px]:items-center"
        >
          {group.label && (
            <p className="mt-[var(--space-200)] mb-[var(--space-075)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] text-[var(--color-label-assistive)] [font-weight:var(--font-weight-600)] max-[720px]:my-0">
              {group.label}
            </p>
          )}
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.current ? "true" : undefined}
              className={`${ITEM_BASE} ${
                item.current ? ITEM_CURRENT : ITEM_IDLE
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
