import { readdir } from "fs/promises";
import path from "path";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/contents/${slug}.mdx`);

  return <Post />;
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
