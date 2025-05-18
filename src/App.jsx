import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import SaveTheDate from './components/SaveTheDate';
import Gallery from './components/Gallery';
import Cast from './components/Cast';
import InvitationAndGifts from './components/InvitationAndGifts';
import WishesAndPoll from './components/WishesAndPoll';
import RSVPForm from './components/RSVPForm';
import ChurchMap from './components/ChurchMap';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import SectionWrapper from './components/SectionWrapper';
import ScrollDots from './components/ScrollDots';

export default function App() {
  return (
    <div>
      <BackgroundMusic />
      <ScrollDots />

      <SectionWrapper><div id="hero"><Hero /></div></SectionWrapper>
      <SectionWrapper><div id="countdown"><Countdown /></div></SectionWrapper>
      <SectionWrapper><div id="timeline"><Timeline /></div></SectionWrapper>
      <SectionWrapper><div id="savethedate"><SaveTheDate /></div></SectionWrapper>
      <SectionWrapper><div id="gallery"><Gallery /></div></SectionWrapper>
      <SectionWrapper><div id="cast"><Cast /></div></SectionWrapper>
      <SectionWrapper><div id="gifts"><InvitationAndGifts /></div></SectionWrapper>
      <SectionWrapper><div id="poll"><WishesAndPoll /></div></SectionWrapper>
      <SectionWrapper><div id="rsvp"><RSVPForm /></div></SectionWrapper>
      <SectionWrapper><div id="map"><ChurchMap /></div></SectionWrapper>

      <Footer />

      {/* RSVP κουμπί */}
      <a
        href="#rsvp"
        className="fixed top-5 left-5 bg-red-600 text-white font-bold px-6 py-2 rounded shadow-lg text-xl animate-pulse z-50"
      >
        RSVP
      </a>
    </div>
  );
}
