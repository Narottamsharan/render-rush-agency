import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  User,
  Tag,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: {
      absolute: `${project.title} | Render Rush`,
    },
    description: project.description,
    openGraph: {
      title: `${project.title} | Render Rush`,
      description: project.description,
      images: [{ url: project.thumbnailUrl }],
      url: `https://renderrush.in/work/${project.slug}`,
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isVertical = project.videoType === "vertical";
  const relatedProjects = PROJECTS.filter(
    (p) => p.category === project.category && p.id !== project.id
  ).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 space-y-12 sm:space-y-16">
      {/* Top Back Navigation */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#82818A] hover:text-[#D96846] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Main Project Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#D96846]/10 text-[#D96846] border border-[#D96846]/30 uppercase tracking-widest">
            {project.categoryLabel}
          </span>
          {isVertical && (
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#D96846] text-[#0D0D10] uppercase">
              9:16 Vertical
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F2ED] leading-tight break-words">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#82818A] leading-relaxed">
          {project.detailedDescription || project.description}
        </p>
      </div>

      {/* Video Player Display Container */}
      <div className="rounded-3xl overflow-hidden bg-black border border-[#272736] shadow-2xl">
        {project.provider === "youtube" ? (
          <div
            className={`relative w-full ${
              isVertical ? "aspect-[9/16] max-h-[80vh] mx-auto" : "aspect-video"
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
            className={`relative w-full ${
              isVertical ? "aspect-[9/16] max-h-[80vh] mx-auto" : "aspect-video"
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
          <div className="p-12 md:p-20 text-center space-y-6 bg-gradient-to-b from-[#181822] to-[#121217]">
            <div className="w-16 h-16 rounded-2xl bg-[#D96846]/10 border border-[#D96846]/30 text-[#D96846] flex items-center justify-center mx-auto text-2xl font-black">
              RR
            </div>
            <h3 className="text-2xl font-bold text-[#F5F2ED]">Cloud Production Archive</h3>
            <p className="text-sm text-[#82818A] max-w-lg mx-auto">
              This production asset is hosted in our verified cloud delivery repository. Stream full-fidelity files or view production documentation directly.
            </p>
            <div>
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm px-8 py-4 rounded-full transition-all"
              >
                <span>Launch Cloud Video Asset</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Project Meta Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-[#20202A]">
        <div className="p-6 rounded-2xl bg-[#141419] border border-[#242430]">
          <p className="text-xs text-[#82818A] flex items-center gap-1.5 mb-2">
            <User className="w-3.5 h-3.5 text-[#D96846]" />
            Editor / Contributor
          </p>
          <p className="text-sm font-bold text-[#F5F2ED]">{project.creator}</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#141419] border border-[#242430]">
          <p className="text-xs text-[#82818A] flex items-center gap-1.5 mb-2">
            <Tag className="w-3.5 h-3.5 text-[#D96846]" />
            Client / Brand Credit
          </p>
          <p className="text-sm font-bold text-[#F5F2ED]">{project.client || "Studio Portfolio"}</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#141419] border border-[#242430]">
          <p className="text-xs text-[#82818A] flex items-center gap-1.5 mb-2">
            <Clock className="w-3.5 h-3.5 text-[#D96846]" />
            Runtime / Scope
          </p>
          <p className="text-sm font-bold text-[#F5F2ED]">{project.duration || "Multi-Segment"}</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#141419] border border-[#242430]">
          <p className="text-xs text-[#82818A] flex items-center gap-1.5 mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#D96846]" />
            Year Produced
          </p>
          <p className="text-sm font-bold text-[#F5F2ED]">{project.year || "2024-2026"}</p>
        </div>
      </div>

      {/* Production Highlights & Tags */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-[#F5F2ED] uppercase tracking-widest">
          Techniques & Production Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#181822] text-[#82818A] border border-[#262634]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Similar Projects Section */}
      {relatedProjects.length > 0 && (
        <div className="space-y-8 pt-12 border-t border-[#20202A]">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#F5F2ED]">
              Related Work
            </h3>
            <Link
              href="/work"
              className="text-xs font-bold text-[#D96846] hover:underline"
            >
              Browse All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                href={`/work/${rel.slug}`}
                className="group p-5 rounded-2xl bg-[#141419] border border-[#242430] hover:border-[#D96846]/60 transition-all space-y-3"
              >
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1F1F2A] text-[#82818A] uppercase">
                  {rel.categoryLabel}
                </span>
                <h4 className="text-sm font-bold text-[#F5F2ED] group-hover:text-[#D96846] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#82818A] line-clamp-2">{rel.description}</p>
                <div className="pt-2 text-xs font-semibold text-[#D96846] flex items-center gap-1">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Conversion Banner */}
      <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#171722] via-[#141419] to-[#121217] border border-[#2B2B38] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black uppercase text-[#F5F2ED]">
            Need Similar Production For Your Brand?
          </h3>
          <p className="text-sm text-[#82818A]">
            Discuss your project requirements with the Render Rush creative team today.
          </p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-[#D96846] hover:bg-[#E87A58] text-[#0D0D10] font-bold text-sm px-8 py-4 rounded-full transition-all"
        >
          <span>Get a Custom Quote</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
