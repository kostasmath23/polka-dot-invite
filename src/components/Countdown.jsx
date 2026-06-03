import React from 'react';
import Countdown from 'react-countdown';

export default function Timer() {
  const weddingDate = new Date('2026-10-31T16:30:00');

  const goldTextStyle = {
    background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const renderer = ({ days, hours, minutes, seconds }) => (
    <section className="bg-[#d8c9b8] py-24 px-4 sm:px-6">
      <div className="bg-white shadow-2xl max-w-screen-xl mx-auto rounded-2xl py-20 sm:py-24 px-6 sm:px-16 text-center overflow-hidden">
        <div
          className="flex justify-center flex-wrap gap-6 sm:gap-10 text-5xl sm:text-6xl md:text-7xl font-light leading-tight"
          style={goldTextStyle}
        >
          <div className="flex flex-col items-center">
            <div>{String(days).padStart(2, '0')}</div>
            <div className="text-sm sm:text-base mt-2 uppercase tracking-wide">
              Ημέρες
            </div>
          </div>

          <div className="text-4xl sm:text-5xl font-thin">:</div>

          <div className="flex flex-col items-center">
            <div>{String(hours).padStart(2, '0')}</div>
            <div className="text-sm sm:text-base mt-2 uppercase tracking-wide">
              Ώρες
            </div>
          </div>

          <div className="text-4xl sm:text-5xl font-thin">:</div>

          <div className="flex flex-col items-center">
            <div>{String(minutes).padStart(2, '0')}</div>
            <div className="text-sm sm:text-base mt-2 uppercase tracking-wide">
              Λεπτά
            </div>
          </div>

          <div className="text-4xl sm:text-5xl font-thin">:</div>

          <div className="flex flex-col items-center">
            <div>{String(seconds).padStart(2, '0')}</div>
            <div className="text-sm sm:text-base mt-2 uppercase tracking-wide">
              Δευτ.
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return <Countdown date={weddingDate} renderer={renderer} />;
}