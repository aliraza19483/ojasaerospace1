// Single source of truth for "should we animate?".
// Priority: URL override (?motion=full | ?motion=reduced, remembered) -> default.
// The result is mirrored on <html data-motion="full|reduced"> so CSS and JS agree.
//
// RESPECT_OS_REDUCED_MOTION:
//   false (default) -> animations always run unless a visitor explicitly opts out
//                      with ?motion=reduced. Many Windows/Android/low-power devices
//                      have "animations off" enabled system-wide, which used to
//                      silently kill every animation on the site.
//   true            -> also follow the OS "reduce motion" setting (accessibility-strict).
const RESPECT_OS_REDUCED_MOTION = false;
const query = window.matchMedia("(prefers-reduced-motion: reduce)");
const KEY = "ojas-motion";
const listeners = new Set<() => void>();

function readOverride(): "full" | "reduced" | null {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("motion");
    if (fromUrl === "full" || fromUrl === "reduced") localStorage.setItem(KEY, fromUrl);
    if (fromUrl === "auto") localStorage.removeItem(KEY);
    const saved = localStorage.getItem(KEY);
    return saved === "full" || saved === "reduced" ? saved : null;
  } catch {
    return null;
  }
}

export function isMotionReduced(): boolean {
  const override = readOverride();
  if (override) return override === "reduced";
  return RESPECT_OS_REDUCED_MOTION ? query.matches : false;
}

function apply() {
  document.documentElement.dataset.motion = isMotionReduced() ? "reduced" : "full";
  listeners.forEach((fn) => fn());
}

export function onMotionChange(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

apply();
query.addEventListener("change", apply);
