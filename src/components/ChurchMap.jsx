import React from 'react';

export default function ChurchMap() {
  return (
    <section className="text-white py-24 sm:py-32 px-4 sm:px-6 text-center bg-[#d8c9b8]">
      <div className="max-w-screen-xl mx-auto space-y-24">

        {/* Μυστήριο */}
        <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="1200">
          <h2 className="text-5xl sm:text-6xl font-serif mb-6 text-black">Το μυστήριο</h2>
          <hr className="border-t border-gray-400 w-1/2 mx-auto mb-6" />
          <p className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: '#306844' }}>Ιερός Ναός Αγίας Κυριακής</p>
          <p className="text-xl sm:text-2xl mb-10" style={{ color: '#306844' }}>5:30 μ.μ.</p>

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
            className="inline-block bg-white text-black text-base sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded shadow hover:bg-gray-200 transition"
          >
            Πλοήγηση | Google Maps 🚗
          </a>
        </div>

        {/* Δεξίωση */}
        <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1200">
          <h2 className="text-5xl sm:text-6xl font-serif mb-6 text-black">Η δεξίωση</h2>
          <hr className="border-t border-gray-400 w-1/2 mx-auto mb-6" />
          <p className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: '#306844' }}>Κέντρο Δεξιώσεων "Αστερίας"</p>
          <p className="text-xl sm:text-2xl mb-10" style={{ color: '#306844' }}>Μετά την τελετή</p>

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
            className="inline-block bg-white text-black text-base sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded shadow hover:bg-gray-200 transition"
          >
            Πλοήγηση | Google Maps 🎉
          </a>
        </div>

      </div>
    </section>
  );
}
