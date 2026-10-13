export type NetworkTier = {
  tier: string;
  level: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  icon: string;
};

export const networkStructure: NetworkTier[] = [
  {
    tier: "HEADQUARTERS",
    level: "State & National Coordination",
    name: "Dehradun Central Headquarters",
    role: "Central Command, Technology & Network Oversight",
    description:
      "Dehradun, Uttarakhand, serves as OJAS Aerospace's central command. This facility oversees company-wide coordination, aerospace R&D, software engineering for MILU AI, central administration, regulatory compliance, and nationwide network oversight.",
    capabilities: [
      "Company-wide network coordination & flight scheduling",
      "Core aerospace engineering, design & testing lab",
      "MILU AI software platform & data infrastructure development",
      "Centralized inventory, procurement & DGCA compliance oversight",
    ],
    icon: "globe",
  },
  {
    tier: "DISTRICT LEVEL",
    level: "District Coordination Hub",
    name: "District-Level Drone Ports",
    role: "Operational Hubs, Advanced Servicing & Spares Depot",
    description:
      "Drone Ports are primary district-level facilities in the network. A Drone Port coordinates local drone operations, stages fleet readiness, houses certified diagnostic workshops for major repairs, and directly supports the block-level Drone Centres within its district.",
    capabilities: [
      "District flight ops dispatch & mission coordination",
      "Certified diagnostic & heavy repair maintenance workshop",
      "Spares warehousing, battery banks & rapid replacement stock",
      "Operational support & technical oversight for district Drone Centres",
    ],
    icon: "factory",
  },
  {
    tier: "BLOCK LEVEL",
    level: "Grassroots Access Point",
    name: "Block-Level Drone Centres",
    role: "Local Access, Equipment Booking & Community Touchpoint",
    description:
      "Drone Centres are the block-level access points designed to bring drone products and services closest to farmers, local communities, and local enterprises. They serve as immediate touchpoints for booking spray missions, rental drop-off, routine health checks, and farmer advisory.",
    capabilities: [
      "Direct farmer spray booking & advisory counter",
      "Local drone rental equipment pickup & return point",
      "Battery fast-charging & routine pre-flight inspections",
      "First-line field troubleshooting & pilot staging",
    ],
    icon: "drone",
  },
];

export type NetworkFacility = {
  name: string;
  type: "HQ" | "Drone Port" | "Drone Centre";
  district: string;
  block?: string;
  state: string;
  status: "Verified Operational" | "Pilot Deployment" | "Site Assessment / Planning";
  services: string[];
  contact: string;
  address: string;
};

export const sampleFacilities: NetworkFacility[] = [
  {
    name: "OJAS Central Command HQ",
    type: "HQ",
    district: "Dehradun",
    state: "Uttarakhand",
    status: "Verified Operational",
    services: ["Network Oversight", "Aerospace R&D", "DGCA Compliance", "Enterprise Sales"],
    contact: "0135 431 6767 · info@ojasspace.com",
    address: "Imperial Heights, Near DIT University, Dehradun, Uttarakhand - 248009",
  },
  {
    name: "Dehradun District Drone Port",
    type: "Drone Port",
    district: "Dehradun",
    state: "Uttarakhand",
    status: "Verified Operational",
    services: ["Fleet Maintenance", "Drone Sales & Demos", "Pilot Training Support", "Heavy Repairs"],
    contact: "0135 431 6767",
    address: "Salan Gaon, Bhagwant Pur, Dehradun, Uttarakhand",
  },
  {
    name: "Hardoi District Drone Port (Agro Hub)",
    type: "Drone Port",
    district: "Hardoi",
    state: "Uttar Pradesh",
    status: "Pilot Deployment",
    services: ["Agricultural Spraying Fleet", "MILU AI Field Calibration", "AMC Servicing", "Pilot Dispatch"],
    contact: "Inquire via Central Command",
    address: "Hardoi Central Industrial Corridor, Hardoi, Uttar Pradesh",
  },
  {
    name: "Rupapur Block Drone Centre",
    type: "Drone Centre",
    district: "Hardoi",
    block: "Rupapur (Sugarcane Belt)",
    state: "Uttar Pradesh",
    status: "Pilot Deployment",
    services: ["Sugarcane Spray Booking", "Farmer Advisory", "Battery Fast-Swap", "Field Support"],
    contact: "Connected to Hardoi Drone Port",
    address: "Near Sugar Mill Logistics Gate, Rupapur, Hardoi, Uttar Pradesh",
  },
  {
    name: "Haridwar District Drone Port",
    type: "Drone Port",
    district: "Haridwar",
    state: "Uttarakhand",
    status: "Site Assessment / Planning",
    services: ["Industrial Asset Monitoring", "Site Inspection", "Equipment Rental"],
    contact: "Scheduled 2026/27",
    address: "SIDCUL Industrial Area, Haridwar, Uttarakhand",
  },
];

