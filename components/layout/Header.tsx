"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  /** 이 항목을 활성으로 볼 경로 prefix 목록 */
  matches: string[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "WORK", href: "/", matches: ["/", "/work"] },
  { label: "ABOUT", href: "/about", matches: ["/about"] },
  { label: "BLOG", href: "/blog", matches: ["/blog"] },
];

/*
 * 색상·굵기는 idle/active 중 한쪽에만 넣는다.
 * 두 클래스를 겹쳐 쓰면 최종 승자가 클래스 순서가 아니라 CSS 출력 순서로 결정돼 불안정해진다.
 */
const NAV_LINK_BASE =
  "py-[var(--space-050)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] tracking-[var(--site-tracking-nav)] transition-colors hover:text-[var(--color-label-normal)]";

const NAV_LINK_IDLE =
  "text-[var(--color-label-assistive)] [font-weight:var(--font-weight-500)]";

const NAV_LINK_ACTIVE =
  "text-[var(--color-label-normal)] [font-weight:var(--font-weight-700)] [border-bottom-width:var(--dimension-025)] border-[var(--color-border-contrast)]";

function isActive(pathname: string, item: NavItem): boolean {
  return item.matches.some((prefix) =>
    prefix === "/" ? pathname === "/" : pathname.startsWith(prefix)
  );
}

export interface HeaderProps {
  /** 좌측 로고 텍스트 */
  name?: string;
}

export default function Header({ name = "JINAH YEOM" }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="mx-auto grid w-full max-w-[var(--site-width-header)] grid-cols-[1fr_auto_1fr] items-center px-[var(--space-300)] py-[var(--space-250)] max-[720px]:grid-cols-1 max-[720px]:justify-items-start max-[720px]:gap-[var(--space-100)]">
      <Link
        href="/"
        className="text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] tracking-[var(--font-letter-spacing-heading-xs)] [font-weight:var(--font-weight-700)]"
      >
        {name}
      </Link>

      <nav className="flex gap-[var(--space-300)]">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item);
          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`${NAV_LINK_BASE} ${
                active ? NAV_LINK_ACTIVE : NAV_LINK_IDLE
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/about"
        className={`${NAV_LINK_BASE} ${NAV_LINK_IDLE} justify-self-end max-[720px]:justify-self-start`}
      >
        CONTACT
      </Link>
    </header>
  );
}
