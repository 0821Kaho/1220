"use client";

import { useTranslationContext } from "@/app/TranslationProvider";
import { cn } from "@/lib/utils";

export function HeroHeadline() {
  const { language } = useTranslationContext();

  return (
    <h1 className="flex flex-col items-center md:items-start">
      <span className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-[#9AC6F3]">
        <span className={cn(
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
          "font-bold tracking-tight leading-tight"
        )}>
          Creating
        </span>
        <span className={cn(
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
          "font-bold tracking-tight leading-tight text-center md:text-left"
        )}>
          Equal Opportunities
        </span>
      </span>
      {language === 'ja' && (
        <span 
          className="text-base sm:text-lg md:text-xl text-white opacity-80 mt-4"
          lang="ja" 
          style={{ fontFamily: 'MS PGothic' }}
        >
          私たちは、教育に境界がなく、すべての人が等しく機会を得られる未来を信じています。
        </span>
      )}
    </h1>
  );
}