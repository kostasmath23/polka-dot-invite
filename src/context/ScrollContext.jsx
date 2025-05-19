import React, { createContext, useEffect, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrentSection(visible.target.id);
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <ScrollContext.Provider value={{ currentSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
