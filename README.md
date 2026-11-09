# Pranav Kulkarni — Software Engineer Portfolio

A responsive, single-page portfolio for Pranav Kulkarni, a Computer Science and Engineering student at B.M.S. College of Engineering. It features BioAuth, a face and voice biometric login system, plus PawCare (a team project) and other work.

## Features

- Dark and light themes, smooth section navigation, motion, and visible keyboard focus.
- BioAuth case study with screenshots, architecture, testing, and a link to the interactive walkthrough. The BioAuth source is private and available to reviewers on request.
- PawCare shown as a 4-person team project, with my own contribution stated separately.
- Downloadable resume at `public/Pranav-Kulkarni-Resume.pdf`.
- An optional LeetCode section that appears once a profile link and stats are added in `lib/content.ts`.

## Tech stack

Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React and Biome.

## Edit the content

All personal content lives in `lib/content.ts`: profile, skills, projects and LeetCode stats.

## Run locally

Requires Node.js 20.9+ and pnpm (via Corepack).

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open `http://localhost:3000`. Before pushing, run `corepack pnpm check` and `corepack pnpm build`.

## Deploy

Import this repository into [Vercel](https://vercel.com/new); no environment variables are needed. Optionally set `SITE_URL` to the final HTTPS address for canonical and social-preview links.

## Credits

The site design and code are adapted, with permission, from [Shobhit Gupta's portfolio](https://github.com/shobhitguptacs/portfolio).

## Contact

**Pranav Kulkarni** · [GitHub](https://github.com/glife8481) · [LinkedIn](https://www.linkedin.com/in/pranav-kulkarni-pk8481) · <pk6437110@gmail.com>

Copyright © 2026 Pranav Kulkarni. Content and personal information are not licensed for reuse.
