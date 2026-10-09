"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Sparkles, Play, Search, Filter } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { PROJECTS, CATEGORIES, Project } from "@/data/projects";

function WorkContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (catId === "all") {
      router.push("/work", { scroll: false });
    } else {
      router.push(`/work?category=${catId}`, { scroll: false });
    }
  };

  // Filter projects by category and search
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D96846] tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Production Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F2ED]">
          Our Creative Work
        </h1>
        <p className="text-sm sm:text-base text-[#82818A] leading-relaxed">
          Explore {PROJECTS.length} verified projects spanning viral vertical Reels, multi-camera studio podcasts, cinematic documentaries, and high-converting commercial advertisements.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-6 pt-4 border-t border-[#20202A]">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#82818A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, editor, client or tag..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#141419] border border-[#2B2B38] text-sm text-[#F5F2ED] placeholder-[#82818A] focus:outline-none focus:border-[#D96846] transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-[#82818A] mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#D96846] text-[#0D0D10] shadow-lg shadow-[#D96846]/20"
                    : "bg-[#141419] text-[#82818A] hover:text-[#F5F2ED] border border-[#242430] hover:border-[#383848]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-[#0D0D10]/20 text-[#0D0D10]" : "bg-[#20202A] text-[#82818A]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredProjects.length === 0 ? (
        <div className="p-16 text-center rounded-3xl bg-[#141419] border border-[#242430] space-y-4">
          <p className="text-base font-bold text-[#F5F2ED]">No projects matched your selection.</p>
          <p className="text-xs text-[#82818A]">Try selecting a different filter category or clearing your search term.</p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-[#D96846] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      )}

      {/* Video Modal Player */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-[#82818A]">
          Loading portfolio showcase...
        </div>
      }
    >
      <WorkContent />
    </Suspense>
  );
}
