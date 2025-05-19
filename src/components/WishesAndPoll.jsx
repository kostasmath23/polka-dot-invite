import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaBookOpen, FaChartBar } from 'react-icons/fa';

export default function WishesAndPoll() {
  const wishForm = useRef();
  const [wishSubmitted, setWishSubmitted] = useState(false);
  const [mode, setMode] = useState('');
  const [selectedMessage, setSelectedMessage] = useState('');

  const [showResults, setShowResults] = useState(false);
  const [votes, setVotes] = useState({ q1: {}, q2: {} });
  const [selected, setSelected] = useState({ q1: '', q2: '' });

  useEffect(() => {
    const saved = localStorage.getItem('pollVotes');
    if (saved) setVotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('pollVotes', JSON.stringify(votes));
  }, [votes]);

  const handleWishSubmit = (e) => {
    e.preventDefault();

    if (mode === 'support') {
      const hidden = document.getElementById('generatedWish');
      if (hidden) hidden.value = selectedMessage;
    }

    emailjs
      .sendForm(
        'service_gq3nglo',      // <-- αντικατάστησε με το δικό σου
        'template_wo2cepc',    // <-- αντικατάστησε με το δικό σου
        wishForm.current,
        'PhphUrmOyFt_PdVls'
      )
      .then(() => setWishSubmitted(true))
      .catch((err) => alert('Σφάλμα αποστολής ευχής: ' + err.text));
  };

  const handlePollSubmit = (e) => {
    e.preventDefault();
    const updated = { ...votes };

    ['q1', 'q2'].forEach((q) => {
      const choice = selected[q];
      if (!updated[q][choice]) updated[q][choice] = 0;
      updated[q][choice] += 1;
    });

    setVotes(updated);
    setShowResults(true);
  };

  const handleSelect = (q, value) => {
    setSelected((prev) => ({ ...prev, [q]: value }));
  };

  const renderResults = (question) => {
    const total = Object.values(votes[question]).reduce((a, b) => a + b, 0);
    if (total === 0) return <p className="text-gray-500">Καμία συμμετοχή ακόμα.</p>;

    return Object.entries(votes[question]).map(([option, count], i) => {
      const percent = Math.round((count / total) * 100);
      return (
        <div key={i} className="mb-3">
          <div className="font-semibold text-lg mb-1">{option}</div>
          <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
            <div
              className="bg-blue-600 text-white h-full text-right pr-3 font-bold text-sm"
              style={{ width: `${percent}%` }}
            >
              {percent}%
            </div>
          </div>
        </div>
      );
    });
  };

  const presetWishes = [
    'Σας ευχόμαστε μια ζωή γεμάτη αγάπη και χαμόγελα!',
    'Να ζήσετε ευτυχισμένοι και αγαπημένοι για πάντα!',
    'Ό,τι καλύτερο στο κοινό σας ταξίδι!',
    'Η αγάπη σας να δυναμώνει κάθε μέρα!',
    'Να ζείτε το κάθε σας "μαζί" σαν να είναι το πρώτο!',
  ];

  return (
    <section className="bg-[#f5f1eb] py-32 px-6 md:px-12 text-gray-900 text-[1.25rem] md:text-[1.5rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Ευχολόγιο */}
        <div className="bg-[#d8c9b8] rounded-lg shadow-lg p-10 md:p-14">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-4">Ευχολόγιο</h2>
          <FaBookOpen className="text-5xl text-center mx-auto mb-10 text-[#6c4c1c]" />

          {wishSubmitted ? (
            <p className="text-green-700 text-center text-2xl mt-10">Η ευχή σας υποβλήθηκε με επιτυχία! 💌</p>
          ) : (
            <form ref={wishForm} onSubmit={handleWishSubmit} className="space-y-8">

              <div>
                <label className="block font-semibold mb-2">Ονοματεπώνυμο *</label>
                <input name="name" type="text" required className="w-full border rounded px-6 py-4 text-xl" />
              </div>

              <div>
                <label className="block font-semibold mb-2">Επιλέξτε μορφή ευχής *</label>
                <div className="space-y-3 mt-2 pl-1">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="mode"
                      value="words"
                      required
                      onChange={() => setMode('words')}
                      className="w-5 h-5"
                    />
                    Είμαι καλός/ή με τα λόγια
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="mode"
                      value="support"
                      onChange={() => setMode('support')}
                      className="w-5 h-5"
                    />
                    Δεν το έχω με τις ευχές… λίγη βοήθεια;
                  </label>
                </div>
              </div>

              {mode === 'words' && (
                <div>
                  <label className="block font-semibold mb-2">Γράψτε παρακάτω την ευχή σας</label>
                  <textarea name="message" rows="5" className="w-full border rounded px-6 py-4 text-xl" />
                </div>
              )}

              {mode === 'support' && (
                <div>
                  <label className="block font-semibold mb-2">Επιλέξτε μια ευχή</label>
                  <select
                    required
                    value={selectedMessage}
                    onChange={(e) => setSelectedMessage(e.target.value)}
                    className="w-full border rounded px-6 py-4 text-xl"
                  >
                    <option value="">-- Επιλέξτε ευχή --</option>
                    {presetWishes.map((wish, i) => (
                      <option key={i} value={wish}>{wish}</option>
                    ))}
                  </select>
                  <input type="hidden" name="message" id="generatedWish" value={selectedMessage} />
                </div>
              )}

              <input
                type="text"
                disabled
                value="Όταν είστε έτοιμοι, πατήστε Αποστολή"
                className="w-full border rounded px-6 py-4 bg-gray-100 text-base italic"
              />

              <button type="submit" className="bg-blue-700 text-white font-bold text-xl px-8 py-4 rounded hover:bg-blue-800 transition">
                Αποστολή
              </button>
            </form>
          )}
        </div>

        {/* Δημοσκόπηση */}
        <div className="bg-[#f5f1eb] rounded-lg shadow-lg p-10 md:p-14">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-4">Δημοσκόπηση</h2>
          <FaChartBar className="text-5xl text-center mx-auto mb-10 text-[#6c4c1c]" />

          {showResults ? (
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold mb-4">Να πατήσει η νύφη το πόδι του γαμπρού;</h3>
                {renderResults('q1')}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Πού να πάμε ταξίδι του μέλιτος;</h3>
                {renderResults('q2')}
              </div>
              <button className="mt-8 text-blue-700 underline text-lg" onClick={() => setShowResults(false)}>
                Επιστροφή στη δημοσκόπηση
              </button>
            </div>
          ) : (
            <form onSubmit={handlePollSubmit} className="space-y-10">
              <div>
                <label className="block font-semibold mb-3">Να πατήσει η νύφη το πόδι του γαμπρού *</label>
                <div className="space-y-3 mt-2 pl-1">
                  {['Φυσικά!', 'Ναι αν το θέλει και η ίδια…', 'Κρίμα δεν είναι το παπουτσάκι του γαμπρού;', 'Όχι… αυτά είναι ξεπερασμένα!'].map((text, i) => (
                    <label key={i} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="q1"
                        value={text}
                        required
                        checked={selected.q1 === text}
                        onChange={() => handleSelect('q1', text)}
                        className="w-5 h-5"
                      />
                      {text}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-3">Πού να πάμε ταξίδι του μέλιτος; *</label>
                <div className="space-y-3 mt-2 pl-1">
                  {['Μπουτάν', 'Καππαδοκία', 'Ντουμπάι', 'Σεϋχέλλες', 'Σημασία έχει ότι θα είστε οι δυο σας!'].map((text, i) => (
                    <label key={i} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="q2"
                        value={text}
                        required
                        checked={selected.q2 === text}
                        onChange={() => handleSelect('q2', text)}
                        className="w-5 h-5"
                      />
                      {text}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center justify-center">
                <button type="submit" className="bg-blue-700 text-white font-bold text-xl px-8 py-4 rounded hover:bg-blue-800 transition">
                  Υποβολή
                </button>
                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="text-blue-700 underline text-lg"
                >
                  Δείτε αποτελέσματα χωρίς να ψηφίσετε
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
