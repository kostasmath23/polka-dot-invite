import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import SaveTheDate from './components/SaveTheDate';
import Gallery from './components/Gallery';
import InvitationAndGifts from './components/InvitationAndGifts';
import WishesAndPoll from './components/WishesAndPoll';
import Cast from './components/Cast';
import ChurchMap from './components/ChurchMap';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import DotNavigation from './components/DotNavigation';
import BackgroundMusic from './components/BackgroundMusic';

export default function App() {
  return (
    <div className="relative">
      {/* Dot navigation δεξιά */}
      <DotNavigation />

      {/* ΠΑΓΙΟ RSVP ΚΟΥΜΠΙ */}
      <a
        href="#rsvp"
        className="fixed top-6 left-6 z-50 bg-[#87A96B] hover:bg-[#87A96B] text-white px-6 py-3 rounded-lg shadow-lg text-xl font-bold animate-pulse"
      >
        RSVP
      </a>

      {/* ΠΑΙΚΤΗΣ ΜΟΥΣΙΚΗΣ */}
      <BackgroundMusic />

      {/* Περιεχόμενο σε sections */}
      <section id="hero"><Hero /></section>
      <section id="countdown"><Countdown /></section>
      <section id="timeline"><Timeline /></section>
      <section id="savethedate"><SaveTheDate /></section>
      <section id="gallery"><Gallery /></section>
      <section id="invitation"><InvitationAndGifts /></section>
      <section id="wishes"><WishesAndPoll /></section>
      <section id="cast"><Cast /></section>
      <section id="church"><ChurchMap /></section>
      <section id="rsvp"><RSVPForm /></section>

      <Footer />
    </div>
  );
}
