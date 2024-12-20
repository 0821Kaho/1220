"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const TranslationContext = createContext<TranslationContextType>({
  language: 'ja',
  setLanguage: () => {},
});

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('ja');

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslationContext() {
  return useContext(TranslationContext);
}