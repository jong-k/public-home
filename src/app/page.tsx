import PageWrapper from "@/components/common/PageWrapper";
import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <PageWrapper>
      {Array.from({ length: 100 }).map((_, index) => (
        <PostCard key={index} />
      ))}
    </PageWrapper>
  );
}
