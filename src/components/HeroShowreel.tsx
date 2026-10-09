"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Play, ArrowUpRight, Sparkles, Film, CheckCircle2, Clock } from "lucide-react";
import VideoModal from "./VideoModal";
import { PROJECTS, Project } from "@/data/projects";

// Dynamically import official React Bits DarkVeil component (SSR-safe, client-only)
const DarkVeil = dynamic(() => import("@/components/reactbits/DarkVeil"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#141218] via-[#0D0D10] to-[#0D0D10] opacity-80 pointer-events-none" />
  ),
});

export default function HeroShowreel() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Authenticated Featured Video: "Your Time is Your Money" by Prashant Singh (Spreadly TV, 6:13)
  const heroProject =
    PROJECTS.find((p) => p.id === "ps-time-money") ||
    PROJECTS.find((p) => p.slug === "your-time-is-your-money") ||
    PROJECTS[0];

  return (
    <>
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden">
        {/* REACT BITS ANIMATED HERO BACKGROUND (Sits strictly behind text, non-interactive) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* WebGL Canvas Shader */}
          <div className="absolute inset-0">
            <DarkVeil
              hueShift={216}
              noiseIntensity={0}
              scanlineIntensity={0}
              speed={0.5}
              scanlineFrequency={0}
              warpAmount={0}
              resolutionScale={1}
            />
          </div>

          {/* Subtle contrast masks for text readability */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0D0D10]/40 to-[#0D0D10]/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D10]/70 via-transparent to-[#0D0D10]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            {/* Agency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A22]/90 backdrop-blur-md border border-[#2B2B38] text-xs font-semibold text-[#F5F2ED] tracking-wide">
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
                className="inline-flex items-center gap-2 bg-[#141419]/90 hover:bg-[#1A1A22] border border-[#2B2B38] hover:border-[#D96846] text-[#F5F2ED] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 active:scale-95"
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

          {/* Cinematic Interactive Showcase Card: YOUR TIME IS YOUR MONEY */}
          <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
            <div
              onClick={() => setActiveModalProject(heroProject)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden border border-[#272736] bg-[#141419] shadow-2xl hover:border-[#D96846]/70 transition-all duration-300"
            >
              {/* Showcase Poster (16:9 Clean Frame) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <Image
                  src={heroProject.thumbnailUrl}
                  alt={heroProject.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D10] via-black/35 to-transparent" />

                {/* Big Animated Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-4 bg-[#0D0D10]/85 backdrop-blur-md border border-[#323242] group-hover:border-[#D96846] px-6 py-3.5 rounded-full transition-all duration-300 group-hover:scale-105 shadow-2xl">
                    <div className="w-11 h-11 rounded-full bg-[#D96846] text-[#0D0D10] flex items-center justify-center">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-[#F5F2ED] uppercase tracking-wider">
                        Play Featured Video
                      </p>
                      <p className="text-[11px] text-[#82818A]">
                        {heroProject.title} &bull; {heroProject.duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badges on poster */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#0D0D10]/85 backdrop-blur-md text-[#F5F2ED] border border-white/10 uppercase tracking-widest">
                    <Film className="w-3.5 h-3.5 text-[#D96846]" />
                    Featured Episode
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-[#0D0D10]/85 backdrop-blur-md text-[#F5F2ED] border border-white/10">
                    <Clock className="w-3 h-3 text-[#D96846]" />
                    {heroProject.duration}
                  </span>
                </div>

                {/* Bottom title overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono text-[#D96846] uppercase tracking-wider">
                      Studio Edit &bull; Spreadly TV
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#F5F2ED] uppercase tracking-tight">
                      {heroProject.title}
                    </h2>
                  </div>
                  <span className="text-xs text-[#82818A] font-medium">
                    Editor: {heroProject.creator}
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
