import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function RSVPForm() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gq3nglo',
        'template_lscg14m',
        form.current,
        'PhphUrmOyFt_PdVls'
      )
      .then(() => setSubmitted(true))
      .catch((error) => alert("⚠️ Σφάλμα αποστολής: " + error.text));
  };

  return (
    <section id="rsvp" className="bg-[#f5f1eb] py-24 sm:py-32 px-4 sm:px-6 text-gray-900 text-base sm:text-lg">
      <div className="max-w-screen-lg mx-auto bg-white p-6 sm:p-10 md:p-14 rounded-xl shadow-xl">
        <h2 className="text-center text-4xl sm:text-5xl font-serif mb-6">RSVP</h2>
        <p className="text-center mb-10 text-base sm:text-xl">Παρακαλούμε να μας απαντήσετε έως 14 Σεπτεμβρίου σε αυτή τη φόρμα <p></p>ή στα κινητά μας (E) 6981932783 / (Θ) 6975851373</p>

        {submitted ? (
          <p className="text-green-700 text-xl text-center">Η απάντησή σας καταχωρήθηκε! 💌</p>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="space-y-8">

            {/* Παρουσία */}
            <div>
              <label className="font-semibold block mb-2">Θα παρευρεθείτε στη δεξίωση; *</label>
              <div className="space-y-2 pl-2">
                {[
                  'Ναι θα είμαι εκεί αυτή την τόσο σημαντική στιγμή σας!',
                  'Δυστυχώς δε θα μπορέσω να παρευρεθώ',
                  'Θέλω να γράψω προσωπική απάντηση στο ζευγάρι'
                ].map((text, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input type="radio" name="attendance" required value={text} className="w-5 h-5" /> {text}
                  </label>
                ))}
              </div>
            </div>

            {/* Αριθμός ενηλίκων */}
            <div>
              <label className="font-semibold block mb-2">Αριθμός ατόμων *</label>
              <select name="adults" required className="w-full border rounded px-4 py-3">
                <option value="">Επιλέξτε αριθμό ατόμων</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            {/* Ονοματεπώνυμο */}
            <div>
              <label className="font-semibold block mb-2">Ονοματεπώνυμο *</label>
              <input name="name" type="text" required className="w-full border rounded px-4 py-3" />
            </div>

            {/* Τηλέφωνο */}
            <div>
              <label className="font-semibold block mb-2">Κινητό</label>
              <input name="phone" type="tel" className="w-full border rounded px-4 py-3" placeholder="π.χ. 6912345678" />
            </div>

                        {/* Διατροφή */}
            <div>
              <label className="font-semibold block mb-2">Έχετε κάποια διατροφική συνήθεια; *</label>
              <div className="space-y-2 pl-2">
                {['Όχι', 'Vegan', 'Vegetarian'].map((text, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input type="radio" name="diet" value={text} required className="w-5 h-5" /> {text}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#306844] hover:bg-[#5a3e19] text-white px-6 py-3 rounded-md w-full transition text-center"
            >
              Υποβολή RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
