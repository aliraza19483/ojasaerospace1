import React from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { navigate, servicePath } from "../../utils/navigation";

export interface ServiceMenuItem {
  slug: string;
  url: string;
  title: string;
  categoryTag: string;
  tagline: string;
  badge: string;
  svgIcon: React.ReactNode;
}

export const servicesMenuList: ServiceMenuItem[] = [
  {
    slug: "drone-sales",
    url: "/services/drone-sales",
    title: "Drone Sales",
    categoryTag: "OEM Airframes & Procurement",
    tagline: "Agricultural sprayers, logistics VTOL, cinematography and industrial platforms with DGCA UIN registration support.",
    badge: "Type-Certified",
    svgIcon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" strokeOpacity="0.4" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="5" r="2.5" />
        <circle cx="19" cy="5" r="2.5" />
        <circle cx="5" cy="19" r="2.5" />
        <circle cx="19" cy="19" r="2.5" />
        <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
      </svg>
    ),
  },
  {
    slug: "drone-repair-maintenance",
    url: "/services/drone-repair-maintenance",
    title: "Repair & Maintenance",
    categoryTag: "Propulsion & Diagnostics Bay",
    tagline: "Trained technicians, bench dynamometer calibration, genuine OEM replacement parts, and Annual Maintenance Contracts (AMC).",
    badge: "Turnaround < 48h",
    svgIcon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    slug: "drone-training",
    url: "/services/drone-training",
    title: "Drone Training",
    categoryTag: "Certified Flight Academy",
    tagline: "Curriculum-based flight instruction, simulator flight hours, agricultural spraying protocols, and pilot certification.",
    badge: "DGCA Pilots",
    svgIcon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    slug: "drone-rental",
    url: "/services/drone-rental",
    title: "Drone Rental",
    categoryTag: "Turnkey Field Fleet",
    tagline: "Flexible daily, weekly, or seasonal equipment leases—available with certified operators (wet) or platform only (dry).",
    badge: "Dry & Wet Leases",
    svgIcon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
  },
];

export function ServicesMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div
      className="companyMenu servicesMenuModal"
      role="dialog"
      aria-label="Services Menu"
      aria-modal="true"
    >
      <div className="companyMenuInner servicesMenuInner">
        <div className="servicesMenuHeader">
          <Eyebrow accent="gold">LIFECYCLE & FLEET CAPABILITIES</Eyebrow>
          <h3>
            Aerospace services for
            <br />
            <em>dependable field operations.</em>
          </h3>
          <p className="servicesMenuIntro">
            Explore OJAS complete lifecycle support—from DGCA-certified airframe procurement and fast-turnaround workshop repairs to certified academy pilot training and seasonal rental fleets.
          </p>
          <div className="servicesMenuHeaderActions">
            <button
              className="btn goldBtn"
              style={{ padding: "10px 22px" }}
              onClick={() => {
                onClose();
                navigate("/services");
              }}
            >
              VIEW ALL SERVICES <b>→</b>
            </button>
            <button
              className="btn outlineBtn"
              style={{ padding: "10px 18px", marginLeft: "10px" }}
              onClick={() => {
                onClose();
                navigate("/contact");
              }}
            >
              REQUEST A QUOTE ↗
            </button>
          </div>
        </div>

        <div className="servicesMenuGrid">
          {servicesMenuList.map((item) => (
            <button
              key={item.slug}
              className="serviceMenuItem"
              onClick={() => handleSelect(item.url)}
            >
              <div className="serviceMenuItemTop">
                <div className="serviceMenuItemIcon">
                  {item.svgIcon}
                </div>
                <span className="serviceMenuBadge">{item.badge}</span>
              </div>
              <div className="serviceMenuItemCopy">
                <span className="serviceCategoryTag">{item.categoryTag}</span>
                <h4>{item.title}</h4>
                <small>{item.tagline}</small>
              </div>
              <b className="serviceMenuArrow">↗</b>
            </button>
          ))}
        </div>
      </div>

      <div className="servicesMenuFooter">
        <div className="servicesMenuFooterInner">
          <div className="servicesMenuFooterItem">
            <span className="footerDot" />
            <span className="footerLabel">DISTRICT DRONE PORTS:</span>
            <span>Dehradun HQ · Rishikesh · Haridwar · Roorkee · Kotdwar · Haldwani</span>
          </div>
          <a href="tel:01354316767" className="servicesMenuHelpline">
            <span>📞</span> HELPLINE: 0135 431 6767
          </a>
        </div>
      </div>
    </div>
  );
}
