import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#eae6df] min-h-[100svh] flex items-center px-4 sm:px-6 py-24 sm:py-36 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 w-full">
    
    {/* Κεντρικό Πλαίσιο */}
    <div
      className="bg-white py-16 px-6 sm:px-10 md:px-20 rounded-2xl shadow-2xl w-full md:w-[60%]"
      data-aos="fade-up"
    >
      <h1 className="text-5xl sm:text-6xl font-serif text-gray-800 mb-10 text-center">
        Θοδωρής & Έννη
      </h1>
      <hr className="my-8 border-gray-300" />
      <p className="text-xl sm:text-2xl text-gray-700 mb-10 text-center">
        Παντρευόμαστε και σας προσκαλούμε στον γάμο μας!
      </p>
      <div className="flex justify-center">
        <a
          href="#rsvp"
          className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 text-lg rounded-lg transition"
        >
          RSVP
        </a>
      </div>
    </div>

    {/* Φωτογραφίες */}
    <div className="grid grid-cols-2 gap-3 w-full md:w-[40%]">
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
