import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return <main className={cn("px-page", "mx-auto", "py-20", className)}>{children}</main>;
}
