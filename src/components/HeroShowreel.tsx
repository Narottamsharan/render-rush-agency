"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowUpRight, Sparkles, Film, CheckCircle2 } from "lucide-react";
import VideoModal from "./VideoModal";
import { PROJECTS, Project } from "@/data/projects";

export default function HeroShowreel() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Standout hero showcase project (High-octane car comparison edit)
  const heroProject = PROJECTS.find((p) => p.id === "ns-petrol-vs-diesel") || PROJECTS[0];

  return (
    <>
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Subtle Ambient Radial Lighting (Terracotta accent, strictly no gold) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D96846]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            {/* Agency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A22] border border-[#2B2B38] text-xs font-semibold text-[#F5F2ED] tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D96846]" />
              <span>Full-Stack Creative Agency & Post-Production Studio</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase text-[#F5F2ED] leading-[0.95]">
              WE CREATE.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96846] via-[#E87A58] to-[#F5F2ED]">
                YOU GROW.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-[#82818A] max-w-2xl font-normal leading-relaxed">
              Premium video editing, thoughtful design, and digital content that makes brands stand out.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#D96846]/25 active:scale-95"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#141419] hover:bg-[#1A1A22] border border-[#2B2B38] hover:border-[#D96846] text-[#F5F2ED] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 active:scale-95"
              >
                <span>Start a Project</span>
              </Link>
            </div>

            {/* Verified Agency Capabilities Indicators */}
            <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-[#82818A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D96846]" />
                <span>2M+ Organic Views Driven</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D96846]" />
                <span>Multi-Camera Studio Podcasts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D96846]" />
                <span>High-Retention Performance Reels</span>
              </div>
            </div>
          </div>

          {/* Cinematic Interactive Showcase Card */}
          <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
            <div
              onClick={() => setActiveModalProject(heroProject)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden border border-[#272736] bg-[#141419] shadow-2xl hover:border-[#D96846]/70 transition-all duration-300"
            >
              {/* Showcase Poster */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                <Image
                  src="https://i.ytimg.com/vi/GE4aiZVFxZY/maxresdefault.jpg"
                  alt="Render Rush Showreel"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D10] via-black/40 to-transparent" />

                {/* Big Animated Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-4 bg-[#0D0D10]/85 backdrop-blur-md border border-[#323242] group-hover:border-[#D96846] px-6 py-3.5 rounded-full transition-all duration-300 group-hover:scale-105 shadow-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#D96846] text-[#0D0D10] flex items-center justify-center">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-[#F5F2ED] uppercase tracking-wider">
                        Play Featured Reel
                      </p>
                      <p className="text-[11px] text-[#82818A]">
                        Petrol vs Diesel — High Retention Cut
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reel Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#0D0D10]/80 backdrop-blur-md text-[#F5F2ED] border border-white/10 uppercase tracking-widest">
                    <Film className="w-3.5 h-3.5 text-[#D96846]" />
                    Featured Production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </>
  );
}
