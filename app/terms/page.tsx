import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1a2233]">Terms &amp; Conditions</h1>
      <p className="mb-4">Terms and conditions (“Terms”) are a set of legal terms defined by the owner of a website. They set forth the terms and conditions governing the activities of the website visitors on the said website and the relationship between the site visitors and the website owner. Terms must be defined according to the specific needs and nature of each website. For example, a website offering products to customers in e-commerce transactions requires Terms that are different from the Terms of a website only providing information. Terms provide the website owner the ability to protect themselves from potential legal exposure.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">What should you cover in your Terms &amp; Conditions?</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-1">
        <li>Who can use your website; what are the requirements to create an account (if relevant)</li>
        <li>Key commercial Terms offered to customers</li>
        <li>Retention of right to change offering</li>
        <li>Warranties &amp; responsibility for services and products</li>
        <li>Ownership of intellectual property, copyrights and logos</li>
        <li>Right to suspend or cancel member account</li>
        <li>Indemnification</li>
        <li>Limitation of liability</li>
        <li>Right to change and modify Terms</li>
        <li>Preference of law and dispute resolution</li>
        <li>Contact info</li>
      </ol>
      <p className="mb-4">You can check out this <a href="https://support.wix.com/en/article/creating-a-terms-and-conditions-policy" target="_blank" rel="noopener noreferrer" className="text-[#294243] underline hover:text-[#1a2233]">support article</a> to receive more information about how to create a Terms and Conditions page.</p>
      <div className="bg-gray-50 border-l-4 border-[#294243] p-4 mb-6 text-sm text-gray-600">
        <strong>Disclaimer:</strong> The explanations and information provided herein are only general explanations, information and samples. You should not rely on this article as legal advice or as recommendations regarding what you should actually do. We recommend that you seek legal advice to help you understand and to assist you in the creation of your privacy policy.
      </div>
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-1">Contact</h2>
        <p>1 Sussex Street, Sydney, 2000</p>
        <p>Sales: <a href="mailto:harry@nousucollective.com" className="text-[#294243] underline hover:text-[#1a2233]">harry@nousucollective.com</a></p>
        <p><a href="https://www.linkedin.com/company/nousucollective/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[#294243] underline hover:text-[#1a2233]">LinkedIn</a></p>
      </div>
    </main>
  );
}
