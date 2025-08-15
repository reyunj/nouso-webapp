import React from "react";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Nousu – B2B Lead Generation Agency | Sydney, Australia</title>
        <meta
          name="description"
          content="Nousu specialises in B2B lead generation for SaaS and finance companies, offering cold email, cold calling, and appointment setting services."
        />
        <meta property="og:title" content="Nousu – B2B Lead Generation Agency | Sydney, Australia" />
        <meta property="og:description" content="Nousu specialises in B2B lead generation for SaaS and finance companies, offering cold email, cold calling, and appointment setting services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nousucollective.com/" />
        <meta property="og:site_name" content="NOUSU" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nousu – B2B Lead Generation Agency | Sydney, Australia" />
        <meta name="twitter:description" content="Nousu specialises in B2B lead generation for SaaS and finance companies, offering cold email, cold calling, and appointment setting services." />
        <link rel="canonical" href="https://www.nousucollective.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NOUSU',
              url: 'https://www.nousucollective.com/',
              logo: '',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  email: 'harry@nousucollective.com',
                  contactType: 'sales',
                  areaServed: 'AU',
                  availableLanguage: ['English'],
                },
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1 Sussex Street',
                addressLocality: 'Sydney',
                addressRegion: 'NSW',
                postalCode: '2000',
                addressCountry: 'AU',
              },
              sameAs: [
                'https://www.linkedin.com/company/nousucollective/?viewAsMember=true',
              ],
            }),
          }}
        />
      </Head>
      <main className="bg-white min-h-screen">
        {/* Hero Section (Two-Column) */}
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center md:justify-between">
          {/* Left: Text Content */}
          <div className="flex-1 text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2233] mb-6 leading-tight">
              B2B Lead Generation<br />for SaaS and Finance Companies
            </h1>
            <p className="mb-6 text-gray-700 text-base md:text-lg max-w-md">
              Nousu helps SaaS and finance companies scale faster with outbound <a href="/services" className="text-[#294243] underline hover:text-[#1a2233]">lead generation</a>. We handle your <a href="/services" className="text-[#294243] underline hover:text-[#1a2233]">cold email</a>, <a href="/services" className="text-[#294243] underline hover:text-[#1a2233]">cold calling</a>, and <a href="/services" className="text-[#294243] underline hover:text-[#1a2233]">appointment setting</a> all under one roof. No outsourcing, just booked meetings with real buyers.
            </p>
            <a
              href="/book"
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded shadow hover:bg-[#294243] transition mb-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#294243]"
            >
              Book a Free Strategy Call
            </a>
            {/* Features */}
            <ul className="flex flex-wrap gap-6 mt-4">
              <li className="flex items-center gap-2 text-gray-800 text-sm">
                <span className="inline-block"><svg width="24" height="24" fill="none" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#E5E7EB"/><path d="M8 12.5l3 3 5-5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                Qualified Appointments
              </li>
              <li className="flex items-center gap-2 text-gray-800 text-sm">
                <span className="inline-block"><svg width="24" height="24" fill="none" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#E5E7EB"/><path d="M12 7v10M7 12h10" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                Flexibility &amp; Scalability
              </li>
              <li className="flex items-center gap-2 text-gray-800 text-sm">
                <span className="inline-block"><svg width="24" height="24" fill="none" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#E5E7EB"/><path d="M8 12h8M8 16h8M8 8h8" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                Better Collaboration
              </li>
            </ul>
          </div>
          {/* Right: Hero Image */}
          <div className="flex-1 flex items-center justify-end w-full max-w-md">
            <img
              src="/assets/HeroPic.png"
              alt="Team collaborating on SaaS lead generation"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
              loading="eager"
              width={340}
              height={260}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Why Choose Nousu?</h2>
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Multi-Channel Outreach</h3>
              <p className="text-gray-700">We combine personalised cold email, cold calling, and LinkedIn to reach real decision-makers across SaaS and finance.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Full Setup & Strategy</h3>
              <p className="text-gray-700">We handle your domain setup, warm-up, ICP research, list building, and message testing — all before launch.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Live Appointment Setting</h3>
              <p className="text-gray-700">Our team calls your prospects, qualifies them, and books meetings straight into your calendar with people ready to talk.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Ongoing Campaign Optimisation</h3>
              <p className="text-gray-700">We refine your sequences, targeting, and deliverability weekly to improve reply rates and maximise conversions.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
            <div className="bg-white rounded-xl shadow p-6 sm:p-8 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Growth</h3>
              <div className="text-2xl sm:text-3xl font-bold mb-1">$5,899 <span className="text-base font-medium">/month</span></div>
              <p className="text-gray-700 mb-4">For businesses ready to scale with multi-channel outreach. Valid for 3 months.</p>
              <ul className="mb-6 space-y-2 text-gray-700 text-xs sm:text-sm list-disc pl-4">
                <li>Up to 20 qualified meetings/month</li>
                <li>6 domains (3 Google, 3 Outlook)</li>
                <li>Clay-enriched data for all leads</li>
                <li>Custom LinkedIn outreach campaigns</li>
                <li>Cold email + cold calling layered in</li>
                <li>Advanced ICP research and targeting</li>
                <li>Live appointment booking</li>
                <li>All email addresses fully verified</li>
                <li>Bi-weekly reporting and campaign optimisation</li>
                <li>Perfect if: You want consistent pipeline</li>
              </ul>
              <a href="/book" className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-[#294243] text-white rounded-lg font-semibold shadow hover:bg-[#1a2233] transition-colors">Get Started</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to grow your sales pipeline?</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">Book a free strategy call and see how Nousu can help you generate more qualified leads for your business.</p>
          <a href="/book" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#294243] text-white rounded-lg font-semibold shadow hover:bg-[#1a2233] transition-colors">Book a Strategy Call</a>
        </section>
      </main>
    </>
  );
}
