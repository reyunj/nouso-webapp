import React from "react";
import Head from "next/head";
import Image from "next/image";

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
        <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-20 flex flex-col-reverse md:flex-row items-center md:justify-between gap-8 md:gap-0">
          {/* Left: Text Content */}
          <div className="flex-1 w-full text-left max-w-xl mb-8 md:mb-0">
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
          <div className="flex-1 w-full flex items-center justify-center md:justify-end max-w-md mb-8 md:mb-0">
            <Image
              src="/assets/HeroPic.png"
              alt="Team collaborating on SaaS lead generation"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded-xl shadow-lg"
              width={340}
              height={260}
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left">Why Choose Nousu?</h2>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/multi-channel.png" alt="Multi-Channel Outreach" className="w-32 h-32 object-contain mb-4" width={128} height={128} />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Multi-Channel Outreach</h3>
              <p className="text-gray-700">We combine personalised cold email, cold calling, and LinkedIn to reach real decision-makers across SaaS and finance.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/setup-strategy.png" alt="Full Setup & Strategy" className="w-32 h-32 object-contain mb-4" width={128} height={128} />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Full Setup & Strategy</h3>
              <p className="text-gray-700">We handle your domain setup, warm-up, ICP research, list building, and message testing — all before launch.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/appointment.png" alt="Live Appointment Setting" className="w-32 h-32 object-contain mb-4" width={128} height={128} />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Live Appointment Setting</h3>
              <p className="text-gray-700">Our team calls your prospects, qualifies them, and books meetings straight into your calendar with people ready to talk.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/campaign.png" alt="Ongoing Campaign Optimisation" className="w-32 h-32 object-contain mb-4" width={128} height={128} />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Ongoing Campaign Optimisation</h3>
              <p className="text-gray-700">We refine your sequences, targeting, and deliverability weekly to improve reply rates and maximise conversions.</p>
            </div>
          </div>
        </section>

        {/* Trusted Section */}
        <section className="py-8 sm:py-10 md:py-14 bg-white flex flex-col md:flex-row items-center md:justify-between max-w-7xl mx-auto px-4 gap-8 md:gap-16">
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/trusted.png"
              alt="Trusted by Leading Companies"
              className="w-full max-w-lg h-auto object-contain"
              width={600}
              height={160}
            />
          </div>
          <div className="flex-1 w-full max-w-xl text-left mt-8 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Handled by Humans,<br className='hidden md:block'/> Trusted by C-Suites</h2>
            <p className="mb-6 text-gray-700 text-base md:text-lg">Every campaign is run by real salespeople in Sydney, not offshore juniors or automation bots. We speak directly to founders, GMs, and heads of sales. Our job is to open conversations with the right people and book meetings you actually want to take.</p>
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-6">
              <div className="flex flex-col items-center">
                <svg width="32" height="32" fill="none" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#111"/><path d="M10 14h12M10 18h12M10 10h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-xs mt-2">All-in-One</span>
              </div>
              <div className="flex flex-col items-center">
                <svg width="32" height="32" fill="none" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#111"/><rect x="10" y="10" width="12" height="12" rx="2" fill="#fff"/></svg>
                <span className="text-xs mt-2">File Sharing</span>
              </div>
              <div className="flex flex-col items-center">
                <svg width="32" height="32" fill="none" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#111"/><path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-xs mt-2">Free up your sales team</span>
              </div>
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
