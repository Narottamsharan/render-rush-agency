# Render Rush — Missing & Cloud-Hosted Assets Report

This document records media items that currently rely on external cloud drive links or placeholder visual assets, along with recommended migration steps for production.

---

## 1. Cloud-Hosted Video Folders (Requires Direct MP4 / Vimeo / YouTube Embeds for Direct In-App Playback)

The following projects from **Aditya Kumar Ray**'s portfolio are hosted in Google Drive folders rather than direct streaming video players:

1. **Foreign Podcasts**
   - **Drive URL:** `https://drive.google.com/drive/folders/1UNcyCmMnkqChNMGLDUaqCXHVkcnZlOxx`
   - **Recommendation:** Upload individual master MP4 files to Vimeo, YouTube (unlisted/public), or high-speed CDN / Cloudflare Stream to enable instant modal streaming without requiring user redirection.

2. **Assam Cultural Heritage Documentary (45 Min)**
   - **Drive URL:** `https://drive.google.com/drive/folders/1o90xpZGn70sSmZ0TbK1Ed0Kj7iVxoHqd`
   - **Recommendation:** Host full film on YouTube or Vimeo showcase with custom trailer/teaser cut for the website.

3. **Second Ride — Automotive Product & Motion Design**
   - **Drive URL:** `https://drive.google.com/drive/folders/1IGL1bCw1CtsB4n3gN41vN6hdyeUXNbn9`
   - **Recommendation:** Export a 60-second motion graphics reel / MP4 for web showreel integration.

---

## 2. Brand Media & Social Accounts (Per Official Guidelines)

1. **Instagram Account URL:**
   - **Status:** Not yet provided.
   - **Handling:** Configured in `src/config/site.ts` with `instagram: null`. The public link remains hidden until official account handle is confirmed.

2. **Booking / Calendar Link:**
   - **Status:** Not provided.
   - **Handling:** Hidden from navigation, hero, and footer to prevent broken user journeys.

3. **Email Delivery API (Resend / SendGrid):**
   - **Status:** Pending production API key.
   - **Handling:** In local/preview mode without `RESEND_API_KEY`, the contact form validates inputs, logs the inquiry, and provides instant fallback to direct WhatsApp (+91 6263340830).
