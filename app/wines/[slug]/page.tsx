import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { wines, wineTypeLabels, drynessLabels, dotColors } from "@/data/wines";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return wines.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wine = wines.find((w) => w.slug === slug);
  if (!wine) return {};
  return {
    title: `${wine.brand} ${wine.name} — ${drynessLabels[wine.dryness]} ${wineTypeLabels[wine.type]} Georgian Wine`,
    description: `${wine.brand} ${wine.name} — ${wine.grape} from ${wine.region}, Georgia. ${wine.description.slice(0, 140)}...`,
    keywords: [
      `${wine.brand} ${wine.name}`,
      `${wine.grape} wine USA`,
      `Georgian ${wine.type} wine`,
      "Georgian wine USA",
      "Mildiani wine USA",
      `buy ${wine.name} USA`,
    ],
  };
}

export default async function WineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const wine = wines.find((w) => w.slug === slug);
  if (!wine) notFound();

  const related = wines
    .filter((w) => w.id !== wine.id && w.type === wine.type)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${wine.brand} ${wine.name}`,
    description: wine.description,
    brand: { "@type": "Brand", name: wine.brand },
    offers: {
      "@type": "Offer",
      price: wine.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: wine.buyUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-[#F5F0EB] border-b border-[#E5DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-[12px] text-gray-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-[#8B1A1A] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wines" className="hover:text-[#8B1A1A] transition-colors">Wines</Link>
          <span>/</span>
          <span className="text-[#1C1C1C]">{wine.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* Bottle image — sticky */}
          <div className="md:col-span-2">
            <div className="bg-white border border-[#E5DDD3] flex flex-col items-center py-12 px-8 sticky top-28">
              <div className="relative w-full h-80">
                <Image
                  src={`/wines/${wine.image}`}
                  alt={`${wine.brand} ${wine.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
              </div>

              {wine.awards.length > 0 && (
                <div className="mt-10 w-full border-t border-[#E5DDD3] pt-6">
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-3">
                    Awards & Recognition
                  </p>
                  <ul className="flex flex-col gap-2">
                    {wine.awards.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-[12px] text-gray-600">
                        <span className="text-[#C4A44E] mt-px">✦</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-3">
            {/* Type & dryness */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-gray-500">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: dotColors[wine.type] }}
                />
                {wineTypeLabels[wine.type]} · {drynessLabels[wine.dryness]}
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-[11px] uppercase tracking-widest text-gray-500">{wine.brand}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight mb-3">
              {wine.name}
            </h1>
            <p className="text-gray-400 text-sm mb-8 tracking-wide">
              {wine.grape} · {wine.region}, Georgia · {wine.vintage} · {wine.alcohol}
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-10 pb-10 border-b border-[#E5DDD3]">
              {wine.description}
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-3 gap-px bg-[#E5DDD3] mb-10">
              {[
                { label: "Type", value: `${wineTypeLabels[wine.type]} · ${drynessLabels[wine.dryness]}` },
                { label: "Grape", value: wine.grape },
                { label: "Region", value: wine.region },
                { label: "Vintage", value: String(wine.vintage) },
                { label: "Alcohol", value: wine.alcohol },
                { label: "Volume", value: wine.volume },
              ].map((s) => (
                <div key={s.label} className="bg-white p-4">
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{s.label}</div>
                  <div className="text-[13px] font-semibold text-[#1C1C1C]">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Buy button */}
            <a
              href={wine.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#8B1A1A] hover:bg-[#6B1414] text-white text-[12px] uppercase tracking-widest py-4 transition-colors font-semibold mb-4"
            >
              Check Price &amp; Buy at Best Buy Liquors →
            </a>
            <p className="text-[11px] text-gray-400 mb-12">
              Mildiani is a wholesale importer. This link takes you to our licensed US retail partner where you can see the current price and purchase.
            </p>

            {/* Tasting notes */}
            <div className="border border-[#E5DDD3] p-8 mb-6">
              <h2 className="font-serif text-xl font-bold text-[#1C1C1C] mb-6">Tasting Notes</h2>
              <div className="grid gap-5">
                {[
                  { label: "Appearance", value: wine.tastingNotes.color },
                  { label: "Nose",       value: wine.tastingNotes.nose },
                  { label: "Palate",     value: wine.tastingNotes.palate },
                  { label: "Finish",     value: wine.tastingNotes.finish },
                ].map((note) => (
                  <div key={note.label} className="grid grid-cols-4 gap-4">
                    <div className="text-[11px] uppercase tracking-widest text-[#8B1A1A] font-semibold pt-0.5">
                      {note.label}
                    </div>
                    <div className="col-span-3 text-[13px] text-gray-600 leading-relaxed">{note.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Food pairing */}
            <div className="border border-[#E5DDD3] p-8">
              <h2 className="font-serif text-xl font-bold text-[#1C1C1C] mb-5">Food Pairing</h2>
              <div className="flex flex-wrap gap-2">
                {wine.foodPairing.map((f) => (
                  <span key={f} className="border border-[#E5DDD3] text-[12px] text-gray-600 px-4 py-1.5 bg-[#F5F0EB]">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="bg-[#F5F0EB] border-t border-[#E5DDD3] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-[#1C1C1C] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {related.map((w) => (
                <Link
                  key={w.id}
                  href={`/wines/${w.slug}`}
                  className="group bg-white border border-[#E5DDD3] hover:border-[#C4A44E] p-4 transition-all"
                >
                  <div className="relative h-28 mb-3 bg-white rounded-xl overflow-hidden">
                    <Image
                      src={`/wines/${w.image}`}
                      alt={w.name}
                      fill
                      className="object-contain p-2"
                      style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }}
                    />
                  </div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dotColors[w.type] }} />
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">
                      {drynessLabels[w.dryness]}
                    </span>
                  </div>
                  <div className="font-serif font-semibold text-[14px] text-[#1C1C1C] group-hover:text-[#8B1A1A] transition-colors leading-snug mb-1">
                    {w.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#8B1A1A]">View wine →</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
