import React, { useState } from "react";
import { triggerInquiry } from "../ui/InquiryModal";

export type MapNode = {
  id: string;
  name: string;
  type: "HQ & Lab" | "District Drone Port" | "Block Drone Centre";
  tier: "TIER 01" | "TIER 02" | "TIER 03";
  status: "Verified Operational" | "Pilot Deployment" | "Active Expansion";
  statusColor: string;
  lat: string;
  lng: string;
  altitude: string;
  state: string;
  district: string;
  description: string;
  dispatchRadius: string;
  capabilities: string[];
  contact: string;
  address: string;
  // SVG coordinates on 800x520 canvas
  svgX: number;
  svgY: number;
};

const NETWORK_NODES: MapNode[] = [
  {
    id: "dehradun-hq",
    name: "Central Command & Aerospace Lab",
    type: "HQ & Lab",
    tier: "TIER 01",
    status: "Verified Operational",
    statusColor: "#10b981",
    lat: "30.3165° N",
    lng: "78.0322° E",
    altitude: "640m AMSL",
    state: "Uttarakhand",
    district: "Dehradun",
    description: "Central command oversee nationwide scheduling, dynamometer propulsion testing, avionics diagnostics, and MILU AI software platform development.",
    dispatchRadius: "Pan-India Command & State Fleet Oversight",
    capabilities: [
      "Motor Dynamometer & Thrust Stand Diagnostics",
      "Central MILU AI Neural Model Ingestion",
      "DGCA Airworthiness & Compliance Bureau",
      "National Pilot Certification Hub"
    ],
    contact: "0135 431 6767 · info@ojasspace.com",
    address: "Imperial Heights, Near DIT University, Dehradun, Uttarakhand - 248009",
    svgX: 280,
    svgY: 110,
  },
  {
    id: "dehradun-port",
    name: "Dehradun District Drone Port",
    type: "District Drone Port",
    tier: "TIER 02",
    status: "Verified Operational",
    statusColor: "#10b981",
    lat: "30.3850° N",
    lng: "78.0750° E",
    altitude: "720m AMSL",
    state: "Uttarakhand",
    district: "Dehradun (Salan Gaon)",
    description: "Primary regional heavy-repair depot, battery banking depot, and pilot staging ground for Shivalik foothills operations.",
    dispatchRadius: "45 km Operational Dispatch Radius",
    capabilities: [
      "Heavy Maintenance & Component Swaps",
      "Drone Sales Demonstration Flight Cage",
      "RPTO Field Simulator & Pilot Checkouts",
      "High-Altitude Airframe Stress Testing"
    ],
    contact: "0135 431 6767 (Regional Desk)",
    address: "Salan Gaon, Bhagwant Pur, Dehradun, Uttarakhand",
    svgX: 310,
    svgY: 135,
  },
  {
    id: "haridwar-port",
    name: "Haridwar Industrial Drone Port",
    type: "District Drone Port",
    tier: "TIER 02",
    status: "Active Expansion",
    statusColor: "#38bdf8",
    lat: "29.9457° N",
    lng: "78.1642° E",
    altitude: "314m AMSL",
    state: "Uttarakhand",
    district: "Haridwar",
    description: "Dedicated staging center serving the SIDCUL industrial belt and religious tourism corridor with high-speed asset inspection and logistics staging.",
    dispatchRadius: "50 km Industrial Corridor Radius",
    capabilities: [
      "Industrial Infrastructure Thermography",
      "SIDCUL Factory Roof & Chimney Inspections",
      "Emergency Fleet Reserve & Rapid Charging",
      "Fast-Response Search & Rescue Support"
    ],
    contact: "Inquiries via Dehradun Central Desk",
    address: "SIDCUL Industrial Area, Haridwar, Uttarakhand",
    svgX: 345,
    svgY: 200,
  },
  {
    id: "hardoi-port",
    name: "Hardoi District Agro Drone Port",
    type: "District Drone Port",
    tier: "TIER 02",
    status: "Pilot Deployment",
    statusColor: "#eab308",
    lat: "27.3989° N",
    lng: "80.1310° E",
    altitude: "134m AMSL",
    state: "Uttar Pradesh",
    district: "Hardoi Central",
    description: "Primary agricultural drone hub coordinating intensive precision spraying, IFFCO nano-urea field deployments, and rural pilot dispatch.",
    dispatchRadius: "65 km Multi-Block Agricultural Radius",
    capabilities: [
      "Agricultural Spraying Fleet Dispatch (10L & 16L)",
      "MILU Agro AI Ground Ground-Truthing Station",
      "Seasonal Spray Mission Scheduling Desk",
      "Village Cooperative AMC & Rapid Spares Support"
    ],
    contact: "Connected to Central Flight Dispatch",
    address: "Hardoi Central Industrial Corridor, Hardoi, Uttar Pradesh",
    svgX: 560,
    svgY: 370,
  },
  {
    id: "rupapur-centre",
    name: "Rupapur Block Drone Centre",
    type: "Block Drone Centre",
    tier: "TIER 03",
    status: "Pilot Deployment",
    statusColor: "#eab308",
    lat: "27.2450° N",
    lng: "80.0120° E",
    altitude: "130m AMSL",
    state: "Uttar Pradesh",
    district: "Hardoi (Rupapur Block)",
    description: "Grassroots farmer touchpoint located right in the sugarcane farming belt, offering direct walk-in bookings and battery quick-swaps.",
    dispatchRadius: "15 km Hyperlocal Village Block Radius",
    capabilities: [
      "Direct Farmer Spray Mission Booking",
      "Farmer Soil & Crop Advisory Counter",
      "Battery Hot-Swap & Liquid Refill Point",
      "Immediate First-Line Field Troubleshooting"
    ],
    contact: "Hardoi Regional Operations Team",
    address: "Near Sugar Mill Logistics Gate, Rupapur, Hardoi, Uttar Pradesh",
    svgX: 590,
    svgY: 415,
  },
];

