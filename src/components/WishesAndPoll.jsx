import React, { useState } from 'react';
import { FaBookOpen, FaChartBar } from 'react-icons/fa';

export default function WishesAndPoll() {
  const [wishSubmitted, setWishSubmitted] = useState(false);
  const [pollSubmitted, setPollSubmitted] = useState(false);

  const handleWishSubmit = (e) => {
    e.preventDefault();
    setWishSubmitted(true);
  };

  const handlePollSubmit = (e) => {
    e.preventDefault();
    setPollSubmitted(true);
  };

  return (
    <section className="bg-[#f5f1eb] py-32 px-6 md:px-12 text-gray-900 text-[1.25rem] md:text-[1.5rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Ευχολόγιο */}
        <div
          className="bg-[#d8c9b8] rounded-lg shadow-lg p-10 md:p-14 opacity-0"
          data-aos="fade"
          data-aos-offset="10"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-4">Ευχολόγιο</h2>
          <FaBookOpen className="text-5xl text-center mx-auto mb-10 text-[#6c4c1c]" />

          {wishSubmitted ? (
            <p className="text-green-700 text-center text-2xl mt-10">Η ευχή σας υποβλήθηκε με επιτυχία! 💌</p>
          ) : (
            <form onSubmit={handleWishSubmit} className="space-y-8">
              <div>
                <label className="block font-semibold mb-2">Ονοματεπώνυμο *</label>
                <input type="text" required className="w-full border rounded px-6 py-4 text-xl" />
              </div>

              <div>
                <label className="block font-semibold mb-2">Επιλέξτε μορφή ευχής *</label>
                <div className="space-y-3 mt-2 pl-1">
                  <label className="flex items-center gap-3">
                    <input type="radio" name="mode" defaultChecked className="w-5 h-5" /> Είμαι καλός/ή με τα λόγια
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="radio" name="mode" className="w-5 h-5" /> Δεν το έχω με τις ευχές… λίγο υποστήριξη;
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Γράψτε παρακάτω την ευχή σας</label>
                <textarea rows="5" className="w-full border rounded px-6 py-4 text-xl" />
              </div>

              <input
                type="text"
                disabled
                value="Η φόρμα αποτελεί παράδειγμα Ευχολογίου"
                className="w-full border rounded px-6 py-4 bg-gray-100 text-base italic"
              />

              <button type="submit" className="bg-blue-700 text-white font-bold text-xl px-8 py-4 rounded hover:bg-blue-800 transition">
                Αποστολή
              </button>
            </form>
          )}
        </div>

        {/* Δημοσκόπηση */}
        <div
          className="bg-[#f5f1eb] rounded-lg shadow-lg p-10 md:p-14 opacity-0"
          data-aos="fade"
          data-aos-offset="10"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-4">Δημοσκόπηση</h2>
          <FaChartBar className="text-5xl text-center mx-auto mb-10 text-[#6c4c1c]" />

          {pollSubmitted ? (
            <p className="text-green-700 text-center text-2xl mt-10">Η συμμετοχή σας καταχωρήθηκε! 📊</p>
          ) : (
            <form onSubmit={handlePollSubmit} className="space-y-10">
              <div>
                <label className="block font-semibold mb-3">Να πατήσει η νύφη το πόδι του γαμπρού *</label>
                <div className="space-y-3 mt-2 pl-1">
                  {[
                    'Φυσικά!',
                    'Ναι αν το θέλει και η ίδια…',
                    'Κρίμα δεν είναι το παπουτσάκι του γαμπρού;',
                    'Όχι… αυτά είναι ξεπερασμένα!'
                  ].map((text, i) => (
                    <label key={i} className="flex items-center gap-3">
                      <input type="radio" name="q1" required className="w-5 h-5" /> {text}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-3">Πού να πάμε ταξίδι του μέλιτος; *</label>
                <div className="space-y-3 mt-2 pl-1">
                  {[
                    'Μπουτάν',
                    'Καππαδοκία',
                    'Ντουμπάι',
                    'Σεϋχέλλες',
                    'Σημασία έχει ότι θα είστε οι δυο σας!'
                  ].map((text, i) => (
                    <label key={i} className="flex items-center gap-3">
                      <input type="radio" name="q2" required className="w-5 h-5" /> {text}
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="bg-blue-700 text-white font-bold text-xl px-8 py-4 rounded hover:bg-blue-800 transition">
                Αποστολή
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
