import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, TranslationStrings } from '../translations/translations';
import { getLocalizedPortfolioData, LocalizedPortfolioData } from '../translations/portfolioDataTranslations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStrings;
  isRTL: boolean;
  localizedData: LocalizedPortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to English as first language, or load from localStorage if saved
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('portfolio_language') as Language;
      if (saved && (saved === 'en' || saved === 'fr' || saved === 'ar')) {
        return saved;
      }
    } catch {
      // Ignore localStorage read errors
    }
    return 'en';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('portfolio_language', newLang);
    } catch {
      // Ignore localStorage write errors
    }
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [language, isRTL]);

  const t = translations[language] || translations.en;
  const localizedData = getLocalizedPortfolioData(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL, localizedData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
