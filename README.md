# RENDER RUSH — Creative Agency Website

> **Brand Tagline:** We Create. You Grow.  
> **Official Domain:** [https://renderrush.in](https://renderrush.in)  
> **Official Contact Email:** `prashantsingh.24cx@gmail.com`  
> **Official WhatsApp:** `+91 6263340830`

Production-grade Next.js website for **Render Rush**, built to showcase high-retention video editing, multi-camera podcasts, commercial advertisements, motion design, and brand identity systems.

---

## 1. Project Overview & Features

- **Interactive React Bits Dark Veil Hero**: Official WebGL shader background (`ogl` dependency) running at `hueShift: 216` behind the signature headline ("WE CREATE. YOU GROW."). Fully responsive, capped DPR, reduced-motion fallback, and non-blocking pointer events.
- **Adaptive Mixed-Aspect-Ratio Portfolio Grid**: Intelligent card layout supporting 16:9 landscape videos (e.g. *Your Time is Your Money*) and 9:16 vertical reels (*Petrol vs Diesel*, *India's Car Customization*) without artificial row-stretching or empty black voids.
- **Zero-Redirect Navigation**: Full route preservation and SSR hydration integrity across `/work`, `/services`, `/about`, `/contact`, and dynamic project paths (`/work/[slug]`) during hard refreshes and browser back/forward traversal.
- **Verified Team & Sourced Relationships**: Authentic photography for Narottam Sharan, Aditya Kumar Ray, and Prashant Singh. Real brand relationship categories (Spreadly TV, Techstars, Google Developers Group, Shoopy.in, YZEN Media, Nadavi Loans) and authentic client testimonials.
- **Interactive Multi-Provider Video Modal**: Clean modal player supporting YouTube (`youtube-nocookie.com`), Vimeo, and cloud archives with keyboard `Escape` closing.
- **Direct Lead Capture**: WhatsApp direct launch and validated project inquiry form with INR budget tiers and optional server-side Resend email delivery.

---

## 2. Technology Stack

- **Framework**: Next.js 14.2.15 (App Router, Static Site Generation)
- **Language**: TypeScript 5.6
- **Graphics & Animation**: WebGL via `ogl` (React Bits Dark Veil Shader)
- **Styling**: Tailwind CSS with custom palette:
  - Dark Charcoal: `#0D0D10`
  - Off-White: `#F5F2ED`
  - Terracotta Accent: `#D96846` (*Strictly no gold*)
- **Typography**: Manrope (Google Fonts via Next.js)
- **Icons**: Lucide React
- **Hosting Target**: Vercel (Production domain: `renderrush.in`)

---

## 3. Project Architecture

```
render-rush-agency/
├── docs/
│   ├── portfolio-asset-inventory.md  # Detailed audit of verified project media
│   ├── source-verification.md        # Authentic source & relationship audit
│   └── missing-assets.md             # Cloud archives log
├── public/
│   └── team/                         # Authentic team member portraits
│       ├── narottam-sharan.png
│       ├── aditya-kumar-ray.jpg
│       └── prashant-singh.png
├── src/
│   ├── app/
│   │   ├── api/inquiry/route.ts      # Serverless inquiry handling & email dispatch
│   │   ├── about/page.tsx            # Creative collective story & team profiles
│   │   ├── contact/page.tsx          # Inquiry submission & direct WhatsApp CTA
│   │   ├── privacy/page.tsx          # Privacy policy
│   │   ├── services/page.tsx         # Deep dive into the 4 agency services
│   │   ├── work/
│   │   │   ├── page.tsx              # Filtered portfolio showcase
│   │   │   └── [slug]/page.tsx       # Dynamic project case study routes (36 projects)
│   │   ├── globals.css               # Design system tokens & global rules
│   │   ├── layout.tsx                # Global SEO metadata, layout & navbar
│   │   ├── not-found.tsx             # Custom branded 404 page
│   │   └── page.tsx                  # Homepage with Dark Veil hero showreel
│   ├── components/
│   │   ├── reactbits/
│   │   │   ├── DarkVeil.tsx          # Official React Bits Dark Veil WebGL component
│   │   │   └── DarkVeil.css          # Full-coverage canvas layout rules
│   │   ├── BrandsSection.tsx         # Verified brand relationship showcase
│   │   ├── TestimonialsSection.tsx   # Verified client testimonials
│   │   ├── Footer.tsx                # Site footer with contact channels
│   │   ├── HeroShowreel.tsx          # Master hero with DarkVeil & featured video
│   │   ├── InquiryForm.tsx           # Validated contact inquiry form
│   │   ├── Navbar.tsx                # Fixed glass navigation & mobile drawer
│   │   ├── VideoCard.tsx             # Content-sized, aspect-ratio aware project cards
│   │   └── VideoModal.tsx            # Fullscreen modal player (16:9 & 9:16)
│   ├── config/
│   │   └── site.ts                   # Central agency configuration & contact settings
│   └── data/
│       ├── brands.ts                 # Verified brand relationships
│       ├── projects.ts               # Structured portfolio database (36 projects)
│       ├── services.ts               # 4 agency service verticals & deliverables
│       ├── team.ts                   # Verified profiles for Narottam, Aditya, Prashant
│       └── testimonials.ts           # Authenticated testimonials
├── .env.example
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## 4. Local Development

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/render-rush-agency.git
cd render-rush-agency

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## 5. Production Build & Verification

```bash
# Verify TypeScript types and generate optimized static build
npm run build

# Start the production server locally
npm run start
```

All 36 pages are statically generated with App Router SSG for lightning-fast edge delivery.

---

## 6. Environment Variables

Create `.env.local` for local secrets. Safe variable names and defaults are defined in `.env.example`:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | `https://renderrush.in` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Official contact email | `prashantsingh.24cx@gmail.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Contact phone number | `+916263340830` |
| `NEXT_PUBLIC_WHATSAPP_URL` | Direct WhatsApp chat link | `https://wa.me/916263340830` |
| `RESEND_API_KEY` | *(Optional)* Resend API key for inquiry email dispatch | `re_your_api_key_here` |

> **Security Note:** Never commit `.env` or `.env.local` to GitHub. Store production variables directly in the Vercel Dashboard under **Project Settings → Environment Variables**.

---

## 7. GitHub & Vercel Deployment Guide

### A. GitHub Setup
1. Create a **Private** repository named `render-rush-agency` on GitHub.
2. Link your local project to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/render-rush-agency.git
   git branch -M main
   git push -u origin main
   ```

### B. Vercel Deployment
1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **Add New... → Project**.
3. Import the `render-rush-agency` repository.
4. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. Under **Environment Variables**, add any production variables (such as `RESEND_API_KEY` if using email notifications).
6. Click **Deploy**. Vercel will create an instant preview deployment (`*.vercel.app`).

### C. Custom Domain Configuration (`renderrush.in`)
1. In your Vercel Project Dashboard, navigate to **Settings → Domains**.
2. Add your custom domain: `renderrush.in`.
3. Add the `www.renderrush.in` redirect alias (redirects `www.renderrush.in` to `renderrush.in`).
4. Update DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - **Type A**: `@` pointing to `76.76.21.21`
   - **Type CNAME**: `www` pointing to `cname.vercel-dns.com`
5. Once DNS propagates, Vercel automatically issues an SSL certificate (HTTPS) and validates the domain.

---

## 8. Managing Future Updates

### Adding a New Portfolio Project
1. Open [`src/data/projects.ts`](file:///c:/Users/purus/Downloads/antigravity%20render/src/data/projects.ts).
2. Append a new project object with:
   - `id`, `slug`, `title`, `description`
   - `videoType`: `"horizontal"` (16:9) or `"vertical"` (9:16)
   - `provider`: `"youtube"`, `"vimeo"`, or `"gdrive"`
   - `thumbnailUrl`, `embedUrl`, `videoUrl`
   - `featured`: `true` to display in the homepage showcase
3. Commit and push:
   ```bash
   git add src/data/projects.ts
   git commit -m "feat: add new portfolio project"
   git push origin main
   ```
   *Vercel will automatically build and deploy the update.*

### Updating Team Members or Services
- **Team**: Edit [`src/data/team.ts`](file:///c:/Users/purus/Downloads/antigravity%20render/src/data/team.ts). Place new portraits in `public/team/`.
- **Services**: Edit [`src/data/services.ts`](file:///c:/Users/purus/Downloads/antigravity%20render/src/data/services.ts).
- **Agency Config**: Edit [`src/config/site.ts`](file:///c:/Users/purus/Downloads/antigravity%20render/src/config/site.ts).

---

## 9. License & Credits

All creative video assets, documentaries, and commercial edits are intellectual property of **Render Rush** and its founding members (Narottam Sharan, Aditya Kumar Ray, Prashant Singh). Unauthorized replication or scraping of embedded video assets is prohibited.
