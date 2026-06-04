import React from 'react';
import Countdown from 'react-countdown';
import { useLanguage } from '../context/LanguageContext';

export default function Timer() {
  const { t } = useLanguage();
  const weddingDate = new Date('2026-10-31T16:30:00');

  const goldTextStyle = {
    background: 'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const renderer = ({ days, hours, minutes, seconds }) => (
    <section className="bg-[#d8c9b8] py-20 sm:py-24 px-3 sm:px-6">
      <div className="bg-white shadow-2xl max-w-screen-xl mx-auto rounded-2xl py-14 sm:py-24 px-3 sm:px-16 text-center overflow-hidden">
        <div
          className="
            flex justify-center items-start flex-nowrap
            gap-1 min-[390px]:gap-2 sm:gap-10
            text-[2.25rem] min-[390px]:text-[2.6rem]
            sm:text-6xl md:text-7xl font-light leading-tight whitespace-nowrap
          "
          style={goldTextStyle}
        >
          {[
            [days, t.countdown.days, 'min-w-[44px] min-[390px]:min-w-[50px] sm:min-w-[90px]'],
            [hours, t.countdown.hours, 'min-w-[38px] min-[390px]:min-w-[44px] sm:min-w-[80px]'],
            [minutes, t.countdown.minutes, 'min-w-[38px] min-[390px]:min-w-[44px] sm:min-w-[80px]'],
            [seconds, t.countdown.seconds, 'min-w-[38px] min-[390px]:min-w-[44px] sm:min-w-[80px]'],
          ].map(([value, label, width], index) => (
            <React.Fragment key={label}>
              {index > 0 && (
                <div className="text-[2rem] min-[390px]:text-[2.3rem] sm:text-5xl font-thin leading-none pt-1">
                  :
                </div>
              )}
              <div className={`flex flex-col items-center ${width}`}>
                <div>{String(value).padStart(2, '0')}</div>
                <div className="text-[0.55rem] min-[390px]:text-[0.62rem] sm:text-base mt-1 sm:mt-2 uppercase tracking-wide">
                  {label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );

  return <Countdown date={weddingDate} renderer={renderer} />;
}
