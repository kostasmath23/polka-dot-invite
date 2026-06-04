import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

export default function RSVPForm() {
  const { t } = useLanguage();
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const goldGradient = 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)';

  const goldText = {
    background: goldGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const goldButton = {
    background: goldGradient,
    boxShadow: '0 6px 18px rgba(120, 90, 25, 0.28)',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gq3nglo', 'template_lscg14m', form.current, 'PhphUrmOyFt_PdVls')
      .then(() => setSubmitted(true))
      .catch((error) => alert(t.rsvp.error + error.text));
  };

  return (
    <section id="rsvp" className="bg-[#d8c9b8] py-24 sm:py-32 px-4 sm:px-6 text-gray-900 text-base sm:text-lg">
      <div className="max-w-screen-lg mx-auto bg-white p-6 sm:p-10 md:p-14 rounded-xl shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-6xl sm:text-7xl md:text-7xl leading-none inline-block" style={{ fontFamily: "'Miama', cursive", ...goldText, paddingTop: '0.15em', paddingBottom: '0.08em' }}>
            {t.rsvp.title}
          </h2>
        </div>

        <p className="text-center mb-10 text-base sm:text-xl">
          {t.rsvp.intro}
          <br />
          {t.rsvp.phones}
        </p>

        {submitted ? (
          <p className="text-green-700 text-xl text-center">{t.rsvp.submitted}</p>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="font-semibold block mb-2" style={goldText}>{t.rsvp.attendance}</label>
              <div className="space-y-2 pl-2">
                {t.rsvp.attendanceOptions.map((text, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input type="radio" name="attendance" required value={text} className="w-5 h-5" />
                    {text}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="font-semibold block mb-2">{t.rsvp.adults}</label>
              <select name="adults" required className="w-full border rounded px-4 py-3">
                <option value="">{t.rsvp.adultsPlaceholder}</option>
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
              </select>
            </div>

            <div>
              <label className="font-semibold block mb-2">{t.rsvp.children}</label>
              <select name="children" required className="w-full border rounded px-4 py-3">
                <option value="">{t.rsvp.childrenPlaceholder}</option>
                <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>
              </select>
            </div>

            <div>
              <label className="font-semibold block mb-2">{t.rsvp.name}</label>
              <input name="name" type="text" required className="w-full border rounded px-4 py-3" />
            </div>

            <div>
              <label className="font-semibold block mb-2">{t.rsvp.phone}</label>
              <input name="phone" type="tel" className="w-full border rounded px-4 py-3" placeholder={t.rsvp.phonePlaceholder} />
            </div>

            <button type="submit" className="text-white px-6 py-3 rounded-md w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-center" style={goldButton}>
              {t.rsvp.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
