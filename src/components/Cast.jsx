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
        <h2 className="text-5xl sm:text-6xl font-serif mb-4">Οι Πρωταγωνιστές</h2>
        <FaUsers className="text-4xl sm:text-5xl text-gray-700 mx-auto mb-16" />

        {/* Κάρτες */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {members.map((member, index) => (
            <div key={index}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xl sm:text-2xl font-semibold">{member.role}</p>
                </div>
              </div>

              {/* Τίτλος κάτω από την εικόνα */}
              <p className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
