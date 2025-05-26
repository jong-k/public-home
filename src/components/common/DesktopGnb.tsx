import { NAV_ITEMS } from "@/constants/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CopyEmailButton from "../base/CopyEmailButton";

export default function DesktopGnb() {
  return (
    <div className={cn("flex", "items-center", "gap-4")}>
      <nav className={cn("flex", "items-center", "gap-4")}>
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
      <CopyEmailButton />
    </div>
  );
}
