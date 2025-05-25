import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import MdxWrapper from "@/components/common/MdxWrapper";
import { cn } from "@/lib/utils";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/contents", `${slug}.mdx`);
  const fileContent = await readFile(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <div>
      <h2 className={cn("text-2xl", "font-bold")}>{data.title}</h2>
      <MdxWrapper className={cn("max-w-post")}>
        <MDXRemote source={content} />
      </MdxWrapper>
    </div>
  );
}

export async function generateStaticParams() {
  const contentsDirectory = path.join(process.cwd(), "src/contents");
  const files = await readdir(contentsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export const dynamicParams = false;
