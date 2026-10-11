import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Scissors,
  Palette,
  Share2,
  TrendingUp,
  Workflow,
  HelpCircle,
} from "lucide-react";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Creative Services",
  description:
    "Explore Render Rush creative services: Video Editing & Production, Graphic Design & Branding, Social Media Management, and Digital Marketing.",
};

export default function ServicesPage() {
  const serviceIcons = [
    <Scissors key="1" className="w-7 h-7 text-[#D96846]" />,
    <Palette key="2" className="w-7 h-7 text-[#D96846]" />,
    <Share2 key="3" className="w-7 h-7 text-[#D96846]" />,
    <TrendingUp key="4" className="w-7 h-7 text-[#D96846]" />,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F2ED]">
          Agency Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#82818A] leading-relaxed">
          Four dedicated creative verticals built to help brands, creators, and modern businesses turn digital attention into durable brand equity.
        </p>
      </div>

      {/* Services Deep Dive */}
      <div className="space-y-12 sm:space-y-16">
        {SERVICES.map((service, idx) => (
          <section
            key={service.id}
            id={service.slug}
            className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#141419] border border-[#242430] hover:border-[#D96846]/40 transition-colors space-y-8 sm:space-y-10"
          >
            {/* Header / Number / Tagline */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#20202A] pb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A24] border border-[#2B2B38] flex items-center justify-center">
                  {serviceIcons[idx]}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#D96846]">
                    SERVICE {service.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5F2ED]">
                    {service.title}
                  </h2>
                </div>
              </div>
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all self-start md:self-auto"
              >
                <span>Get a Custom Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-lg font-medium text-[#F5F2ED]">{service.tagline}</p>
              <p className="text-sm text-[#82818A] leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>

            {/* 3-Column Deliverables / Workflow / Ideal For */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {/* Deliverables */}
              <div className="p-6 rounded-2xl bg-[#0D0D10] border border-[#22222E] space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D96846]" />
                  What You Receive
                </h3>
                <ul className="space-y-2 text-xs text-[#82818A]">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D96846] font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow Pipeline */}
              <div className="p-6 rounded-2xl bg-[#0D0D10] border border-[#22222E] space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED] flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#D96846]" />
                  Our Workflow
                </h3>
                <ol className="space-y-2 text-xs text-[#82818A]">
                  {service.workflow.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono text-[#D96846] text-[11px] font-bold">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Ideal For */}
              <div className="p-6 rounded-2xl bg-[#0D0D10] border border-[#22222E] space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#D96846]" />
                  Ideal For
                </h3>
                <ul className="space-y-2 text-xs text-[#82818A]">
                  {service.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D96846] font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Conversion Banner */}
      <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#171722] via-[#141419] to-[#121217] border border-[#2B2B38] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-black uppercase text-[#F5F2ED]">
            Unsure Which Service Fits Your Pipeline?
          </h3>
          <p className="text-sm text-[#82818A]">
            Reach out with your goals and raw materials. We will recommend an optimal production package.
          </p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm px-8 py-4 rounded-full transition-all"
        >
          <span>Request Custom Assessment</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
