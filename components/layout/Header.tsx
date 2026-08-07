"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import MobileMenu, { type MobileMenuItem } from "./MobileMenu";

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

const CONTACT_HREF = "/about";

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

const MENU_BAR =
  "block w-[var(--dimension-250)] [height:var(--dimension-025)] bg-[var(--color-label-normal)]";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /*
   * 뒤로가기 등 링크 클릭 외의 경로 변경에도 오버레이를 닫는다.
   * effect 가 아니라 렌더 중 조정 — 열린 메뉴가 한 프레임 깜빡였다 닫히지 않는다.
   */
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setMenuOpen(false);
  }

  /*
   * CONTACT 는 섹션이 아니라 액션이라 활성 표시를 두지 않는다.
   * (ABOUT 과 같은 경로여서, 활성으로 두면 /about 에서 밑줄이 두 개 생긴다)
   */
  const menuItems: MobileMenuItem[] = [
    ...NAV_ITEMS.map((item) => ({
      label: item.label,
      href: item.href,
      active: isActive(pathname, item),
    })),
    { label: "CONTACT", href: CONTACT_HREF, active: false },
  ];

  return (
    <>
      <header className="mx-auto grid w-full max-w-[var(--site-width-header)] grid-cols-[1fr_auto_1fr] items-center px-[var(--space-300)] py-[var(--space-250)] max-[720px]:grid-cols-[1fr_auto]">
        <Link
          href="/"
          className="text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] tracking-[var(--font-letter-spacing-heading-xs)] [font-weight:var(--font-weight-700)]"
        >
          {name}
        </Link>

        <nav className="flex gap-[var(--space-300)] max-[720px]:hidden">
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
          href={CONTACT_HREF}
          className={`${NAV_LINK_BASE} ${NAV_LINK_IDLE} justify-self-end max-[720px]:hidden`}
        >
          CONTACT
        </Link>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          className="hidden justify-self-end max-[720px]:flex max-[720px]:h-[var(--dimension-400)] max-[720px]:w-[var(--dimension-400)] max-[720px]:flex-col max-[720px]:items-center max-[720px]:justify-center max-[720px]:gap-[var(--dimension-075)]"
        >
          <span className={MENU_BAR} />
          <span className={MENU_BAR} />
        </button>
      </header>

      <MobileMenu
        id="mobile-menu"
        open={menuOpen}
        onClose={closeMenu}
        items={menuItems}
      />
    </>
  );
}
