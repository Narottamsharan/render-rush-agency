export interface BrandItem {
  id: string;
  name: string;
  category: 
    | "team-employer"
    | "project-client"
    | "event-partner"
    | "featured-channel"
    | "co-founded-studio";
  categoryLabel: string;
  associatedMember: "Narottam Sharan" | "Aditya Kumar Ray" | "Prashant Singh" | "Collective";
  sourcePortfolio: string;
  description: string;
  verifiedStatus: "verified-active" | "verified-historical";
  logoText: string;
  featuredOnHome: boolean;
}

export const BRANDS_WORKED_WITH: BrandItem[] = [
  {
    id: "spreadly-tv",
    name: "Spreadly TV",
    category: "team-employer",
    categoryLabel: "Studio Channel Partner",
    associatedMember: "Prashant Singh",
    sourcePortfolio: "https://prashantkits.vercel.app",
    description: "Lead Video Editor for Spreadly TV multi-camera studio podcasts, interviews, and long-form visual essays.",
    verifiedStatus: "verified-active",
    logoText: "SPREADLY TV",
    featuredOnHome: true,
  },
  {
    id: "gdg",
    name: "Google Developers Group",
    category: "project-client",
    categoryLabel: "Community & Tech Client",
    associatedMember: "Narottam Sharan",
    sourcePortfolio: "https://narottamvisuals.in",
    description: "Video editing for Google Student Ambassador Program 2026 announcement campaigns and tech community content.",
    verifiedStatus: "verified-active",
    logoText: "GOOGLE DEVELOPERS GROUP",
    featuredOnHome: true,
  },
  {
    id: "techstars",
    name: "Techstars Startup Weekend",
    category: "event-partner",
    categoryLabel: "Startup Event Partner",
    associatedMember: "Narottam Sharan",
    sourcePortfolio: "https://narottamvisuals.in",
    description: "On-site and rapid-turnaround video editing for Techstars Startup Weekend events and founder presentations.",
    verifiedStatus: "verified-historical",
    logoText: "TECHSTARS",
    featuredOnHome: true,
  },
  {
    id: "shoopy",
    name: "Shoopy.in",
    category: "team-employer",
    categoryLabel: "E-Commerce Brand Client",
    associatedMember: "Prashant Singh",
    sourcePortfolio: "https://prashantkits.vercel.app",
    description: "Creative visual editing for e-commerce advertising, high-conversion product videos, and brand showcases.",
    verifiedStatus: "verified-historical",
    logoText: "SHOOPY.IN",
    featuredOnHome: true,
  },
  {
    id: "yzen-media",
    name: "YZEN Media",
    category: "project-client",
    categoryLabel: "Performance Marketing Agency",
    associatedMember: "Narottam Sharan",
    sourcePortfolio: "https://narottamvisuals.in",
    description: "Direct-response performance marketing reel edits engineered for Meta Ads conversion.",
    verifiedStatus: "verified-active",
    logoText: "YZEN MEDIA",
    featuredOnHome: true,
  },
  {
    id: "second-ride",
    name: "Second Ride",
    category: "project-client",
    categoryLabel: "Automotive Platform",
    associatedMember: "Aditya Kumar Ray",
    sourcePortfolio: "https://adityakumarray.vercel.app",
    description: "Automotive storytelling combined with motion graphics, UI animations, and technical video breakdowns.",
    verifiedStatus: "verified-active",
    logoText: "SECOND RIDE",
    featuredOnHome: true,
  },
  {
    id: "hs-media",
    name: "HS Media",
    category: "co-founded-studio",
    categoryLabel: "Media Production Company",
    associatedMember: "Aditya Kumar Ray",
    sourcePortfolio: "https://adityakumarray.vercel.app",
    description: "Co-founded media production workflows and video editing operations led by team members.",
    verifiedStatus: "verified-historical",
    logoText: "HS MEDIA",
    featuredOnHome: true,
  },
  {
    id: "nadavi-loans",
    name: "Nadavi Loans",
    category: "project-client",
    categoryLabel: "Financial Services",
    associatedMember: "Narottam Sharan",
    sourcePortfolio: "https://narottamvisuals.in",
    description: "Explainer video editing simplifying complex financial services for public audiences.",
    verifiedStatus: "verified-active",
    logoText: "NADAVI LOANS",
    featuredOnHome: true,
  },
  {
    id: "vistaar-news",
    name: "Vistaar News",
    category: "featured-channel",
    categoryLabel: "Broadcast Journalism",
    associatedMember: "Prashant Singh",
    sourcePortfolio: "https://prashantkits.vercel.app",
    description: "Long-form visual journalism collaboration for in-depth investigative video presentations.",
    verifiedStatus: "verified-active",
    logoText: "VISTAAR NEWS",
    featuredOnHome: false,
  },
  {
    id: "santosh-suna",
    name: "Santosh Suna",
    category: "project-client",
    categoryLabel: "Creator Campaign",
    associatedMember: "Aditya Kumar Ray",
    sourcePortfolio: "https://adityakumarray.vercel.app",
    description: "30-day educational video reel series focusing on high engagement and consistent branding.",
    verifiedStatus: "verified-active",
    logoText: "SANTOSH SUNA",
    featuredOnHome: false,
  },
];
