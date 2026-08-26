import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatFab from "@/components/chat/ChatFab";

const SITE_URL = "https://jinah-yeom.github.io";
const DESCRIPTION =
  "디자인 시스템 구축과 프로덕트 UX 설계를 코드까지 직접 완결하는 디자이너-개발자 염지나의 포트폴리오입니다.";

export const metadata: Metadata = {
  /*
   * static export 라 요청 호스트를 알 수 없다 — metadataBase 가 없으면
   * og:image 가 상대 경로로 나가서 크롤러가 이미지를 못 찾는다.
   */
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jinah Yeom — Designer · Developer",
    template: "%s — Jinah Yeom",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Jinah Yeom — Designer · Developer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Jinah Yeom",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "디자인 시스템 구축과 프로덕트 UX 설계를 코드까지 직접 완결하는 디자이너-개발자 염지나의 포트폴리오입니다.",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="mx-auto w-full max-w-[var(--site-width-content)] flex-1 px-[var(--space-300)] pt-[var(--space-400)] pb-[var(--site-page-mb)]">
          {children}
        </main>
        <Footer />
        <ChatFab />
      </body>
    </html>
  );
}
