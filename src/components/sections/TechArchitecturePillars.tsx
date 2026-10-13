import React, { useState } from "react";

export type TechPillar = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  description: string;
  technologies: { name: string; detail: string }[];
  throughput: string;
};

const PILLARS: TechPillar[] = [
  {
    id: "sense",
    number: "PILLAR 01",
    title: "SENSE",
    subtitle: "Airborne Sensor Integration & Aerial Telemetry",
    icon: "📡",
    badge: "INPUT LAYER",
    description: "Multispectral, thermal, and optoelectronic payloads capture raw ground truth at sub-centimeter ground sample distances (GSD).",
    throughput: "Sub-Centimeter GSD · Real-Time CAN-Bus Telemetry",
    technologies: [
      { name: "Multispectral NDVI/NDRE", detail: "5-band calibrated optical sensors for vegetative health scoring" },
      { name: "4K 30x Optical Gimbals", detail: "Tri-axis stabilized inspection optics for industrial pylons & towers" },
      { name: "Dynamometer-Calibrated ESCs", detail: "Continuous motor RPM, amp draw, and thermal telemetry feedback" },
      { name: "Ultrasonic / LiDAR Altimeters", detail: "Ground-tracking radar terrain-following down to 1.5m AGL" },
    ],
  },
  {
    id: "understand",
    number: "PILLAR 02",
    title: "UNDERSTAND",
    subtitle: "MILU AI Edge Inferencing & Spatial Modeling",
    icon: "🧠",
    badge: "PROCESSING LAYER",
    description: "Edge and cloud neural models ingest raw sensor data to identify crop stress, classify anomalies, and generate mission plans.",
    throughput: "Edge Inferencing < 120ms · 94.2% Anomaly Precision",
    technologies: [
      { name: "MILU AI Crop Stress Model", detail: "Quantifies nitrogen deficiency, stem-borer infestation, and drought" },
      { name: "3D Photogrammetric DSM", detail: "High-density terrain elevation point clouds for precision flight contours" },
      { name: "Dynamic Corridor Router", detail: "Automated geofencing avoiding obstacles and no-fly buffers" },
      { name: "Digital Sky Compliance Engine", detail: "Automated airspace validation against DGCA flight authorization APIs" },
    ],
  },
  {
    id: "act",
    number: "PILLAR 03",
    title: "ACT",
    subtitle: "Autonomous Precision Execution & Heavy Payloads",
    icon: "⚡",
    badge: "OUTPUT LAYER",
    description: "Autonomous high-torque drone airframes execute micron-level spray passes, logistics cargo drops, and critical infrastructure intervention.",
    throughput: "Up to 50 kg Payload · 100-250 Micron Atomization",
    technologies: [
      { name: "Centrifugal Micron Atomizers", detail: "Electrostatic droplet control minimizing agrochemical drift" },
      { name: "AYK 350 PRO Heavy Lift VTOL", detail: "Hybrid long-range vertical takeoff airframe for regional cargo" },
      { name: "Automated Swarm Coordination", detail: "Multi-aircraft synchronized passes across large enterprise farms" },
      { name: "District Hot-Swap Staging", detail: "15-minute battery and chemical turnover at block Drone Centres" },
    ],
  },
];

export function TechArchitecturePillars() {
  const [activePillar, setActivePillar] = useState<string>("sense");

  return (
    <div className="techArchitectureWrapper">
      <div className="techArchitectureHeader">
        <span className="archHeaderBadge">CORE TECHNOLOGY ARCHITECTURE</span>
        <h3>The 3-Pillar Closed-Loop Framework</h3>
        <p>
          Every system engineered at OJAS Aerospace operates within an interconnected continuum: raw sensor acquisition feeds edge intelligence, which commands precision field execution.
        </p>
      </div>

      {/* 3 Pillars Connected Grid */}
      <div className="techPillarsGrid">
        {PILLARS.map((p, idx) => {
          const isSelected = activePillar === p.id;
          return (
            <div
              key={p.id}
              className={`techPillarCard ${isSelected ? "active" : ""}`}
              onClick={() => setActivePillar(p.id)}
            >
              <div className="pillarCardTop">
                <div className="pillarHeaderLeft">
                  <span className="pillarIcon">{p.icon}</span>
                  <div>
                    <span className="pillarNum">{p.number}</span>
                    <h4>{p.title}</h4>
                  </div>
                </div>
                <span className="pillarBadge">{p.badge}</span>
              </div>

              <p className="pillarSub">{p.subtitle}</p>
              <p className="pillarDesc">{p.description}</p>

              <div className="pillarTechList">
                <small>ENGINEERED MODULES</small>
                <ul>
                  {p.technologies.map((t, i) => (
                    <li key={i}>
                      <strong>{t.name}</strong>
                      <span>{t.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pillarThroughput">
                <small>BENCHMARK THROUGHPUT</small>
                <span>{p.throughput}</span>
              </div>

              {/* Connecting Flow Indicator (between Pillar 1->2 and 2->3) */}
              {idx < PILLARS.length - 1 && (
                <div className="pillarConnectorArrow" aria-hidden="true">
                  <span>→</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Closed-Loop Feedback Callout */}
      <div className="architectureFeedbackLoop">
        <div className="loopIcon">🔄</div>
        <div className="loopContent">
          <strong>Continuous Real-World Feedback Loop</strong>
          <p>
            Field spray logs and flight telemetry stream back into the Dehradun Central Engineering Lab dynamometer and neural training pipelines, continuously refining motor curves and AI diagnostic accuracy.
          </p>
        </div>
      </div>
    </div>
  );
}
