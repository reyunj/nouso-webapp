import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1a2233]">Our Services</h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700">
          We deliver B2B growth through outbound systems that include lead generation, appointment setting, and ongoing sales enablement. Whether you need consistent meetings booked or help converting warm leads, everything is handled in-house by our Sydney team.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-[#294243]">B2B Lead Generation</h2>
          <p className="text-gray-700 mb-2">Multi-channel outreach (email, LinkedIn, cold calling) to fill your sales pipeline with qualified, ready-to-buy decision-makers.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-[#294243]">B2B Appointment Setting</h2>
          <p className="text-gray-700 mb-2">We don’t just generate leads — we book sales-ready meetings straight into your calendar, saving your team hours each week.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-[#294243]">Lead Nurturing for B2B Sales</h2>
          <p className="text-gray-700 mb-2">Turn cold or stale leads into warm opportunities through reactivation campaigns and drip nurturing sequences.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-[#294243]">Inbound Lead Management</h2>
          <p className="text-gray-700 mb-2">We qualify and follow up with your inbound leads (from forms, referrals, or ads) to maximise your conversion rate.</p>
        </div>
      </section>
      <div className="text-center mt-12">
        <Link href="/book" className="inline-block px-8 py-3 bg-[#294243] text-white rounded-lg font-semibold shadow hover:bg-[#1a2233] transition-colors text-lg">Let’s Start Generating Leads</Link>
      </div>
    </main>
  );
}
