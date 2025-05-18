import React from 'react';
import { FaHandshake, FaHeart, FaHome, FaGem, FaEnvelope } from 'react-icons/fa';

const events = [
  {
    date: 'August 7, 2022',
    description: 'We meet for the first time',
    icon: <FaHandshake />,
  },
  {
    date: 'September 28, 2022',
    description: 'The love story begins',
    icon: <FaHeart />,
  },
  {
    date: 'November 22, 2023',
    description: "Let's move together",
    icon: <FaHome />,
  },
  {
    date: 'February 17, 2024',
    description: 'The proposal',
    icon: <FaGem />,
  },
  {
    date: 'Right Now',
    description: 'You reading our invitation',
    icon: <FaEnvelope />,
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 text-white" style={{ backgroundColor: 'rgb(30, 25, 22)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-stretch justify-between relative">

        {/* Timeline - αριστερά */}
        <div className="relative w-full md:w-2/3">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-700"></div>

          <div className="pl-12">
            {events.map((event, i) => (
              <div key={i} className="relative mb-20">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-black border-4 border-white rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white z-10">
                  {event.icon}
                </div>

                <div className="bg-white text-gray-800 p-10 rounded-xl shadow-xl max-w-2xl ml-10">
                  <p className="text-xl mb-2">{event.date}</p>
                  <p className="text-2xl font-semibold">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* timeline.png - δεξιά */}
        <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end">
          <img
            src="/images/timeline.png"
            alt="timeline"
            className="w-2/3 max-w-[450px] md:w-[350px] lg:w-[450px] h-auto animate-pulse md:translate-x-24 translate-x-0"
          />
        </div>
      </div>
    </section>
  );
}
