import { cn } from "@/lib/utils";

interface MdxWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MdxWrapper({ children, className }: MdxWrapperProps) {
  return (
    <div
      className={cn(
        "prose",
        "prose-headings:mt-8",
        "prose-headings:font-semibold",
        "prose-headings:text-black",
        "dark:prose-headings:text-white",
        "prose-h1:text-5xl",
        "prose-h2:text-4xl",
        "prose-h3:text-3xl",
        "prose-h4:text-2xl",
        "prose-h5:text-xl",
        "prose-h6:text-lg",
        "prose-li:marker:text-black",
        className
      )}
    >
      {children}
    </div>
  );
}
