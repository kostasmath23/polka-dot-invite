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
        <div className="text-center mb-20 sm:mb-24" data-aos="fade-up" data-aos-duration="1000">
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

        {/* Πρώτη φωτογραφία */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 mb-24"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1200"
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className={textBox}>
              <h3
                className="text-4xl sm:text-5xl font-serif mb-4"
                style={goldText}
              >
                Η πρώτη μας φωτογραφία
              </h3>
              <p className="text-xl sm:text-2xl text-gray-600">08.05.2018</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/images/gallery1.jpg"
              alt="Η πρώτη μας φωτογραφία"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1000"
            />
          </div>
        </div>

        {/* Mobile: Κείμενο πάνω από τις εικόνες */}
        <div className="text-center mb-10 md:hidden" data-aos="fade-up" data-aos-delay="100">
          <div className={textBox}>
            <h3
              className="text-4xl sm:text-5xl font-serif mb-4"
              style={goldText}
            >
              Τα ταξίδια μας
            </h3>
            <p className="text-xl sm:text-2xl text-gray-600">
              Γαλλία | Αγγλία | Γερμανία
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1200"
        >
          {/* Εικόνες */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
            <img
              src="/images/gallery2.jpg"
              alt="Ταξίδι 1"
              className="rounded-lg shadow-md w-full object-cover"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <img
              src="/images/gallery3.jpg"
              alt="Ταξίδι 2"
              className="rounded-lg shadow-md w-full object-cover"
              data-aos="fade-down"
              data-aos-delay="200"
            />
            <img
              src="/images/gallery4.jpg"
              alt="Ταξίδι 3"
              className="rounded-lg shadow-md w-4/5 object-cover col-span-2 mx-auto"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            />
          </div>

          {/* Κείμενο desktop */}
          <div
            className="w-full md:w-1/2 text-center md:text-left hidden md:block"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className={textBox}>
              <h3
                className="text-4xl sm:text-5xl font-serif mb-4"
                style={goldText}
              >
                Τα ταξίδια μας
              </h3>
              <p className="text-xl sm:text-2xl text-gray-600">
                Γαλλία | Αγγλία | Γερμανία
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}