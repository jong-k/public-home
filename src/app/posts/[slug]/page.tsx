export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/contents/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: "clean-code" }];
}

export const dynamicParams = false;
