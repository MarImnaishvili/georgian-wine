"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { stores, boroughColors } from "@/data/stores";

const StoreMap = dynamic(() => import("@/components/StoreMap"), { ssr: false });

export default function FindInStorePage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = stores.find((s) => s.id === activeId) ?? null;

  return (
    <>
      {/* Page header */}
      <div className="bg-[#111111] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#C4A44E]/60" />
            <span className="text-[#C4A44E] text-[11px] uppercase tracking-[0.4em]">
              New York City
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Find In Store
          </h1>
          <p className="text-gray-400 mt-3 text-[15px] max-w-xl">
            Mildiani wines are available at the following retail locations
            across New York City. Click a pin to get directions.
          </p>
        </div>
      </div>

      {/* Map + store list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Store list — left column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {stores.map((store) => {
              const isActive = store.id === activeId;
              return (
                <button
                  key={store.id}
                  onClick={() => setActiveId(isActive ? null : store.id)}
                  className={`text-left border p-5 transition-all duration-200 ${
                    isActive
                      ? "border-[#C4A44E] shadow-md"
                      : "border-[#E5DDD3] hover:border-[#C4A44E]"
                  } bg-white`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {/* Borough badge */}
                      <span
                        className="inline-block text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 mb-3"
                        style={{ backgroundColor: boroughColors[store.borough] }}
                      >
                        {store.borough}
                      </span>
                      <div className="font-serif text-[17px] font-semibold text-[#1C1C1C] mb-1">
                        {store.name}
                      </div>
                      <div className="text-[13px] text-gray-500 mb-1">
                        {store.address}
                      </div>
                      <div className="text-[12px] text-gray-400">
                        {store.hours}
                      </div>
                    </div>
                    {/* Pin indicator */}
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                      style={{ backgroundColor: boroughColors[store.borough] }}
                    />
                  </div>

                  {/* Expanded: phone + buy link */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-[#E5DDD3] flex items-center justify-between">
                      <a
                        href={`tel:${store.phone}`}
                        className="text-[13px] text-gray-500 hover:text-[#1C1C1C] transition-colors"
                      >
                        📞 {store.phone}
                      </a>
                      <a
                        href={store.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] uppercase tracking-widest text-white bg-[#8B1A1A] hover:bg-[#6B1414] px-4 py-2 transition-colors"
                      >
                        Buy Online →
                      </a>
                    </div>
                  )}
                </button>
              );
            })}

            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
              * Addresses are for display purposes. Real store locations will
              be updated soon. All Mildiani wines are also available to order
              online at{" "}
              <a
                href="https://bestbuyliquors.com/wine-store/other?brand=7522"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B1A1A] hover:underline"
              >
                bestbuyliquors.com
              </a>
              .
            </p>
          </div>

          {/* Map — right column */}
          <div className="lg:col-span-3 h-[520px] border border-[#E5DDD3] overflow-hidden shadow-sm">
            <StoreMap activeId={activeId} onSelect={setActiveId} />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#F5F0EB] border-t border-[#E5DDD3] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#1C1C1C] mb-3">
            Can&apos;t Find Us Near You?
          </h2>
          <p className="text-gray-500 text-[15px] mb-6">
            Order all Mildiani wines online and ship directly to your door
            through our retail partner Best Buy Liquors.
          </p>
          <a
            href="https://bestbuyliquors.com/wine-store/other?brand=7522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B1A1A] hover:bg-[#6B1414] text-white text-[12px] uppercase tracking-widest px-10 py-4 transition-colors"
          >
            Shop All Mildiani Wines Online →
          </a>
        </div>
      </div>
    </>
  );
}
