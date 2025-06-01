import { cn } from "@/lib/utils";
import type { PostCategory } from "@/types/post";

interface PostCategoryBadgeProps {
  category: PostCategory;
}

export default function PostCategoryBadge({ category }: PostCategoryBadgeProps) {
  return (
    <div className={cn("flex", "items-center", "justify-center")}>
      <span
        className={cn(
          "text-sm",
          "px-2",
          "py-0.5",
          "rounded-lg",
          "border",
          "border-black",
          "capitalize",
        )}
      >
        {category}
      </span>
    </div>
  );
}
