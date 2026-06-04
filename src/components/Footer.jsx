import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-center py-6 text-gray-500 text-sm">
      {t.footer}
    </footer>
  );
}
