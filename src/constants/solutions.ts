import { Item, SolutionDetail } from "../types";
import surveillanceRecon from "../assets/solutions/surveillance-recon.jpg";
import earthObservationImage from "../assets/solutions/earth-observation.webp";
import precisionAgricultureImage from "../assets/solutions/precision-agriculture.jpg";
import infrastructureMonitoringImage from "../assets/solutions/infrastructure-monitoring.webp";
import disasterResponseImage from "../assets/solutions/disaster-response.webp";
import autonomousLogisticsImage from "../assets/solutions/autonomous-logistics.jpg";

export const solutions: Item[] = [
  {
    title: "Surveillance & Reconnaissance",
    text: "Persistent aerial intelligence for complex environments.",
    image: surveillanceRecon,
  },
  {
    title: "Earth Observation",
    text: "Insight from aerial, spatial and remote-sensing data.",
    image: earthObservationImage,
  },
  {
    title: "Precision Agriculture",
    text: "Field intelligence for more precise agricultural decisions.",
    image: precisionAgricultureImage,
  },
  {
    title: "Infrastructure Monitoring",
    text: "Safer, smarter inspection across critical assets.",
    image: infrastructureMonitoringImage,
  },
  {
    title: "Disaster Response",
    text: "Situational awareness when every second counts.",
    image: disasterResponseImage,
  },
  {
    title: "Autonomous Logistics",
    text: "Move critical payloads beyond conventional routes.",
    image: autonomousLogisticsImage,
  },
];

export const solutionInfo: Record<string, SolutionDetail> = {
  "Surveillance & Reconnaissance": {
    heading: "Awareness from above.",
    intro:
      "Persistent aerial intelligence for environments where broader visibility, remote access and timely information matter.",
    cap: [
      "Aerial surveillance",
      "Reconnaissance missions",
      "Remote observation",
      "Situational awareness",
      "Real-time monitoring",
      "Specialized aerial missions",
    ],
    sectors: ["Security & Public Safety", "Infrastructure & Industrial"],
    services: [
      "Site Monitoring",
      "Surveillance & Reconnaissance",
      "Real-Time Aerial Intelligence",
    ],
    tech: [
      "Aerial & Remote Sensing",
      "Geospatial & Earth Intelligence",
      "AI, ML & Decision Intelligence",
    ],
  },
  "Earth Observation": {
    heading: "See the bigger picture.",
    intro:
      "Combine aerial, geospatial and remote-sensing information to understand landscapes, assets and change at scale.",
    cap: [
      "Remote sensing",
      "Aerial observation",
      "Survey & mapping",
      "Photogrammetry",
      "GIS and geospatial analysis",
      "Change detection",
    ],
    sectors: [
      "Geospatial & Visual Intelligence",
      "Agriculture & Rural Systems",
      "Energy & Utilities",
    ],
    services: [
      "Aerial Mapping",
      "Photogrammetry & 3D Mapping",
      "Geospatial Intelligence",
    ],
    tech: ["Aerial & Remote Sensing", "Geospatial & Earth Intelligence"],
  },
  "Precision Agriculture": {
    heading: "From field data to better decisions.",
    intro:
      "Bring crop imagery, field information and operational data together to support more precise agricultural decisions and interventions.",
    cap: [
      "Crop mapping",
      "Crop monitoring",
      "Crop-health assessment",
      "Pest and disease identification",
      "Precision spraying",
      "Yield and field intelligence",
    ],
    sectors: ["Agriculture & Rural Systems"],
    services: ["Crop Health Monitoring", "Precision Spraying", "Field Mapping"],
    tech: [
      "Agriculture Intelligence",
      "AI, ML & Decision Intelligence",
      "Aerial & Remote Sensing",
    ],
  },
  "Infrastructure Monitoring": {
    heading: "Inspect what keeps the world moving.",
    intro:
      "Use aerial observation and specialized sensing to document, inspect and monitor critical infrastructure and assets.",
    cap: [
      "Infrastructure inspection",
      "Construction monitoring",
      "Asset monitoring",
      "Power-line inspection",
      "Solar infrastructure monitoring",
      "Thermal and 3D inspection",
    ],
    sectors: ["Infrastructure & Industrial", "Energy & Utilities"],
    services: [
      "Infrastructure Inspection",
      "Construction Monitoring",
      "Power & Utility Inspection",
    ],
    tech: [
      "Aerial & Remote Sensing",
      "Geospatial & Earth Intelligence",
      "Digital Infrastructure & Trust",
    ],
  },
  "Disaster Response": {
    heading: "See sooner. Respond faster.",
    intro:
      "Rapid aerial observation and geospatial intelligence for situations where access, awareness and time are critical.",
    cap: [
      "Emergency observation",
      "Disaster reconnaissance",
      "Flood response support",
      "Search and rescue support",
      "Emergency mapping",
      "Emergency payload delivery",
    ],
    sectors: ["Security & Public Safety", "Logistics & Delivery"],
    services: [
      "Flood Assessment",
      "Search & Rescue Support",
      "Emergency Mapping",
    ],
    tech: [
      "Aerial & Remote Sensing",
      "Geospatial & Earth Intelligence",
      "AI, ML & Decision Intelligence",
    ],
  },
  "Autonomous Logistics": {
    heading: "Logistics beyond the road.",
    intro:
      "Aerial and intelligent logistics capabilities for medical, agricultural, emergency and remote-area delivery requirements.",
    cap: [
      "Medical delivery",
      "Agricultural-input delivery",
      "Emergency delivery",
      "Remote-area delivery",
      "Last-mile UAV delivery",
      "Route and mission coordination",
    ],
    sectors: ["Logistics & Delivery", "Agriculture & Rural Systems"],
    services: [
      "Medical Delivery",
      "Emergency Payload Delivery",
      "Last-Mile Aerial Logistics",
    ],
    tech: [
      "Autonomy, Fleet & Field Operations",
      "Aerial & Remote Sensing",
      "Digital Infrastructure & Trust",
    ],
  },
};
