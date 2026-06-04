import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ChurchMap() {
  const { t } = useLanguage();

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

  return (
    <section className="text-white py-24 sm:py-32 px-4 sm:px-6 text-center bg-[#F8F0EB]">
      <div className="max-w-screen-xl mx-auto space-y-24">
        <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="1200">
          <div className={titleBox}>
            <h2 className="text-6xl sm:text-7xl md:text-8xl leading-[0.9]" style={{ fontFamily: "'Miama', cursive", ...goldText }}>
              {t.church.ceremonyTitle}
            </h2>
          </div>

          <hr className="border-t border-gray-400 w-1/2 mx-auto my-6" />

          <div className="bg-white rounded-2xl shadow-xl px-8 py-5 inline-block mb-10">
            <p className="text-2xl sm:text-3xl font-semibold mb-2" style={goldText}>{t.church.ceremonyPlace}</p>
            <p className="text-xl sm:text-2xl" style={goldText}>{t.church.ceremonyTime}</p>
          </div>

          <div className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3069.4029323388!2d20.78828627597606!3d39.70812657156224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQyJzI5LjMiTiAyMMKwNDcnMjcuMSJF!5e0!3m2!1sel!2sgr!4v1780503330059!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a href="https://maps.app.goo.gl/bV6b1LbATCF2RWNr9" target="_blank" rel="noopener noreferrer" className="inline-block text-white text-base sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded shadow transition-all duration-300 hover:scale-105 hover:shadow-xl" style={goldButton}>
            {t.church.ceremonyButton}
          </a>
        </div>

        <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1200">
          <div className={titleBox}>
            <h2 className="text-6xl sm:text-7xl md:text-8xl leading-[0.9]" style={{ fontFamily: "'Miama', cursive", ...goldText }}>
              {t.church.receptionTitle}
            </h2>
          </div>

          <hr className="border-t border-gray-400 w-1/2 mx-auto my-6" />

          <div className="bg-white rounded-2xl shadow-xl px-8 py-5 inline-block mb-10">
            <p className="text-2xl sm:text-3xl font-semibold mb-2" style={goldText}>{t.church.receptionPlace}</p>
            <p className="text-xl sm:text-2xl" style={goldText}>{t.church.receptionTime}</p>
          </div>

          <div className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Reception Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.7571336843134!2d20.7335101!3d39.7900054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135bc7499b55c385%3A0x3bddb8fbc5e0922b!2zzqfOrs-Ezr_PgiBMdXh1cnkgSGFsbA!5e0!3m2!1sel!2sgr!4v1780503467071!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a href="https://maps.app.goo.gl/JsSQKM8wFhhAcYu56" target="_blank" rel="noopener noreferrer" className="inline-block text-white text-base sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded shadow transition-all duration-300 hover:scale-105 hover:shadow-xl" style={goldButton}>
            {t.church.receptionButton}
          </a>
        </div>
      </div>
    </section>
  );
}
