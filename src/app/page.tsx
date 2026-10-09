"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  Scissors,
  Palette,
  Share2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Zap,
} from "lucide-react";
import HeroShowreel from "@/components/HeroShowreel";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { PROJECTS, Project } from "@/data/projects";
import { TEAM_MEMBERS } from "@/data/team";
import { SERVICES } from "@/data/services";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Selected projects representing all 3 creators
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 6);

  const serviceIcons = [
    <Scissors key="1" className="w-6 h-6 text-[#D96846]" />,
    <Palette key="2" className="w-6 h-6 text-[#D96846]" />,
    <Share2 key="3" className="w-6 h-6 text-[#D96846]" />,
    <TrendingUp key="4" className="w-6 h-6 text-[#D96846]" />,
  ];

  return (
    <div className="space-y-24 md:space-y-36 pb-20">
      {/* 1. HERO & FEATURED VIDEO (With React Bits DarkVeil Background) */}
      <HeroShowreel />

      {/* 2. BRANDS OUR TEAM HAS WORKED WITH */}
      <BrandsSection />

      {/* 3. SELECTED WORK SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F2ED]">
              Selected Work
            </h2>
            <p className="mt-2 text-sm text-[#82818A] max-w-xl">
              Authentic projects produced across commercial campaigns, viral Reels, studio podcasts, and documentaries by our creative team.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F5F2ED] hover:text-[#D96846] transition-colors group"
          >
            <span>View All {PROJECTS.length} Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-[#141419] hover:bg-[#1A1A22] border border-[#2B2B38] hover:border-[#D96846] text-[#F5F2ED] font-semibold text-sm px-8 py-4 rounded-full transition-all"
          >
            <span>Explore Complete Video Archive</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. AGENCY SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#D96846] tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F2ED]">
            Agency Services
          </h2>
          <p className="text-sm text-[#82818A]">
            Comprehensive digital media capabilities crafted to build compounding organic attention and brand prestige.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-[#141419] border border-[#242430] hover:border-[#D96846]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A1A24] border border-[#2B2B38] flex items-center justify-center">
                    {serviceIcons[idx]}
                  </div>
                  <span className="text-2xl font-black text-[#272733] group-hover:text-[#D96846] transition-colors">
                    {service.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F5F2ED] group-hover:text-[#D96846] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#82818A] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#20202A]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED]/70">
                    Core Deliverables
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#82818A]">
                    {service.deliverables.slice(0, 4).map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D96846] flex-shrink-0" />
                        <span className="truncate">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-[#20202A] mt-8">
                <Link
                  href={`/services#${service.slug}`}
                  className="text-xs font-semibold text-[#82818A] hover:text-[#F5F2ED] transition-colors"
                >
                  View Details & Workflow
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96846] hover:text-[#E87A58] transition-colors"
                >
                  <span>Get a Custom Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY RENDER RUSH */}
      <section className="bg-[#121217] border-y border-[#1F1F28] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-[#D96846] tracking-widest uppercase">
                The Render Rush Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F2ED] leading-tight">
                Designed for Retention. Built for Impact.
              </h2>
              <p className="text-sm sm:text-base text-[#82818A] leading-relaxed">
                Most video edits look good for 3 seconds before the viewer swipes away. At Render Rush, we design visual pacing, audio tension, and narrative sequencing that command attention from hook to final CTA.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm px-6 py-3.5 rounded-full transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#16161D] border border-[#272733] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D96846]/10 border border-[#D96846]/20 flex items-center justify-center text-[#D96846]">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#F5F2ED]">Algorithmic Retention Pacing</h4>
                <p className="text-xs text-[#82818A] leading-relaxed">
                  We structure cuts to continuously re-engage cognitive interest, maximizing watch-time and organic platform distribution.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#16161D] border border-[#272733] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D96846]/10 border border-[#D96846]/20 flex items-center justify-center text-[#D96846]">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#F5F2ED]">Studio-Grade Audio Polish</h4>
                <p className="text-xs text-[#82818A] leading-relaxed">
                  Audio accounts for 60% of perceived video quality. We apply Foley sound design, dynamic riser SFX, and broadcast EQ.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#16161D] border border-[#272733] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D96846]/10 border border-[#D96846]/20 flex items-center justify-center text-[#D96846]">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#F5F2ED]">Reliable Turnaround Cadence</h4>
                <p className="text-xs text-[#82818A] leading-relaxed">
                  Dedicated production timelines with structured review loops. No ghosting, no broken promises, 100% on-time delivery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#16161D] border border-[#272733] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D96846]/10 border border-[#D96846]/20 flex items-center justify-center text-[#D96846]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#F5F2ED]">Creative Collective Synergy</h4>
                <p className="text-xs text-[#82818A] leading-relaxed">
                  A united team of specialist editors, motion designers, and storytellers collaborating seamlessly on your deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-STEP PRODUCTION PROCESS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#D96846] tracking-widest uppercase">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F2ED]">
            Our 4-Step Process
          </h2>
          <p className="text-sm text-[#82818A]">
            A transparent and frictionless creative workflow engineered for consistent production excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Discover",
              desc: "We analyze your raw footage, brand goals, audience demographics, and core content objective.",
            },
            {
              num: "02",
              title: "Strategize",
              desc: "We outline the narrative arc, hook points, visual references, and pacing architecture.",
            },
            {
              num: "03",
              title: "Create",
              desc: "Our editors assemble the cut, layer motion graphics, color grade, and engineer immersive sound.",
            },
            {
              num: "04",
              title: "Deliver",
              desc: "You review the master cut, we refine details, and deliver platform-ready exports.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="p-8 rounded-2xl bg-[#141419] border border-[#242430] relative space-y-4"
            >
              <span className="text-3xl font-black text-[#D96846]">{step.num}</span>
              <h3 className="text-lg font-bold text-[#F5F2ED]">{step.title}</h3>
              <p className="text-xs text-[#82818A] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MEET THE TEAM (REAL PHOTOS) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-[#D96846] tracking-widest uppercase">
              The Creative Team
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F2ED]">
              Meet Our Team
            </h2>
            <p className="mt-2 text-sm text-[#82818A] max-w-xl">
              Meet the specialists behind Render Rush. Inspect our verified individual backgrounds and client portfolios.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F5F2ED] hover:text-[#D96846] transition-colors group"
          >
            <span>Learn More About Us</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-3xl bg-[#141419] border border-[#242430] hover:border-[#D96846]/60 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#1A1A22]">
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#0D0D10]/80 backdrop-blur-md text-[#F5F2ED] border border-white/10">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F5F2ED] group-hover:text-[#D96846] transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#82818A] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {member.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-[#1C1C24] text-[#82818A] border border-[#282836]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#20202A] flex items-center justify-between text-xs">
                <a
                  href={member.portfolioSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82818A] hover:text-[#F5F2ED] transition-colors flex items-center gap-1"
                >
                  <span>Source Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/work"
                  className="font-semibold text-[#D96846] hover:text-[#E87A58] transition-colors"
                >
                  View Work
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS (GENUINE QUOTES & ATTRIBUTION) */}
      <TestimonialsSection />

      {/* 9. PRODUCTION STANDARDS & CLIENT COMMITMENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#181822] to-[#121217] border border-[#2B2B38] space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#D96846] tracking-widest uppercase">
              Production Standards
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-[#F5F2ED]">
              What You Can Expect When Partnering With Us
            </h3>
            <p className="text-sm text-[#82818A] leading-relaxed">
              We operate as your dedicated post-production engine. No generic stock templates, no unapproved revisions, and zero compromise on audio or color quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#2B2B38]/80 text-left">
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#F5F2ED]">100%</p>
              <p className="text-xs font-bold text-[#D96846] uppercase mt-1">Custom Creative Architecture</p>
              <p className="text-xs text-[#82818A] mt-1 leading-relaxed">Every video project receives individualized pacing and original sound engineering.</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#F5F2ED]">Zero Guesswork</p>
              <p className="text-xs font-bold text-[#D96846] uppercase mt-1">Structured Milestones</p>
              <p className="text-xs text-[#82818A] mt-1 leading-relaxed">Clear rough cut, color review, and delivery timelines agreed before kick-off.</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#F5F2ED]">Direct WhatsApp</p>
              <p className="text-xs font-bold text-[#D96846] uppercase mt-1">Real-Time Team Access</p>
              <p className="text-xs text-[#82818A] mt-1 leading-relaxed">Fast communication with the actual creators handling your edits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="p-12 md:p-20 rounded-3xl bg-[#141419] border border-[#2B2B38] relative overflow-hidden space-y-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D96846]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#D96846] tracking-widest uppercase">
              Ready to Elevate Your Media?
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F5F2ED] leading-none">
              LET&apos;S MAKE SOMETHING WORTH WATCHING.
            </h2>
            <p className="text-sm sm:text-base text-[#82818A] max-w-xl mx-auto">
              Share your project goals, raw footage details, or upcoming launch plans. We&apos;ll prepare a customized quote and production schedule.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#D96846]/25 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/916263340830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#323242] hover:border-[#D96846] text-[#F5F2ED] font-semibold text-base px-8 py-4 rounded-full transition-colors active:scale-95"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
