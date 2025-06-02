"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopGnb from "./DesktopGnb";
import MobileMenuButton from "./MobileMenuButton";
import MobileGnb from "./MobileGnb";

export default function AppHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 경로가 변경되면 헤더 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤
        setIsVisible(false);
      } else {
        // 위로 스크롤
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    // 스크롤 이벤트가 preventDefault 되지 않도록 passive: true 추가
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  // 모바일 GNB 열려 있을 때 <body> overflow hidden 부여하여 스크롤 안되게함
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "py-4",
          "bg-background",
          "top-0",
          "w-full",
          "fixed",
          "px-8",
          "z-20",
          "transition-transform duration-300",
          isVisible ? "translate-y-0" : isOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className={cn("flex", "items-center", "justify-between")}>
          <Link href="/" className={cn("text-2xl", "font-bold")}>
            김종한
          </Link>
          <div className={cn("hidden", "lg:block")}>
            <DesktopGnb />
          </div>
          <div className={cn("lg:hidden")}>
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>
      {isOpen && <MobileGnb />}
    </>
  );
}
