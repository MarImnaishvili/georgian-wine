"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Wines", href: "/wines" },
  { label: "Find In Store", href: "/find-in-store" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#111111] text-white sticky top-0 z-50">
      {/* Top info bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <p className="text-[11px] text-gray-500 tracking-wider uppercase">
            Wholesale Importer · United States
          </p>
          <div className="flex items-center gap-5 text-[11px] text-gray-500">
            <a href="mailto:info@mildianiwine.com" className="hover:text-gray-300 transition-colors">
              info@mildianiwine.com
            </a>
            <span className="text-gray-700">|</span>
            <span className="text-gray-400">ENG</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start leading-none">
            <span className="font-serif text-[22px] font-bold tracking-[0.2em] text-white group-hover:text-[#C4A44E] transition-colors">
              MILDIANI
            </span>
            <span className="text-[9px] text-[#C4A44E] tracking-[0.35em] uppercase mt-0.5">
              Georgian Wine · USA
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-widest uppercase transition-colors pb-0.5 border-b ${
                  pathname === link.href
                    ? "text-[#C4A44E] border-[#C4A44E]"
                    : "text-gray-400 border-transparent hover:text-white hover:border-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C4A44E]/40 to-transparent" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-white/5">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm uppercase tracking-widest py-3.5 border-b border-white/5 transition-colors ${
                  pathname === link.href ? "text-[#C4A44E]" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
