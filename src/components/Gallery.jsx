import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  const goldText = {
    background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const textBox = 'bg-white rounded-2xl shadow-xl px-8 py-6 inline-block';

  return (
    <section className="bg-[#F8F0EB] text-gray-900 py-24 sm:py-32 px-4 sm:px-6 overflow-hidden relative">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldCameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="35%" stopColor="#F5D76E" />
            <stop offset="65%" stopColor="#C9A24A" />
            <stop offset="100%" stopColor="#8B6B1F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14 sm:mb-16" data-aos="fade-up" data-aos-duration="1000">
          <div className={textBox}>
            <h2 className="text-7xl sm:text-8xl md:text-8xl leading-[0.9] mb-6" style={{ fontFamily: "'Miama', cursive", ...goldText }}>
              {t.gallery.title}
            </h2>

            <FaCameraRetro
              className="text-4xl sm:text-5xl mx-auto"
              style={{ fill: 'url(#goldCameraGradient)', filter: 'drop-shadow(0 3px 6px rgba(120, 90, 25, 0.22))' }}
            />
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1200">
          <div className="rounded-lg shadow-md w-full h-[260px] sm:h-[400px] bg-white overflow-hidden flex items-center justify-center">
            <img src="/images/gallery2.jpg" alt={t.gallery.alt1} className="w-full h-full object-contain sm:object-cover" data-aos="fade-up" data-aos-delay="100" />
          </div>

          <div className="rounded-lg shadow-md w-full h-[260px] sm:h-[400px] bg-white overflow-hidden flex items-center justify-center">
            <img src="/images/gallery3.jpg" alt={t.gallery.alt2} className="w-full h-full object-contain sm:object-cover" data-aos="fade-down" data-aos-delay="200" />
          </div>

          <div className="rounded-lg shadow-md w-full sm:w-3/4 h-[230px] sm:h-[380px] bg-white overflow-hidden flex items-center justify-center sm:col-span-2 mx-auto" data-aos="zoom-in-up" data-aos-delay="300">
            <img src="/images/gallery4.jpg" alt={t.gallery.alt3} className="w-full h-full object-contain sm:object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
