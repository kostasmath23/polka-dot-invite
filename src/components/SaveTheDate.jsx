import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

export default function SaveTheDate() {
  const goldText = {
    background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 text-gray-800 overflow-hidden relative">
      {/* Gradient ειδικά για SVG εικονίδια */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="35%" stopColor="#F5D76E" />
            <stop offset="65%" stopColor="#C9A24A" />
            <stop offset="100%" stopColor="#8B6B1F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col items-center text-center gap-4">
        <h2
          className="text-7xl sm:text-8xl md:text-8xl leading-[0.9]"
          style={{
            fontFamily: "'Miama', cursive",
            background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
          }}
        >
          Save The Date
        </h2>

        <p
          className="text-6xl sm:text-7xl font-extrabold tracking-wide"
          style={goldText}
        >
          31.10.2026
        </p>

        <a
          href="/calendar/gamos-konstantinos-panagiota.ics"
          className="group flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition"
          title="Προσθήκη στο ημερολόγιο"
          aria-label="Προσθήκη του γάμου στο ημερολόγιο"
        >
          <FaCalendarCheck
            className="text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110"
            style={{
              fill: 'url(#goldIconGradient)',
              filter: 'drop-shadow(0 3px 6px rgba(120, 90, 25, 0.22))',
            }}
          />

          <span className="text-xs sm:text-sm text-gray-600 italic">
            (Προσθήκη στο ημερολόγιο)
          </span>
        </a>
      </div>
    </section>
  );
}