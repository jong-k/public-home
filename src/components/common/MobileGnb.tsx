import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface MobileGnbProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileGnb({ isOpen, setIsOpen }: MobileGnbProps) {
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
