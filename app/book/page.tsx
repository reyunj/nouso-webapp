import React from "react";

export default function BookPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-16 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1a2233]">Book a Discovery Call</h1>
        <p className="max-w-lg mx-auto text-base sm:text-lg text-gray-700">
          Schedule a free 1-hour Discovery Call with our team to explore how Nousu can help you build a consistent sales pipeline. Get expert advice, tailored strategies, and answers to your questions—no obligation.
        </p>
      </header>
      <section className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-xl font-semibold mb-2 text-[#294243]">Discovery Call</h2>
        <p className="mb-2 text-gray-700">1 hour · Free</p>
        <a
          href="https://www.nousucollective.com/booking-calendar/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#294243] text-white rounded-lg font-semibold shadow hover:bg-[#1a2233] transition-colors text-lg mb-4"
        >
          Book Now
        </a>
        <div>
          <a href="/price" className="text-[#294243] underline hover:text-[#1a2233] text-sm">Explore Plans</a>
        </div>
      </section>
    </main>
  );
}
