"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
  },
];
const EMAIL_ADDRESS = "fully.charged07@gmail.com";

export default function AppHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
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
  }, [lastScrollY]);

  const handleContact = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    toast.success(`메일 주소 ${EMAIL_ADDRESS} 를 클립보드에 복사했습니다`);
  };

  return (
    <header
      className={cn(
        "py-4",
        "bg-background",
        "w-full",
        "fixed",
        "px-8",
        "transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className={cn("flex", "items-center", "justify-between")}>
        <Link href="/" className={cn("text-2xl", "font-bold")}>
          김종한
        </Link>
        <nav>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "transition-all",
                "duration-200",
                "hover:underline",
                "hover:underline-offset-3",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button size="lg" className={cn("cursor-pointer")} onClick={handleContact}>
          <MailOpen />
          이메일로 문의하기
        </Button>
      </div>
    </header>
  );
}