export function NetworkMapVisual() {
  const [selectedNode, setSelectedNode] = useState<MapNode>(NETWORK_NODES[0]);

  return (
    <div className="networkConsoleWrapper">
      {/* Console Header Bar */}
      <div className="networkConsoleHeader">
        <div className="consoleHeaderTitle">
          <span className="consolePulseDot" />
          <div>
            <h4>REGIONAL FLIGHT & INFRASTRUCTURE TOPOLOGY</h4>
            <small>NORTH INDIA OPERATIONAL CORRIDOR · UTTARAKHAND & UTTAR PRADESH</small>
          </div>
        </div>
        <div className="consoleStatusChips">
          <span className="statusChip chipLive">● 2 OPERATIONAL</span>
          <span className="statusChip chipPilot">● 2 PILOT DEPLOYMENT</span>
          <span className="statusChip chipExpansion">● 1 EXPANSION</span>
        </div>
      </div>

      <div className="networkConsoleBody">
        {/* Vector SVG Map Container */}
        <div className="networkSvgContainer">
          <svg
            viewBox="0 0 800 520"
            className="networkSvgMap"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Radial gradient background */}
              <radialGradient id="mapBgGrad" cx="50%" cy="50%" r="65%">
                <stop offset="0%" stopColor="#0a0a14" />
                <stop offset="100%" stopColor="#030307" />
              </radialGradient>

              {/* Gold glow filter */}
              <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Cyan glow filter */}
              <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Corridor Dash Gradient */}
              <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8b84f" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#c28b24" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Base Canvas */}
            <rect width="800" height="520" fill="url(#mapBgGrad)" rx="16" />

            {/* Subtle Coordinate Grid Lines */}
            <g className="gridLines" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1">
              {[80, 160, 240, 320, 400, 480].map((y) => (
                <line key={`h-${y}`} x1="40" y1={y} x2="760" y2={y} strokeDasharray="3 4" />
              ))}
              {[120, 240, 360, 480, 600, 720].map((x) => (
                <line key={`v-${x}`} x1={x} y1="30" x2={x} y2="490" strokeDasharray="3 4" />
              ))}
            </g>

            {/* Region Contour Hints (Stylized state boundaries & foothill gradients) */}
            <g className="regionTerrain" fill="none">
              {/* Shivalik foothills contour hint */}
              <path
                d="M 120 70 Q 260 90 420 180 T 520 280"
                stroke="rgba(232, 184, 79, 0.08)"
                strokeWidth="48"
                strokeLinecap="round"
              />
              {/* Gangetic agricultural plains contour hint */}
              <path
                d="M 320 220 Q 480 300 700 420"
                stroke="rgba(16, 185, 129, 0.06)"
                strokeWidth="64"
                strokeLinecap="round"
              />
            </g>

            {/* State & Geography Context Labels */}
            <g className="geoLabels" fill="rgba(255, 255, 255, 0.22)" fontFamily="'Space Mono', monospace" fontSize="10" letterSpacing="2">
              <text x="160" y="85">UTTARAKHAND · SHIVALIK RANGE</text>
              <text x="460" y="490">UTTAR PRADESH · AGRICULTURAL BELT</text>
              <text x="60" y="500">CORRIDOR TELEMETRY: SYNCED</text>
            </g>

            {/* Flight & Logistics Corridors (Animated Arcs) */}
            <g className="networkCorridors">
              {/* Corridor 1: Dehradun HQ -> Dehradun Port */}
              <path
                d="M 280 110 L 310 135"
                stroke="rgba(232, 184, 79, 0.6)"
                strokeWidth="2"
                strokeDasharray="4 3"
              />

              {/* Corridor 2: Dehradun Port -> Haridwar Port */}
              <path
                d="M 310 135 Q 320 170 345 200"
                stroke="#e8b84f"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animatedCorridor"
              />

              {/* Corridor 3: Haridwar Port -> Hardoi Agro Port (Long-Range Coordination Spine) */}
              <path
                d="M 345 200 Q 440 260 560 370"
                stroke="url(#corridorGrad)"
                strokeWidth="2"
                strokeDasharray="8 5"
                className="animatedCorridorSlow"
              />

              {/* Corridor 4: Hardoi Agro Port -> Rupapur Block Centre */}
              <path
                d="M 560 370 L 590 415"
                stroke="rgba(234, 179, 8, 0.7)"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
            </g>

            {/* Interactive Nodes */}
            {NETWORK_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <g
                  key={node.id}
                  className={`mapNodeGroup ${isSelected ? "selectedNode" : ""}`}
                  transform={`translate(${node.svgX}, ${node.svgY})`}
                  onClick={() => setSelectedNode(node)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Ping wave animation for operational / pilot nodes */}
                  <circle
                    r={isSelected ? "22" : "14"}
                    fill="none"
                    stroke={node.statusColor}
                    strokeWidth="1.5"
                    opacity="0.4"
                    className="nodePulseRing"
                  />

                  {/* Coverage radius preview on selection */}
                  {isSelected && (
                    <circle
                      r="48"
                      fill={node.statusColor}
                      fillOpacity="0.06"
                      stroke={node.statusColor}
                      strokeWidth="1"
                      strokeDasharray="2 3"
                    />
                  )}

                  {/* Node Outer Ring */}
                  <circle
                    r={isSelected ? "9" : "7"}
                    fill="#0a0a14"
                    stroke={node.statusColor}
                    strokeWidth={isSelected ? "2.5" : "2"}
                    filter={isSelected ? "url(#glowGold)" : undefined}
                  />

                  {/* Node Center Pip */}
                  <circle
                    r={isSelected ? "4" : "3"}
                    fill={node.statusColor}
                  />

                  {/* Text Label Callout */}
                  <g
                    transform={`translate(${node.svgX > 400 ? -12 : 16}, ${node.svgY > 300 ? -14 : 4})`}
                    textAnchor={node.svgX > 400 ? "end" : "start"}
                  >
                    <rect
                      x={node.svgX > 400 ? -150 : -4}
                      y="-12"
                      width="154"
                      height="22"
                      rx="4"
                      fill="rgba(5, 5, 12, 0.78)"
                      stroke={isSelected ? node.statusColor : "rgba(255,255,255,0.12)"}
                      strokeWidth="1"
                    />
                    <text
                      x={node.svgX > 400 ? -10 : 8}
                      y="3"
                      fill={isSelected ? "#fff" : "rgba(240, 237, 245, 0.9)"}
                      fontSize="9.5"
                      fontFamily="'Outfit', sans-serif"
                      fontWeight={isSelected ? "700" : "500"}
                      letterSpacing="0.4"
                    >
                      {node.name.length > 22 ? `${node.name.slice(0, 20)}…` : node.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          {/* Quick Node Selector Pills */}
          <div className="networkPillSelector">
            {NETWORK_NODES.map((n) => (
              <button
                key={n.id}
                className={`nodePillBtn ${selectedNode.id === n.id ? "active" : ""}`}
                onClick={() => setSelectedNode(n)}
              >
                <span className="nodePillDot" style={{ backgroundColor: n.statusColor }} />
                <span>{n.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Node Telemetry Card */}
        <div className="networkTelemetryCard">
          <div className="telemetryTopRow">
            <div>
              <span className="telemetryTier">{selectedNode.tier} · {selectedNode.type}</span>
              <h3>{selectedNode.name}</h3>
            </div>
            <span
              className="telemetryStatusBadge"
              style={{
                borderColor: selectedNode.statusColor,
                color: selectedNode.statusColor,
                backgroundColor: `${selectedNode.statusColor}18`,
              }}
            >
              ● {selectedNode.status.toUpperCase()}
            </span>
          </div>

          <p className="telemetryDesc">{selectedNode.description}</p>

          <div className="telemetryMetaGrid">
            <div className="telemetryMetaItem">
              <small>COORDINATES</small>
              <span>{selectedNode.lat}, {selectedNode.lng}</span>
            </div>
            <div className="telemetryMetaItem">
              <small>ELEVATION</small>
              <span>{selectedNode.altitude}</span>
            </div>
            <div className="telemetryMetaItem">
              <small>TERRITORY</small>
              <span>{selectedNode.district}, {selectedNode.state}</span>
            </div>
            <div className="telemetryMetaItem">
              <small>COVERAGE</small>
              <span style={{ color: "#e8b84f" }}>{selectedNode.dispatchRadius}</span>
            </div>
          </div>

          <div className="telemetryCapabilities">
            <small>ACTIVATED REGIONAL SERVICES & AMENITIES</small>
            <ul>
              {selectedNode.capabilities.map((c, i) => (
                <li key={i}>
                  <span className="capCheck">✦</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="telemetryLocationFooter">
            <div className="telemetryContactRow">
              <small>PHYSICAL LOCATION & CONTACT</small>
              <span>{selectedNode.address}</span>
              <strong>{selectedNode.contact}</strong>
            </div>

            <button
              className="btn goldBtn"
              style={{ width: "100%", marginTop: 14 }}
              onClick={() =>
                triggerInquiry({
                  title: `${selectedNode.name} Regional Operations Inquiry`,
                  service: `Network Node: ${selectedNode.name} (${selectedNode.district})`,
                })
              }
            >
              REQUEST DISPATCH OR FACILITY ACCESS ↗
            </button>
          </div>
        </div>
      </div>

      {/* Network Metrics Footer Strip */}
      <div className="networkMetricsStrip">
        <div className="metricItem">
          <span className="metricVal">5</span>
          <span className="metricLbl">ACTIVE & PILOT NODES</span>
        </div>
        <div className="metricItem">
          <span className="metricVal">350+</span>
          <span className="metricLbl">SQ KM REGIONAL REACH</span>
        </div>
        <div className="metricItem">
          <span className="metricVal">&lt;90 MIN</span>
          <span className="metricLbl">MEAN PILOT DISPATCH</span>
        </div>
        <div className="metricItem">
          <span className="metricVal">100%</span>
          <span className="metricLbl">DIGITAL SKY COMPLIANT</span>
        </div>
      </div>
    </div>
  );
}
