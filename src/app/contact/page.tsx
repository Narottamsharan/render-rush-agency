import React from "react";
import { Metadata } from "next";
import {
  Sparkles,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Start your creative production with Render Rush. Submit your project requirements or reach out directly on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F2ED]">
          Let&apos;s Build Your Next Project.
        </h1>
        <p className="text-base sm:text-lg text-[#82818A] leading-relaxed">
          Whether you need a full post-production pipeline for weekly YouTube releases, high-converting commercial reels, or custom motion graphics—we evaluate every brief with strategic care.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info & Details Left Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Channels */}
          <div className="p-8 rounded-3xl bg-[#141419] border border-[#242430] space-y-6">
            <h3 className="text-lg font-bold text-[#F5F2ED]">
              Direct Contact Channels
            </h3>

            <div className="space-y-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#0D0D10] border border-[#262634] hover:border-[#D96846] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D96846]/10 text-[#D96846] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#82818A] uppercase tracking-wider">
                    WhatsApp (Fastest Response)
                  </p>
                  <p className="text-sm font-semibold text-[#F5F2ED] group-hover:text-[#D96846] transition-colors mt-0.5">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-[11px] text-[#82818A] mt-1">
                    Typically replies in under 1 hour during business hours
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#0D0D10] border border-[#262634] hover:border-[#D96846] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D96846]/10 text-[#D96846] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#82818A] uppercase tracking-wider">
                    Official Email
                  </p>
                  <p className="text-sm font-semibold text-[#F5F2ED] group-hover:text-[#D96846] transition-colors mt-0.5">
                    {siteConfig.contact.email}
                  </p>
                  <p className="text-[11px] text-[#82818A] mt-1">
                    For detailed creative briefs, NDAs & formal RFPs
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Client Assurance */}
          <div className="p-8 rounded-3xl bg-[#141419] border border-[#242430] space-y-4 text-xs text-[#82818A]">
            <h4 className="text-sm font-bold text-[#F5F2ED] uppercase tracking-wider">
              The Render Rush Guarantee
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D96846] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>24-Hour Review Turnaround:</strong> Every project inquiry is reviewed by our creative leads within 1 business day.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D96846] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Confidentiality:</strong> Your raw footage, unreleased campaign assets, and business metrics remain 100% private.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D96846] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Milestone Pricing:</strong> Custom quotes based on your exact deliverables with zero hidden post-production fees.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Right Column */}
        <div className="lg:col-span-7">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
