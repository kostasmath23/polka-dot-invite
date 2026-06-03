import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';

export default function Gallery() {
  const goldText = {
    background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const textBox =
    'bg-white rounded-2xl shadow-xl px-8 py-6 inline-block';

  return (
    <section className="bg-[#F8F0EB] text-gray-900 py-24 sm:py-32 px-4 sm:px-6 overflow-hidden relative">
      {/* Gradient ειδικά για SVG εικονίδια */}
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

        {/* Τίτλος */}
        <div
          className="text-center mb-14 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={textBox}>
            <h2
              className="text-7xl sm:text-8xl md:text-8xl leading-[0.9] mb-6"
              style={{
                fontFamily: "'Miama', cursive",
                ...goldText,
              }}
            >
              Στιγμές μαζί
            </h2>

            <FaCameraRetro
              className="text-4xl sm:text-5xl mx-auto"
              style={{
                fill: 'url(#goldCameraGradient)',
                filter: 'drop-shadow(0 3px 6px rgba(120, 90, 25, 0.22))',
              }}
            />
          </div>
        </div>

        {/* Φωτογραφίες */}
        <div
          className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="1200"
        >
          <img
            src="/images/gallery2.jpg"
            alt="Στιγμή μαζί 1"
            className="rounded-lg shadow-md w-full h-[260px] sm:h-[300px] object-cover"
            data-aos="fade-up"
            data-aos-delay="100"
          />

          <img
            src="/images/gallery3.jpg"
            alt="Στιγμή μαζί 2"
            className="rounded-lg shadow-md w-full h-[260px] sm:h-[300px] object-cover"
            data-aos="fade-down"
            data-aos-delay="200"
          />

          <img
            src="/images/gallery4.jpg"
            alt="Στιγμή μαζί 3"
            className="rounded-lg shadow-md w-full sm:w-3/4 h-[230px] sm:h-[280px] object-cover sm:col-span-2 mx-auto"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          />
        </div>

      </div>
    </section>
  );
}