export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  tools: string[];
  highlights: string[];
  portfolioSource: string;
  avatarUrl: string;
  featuredProjectsCount: number;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "narottam-sharan",
    name: "Narottam Sharan",
    role: "Creative Team",
    bio: "Visual storyteller specializing in high-retention commercial edits, automotive films, and performance social media content that drives measurable brand reach.",
    skills: [
      "High-Retention Editing",
      "Commercial & Brand Content",
      "Dynamic Sound Design",
      "Precision Color Grading",
      "Kinetic Typography",
    ],
    tools: ["Premiere Pro", "After Effects", "Photoshop", "Blender", "CapCut"],
    highlights: [
      "2M+ Total Views Generated across client campaigns",
      "Adobe Certified Video Editor",
      "Awarded by Honourable Governor of Chhattisgarh",
      "Worked with Google Developers Group & Techstars",
    ],
    portfolioSource: "https://narottamvisuals.in",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    featuredProjectsCount: 12,
  },
  {
    id: "aditya-kumar-ray",
    name: "Aditya Kumar Ray",
    role: "Creative Team",
    bio: "Editor and motion graphics artist focused on narrative clarity, cinematic rhythm, and technical motion systems for educational, documentary, and brand campaigns.",
    skills: [
      "Motion Graphics & UI Animation",
      "Documentary Pacing",
      "Social Campaign Series",
      "Multi-Module Content Architecture",
      "Audio Polish & Mastering",
    ],
    tools: [
      "After Effects",
      "Premiere Pro",
      "DaVinci Resolve",
      "Illustrator",
      "Photoshop",
      "Audition",
    ],
    highlights: [
      "Led 30-day educational reel campaigns",
      "Produced 45-minute regional government documentary",
      "Automotive motion graphics specialist (Second Ride)",
      "Co-founded media production workflows",
    ],
    portfolioSource: "https://adityakumarray.vercel.app",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    featuredProjectsCount: 5,
  },
  {
    id: "prashant-singh",
    name: "Prashant Singh",
    role: "Creative Team",
    bio: "Long-form editorial specialist and AI visual storyteller with deep expertise in studio podcasts, celebrity interviews, investigative journalism, and documentary post-production.",
    skills: [
      "Long-Form Podcast Architecture",
      "Multi-Camera Interview Switching",
      "Documentary Visual Narrative",
      "AI-Powered Workflow Acceleration",
      "Engaging B-Roll Contextualization",
    ],
    tools: [
      "Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
      "Photoshop",
      "AI Video Tools",
    ],
    highlights: [
      "Lead Video Editor for Spreadly TV studio productions",
      "Cut 20+ feature-length interviews & masterclasses",
      "Specialized in finance, healthcare, and cultural topics",
      "2+ years crafting viral cinematic retention",
    ],
    portfolioSource: "https://prashantkits.vercel.app",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    featuredProjectsCount: 9,
  },
];
