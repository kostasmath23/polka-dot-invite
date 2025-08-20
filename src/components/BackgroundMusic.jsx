import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // 🔊 ξεκινάει με ήχο (όχι σίγαση)

  // Προσπάθεια autoplay με ήχο + fallback σε πρώτο interaction
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => audio.play().catch(() => { /* blocked by browser until gesture */ });

    if (!isMuted) {
      tryPlay();
      const onInteract = () => tryPlay();
      // Μόλις ο χρήστης αγγίξει/κλικάρει, ξαναδοκίμασε να παίξεις
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
      // άρση σίγασης -> προσπάθησε να παίξεις
      audio.play().catch(() => {});
    } else {
      // σίγαση -> κάνε pause για οικονομία
      audio.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        muted={isMuted}
        autoPlay   // ζητάμε autoplay (αν επιτραπεί)
        playsInline // για iOS ώστε να μην ανοίγει full-screen player
        preload="auto"
      />
      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 z-50 bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg text-xl hover:bg-gray-200 transition"
        aria-label="Toggle music"
        title={isMuted ? 'Ενεργοποίηση ήχου' : 'Σίγαση'}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </>
  );
}
