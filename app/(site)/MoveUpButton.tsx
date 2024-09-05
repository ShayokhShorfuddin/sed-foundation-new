"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function MoveUpButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className="fixed right-5 bottom-5 size-12 flex items-center justify-center rounded-full bg-sedGreen z-10"
      onClick={scrollToTop}
    >
      <ChevronUp className="size-full" />
    </Button>
  );
}
