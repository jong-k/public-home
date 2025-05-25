import PostCategoryBadge from "@/components/base/PostCategoryBadge";
import { cn } from "@/lib/utils";
import type { Frontmatter } from "@/types/post";

type PostHeaderProps = Omit<Frontmatter, "description">;

export default function PostHeader({ category, title, date }: PostHeaderProps) {
  return (
    <section
      className={cn(
        "flex",
        "flex-col",
        "gap-4",
        "items-start",
        "sm:items-center",
        "sm:py-5",
      )}
    >
      <PostCategoryBadge category={category} />
      <h2 className={cn("leading-[110%]", "font-bold", "text-post-title")}>{title}</h2>
      <div>
        <span>
          {date.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
          })}
        </span>
      </div>
    </section>
  );
}
