"use client";

import Image from "next/image";
import { useTranslationContext } from "@/app/TranslationProvider";
import { TranslatedText } from "@/components/TranslatedText";
import { PALETTE } from "@/lib/constants/colors/palette";

const ROYAL_BLUE = "#4169E1";

const missionItems = [
  {
    title: "Equal Opportunities",
    description: "We are committed to breaking down barriers to education and technology, ensuring that opportunities are accessible to everyone, regardless of background or circumstance.",
    image: "/images/Equal.jpg"
  },
  {
    title: "Empower the Next Generation",
    description: "By providing innovative tools and resources, we empower individuals to unlock their full potential and pave the way for a brighter future.",
    image: "/images/Next Generation.jpg"
  },
  {
    title: "Innovation & Collaboration",
    description: "Through collaboration and cutting-edge solutions, we aim to drive progress, create impact, and build a world where possibilities are limitless.",
    image: "/images/Innovation.jpg"
  }
];

export function Mission() {
  const { language } = useTranslationContext();

  return (
    <section className="py-20 md:py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-16 md:mb-24 hover:scale-105 transition-transform text-center"
          style={{ color: PALETTE.PALE_BLUE_WHITE }}
        >
          <TranslatedText text="Our Mission" lang={language} />
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {missionItems.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg backdrop-blur-sm transition-all group"
              style={{ 
                backgroundColor: `${ROYAL_BLUE}0D`, // 5% opacity
                border: `1px solid ${ROYAL_BLUE}33` // 20% opacity
              }}
            >
              <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <h3 
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: PALETTE.PALE_BLUE_WHITE }}
              >
                <TranslatedText text={item.title} lang={language} />
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: `${PALETTE.PALE_BLUE_WHITE}CC` }}
              >
                <TranslatedText text={item.description} lang={language} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}