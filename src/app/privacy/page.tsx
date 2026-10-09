import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy Draft",
  description: "Privacy policy draft for Render Rush client communications and data handling.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#82818A] hover:text-[#D96846] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase">
          <Shield className="w-3.5 h-3.5" />
          <span>Legal Draft — Pending Final Owner Review</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F2ED]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#82818A]">
          Last Updated: October 2026 &bull; Domain: {siteConfig.domain}
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-[#141419] border border-[#242430] space-y-8 text-sm text-[#82818A] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#F5F2ED]">1. Information We Collect</h2>
          <p>
            When you initiate a creative project inquiry on Render Rush, we collect the information you voluntarily submit through our contact forms or direct WhatsApp/email correspondence. This includes your full name, email address, brand name, service interests, budget range, and project brief details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#F5F2ED]">2. How We Use Your Information</h2>
          <p>
            We use the submitted information strictly for evaluating project feasibility, preparing tailored proposals and production timelines, and communicating directly with you regarding your creative deliverables.
          </p>
          <p>
            Render Rush does not sell, rent, or trade your contact details to third parties or marketing brokers under any circumstance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#F5F2ED]">3. Raw Media & Asset Confidentiality</h2>
          <p>
            Any video footage, brand assets, scripts, audio tracks, or intellectual property shared with the Render Rush creative team is treated as strictly confidential. Client media is stored securely on encrypted workstations and access-controlled cloud repositories during the production period.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#F5F2ED]">4. Third-Party Platforms & Embeds</h2>
          <p>
            Our website embeds public video content hosted on YouTube, Vimeo, and cloud servers. Interacting with third-party players is subject to the respective platform&apos;s privacy policies and cookie practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#F5F2ED]">5. Contact Regarding Privacy</h2>
          <p>
            If you have questions regarding our data practices or wish to request the removal of your submitted contact details, please reach out directly:
          </p>
          <div className="pt-2 text-xs font-mono text-[#F5F2ED]">
            Email: {siteConfig.contact.email}
            <br />
            WhatsApp: {siteConfig.contact.phone}
          </div>
        </section>
      </div>
    </div>
  );
}
