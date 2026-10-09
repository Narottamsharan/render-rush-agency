# Render Rush — Portfolio Media & Asset Inventory

**Date:** October 2026  
**Agency:** Render Rush (https://renderrush.in)  
**Audited Sources:**
1. Narottam Sharan (`https://narottamvisuals.in/`)
2. Aditya Kumar Ray (`https://adityakumarray.vercel.app/`)
3. Prashant Singh (`https://prashantkits.vercel.app/`)

---

## 1. Verified Video Assets Summary

| Project ID | Title | Category | Creator | Client / Attribution | Video Provider | Aspect Ratio | Verified Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ps-bollywood-vishal` | How to Enter Bollywood ft. Evergreen Vishal | Podcasts & Interviews | Prashant Singh | Spreadly TV | YouTube (`kS5hc63sUqs`) | 16:9 | Verified Active |
| `ps-africa-india` | Africa to India Journey | Documentaries | Prashant Singh | Spreadly TV | YouTube (`uxzw695OYOU`) | 16:9 | Verified Active |
| `ps-day-trading` | 7 Hard Truths About Day Trading ft. Advait | Podcasts & Interviews | Prashant Singh | Spreadly TV | YouTube (`HTPKNvnLcF8`) | 16:9 | Verified Active |
| `ps-time-money` | Your Time is Your Money | YouTube & Long Form | Prashant Singh | Spreadly TV | YouTube (`PLRbTtvlKk4`) | 16:9 | Verified Active |
| `ps-air-171` | AIR 171 — Full Story Explained | YouTube & Long Form | Prashant Singh | Vistaar News / Spreadly TV | YouTube (`mXu6Hybmy3U`) | 16:9 | Verified Active |
| `ps-radio-tv-siddhant` | Radio TV — RJ Siddhant | Podcasts & Interviews | Prashant Singh | CGFILMS / Spreadly TV | YouTube (`2EJf3rNB_TU`) | 16:9 | Verified Active |
| `ps-periods-health` | Periods — Medical Discussion | Podcasts & Interviews | Prashant Singh | Spreadly TV | YouTube (`_AWVBi7B15A`) | 16:9 | Verified Active |
| `ps-pregnancy-dr-aakansha`| All About Pregnancy ft. Dr. Sahu | Podcasts & Interviews | Prashant Singh | Spreadly TV | YouTube (`ZvZzvUsiP1o`) | 16:9 | Verified Active |
| `ps-manifest-future` | Manifest Your Future | YouTube & Long Form | Prashant Singh | Spreadly TV | YouTube (`UNUKZVQ7rvk`) | 16:9 | Verified Active |
| `ns-petrol-vs-diesel` | Petrol vs Diesel — Which One Should You Modify? | Commercials | Narottam Sharan | Auto Creator | YouTube (`GE4aiZVFxZY`) | 9:16 | Verified Active |
| `ns-car-customization`| India's Car Customization Industry | Commercials | Narottam Sharan | Narottam Sharan | YouTube (`gdT3sYKeS4w`) | 9:16 | Verified Active |
| `ns-yzen-meta-ad` | YZEN Media — High-Conversion Meta Ad | Brand Content | Narottam Sharan | YZEN Media | YouTube (`bOmuwIUXzn8`) | 9:16 | Verified Active |
| `ns-home-tour` | Luxury Home Tour — International Client | YouTube & Long Form | Narottam Sharan | International Client | YouTube (`E6sB17ZdDV0`) | 16:9 | Verified Active |
| `ns-nayan-sukh` | Nayan Sukh Exclusive Brand Reel | Commercials | Narottam Sharan | Nayan Sukh | YouTube (`fDHm0pd2b3M`) | 9:16 | Verified Active |
| `ns-brand-content-creation`| How Do You Make Content for Your Brand?| Brand Content | Narottam Sharan | Narottam Sharan | YouTube (`qNIV-Zm1bJw`) | 9:16 | Verified Active |
| `ns-governor-award` | Awarded by Honourable Governor of CG | Brand Content | Narottam Sharan | State Recognition | YouTube (`jFRUQFfjmXE`) | 9:16 | Verified Active |
| `ns-gdg-ambassador` | Google Student Ambassador Program 2026 | Brand Content | Narottam Sharan | Google Developers Group | YouTube (`_doFcCKT92A`) | 9:16 | Verified Active |
| `ns-brivet-medicine` | Brivet Medicine — Product & Motion | Commercials | Narottam Sharan | Brivet Healthcare | YouTube (`EdgAYZ2Hq9g`) | 9:16 | Verified Active |
| `ns-self-love` | Loving Myself Viral Short | Reels & Shorts | Narottam Sharan | Narottam Sharan | YouTube (`qzhznVj_HtE`) | 9:16 | Verified Active |
| `ns-escaping-emotions`| Escaping Your Emotions vs. Facing Them | Reels & Shorts | Narottam Sharan | Narottam Sharan | YouTube (`bEL75BVeYyE`) | 9:16 | Verified Active |
| `ns-unemployment-critique`| 4 Saal Ki Padhai Ke Baad Unemployment? | Reels & Shorts | Narottam Sharan | Narottam Sharan | YouTube (`Ef9tXPJFoAg`) | 9:16 | Verified Active |
| `ak-santosh-suna-reels` | Santosh Suna Sir — 30-Day Educational Reels | Reels & Shorts | Aditya Kumar Ray | Santosh Suna | Vimeo (`1124561463`) | 9:16 | Verified Active |
| `ak-brand-video-campaign`| Premium Brand Video & UGC Advertising | Commercials | Aditya Kumar Ray | Commercial Client | Vimeo (`1124563070`) | 16:9 | Verified Active |
| `ak-foreign-podcasts` | Foreign Podcasts Series | Podcasts & Interviews | Aditya Kumar Ray | International Creators | Google Drive Archive | Mixed | Cloud Folder |
| `ak-assam-documentary` | Assam Cultural Documentary (45 Min) | Documentaries | Aditya Kumar Ray | Assam Initiative | Google Drive Archive | 16:9 | Cloud Folder |
| `ak-second-ride` | Second Ride — Automotive Motion Design | Motion Graphics | Aditya Kumar Ray | Second Ride | Google Drive Archive | 16:9 | Cloud Folder |

---

## 2. Technical Embed & Player Architecture
- **YouTube Embeds:** Routed through `https://www.youtube-nocookie.com/embed/[id]?autoplay=1` with responsive 16:9 and 9:16 modal containers.
- **Vimeo Embeds:** Routed through `https://player.vimeo.com/video/[id]?autoplay=1&title=0&byline=0`.
- **Google Drive / Cloud Assets:** Handled gracefully via direct cloud-folder preview link and fallback viewer card without broken iframes.
- **Escape Key & Backdrop Click:** Immediately cleans up iframe elements to prevent lingering background audio.
