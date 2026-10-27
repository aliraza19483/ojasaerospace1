export interface DroneFleetItem {
  id: string;
  name: string;
  category: "agricultural" | "vtol-cargo" | "fpv-cinematic" | "fixed-wing" | "field-ops";
  categoryLabel: string;
  image: string;
  realFieldImage?: string;
  videoUrl?: string;
  badge?: string;
  tagline: string;
  specs: {
    payload?: string;
    tankCapacity?: string;
    endurance?: string;
    flightSpeed?: string;
    mtow?: string;
    coverage?: string;
    wingspanOrFrame?: string;
    operatingRange?: string;
  };
  features: string[];
  description: string;
}

export const FLEET_ITEMS: DroneFleetItem[] = [
  // ── AGRICULTURAL SPRAYING FLEET ──
  {
    id: "raptor-agri-hex",
    name: "Raptor Agricultural Hexacopter",
    category: "agricultural",
    categoryLabel: "Agricultural Spraying",
    image: "/Agri%20drone/Raptor%20Drone%20Agricultural%20Hexacopter.jpg",
    realFieldImage: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.00%20AM.jpeg",
    badge: "Most Popular Crop Sprayer",
    tagline: "High-performance 30-litre precision sprayer — engineered for sugarcane, paddy & cotton belts.",
    specs: {
      tankCapacity: "30 Litres",
      payload: "30 kg Agrochemicals",
      endurance: "18-22 Mins (Full Load)",
      mtow: "65 kg",
      coverage: "35 Acres / charge",
      wingspanOrFrame: "2100 mm Hexacopter",
      operatingRange: "3-5 km Telemetry",
    },
    features: [
      "6-rotor carbon-fiber hexacopter frame with high-torque brushless motors",
      "Precision micron-droplet spray nozzles with variable flow control",
      "Obstacle avoidance radar and terrain-following ground sensors",
      "Quick-release intelligent LiPo battery system for zero-downtime field ops",
    ],
    description: "The Raptor is OJAS's flagship agricultural hexacopter — built for relentless field performance. Its rigid carbon-fiber frame and high-efficiency 6-rotor layout deliver a stable, powerful spray platform covering up to 35 acres per charge with zero chemical waste. Engineered for India's demanding crop belts.",
  },
  {
    id: "eft-z50p",
    name: "EFT Z50P 50L Heavy Sprayer",
    category: "agricultural",
    categoryLabel: "Agricultural Spraying",
    image: "/Agri%20drone/EFT%20Z50P%2050%20Litre%20Agriculture%20Spray%20Drone.png",
    realFieldImage: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.01%20AM.jpeg",
    badge: "Industrial Heavy Duty",
    tagline: "Massive 50-litre capacity engineered for commercial sugar mills & large acreage.",
    specs: {
      tankCapacity: "50 Litres",
      payload: "50 kg Liquid / Granular",
      endurance: "15-20 Mins (50kg Payload)",
      mtow: "95 kg",
      coverage: "55 Acres / charge",
      wingspanOrFrame: "2450 mm Heavy Frame",
      operatingRange: "5 km Ground Station",
    },
    features: [
      "Ultra-wide 9-11 meter effective spray swath for rapid coverage",
      "Dual-pump centrifugal spraying with independent flow monitors",
      "Supports granular seed and urea broadcasting spreaders",
      "IP67 water-resistant washable fuselage for easy field decontamination",
    ],
    description: "Engineered specifically for expansive sugarcane cooperatives and mill procurement zones, the Z50P minimizes downtime by delivering up to 50 litres of nano urea or crop protection formulation in a single flight sortie.",
  },
  {
    id: "eft-z20p",
    name: "EFT Z20P 20L Precision Sprayer",
    category: "agricultural",
    categoryLabel: "Agricultural Spraying",
    image: "/Agri%20drone/EFT%20Z20P%2020%20Litre%20Agriculture%20Spraying%20Drone.png",
    realFieldImage: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.01%20AM%20(1).jpeg",
    badge: "Agile & Lightweight",
    tagline: "Compact 20-litre sprayer ideal for fragmented plots and undulating terrain.",
    specs: {
      tankCapacity: "20 Litres",
      payload: "20 kg",
      endurance: "20-25 Mins",
      mtow: "48 kg",
      coverage: "22 Acres / charge",
      wingspanOrFrame: "1800 mm Hexacopter",
      operatingRange: "3 km",
    },
    features: [
      "Highly agile flight dynamics for orchards and hill slopes",
      "Plug-and-play GPS RTK centimetre-accuracy waypoint navigation",
      "Integrated FPV pilot camera with night vision spotlight",
      "Compatible with portable 3000W fast chargers",
    ],
    description: "The ideal operational platform for smallholder farmers, horticultural fruit orchards, and terrace farming where maneuverability between tight parcel boundaries is essential.",
  },
  {
    id: "eft-e610p",
    name: "EFT E610P Training & Spray Kit",
    category: "agricultural",
    categoryLabel: "Agricultural Spraying",
    image: "/Agri%20drone/EFT%20E610P%20Agriculture%20Spraying%20Hexacopter%20Drone%20KIT.png",
    realFieldImage: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.54%20AM.jpeg",
    badge: "Academy & Service Kit",
    tagline: "Modular agricultural airframe utilized across OJAS pilot academy and repair centres.",
    specs: {
      tankCapacity: "10-16 Litres",
      payload: "16 kg",
      endurance: "22 Mins",
      mtow: "38 kg",
      coverage: "15 Acres / charge",
      wingspanOrFrame: "1600 mm",
      operatingRange: "2.5 km",
    },
    features: [
      "Modular build optimized for student assembly and maintenance training",
      "Complete avionics breakdown for hands-on calibration experience",
      "Robust carbon-composite arm clamps for high duty-cycle landings",
      "Cost-effective spare parts availability at block Drone Centres",
    ],
    description: "Serving double duty as both an active light sprayer and our core instructional platform, the E610P allows trainees to master airframe assembly, calibration, motor thrust testing, and flight diagnostics.",
  },

  // ── HEAVY VTOL & LOGISTICS CARGO FLEET ──
  {
    id: "ayk-350-pro",
    name: "AYK 350 PRO Heavy Load VTOL",
    category: "vtol-cargo",
    categoryLabel: "VTOL & Cargo Logistics",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.46.09%20AM.jpeg",
    badge: "Cargo Delivery Combo",
    tagline: "Heavy-payload VTOL cargo carrier for critical medical transit and emergency supplies.",
    specs: {
      payload: "10-15 kg Cargo Pod",
      wingspanOrFrame: "3500 mm Wingspan",
      endurance: "2.5 Hours",
      flightSpeed: "100-120 km/h Cruise",
      mtow: "35 kg",
      operatingRange: "80-100 km BVLOS",
    },
    features: [
      "Vertical Takeoff and Landing (VTOL) requiring zero runway footprint",
      "Dual GPS RTK failover system with automated return-to-home",
      "Aero-optimized payload pod with temperature-regulated bay",
      "Seamless long-range beyond visual line of sight (BVLOS) datalink",
    ],
    description: "Engineered to deliver life-saving vaccines, emergency medicine, and critical supplies across remote mountain valleys and isolated terrains where road transit is delayed or blocked.",
  },
  {
    id: "baby-shark-260",
    name: "BABY SHARK 260 PRO VTOL",
    category: "vtol-cargo",
    categoryLabel: "VTOL & Cargo Logistics",
    image: "/FPV%20Drone/BABY%20SHARK%20260%20PRO%20VTOL.png",
    badge: "Pixhawk RTF System",
    tagline: "High-efficiency reconnaissance & delivery VTOL with Pixhawk Cube Orange.",
    specs: {
      payload: "3-5 kg",
      wingspanOrFrame: "2600 mm Wingspan",
      endurance: "150 Mins",
      flightSpeed: "85 km/h Cruise",
      mtow: "15 kg",
      operatingRange: "50 km",
    },
    features: [
      "Folding modular wings for rapid single-operator field deployment",
      "Pixhawk Cube Orange flight controller with Here 3 GNSS",
      "Handheld DA16S+ intelligent ground control telemetry transmitter",
      "Multi-sensor bay supporting thermal zoom cameras or cargo pods",
    ],
    description: "The Baby Shark 260 PRO pairs vertical takeoff flexibility with the endurance of fixed-wing flight, making it the choice platform for district surveillance and express parcel dispatch.",
  },
  {
    id: "foxtech-whale-360",
    name: "Foxtech Whale 360 Heavy VTOL",
    category: "vtol-cargo",
    categoryLabel: "VTOL & Cargo Logistics",
    image: "/FPV%20Drone/Foxtech%20Whale%20360%20VTOL.png",
    badge: "Max Endurance Carrier",
    tagline: "3.6-metre wingspan heavy transport VTOL for industrial corridor logistics.",
    specs: {
      payload: "10 kg",
      wingspanOrFrame: "3600 mm",
      endurance: "3.5 Hours",
      flightSpeed: "95 km/h",
      mtow: "38 kg",
      operatingRange: "120 km",
    },
    features: [
      "Aerodynamic Kevlar/carbon airframe withstands high mountain wind shears",
      "Autonomous waypoint mission routing with GCS live telemetry tracking",
      "Hot-swappable dual battery bays for continuous shuttle operations",
      "Smart parachute emergency recovery system for maximum airspace safety",
    ],
    description: "Designed for inter-district logistics between central Drone Ports, the Whale 360 connects regional hubs with minimal transit time and high payload reliability.",
  },

  // ── CINEMATIC & FPV DRONE PLATFORMS ──
  {
    id: "aaf-rapidx",
    name: "AAF RapidX Cinewhoop FPV",
    category: "fpv-cinematic",
    categoryLabel: "Photography & Cinematography",
    image: "/FPV%20Drone/AAF%20RapidX%20FPV%20Drone.png",
    badge: "Cinematic FPV",
    tagline: "Pro-grade ducted Cinewhoop with prop guards for close-proximity filming.",
    specs: {
      payload: "GoPro / Action Cam",
      wingspanOrFrame: "3.5 inch Ducted",
      endurance: "8-10 Mins per pack",
      flightSpeed: "130 km/h Top Speed",
      mtow: "680 g",
      operatingRange: "2 km Digital HD",
    },
    features: [
      "Durable duct guards protect bystanders, indoor subjects, and propellers",
      "Ultra-low latency digital HD video feed for precision cinematography",
      "Vibration-isolated carbon mount eliminating micro-jitter in footage",
      "High-power brushless motors capable of high-dynamic acrobatic maneuvers",
    ],
    description: "The ideal tool for architectural fly-throughs, cinematic commercial shoots, and indoor industrial visual inspection where traditional camera drones cannot safely operate.",
  },
  {
    id: "aaf-horizon-x",
    name: "AAF Horizon X Long-Range FPV",
    category: "fpv-cinematic",
    categoryLabel: "Photography & Cinematography",
    image: "/FPV%20Drone/AAF%20Horizon%20X%20FPV%20Drone.png",
    badge: "Mountain Exploration",
    tagline: "7-inch long-range carbon quad for high-altitude cinematic mountain flyovers.",
    specs: {
      payload: "Full Action Camera",
      wingspanOrFrame: "7 inch Long-Range",
      endurance: "18-22 Mins (Li-ion)",
      flightSpeed: "150 km/h",
      mtow: "1.1 kg",
      operatingRange: "10 km Long-Range Link",
    },
    features: [
      "GPS rescue mode with automatic elevation climb and return-to-launch",
      "High-torque stator motors optimized for mountain updrafts and thin air",
      "Low-drag airframe for smooth high-speed cinematic tracking shots",
      "High-capacity 6S Li-ion battery pack configuration",
    ],
    description: "Built for extreme terrain cinematography across Uttarakhand's Himalayan peaks and deep river gorges, the Horizon X delivers stable 4K capture over vast distances.",
  },

  // ── INDUSTRIAL & SURVEY FIXED-WING FLEET ──
  {
    id: "skyeye-2900",
    name: "SkyEye 2900mm Glass Fiber UAV",
    category: "fixed-wing",
    categoryLabel: "Industrial Inspection & Mapping",
    image: "/FPV%20Drone/SkyEye%20Glass%20Fiber%202900mm%20Fixed%20Wing%20Drone.png",
    realFieldImage: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.46.13%20AM.jpeg",
    badge: "Survey & Reconnaissance",
    tagline: "Long-endurance 2.9m composite fixed-wing platform for corridor inspection.",
    specs: {
      payload: "5-8 kg Sensor Pod",
      wingspanOrFrame: "2900 mm Wingspan",
      endurance: "3.5-4 Hours",
      flightSpeed: "90-110 km/h",
      mtow: "28 kg",
      operatingRange: "100+ km",
    },
    features: [
      "High-modulus glass-fiber and carbon-reinforced aerospace fuselage",
      "Spacious fuselage cabin accommodating dual LiDAR and multispectral sensors",
      "Optimized pusher propeller layout for uninterrupted forward camera views",
      "BVLOS mission telemetry integrated with central command dashboards",
    ],
    description: "A workhorse for industrial mapping, railway line surveying, forest canopy conservation, and highway infrastructure monitoring across state boundaries.",
  },
  {
    id: "skywalker-1800",
    name: "Skywalker 1800mm Survey UAV",
    category: "fixed-wing",
    categoryLabel: "Industrial Inspection & Mapping",
    image: "/FPV%20Drone/Skywalker%201800mm%20Fixed%20Wing%20Drone.png",
    badge: "Field Mapping",
    tagline: "Reliable, easy-to-hand-launch mapping aircraft for cadastral survey missions.",
    specs: {
      payload: "1.5 kg Mapping Camera",
      wingspanOrFrame: "1800 mm",
      endurance: "75 Mins",
      flightSpeed: "65 km/h",
      mtow: "3.2 kg",
      operatingRange: "20 km",
    },
    features: [
      "High-density EPO airframe with exceptional crash resistance",
      "Hand-launch capable with belly-skid landing for unprepared fields",
      "Sony high-resolution survey camera belly bay with RTK geo-tagging",
      "Low operational cost per square kilometre mapped",
    ],
    description: "The Skywalker 1800 provides block Drone Centres with rapid aerial surveying capability, mapping village land parcels and crop field boundaries with centimetre precision.",
  },
  {
    id: "training-cub-1200",
    name: "FM Piper Cub 1200mm Trainer",
    category: "fixed-wing",
    categoryLabel: "Industrial Inspection & Mapping",
    image: "/FPV%20Drone/FM%20Piper%20Cub%201200%20Beginner%20RC%20plane%201200mm%20wingspan.png",
    badge: "Pilot Foundation Trainer",
    tagline: "High-wing trainer aircraft used in OJAS RPTO flight schools for basic aerodynamics.",
    specs: {
      payload: "Student Avionics",
      wingspanOrFrame: "1200 mm Wingspan",
      endurance: "15 Mins",
      flightSpeed: "45 km/h",
      mtow: "1.2 kg",
      operatingRange: "1 km Line-of-Sight",
    },
    features: [
      "High-wing dihedral design provides inherent aerodynamic stability",
      "Durable landing gear designed for student touch-and-go practice",
      "Dual buddy-box transmitter support for real-time instructor override",
      "Teaches fundamentals of pitch, yaw, roll, lift, and stall recovery",
    ],
    description: "Before commanding multi-rotor and commercial VTOL craft, student pilots at the OJAS Academy master basic aerodynamics and manual flight attitudes using this high-wing trainer.",
  },
];

