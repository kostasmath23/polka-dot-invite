import React, { useState } from 'react';

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="bg-[#f5f1eb] py-32 px-6 md:px-12 text-gray-900 text-[1.5rem] md:text-[1.75rem]"
    >
      <div className="max-w-[96rem] mx-auto bg-white p-10 md:p-16 rounded-xl shadow-xl">
        <h2 className="text-center text-5xl md:text-6xl font-serif mb-6">RSVP</h2>
        <p className="text-center mb-10 text-xl md:text-2xl">
          Παρακαλούμε να μας απαντήσετε έως 30 Σεπτεμβρίου
        </p>

        {submitted ? (
          <p className="text-green-700 text-2xl text-center">
            Η απάντησή σας καταχωρήθηκε με επιτυχία! 💌
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Παρουσία */}
            <div>
              <label className="font-semibold block mb-2">Θα παρευρεθείτε στο μυστήριο; *</label>
              <div className="space-y-2 pl-2">
                {[
                  'Ναι θα είμαι εκεί αυτή την τόσο σημαντική στιγμή σας!',
                  'Δυστυχώς δε θα μπορέσω να παρευρεθώ',
                  'Θέλω να γράψω προσωπική απάντηση στο ζευγάρι'
                ].map((text, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input type="radio" name="attendance" required className="w-5 h-5" />
                    {text}
                  </label>
                ))}
              </div>
            </div>

            {/* Πλήθος ατόμων */}
            <div>
              <label className="font-semibold block mb-2">Αριθμός ατόμων - Ενήλικες *</label>
              <select required className="w-full border rounded px-6 py-4">
                <option value="">Επιλέξτε αριθμό ενηλίκων</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>

            {/* Ονοματεπώνυμο */}
            <div>
              <label className="font-semibold block mb-2">Ονοματεπώνυμο *</label>
              <input type="text" required className="w-full border rounded px-6 py-4" />
            </div>

            {/* Κινητό */}
            <div>
              <label className="font-semibold block mb-2">Κινητό</label>
              <input type="tel" className="w-full border rounded px-6 py-4" placeholder="π.χ. 691 234 5678" />
            </div>

            {/* Παιδιά */}
            <div>
              <label className="font-semibold block mb-2">Θα συνοδευτείτε από παιδιά;</label>
              <div className="flex gap-10 mt-2 pl-2">
                <label className="flex items-center gap-3">
                  <input type="radio" name="kids" className="w-5 h-5" /> Ναι
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="kids" className="w-5 h-5" /> Όχι
                </label>
              </div>
              <p className="text-base text-gray-600 mt-2">
                *Παρακαλούμε ενημερώστε μας για παιδικό μενού, animator κ.ά.
              </p>
            </div>

            {/* Διατροφή */}
            <div>
              <label className="font-semibold block mb-2">Υπάρχει κάποια διατροφική συνήθεια; *</label>
              <div className="space-y-2 pl-2">
                {['Όχι', 'Vegan', 'Vegetarian'].map((text, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input type="radio" name="diet" required className="w-5 h-5" /> {text}
                  </label>
                ))}
              </div>
            </div>

            {/* Αλλεργίες */}
            <div>
              <label className="font-semibold block mb-2">Υπάρχει κάποια αλλεργία σε κάποιο τρόφιμο; *</label>
              <div className="flex gap-10 mt-2 pl-2">
                <label className="flex items-center gap-3">
                  <input type="radio" name="allergy" required className="w-5 h-5" /> Ναι
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="allergy" className="w-5 h-5" /> Όχι
                </label>
              </div>
              <p className="text-base text-gray-600 mt-2">
                *Ενημερώστε μας προληπτικά για την ασφάλειά σας
              </p>
            </div>

            {/* Υπόμνηση */}
            <input
              type="text"
              disabled
              value="Η φόρμα αποτελεί παράδειγμα RSVP"
              className="w-full border rounded px-6 py-4 bg-gray-100 text-base italic"
            />

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold text-xl px-10 py-4 rounded hover:bg-blue-800 transition"
              >
                Αποστολή
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
