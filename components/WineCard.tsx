import Image from "next/image";
import Link from "next/link";
import { Wine, wineTypeLabels, drynessLabels, dotColors } from "@/data/wines";

export default function WineCard({ wine }: { wine: Wine }) {
  return (
    <Link href={`/wines/${wine.slug}`} className="group block">
      <div className="bg-white border border-[#E5DDD3] group-hover:border-[#C4A44E] group-hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative bg-white h-64">
          <Image
            src={`/wines/${wine.image}`}
            alt={`${wine.brand} ${wine.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
          />
          {wine.featured && (
            <div className="absolute top-3 left-3 bg-[#C4A44E] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              Featured
            </div>
          )}
          <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-[10px] uppercase tracking-widest text-gray-400 px-2.5 py-1 rounded-full border border-[#E5DDD3]">
            {drynessLabels[wine.dryness]}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 border-t border-[#E5DDD3]">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-[11px] text-gray-400">{wine.volume}</span>
            <span className="text-gray-300">·</span>
            <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: dotColors[wine.type] }}
              />
              {wineTypeLabels[wine.type]}
            </span>
          </div>

          <h3 className="font-serif text-[17px] font-semibold text-[#1C1C1C] group-hover:text-[#8B1A1A] transition-colors leading-snug mb-1">
            {wine.brand} {wine.name}
          </h3>
          <p className="text-[11px] text-gray-400 mb-5">
            {wine.grape} · {wine.region}, Georgia
          </p>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-gray-400 italic">
              Price at retailer
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#8B1A1A] border border-[#8B1A1A] px-3 py-1.5 rounded-full group-hover:bg-[#8B1A1A] group-hover:text-white transition-colors">
              Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
