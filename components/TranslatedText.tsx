"use client";

import { useTranslation } from '@/hooks/useTranslation';

interface TranslatedTextProps {
  text: string;
  lang: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function TranslatedText({ 
  text, 
  lang, 
  as: Component = 'span',
  className 
}: TranslatedTextProps) {
  const translatedText = useTranslation(text, lang);

  return (
    <Component className={className} lang={lang}>
      {translatedText}
    </Component>
  );
}