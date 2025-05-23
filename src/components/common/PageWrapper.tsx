import { cn } from "@/lib/utils";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return <main className={cn("px-page", "mx-auto", "py-20")}>{children}</main>;
}
