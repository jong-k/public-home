import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenuButton({ isOpen, setIsOpen }: MobileMenuButtonProps) {
  return (
    <div>
      {isOpen ? (
        <div className={cn("cursor-pointer", "p-1")} onClick={() => setIsOpen(false)}>
          <X size={32} />
        </div>
      ) : (
        <div className={cn("cursor-pointer", "p-1")} onClick={() => setIsOpen(true)}>
          <Menu size={32} />
        </div>
      )}
    </div>
  );
}
