"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D10]/90 backdrop-blur-md border-b border-[#242430]/80 py-4 shadow-xl"
          : "bg-transparent py-6 border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl md:text-2xl font-extrabold tracking-wider text-[#F5F2ED] uppercase transition-colors"
        >
          <span>RENDER</span>
          <span className="text-[#D96846] transition-transform duration-300 group-hover:translate-x-0.5">
            RUSH.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-[#F5F2ED] font-semibold"
                    : "text-[#82818A] hover:text-[#F5F2ED]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D96846] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#D96846]/20 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#F5F2ED] hover:text-[#D96846] focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#0D0D10]/98 backdrop-blur-xl border-b border-[#242430] p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#1A1A22] text-[#D96846] font-semibold"
                      : "text-[#82818A] hover:text-[#F5F2ED] hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#242430] flex flex-col gap-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#D96846] text-[#0D0D10] font-bold text-center py-3 rounded-xl transition-transform active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#323242] text-[#F5F2ED] text-sm py-2.5 rounded-xl hover:border-[#D96846] transition-colors"
              >
                <span>WhatsApp: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
