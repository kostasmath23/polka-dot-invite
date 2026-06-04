import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const goldGradient =
    'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)';

  const buttonClass =
    'px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5';

  return (
    <div className="fixed top-4 right-4 z-[999] bg-white/90 backdrop-blur rounded-full shadow-xl px-2 py-2 flex items-center gap-1 border border-white/70">
      <button
        type="button"
        onClick={() => setLanguage('el')}
        className={`${buttonClass} ${language === 'el' ? 'text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        style={language === 'el' ? { background: goldGradient } : undefined}
        aria-label="Ελληνικά"
        title="Ελληνικά"
      >
        <span>🇬🇷</span>
        <span>GR</span>
      </button>

      <span className="text-gray-300 text-sm">|</span>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`${buttonClass} ${language === 'en' ? 'text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        style={language === 'en' ? { background: goldGradient } : undefined}
        aria-label="English"
        title="English"
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </button>
    </div>
  );
}
