import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

export default function InvitationAndGifts() {
  const handleCopy = (iban) => {
    navigator.clipboard.writeText(iban);
    alert('Το IBAN αντιγράφηκε!');
  };

  return (
    <section className="bg-white py-32 px-6 md:px-12 text-gray-900 text-[1.5rem] md:text-[1.75rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

        {/* Προσκλητήριο */}
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-6xl md:text-7xl font-serif">Το προσκλητήριο</h2>

          <div className="relative overflow-hidden rounded-lg shadow-lg w-full max-w-md invitation-glow">
            <img
              src="/images/invite.jpg"
              alt="Προσκλητήριο"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Λίστα γάμου */}
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-6xl md:text-7xl font-serif">Λίστα γάμου <br /><span className="text-3xl font-light"></span></h2>

          <div className="text-left space-y-6 w-full max-w-xl">
            {[
              { bank: 'Τράπεζα Πειραιώς', iban: 'GR12 3456 7890 1234 5678 9012 345' },
              { bank: 'Eurobank', iban: 'GR98 7654 3210 9876 5432 1098 765' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 shadow-md">
                <p className="font-bold text-2xl mb-2">{item.bank}</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xl break-all">{item.iban}</p>
                  <button
                    onClick={() => handleCopy(item.iban)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaRegCopy size={24} />
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
