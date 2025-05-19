import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#eae6df] min-h-screen flex items-center px-6 py-36 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 w-full">
        
        {/* Κεντρικό Πλαίσιο */}
        <div
          className="bg-white py-40 px-20 rounded-2xl shadow-2xl w-full md:w-[130%] lg:w-[130%] md:translate-x-[-10%]"
          data-aos="fade-up"
        >
          <h1 className="text-6xl md:text-7xl font-serif text-gray-800 mb-14 text-center">
            Θοδωρής & Έννη
          </h1>
          <hr className="my-10 border-gray-300" />
          <p className="text-2xl md:text-3xl text-gray-700 mb-14 text-center">
            Παντρευόμαστε και σας προσκαλούμε στον γάμο μας!
          </p>
          <div className="flex justify-center">
            <a
              href="#rsvp"
              className="bg-rose-400 hover:bg-rose-500 text-white px-10 py-5 text-xl rounded-lg transition"
            >
              RSVP
            </a>
          </div>
        </div>

        {/* Φωτογραφίες με animation */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-[150%]">
          <img
            src="/images/img1.jpg"
            alt="img1"
            className="w-full aspect-[3/4] object-cover rounded-xl animate-floating-fast delay-0"
          />
          <img
            src="/images/img2.jpg"
            alt="img2"
            className="w-full aspect-[3/4] object-cover rounded-xl animate-floating-medium delay-200"
          />
          <img
            src="/images/img3.jpg"
            alt="img3"
            className="w-full aspect-[5/3] object-cover rounded-xl col-span-2 animate-floating-slow delay-400"
          />
        </div>
      </div>
    </section>
  );
}
