import React, { useContext } from 'react';
import { ScrollContext } from '../context/ScrollContext';

const sections = [
  { id: 'hero', label: 'Αρχή' },
  { id: 'countdown', label: 'Μέτρηση' },
  { id: 'timeline', label: 'Ιστορία' },
  { id: 'savethedate', label: 'Ημερομηνία' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'invitation', label: 'Δώρα' },
  { id: 'wishes', label: 'Ευχές' },
  { id: 'cast', label: 'Πρωταγωνιστές' },
  { id: 'church', label: 'Εκκλησία' },
  { id: 'rsvp', label: 'RSVP' },
];

export default function DotNavigation() {
  const { currentSection } = useContext(ScrollContext);

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            currentSection === s.id ? 'bg-[#87A96B] scale-125' : 'bg-gray-400'
          }`}
          title={s.label}
        />
      ))}
    </div>
  );
}
