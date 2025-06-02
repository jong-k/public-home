import { cn } from "@/lib/utils";
import type { PostCategory } from "@/types/post";

interface PostCategoryBadgeProps {
  category: PostCategory;
  align?: "left" | "center" | "right";
}

export default function PostCategoryBadge({
  category,
  align = "left",
}: PostCategoryBadgeProps) {
  return (
    <div
      className={cn(
        "flex",
        "items-center",
        "justify-center",
        align === "left" && "justify-start",
        align === "center" && "justify-center",
        align === "right" && "justify-end",
      )}
    >
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
