import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  Award,
  Film,
  CheckCircle2,
} from "lucide-react";
import { TEAM_MEMBERS } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Render Rush, our creative philosophy, and the three video editing & visual storytelling specialists powering our production studio.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 space-y-16 sm:space-y-24">
      {/* Editorial Header */}
      <div className="space-y-4 sm:space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Agency Collective</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F2ED] leading-tight">
          We Shape Visual Stories That Command Attention.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#82818A] leading-relaxed">
          Render Rush is a collaborative creative studio uniting specialized talent across short-form viral retention, long-form documentary filmmaking, and brand motion design.
        </p>
      </div>

      {/* Agency Philosophy / Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-8 border-t border-[#20202A]">
        <div className="space-y-6 text-[#82818A] text-sm leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F2ED]">
            The Creative Philosophy
          </h2>
          <p>
            In an era of endless digital noise and sub-second attention spans, superficial aesthetics alone no longer suffice. Great post-production requires understanding human psychology, rhythm, sound engineering, and platform behavior.
          </p>
          <p>
            Rather than relying on outsourced or fragmented freelance arrangements, Render Rush operates as a dedicated creative collective. We bring verified expertise from high-performing YouTube channels, educational masterclasses, and commercial brands into a unified workflow.
          </p>
          <div className="pt-2">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] hover:text-[#E87A58] uppercase tracking-wider"
            >
              <span>Explore The Collective Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Agency Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-[#141419] border border-[#242430] space-y-2">
            <Film className="w-5 h-5 text-[#D96846]" />
            <h3 className="text-sm font-bold text-[#F5F2ED]">Pacing & Retention</h3>
            <p className="text-xs text-[#82818A]">
              Every frame transition is calibrated to sustain cognitive interest and minimize drop-off.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141419] border border-[#242430] space-y-2">
            <Layers className="w-5 h-5 text-[#D96846]" />
            <h3 className="text-sm font-bold text-[#F5F2ED]">Sound Architecture</h3>
            <p className="text-xs text-[#82818A]">
              Layered foley, atmospheric audio beds, and punchy risers that give edits tactile presence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141419] border border-[#242430] space-y-2">
            <Award className="w-5 h-5 text-[#D96846]" />
            <h3 className="text-sm font-bold text-[#F5F2ED]">Verified Track Record</h3>
            <p className="text-xs text-[#82818A]">
              Millions of organic views delivered for independent creators and corporate channels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141419] border border-[#242430] space-y-2">
            <Shield className="w-5 h-5 text-[#D96846]" />
            <h3 className="text-sm font-bold text-[#F5F2ED]">Direct Collaboration</h3>
            <p className="text-xs text-[#82818A]">
              You work directly with the editors building your media—no account manager telephone games.
            </p>
          </div>
        </div>
      </div>

      {/* The 3 Team Members Profiles */}
      <section className="space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-bold text-[#D96846] tracking-widest uppercase">
            Specialists
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F2ED]">
            Meet the Creative Team
          </h2>
          <p className="text-sm text-[#82818A] max-w-xl">
            Each team member brings specialized post-production capabilities and a verified body of creative work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="p-8 rounded-3xl bg-[#141419] border border-[#242430] hover:border-[#D96846]/60 transition-all flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#1A1A24]">
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#0D0D10]/80 backdrop-blur-md text-[#F5F2ED] border border-white/10">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#F5F2ED]">{member.name}</h3>
                  <p className="mt-2 text-xs text-[#82818A] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Verified Highlights */}
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#F5F2ED]/70">
                    Key Highlights
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#82818A]">
                    {member.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D96846] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Toolkit */}
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#F5F2ED]/70">
                    Software Toolkit
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-[#0D0D10] text-[#82818A] border border-[#242430]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Attribution & Portfolio Link */}
              <div className="pt-6 border-t border-[#20202A] flex items-center justify-between text-xs">
                <a
                  href={member.portfolioSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82818A] hover:text-[#F5F2ED] flex items-center gap-1 transition-colors"
                >
                  <span>Original Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/work"
                  className="font-semibold text-[#D96846] hover:text-[#E87A58] transition-colors"
                >
                  View Team Projects
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#171722] via-[#141419] to-[#121217] border border-[#2B2B38] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-black uppercase text-[#F5F2ED]">
            Collaborate With Our Creative Team
          </h3>
          <p className="text-sm text-[#82818A]">
            We accept a select number of monthly retainer clients and custom campaign productions.
          </p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm px-8 py-4 rounded-full transition-all"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
