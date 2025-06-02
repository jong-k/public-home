import { cn } from "@/lib/utils";

export default function TempPage() {
  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "h-screen",
        "text-2xl",
        "font-bold",
        "translate-y-[-80px]",
      )}
    >
      🚧 준비중인 페이지입니다 🚧
    </div>
  );
}
