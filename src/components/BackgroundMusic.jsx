import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    // Για να ξεκινήσει σε desktop
    const playAudio = () => {
      if (!isMuted && audio) {
        audio.play().catch(() => {});
      }
    };

    document.addEventListener('click', playAudio, { once: true });
    return () => document.removeEventListener('click', playAudio);
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
      <audio ref={audioRef} src="/music.mp3" loop muted={isMuted} />
      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 z-50 bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg text-xl hover:bg-gray-200 transition"
        aria-label="Toggle music"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </>
  );
}
