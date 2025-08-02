import React from 'react';
import Countdown from 'react-countdown';

export default function Timer() {
  const weddingDate = new Date('2025-09-27T17:00:00');

  const renderer = ({ days, hours, minutes, seconds }) => (
    <section className="bg-[#eae6df] py-24 px-4 sm:px-6">
      <div className="bg-white shadow-2xl max-w-screen-xl mx-auto rounded-2xl py-20 sm:py-24 px-6 sm:px-16 text-center overflow-hidden">
        <div className="flex justify-center flex-wrap gap-6 sm:gap-10 text-gray-700 text-5xl sm:text-6xl md:text-7xl font-light leading-tight">
          <div className="flex flex-col items-center">
            <div>{String(days).padStart(2, '0')}</div>
            <div className="text-sm sm:text-base mt-2 uppercase tracking-wide">Ημέρες</div>
          </div>
          <div className="text-4xl sm:text-5xl font-thin">:</div>
          <div className="flex flex-col items-center">
            <div>{String(hours).padStart(2, '0')}</div>
            <div className="text-sm sm:text-base mt-2 uppercase tracking-wide">Ώρες</div>
          </div>
          <div className="text-4xl sm:text-5xl font-thin">:</div>
          <div className="flex flex-col items-center">
            <div>{String(minutes).padStart(2, '0')}</div>
            <div className="text-sm sm:text-base mt-2 uppercase tracking-wide">Λεπτά</div>
          </div>
          <div className="text-4xl sm:text-5xl font-thin">:</div>
          <div className="flex flex-col items-center">
            <div>{String(seconds).padStart(2, '0')}</div>
            <div className="text-sm sm:text-base mt-2 uppercase tracking-wide">Δευτ.</div>
          </div>
        </div>
      </div>
    </section>
  );

  return <Countdown date={weddingDate} renderer={renderer} />;
}
