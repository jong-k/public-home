import { cn } from "@/lib/utils";
import type { PostMetadata } from "@/types/post";

export default function PostCard({ category, title, date, description }: PostMetadata) {
  return (
    <div
      className={cn(
        "w-full",
        "bg-white",
        "p-4",
        "rounded-lg",
        "shadow-xs",
        "hover:translate-y-[-4px]",
        "hover:shadow-md",
        "transition-all",
        "duration-250",
        "cursor-pointer",
      )}
    >
      <p className={cn("text-sm", "capitalize")}>{category}</p>
      <h2 className={cn("text-2xl", "font-bold", "my-4")}>{title}</h2>
      <p className={cn("mb-4", "text-sm")}>{description}</p>
      <p className={cn("text-sm", "text-gray-500")}>
        {date.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
