"use client";

import { useTranslationContext } from "@/app/TranslationProvider";
import { InfoCardGrid } from "./InfoCardGrid";
import { infoItems } from "@/lib/companyInfo";
import { PALETTE } from "@/lib/constants/colors/palette";
import { TranslatedText } from "@/components/TranslatedText";

export function CompanyInfo() {
  const { language } = useTranslationContext();

  return (
    <section className="py-16 md:py-24 px-4 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          style={{ color: PALETTE.PALE_BLUE_WHITE }}
        >
          <TranslatedText 
            text="Company Information" 
            lang={language}
          />
        </h2>
        <InfoCardGrid items={infoItems} />
      </div>
    </section>
  );
}