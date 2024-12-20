"use client";

import Link from "next/link";
import { AnimatedLogo } from "./AnimatedLogo";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslationContext } from "@/app/TranslationProvider";
import { TranslatedText } from "./TranslatedText";

export function Navigation() {
  const { language, setLanguage } = useTranslationContext();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <AnimatedLogo />
          <div className="flex items-center">
            <NavLink href="/about">
              <span className="whitespace-nowrap">
                <TranslatedText 
                  text="About Us" 
                  lang={language} 
                  className={language === 'ja' ? 'font-bold tracking-tight' : ''}
                />
              </span>
            </NavLink>
          </div>
        </div>
        <LanguageSelector onLanguageChange={setLanguage} />
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-white text-sm uppercase tracking-wider hover:opacity-80 transition-opacity flex items-center"
    >
      {children}
    </Link>
  );
}