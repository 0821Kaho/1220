"use client";

import { Building2, Globe, MapPin, Phone, Mail, Coins } from "lucide-react";
import { useTranslationContext } from "@/app/TranslationProvider";
import { TranslatedText } from "@/components/TranslatedText";
import { PALETTE } from "@/lib/constants/colors/palette";
import type { InfoItem } from "@/lib/companyInfo";

const ROYAL_BLUE = "#4169E1";

interface InfoCardProps extends InfoItem {}

export function InfoCard({ label, value, japaneseValue, href, items }: InfoCardProps) {
  const { language } = useTranslationContext();
  const displayValue = language === 'ja' && japaneseValue ? japaneseValue : value;
  
  const getIcon = () => {
    switch (label) {
      case "Business Domains":
        return <Globe className="w-5 h-5" style={{ color: ROYAL_BLUE }} />;
      case "Address":
        return <MapPin className="w-5 h-5" style={{ color: ROYAL_BLUE }} />;
      case "Phone":
        return <Phone className="w-5 h-5" style={{ color: ROYAL_BLUE }} />;
      case "Email":
        return <Mail className="w-5 h-5" style={{ color: ROYAL_BLUE }} />;
      case "Company Capital":
        return <Coins className="w-5 h-5" style={{ color: ROYAL_BLUE }} />;
      default:
        return null;
    }
  };
  
  const content = (
    <div 
      className="flex flex-col p-6 rounded-lg shadow-sm w-full max-w-[600px] mx-auto transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
      style={{ 
        backgroundColor: `${ROYAL_BLUE}0D`, // 5% opacity
        border: `1px solid ${ROYAL_BLUE}33` // 20% opacity
      }}
    >
      <div className="flex items-start gap-4">
        <div>{getIcon()}</div>
        <div className="flex-1 min-h-[48px]">
          <p className="text-sm font-medium mb-2 text-white/90">
            <TranslatedText text={label} lang={language} />
          </p>
          {items ? (
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li 
                  key={index} 
                  className="text-base text-white/80"
                >
                  <TranslatedText text={item} lang={language} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base text-white/80 break-words whitespace-pre-line">
              <TranslatedText text={displayValue} lang={language} />
            </p>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block transition-transform hover:-translate-y-1"
      >
        {content}
      </a>
    );
  }

  return content;
}