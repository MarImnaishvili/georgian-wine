import Link from "next/link";
import WineCard from "@/components/WineCard";
import { wines } from "@/data/wines";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mildiani Georgian Wine | Authentic Imported Georgian Wines in USA",
  description:
    "Explore Mildiani's collection of authentic Georgian wines available in the USA. Saperavi, Rkatsiteli, Kindzmarauli, Tsinandali and more — direct from the Republic of Georgia.",
};

const featured = wines.filter((w) => w.featured);

// Section divider matching mildiani.ge style
function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className="h-px flex-1 max-w-24 bg-[#E5DDD3]" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="3" fill="#C4A44E" />
        <circle cx="6" cy="14" r="1.5" fill="#C4A44E" opacity="0.5" />
        <circle cx="22" cy="14" r="1.5" fill="#C4A44E" opacity="0.5" />
        <circle cx="14" cy="6" r="1.5" fill="#C4A44E" opacity="0.5" />
        <circle cx="14" cy="22" r="1.5" fill="#C4A44E" opacity="0.5" />
      </svg>
      <div className="h-px flex-1 max-w-24 bg-[#E5DDD3]" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0A0806] text-white overflow-hidden">
        {/* Warm vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(139,26,26,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(196,164,78,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main hero content */}
          <div className="min-h-[88vh] flex flex-col items-center justify-center text-center py-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#C4A44E]/60" />
              <span className="text-[#C4A44E] text-[11px] uppercase tracking-[0.4em] font-medium">
                Est. in the Cradle of Wine
              </span>
              <div className="h-px w-12 bg-[#C4A44E]/60" />
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 max-w-4xl">
              Authentic Georgian
              <br />
              <span className="text-[#C4A44E]">Wine</span> in the USA
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
              8,000 years of winemaking tradition — now available across
              America. Discover the wines of Mildiani, direct from the vineyards
              of Kakheti.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/wines"
                className="bg-[#8B1A1A] hover:bg-[#A52020] text-white text-[12px] uppercase tracking-widest px-10 py-4 transition-colors"
              >
                Explore Our Wines
              </Link>
              <Link
                href="/about"
                className="border border-[#C4A44E]/50 hover:border-[#C4A44E] text-[#C4A44E] text-[12px] uppercase tracking-widest px-10 py-4 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero bottom stats bar */}
          <div className="border-t border-white/8 grid grid-cols-2 md:grid-cols-4">
            {[
              { n: "8,000+", label: "Years of tradition" },
              { n: "525", label: "Indigenous grape varieties" },
              { n: "18", label: "Wine appellations" },
              { n: "8", label: "Wines available in USA" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`py-8 text-center ${i < 3 ? "border-r border-white/8" : ""}`}
              >
                <div className="font-serif text-3xl font-bold text-[#C4A44E] mb-1">
                  {s.n}
                </div>
                <div className="text-[11px] text-gray-500 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionDivider />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1C1C] mt-8 mb-6">
            Ancient Tradition. Modern Excellence.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Georgia is the birthplace of wine — a land where the vine has been
            cultivated for over 8,000 years. Mildiani brings the finest
            expressions of this living heritage to wine lovers across the United
            States. Every bottle carries the soul of the Caucasus.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-8 text-[12px] uppercase tracking-widest text-[#8B1A1A] border-b border-[#8B1A1A] pb-0.5 hover:text-[#C4A44E] hover:border-[#C4A44E] transition-colors"
          >
            Learn About Georgian Wine →
          </Link>
        </div>
      </section>

      {/* ─── POPULAR WINES ─── */}
      <section className="bg-[#F5F0EB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionDivider />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1C1C] mt-8 mb-3">
              Our Wines
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Imported directly from Georgia and available through licensed
              retailers across the United States.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/wines"
              className="inline-block border border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white text-[12px] uppercase tracking-widest px-10 py-3.5 transition-colors"
            >
              View All Wines
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HERITAGE SECTION ─── */}
      <section className="bg-[#111111] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C4A44E]/60" />
              <span className="text-[#C4A44E] text-[11px] uppercase tracking-[0.4em]">
                Georgia · Kakheti
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight mb-6">
              Where Wine Was
              <br />
              <span className="text-[#C4A44E]">Invented</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 text-[15px]">
              Archaeological evidence places the birth of wine in the country
              of Georgia — 6,000 BC. The traditional clay vessel method,
              called <span className="text-[#C4A44E]">Qvevri</span>, is now
              recognized by UNESCO as an Intangible Cultural Heritage.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
              Georgia is home to over 525 indigenous grape varieties — Saperavi,
              Rkatsiteli, Kisi, Mtsvane — found nowhere else on earth. Our
              wines give you direct access to this irreplaceable biodiversity.
            </p>
            <Link
              href="/about"
              className="text-[12px] uppercase tracking-widest text-[#C4A44E] border-b border-[#C4A44E]/40 pb-0.5 hover:border-[#C4A44E] transition-colors"
            >
              Discover the History →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏺", title: "Qvevri Method", desc: "UNESCO-recognized ancient clay vessel winemaking" },
              { icon: "🌿", title: "Kakheti Region", desc: "Georgia's premier wine appellation, Eastern Georgia" },
              { icon: "🍇", title: "Saperavi", desc: "Georgia's signature red grape — intense and age-worthy" },
              { icon: "🥂", title: "Rkatsiteli", desc: "One of the world's oldest white grape varieties" },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/8 p-6 hover:border-[#C4A44E]/30 transition-colors"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-serif font-semibold text-[15px] text-white mb-1.5">
                  {item.title}
                </div>
                <div className="text-[12px] text-gray-500 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WINE TYPES GRID ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionDivider />
            <h2 className="font-serif text-3xl font-bold text-[#1C1C1C] mt-8">
              Explore by Type
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: "red",   label: "Red Wines",   color: "#8B1A1A", sub: "Dry & semi-sweet" },
              { type: "white", label: "White Wines", color: "#B8973E", sub: "Dry, semi-dry & sweet" },
              { type: "amber", label: "Amber Wines", color: "#B4682A", sub: "Ancient Qvevri method" },
              { type: "all",   label: "Full Range",  color: "#1C1C1C", sub: "All 30 wines" },
            ].map((item) => (
              <Link
                key={item.type}
                href={`/wines?type=${item.type}`}
                className="group border border-[#E5DDD3] hover:border-[#C4A44E] p-8 text-center transition-all hover:shadow-md"
              >
                <div
                  className="w-4 h-4 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: item.color }}
                />
                <div className="font-serif text-[16px] font-semibold text-[#1C1C1C] group-hover:text-[#8B1A1A] transition-colors mb-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-gray-400">{item.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#8B1A1A] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Find Mildiani Wine Near You
          </h2>
          <p className="text-red-200 text-[15px] mb-8 leading-relaxed">
            We are a wholesale importer. Our wines are available through
            licensed retailers and restaurants across the United States. Click
            any wine to find where to buy it.
          </p>
          <Link
            href="/wines"
            className="inline-block bg-white text-[#8B1A1A] hover:bg-[#F5F0EB] text-[12px] uppercase tracking-widest px-10 py-4 transition-colors font-semibold"
          >
            Browse All Wines
          </Link>
        </div>
      </section>
    </>
  );
}
