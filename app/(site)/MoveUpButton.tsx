"use client";

import Image from "next/image";
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
      className="fixed right-5 bottom-5 rounded-full bg-sedGreen z-10"
      onClick={scrollToTop}
    >
      <ChevronUp className="w-6 h-6" />
    </Button>
  );
}
