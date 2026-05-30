"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { WineType, wineTypeLabels, dotColors } from "@/data/wines";

const types: Array<WineType | "all"> = ["all", "red", "white", "amber"];

export default function WineFilter({ searchQuery }: { searchQuery: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentType = searchParams.get("type") ?? "all";

  function setType(type: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (type === "all") params.delete("type");
    else params.set("type", type);
    router.push(`/wines?${params.toString()}`);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = (e.currentTarget.elements.namedItem("q") as HTMLInputElement).value.trim();
    const params = new URLSearchParams(searchParams.toString());
    if (q) params.set("q", q);
    else params.delete("q");
    router.push(`/wines?${params.toString()}`);
  }

  return (
    <div className="mb-10">
      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-0 mb-10 max-w-md">
        <input
          type="search"
          name="q"
          defaultValue={searchQuery}
          placeholder="Search wines, grapes, regions..."
          className="flex-1 border border-[#E5DDD3] px-4 py-2.5 text-sm focus:outline-none focus:border-[#8B1A1A] bg-white text-[#1C1C1C] placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-[#8B1A1A] hover:bg-[#6B1414] text-white px-6 py-2.5 text-[12px] uppercase tracking-widest transition-colors"
        >
          Search
        </button>
      </form>

      {/* Tabs */}
      <div className="flex flex-wrap gap-0 border-b border-[#E5DDD3]">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setType(type)}
            className={`flex items-center gap-2 px-6 py-3 text-[12px] uppercase tracking-widest transition-all border-b-2 -mb-px ${
              currentType === type
                ? "border-[#8B1A1A] text-[#8B1A1A] font-semibold"
                : "border-transparent text-gray-500 hover:text-[#1C1C1C]"
            }`}
          >
            {type !== "all" && (
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: dotColors[type as WineType] }}
              />
            )}
            {type === "all" ? "All Wines" : wineTypeLabels[type as WineType]}
          </button>
        ))}
      </div>
    </div>
  );
}
