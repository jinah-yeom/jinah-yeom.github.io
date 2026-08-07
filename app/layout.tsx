import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CornerLabels from "@/components/layout/CornerLabels";

export const metadata: Metadata = {
  title: {
    default: "Jinah Yeom",
    template: "%s — Jinah Yeom",
  },
  description:
    "디자인 시스템을 설계하고 코드로 직접 완성하는 디자이너-개발자, 염지나의 포트폴리오와 기술 블로그.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="mx-auto w-full max-w-[var(--site-width-content)] flex-1 px-[var(--space-300)] pt-[var(--space-400)] pb-[var(--space-900)]">
          {children}
        </main>
        <Footer />
        <CornerLabels />
      </body>
    </html>
  );
}
