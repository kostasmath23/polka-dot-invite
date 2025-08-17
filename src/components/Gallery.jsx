import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';

export default function Gallery() {
  return (
    <section className="bg-[#d8c9b8] text-gray-900 py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">

        {/* Τίτλος */}
        <div className="text-center mb-20 sm:mb-24" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6">Στιγμές μαζί</h2>
          <FaCameraRetro className="text-4xl sm:text-5xl mx-auto" />
        </div>

        {/* Πρώτη φωτογραφία */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 mb-24"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1200"
        >
          <div className="w-full md:w-1/2 text-center md:text-left text-[#306844]">
            <h3 className="text-4xl sm:text-5xl font-serif mb-4">Η πρώτη μας φωτογραφία</h3>
            <p className="text-xl sm:text-2xl text-gray-600">08.05.2018</p>
          </div>

          <div className="w-full md:w-1/2 ">
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

        {/* Ταξίδια */}

        {/* Mobile: Κείμενο πάνω από τις εικόνες */}
        <div className="text-center mb-10 md:hidden " data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-4xl sm:text-5xl font-serif mb-4 text-[#306844]">Τα ταξίδια μας</h3>
          <p className="text-xl sm:text-2xl text-gray-600">
            Γαλλία | Ισπανία | Πολωνία | Γερμανία
          </p>
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

          {/* Κείμενο (desktop) */}
          <div
            className="w-full md:w-1/2 text-center md:text-left hidden md:block"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3 className="text-4xl sm:text-5xl font-serif mb-4 text-[#306844]">Τα ταξίδια μας</h3>
            <p className="text-xl sm:text-2xl text-gray-600">
              Γαλλία | Αγγλία | Γερμανία
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
