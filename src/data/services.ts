export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  workflow: string[];
  idealFor: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "video-production",
    slug: "video-editing-production",
    number: "01",
    title: "Video Editing & Production",
    tagline: "Cinematic, retention-focused video tailored for digital platforms.",
    description: "From hyper-engaging vertical Reels and Shorts to studio podcasts, YouTube long-form essays, and brand commercials. We combine sharp pacing, sound design, color grading, and motion graphics to hold attention from the first second.",
    deliverables: [
      "Instagram Reels & YouTube Shorts (9:16)",
      "YouTube Long-Form Videos & Documentaries",
      "Studio Podcasts & Multi-Camera Interviews",
      "Brand Commercials & UGC Advertising",
      "Kinetic Motion Graphics & Visual Effects",
      "Color Grading & Cinematic Audio Mastering",
    ],
    workflow: [
      "Footage Audit & Story Breakdown",
      "Rough Cut & Pacing Architecture",
      "Sound Design, Foley & Audio Polish",
      "Color Grade & Motion Graphics Layering",
      "Format-Specific Delivery & Export Optimization",
    ],
    idealFor: [
      "Creators seeking viral retention and higher watch-time",
      "Brands launching direct-response paid social ads",
      "Founders & podcasters producing weekly studio shows",
    ],
  },
  {
    id: "graphic-design",
    slug: "graphic-design-branding",
    number: "02",
    title: "Graphic Design & Branding",
    tagline: "Bold visual systems that command instant authority across every touchpoint.",
    description: "Your visual identity is the front door of your brand. We design high-CTR YouTube thumbnails, distinctive social templates, advertising creatives, and coherent brand collateral that communicates premium caliber.",
    deliverables: [
      "High-CTR YouTube Thumbnails (A/B Ready)",
      "Social Media Graphic Systems & Carousels",
      "Campaign Posters & Web Banners",
      "Advertising Creatives for Meta & Google",
      "Visual Identity, Typography & Color Guidelines",
      "Promotional Assets & Presentation Decks",
    ],
    workflow: [
      "Brand Discovery & Competitive Visual Analysis",
      "Moodboards & Creative Concepting",
      "Iterative Design & Layout Drafting",
      "Typography & Color Hierarchy Calibration",
      "Asset Packaging & Multi-Platform Resizing",
    ],
    idealFor: [
      "YouTube channels striving for double-digit CTR",
      "Startups establishing their first coherent brand guide",
      "DTC brands refreshing their performance ad creative",
    ],
  },
  {
    id: "social-media",
    slug: "social-media-management",
    number: "03",
    title: "Social Media Management",
    tagline: "Consistent, organic content distribution built on strategic creative planning.",
    description: "Grow an engaged digital audience without the operational burnout. We handle monthly content calendars, platform-native copywriting, strategic publishing cadence, and creative feedback loops.",
    deliverables: [
      "End-to-End Content Strategy & Topic Ideation",
      "Monthly Content Calendar & Production Pipeline",
      "Channel Account Management & Scheduling",
      "Hook-Oriented Captions & Search-Optimized Descriptions",
      "Audience Interaction Guidance",
      "Monthly Performance & Retention Reporting",
    ],
    workflow: [
      "Niche Audience Research & Trend Mapping",
      "Monthly Editorial Calendar Alignment",
      "Batch Asset Review & Copy Formulation",
      "Multi-Channel Scheduled Distribution",
      "Performance Review & Iterative Optimization",
    ],
    idealFor: [
      "Agencies & business owners wanting an active social presence",
      "Subject-matter experts scaling personal brand equity",
      "E-commerce brands seeking consistent organic touchpoints",
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    tagline: "Organic content engines and creative strategy that build compounding reach.",
    description: "Cut through digital noise with creative campaigns designed to turn passive scrollers into committed followers and qualified inquiries. We focus on organic distribution, platform optimization, and creative angle testing.",
    deliverables: [
      "Digital Content Growth Architecture",
      "Campaign Creative Development & Angle Concepting",
      "Organic Reach & Discovery Optimization",
      "Platform-Specific Creative Repurposing",
      "Content Funnel Alignment",
      "Conversion Asset Framing",
    ],
    workflow: [
      "Growth Opportunity & Funnel Analysis",
      "Creative Hook & Angle Ideation",
      "Cross-Platform Content Sequencing",
      "Launch & Real-Time Performance Tracking",
      "Iterative Scaling of Winning Formats",
    ],
    idealFor: [
      "High-ticket service providers looking for qualified leads",
      "Digital products and education businesses",
      "Brands wanting organic audience compounding",
    ],
  },
];
