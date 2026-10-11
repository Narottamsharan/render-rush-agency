"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F2ED]">
            What Collaborators Say
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#82818A] max-w-xl leading-relaxed">
            Genuine testimonials and feedback gathered from our team members&apos; client productions and long-term channel partnerships.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-3 rounded-full bg-[#141419] border border-[#2B2B38] hover:border-[#D96846] text-[#F5F2ED] hover:text-[#D96846] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="p-3 rounded-full bg-[#141419] border border-[#2B2B38] hover:border-[#D96846] text-[#F5F2ED] hover:text-[#D96846] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Featured Testimonial Banner */}
      <div className="p-6 sm:p-10 md:p-16 rounded-3xl bg-[#141419] border border-[#2B2B38] relative overflow-hidden space-y-6 sm:space-y-8 shadow-2xl">
        <div className="absolute top-6 right-8 text-[#D96846]/10 pointer-events-none">
          <Quote className="w-20 h-20 sm:w-24 sm:h-24 rotate-180" />
        </div>

        <div className="space-y-5 sm:space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-[#D96846]/10 text-[#D96846] border border-[#D96846]/30 uppercase tracking-wider">
            <span>{TESTIMONIALS[currentIndex].category}</span>
          </div>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#F5F2ED] leading-relaxed italic">
            &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
          </p>

          <div className="pt-6 border-t border-[#23232E] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D96846]/15 border border-[#D96846]/30 text-[#D96846] font-black text-sm flex items-center justify-center flex-shrink-0">
                {TESTIMONIALS[currentIndex].initials}
              </div>
              <div>
                <p className="text-base font-bold text-[#F5F2ED]">
                  {TESTIMONIALS[currentIndex].author}
                </p>
                <p className="text-xs text-[#82818A]">
                  {TESTIMONIALS[currentIndex].organization} &bull; {TESTIMONIALS[currentIndex].role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#181822] text-[#82818A] border border-[#272736]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D96846]" />
              <span>Project by {TESTIMONIALS[currentIndex].associatedMember}</span>
            </div>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex items-center gap-2 pt-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "w-8 bg-[#D96846]"
                  : "w-2 bg-[#2B2B38] hover:bg-[#82818A]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
