"use client";

import { useTranslationContext } from "@/app/TranslationProvider";
import { cn } from "@/lib/utils";
import { HeadlineText } from "./HeadlineText";
import { JapaneseSubtext } from "./JapaneseSubtext";

export function HeroHeadline() {
  const { language } = useTranslationContext();

  return (
    <h1 className="flex flex-col items-center md:items-start">
      <HeadlineText />
      {language === 'ja' && <JapaneseSubtext />}
    </h1>
  );
}