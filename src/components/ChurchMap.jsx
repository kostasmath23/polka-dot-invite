import React from 'react';

export default function ChurchMap() {
  const goldGradient =
    'linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)';

  const goldText = {
    background: goldGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 10px rgba(120, 90, 25, 0.18)',
  };

  const titleBox =
    'bg-white rounded-2xl shadow-xl px-8 py-5 inline-block';

  const goldButton = {
    background: goldGradient,
    boxShadow: '0 6px 18px rgba(120, 90, 25, 0.28)',
  };

  return (
    <section className="text-white py-24 sm:py-32 px-4 sm:px-6 text-center bg-[#F8F0EB]">
      <div className="max-w-screen-xl mx-auto space-y-24">

        {/* Μυστήριο */}
        <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="1200">
          <div className={titleBox}>
            <h2
              className="text-6xl sm:text-7xl md:text-8xl leading-[0.9]"
              style={{
                fontFamily: "'Miama', cursive",
                ...goldText,
              }}
            >
              Το μυστήριο
            </h2>
          </div>

          <hr className="border-t border-gray-400 w-1/2 mx-auto my-6" />

          <div className="bg-white rounded-2xl shadow-xl px-8 py-5 inline-block mb-10">
            <p
              className="text-2xl sm:text-3xl font-semibold mb-2"
              style={goldText}
            >
              Ιερός Ναός Αγίας Κυριακής
            </p>

            <p
              className="text-xl sm:text-2xl"
              style={goldText}
            >
              5:30 μ.μ.
            </p>
          </div>

          <div className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.1723394055043!2d25.860126953879984!3d40.84613989778861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b21cba8eca554d%3A0x24a65119ac829844!2zzpHOvc64zq_OvM61zrnOvyDOlc66zrrOu863z4POuc6xz4PPhM65zrrPjCDOoM6_zrvOuc-EzrnPg8-EzrnOus-MIM6azq3Ovc-Ez4HOvw!5e0!3m2!1sel!2sgr!4v1755429223420!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://maps.app.goo.gl/mYxEhxHLvZMRgMqHA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-base sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded shadow transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={goldButton}
          >
            Πλοήγηση | Google Maps 🚗
          </a>
        </div>

        {/* Δεξίωση */}
        <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1200">
          <div className={titleBox}>
            <h2
              className="text-6xl sm:text-7xl md:text-8xl leading-[0.9]"
              style={{
                fontFamily: "'Miama', cursive",
                ...goldText,
              }}
            >
              Η δεξίωση
            </h2>
          </div>

          <hr className="border-t border-gray-400 w-1/2 mx-auto my-6" />

          <div className="bg-white rounded-2xl shadow-xl px-8 py-5 inline-block mb-10">
            <p
              className="text-2xl sm:text-3xl font-semibold mb-2"
              style={goldText}
            >
              Κτήμα Ateria
            </p>

            <p
              className="text-xl sm:text-2xl"
              style={goldText}
            >
              Μετά την τελετή
            </p>
          </div>

          <div className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Reception Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.246552020174!2d25.89964331210062!3d40.88840627124818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b21be8942bde19%3A0x4c518f82b085b5bb!2sKtima%20Ateria!5e0!3m2!1sel!2sgr!4v1755429051488!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://maps.app.goo.gl/9U5JntKCeBxxdiv78"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-base sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded shadow transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={goldButton}
          >
            Πλοήγηση | Google Maps 🎉
          </a>
        </div>

      </div>
    </section>
  );
}