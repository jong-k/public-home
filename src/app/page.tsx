import Link from "next/link";
import PageWrapper from "@/components/common/PageWrapper";
import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cn } from "@/lib/utils";
import type { PostMetadata } from "@/types/post";
import PostCard from "./components/PostCard";

export default async function Home() {
  const slugs = await readdir(path.join(process.cwd(), "src/contents"));
  const postMetadatas = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(process.cwd(), "src/contents", slug, "README.md");
      const content = await readFile(filePath, "utf-8");
      const { data } = matter(content);
      return { slug, ...data } as PostMetadata;
    }),
  );

  const sortedPostMetadatas = postMetadatas.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <PageWrapper
      className={cn("max-w-page", "mx-auto", "pt-30", "flex", "flex-col", "gap-8")}
    >
      {sortedPostMetadatas.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <PostCard {...post} />
        </Link>
      ))}
    </PageWrapper>
  );
}
