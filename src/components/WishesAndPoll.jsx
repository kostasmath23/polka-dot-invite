import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaBookOpen, FaChartBar } from 'react-icons/fa';
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, onValue, runTransaction } from 'firebase/database';
import { useLanguage } from '../context/LanguageContext';

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

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getDatabase(app);

/*
  ΝΕΟ ΚΑΘΑΡΟ POLL
  Οι παλιές ψήφοι μένουν στο παλιό path, αλλά πλέον το site μετράει από εδώ.
  Αν θέλεις ξανά reset στο μέλλον, άλλαξε αυτά τα δύο ονόματα σε κάτι νέο.
*/
const VOTES_PATH = 'votes_reset_2026_06_04';
const POLL_STORAGE_KEY = 'pollSelected_reset_2026_06_04';

const OPTIONS = {
  q1: ['definitely', 'maybe', 'impossible'],
  q2: ['bride', 'groom', 'koumparoi'],
};

export default function WishesAndPoll() {
  const { t } = useLanguage();

  const wishForm = useRef();
  const [wishSubmitted, setWishSubmitted] = useState(false);
  const [mode, setMode] = useState('');
  const [selectedMessage, setSelectedMessage] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [votes, setVotes] = useState({ q1: {}, q2: {} });
  const [selected, setSelected] = useState({ q1: '', q2: '' });

  const goldGradient = 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)';

  const goldText = {
    background: goldGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const titleBox = 'bg-white rounded-2xl shadow-xl px-8 py-5 inline-block';

  const goldButton = {
    background: goldGradient,
    boxShadow: '0 6px 18px rgba(120, 90, 25, 0.28)',
  };

  useEffect(() => {
    const savedSelected = localStorage.getItem(POLL_STORAGE_KEY);
    if (savedSelected) {
      try {
        const parsed = JSON.parse(savedSelected);
        if (parsed && typeof parsed === 'object') setSelected(parsed);
      } catch {}
    }
  }, []);

  const handleWishSubmit = (e) => {
    e.preventDefault();

    if (mode === 'support') {
      const hidden = document.getElementById('generatedWish');
      if (hidden) hidden.value = selectedMessage;
    }

    emailjs
      .sendForm('service_gq3nglo', 'template_wo2cepc', wishForm.current, 'PhphUrmOyFt_PdVls')
      .then(() => setWishSubmitted(true))
      .catch((err) => alert(t.wishes.error + err.text));
  };

  useEffect(() => {
    const votesRef = ref(db, VOTES_PATH);

    const unsub = onValue(votesRef, (snap) => {
      const data = snap.val() || {};
      setVotes({
        q1: data.q1 || {},
        q2: data.q2 || {},
      });
    });

    return () => unsub();
  }, []);

  const handleSelect = (q, value) => {
    setSelected((prev) => {
      const next = { ...prev, [q]: value };
      localStorage.setItem(POLL_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const handlePollSubmit = async (e) => {
    e.preventDefault();

    const prevSelectedRaw = localStorage.getItem(POLL_STORAGE_KEY);
    let prevSelected = null;

    try {
      prevSelected = prevSelectedRaw ? JSON.parse(prevSelectedRaw) : null;
    } catch {}

    for (const q of ['q1', 'q2']) {
      const newChoice = selected[q];
      if (!newChoice) continue;

      const oldChoice = prevSelected?.[q] || null;

      if (oldChoice && oldChoice !== newChoice) {
        const decRef = ref(db, `${VOTES_PATH}/${q}/${oldChoice}`);
        await runTransaction(decRef, (current) => {
          const val = Number(current) || 0;
          return Math.max(0, val - 1);
        });
      }

      const incRef = ref(db, `${VOTES_PATH}/${q}/${newChoice}`);
      await runTransaction(incRef, (current) => (Number(current) || 0) + 1);
    }

    localStorage.setItem(POLL_STORAGE_KEY, JSON.stringify(selected));
    setShowResults(true);
  };

  const getOptionLabel = (option) => {
    const legacyMap = {
      'Σίγουρα': 'definitely',
      'Μάλλον': 'maybe',
      'Αποκλείεται': 'impossible',
      'Η νύφη': 'bride',
      'Ο γαμπρός': 'groom',
      'Οι κουμπάροι': 'koumparoi',
    };

    const normalized = legacyMap[option] || option;
    return t.poll.options[normalized] || option;
  };

  const renderResults = (question) => {
    const totals = votes[question] || {};
    const totalSum = Object.values(totals).reduce((a, b) => a + (Number(b) || 0), 0);

    if (totalSum === 0) return <p className="text-gray-500">{t.poll.noVotes}</p>;

    const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);

    return entries.map(([option, count], i) => {
      const c = Number(count) || 0;
      const percent = Math.round((c / totalSum) * 100);

      return (
        <div key={`${question}-${option}-${i}`} className="mb-3">
          <div className="font-semibold text-base sm:text-lg mb-1">{getOptionLabel(option)}</div>
          <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
            <div
              className="text-white h-full text-right pr-3 font-bold text-sm"
              style={{ width: `${percent}%`, background: goldGradient }}
            >
              {percent}%
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="bg-[#F8F0EB] py-24 sm:py-32 px-4 sm:px-6 text-gray-900 text-base sm:text-lg">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldWishIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="35%" stopColor="#F5D76E" />
            <stop offset="65%" stopColor="#C9A24A" />
            <stop offset="100%" stopColor="#8B6B1F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="bg-[#d8c9b8] rounded-xl shadow-lg p-6 sm:p-10 md:p-14 w-full pb-8">
          <div className="text-center mb-6 sm:mb-10">
            <div className={titleBox}>
              <h2
                className="text-6xl sm:text-7xl md:text-7xl leading-[0.9]"
                style={{ fontFamily: "'Miama', cursive", ...goldText }}
              >
                {t.wishes.title}
              </h2>
            </div>

            <FaBookOpen
              className="text-4xl sm:text-5xl text-center mx-auto mt-6"
              style={{
                fill: 'url(#goldWishIconGradient)',
                filter: 'drop-shadow(0 3px 6px rgba(120, 90, 25, 0.22))',
              }}
            />
          </div>

          {wishSubmitted ? (
            <p className="text-center text-green-700 font-semibold text-lg">{t.wishes.sent}</p>
          ) : (
            <form ref={wishForm} onSubmit={handleWishSubmit} className="space-y-6">
              <input
                type="text"
                name="from"
                placeholder={t.wishes.namePlaceholder}
                required
                className="w-full p-3 rounded-md border border-gray-300"
              />

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">{t.wishes.chooseMode}</label>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setMode('write')}
                    className={`px-4 py-2 rounded-md border transition ${
                      mode === 'write' ? 'bg-white border-black' : 'border-gray-400'
                    }`}
                  >
                    {t.wishes.writeOwn}
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('support')}
                    className={`px-4 py-2 rounded-md border transition ${
                      mode === 'support' ? 'bg-white border-black' : 'border-gray-400'
                    }`}
                  >
                    {t.wishes.chooseFromList}
                  </button>
                </div>
              </div>

              {mode === 'write' && (
                <textarea
                  name="message"
                  placeholder={t.wishes.messagePlaceholder}
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
                    <option value="">{t.wishes.selectWish}</option>
                    {t.wishes.presetWishes.map((msg, i) => (
                      <option key={i} value={msg}>{msg}</option>
                    ))}
                  </select>

                  <input type="hidden" name="message" id="generatedWish" value={selectedMessage} />
                </>
              )}

              <button
                type="submit"
                className="text-white px-6 py-3 rounded-md w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={goldButton}
              >
                {t.wishes.submit}
              </button>

              <div className="flex justify-center mt-10">
                <img src="/images/flower.png" alt="Flower decoration" className="w-32 sm:w-40 mb-2" />
              </div>
            </form>
          )}
        </div>

        <div className="bg-[#d8c9b8] rounded-xl shadow-lg p-6 sm:p-10 md:p-14 w-full">
          <div className="text-center mb-6 sm:mb-10">
            <div className={titleBox}>
              <h2
                className="text-6xl sm:text-7xl md:text-7xl leading-[0.9]"
                style={{ fontFamily: "'Miama', cursive", ...goldText }}
              >
                {t.poll.title}
              </h2>
            </div>

            <FaChartBar
              className="text-4xl sm:text-5xl text-center mx-auto mt-6"
              style={{
                fill: 'url(#goldWishIconGradient)',
                filter: 'drop-shadow(0 3px 6px rgba(120, 90, 25, 0.22))',
              }}
            />
          </div>

          {showResults ? (
            <div className="space-y-10">
              <div>
                <h4 className="font-semibold text-lg mb-4">{t.poll.q1}</h4>
                {renderResults('q1')}
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">{t.poll.q2}</h4>
                {renderResults('q2')}
              </div>
            </div>
          ) : (
            <form onSubmit={handlePollSubmit} className="space-y-10">
              <div>
                <h4 className="font-semibold text-lg mb-4">{t.poll.q1}</h4>

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
                    {t.poll.options[opt]}
                  </label>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">{t.poll.q2}</h4>

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
                    {t.poll.options[opt]}
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="text-white px-6 py-3 rounded-md w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={goldButton}
              >
                {t.poll.submit}
              </button>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="mt-2 text-sm text-gray-700 underline hover:text-gray-900 transition"
                >
                  {t.poll.seeResults}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
