import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "../components/common/AppHeader";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "김종한 기술 블로그",
  description: "프론트엔드 개발자 김종한의 기술 블로그입니다",
};

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(pretendard.className, "antialiased")}>
        <AppHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
