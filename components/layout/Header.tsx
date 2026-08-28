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

/*
 * 헤더 글자는 로고와 내비가 같은 값을 쓴다 — 16px/500. 이름을 제목처럼
 * 키우지 않고 메뉴와 한 줄로 읽히게 둔다.
 * 트래킹은 선언하지 않는다. heading-xs 와 body 기본값이 둘 다 -0.1px 이라
 * 제목용 토큰을 얹어도 렌더가 같았고, 상속에 맡기는 편이 About 라벨과 같다.
 *
 * 타이포만 여기 모은다 — 두 곳에 같은 값을 적어 두면 한쪽만 바뀌어 어긋난다.
 * 로고의 링크 성격(패딩 없음, hover 없음)까지 묶지는 않는다.
 */
const HEADER_TYPE =
  "text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] [font-weight:var(--font-weight-500)]";

/*
 * 세 항목을 같은 색·굵기로 둔다. 현재 위치는 화면에 표시하지 않고
 * aria-current 로만 남긴다 — 스크린리더는 알고 눈으로는 나란하다.
 * hover 는 카드와 같은 문법(투명도)을 쓴다. 색이 하나뿐이라 색 전환은
 * 걸 곳이 없다. 여기엔 내비만의 것(히트 영역, 색, hover)만 더한다.
 */
const NAV_LINK = `py-[var(--space-050)] ${HEADER_TYPE} text-[var(--color-label-normal)] opacity-100 transition-opacity duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] hover:opacity-60`;

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

  const menuItems: MobileMenuItem[] = NAV_ITEMS.map((item) => ({
    label: item.label,
    href: item.href,
    active: isActive(pathname, item),
  }));

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
        {/* 좌 로고 / 우 내비 2단 — 내비 오른쪽 끝이 본문 우측선과 맞는다 */}
        <div className="mx-auto flex h-full w-full max-w-[var(--site-width-header)] items-center justify-between px-[var(--space-300)]">
          <Link href="/" className={HEADER_TYPE}>
            {name}
          </Link>

          <nav className="flex gap-[var(--space-200)] max-[720px]:hidden">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={NAV_LINK}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
            /* 오버레이 닫기 버튼과 정확히 같은 좌표에 오도록 히트박스 크기를 동일하게 유지한다 */
            className="hidden h-[var(--site-tap-target)] w-[var(--site-tap-target)] flex-col items-center justify-center gap-[var(--dimension-075)] max-[720px]:flex"
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
