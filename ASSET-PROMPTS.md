# Reference design assets

Generated with the built-in image generation tool. Original rocket silhouette retained unchanged in `src/assets/ojas-rocket.svg`; original satellite retained in `src/assets/satelight.png`.

The hero uses the original `src/assets/main_4.mp4` video. The generated Earth image below is unused and retained only as a previous concept.

## Earth — `src/assets/earth-night.png`

Prompt: Create a production website background asset, photoreal cinematic low Earth orbit at night, landscape 1536x1024. Curved Earth fills lower 45 percent with India region city lights amber gold, delicate electric blue atmosphere on the horizon, sunrise glow at extreme left horizon. Upper 55 percent deep nearly black space with fine subtle blue star field slightly concentrated upper right. Dark clean negative space upper left for typography. No rocket, no satellite, no smoke, no text, no UI, no borders. Premium aerospace photography.

The active transition now uses three procedural SVG sweep layers in `src/Hero.jsx` with geometry from `src/launchMotion.js`. The raster smoke below is an unused earlier concept.

## Smoke — `src/assets/launch-smoke.png`

Prompt: Create one production VFX asset: dense photoreal white rocket launch exhaust smoke cloud isolated on truly transparent alpha background. Wide landscape 1536x1024 composition. A broad billowing cloud bank fills bottom 70 percent, rising into a taller central mound, many intricate rounded turbulent white and pale silver cloud lobes, warm amber light from above center, soft blue-gray shadows, realistic volumetric texture. Opaque cloud interior, naturally soft transparent perimeter, cloud base extends flush to lower canvas edge, cloud bank reaches both side edges near bottom. No rocket, no ground, no sky, no text, no checkerboard background, no UI. Transparency required. High-end cinematic launch plume.

## Scroll choreography

Start → launch → ascend → full cover → transition → reveal. The viewport smoke overlay persists while the actual solutions section scrolls beneath it. Reduced-motion preferences disable the launch and use ordinary document scrolling. All imagery is decorative concept art.


