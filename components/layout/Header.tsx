"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
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

const CONTACT_HREF = "/about#contact";

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
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    /*
     * 최초 1회는 rAF 로 읽는다 — 뒤로가기 등으로 스크롤 위치가 복원된 채 마운트되면
     * scroll 이벤트가 오지 않아 보더가 빠진 상태로 남는다.
     */
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
      {/*
       * 스크롤 0 에서는 보더를 완전 투명 토큰으로 두고 색만 전환한다.
       * 보더 폭을 껐다 켜면 1px 만큼 레이아웃이 튄다.
       */}
      <header
        className={`sticky top-0 z-[var(--site-z-header)] h-[var(--site-header-height)] border-b bg-[var(--color-background-normal)] transition-colors duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] ${
          scrolled
            ? "border-[var(--color-divider-alternative)]"
            : "border-[var(--color-black-alpha-100)]"
        }`}
      >
        <div className="mx-auto grid h-full w-full max-w-[var(--site-width-header)] grid-cols-[1fr_auto_1fr] items-center px-[var(--space-300)] max-[720px]:grid-cols-[1fr_auto]">
          {/* justify-self-start — 그리드 칸을 다 채우면 포커스 링이 글자가 아니라 칸을 두른다 */}
          <Link
            href="/"
            className="justify-self-start text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] tracking-[var(--font-letter-spacing-heading-xs)] [font-weight:var(--font-weight-700)]"
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
            /* 오버레이 닫기 버튼과 정확히 같은 좌표에 오도록 히트박스 크기를 동일하게 유지한다 */
            className="hidden h-[var(--site-tap-target)] w-[var(--site-tap-target)] flex-col items-center justify-center gap-[var(--dimension-075)] justify-self-end max-[720px]:flex"
          >
            <span className={MENU_BAR} />
            <span className={MENU_BAR} />
          </button>
        </div>
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
