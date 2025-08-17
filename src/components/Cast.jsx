import React from 'react';
import { FaUsers } from 'react-icons/fa6';

const members = [
  { role: 'Νύφη', image: '/images/bride.jpg' },
  { role: 'Γαμπρός', image: '/images/groom.jpg' },
  { role: 'Πρωτοκουμπάρα', image: '/images/maid.jpg' },
  { role: 'Κουμπάρος', image: '/images/bestman.jpg' }
];

export default function Cast() {
  return (
    <section className="bg-[#eae6df] text-gray-900 py-24 sm:py-32 px-4 sm:px-6 text-center text-base sm:text-lg">
      <div className="max-w-screen-xl mx-auto">

        {/* Τίτλος */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 sm:mb-8">Οι Πρωταγωνιστές</h2>
        <FaUsers className="text-3xl sm:text-4xl md:text-5xl text-gray-700 mx-auto mb-12 sm:mb-16" />

        {/* Κάρτες */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12 sm:gap-y-16">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative group w-full rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[350px] md:h-[400px]">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-lg sm:text-xl font-semibold break-words px-2 text-center">{member.role}</p>
                </div>
              </div>

              {/* Τίτλος κάτω από την εικόνα */}
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-800 break-words text-center px-2">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
