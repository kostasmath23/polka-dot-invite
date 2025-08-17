import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

export default function SaveTheDate() {
  return (
    <section className="bg-[white] py-24 sm:py-32 px-4 sm:px-6 text-[gray-800] overflow-hidden relative">

      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-12">

        {/* Κείμενο */}
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-5xl sm:text-6xl font-serif">Save The Date</h2>
          <p className="text-6xl sm:text-7xl font-extrabold tracking-wide text-[#306844]">27.09.2025</p>
          <FaCalendarCheck className="text-4xl sm:text-5xl text-[#306844]" />
        </div>

        {/* Εικόνα στο κάτω μέρος */}
        <Parallax translateY={[20, -20]} className="w-[180px] sm:w-[270px] mt-12">
          <img
            src="/images/flower.png"
            alt="flower"
            className="w-full object-contain"
          />
        </Parallax>

      </div>

    </section>
  );
}
