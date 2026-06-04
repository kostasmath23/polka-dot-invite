import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ScrollProvider } from './context/ScrollContext';
import { LanguageProvider } from './context/LanguageContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <ParallaxProvider>
      <ScrollProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ScrollProvider>
    </ParallaxProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
