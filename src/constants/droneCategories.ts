import agricultureDroneImg from "../assets/photography/agriculture-drone.webp";
import logisticsDroneImg from "../assets/photography/logistics-drone.webp";
import photographyDroneImg from "../assets/photography/photography-drone.jpg";
import industrialDroneImg from "../assets/photography/infrastructure-drone.webp";

export type DroneCategory = {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  icon: string;
  image: string;
  applications: string[];
  specs: { label: string; value: string }[];
  regulatoryNote: string;
  supportedServices: string[];
};

export const droneCategories: DroneCategory[] = [
  {
    id: "agricultural",
    slug: "agricultural-drones",
    title: "Agricultural Drones",
    eyebrow: "CROP SPRAYING & AGRO INTELLIGENCE",
    summary:
      "Precision spraying and aerial crop care engineered to reach difficult fields, prevent chemical exposure, and optimize input efficiency.",
    description:
      "OJAS agricultural drones provide compliant, high-precision aerial solutions for crop protection and nutrition. Designed specifically for Indian agricultural terrains—including dense sugarcane, paddy, and horticulture—these platforms execute ultra-low-volume spraying and seed/fertilizer dispersion with centimeter-level precision.",
    icon: "leaf",
    image: agricultureDroneImg,
    applications: [
      "Ultra-low-volume precision crop spraying (10L to 40L tanks)",
      "Granular fertilizer and micronutrient dispersion",
      "Sugarcane, paddy, cotton, and orchard field treatments",
      "Terrain-following flight over undulating farmlands",
      "Rapid post-monsoon pest containment where tractors cannot enter",
    ],
    specs: [
      { label: "Tank Capacity", value: "10L – 40L payload tanks" },
      { label: "Operational Speed", value: "4 – 8 m/s adjustable swath speed" },
      { label: "Spray Efficiency", value: "Up to 25–30 acres / day per unit" },
      { label: "Guidance System", value: "RTK-GNSS + Millimeter-wave terrain radar" },
      { label: "Nozzle Setup", value: "Centrifugal atomization nozzles" },
    ],
    regulatoryNote:
      "All agricultural flights are operated in strict adherence to DGCA SOPs, approved chemical formulations, and trained certified pilot oversight.",
    supportedServices: ["Drone Sales", "Drone Rental", "Repair & Maintenance", "Drone Training"],
  },
  {
    id: "logistics",
    slug: "logistics-drones",
    title: "Logistics Drones",
    eyebrow: "PAYLOAD TRANSIT & REMOTE ACCESS",
    summary:
      "High-endurance aerial transport designed to move critical payloads, medical supplies, and emergency cargo across difficult terrains.",
    description:
      "OJAS logistics drones bridge physical connectivity gaps in remote, hilly, and disaster-affected zones. Configurable for either secure internal cargo pods or tethered winch drops, these aircraft navigate pre-computed corridors with redundant avionics and autonomous fail-safes.",
    icon: "truck",
    image: logisticsDroneImg,
    applications: [
      "Emergency medical payload and diagnostic sample transport",
      "Remote hilly area parcel and spare parts dispatch",
      "Agricultural input delivery to remote farm holdings",
      "Rapid disaster relief supplies and ration drops",
      "Time-critical enterprise logistics beyond road bottlenecks",
    ],
    specs: [
      { label: "Payload Capacity", value: "5 kg – 25 kg configurable" },
      { label: "Flight Radius", value: "15 km – 40 km (mission profile dependent)" },
      { label: "Safety System", value: "Dual GPS, parachute fail-safe & auto-return" },
      { label: "Propulsion", value: "High-efficiency coaxial / multirotor layout" },
      { label: "Weather Rating", value: "IP54 wind and light rain resistance" },
    ],
    regulatoryNote:
      "Payload, route corridor, flight altitude, and range depend strictly on applicable DGCA operating permissions, Digital Sky clearances, and airspace zoning.",
    supportedServices: ["Drone Sales", "Drone Rental", "Repair & Maintenance"],
  },
  {
    id: "photography",
    slug: "photography-drones",
    title: "Photography Drones",
    eyebrow: "CINEMATOGRAPHY & VISUAL DOCUMENTATION",
    summary:
      "Cinema-grade imaging platforms delivering stabilized 4K/6K aerial cinematography, site documentation, and creative content production.",
    description:
      "Built for visual storytellers, media teams, project managers, and creative directors, OJAS photography drones feature ultra-stable multi-axis gimbals and cinema-calibrated optics. Whether capturing promotional documentaries, real estate overviews, or event footage, these platforms ensure smooth, breathtaking aerial perspectives.",
    icon: "camera",
    image: photographyDroneImg,
    applications: [
      "Commercial cinematography, brand documentaries & media production",
      "Real estate, hospitality & tourism aerial showcases",
      "Infrastructure & construction project milestone documentation",
      "Live event broadcasting & festival aerial coverage",
      "High-resolution promotional orthomosaics & panorama stitching",
    ],
    specs: [
      { label: "Imaging Sensor", value: "4K / 6K cinema sensor (ProRes / RAW support)" },
      { label: "Gimbal Stabilization", value: "3-axis brushless mechanical (±0.005° precision)" },
      { label: "Flight Endurance", value: "35 – 45 min per intelligent battery" },
      { label: "Transmission", value: "Low-latency 1080p HD live broadcast feed" },
      { label: "Obstacle Sensing", value: "Omnidirectional vision & infrared sensing" },
    ],
    regulatoryNote:
      "Operated in full compliance with local airspace zone classifications, privacy guidelines, and necessary site permissions.",
    supportedServices: ["Drone Sales", "Drone Rental", "Repair & Maintenance", "Drone Training"],
  },
  {
    id: "industrial",
    slug: "industrial-drones",
    title: "Industrial Drones",
    eyebrow: "ASSET INSPECTION & OPERATIONAL MONITORING",
    summary:
      "Ruggedized, multi-sensor platforms for safe, close-range inspection of power grids, industrial plants, solar arrays, and infrastructure.",
    description:
      "OJAS industrial drones replace dangerous manual scaffolding and rope-access inspections with airborne precision. Outfitted with high-zoom optical cameras, radiometric thermal sensors, and high electromagnetic immunity, these drones detect micro-defects, thermal hotspots, and structural stress without taking critical utilities offline.",
    icon: "factory",
    image: industrialDroneImg,
    applications: [
      "High-voltage power transmission line & substation inspection",
      "Solar farm thermal inspection & defective panel detection",
      "Bridge, highway, tunnel & railway track structural audit",
      "Industrial chimney, flare stack & refinery pipeline monitoring",
      "Mining volume estimation & stockpile measurement",
    ],
    specs: [
      { label: "Sensors", value: "Dual EO/IR Radiometric Thermal + 40x Optical Zoom" },
      { label: "Electromagnetic Shielding", value: "High EMI protection for high-voltage corridors" },
      { label: "Ingress Protection", value: "IP55 weather, rain & dust resistant" },
      { label: "Thermal Resolution", value: "640×512 radiometric thermal imaging" },
      { label: "Payload Flexibility", value: "Top and bottom gimbal mounting options" },
    ],
    regulatoryNote:
      "Industrial missions adhere to on-site industrial safety guidelines, permit-to-work protocols, and qualified inspection pilot SOPs.",
    supportedServices: ["Drone Sales", "Drone Rental", "Repair & Maintenance", "Drone Training"],
  },
];
