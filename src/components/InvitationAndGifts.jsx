import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

export default function InvitationAndGifts() {
  const handleCopy = (iban) => {
    navigator.clipboard.writeText(iban);
    alert('Το IBAN αντιγράφηκε!');
  };

  return (
    <section className="bg-[#eae6df] py-24 sm:py-32 px-4 sm:px-6 text-gray-900 text-lg sm:text-xl">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-start">

        {/* Προσκλητήριο */}
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-5xl sm:text-6xl font-serif">Το προσκλητήριο</h2>

          <div className="relative overflow-hidden rounded-xl shadow-xl w-full max-w-md invitation-glow">
            <img
              src="/images/invite.jpg"
              alt="Προσκλητήριο"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Λίστα γάμου */}
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-5xl sm:text-6xl font-serif">Λίστα γάμου</h2>

          <div className="text-left space-y-6 w-full max-w-xl">
            {[
              { bank: 'Εθνική Τράπεζα', iban: 'GR14 0110 3060 0000 3060 0182 791' },
              { bank: 'Τράπεζα Πειραιώς', iban: 'GR75 0171 9130 0069 1313 2734 884' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 shadow-md">
                <p className="font-semibold text-xl sm:text-2xl mb-2">{item.bank}</p>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-base sm:text-lg break-words">{item.iban}</p>
                  <button
                    onClick={() => handleCopy(item.iban)}
                    className="text-blue-600 hover:text-blue-800 active:scale-95 transition"
                    title="Αντιγραφή"
                  >
                    <FaRegCopy size={22} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
