import { cn } from "@/lib/utils";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className={cn("px-page", "mx-auto")}>{children}</div>;
}
