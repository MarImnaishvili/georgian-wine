import { Suspense } from "react";
import WineCard from "@/components/WineCard";
import WineFilter from "@/components/WineFilter";
import { wines, WineType, wineTypeLabels } from "@/data/wines";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Wines — Georgian Wine Collection",
  description:
    "Browse Mildiani's full collection of imported Georgian wines available in the USA. Filter by type: red, white, amber, rosé, semi-sweet.",
};

interface PageProps {
  searchParams: Promise<{ type?: string; q?: string }>;
}

export default async function WinesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const typeFilter = params.type as WineType | undefined;
  const query = params.q?.toLowerCase() ?? "";

  const filtered = wines.filter((wine) => {
    const matchesType = !typeFilter || wine.type === typeFilter;
    const matchesQuery =
      !query ||
      wine.name.toLowerCase().includes(query) ||
      wine.grape.toLowerCase().includes(query) ||
      wine.region.toLowerCase().includes(query) ||
      wine.description.toLowerCase().includes(query) ||
      wine.type.toLowerCase().includes(query);
    return matchesType && matchesQuery;
  });

  return (
    <>
      {/* Page header */}
      <div className="bg-[#111111] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#C4A44E]/60" />
            <span className="text-[#C4A44E] text-[11px] uppercase tracking-[0.4em]">
              Mildiani Collection
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Our Wines
          </h1>
          <p className="text-gray-400 mt-3 text-[15px] max-w-xl">
            Authentic Georgian wines, imported and available through licensed
            retailers across the United States.
          </p>
        </div>
      </div>

      {/* Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Suspense>
          <WineFilter searchQuery={params.q ?? ""} />
        </Suspense>

        {filtered.length === 0 ? (
          <div className="text-center py-24 border border-[#E5DDD3]">
            <div className="font-serif text-2xl text-gray-400 mb-2">
              No wines found
            </div>
            <p className="text-sm text-gray-400">
              Try adjusting your search or filter.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[12px] text-gray-400 uppercase tracking-widest mb-8">
              {filtered.length} wine{filtered.length !== 1 ? "s" : ""}
              {typeFilter ? ` · ${wineTypeLabels[typeFilter]}` : ""}
              {query ? ` · "${params.q}"` : ""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((wine) => (
                <WineCard key={wine.id} wine={wine} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
