import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

type Language = 'EN' | 'ES';

type Locale = typeof en;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  locale: Locale;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');
  const locale = language === 'EN' ? en : es;

  const t = (key: string) => {
    return key
      .split('.')
      .reduce((value: any, segment: string) => value?.[segment], locale) ?? key;
  };

  const contextValue = useMemo(
    () => ({ language, setLanguage, locale, t }),
    [language, locale],
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
