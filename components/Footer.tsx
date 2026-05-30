import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C4A44E]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <div className="font-serif text-2xl font-bold tracking-[0.2em] text-white mb-0.5">
                MILDIANI
              </div>
              <div className="text-[9px] text-[#C4A44E] tracking-[0.35em] uppercase">
                Georgian Wine · USA
              </div>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Wholesale importer of authentic Georgian wines. Bringing the
              world&apos;s oldest wine tradition to the United States.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#C4A44E] mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "All Wines", href: "/wines" },
                { label: "Red Wines", href: "/wines?type=red" },
                { label: "White Wines", href: "/wines?type=white" },
                { label: "Amber Wines", href: "/wines?type=amber" },
                { label: "Rosé Wines", href: "/wines?type=rose" },
                { label: "Semi-Sweet", href: "/wines?type=semi-sweet" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-500 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#C4A44E] mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Georgian Wine", href: "/about#history" },
                { label: "Contact", href: "/contact" },
                { label: "Wholesale Inquiries", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-500 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#C4A44E] mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-[13px] text-gray-500">
              <li>
                <a
                  href="mailto:info@mildianiwine.com"
                  className="hover:text-white transition-colors"
                >
                  info@mildianiwine.com
                </a>
              </li>
              <li>United States</li>
              <li className="pt-2">
                <span className="text-[11px] uppercase tracking-widest text-gray-600 block mb-2">
                  Distribution
                </span>
                Wholesale only — through licensed retailers
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { label: "FB", href: "#" },
                { label: "IG", href: "#" },
                { label: "LI", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 border border-white/10 hover:border-[#C4A44E] flex items-center justify-center text-[10px] text-gray-500 hover:text-[#C4A44E] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-gray-600">
          <p>© {new Date().getFullYear()} Mildiani Wine USA. All rights reserved.</p>
          <p>Must be 21+ to purchase alcohol. Please drink responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
