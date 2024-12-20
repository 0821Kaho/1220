import { useState, useEffect } from 'react';
import { translateText } from '@/lib/googleTranslate';
import { japaneseTranslations, untranslatedContent } from '@/lib/translation';

export function useTranslation(text: string, language: string) {
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    async function translate() {
      try {
        // Don't translate content that should remain in original form
        if (untranslatedContent.includes(text)) {
          setTranslatedText(text);
          return;
        }

        // Use predefined Japanese translations
        if (language === 'ja' && text in japaneseTranslations) {
          setTranslatedText(japaneseTranslations[text]);
          return;
        }

        // For other languages, use Google Translate API
        if (language !== 'en') {
          const translated = await translateText(text, language);
          setTranslatedText(translated);
          return;
        }

        setTranslatedText(text);
      } catch (error) {
        console.error('Translation error:', error);
        setTranslatedText(text);
      }
    }

    translate();
  }, [text, language]);

  return translatedText;
}