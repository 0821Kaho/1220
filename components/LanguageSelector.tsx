"use client";

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { languages } from '@/lib/languages';

interface LanguageSelectorProps {
  onLanguageChange: (lang: string) => void;
}

export function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:opacity-80 transition-opacity flex items-center"
      >
        <Globe className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-56 bg-white rounded-lg shadow-xl z-50 max-h-[60vh] overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              style={{ fontFamily: lang.font }}
            >
              <span className="text-gray-900">{lang.nativeName}</span>
              <span className="text-gray-500 ml-2">({lang.name})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}