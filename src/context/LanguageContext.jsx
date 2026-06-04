import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'el';
    return localStorage.getItem('siteLanguage') || 'el';
  });

  useEffect(() => {
    localStorage.setItem('siteLanguage', language);
    document.documentElement.lang = language === 'el' ? 'el' : 'en';
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
