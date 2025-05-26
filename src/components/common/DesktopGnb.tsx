import { NAV_ITEMS, EMAIL_ADDRESS } from "@/constants/header";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MailOpen } from "lucide-react";

export default function DesktopGnb() {
  const handleContact = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    toast.success(`메일 주소 ${EMAIL_ADDRESS} 를 클립보드에 복사했습니다`);
  };

  return (
    <div className={cn("flex", "items-center", "gap-4")}>
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
  );
}
