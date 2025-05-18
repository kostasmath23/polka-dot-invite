import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';

export default function Gallery() {
  return (
    <section className="bg-[#eae6df] text-gray-900 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Τίτλος */}
        <div className="text-center mb-24">
          <h2 className="text-7xl md:text-8xl font-serif mb-6">Στιγμές μαζί</h2>
          <FaCameraRetro className="text-5xl mx-auto" />
        </div>

        {/* === Πρώτη Στιγμή === */}
        <div
          className="flex flex-col md:flex-row items-center justify-between mb-32 gap-12"
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-5xl md:text-6xl font-serif mb-4">Η πρώτη μας φωτογραφία</h3>
            <p className="text-2xl md:text-3xl text-gray-600">20.08.2022</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/gallery1.jpg"
              alt="Η πρώτη μας φωτογραφία"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* === Ταξίδια === */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          {/* Εικόνες */}
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <img
              src="/images/gallery2.jpg"
              alt="Ταξίδι 1"
              className="rounded-lg shadow-md w-full object-cover"
            />
            <img
              src="/images/gallery3.jpg"
              alt="Ταξίδι 2"
              className="rounded-lg shadow-md w-full object-cover"
            />
            <img
              src="/images/gallery4.jpg"
              alt="Ταξίδι 3"
              className="rounded-lg shadow-md w-full object-cover col-span-2"
            />
          </div>

          {/* Κείμενο */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-5xl md:text-6xl font-serif mb-4">Τα ταξίδια μας</h3>
            <p className="text-2xl md:text-3xl text-gray-600">Γαλλία | Ισπανία | Πολωνία | Γερμανία</p>
          </div>
        </div>

      </div>
    </section>
  );
}
