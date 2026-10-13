import React, { useEffect } from "react";
import { navigate } from "../../utils/navigation";

export interface CrumbItem {
  label: string;
  path: string;
}

const DEFAULT_CRUMB_NAMES: Record<string, string> = {
  "/categories": "Drone Categories",
  "/services": "Core Services",
  "/services/drone-sales": "Drone Sales",
  "/services/drone-sale": "Drone Sales",
  "/services/drone-repair-maintenance": "Repair & Maintenance",
  "/services/drone-training": "Drone Pilot Training",
  "/services/drone-rental": "Drone Rental Fleet",
  "/milu-ai": "MILU AI Agro Ecosystem",
  "/network": "Distributed Network",
  "/infrastructure": "Distributed Network",
  "/milu-ai-network": "Distributed Network",
  "/about": "About OJAS",
  "/contact": "Contact & HQ",
  "/partners": "Partnerships",
  "/team": "Leadership & Team",
  "/careers": "Careers",
  "/news": "Field Updates",
  "/sectors": "Operating Sectors",
  "/solutions": "Solutions",
  "/technology": "Technology Stack",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service",
  "/compliance": "DGCA Compliance",
};

export function Breadcrumbs({ items }: { items?: CrumbItem[] }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  // Derive breadcrumbs if not explicitly passed
  const crumbs: CrumbItem[] = items || (() => {
    const list: CrumbItem[] = [{ label: "Home", path: "/" }];
    if (pathname === "/" || pathname === "/home") return list;

    // Handle nested services
    if (pathname.startsWith("/services/")) {
      list.push({ label: "Core Services", path: "/services" });
      const leafName = DEFAULT_CRUMB_NAMES[pathname] || "Service Details";
      list.push({ label: leafName, path: pathname });
      return list;
    }

    // Direct pages
    const pageLabel = DEFAULT_CRUMB_NAMES[pathname] || pathname.replace("/", "").replace(/-/g, " ");
    list.push({ label: pageLabel, path: pathname });
    return list;
  })();

  // Dynamically inject BreadcrumbList Schema JSON-LD
  useEffect(() => {
    const scriptId = "breadcrumbs-schema-jsonld";
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }

    const schemaObj = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.label,
        item: `https://www.ojasaerospace.com${crumb.path === "/" ? "/" : crumb.path}`,
      })),
    };

    scriptEl.textContent = JSON.stringify(schemaObj);

    return () => {
      // Cleanup schema tag on unmount
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [crumbs]);

  return (
    <nav aria-label="Breadcrumbs" className="breadcrumbsNav">
      <ol className="breadcrumbsList">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.path + idx} className="breadcrumbItem">
              {idx > 0 && <span className="breadcrumbSep" aria-hidden="true">/</span>}
              {isLast ? (
                <span className="breadcrumbCurrent" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.path}
                  className="breadcrumbLink"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(crumb.path);
                  }}
                >
                  {crumb.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
