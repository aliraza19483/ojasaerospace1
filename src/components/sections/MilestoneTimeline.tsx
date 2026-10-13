import React, { useState } from "react";

export type Milestone = {
  year: string;
  tag: string;
  title: string;
  location: string;
  description: string;
  metrics: string;
  deliverables: string[];
};

const MILESTONES: Milestone[] = [
  {
    year: "2022",
    tag: "FOUNDATION & AEROSPACE R&D",
    title: "Aerodynamic Simulation & Computational Design",
    location: "Imperial Heights, Dehradun",
    description:
      "OJAS Aerospace was founded with a singular focus: bringing aeronautical engineering rigor to unmanned systems. Initiated computational fluid dynamics (CFD) modeling of high-lift airfoils for high-altitude mountain operations in Uttarakhand.",
    metrics: "Initial Airframe Modeling · Foothills Flight Proofs",
    deliverables: [
      "High-altitude CFD drag & thrust simulations",
      "Proprietary carbon-composite structural airframe blueprints",
      "Initial feasibility field testing in Dehradun foothills",
    ],
  },
  {
    year: "2023",
    tag: "AEROSPACE INFRASTRUCTURE",
    title: "In-House Dynamometer & Propulsion Safety Cage",
    location: "Dehradun Central Aerospace Bay",
    description:
      "Commissioned custom high-torque motor dynamometer thrust stands and an enclosed steel-mesh propulsion test cage in Dehradun. Began early edge AI sensor integration for agricultural stress detection.",
    metrics: "120+ Motor Stress Cycles · 0-Failure Benchmark",
    deliverables: [
      "Custom thrust-to-weight dynamometer test rig",
      "Motor temperature & ESC telemetry logging suite",
      "MILU AI seed architecture for edge computer vision",
    ],
  },
  {
    year: "2024",
    tag: "REGULATORY & TRAINING ALLIANCE",
    title: "DGCA RPTO Pilot Academy & Certification Cadets",
    location: "Uttarakhand Proving Grounds",
    description:
      "Formed training partnerships with DGCA-accredited Remote Pilot Training Organizations (RPTO). Successfully graduated 40+ certified commercial drone pilots with certified applicator and night flight authorizations.",
    metrics: "40+ Certified Pilots · 500+ Simulator Hours",
    deliverables: [
      "Structured RPTO ground school & simulator curriculum",
      "Hands-on agricultural spraying applicator training",
      "Formal civil aviation protocol & emergency checklists",
    ],
  },
  {
    year: "2025",
    tag: "FIELD EXECUTION & MULTI-STATE EXPANSION",
    title: "Sugarcane Belt Deployment & IFFCO Nano-Fertilizer",
    location: "Hardoi & Central Uttar Pradesh",
    description:
      "Scaled beyond Uttarakhand into the Terai sugarcane corridor. Deployed heavy agricultural drones for precision nano-urea application and launched Hardoi Agro Drone Port and Rupapur Block Drone Centre.",
    metrics: "Thousands of Acres Covered · 40% Input Savings",
    deliverables: [
      "District Drone Port & Block Drone Centre operational model",
      "Joint farmer outreach programs with agricultural leaders",
      "Field validation of AYK 350 PRO heavy payload VTOL",
    ],
  },
  {
    year: "2026+",
    tag: "INTELLIGENT NETWORK SCALING",
    title: "MILU AI Edge Deployment & Autonomous Air Corridors",
    location: "Pan-India Expansion",
    description:
      "Integrating Digital Sky airspace APIs, real-time multispectral NDVI health inferencing, and expanding the two-level Drone Port and Drone Centre model across northern India agricultural clusters.",
    metrics: "<90 Min Field Dispatch · Automated Airspace Clearance",
    deliverables: [
      "Automated flight logging & Digital Sky API compliance",
      "MILU AI edge inferencing for localized pest/disease detection",
      "Expansion into industrial monitoring and mountain cargo logistics",
    ],
  },
];

export function MilestoneTimeline() {
  const [activeYear, setActiveYear] = useState<string>("2026+");

  return (
    <div className="milestoneTimelineContainer">
      {/* Year Selector Tabs */}
      <div className="timelineYearNav">
        {MILESTONES.map((m) => (
          <button
            key={m.year}
            className={`timelineYearBtn ${activeYear === m.year ? "active" : ""}`}
            onClick={() => setActiveYear(m.year)}
          >
            <span className="yearNumber">{m.year}</span>
            <span className="yearDot" />
          </button>
        ))}
      </div>

      {/* Timeline Display Card */}
      <div className="timelineCardsTrack">
        {MILESTONES.map((item) => {
          const isSelected = activeYear === item.year;
          return (
            <div
              key={item.year}
              className={`timelineCardItem ${isSelected ? "selected" : ""}`}
            >
              <div className="timelineCardHeader">
                <div className="timelineYearPill">
                  <span>{item.year}</span>
                  <small>· {item.tag}</small>
                </div>
                <span className="timelineLocBadge">📍 {item.location}</span>
              </div>

              <h3>{item.title}</h3>
              <p className="timelineDesc">{item.description}</p>

              <div className="timelineMetricsStrip">
                <small>OPERATIONAL BENCHMARK</small>
                <strong>{item.metrics}</strong>
              </div>

              <div className="timelineDeliverables">
                <small>KEY MILESTONES DELIVERED</small>
                <ul>
                  {item.deliverables.map((deliv, idx) => (
                    <li key={idx}>
                      <span className="goldBullet">◆</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
