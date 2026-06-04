import React, { useContext } from 'react';
import { ScrollContext } from '../context/ScrollContext';
import { useLanguage } from '../context/LanguageContext';

const sections = [
  { id: 'hero', key: 'hero' },
  { id: 'countdown', key: 'countdown' },
  { id: 'timeline', key: 'timeline' },
  { id: 'savethedate', key: 'savethedate' },
  { id: 'gallery', key: 'gallery' },
  { id: 'invitation', key: 'invitation' },
  { id: 'wishes', key: 'wishes' },
  { id: 'cast', key: 'cast' },
  { id: 'church', key: 'church' },
  { id: 'rsvp', key: 'rsvp' },
];

export default function DotNavigation() {
  const { currentSection } = useContext(ScrollContext);
  const { t } = useLanguage();

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((s) => {
        const isActive = currentSection === s.id;
        const label = t.nav[s.key];

        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${isActive ? 'scale-125' : 'bg-gray-400'}`}
            style={isActive ? { background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)', boxShadow: '0 3px 10px rgba(120, 90, 25, 0.28)' } : undefined}
            title={label}
            aria-label={label}
          />
        );
      })}
    </div>
  );
}
