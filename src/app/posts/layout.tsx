import PageWrapper from "@/components/common/PageWrapper";
import MdxWrapper from "@/components/common/MdxWrapper";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper>
      <MdxWrapper>{children}</MdxWrapper>
    </PageWrapper>
  );
}
