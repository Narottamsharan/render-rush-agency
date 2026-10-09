export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  category: string;
  associatedMember: "Narottam Sharan" | "Aditya Kumar Ray" | "Prashant Singh";
  sourceUrl: string;
  verified: boolean;
  initials: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-nadavi",
    quote: "He helped simplify the message and made the final videos feel clearer and more polished for our audience.",
    author: "Nadavi Loans Client Team",
    role: "Client Team",
    organization: "Nadavi Loans (Financial Services)",
    category: "Explainer Content",
    associatedMember: "Narottam Sharan",
    sourceUrl: "https://narottamvisuals.in",
    verified: true,
    initials: "NL",
  },
  {
    id: "test-spreadly",
    quote: "Prashant has been instrumental in creating engaging content that resonates with our audience. His editing style is unique and always delivers high-retention videos.",
    author: "Spreadly TV Production Team",
    role: "Studio Channel Lead",
    organization: "Spreadly TV",
    category: "Studio Podcasts & Interviews",
    associatedMember: "Prashant Singh",
    sourceUrl: "https://prashantkits.vercel.app",
    verified: true,
    initials: "ST",
  },
  {
    id: "test-shoopy",
    quote: "Working with Prashant was a game-changer for our visual content. His creative approach to product videos helped increase our conversion rates significantly.",
    author: "Shoopy.in Creative Team",
    role: "Marketing & Creative Team",
    organization: "Shoopy.in (E-Commerce Platform)",
    category: "Commercial & Product Video",
    associatedMember: "Prashant Singh",
    sourceUrl: "https://prashantkits.vercel.app",
    verified: true,
    initials: "SH",
  },
  {
    id: "test-techstars",
    quote: "He handled the pressure of event content well and kept the edit moving without losing the important moments.",
    author: "Techstars Weekend Organizing Committee",
    role: "Event Organizer",
    organization: "Techstars Startup Weekend",
    category: "High-Pace Event Coverage",
    associatedMember: "Narottam Sharan",
    sourceUrl: "https://narottamvisuals.in",
    verified: true,
    initials: "TS",
  },
  {
    id: "test-kriti",
    quote: "The edits felt more intentional and professional, with better rhythm and a stronger presentation for my content.",
    author: "Kriti Priya",
    role: "Personal Brand Creator",
    organization: "Personal Brand Content",
    category: "Short-Form Brand Polish",
    associatedMember: "Narottam Sharan",
    sourceUrl: "https://narottamvisuals.in",
    verified: true,
    initials: "KP",
  },
];
