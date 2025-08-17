import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Αρχή' },
  { id: 'countdown', label: 'Μέτρηση' },
  { id: 'timeline', label: 'Ιστορία' },
  { id: 'savethedate', label: 'Ημερομηνία' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'cast', label: 'Πρόσωπα' },
  { id: 'gifts', label: 'Δώρα' },
  { id: 'poll', label: 'Ευχές' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'map', label: 'Χάρτης' },
];

export default function ScrollDots() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const el = document.getElementById(section.id);
        return el && el.getBoundingClientRect().top < window.innerHeight / 2;
      });

      if (current) setActiveId(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-3">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`w-4 h-4 rounded-full ${
            activeId === section.id ? 'bg-[#87A96B] scale-125' : 'bg-gray-400'
          } transition-all duration-300`}
          title={section.label}
        />
      ))}
    </div>
  );
}
