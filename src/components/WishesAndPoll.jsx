import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaBookOpen, FaChartBar } from 'react-icons/fa';

// ✅ Firebase
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, onValue, runTransaction } from 'firebase/database';

/* === ΒΑΛΕ ΤΑ ΔΙΚΑ ΣΟΥ (ή κράτα αυτά που έχεις) === */
const firebaseConfig = {
  apiKey: "AIzaSyBr7U_vLh0VTSpVrdqsLYetUtCORMyxvTI",
  authDomain: "wedding-97a64.firebaseapp.com",
  databaseURL: "https://wedding-97a64-default-rtdb.firebaseio.com",
  projectId: "wedding-97a64",
  storageBucket: "wedding-97a64.firebasestorage.app",
  messagingSenderId: "427126238575",
  appId: "1:427126238575:web:073cc1c086b4b091c68c9a",
  measurementId: "G-8SQVNFW8WR"
};
/* ================================================ */

// 🔒 ΜΟΝΟ ΜΙΑ αρχικοποίηση (fix για hot reload)
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getDatabase(app);

const OPTIONS = {
  q1: ['Σίγουρα', 'Μάλλον', 'Αποκλείεται'],
  q2: ['Η νύφη', 'Ο γαμπρός', 'Οι κουμπάροι'],
};

export default function WishesAndPoll() {
  const wishForm = useRef();
  const [wishSubmitted, setWishSubmitted] = useState(false);
  const [mode, setMode] = useState('');
  const [selectedMessage, setSelectedMessage] = useState('');

  const [showResults, setShowResults] = useState(false);

  // Votes σχήμα: { q1: {option: count}, q2: {option: count} }
  const [votes, setVotes] = useState({ q1: {}, q2: {} });

  // Επιλογή τρέχοντος χρήστη (μένει σε localStorage)
  const [selected, setSelected] = useState({ q1: '', q2: '' });

  /* ---------------- Wish form (EmailJS) ---------------- */
  useEffect(() => {
    const savedSelected = localStorage.getItem('pollSelected');
    if (savedSelected) {
      try {
        const parsed = JSON.parse(savedSelected);
        if (parsed && typeof parsed === 'object') setSelected(parsed);
      } catch { /* noop */ }
    }
  }, []);

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

  /* ---------------- Firebase listeners (ζωντανά στατιστικά) ---------------- */
  useEffect(() => {
    const votesRef = ref(db, 'votes');
    const unsub = onValue(votesRef, (snap) => {
      const data = snap.val() || {};
      setVotes({
        q1: data.q1 || {},
        q2: data.q2 || {},
      });
    });
    return () => unsub();
  }, []);

  /* ---------------- Επιλογή radio ---------------- */
  const handleSelect = (q, value) => {
    setSelected((prev) => {
      const next = { ...prev, [q]: value };
      localStorage.setItem('pollSelected', JSON.stringify(next));
      return next;
    });
  };

  /* ---------------- Υποβολή ψήφου με αντικατάσταση παλιάς ---------------- */
  const handlePollSubmit = async (e) => {
    e.preventDefault();

    // Παλιές επιλογές (αν είχε ξαναψηφίσει από αυτή τη συσκευή)
    const prevSelectedRaw = localStorage.getItem('pollSelected');
    let prevSelected = null;
    try {
      prevSelected = prevSelectedRaw ? JSON.parse(prevSelectedRaw) : null;
    } catch {
      prevSelected = null;
    }

    // Για κάθε ερώτηση: αν άλλαξε επιλογή, -1 στην παλιά, +1 στη νέα
    for (const q of ['q1', 'q2']) {
      const newChoice = selected[q];
      if (!newChoice) continue;

      const oldChoice = prevSelected?.[q] || null;

      // Αν υπάρχει παλιά επιλογή και είναι διαφορετική → αφαίρεση 1
      if (oldChoice && oldChoice !== newChoice) {
        const decRef = ref(db, `votes/${q}/${oldChoice}`);
        await runTransaction(decRef, (current) => {
          const val = Number(current) || 0;
          return Math.max(0, val - 1);
        });
      }

      // Πρόσθεση 1 στη νέα επιλογή
      const incRef = ref(db, `votes/${q}/${newChoice}`);
      await runTransaction(incRef, (current) => (Number(current) || 0) + 1);
    }

    // Αποθήκευση της νέας επιλογής ως τρέχουσα
    localStorage.setItem('pollSelected', JSON.stringify(selected));

    // Εμφάνιση αποτελεσμάτων
    setShowResults(true);
  };

  /* ---------------- Εμφάνιση bars ---------------- */
  const renderResults = (question) => {
    const totals = votes[question] || {};
    const totalSum = Object.values(totals).reduce((a, b) => a + (Number(b) || 0), 0);

    if (totalSum === 0) {
      return <p className="text-gray-500">Καμία συμμετοχή ακόμα.</p>;
    }

    // Ταξινόμηση με βάση count (προαιρετικό)
    const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);

    return entries.map(([option, count], i) => {
      const c = Number(count) || 0;
      const percent = Math.round((c / totalSum) * 100);
      return (
        <div key={`${question}-${option}-${i}`} className="mb-3">
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
                    className={`px-4 py-2 rounded-md border ${mode === 'write' ? 'bg-white border-black' : 'border-gray-400'}`}
                  >
                    Γράφω εγώ
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('support')}
                    className={`px-4 py-2 rounded-md border ${mode === 'support' ? 'bg-white border-black' : 'border-gray-400'}`}
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
                {OPTIONS.q1.map((opt) => (
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
                {OPTIONS.q2.map((opt) => (
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
