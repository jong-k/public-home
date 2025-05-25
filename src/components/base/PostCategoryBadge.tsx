import { cn } from "@/lib/utils";

interface PostCategoryBadgeProps {
  category: string;
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
        )}
      >
        {category}
      </span>
    </div>
  );
}
