import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "../components/common/AppHeader";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "김종한 기술 블로그",
  description: "프론트엔드 개발자 김종한의 기술 블로그입니다",
  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    shortcut: "/favicons/favicon-32x32.png",
    other: [{ rel: "manifest", url: "/favicons/site.webmanifest" }],
  },
  openGraph: {
    type: "website",
    url: "https://kimjonghan.com/",
    locale: "ko_KR",
    title: "김종한 기술 블로그",
    description: "프론트엔드 개발자 김종한의 기술 블로그입니다",
    images: [
      {
        url: "https://kimjonghan.com/images/og-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "김종한 기술 블로그",
      },
    ],
    siteName: "김종한 기술 블로그",
  },
  twitter: {
    card: "summary_large_image",
    title: "김종한 기술 블로그",
    description: "프론트엔드 개발자 김종한의 기술 블로그입니다",
    images: [
      {
        url: "https://kimjonghan.com/images/og-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "김종한 기술 블로그",
      },
    ],
  },
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
