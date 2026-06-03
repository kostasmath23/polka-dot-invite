import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#F8F0EB] min-h-[100svh] flex items-center overflow-x-hidden overflow-y-hidden px-4 sm:px-6 py-24 sm:py-36">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-20">

        {/* Κείμενο */}
        <div
          className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-20 rounded-2xl shadow-2xl w-full lg:w-1/2"
          data-aos="fade-up"
        >
<h1
  className="mb-10 text-center leading-[0.1] text-7xl sm:text-8xl md:text-8xl"
  style={{
    fontFamily: "'Miama', cursive",
    background: "linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 3px 10px rgba(120, 90, 25, 0.18)",
  }}
>
  Κωνσταντίνος
  <br />
  <span className="text-5xl sm:text-6xl md:text-7xl">&</span>
  <br />
  Παναγιώτα
</h1>
          <hr className="my-8 border-gray-300" />
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 text-center">
            Παντρευόμαστε και σας προσκαλούμε στον γάμο μας!
          </p>
          <div className="flex justify-center">
  <a
    href="#rsvp"
    className="text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    style={{
      background: "linear-gradient(135deg, #B8860B, #F5D76E, #C9A24A, #8B6B1F)",
      boxShadow: "0 6px 18px rgba(120, 90, 25, 0.28)",
    }}
  >
    RSVP
  </a>
</div>
        </div>

        {/* Εικόνες */}
        <div className="grid grid-cols-2 gap-3 w-full lg:w-1/2 overflow-hidden">
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
