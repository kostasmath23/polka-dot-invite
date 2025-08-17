import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

export default function SaveTheDate() {
  return (
    <section className="bg-[white] py-24 sm:py-32 px-4 sm:px-6 text-[gray-800] overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

        {/* Εικόνες με parallax */}
        <div className="flex flex-row md:flex-col items-center justify-center gap-8 w-full md:w-1/2">
          <Parallax translateY={[30, -30]} className="w-[90px] sm:w-[160px] md:w-[200px]">
            <img
              src="/images/flower.png"
              alt="flower"
              className="w-full object-contain"
            />
          </Parallax>

          <Parallax translateY={[-30, 30]} className="w-[100px] sm:w-[130px] md:w-[180px]">
            <img
              src="/images/deco.png"
              alt="decoration"
              className="w-full object-contain"
            />
          </Parallax>
        </div>

        {/* Κείμενο */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h2 className="text-5xl sm:text-6xl font-serif">Save The Date</h2>
          <p className="text-6xl sm:text-7xl font-extrabold tracking-wide text-[#306844]">27.09.2025</p>
          <FaCalendarCheck className="text-4xl sm:text-5xl text-[#306844]" />
        </div>

      </div>
    </section>
  );
}
