import PageWrapper from "@/components/common/PageWrapper";
import { cn } from "@/lib/utils";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return <PageWrapper className={cn("max-w-page", "mx-auto")}>{children}</PageWrapper>;
}
