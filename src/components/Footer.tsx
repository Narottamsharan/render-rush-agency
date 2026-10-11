import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0D] border-t border-[#1F1F28] pt-16 pb-12 text-[#82818A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 sm:mb-16">
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-wider text-[#F5F2ED] uppercase"
            >
              <span>RENDER</span>
              <span className="text-[#D96846]"> RUSH.</span>
            </Link>
            <p className="text-[#F5F2ED]/70 font-medium text-sm tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="text-sm max-w-md leading-relaxed text-[#82818A]">
              A premium creative team helping ambitious brands, creators, and businesses scale through high-retention video editing, cinematic visual storytelling, and distinct digital presence.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border border-[#272733] text-[#F5F2ED] hover:border-[#D96846] hover:text-[#D96846] transition-colors min-h-[40px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D96846]" />
                <span>WhatsApp: {siteConfig.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border border-[#272733] text-[#F5F2ED] hover:border-[#D96846] hover:text-[#D96846] transition-colors min-h-[40px] break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#D96846] flex-shrink-0" />
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F5F2ED]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#F5F2ED] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#F5F2ED] transition-colors">
                  Portfolio Showcase
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F5F2ED] transition-colors">
                  Agency Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F5F2ED] transition-colors">
                  About & Creative Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F5F2ED] transition-colors">
                  Start an Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F5F2ED]">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#video-production" className="hover:text-[#F5F2ED] transition-colors">
                  Video Editing & Production
                </Link>
              </li>
              <li>
                <Link href="/services#graphic-design" className="hover:text-[#F5F2ED] transition-colors">
                  Graphic Design & Branding
                </Link>
              </li>
              <li>
                <Link href="/services#social-media" className="hover:text-[#F5F2ED] transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="hover:text-[#F5F2ED] transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/work?category=podcasts-interviews" className="hover:text-[#F5F2ED] transition-colors">
                  Podcasts & Interviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C1C24] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#82818A]">
            &copy; {new Date().getFullYear()} Render Rush. All rights reserved. Built with precision for production.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F5F2ED] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#D96846] transition-colors flex items-center gap-1">
              <span>Get Custom Quote</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
