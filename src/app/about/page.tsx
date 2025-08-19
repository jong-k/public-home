import CopyEmailButton from "@/components/base/CopyEmailButton";
import { EXTERNAL_LINKS } from "@/constants/profile";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div className={cn("w-full")}>
      <div className={cn("bg-white", "p-4", "rounded-lg", "shadow-xs", "flex", "flex-col", "gap-10")}>
        <div>
          <h3 className={cn("text-xl")}>기술 블로그 소개</h3>
          <div className={cn("whitespace-normal", "break-keep", "my-2")}>
            안녕하세요! 프론트엔드 개발자 김종한입니다. 기술 블로그에서는 주로 프론트엔드 개발과 관련된 심도 있는 내용을
            다룹니다. 개발 과정에서의 회고, 시행착오 및 인사이트 등을 기록하며, 저와 비슷한 고민을 가진 개발자분들께
            도움이 될 수 있는 글을 남기고자 합니다.
          </div>
          <CopyEmailButton />
        </div>

        <div className={cn("flex", "flex-col", "gap-2")}>
          <h3 className={cn("text-xl")}>링크</h3>
          {EXTERNAL_LINKS.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={cn("underline")}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
