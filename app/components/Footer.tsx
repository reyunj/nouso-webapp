import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f7fa] border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center space-x-2 mb-1">
            <span className="font-bold text-lg tracking-wider text-[#1a2233]">NOUSU</span>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M14 6H34V26L14 6Z" fill="#294243"/>
                <circle cx="34" cy="6" r="2" fill="#294243"/>
                <circle cx="10" cy="30" r="6" fill="#294243"/>
              </g>
            </svg>
          </Link>
          <span className="text-xs text-gray-500">Communicate. Collaborate. Create.</span>
          <span className="text-xs text-gray-400 mt-1">© {new Date().getFullYear()} Nousu Collective. All rights reserved.</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href="mailto:harry@nousucollective.com" className="hover:text-[#294243] transition-colors">harry@nousucollective.com</a>
          <div className="flex flex-col gap-1 md:items-end">
            <a href="https://www.linkedin.com/company/nousucollective/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-[#294243] transition-colors">LinkedIn</a>
            <a href="/privacy" className="hover:text-[#294243] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#294243] transition-colors">Terms & Conditions</a>
          </div>
          <span className="text-xs text-gray-400">Sydney, Australia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
