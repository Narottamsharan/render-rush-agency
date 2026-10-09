# RENDER RUSH — Creative Agency Website

> **Brand Tagline:** We Create. You Grow.  
> **Official Domain:** [https://renderrush.in](https://renderrush.in)  
> **Official Contact Email:** `prashantsingh.24cx@gmail.com`  
> **Official WhatsApp:** `+91 6263340830`

Production-grade Next.js website for **Render Rush**, built to showcase high-retention video editing, multi-camera podcasts, commercial advertisements, motion design, and brand identity systems.

---

## 1. Verified Creative Portfolio Integration

The website consolidates and showcases authentic video work from the three team members' portfolios:
1. **Narottam Sharan** (`https://narottamvisuals.in/`): 12 verified automotive, commercial, and viral short-form reels.
2. **Aditya Kumar Ray** (`https://adityakumarray.vercel.app/`): Vimeo series, educational campaigns, and cloud documentary archives.
3. **Prashant Singh** (`https://prashantkits.vercel.app/`): 9 feature-length studio interviews, Spreadly TV podcasts, and investigative documentaries.

Complete media audit and playback details are documented in:
- `docs/portfolio-asset-inventory.md`
- `docs/missing-assets.md`

---

## 2. Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS with custom palette (Main dark `#0D0D10`, Off-white `#F5F2ED`, Warm terracotta accent `#D96846` — *strictly no gold*)
- **Typography:** Manrope (Google Fonts via Next.js)
- **Icons:** Lucide React
- **Video Players:** Responsive embedded player modal with YouTube (`youtube-nocookie.com`), Vimeo player, and cloud asset fallbacks
- **Deployment:** Vercel ready

---

## 3. Project Architecture

```
antigravity render/
├── docs/
│   ├── portfolio-asset-inventory.md  # Detailed audit of verified project media
│   └── missing-assets.md             # Cloud archives & pending integration log
├── src/
│   ├── app/
│   │   ├── api/inquiry/route.ts      # Server-side inquiry handling & email dispatch
│   │   ├── about/page.tsx            # Creative collective story & team profiles
│   │   ├── contact/page.tsx          # Inquiry submission & direct WhatsApp CTA
│   │   ├── privacy/page.tsx          # Privacy policy draft
│   │   ├── services/page.tsx         # Deep dive into the 4 agency services
│   │   ├── work/
│   │   │   ├── page.tsx              # Complete filtered portfolio showcase
│   │   │   └── [slug]/page.tsx       # Dynamic project case study pages
│   │   ├── globals.css               # Design system variables & custom utilities
│   │   ├── layout.tsx                # Global SEO metadata, layout & navigation
│   │   ├── not-found.tsx             # Custom branded 404 page
│   │   └── page.tsx                  # Cinematic homepage & showreel
│   ├── components/
│   │   ├── Footer.tsx                # Site footer with verified contact info
│   │   ├── HeroShowreel.tsx          # Master headline & interactive video showcase
│   │   ├── InquiryForm.tsx           # Validated contact form with INR tiers
│   │   ├── Navbar.tsx                # Fixed glass navigation & mobile drawer
│   │   ├── VideoCard.tsx             # Aspect-ratio aware project cards
│   │   └── VideoModal.tsx            # Fullscreen modal player (16:9 & 9:16)
│   ├── config/
│   │   └── site.ts                   # Central agency configuration & contact settings
│   └── data/
│       ├── projects.ts               # Structured portfolio database (26 projects)
│       ├── services.ts               # 4 agency service verticals & deliverables
│       └── team.ts                   # Verified profiles for Narottam, Aditya, Prashant
├── .env.example
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the Next.js development server
npm run dev

# 3. Open your browser
# Navigate to http://localhost:3000
```

---

## 5. Production Build & Validation

```bash
# Verify static build and TypeScript types
npm run build

# Start production server
npm run start
```

---

## 6. Vercel Deployment Instructions (`renderrush.in`)

1. **Push repository to GitHub / GitLab:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete Render Rush creative agency website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import into Vercel:**
   - Log into [Vercel](https://vercel.com).
   - Select **Add New... &rarr; Project**.
   - Import your Render Rush Git repository.
   - Framework preset will automatically detect **Next.js**.

3. **Configure Environment Variables:**
   Under **Settings &rarr; Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://renderrush.in`
   - `RESEND_API_KEY` = *(Optional: your Resend API key for automated contact form forwarding)*

4. **Add Custom Domain:**
   - Under **Project Settings &rarr; Domains**, enter `renderrush.in` and `www.renderrush.in`.
   - Update DNS records at your domain registrar:
     - `A Record`: `@` points to `76.76.21.21`
     - `CNAME Record`: `www` points to `cname.vercel-dns.com`
   - SSL certificates are automatically provisioned by Vercel upon DNS propagation.
