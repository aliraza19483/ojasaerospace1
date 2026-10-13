/**
 * Global Scroll Reveal Animation System for OJAS Aerospace
 * Inspired by luxury architectural & aerospace design (racontractor.in & Apple style)
 * Provides smooth staggered glide-up animations on viewport entry.
 */

const REVEAL_SELECTORS = [
  ".hp-heading",
  ".sectionHeader",
  ".pageIntro",
  ".section-intro",
  ".fleetShowcaseHeader > h2",
  ".fleetShowcaseHeader > p",
  ".telemetryLiveBar",
  ".fleetHeroCard",
  ".fleetRibbon",
  ".solution-workspace",
  ".solution-feature",
  ".solution-choice",
  ".technology-pillars",
  ".pillar-card",
  ".fourServiceCard",
  ".networkTierCard",
  ".networkAdvantageCard",
  ".networkFieldCard",
  ".facilitiesTableWrapper",
  ".visionCard",
  ".missionCard",
  ".approachCallout",
  ".coreValueCard",
  ".storyShowcaseCard",
  ".miluStrategicBanner",
  ".miluFeatureCard",
  ".categoryHeroFeature",
  ".categorySpecsCard",
  ".supportedSvcPill",
  ".teamCard",
  ".jobGrid article",
  ".partner",
  ".sectionBlock",
  "[data-reveal]",
  ".scroll-reveal",
].join(", ");

let observer: IntersectionObserver | null = null;
let debounceTimer: number | null = null;

export function initScrollReveal() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Check prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(REVEAL_SELECTORS).forEach((el) => {
      el.classList.add("reveal-visible");
    });
    return;
  }

  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add("reveal-visible");
          observer?.unobserve(target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  applyScrollReveal();
}

export function applyScrollReveal() {
  if (!observer || typeof document === "undefined") return;

  const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS);

  elements.forEach((el) => {
    if (el.classList.contains("reveal-visible")) return;

    if (!el.classList.contains("scroll-reveal-item")) {
      el.classList.add("scroll-reveal-item");

      // Stagger child cards in grids
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((c) =>
          c.classList.contains("scroll-reveal-item")
        );
        const index = siblings.indexOf(el);
        if (index > 0) {
          const delay = Math.min(index * 90, 500); // Max 500ms cascade
          el.style.setProperty("--reveal-delay", `${delay}ms`);
        }
      }
    }

    // If already in viewport on mount, reveal smoothly
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => {
        el.classList.add("reveal-visible");
      }, 60);
    } else {
      observer?.observe(el);
    }
  });
}

export function triggerScrollRevealUpdate() {
  if (typeof window === "undefined") return;
  if (debounceTimer) return;
  debounceTimer = window.setTimeout(() => {
    debounceTimer = null;
    applyScrollReveal();
  }, 60);
}
