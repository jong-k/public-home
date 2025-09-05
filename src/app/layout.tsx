import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "./globals.css";
import AppHeader from "../components/common/AppHeader";

export const metadata: Metadata = {
  title: "김종한 기술 블로그",
  description: "프론트엔드 개발자 김종한의 기술 블로그입니다",
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-32x32.png",
    apple: "/favicons/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicons/apple-touch-icon.png",
    },
  },
  openGraph: {
    title: "김종한 기술 블로그",
    description: "프론트엔드 개발자 김종한의 기술 블로그입니다",
    url: "https://kimjonghan.com/",
    siteName: "김종한 기술 블로그",
    images: [
      {
        url: "https://kimjonghan.com/images/opengraph-image.png",
        width: 800,
        height: 533,
        alt: "김종한 기술 블로그",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "김종한 기술 블로그",
    description: "프론트엔드 개발자 김종한의 기술 블로그입니다",
    images: [
      {
        url: "https://kimjonghan.com/images/opengraph-image.png",
        width: 800,
        height: 533,
        alt: "김종한 기술 블로그",
      },
    ],
  },
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
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
