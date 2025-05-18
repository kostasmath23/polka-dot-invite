import React from 'react';
import { FaUsers, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { SiTiktok } from 'react-icons/si';

const members = [
  { role: 'Η Νύφη', image: '/images/bride.jpg' },
  { role: 'Ο Γαμπρός', image: '/images/groom.jpg' },
  { role: 'Κουμπάρα', image: '/images/maid.jpg' },
  { role: 'Κουμπάρος', image: '/images/bestman.jpg' }
];

export default function Cast() {
  return (
    <section className="bg-[#f9f6f2] text-gray-900 py-32 px-6 md:px-12 text-center text-[1.25rem] md:text-[1.5rem]">
      <div className="max-w-7xl mx-auto">

        {/* Τίτλος */}
        <h2 className="text-6xl md:text-7xl font-serif mb-4">Οι Πρωταγωνιστές</h2>
        <FaUsers className="text-5xl text-gray-700 mx-auto mb-20" />

        {/* Κάρτες */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-32 gap-y-32">
          {members.map((member, index) => (
            <div key={index}>
              <div className="relative group rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-[28rem] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-2xl font-semibold">{member.role}</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center mt-6 gap-6 text-4xl text-gray-700">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><SiTiktok /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
