import { cn } from "@/lib/utils";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return <main className={cn("px-page", "mx-auto")}>{children}</main>;
}
