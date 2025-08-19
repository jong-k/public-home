import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import MdxWrapper from "@/components/common/MdxWrapper";
import { cn } from "@/lib/utils";
import PostHeader from "@/app/posts/components/PostHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/contents", slug, "README.md");
  const fileContent = await readFile(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: `${data.title} | 김종한 기술 블로그`,
    description: data.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/contents", slug, "README.md");
  const fileContent = await readFile(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <div>
      <PostHeader category={data.category} title={data.title} date={data.date} />
      <MdxWrapper className={cn("max-w-post", "mx-auto", "text-foreground")}>
        <MDXRemote source={content} />
      </MdxWrapper>
    </div>
  );
}

export async function generateStaticParams() {
  const contentsDirectory = path.join(process.cwd(), "src/contents");
  const files = await readdir(contentsDirectory);

  return files.map((dir) => ({
    slug: dir,
  }));
}

export const dynamicParams = false;
