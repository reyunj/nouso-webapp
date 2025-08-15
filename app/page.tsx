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
        {/* Hero Section */}
        <section className="pt-16 md:pt-20 pb-10 md:pb-16 px-4 sm:px-6 text-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1a2233]">
            Outreach that books revenue, not just meetings
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 mb-8">
            Nousu specialises in B2B lead generation for SaaS and finance companies, offering cold email, cold calling, and appointment setting services in Sydney and Australia-wide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 flex-wrap mb-8 md:mb-10">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1a2233]">2000+</span>
              <span className="text-sm sm:text-base text-[#4a5568]">Sales Meetings Booked</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1a2233]">100+</span>
              <span className="text-sm sm:text-base text-[#4a5568]">Campaigns Launched</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1a2233]">$50M+</span>
              <span className="text-sm sm:text-base text-[#4a5568]">Pipeline Generated</span>
            </div>
          </div>
          <a href="/book" className="inline-block mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#294243] text-white rounded-lg font-semibold shadow hover:bg-[#1a2233] transition-colors">Book a Strategy Call</a>
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
