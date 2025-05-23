import PageWrapper from "@/components/common/PageWrapper";
import MdxWrapper from "@/components/common/MdxWrapper";
import { cn } from "@/lib/utils";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper className={cn("max-w-post", "mx-auto")}>
      <MdxWrapper className={cn("max-w-post")}>{children}</MdxWrapper>
    </PageWrapper>
  );
}
