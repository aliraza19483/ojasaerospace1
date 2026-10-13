<<<<<<< HEAD
# OJAS Aerospace — V10

V10 refactors the V9 visual baseline around the finalized OJAS information architecture.

## Main routes
- `/`
- `/sectors`
- `/solutions`
- `/services`
- `/technology`
- `/milu-ai-network` — Infrastructure / MILU AI Network
- `/milu-ai`
- `/network`
- `/partners`
- `/news`
- `/team`
- `/careers`
- `/about`
- `/contact`

Solution and service detail routes are generated from the data in `src/App.tsx`.

## Content architecture
Content is data-driven in the main application file so categories, services, technology items, news, team and careers can be moved into a CMS/API later without changing the visual components.

News & Media is seeded with 3 entries for each filter: News, Field Stories, Media, Technology and Events.

Team and Careers contain clearly marked placeholders rather than invented real people or job openings.

## Run locally
```bash
npm install
npm run dev
```

Build:
```bash
npm run build
```

## Motion setting
Animations (hero video, satellite drift, rocket launch, orbit) now run by default,
even if the OS has "reduce motion" / "show animations" turned off.
- `?motion=reduced` forces reduced mode (remembered in localStorage); `?motion=full` forces full; `?motion=auto` clears the override.
- To follow the OS "reduce motion" setting again, set `RESPECT_OS_REDUCED_MOTION = true` in `src/motion.ts`.
=======
# ojasaerospace1
>>>>>>> 7bded73b2d948606557bf11f38724a21d94cd7cc
