export interface Frontmatter {
  category: string;
  title: string;
  date: Date;
  description: string;
}

export interface PostMetadata extends Frontmatter {
  slug: string;
}

export type PostCategory = "lessons" | "troubleshooting" | "insight";
