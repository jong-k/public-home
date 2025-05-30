import PageWrapper from "@/components/common/PageWrapper";
// import PostCard from "./components/PostCard";
import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cn } from "@/lib/utils";
import type { PostMetadata } from "@/types/post";

export default async function Home() {
  const slugs = await readdir(path.join(process.cwd(), "src/contents"));
  const postMetadatas = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(process.cwd(), "src/contents", slug, "index.mdx");
      const content = await readFile(filePath, "utf-8");
      const { data } = matter(content);
      return { slug, ...data } as PostMetadata;
    }),
  );

  return (
    <PageWrapper className={cn("max-w-page", "mx-auto")}>
      {postMetadatas.map((post) => (
        <pre className="bg-amber-200" key={post.title}>
          {JSON.stringify(post, null, 2)}
        </pre>
      ))}
    </PageWrapper>
  );
}
