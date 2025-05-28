import PageWrapper from "@/components/common/PageWrapper";
// import PostCard from "./components/PostCard";
import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export default async function Home() {
  const posts = await readdir(path.join(process.cwd(), "src/contents"));
  const postFiles = posts.map((post) =>
    path.join(process.cwd(), "src/contents", post, "index.mdx"),
  );
  const postMetadatas = await Promise.all(
    postFiles.map(async (file) => {
      const content = await readFile(file, "utf-8");
      const { data } = matter(content);
      return data;
    }),
  );

  return (
    <PageWrapper>
      {postMetadatas.map((post) => (
        <pre key={post.title}>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </PageWrapper>
  );
}
