"use client";

import React, { useEffect, useCallback } from "react";
import { X, ExternalLink, Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const isVertical = project.videoType === "vertical";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-h-[92vh] overflow-y-auto bg-[#141419] border border-[#2B2B38] rounded-2xl shadow-2xl transition-all duration-300 ${
          isVertical ? "max-w-md" : "max-w-4xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video player"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0D0D10]/80 text-[#F5F2ED] hover:text-white hover:bg-[#D96846] transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Player Frame */}
        <div className="relative bg-black rounded-t-2xl overflow-hidden">
          {project.provider === "youtube" ? (
            <div
              className={`relative w-full bg-black ${
                isVertical ? "aspect-[9/16] max-h-[65vh] mx-auto" : "aspect-video"
              }`}
            >
              <iframe
                src={project.embedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          ) : project.provider === "vimeo" ? (
            <div
              className={`relative w-full bg-black ${
                isVertical ? "aspect-[9/16] max-h-[65vh] mx-auto" : "aspect-video"
              }`}
            >
              <iframe
                src={project.embedUrl}
                title={project.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          ) : (
            // Google Drive / Cloud Fallback
            <div className="p-8 text-center space-y-4 bg-gradient-to-b from-[#1C1C24] to-[#141419]">
              <div className="w-16 h-16 rounded-2xl bg-[#D96846]/10 border border-[#D96846]/30 text-[#D96846] flex items-center justify-center mx-auto text-2xl font-bold">
                RR
              </div>
              <h3 className="text-xl font-bold text-[#F5F2ED]">{project.title}</h3>
              <p className="text-sm text-[#82818A] max-w-md mx-auto">
                This project archive is hosted in our verified cloud delivery folder. Click below to stream full-resolution production assets.
              </p>
              <div className="pt-2">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm px-6 py-3 rounded-full transition-all"
                >
                  <span>Open Cloud Video Archive</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Video Info Details */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D96846]/10 text-[#D96846] border border-[#D96846]/30 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <div className="flex items-center gap-4 text-xs text-[#82818A]">
              {project.duration && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {project.duration}
                </span>
              )}
              {project.year && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
              )}
            </div>
          </div>

          <div>
            <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-[#F5F2ED] leading-snug">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-[#82818A] leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Credits & Metadata */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#23232E] text-xs">
            <div>
              <p className="text-[#82818A] mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                Editor / Contributor
              </p>
              <p className="font-semibold text-[#F5F2ED]">{project.creator}</p>
            </div>
            {project.client && (
              <div>
                <p className="text-[#82818A] mb-1 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  Client / Channel
                </p>
                <p className="font-semibold text-[#F5F2ED]">{project.client}</p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#23232E] flex flex-wrap items-center justify-between gap-3">
            <Link
              href={`/work/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#D96846] hover:text-[#E87A58] transition-colors"
            >
              <span>View Full Project Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#82818A] hover:text-[#F5F2ED] transition-colors"
            >
              <span>Watch on {project.provider === "vimeo" ? "Vimeo" : project.provider === "gdrive" ? "Google Drive" : "YouTube"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