// ── AUTHENTIC GROUND OPERATIONS GALLERY ──
export interface GroundOperationProof {
  id: string;
  title: string;
  eyebrow: string;
  category: "agriculture" | "logistics" | "academy" | "laboratory" | "leadership";
  image: string;
  caption: string;
  location: string;
  tags: string[];
}

export const GROUND_OPERATION_PROOFS: GroundOperationProof[] = [
  {
    id: "iffco-nano-urea-field",
    title: "IFFCO Nano Urea & DAP Field Spraying Trials",
    eyebrow: "FIELD SPRAYING PARTNERSHIP",
    category: "agriculture",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.00%20AM.jpeg",
    caption: "OJAS agricultural hexacopter deployed at crop field boundary with official IFFCO Nano Urea & DAP cooperative banners.",
    location: "Jammu & Kashmir Field Belts / Sugarcane Outposts",
    tags: ["IFFCO", "Nano Fertilizers", "Live Operations", "Field Spraying"],
  },
  {
    id: "farmer-outreach-hal-banner",
    title: "Grassroots Farmer Outreach & Official HAL Banner",
    eyebrow: "COMMUNITY ENGAGEMENT",
    category: "agriculture",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.02%20AM.jpeg",
    caption: "Field pilots, growers, and agricultural officers posing with the spray aircraft and official banner: 'An initiative by OJAS Aerospace Private Limited & HAL'.",
    location: "Regional Agricultural Center Outpost",
    tags: ["OJAS Aerospace", "HAL Agro", "Farmers", "Cooperative"],
  },
  {
    id: "tank-fertilizer-refill",
    title: "Precision Nano Fertilizer Refilling",
    eyebrow: "OPERATIONAL PROTOCOL",
    category: "agriculture",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.01%20AM%20(1).jpeg",
    caption: "Flight technician preparing prescribed liquid dilution and refilling the agricultural spray tank prior to automated waypoint launch.",
    location: "Active Agricultural Parcel",
    tags: ["SOP Compliance", "Agro Spraying", "Liquid Formulation"],
  },
  {
    id: "medical-logistics-hexacopter",
    title: "Medical & Critical Supply Cargo UAV",
    eyebrow: "LOGISTICS & DISASTER RELIEF",
    category: "logistics",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.46.09%20AM.jpeg",
    caption: "Heavy-payload hexacopter equipped with Red-Cross medical payload container deployed on field landing strip for medicine transit trials.",
    location: "Regional Test Field",
    tags: ["Medical Delivery", "Payload Box", "Hexacopter", "Disaster Response"],
  },
  {
    id: "ojas-motor-safety-rig",
    title: "Propulsion Motor Testing Cage & Safety Bench",
    eyebrow: "DEHRADUN R&D FACILITY",
    category: "laboratory",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.50%20AM%20(1).jpeg",
    caption: "Heavy motor dynamometer test cage branded 'OJAS aerospace' used for measuring thrust curves, heat dissipation, and ESC telemetry.",
    location: "OJAS Central Labs, Dehradun",
    tags: ["R&D Rig", "Thrust Testing", "OJAS Aerospace", "Bench Safety"],
  },
  {
    id: "academy-graduation-batch",
    title: "RPTO Academy 40+ Drone Pilot Batch",
    eyebrow: "DGCA TRAINING EXCELLENCE",
    category: "academy",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.53%20AM%20(1).jpeg",
    caption: "A full batch of 40+ student pilots, instructors, and engineers posing with 3 heavy agricultural drones and battery banks.",
    location: "OJAS Flight Training Academy Facility",
    tags: ["40+ Students", "Graduation Batch", "DGCA RPTO", "Flight Training"],
  },
  {
    id: "classroom-theory-lecture",
    title: "Flight Theory & Airspace Regulations Lecture",
    eyebrow: "CLASSROOM INSTRUCTION",
    category: "academy",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.52%20AM%20(1).jpeg",
    caption: "Founder conducting an interactive lecture on aerodynamics, weather decision-making, and Digital Sky zone compliance.",
    location: "Academy Training Hall, Dehradun",
    tags: ["Airspace Regulations", "Aerodynamics", "Founder Lecture"],
  },
  {
    id: "hands-on-drone-assembly",
    title: "Airframe Mechanical Assembly Workshop",
    eyebrow: "REPAIR & MAINTENANCE",
    category: "laboratory",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.54%20AM.jpeg",
    caption: "Engineering students and technicians learning carbon-fiber boom assembly, landing gear calibration, and motor mount torqueing.",
    location: "Technical Systems Workshop",
    tags: ["Assembly Training", "Hardware", "Maintenance", "Diagnostics"],
  },
  {
    id: "gcs-telemetry-bench",
    title: "Ground Control Station (GCS) Telemetry Rig",
    eyebrow: "MILU AI DATA PLATFORM",
    category: "laboratory",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.56%20AM.jpeg",
    caption: "Agricultural aircraft on test bench paired with live telemetry tablet and smart ground controller running flight path mapping.",
    location: "Dehradun Software & Avionics Lab",
    tags: ["GCS Station", "Tablet Telemetry", "MILU AI", "Flight Plan"],
  },
  {
    id: "cockpit-founder-flight",
    title: "Aviation Roots & Cockpit Flight Experience",
    eyebrow: "AERONAUTICAL LEADERSHIP",
    category: "leadership",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.46.14%20AM.jpeg",
    caption: "Founder and flight leadership in cockpit with aviation headsets, maintaining continuous real-world flight operational experience.",
    location: "Regional Flight Sector",
    tags: ["Cockpit Flight", "Aviation Mindset", "Leadership"],
  },
  {
    id: "executive-headquarters-desk",
    title: "Strategic Operations at Dehradun HQ",
    eyebrow: "COMMAND HEADQUARTERS",
    category: "leadership",
    image: "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.48.14%20AM.jpeg",
    caption: "Executive workspace at Imperial Heights HQ, Dehradun, coordinating regional Drone Ports and block service networks.",
    location: "Imperial Heights, Dehradun",
    tags: ["Dehradun HQ", "Command Desk", "Network Coordination"],
  },
];

// ── FIELD DEMONSTRATION VIDEOS ──
export interface FieldVideoItem {
  id: string;
  title: string;
  videoUrl: string;
  caption: string;
}

export const FIELD_VIDEOS: FieldVideoItem[] = [
  {
    id: "field-spray-pass-1",
    title: "Live Crop Spraying Flight Demonstration #1",
    videoUrl: "/all%20image/WhatsApp%20Video%202026-09-22%20at%2011.44.59%20AM.mp4",
    caption: "Low-altitude precision swath spray run over agricultural crop parcel demonstrating zero chemical drift.",
  },
  {
    id: "field-spray-pass-2",
    title: "Agricultural Drone Field Takeoff & Maneuver #2",
    videoUrl: "/all%20image/WhatsApp%20Video%202026-09-22%20at%2011.45.00%20AM.mp4",
    caption: "High-lift stable hover and automated waypoint trajectory transition across boundary fences.",
  },
  {
    id: "field-spray-pass-3",
    title: "Multi-Rotor Swath Dispersion Flight #3",
    videoUrl: "/all%20image/WhatsApp%20Video%202026-09-22%20at%2011.46.18%20AM.mp4",
    caption: "Centrifugal spray nozzles active during high-speed forward run over field crops.",
  },
];
