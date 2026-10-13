export type MiluFeature = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: "Currently Live" | "Pilot Stage (Hardoi Belt)" | "Under Development / Roadmap";
  statusColor: "green" | "gold" | "purple";
  icon: string;
  details: string[];
};

export const miluEcosystemFeatures: MiluFeature[] = [
  {
    id: "field-mapping",
    title: "Farm & Field Geospatial Mapping",
    tagline: "CADASTRAL PLOT BOUNDARIES & GEO-TAGGING",
    description:
      "High-resolution aerial orthomosaics and GIS vector overlays map registered farm holdings with accurate cadastral plot boundaries, terrain contours, and obstacle markings.",
    status: "Currently Live",
    statusColor: "green",
    icon: "map",
    details: [
      "Registered plot boundaries overlayed on satellite & aerial maps",
      "Field topography and slope visualization for drainage management",
      "Precise acreage measurement eliminating land dispute estimations",
    ],
  },
  {
    id: "crop-monitoring",
    title: "Crop-Health Monitoring & Early Warning",
    tagline: "CANOPY STRESS & DISEASE DETECTION",
    description:
      "Multispectral vegetation indexing (NDVI, NDRE) tracks chlorophyll levels and canopy density, identifying early signs of red rot, borer infestation, and moisture stress days before visible to the naked eye.",
    status: "Pilot Stage (Hardoi Belt)",
    statusColor: "gold",
    icon: "leaf",
    details: [
      "Targeted pest & disease hotspots flagged with GPS coordinates",
      "Early warning alerts sent to farmers to prevent widespread crop loss",
      "Vegetative vigor tracking across crop lifecycle stages",
    ],
  },
  {
    id: "yield-forecasting",
    title: "Yield & Indicative Quality Forecasting",
    tagline: "BIOMASS & SUCROSE MODELING",
    description:
      "Subject to data availability and ground-truth validation, algorithmic canopy volume and spectral analysis provide indicative yield tonnage forecasts and sugarcane maturity trends.",
    status: "Pilot Stage (Hardoi Belt)",
    statusColor: "gold",
    icon: "target",
    details: [
      "Estimated tonnage projections for harvest planning",
      "Sucrose and brix maturity tracking for timed harvesting",
      "Model continuous validation against actual mill weighbridge records",
    ],
  },
  {
    id: "soil-irrigation",
    title: "Soil & Irrigation-Related Insights",
    tagline: "VARIABLE-RATE WATER & NUTRIENT ADVISORY",
    description:
      "Thermal and multispectral surface assessments identify waterlogged patches and dry zones, supporting optimized variable-rate irrigation schedules and soil conditioning.",
    status: "Under Development / Roadmap",
    statusColor: "purple",
    icon: "signal",
    details: [
      "Soil surface moisture indexing for precision watering",
      "Identification of drainage bottlenecks in undulating fields",
      "Input optimization reducing unnecessary chemical and water runoff",
    ],
  },
  {
    id: "farmer-profiles",
    title: "Digital Farmer Profiles (Kisan Card)",
    tagline: "MOBILE ACCESS & OPERATIONAL RECORDS",
    description:
      "A lightweight mobile interface providing farmers with verified digital records of their plots, historical spray operations, chemical dosages, and upcoming service schedules.",
    status: "Currently Live",
    statusColor: "green",
    icon: "drone",
    details: [
      "Complete historical log of drone spray dates and inputs used",
      "Mobile alerts for recommended spray timings based on weather",
      "Direct one-tap connection to nearest block Drone Centre",
    ],
  },
  {
    id: "drone-booking",
    title: "Drone Booking & Mission Dispatch",
    tagline: "HYPERLOCAL SERVICE COORDINATION",
    description:
      "Connects registered farmers and field managers directly to available drone assets, certified pilots, and battery resources at the nearest block-level Drone Centre.",
    status: "Currently Live",
    statusColor: "green",
    icon: "route",
    details: [
      "Slot reservation for urgent pest containment spraying",
      "Real-time flight progress tracking and completion sign-off",
      "Transparent pay-per-acre invoicing without hidden charges",
    ],
  },
  {
    id: "mill-dashboard",
    title: "Sugar Mill & Operational Dashboards",
    tagline: "ENTERPRISE DECISION SUPPORT FOR AGRI MILLS",
    description:
      "Central command dashboard for sugar mill agricultural teams (such as DCM Shriram Rupapur context) providing aggregate visibility of crop health, acreage, harvesting calendars, and supply forecasts.",
    status: "Pilot Stage (Hardoi Belt)",
    statusColor: "gold",
    icon: "factory",
    details: [
      "Macro-level regional sugarcane acreage & health heatmaps",
      "Supply calendar synchronization between farmers and crushing mills",
      "Targeted agricultural intervention tracking across factory command areas",
    ],
  },
];

export const dataPlatformSteps = [
  {
    step: "01",
    phase: "Field Capture",
    title: "Drone Flights & Multimodal Sensing",
    description:
      "Drone flights, multispectral sensors, ground observations, and weather stations collect raw geo-referenced signals across agricultural fields and infrastructure sites.",
  },
  {
    step: "02",
    phase: "Edge Processing",
    title: "Local Ingestion & Pre-Processing",
    description:
      "Data is ingested, validated, and normalized at district Drone Ports and cloud clusters using photogrammetry and radiometry pipelines.",
  },
  {
    step: "03",
    phase: "MILU AI Analytics",
    title: "Machine Learning & Spatial Intelligence",
    description:
      "Neural models analyze vegetation health, detect anomalies, compare historical baseline scans, and generate predictive risk alerts.",
  },
  {
    step: "04",
    phase: "Actionable Outputs",
    title: "Dashboards, Mobile Alerts & APIs",
    description:
      "Intelligence is delivered through intuitive mobile alerts for farmers, enterprise web dashboards for managers, or secure REST APIs for external ERP/mill systems.",
  },
];
