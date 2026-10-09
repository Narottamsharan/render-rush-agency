"use client";

import React from "react";
import { BRANDS_WORKED_WITH } from "@/data/brands";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function BrandsSection() {
  const featuredBrands = BRANDS_WORKED_WITH.filter((b) => b.featuredOnHome);

  return (
    <section className="py-20 border-y border-[#1F1F28] bg-[#0E0E12]/80 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-[#D96846]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F5F2ED]">
            BRANDS OUR TEAM HAS WORKED WITH
          </h2>
          <p className="text-xs sm:text-sm text-[#82818A] max-w-xl mx-auto leading-relaxed">
            Creative experience across brands, communities and content platforms. Experience reflects our collective work history across individual productions, prior engagements, and client campaigns.
          </p>
        </div>

        {/* Brand Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {featuredBrands.map((brand) => (
            <div
              key={brand.id}
              className="group p-6 rounded-2xl bg-[#141419]/90 border border-[#242430] hover:border-[#D96846]/60 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-[#D96846]/5"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1C1C26] text-[#82818A] uppercase tracking-wider">
                  {brand.categoryLabel}
                </span>
                <p className="text-base sm:text-lg font-black tracking-wider text-[#F5F2ED] group-hover:text-[#D96846] transition-colors pt-2">
                  {brand.logoText}
                </p>
              </div>

              <div className="pt-3 border-t border-[#20202A] flex items-center justify-between text-[11px] text-[#82818A]">
                <span className="truncate">Credit: {brand.associatedMember}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:text-[#D96846] transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
