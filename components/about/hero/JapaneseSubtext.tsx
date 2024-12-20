"use client";

import { cn } from "@/lib/utils";

export function JapaneseSubtext() {
  return (
    <span 
      className={cn(
        "text-sm sm:text-base md:text-lg lg:text-xl",
        "text-white/80 mt-4 text-center md:text-left"
      )}
      lang="ja" 
      style={{ fontFamily: 'MS PGothic' }}
    >
      私たちは、教育に境界がなく、すべての人が等しく機会を得られる未来を信じています。
    </span>
  );
}