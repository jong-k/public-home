import PostCategoryBadge from "@/components/base/PostCategoryBadge";
import { cn } from "@/lib/utils";

interface PostHeaderProps {
  category: string;
  title: string;
  date: Date;
}

export default function PostHeader({ category, title, date }: PostHeaderProps) {
  return (
    <section
      className={cn("flex", "flex-col", "gap-4", "items-start", "sm:items-center")}
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
