import { useState, useEffect, useRef } from 'react';
import { translateGameField } from '../api/translate';

export function useTranslation() {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const pendingTexts = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (Object.keys(translations).length === 0) return;

    const pending = Array.from(pendingTexts.current);
    if (pending.length === 0) return;

    setIsTranslating(true);
    pendingTexts.current.clear();

    Promise.all(
      pending.map(async (text) => {
        const translated = await translateGameField(text, true);
        return { text, translated };
      })
    ).then((results) => {
      setTranslations((prev) => {
        const next = { ...prev };
        results.forEach(({ text, translated }) => {
          next[text] = translated;
        });
        return next;
      });
      setIsTranslating(false);
    });
  }, [translations]);

  const getTranslation = (text: string): string => {
    if (translations[text]) {
      return translations[text];
    }
    if (!pendingTexts.current.has(text)) {
      pendingTexts.current.add(text);
    }
    return text;
  };

  return { getTranslation, isTranslating };
}