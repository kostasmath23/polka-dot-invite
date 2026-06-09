import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function InvitationAndGifts() {
  const { t } = useLanguage();

  const goldText = {
    background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const titleBox = 'bg-white rounded-2xl shadow-xl px-8 py-5 inline-block';

  return (
    <section className="bg-[#d8c9b8] py-24 sm:py-32 px-4 sm:px-6 text-gray-900 text-lg sm:text-xl">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-8">
        
        <div className={titleBox}>
          <h2
            className="text-6xl sm:text-7xl md:text-7xl leading-[0.9]"
            style={{
              fontFamily: "'Miama', cursive",
              ...goldText,
            }}
          >
            {t.invitation.title}
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-xl shadow-xl w-full max-w-md invitation-glow">
          <img
            src="/images/invite.jpg"
            alt={t.invitation.invitationAlt}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}