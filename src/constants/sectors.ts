import { SectorItem } from "../types";
import precisionAgricultureImage from "../assets/solutions/precision-agriculture.jpg";
import infrastructureMonitoringImage from "../assets/solutions/infrastructure-monitoring.webp";
import surveillanceReconImage from "../assets/solutions/surveillance-recon.jpg";
import autonomousLogisticsImage from "../assets/solutions/autonomous-logistics.jpg";
import earthObservationImage from "../assets/solutions/earth-observation.webp";
import energyUtilitiesImage from "../assets/energy-utilities.jpg";

export const sectorCategories = [
  { id: "all", label: "All Sectors" },
  { id: "resource", label: "Agriculture & Land" },
  { id: "infrastructure", label: "Critical Infrastructure" },
  { id: "tactical", label: "Defense & Public Safety" },
  { id: "logistics", label: "Autonomous Logistics" },
  { id: "energy", label: "Energy & Utilities" },
] as const;

export const sectorData: SectorItem[] = [
  {
    title: "Agriculture & Rural Systems",
    slug: "agriculture-rural-systems",
    category: "resource",
    categoryLabel: "Resource Management",
    tagline: "See problems before they cost you the harvest.",
    text: "Spot pest, weed and nutrient stress early, treat only where it's needed, and know your yield before harvest day arrives.",
    icon: "leaf",
    image: precisionAgricultureImage,
    metrics: [
      {
        value: "98.2%",
        label: "Diagnosis Accuracy",
        desc: "Early pest, weed & nutrient stress detection precision",
      },
      {
        value: "40%",
        label: "Input Optimization",
        desc: "Reduction in chemical & water run-off with targeted spraying",
      },
      {
        value: "500+ Ha",
        label: "Daily Coverage",
        desc: "Autonomous multispectral flight operations per single pilot system",
      },
    ],
    applications: [
      "Multispectral NDVI, NDRE & thermal canopy health profiling",
      "Centimeter-precise variable-rate crop treatment & bio-pesticide delivery",
      "Hydrological contour mapping & automated irrigation deficit detection",
      "Pre-harvest yield estimation & crop loss catastrophe assessment",
    ],
    capabilities: [
      "Autonomous waypoint flight plans with terrain-following radar",
      "Real-time edge computing for instantaneous plant stress scoring",
      "Seamless integration with farm management information systems (FMIS)",
    ],
    integratedTech: [
      "Aerial & Remote Sensing",
      "Agriculture Intelligence",
      "AI, ML & Decision Intelligence",
    ],
    solutions: ["Precision Agriculture", "Earth Observation"],
  },
  {
    title: "Infrastructure & Industrial",
    slug: "infrastructure-industrial",
    category: "infrastructure",
    categoryLabel: "Civil & Industrial",
    tagline: "Catch the crack before it becomes a closure.",
    text: "Inspect bridges, towers and plants from the air — no scaffolding, no shutdowns, and no risk to your crew.",
    icon: "factory",
    image: infrastructureMonitoringImage,
    metrics: [
      {
        value: "85%",
        label: "Downtime Reduction",
        desc: "Decrease in asset outage duration during structural health audits",
      },
      {
        value: "< 0.5 mm",
        label: "Crack Resolution",
        desc: "Optical defect detection threshold on bridges & concrete dams",
      },
      {
        value: "100%",
        label: "Safety Compliance",
        desc: "Zero rope-access hazard exposure for high-altitude human teams",
      },
    ],
    applications: [
      "Bridge, dam, tunnel & highway corridor structural integrity verification",
      "Telecommunication tower, antenna alignment & microwave dish auditing",
      "Industrial facility flare stack, pressure vessel & boiler thermography",
      "Construction milestone tracking & BIM vs. as-built volumetric analysis",
    ],
    capabilities: [
      "3D LiDAR SLAM scanning in GPS-denied and confined environments",
      "Automated photogrammetric mesh reconstruction for BIM environments",
      "AI-driven automated defect classification and structural decay timelines",
    ],
    integratedTech: [
      "Aerial & Remote Sensing",
      "Geospatial & Earth Intelligence",
      "Digital Infrastructure & Trust",
    ],
    solutions: ["Infrastructure Monitoring", "Earth Observation"],
  },
  {
    title: "Security & Public Safety",
    slug: "security-public-safety",
    category: "tactical",
    categoryLabel: "Tactical & Defense",
    tagline: "Eyes on the ground, day and night, wherever it matters.",
    text: "Launch in minutes, watch continuously, and respond faster — across borders, sites and disaster zones.",
    icon: "shield",
    image: surveillanceReconImage,
    metrics: [
      {
        value: "< 3 Min",
        label: "Scramble Time",
        desc: "Autonomous dock launch to active airborne mission engagement",
      },
      {
        value: "24/7",
        label: "Persistent Overwatch",
        desc: "Continuous day/night thermal & MWIR electro-optical tracking",
      },
      {
        value: "AES-256",
        label: "Encrypted Telemetry",
        desc: "Mil-grade anti-jamming datalink and zero-leakage cloud pipelines",
      },
    ],
    applications: [
      "Autonomous border & national critical infrastructure perimeter patrol",
      "Rapid disaster search and rescue (SAR) in zero-visibility conditions",
      "Urban riot management & situational awareness command streaming",
      "Forest wildfire perimeter mapping & hot-spot containment telemetry",
    ],
    capabilities: [
      "Real-time human and vehicle object detection & automated lock-on tracking",
      "Multi-UAV cooperative swarm networking with mesh communication links",
      "Autonomous geofenced waypoint patrol with automatic weather divert",
    ],
    integratedTech: [
      "Aerial & Remote Sensing",
      "AI, ML & Decision Intelligence",
      "Autonomy, Fleet & Field Operations",
    ],
    solutions: ["Surveillance & Reconnaissance", "Disaster Response"],
  },
  {
    title: "Logistics & Delivery",
    slug: "logistics-delivery",
    category: "logistics",
    categoryLabel: "Autonomous Transit",
    tagline: "Get critical cargo there when roads can't.",
    text: "Cut transit time on the hardest routes and keep medical, emergency and industrial payloads safe in transit.",
    icon: "truck",
    image: autonomousLogisticsImage,
    metrics: [
      {
        value: "70%",
        label: "Transit Time Cut",
        desc: "Expedited emergency transport across rugged, unpaved terrains",
      },
      {
        value: "±0.5°C",
        label: "Cold-Chain Stability",
        desc: "Continuous telemetry for vaccines, blood units & bio-samples",
      },
      {
        value: "Dual-GNSS",
        label: "Redundancy",
        desc: "Dual GPS/NavIC navigation with ballistic emergency parachute systems",
      },
    ],
    applications: [
      "Time-critical medical specimen, vaccine & anti-venom dispatch",
      "Emergency disaster relief payload drops into cut-off disaster zones",
      "High-value industrial spare part express transit between manufacturing hubs",
      "Automated ship-to-shore maritime cargo and provisioning operations",
    ],
    capabilities: [
      "Winch-assisted and vertical landing precision payload drop systems",
      "Dynamic corridor airspace deconfliction and UTM integration",
      "Fail-safe return-to-base and automated soft-landing ballistic deployment",
    ],
    integratedTech: [
      "Autonomy, Fleet & Field Operations",
      "Digital Infrastructure & Trust",
      "Aerial & Remote Sensing",
    ],
    solutions: ["Autonomous Logistics", "Disaster Response"],
  },
  {
    title: "Geospatial & Visual Intelligence",
    slug: "geospatial-visual-intelligence",
    category: "resource",
    categoryLabel: "Earth Observation",
    tagline: "Map it once, trust it for everything after.",
    text: "Survey-grade accuracy at a fraction of the time and cost of traditional ground surveys.",
    icon: "globe",
    image: earthObservationImage,
    metrics: [
      {
        value: "1.2 cm",
        label: "GSD Resolution",
        desc: "Ultra-high ground sampling distance for survey-grade deliverables",
      },
      {
        value: "Sub-Centimeter",
        label: "Spatial Accuracy",
        desc: "RTK/PPK multi-constellation georeferenced survey alignment",
      },
      {
        value: "10x",
        label: "Survey Velocity",
        desc: "Speed multiplier compared to traditional terrestrial total stations",
      },
    ],
    applications: [
      "Cadastral land boundary demarcation & property record digitization",
      "Open-cast mine pit volumetric excavation and stockpiling calculation",
      "Hydrographic basin modeling, flood inundation & watershed simulation",
      "Urban master planning, smart city 3D mesh & digital twin synthesis",
    ],
    capabilities: [
      "Direct integration into ArcGIS, QGIS, AutoCAD, and Bentley ecosystems",
      "Automated cloud-based photogrammetric processing and orthorectification",
      "Multi-temporal AI change detection for environmental and land encroachments",
    ],
    integratedTech: [
      "Aerial & Remote Sensing",
      "Geospatial & Earth Intelligence",
      "AI, ML & Decision Intelligence",
    ],
    solutions: ["Earth Observation", "Precision Agriculture"],
  },
  {
    title: "Energy & Utilities",
    slug: "energy-utilities",
    category: "energy",
    categoryLabel: "Power & Clean Energy",
    tagline: "Find the fault before it finds your grid.",
    text: "Scan solar farms and power lines for faults automatically — with zero climbing and zero shutdown.",
    icon: "energy",
    image: energyUtilitiesImage,
    metrics: [
      {
        value: "50+ MW",
        label: "Daily Solar Scan",
        desc: "Thermal string-level audit per flight system per operational day",
      },
      {
        value: "99.4%",
        label: "Fault Localization",
        desc: "Precision in pinpointing hot spots, bypass diode failures & micro-cracks",
      },
      {
        value: "100%",
        label: "Risk Elimination",
        desc: "Zero human personnel climbing required during high-voltage live scans",
      },
    ],
    applications: [
      "Solar PV utility-scale radiometric thermography and soiling analysis",
      "High-voltage electrical transmission line insulator and pylon inspection",
      "Wind turbine blade leading-edge erosion and delamination analysis",
      "Oil and gas pipeline optical gas imaging (OGI) for fugitive methane leaks",
    ],
    capabilities: [
      "Radiometric LWIR thermal cameras calibrated to ±1°C accuracy",
      "Autonomous electromagnetic interference (EMI) shielded avionics",
      "Automated IEC-compliant solar inspection reports with geo-tagged strings",
    ],
    integratedTech: [
      "Aerial & Remote Sensing",
      "Geospatial & Earth Intelligence",
      "AI, ML & Decision Intelligence",
    ],
    solutions: ["Infrastructure Monitoring", "Earth Observation"],
  },
];
