import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ScrollProvider } from './context/ScrollContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,     // διάρκεια animation σε ms
      once: true,         // animation εμφανίζεται μόνο 1η φορά
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <ParallaxProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ParallaxProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
