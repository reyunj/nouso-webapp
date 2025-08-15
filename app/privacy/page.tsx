import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1a2233]">Privacy Policy</h1>
      <p className="mb-4">A privacy policy is a statement that discloses some or all of the ways a website collects, uses, discloses, and manages the data of its visitors and customers. It fulfills a legal requirement to protect a visitor or client's privacy.</p>
      <p className="mb-4">Countries have their own laws with different requirements per jurisdiction regarding the use of privacy policies. Make sure you are following the legislation relevant to your activities and location.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">What should you cover in your Privacy Policy?</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-1">
        <li>What type of information do you collect?</li>
        <li>How do you collect information?</li>
        <li>Why do you collect such personal information?</li>
        <li>How do you store, use, share and disclose your site visitors' personal information?</li>
        <li>How (and if) do you communicate with your site visitors?</li>
        <li>Is your service targeting and collecting information from Minors?</li>
        <li>Privacy policy updates</li>
        <li>Contact Information</li>
      </ol>
      <p className="mb-4">You can check out this <a href="https://support.wix.com/en/article/creating-a-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#294243] underline hover:text-[#1a2233]">support article</a> to receive more information about how to create a privacy policy.</p>
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
