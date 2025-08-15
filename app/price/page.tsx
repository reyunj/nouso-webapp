import React from "react";
import Head from "next/head";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing Plans | Nousu – B2B Lead Generation Agency</title>
        <meta name="description" content="Choose from Nousu&apos;s B2B lead generation pricing plans. Transparent, all-inclusive pricing for SaaS and finance companies looking to scale pipeline." />
        <meta property="og:title" content="Pricing Plans | Nousu – B2B Lead Generation Agency" />
        <meta property="og:description" content="Choose from Nousu's B2B lead generation pricing plans. Transparent, all-inclusive pricing for SaaS and finance companies looking to scale pipeline." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nousucollective.com/pricing-plans" />
        <meta property="og:site_name" content="NOUSU" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing Plans | Nousu – B2B Lead Generation Agency" />
        <meta name="twitter:description" content="Choose from Nousu's B2B lead generation pricing plans. Transparent, all-inclusive pricing for SaaS and finance companies looking to scale pipeline." />
        <link rel="canonical" href="https://www.nousucollective.com/pricing-plans" />
      </Head>
      <main className="bg-white min-h-screen">
        <section className="pt-16 pb-8 px-4 sm:px-6 text-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1a2233]">
            Pricing Plans
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 mb-8">
            All-inclusive pricing for consistent pipeline. No hidden fees. No long-term contracts.
          </p>
        </section>
        <section className="py-10 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Growth Plan */}
            <div className="bg-white rounded-xl shadow p-6 sm:p-8 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#1a2233]">Growth</h2>
              <div className="text-2xl sm:text-3xl font-bold mb-1">$5,899 <span className="text-base font-medium">/month</span></div>
              <p className="text-gray-700 mb-4">For businesses ready to scale with multi-channel outreach. Valid for 3 months.</p>
              <ul className="mb-6 space-y-2 text-gray-700 text-sm list-disc pl-4 text-left">
                <li>Up to 20 qualified meetings/month</li>
                <li>6 domains (3 Google, 3 Outlook)</li>
                <li>Clay-enriched data for all leads</li>
                <li>Custom LinkedIn outreach campaigns</li>
                <li>Cold email + cold calling layered in</li>
                <li>Advanced ICP research and targeting</li>
                <li>Live appointment booking</li>
                <li>All email addresses fully verified</li>
                <li>Bi-weekly reporting and campaign optimisation</li>
                <li>We&apos;ll handle your campaign setup, targeting, copywriting, and ongoing optimisation so you can focus on closing deals.</li>
                <li>Perfect if: You want consistent pipeline</li>
              </ul>
              <a href="/book" className="inline-block px-6 py-2 bg-[#294243] text-white rounded-lg font-semibold shadow hover:bg-[#1a2233] transition-colors text-center">Get Started</a>
            </div>
            {/* Custom Plan */}
            <div className="bg-white rounded-xl shadow p-6 sm:p-8 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#1a2233]">Custom</h2>
              <div className="text-2xl sm:text-3xl font-bold mb-1">Let&apos;s Talk</div>
              <p className="text-gray-700 mb-4">Need more meetings or a tailored approach? We can build a custom plan for your team.</p>
              <ul className="mb-6 space-y-2 text-gray-700 text-sm list-disc pl-4 text-left">
                <li>Enterprise volume or multi-region targeting</li>
                <li>More than 20 meetings/month</li>
                <li>Dedicated team & reporting</li>
                <li>Custom integrations or data sources</li>
                <li>On-site workshops & training</li>
                <li>Flexible contract terms</li>
              </ul>
              <a href="/book" className="inline-block px-6 py-2 bg-[#294243] text-white rounded-lg font-semibold shadow hover:bg-[#1a2233] transition-colors text-center">Book a Call</a>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Questions about pricing?</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">Book a free strategy call and get a tailored quote for your business.</p>
          <a href="/book" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#294243] text-white rounded-lg font-semibold shadow hover:bg-[#1a2233] transition-colors">Book a Strategy Call</a>
        </section>
      </main>
    </>
  );
}
