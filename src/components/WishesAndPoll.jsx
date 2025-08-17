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
        'service_gq3nglo',
        'template_wo2cepc',
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
          <div className="font-semibold text-base sm:text-lg mb-1">{option}</div>
          <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
            <div
              className="bg-[#306844] text-white h-full text-right pr-3 font-bold text-sm"
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
    <section className="bg-[#FDFDFB] py-24 sm:py-32 px-4 sm:px-6 text-gray-900 text-base sm:text-lg">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Ευχολόγιο */}
        <div className="bg-[#d8c9b8] rounded-xl shadow-lg p-6 sm:p-10 md:p-14 w-full pb-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-center mb-4">Ευχολόγιο</h2>
          <FaBookOpen className="text-4xl sm:text-5xl text-center mx-auto mb-6 sm:mb-10 text-[#306844]" />

          {wishSubmitted ? (
            <p className="text-center text-green-700 font-semibold text-lg">
              Η ευχή σας στάλθηκε! Ευχαριστούμε! 💌
            </p>
          ) : (
            <form ref={wishForm} onSubmit={handleWishSubmit} className="space-y-6">
              <input
                type="text"
                name="from"
                placeholder="Το όνομά σας"
                required
                className="w-full p-3 rounded-md border border-gray-300"
              />

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">Θέλετε να γράψετε ή να επιλέξετε ευχή;</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setMode('write')}
                    className={`px-4 py-2 rounded-md border ${
                      mode === 'write' ? 'bg-white border-black' : 'border-gray-400'
                    }`}
                  >
                    Γράφω εγώ
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('support')}
                    className={`px-4 py-2 rounded-md border ${
                      mode === 'support' ? 'bg-white border-black' : 'border-gray-400'
                    }`}
                  >
                    Επιλέγω από λίστα
                  </button>
                </div>
              </div>

              {mode === 'write' && (
                <textarea
                  name="message"
                  placeholder="Γράψτε την ευχή σας εδώ..."
                  required
                  className="w-full p-3 rounded-md border border-gray-300 min-h-[100px]"
                />
              )}

              {mode === 'support' && (
                <>
                  <select
                    onChange={(e) => setSelectedMessage(e.target.value)}
                    className="w-full p-3 rounded-md border border-gray-300"
                    required
                  >
                    <option value="">Επιλέξτε ευχή...</option>
                    {presetWishes.map((msg, i) => (
                      <option key={i} value={msg}>
                        {msg}
                      </option>
                    ))}
                  </select>
                  <input type="hidden" name="message" id="generatedWish" value={selectedMessage} />
                </>
              )}

              <button
                type="submit"
                className="bg-[#306844] hover:bg-[#5a3e19] text-white px-6 py-3 rounded-md w-full transition"
              >
                Αποστολή ευχής
              </button>

              {/* Εικόνα flower.png */}
              <div className="flex justify-center mt-10">
                <img
                  src="/images/flower.png"
                  alt="Flower decoration"
                  className="w-32 sm:w-40 mb-2"
                />
              </div>
            </form>
          )}
        </div>

        {/* Poll */}
        <div className="bg-[#d8c9b8] rounded-xl shadow-lg p-6 sm:p-10 md:p-14 w-full">
          <h2 className="text-4xl sm:text-5xl font-serif text-center mb-4">Ψηφοφορία</h2>
          <FaChartBar className="text-4xl sm:text-5xl text-center mx-auto mb-6 sm:mb-10 text-[#306844]" />

          {showResults ? (
            <div className="space-y-10">
              <div>
                <h4 className="font-semibold text-lg mb-4">Πιστεύετε θα πατήσει η νύφη το πόδι του γαμπρού;</h4>
                {renderResults('q1')}
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Ποιος πιστεύετε θα χορέψει περισσότερο;</h4>
                {renderResults('q2')}
              </div>
            </div>
          ) : (
            <form onSubmit={handlePollSubmit} className="space-y-10">
              <div>
                <h4 className="font-semibold text-lg mb-4">Πιστεύετε θα πατήσει η νύφη το πόδι του γαμπρού;</h4>
                {['Σίγουρα', 'Μάλλον', 'Αποκλείεται'].map((opt) => (
                  <label key={opt} className="block mb-2">
                    <input
                      type="radio"
                      name="q1"
                      value={opt}
                      checked={selected.q1 === opt}
                      onChange={() => handleSelect('q1', opt)}
                      className="mr-2"
                      required
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">Ποιος πιστεύετε θα χορέψει περισσότερο;</h4>
                {['Η νύφη', 'Ο γαμπρός', 'Οι κουμπάροι'].map((opt) => (
                  <label key={opt} className="block mb-2">
                    <input
                      type="radio"
                      name="q2"
                      value={opt}
                      checked={selected.q2 === opt}
                      onChange={() => handleSelect('q2', opt)}
                      className="mr-2"
                      required
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="bg-[#306844] hover:bg-[#5a3e19] text-white px-6 py-3 rounded-md w-full transition"
              >
                Υποβολή απαντήσεων
              </button>

              {/* Δείτε τα αποτελέσματα */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="mt-2 text-sm text-gray-700 underline hover:text-gray-900 transition"
                >
                  Δείτε τα αποτελέσματα
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
