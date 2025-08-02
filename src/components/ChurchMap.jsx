import React from 'react';

export default function ChurchMap() {
  return (
    <section className="text-white py-24 sm:py-32 px-4 sm:px-6 text-center bg-[#1e1916]">
      <div className="max-w-screen-xl mx-auto space-y-24">

        {/* Μυστήριο */}
        <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="1200">
          <h2 className="text-5xl sm:text-6xl font-serif mb-6">Το μυστήριο</h2>
          <hr className="border-t border-gray-400 w-1/2 mx-auto mb-6" />
          <p className="text-2xl sm:text-3xl font-semibold mb-2">Ιερός Ναός Αγίας Κυριακής</p>
          <p className="text-xl sm:text-2xl mb-10">7:00 μ.μ.</p>

          <div className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Church Location"
              src="https://maps.google.com/maps?q=40.84582052941156,25.86566749798691&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://maps.app.goo.gl/qwSeNJ5Y4uz4iiSJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black text-base sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded shadow hover:bg-gray-200 transition"
          >
            Πλοήγηση | Google Maps 🚗
          </a>
        </div>

        {/* Δεξίωση */}
        <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1200">
          <h2 className="text-5xl sm:text-6xl font-serif mb-6">Η δεξίωση</h2>
          <hr className="border-t border-gray-400 w-1/2 mx-auto mb-6" />
          <p className="text-2xl sm:text-3xl font-semibold mb-2">Κέντρο Δεξιώσεων "Αστερίας"</p>
          <p className="text-xl sm:text-2xl mb-10">9:00 μ.μ.</p>

          <div className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Reception Location"
              src="https://maps.google.com/maps?q=40.8505,25.8723&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://maps.google.com?q=40.8505,25.8723"
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
