import React from "react";
import { Metadata } from "next";
import {
  Sparkles,
  Mail,
  MessageSquare,
  MessageCircle,
  FileText,
  BadgeCheck,
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Render Rush | Start Your Project",
  description:
    "Start your creative production with Render Rush. Submit your project requirements or reach out directly on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F2ED] leading-tight">
          Let&apos;s Build Your Next Project.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#82818A] leading-relaxed">
          Whether you need a full post-production pipeline for weekly releases, high-converting commercial reels, or custom motion graphics—we evaluate every brief with strategic care.
        </p>
      </div>

      {/* Main Grid: On mobile, Form displays first (order-1), then Contact Cards (order-2). On desktop (lg), Left Column (order-1) & Right Column (order-2). */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Info & Details: Desktop Left Column / Mobile Second Section */}
        <div className="w-full lg:col-span-5 order-2 lg:order-1 space-y-8">
          {/* Quick Direct Channels */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#141419] border border-[#242430] space-y-6">
            <h3 className="text-lg font-bold text-[#F5F2ED]">
              Direct Contact Channels
            </h3>

            <div className="space-y-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 sm:gap-4 p-4 rounded-2xl bg-[#0D0D10] border border-[#262634] hover:border-[#D96846] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D96846]/10 text-[#D96846] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D96846] group-hover:text-[#0D0D10] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-[#82818A] uppercase tracking-wider">
                    WhatsApp (Fastest Response)
                  </p>
                  <p className="text-sm font-semibold text-[#F5F2ED] group-hover:text-[#D96846] transition-colors mt-0.5">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-[11px] text-[#82818A] mt-1 leading-normal">
                    Direct messaging for creative consultations & quick project chats
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-3.5 sm:gap-4 p-4 rounded-2xl bg-[#0D0D10] border border-[#262634] hover:border-[#D96846] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D96846]/10 text-[#D96846] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D96846] group-hover:text-[#0D0D10] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-[#82818A] uppercase tracking-wider">
                    Official Email
                  </p>
                  <p className="text-sm font-semibold text-[#F5F2ED] group-hover:text-[#D96846] transition-colors mt-0.5 break-all">
                    {siteConfig.contact.email}
                  </p>
                  <p className="text-[11px] text-[#82818A] mt-1 leading-normal">
                    For detailed creative briefs, NDAs & formal RFPs
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Professional Working Approach */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#141419] border border-[#242430] space-y-4 text-xs text-[#82818A]">
            <h4 className="text-sm font-bold text-[#F5F2ED] uppercase tracking-wider">
              Our Working Approach
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#D96846] flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-[#F5F2ED] block font-semibold mb-0.5">Clear Communication</strong>
                  We keep you informed throughout the creative process with direct access to your lead editor.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-[#D96846] flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-[#F5F2ED] block font-semibold mb-0.5">Thoughtful Project Planning</strong>
                  Every project begins with a discussion of your goals, creative references, and milestone requirements.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="w-4 h-4 text-[#D96846] flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-[#F5F2ED] block font-semibold mb-0.5">Custom Proposals</strong>
                  We prepare project-specific quotes based on the required deliverables and editing complexity.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form: Desktop Right Column / Mobile First Section */}
        <div className="w-full lg:col-span-7 order-1 lg:order-2">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
