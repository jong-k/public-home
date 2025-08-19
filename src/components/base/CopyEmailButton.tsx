"use client";

import { MailOpen } from "lucide-react";
import { toast } from "sonner";
import { EMAIL_ADDRESS } from "@/constants/header";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CopyEmailButton() {
  const handleContact = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    toast.success(`메일 주소 ${EMAIL_ADDRESS} 를 클립보드에 복사했습니다`);
  };

  return (
    <Button size="lg" className={cn("cursor-pointer")} onClick={handleContact}>
      <MailOpen />
      이메일로 문의
    </Button>
  );
}
