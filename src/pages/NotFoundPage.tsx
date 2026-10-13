import React from "react";
import { navigate } from "../utils/navigation";
import { triggerInquiry } from "../components/ui/InquiryModal";

export function NotFoundPage() {
  const quickLinks = [
    {
      title: "Drone Categories",
      desc: "Agricultural, Logistics, Photography & Industrial aircraft platforms.",
      path: "/categories",
    },
    {
      title: "Core Services",
      desc: "Sales, certified Repair, Pilot Training & Rental fleets.",
      path: "/services",
    },
    {
      title: "MILU AI Agro",
      desc: "Field intelligence & sugarcane belt ecosystem.",
      path: "/milu-ai",
    },
    {
      title: "Distributed Network",
      desc: "Dehradun HQ, district Drone Ports & block Drone Centres.",
      path: "/network",
    },
    {
      title: "Command Contact",
      desc: "Headquarters desk, regional inquiries & support.",
      path: "/contact",
    },
    {
      title: "About OJAS",
      desc: "Vision, mission and our 7 core operating values.",
      path: "/about",
    },
  ];

  return (
    <div className="notFoundContainer">
      <div className="notFoundGlitchCode">404</div>
      <h1 className="notFoundTitle">Airborne Vector Not Found</h1>
      <p className="notFoundDesc">
        The coordinates or flight path you requested are not currently mapped on our radar.
        The page may have been relocated, or is currently undergoing calibration. Select a verified
        mission vector below to return to safe airspace.
      </p>

      <div className="notFoundActionGrid">
        {quickLinks.map((item) => (
          <div
            key={item.path}
            className="notFoundCard"
            onClick={() => navigate(item.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") navigate(item.path);
            }}
          >
            <h4>
              {item.title}
              <span aria-hidden="true">→</span>
            </h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "14px 28px",
            fontSize: "14px",
            fontWeight: 700,
            background: "linear-gradient(135deg, #f2c45a 0%, #c48c26 100%)",
            color: "#030208",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 4px 18px rgba(242, 196, 90, 0.25)",
          }}
        >
          Return to Central Base (Homepage)
        </button>
        <button
          onClick={() => triggerInquiry({ title: "Broken Link / Flight Vector Report", service: "Other Inquiries" })}
          style={{
            padding: "14px 24px",
            fontSize: "14px",
            fontWeight: 600,
            background: "rgba(255, 255, 255, 0.08)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Report Missing Vector / Contact Ops
        </button>
      </div>
    </div>
  );
}
