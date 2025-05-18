import React from 'react';
import Countdown from 'react-countdown';

export default function Timer() {
  const weddingDate = new Date('2025-09-27T17:00:00');

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="bg-[#eae6df] py-24 px-4">
      <div className="bg-white shadow-2xl w-full md:w-[345%] max-w-[1800px] mx-auto rounded-2xl py-24 px-16 text-center">
        <div className="flex justify-center flex-wrap gap-8 text-gray-700 text-6xl md:text-7xl font-light">
          <div>
            <div>{String(days).padStart(2, '0')}</div>
            <div className="text-lg mt-2">Day(s)</div>
          </div>
          <div className="text-5xl font-thin">:</div>
          <div>
            <div>{String(hours).padStart(2, '0')}</div>
            <div className="text-lg mt-2">Hour(s)</div>
          </div>
          <div className="text-5xl font-thin">:</div>
          <div>
            <div>{String(minutes).padStart(2, '0')}</div>
            <div className="text-lg mt-2">Minute(s)</div>
          </div>
          <div className="text-5xl font-thin">:</div>
          <div>
            <div>{String(seconds).padStart(2, '0')}</div>
            <div className="text-lg mt-2">Second(s)</div>
          </div>
        </div>
      </div>
    </div>
  );

  return <Countdown date={weddingDate} renderer={renderer} />;
}
