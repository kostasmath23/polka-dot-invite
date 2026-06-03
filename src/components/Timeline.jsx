import React from 'react';
import { FaHandshake, FaHeart, FaGem, FaEnvelope } from 'react-icons/fa';

const events = [
  {
    date: '1 Νοεμβρίου 2021',
    description: 'Η πρώτη μας γνωριμία',
    icon: <FaHandshake />,
  },
  {
    date: '24 Μαΐου 2022',
    description: 'Ξεκινά η σχέση μας',
    icon: <FaHeart />,
  },
  {
    date: '25 Δεκεμβρίου 2024',
    description: 'Η πρόταση γάμου',
    icon: <FaGem />,
  },
  {
    date: 'Τώρα',
    description: 'Διαβάζεις την πρόσκλησή μας',
    icon: <FaEnvelope />,
  },
];

export default function Timeline() {
  const goldGradient = {
    background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
  };

  const goldText = {
    background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  return (
    <section className="py-24 px-4 sm:px-6 text-white bg-[#F8F0EB] overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 md:gap-10 items-stretch justify-between relative">

        {/* Timeline */}
        <div className="relative w-full md:w-2/3">
          <div
            className="absolute left-6 top-0 bottom-0 w-1"
            style={goldGradient}
          ></div>

          <div className="pl-12">
            {events.map((event, i) => (
              <div key={i} className="relative mb-16 md:mb-20">
                <div
                  className="absolute left-0 top-0 transform -translate-x-1/2 border-4 border-white rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white z-10 shadow-lg"
                  style={goldGradient}
                >
                  {event.icon}
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl max-w-full sm:max-w-2xl ml-10">
                  <p className="text-base sm:text-lg text-gray-600 mb-2">
                    {event.date}
                  </p>
                  <p
                    className="text-xl sm:text-2xl font-semibold"
                    style={goldText}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* timeline image */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
          <img
            src="/images/timeline.png"
            alt="timeline"
            className="w-3/4 sm:w-2/3 max-w-[320px] md:max-w-[400px] h-auto animate-pulse md:translate-x-10"
          />
        </div>
      </div>
    </section>
  );
}