import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/header";
import { cn } from "@/lib/utils";
import CopyEmailButton from "../base/CopyEmailButton";

export default function MobileGnb() {
  const pathname = usePathname();
  const isPostsPage = pathname.startsWith("/posts");

  return (
    <div
      className={cn(
        "absolute",
        "top-[72px]",
        "z-10",
        "w-dvw",
        "px-8",
        "border-t",
        "border-gray-300",
        isPostsPage ? "bg-background-posts-page" : "bg-background"
      )}
      style={{ height: "calc(100dvh - 72px)" }}
    >
      <div className={cn("flex", "flex-col", "justify-between", "h-full", "pb-10")}>
        <nav className={cn("flex", "flex-col", "divide-y", "divide-gray-300")}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={cn("py-5", "font-medium", "text-2xl", "hover:text-gray-800")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <CopyEmailButton />
      </div>
    </div>
  );
}
