export interface Frontmatter {
  category: PostCategory;
  title: string;
  date: Date;
  description: string;
}

export interface PostMetadata extends Frontmatter {
  slug: string;
}

export type PostCategory = "lessons" | "troubleshooting" | "insight" | "portfolio";
