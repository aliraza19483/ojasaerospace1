export const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const solutionPath = (s: string) => `/solutions/${slug(s)}`;

export const servicePath = (s: string) => `/services/${slug(s)}`;

export function navigate(path: string) {
  window.location.assign(path);
}

export function go(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function pageLabel() {
  const p = location.pathname;
  if (p === "/sectors") return "SECTORS";
  if (p === "/solutions") return "SOLUTIONS";
  if (p.startsWith("/solutions/")) return "SOLUTION";
  if (p === "/services") return "SERVICES";
  if (p.startsWith("/services/")) return "SERVICE";
  if (p === "/technology") return "TECHNOLOGY";
  if (p === "/milu-ai") return "MILU AI";
  if (p === "/milu-ai-network") return "INFRASTRUCTURE";
  if (p === "/network") return "NETWORK";
  if (p === "/partners") return "PARTNERS";
  if (p === "/news") return "NEWS & MEDIA";
  if (p === "/team") return "TEAM";
  if (p === "/careers") return "CAREERS";
  if (p === "/about") return "ABOUT";
  if (p === "/contact") return "CONTACT";
  return "OJAS";
}
