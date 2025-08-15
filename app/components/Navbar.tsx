"use client";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/price", label: "Pricing Plans" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/book", label: "Contact Us" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full border-b border-gray-100 sticky top-0 z-30 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 min-w-[170px]">
          <Link href="/" className="flex flex-col items-start space-y-0.5 group">
            <span className="font-bold text-lg tracking-wider">NOUSU</span>
            <span className="text-xs text-gray-700 leading-tight">Communicate. Collaborate. Create.</span>
          </Link>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M14 6H34V26L14 6Z" fill="#294243"/>
              <circle cx="34" cy="6" r="2" fill="#294243"/>
              <circle cx="10" cy="30" r="6" fill="#294243"/>
            </g>
          </svg>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-7 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-500 hover:text-black transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#294243]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${menuOpen ? "rotate-90" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 animate-fadeIn z-20">
          <ul className="flex flex-col py-4 px-6 space-y-3 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-black transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