export const networkAdvantages = [
  {
    title: "Access Beyond Equipment Ownership",
    tagline: "PURCHASE · RENT · PAY-PER-ACRE",
    description:
      "Not every customer needs to buy a drone outright. Sales, flexible seasonal rental, and per-mission service models provide affordable avenues for farmers and businesses without upfront capex burden.",
    icon: "leaf",
  },
  {
    title: "Hyperlocal Support & Rapid Turnaround",
    tagline: "CLOSER TO THE OPERATION",
    description:
      "A distributed two-tier network places genuine spare parts, certified maintenance technicians, and backup aircraft within the district, eliminating days of transit downtime during critical crop or project cycles.",
    icon: "wrench",
  },
  {
    title: "Connected Physical & Digital Operations",
    tagline: "HARDWARE PAIRED WITH MILU AI",
    description:
      "Drone flights are paired directly with digital intelligence. Field sensors and aerial telemetry feed straight into the MILU platform, providing geo-referenced actionable insights for farmers and operational teams.",
    icon: "brain",
  },
  {
    title: "Scalable District & Block Structure",
    tagline: "ORGANIZED EXPANSION FRAMEWORK",
    description:
      "District-level Drone Ports and block-level Drone Centres establish a repeatable, accountable template for systematically expanding reliable drone accessibility across every district in India.",
    icon: "network",
  },
];

export const whoWeServe = [
  {
    id: "farmers",
    title: "Farmers & Rural Communities",
    tagline: "AGRICULTURAL ACCESSIBILITY",
    description:
      "Affordable access to aerial crop spraying, seed broadcasting, canopy health monitoring, and digital farm profiles without requiring drone ownership.",
    benefits: [
      "Fast crop spraying in waterlogged sugarcane or paddy fields",
      "Zero direct exposure to hazardous agrochemicals",
      "Early pest detection through MILU AI NDVI alerts",
      "Pay-per-acre spray pricing at nearest Drone Centre",
    ],
    cta: "Book Agricultural Spraying",
    icon: "leaf",
  },
  {
    id: "enterprise",
    title: "Businesses & Logistics Operators",
    tagline: "CARGO & DELIVERY CORRIDORS",
    description:
      "Reliable heavy-payload logistics platforms and aerial transport services engineered to bypass ground congestion and reach inaccessible regions.",
    benefits: [
      "Point-to-point emergency medical and diagnostic transit",
      "Remote hilly area parcel and input dispatch",
      "Redundant avionics with autonomous parachute safety",
      "DGCA-compliant corridor planning and operational tracking",
    ],
    cta: "Inquire for Logistics Solutions",
    icon: "truck",
  },
  {
    id: "photographers",
    title: "Photographers & Media Teams",
    tagline: "AERIAL CINEMATOGRAPHY",
    description:
      "Cinema-calibrated imaging drones for broadcast documentaries, real estate visual showcases, brand campaigns, and live aerial coverage.",
    benefits: [
      "High-end 4K/6K cinema sensors with ProRes/RAW recording",
      "Ultra-stable 3-axis mechanical gimbals (±0.005° precision)",
      "Flexible dry equipment rental or wet rental with pilot",
      "Long flight endurance up to 45 minutes per battery",
    ],
    cta: "Explore Photography Fleet",
    icon: "camera",
  },
  {
    id: "industrial",
    title: "Industrial Organisations",
    tagline: "ASSET INTEGRITY & INSPECTION",
    description:
      "High-precision thermal and optical inspection platforms to audit critical powerlines, solar farms, industrial plants, and infrastructure safely.",
    benefits: [
      "Dual EO/IR thermal anomaly detection on power grids",
      "Eliminates dangerous human scaffolding and rope access",
      "Sub-centimeter structural photogrammetry for bridges and dams",
      "Annual Maintenance Contract (AMC) fleet uptime support",
    ],
    cta: "Request Industrial Audit",
    icon: "factory",
  },
  {
    id: "partners",
    title: "Local Operators & Service Partners",
    tagline: "BUILD THE NETWORK WITH US",
    description:
      "Opportunities for local drone pilots, rural entrepreneurs, and institutions to host or operate Drone Centres within the verified OJAS network.",
    benefits: [
      "Equipped with enterprise drone fleet and diagnostic tooling",
      "Comprehensive DGCA-aligned pilot and technician training",
      "Guaranteed genuine spare parts supply via District Drone Ports",
      "MILU AI dispatch platform connecting local customer demand",
    ],
    cta: "Apply for Drone Centre Partnership",
    icon: "network",
  },
];

export const partnersList: [string, string, string][] = [
  [
    "Local Service Delivery",
    "Local operators and rural entrepreneurs operating block-level Drone Centres to bring spraying and rental services directly to farmers.",
    "drone",
  ],
  [
    "Agricultural & Industrial Enterprises",
    "Sugar mills, agrochemical companies, utility grids, and infrastructure firms integrating OJAS aerial operations into their supply chains.",
    "factory",
  ],
  [
    "Drone Equipment & Sensor Technology",
    "Hardware, propulsion, sensor, and battery technology providers collaborating on ruggedized platforms suited for Indian climates.",
    "cpu",
  ],
  [
    "Institutions & Training Academies",
    "Accredited training organizations, universities, and research institutes advancing pilot skill certification and applied field trials.",
    "book",
  ],
  [
    "Strategic & Network Expansion",
    "Long-term public and private partners supporting the regional rollout of district-level Drone Ports across key agricultural states.",
    "target",
  ],
];
