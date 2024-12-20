"use client";

import { cn } from "@/lib/utils";

export function HeadlineText() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
      <span className={cn(
        "text-[#9AC6F3]",
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "font-bold tracking-tight leading-tight"
      )}>
        Creating
      </span>
      <span className={cn(
        "text-[#9AC6F3]",
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "font-bold tracking-tight leading-tight",
        "text-center md:text-left"
      )}>
        Equal Opportunities
      </span>
    </div>
  );
}