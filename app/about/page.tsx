import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Georgian Wine & Mildiani — 8,000 Years of Winemaking",
  description:
    "Learn about the history of Georgian wine — the world's oldest wine-producing nation. Discover the Qvevri winemaking method, the Kakheti region, and Mildiani's mission to bring authentic Georgian wine to the USA.",
  keywords: [
    "Georgian wine history",
    "Qvevri winemaking",
    "oldest wine country",
    "Kakheti Georgia",
    "Georgian wine importer USA",
    "Mildiani wine brand",
  ],
};

const timeline = [
  {
    year: "~6,000 BC",
    title: "The First Wine",
    desc: "Archaeological finds in Kvemo Kartli, Georgia, reveal the world's oldest evidence of wine production — clay jars containing grape residue dating back 8,000 years.",
  },
  {
    year: "~4,000 BC",
    title: "The Qvevri is Born",
    desc: "Georgians develop the Qvevri — a large clay vessel buried underground used for fermenting, aging, and storing wine. This method remains unique in the world.",
  },
  {
    year: "~1000 BC",
    title: "The Vine Spreads West",
    desc: "Georgian viticulture spreads to Greece, Rome, and beyond, shaping the wine cultures of Europe and the Mediterranean world.",
  },
  {
    year: "2013",
    title: "UNESCO Recognition",
    desc: "The traditional Qvevri winemaking method is inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity.",
  },
  {
    year: "Today",
    title: "Mildiani in the USA",
    desc: "Mildiani Wine USA imports the finest Georgian wines from Kakheti directly to American consumers and wine lovers across the United States.",
  },
];

const regions = [
  {
    name: "Kakheti",
    icon: "🌄",
    desc: "Georgia's premier wine region, responsible for over 70% of the country's wine production. Known for Saperavi, Rkatsiteli, and the famous appellations of Kindzmarauli, Mukuzani, and Tsinandali.",
  },
  {
    name: "Kartli",
    icon: "🏔️",
    desc: "Central Georgia's wine region, known for lighter, more elegant wines. Home to some of Georgia's oldest grape varieties and traditional winemaking estates.",
  },
  {
    name: "Imereti",
    icon: "🌿",
    desc: "Western Georgia's wine heartland. Imeretion wines are made with partial skin contact — halfway between conventional and Qvevri wines — producing a distinctive amber style.",
  },
  {
    name: "Racha-Lechkhumi",
    icon: "🏞️",
    desc: "A mountainous region producing the legendary Khvanchkara — one of the world's great semi-sweet reds, made from the Alexandrouli and Mujuretuli grapes.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a0a0d] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#c5a028] text-sm uppercase tracking-widest font-semibold mb-4">
            The World&apos;s Oldest Wine Nation
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            8,000 Years of
            <br />
            <span className="text-[#c5a028]">Georgian Wine</span>
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Wine was not invented — it was discovered, in the sun-drenched
            valleys of the Caucasus Mountains. Georgia is where it all began.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-6">
              Why Georgian Wine is Different
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Georgia is home to over{" "}
              <strong>525 indigenous grape varieties</strong> — more than any
              other country. Grapes like Saperavi, Rkatsiteli, Kisi, and
              Mtsvane grow nowhere else on Earth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unlike most wine regions, Georgian winemakers have been using the
              same techniques for millennia. The Qvevri method — fermenting
              juice with skins in clay vessels — produces the now-trendy
              &quot;amber&quot; or &quot;orange&quot; wines that have exploded
              in popularity worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Georgian wine is not just a beverage — it is a living cultural
              tradition, a symbol of hospitality, and an expression of one of
              the world&apos;s oldest civilizations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏺", title: "Qvevri", desc: "Clay vessel winemaking — 6,000 years old" },
              { icon: "🍇", title: "525 Grapes", desc: "More indigenous varieties than any country" },
              { icon: "🌍", title: "UNESCO", desc: "Recognized intangible cultural heritage" },
              { icon: "🏆", title: "Acclaimed", desc: "World-class wines winning international awards" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#fdf8f2] border border-[#c5a028]/20 rounded-2xl p-5"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-serif font-bold text-[#722f37] mb-1">{item.title}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qvevri section */}
      <section className="bg-[#722f37] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-5xl mb-6">🏺</div>
          <h2 className="font-serif text-4xl font-bold mb-6">
            The Qvevri Method
          </h2>
          <p className="text-red-100 leading-relaxed text-lg max-w-2xl mx-auto mb-4">
            A Qvevri is a large, egg-shaped clay vessel that Georgian winemakers
            bury underground. Grapes — including their skins, seeds, and stems —
            are placed inside and ferment naturally using wild yeast. The vessel
            is then sealed with beeswax.
          </p>
          <p className="text-red-100 leading-relaxed text-lg max-w-2xl mx-auto">
            The result is the legendary &quot;amber wine&quot; — white or
            rosé wine with the color and tannins of a red, and flavors unlike
            anything else in the world. This is Georgia&apos;s greatest
            gift to the world of wine.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
          A History Written in Wine
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#c5a028]/30" />
          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1 pl-10 md:pl-0">
                  <div
                    className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                  >
                    <div className="text-[#c5a028] font-bold text-sm uppercase tracking-wider mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#1a1a1a] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#722f37] rounded-full -translate-x-1/2 mt-6 border-2 border-[#c5a028]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-[#1a0a0d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Wine Regions of Georgia
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((r) => (
              <div
                key={r.name}
                className="bg-[#722f37]/10 border border-[#722f37]/20 rounded-2xl p-8"
              >
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-[#c5a028] mb-3">
                  {r.name}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mildiani */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-5xl mb-6">🍷</div>
        <h2 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-6">
          About Mildiani Wine USA
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Mildiani Wine USA is a dedicated importer and wholesale distributor of
          authentic Georgian wines. Our mission is simple: to introduce American
          wine lovers to the extraordinary diversity and quality of Georgian
          wine.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-10">
          We work directly with wineries in Kakheti, selecting wines that best
          represent Georgia&apos;s rich winemaking traditions. Our wines are
          available through licensed retailers and restaurants across the United
          States.
        </p>
        <Link
          href="/wines"
          className="inline-flex items-center gap-2 bg-[#722f37] hover:bg-[#4a1b21] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-lg"
        >
          Explore Our Wine Collection →
        </Link>
      </section>
    </div>
  );
}
