# Mahmoud ABD ELKream — Portfolio

> From Figma to shipped React — award-winning product design for healthcare and e-commerce.

The personal portfolio of Mahmoud ABD ELKream, Front-End Developer & Product Designer based in Alexandria, Egypt.

## Live Site

The portfolio is deployed on Vercel. Open it at the preview URL or visit the production deployment once connected.

## What's Inside

Six pages, all live and reachable:

| Route | Page | What's on it |
|-------|------|-------------|
| `/` | **Home** | Hero with one-line claim + 2 CTAs, featured work strip (3 cards), awards strip, about teaser, contact CTA |
| `/about` | **About** | Real photo + story (4 paragraphs) + core skills grid (10 skills) + experience timeline (5 roles) |
| `/work` | **Work** | Lead case (Medoniq, full-width card) + project grid (6 cards: WEflex, Medoniq mobile, HealthTrack, Serinia, TEDx, IEEE EUI SB) |
| `/work/medoniq` | **Lead Case: Medoniq** | Hero + award badge, role, Problem, Solution, Design Process (4 phases), Engineering, Outcome (iSchool 1st Place), Gallery |
| `/case-studies` | **Case Studies** | 7 in-depth write-ups: Aqua Flow (lead), IEEE YESIST Malaysia, IEEE YESIST Tunisia, iSchool 1st, ECPC, WorldSkills, ISEF/ISF |
| `/contact` | **Contact** | Hero + interests list + direct contact links (email/LinkedIn/GitHub) + working form (Name/Email/Message) |

Every page's primary CTA ladders up to one action: **Contact → Send message**.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + inline styles
- **UI Components:** shadcn/ui (New York) + Lucide icons
- **Images:** `next/image` with static imports from `/public/images/`
- **Hosting:** Vercel (free tier)

## Identity Kit

The portfolio uses a consistent **Crystal Blue** identity system:
- Background: `#0a1628` (deep blue night sky)
- Accent: `#4da8da` (luminous bright blue)
- Title text: `#e8f0f8` (cool white with blue tint)
- Muted text: `#7a9bb8` (blue-gray)
- Typography: Playfair Display (display) + Inter (body), with system-ui fallback

## Featured Work

### Medoniq — Digital Healthcare Platform (Lead Case)
Full-stack web + mobile app for family-centered healthcare management: medication tracking, secure health records, and doctor connectivity. Won the **iSchool Startup Teens 2025 1st Place + Promising Startup Award**.

### Other Projects
- **WEflex** — Netflix-inspired streaming web platform
- **HealthTrack** — Wellness companion app (light/dark mode)
- **Serinia** — Arabic RTL fashion e-commerce
- **TEDx Dokki Youth** — Official digital event platform
- **IEEE EUI SB** — Student Branch high-board leadership page
- **Aqua Flow** — Smart energy conversion system (IEEE YESIST international finalist)

## Awards & Recognition

- 🏆 1st Place — iSchool Startup Teens 2025
- Top 1000 Worldwide — IEEE YESIST12 Malaysia 2025
- 5th in Egypt — IEEE YESIST12 Tunisia 2024
- Top 9 in Egypt — ECPC 2023–2025 (3 consecutive years)
- National Representative — WorldSkills Egypt 2023–2024
- Finalist — Intel ISEF & ISF 2023–2025

## Getting Started

```bash
# Install dependencies
bun install

# Run the dev server
bun run dev

# Open http://localhost:3000
```

## Build

```bash
bun run build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (nav + footer + identity kit)
│   ├── page.tsx                # Home
│   ├── about/page.tsx          # About
│   ├── work/
│   │   ├── page.tsx            # Work index
│   │   └── medoniq/page.tsx    # Lead case (Medoniq deep dive)
│   ├── case-studies/page.tsx   # Case studies
│   └── contact/page.tsx        # Contact (client component, form)
├── components/
│   ├── site-nav.tsx            # Sticky nav with active-link highlighting
│   ├── interactive.tsx         # HoverLink + HoverCard client components
│   └── ui/                     # shadcn/ui component library
public/
└── images/                     # All real work captures + AI tissue
```

## Contact

- **Email:** mahmoudabdelkreambusiness@gmail.com
- **LinkedIn:** [Mahmoud ABD ELKream](https://linkedin.com)
- **GitHub:** [mahmoud-abdelkream](https://github.com)
- **Location:** Alexandria, Egypt

## License

MIT — feel free to reference the structure, but the content (case studies, images, awards) is personal.

---

© 2026 Mahmoud ABD ELKream · Built with Next.js, React, and Tailwind CSS
