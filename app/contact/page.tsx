import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1a2233]">Connect with Nousu for Expert B2B Lead Generation Services.</h1>
        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-700">
          Nousu specializes in b2b lead generation services, serving Sydney-based SaaS and finance companies. Our expert team uses proven outbound strategies, including cold email and cold calling, to help businesses connect with potential clients effectively. By tailoring our approach to each client&apos;s needs, we ensure maximum results in filling your sales pipeline with qualified leads. Schedule your free consultation today and let Nousu transform your business growth with our renowned b2b lead generation services.
        </p>
      </header>
      <section className="bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-lg font-semibold mb-2 text-[#294243]">Contact Details</h2>
        <div className="mb-2">
          <span className="font-medium">Address:</span> 1 Sussex Street, Sydney, 2000
        </div>
        <div className="mb-2">
          <span className="font-medium">Phone:</span> <a href="tel:+61483942889" className="text-[#294243] underline hover:text-[#1a2233]">+61 483 942 889</a>
        </div>
        <div className="mb-2">
          <span className="font-medium">Email:</span> <a href="mailto:harry@nousucollective.com" className="text-[#294243] underline hover:text-[#1a2233]">harry@nousucollective.com</a>
        </div>
        <div>
          <span className="font-medium">LinkedIn:</span> <a href="https://www.linkedin.com/company/nousucollective/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[#294243] underline hover:text-[#1a2233]">Nousu Collective</a>
        </div>
      </section>
      <section className="bg-[#f5f7fa] rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4 text-[#294243]">Contact Form</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#294243]" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#294243]" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#294243]" />
          </div>
          <button type="submit" className="w-full bg-[#294243] text-white font-semibold rounded-lg py-2 hover:bg-[#1a2233] transition-colors">Send Message</button>
        </form>
      </section>
    </main>
  );
}
