import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Film } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 md:py-36 text-center space-y-8">
      <div className="w-20 h-20 rounded-3xl bg-[#141419] border border-[#2B2B38] text-[#D96846] flex items-center justify-center mx-auto text-3xl font-black">
        404
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F2ED]">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#82818A] max-w-md mx-auto">
          The requested page or project case study could not be located. It may have moved or been updated.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 border border-[#2B2B38] hover:border-[#D96846] text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
        >
          <Film className="w-4 h-4 text-[#D96846]" />
          <span>Browse Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
