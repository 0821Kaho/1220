"use client";

import { useTranslationContext } from "@/app/TranslationProvider";
import { TranslatedText } from "@/components/TranslatedText";

export function Vision() {
  const { language } = useTranslationContext();

  return (
    <section className="py-20 md:py-32 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-24 text-white hover:scale-105 transition-transform text-center opacity-90">
          <TranslatedText text="Vision" lang={language} />
        </h2>
        <div className="space-y-6 md:space-y-8">
          <p className="text-lg md:text-2xl text-white leading-[1.8] tracking-wide text-center md:text-left">
            <TranslatedText 
              text="Providing equal and high-quality educational opportunities for all. GoUni aims to break down educational barriers and maximize the potential of learners worldwide."
              lang={language}
            />
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30 mt-12 md:mt-16"></div>
        </div>
      </div>
    </section>
  );
}