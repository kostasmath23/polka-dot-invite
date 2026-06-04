import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';

export default function Cast() {
  const { t } = useLanguage();

  const goldGradient = 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)';

  const goldText = {
    background: goldGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const titleBox = 'bg-white rounded-2xl shadow-xl px-8 py-5 inline-block';

  return (
    <section className="bg-[#d8c9b8] text-gray-900 py-24 sm:py-32 px-4 sm:px-6 text-center text-base sm:text-lg relative overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldCastIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="35%" stopColor="#F5D76E" />
            <stop offset="65%" stopColor="#C9A24A" />
            <stop offset="100%" stopColor="#8B6B1F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className={titleBox}>
            <h2
              className="text-6xl sm:text-7xl md:text-8xl leading-[0.9]"
              style={{ fontFamily: "'Miama', cursive", ...goldText }}
            >
              {t.cast.title}
            </h2>

            <FaUsers
              className="text-3xl sm:text-4xl md:text-5xl mx-auto mt-5"
              style={{
                fill: 'url(#goldCastIconGradient)',
                filter: 'drop-shadow(0 3px 6px rgba(120, 90, 25, 0.22))',
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-12 sm:gap-y-16">
          {t.cast.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative group w-full rounded-xl overflow-hidden shadow-lg sm:h-[350px] lg:h-[360px]">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-auto sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-lg sm:text-xl font-semibold break-words px-2 text-center">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 bg-white rounded-xl shadow-md px-5 py-2 inline-block">
                <p
                  className="text-3xl sm:text-4xl font-semibold break-words text-center"
                  style={{ fontFamily: "'Miama', cursive", ...goldText }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}