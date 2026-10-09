"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface VideoCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function VideoCard({ project, onSelect }: VideoCardProps) {
  const [imgError, setImgError] = useState(false);
  const isVertical = project.videoType === "vertical";

  // Fallback thumbnail if primary fails
  const displayThumb = imgError
    ? "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
    : project.thumbnailUrl;

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer flex flex-col bg-[#141419] border border-[#242430] hover:border-[#D96846]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#D96846]/10 hover:-translate-y-1"
    >
      {/* Thumbnail Frame */}
      <div
        className={`relative w-full overflow-hidden bg-[#0A0A0D] ${
          isVertical ? "aspect-[9/16] max-h-[460px]" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={displayThumb}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setImgError(true)}
          priority={project.featured}
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category & Format Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#0D0D10]/80 backdrop-blur-md text-[#F5F2ED] border border-white/10 uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          {isVertical && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D96846] text-[#0D0D10] tracking-wider uppercase">
              9:16
            </span>
          )}
        </div>

        {/* Duration Badge */}
        {project.duration && (
          <div className="absolute top-3 right-3 z-10">
            <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-[#0D0D10]/80 backdrop-blur-md text-[#F5F2ED]/90 border border-white/10">
              <Clock className="w-3 h-3 text-[#D96846]" />
              {project.duration}
            </span>
          </div>
        )}

        {/* Play Icon Centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#D96846] text-[#0D0D10] flex items-center justify-center p-3 shadow-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#E87A58]">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* Info Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#F5F2ED] group-hover:text-[#D96846] transition-colors line-clamp-2 leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-xs text-[#82818A] line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#242430]/60 flex items-center justify-between text-xs text-[#82818A]">
          <span className="truncate font-medium text-[#F5F2ED]/80">
            {project.creator}
          </span>
          <span className="flex items-center gap-1 text-[#D96846] font-semibold group-hover:translate-x-0.5 transition-transform">
            <span>Watch</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
