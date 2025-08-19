import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className={cn("flex", "h-screen", "flex-col", "items-center", "justify-center")}>
      <h2 className={cn("text-2xl", "font-bold", "mb-4")}>👾 페이지를 찾을 수 없습니다 👾</h2>
      <Button asChild>
        <Link href="/">홈으로 돌아기기</Link>
      </Button>
    </div>
  );
}
