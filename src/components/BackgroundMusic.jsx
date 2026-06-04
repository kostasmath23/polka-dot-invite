import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function BackgroundMusic() {
  const { t } = useLanguage();
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => audio.play().catch(() => {});

    if (!isMuted) {
      tryPlay();
      const onInteract = () => tryPlay();

      window.addEventListener('click', onInteract, { once: true, passive: true });
      window.addEventListener('touchstart', onInteract, { once: true, passive: true });

      return () => {
        window.removeEventListener('click', onInteract);
        window.removeEventListener('touchstart', onInteract);
      };
    }
  }, [isMuted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }

    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop muted={isMuted} autoPlay playsInline preload="auto" />

      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 z-50 bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg text-xl hover:bg-gray-200 transition"
        aria-label={t.music.toggle}
        title={isMuted ? t.music.unmute : t.music.mute}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </>
  );
}
