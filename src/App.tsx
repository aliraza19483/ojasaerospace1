import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { InquiryModal, triggerInquiry } from "./components/ui/InquiryModal";
import logo from "./assets/logo-gold.webp";
import aboutImage from "./assets/about.webp";
import technologyImage from "./assets/technology-impact.webp";
import miluImage from "./assets/milu-ai.webp";
import ecosystemImage from "./assets/ecosystem.webp";
import careersImage from "./assets/careers.webp";
import teamDroneLab from "./assets/team-drone-lab.webp";
import teamFieldDeployment from "./assets/team-field-deployment.webp";
import surveillanceRecon from "./assets/solutions/surveillance-recon.jpg";
import earthObservationImage from "./assets/solutions/earth-observation.webp";
import precisionAgricultureImage from "./assets/solutions/precision-agriculture.webp";
import infrastructureMonitoringImage from "./assets/solutions/infrastructure-monitoring.webp";
import disasterResponseImage from "./assets/solutions/disaster-response.webp";
import autonomousLogisticsImage from "./assets/solutions/autonomous-logistics.jpg";
import { useTheme } from "./utils/theme";
import Hero from "./Hero";
import Solutions from "./Solutions";
import { CategoriesPage } from "./pages/CategoriesPage";
import { ServicesPage as ModularServicesPage } from "./pages/ServicesPage";
import { MiluPage as ModularMiluPage } from "./pages/MiluPage";
import { NetworkPage as ModularNetworkPage } from "./pages/NetworkPage";
import { AboutPage as ModularAboutPage } from "./pages/AboutPage";
import { ContactPage as ModularContactPage } from "./pages/ContactPage";
import { PartnersPage as ModularPartnersPage } from "./pages/PartnersPage";
import { NewsPage as ModularNewsPage } from "./pages/NewsPage";
import { TeamPage as ModularTeamPage } from "./pages/TeamPage";
import { CareersPage as ModularCareersPage } from "./pages/CareersPage";
import { TechnologyPage as ModularTechnologyPage } from "./pages/TechnologyPage";
import { SectorsPage as ModularSectorsPage } from "./pages/SectorsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { CompliancePage } from "./pages/CompliancePage";
import { InteractiveFleetShowcase } from "./components/sections/InteractiveFleetShowcase";
import { initScrollReveal, triggerScrollRevealUpdate } from "./utils/scrollReveal";

import harshitDixit from "./assets/team/harshit-dixit.jpg";
import aliRaza from "./assets/team/ali-raza.webp";
import satyamJha from "./assets/team/satyam-jha.jpg";
import awadheshPathak from "./assets/team/awadhesh-pathak.webp";
import ishanShrivastava from "./assets/team/ishan-srivastava.jpg";
import riteshKumar from "./assets/team/ritesh-kumar.jpg";
import sumitShukla from "./assets/team/sumit-shukla.jpg";
import shwetaSharma from "./assets/team/shweta-sharma.jpg";
import adityaSrivastava from "./assets/team/aditya-srivastava.webp";
import abhishekDixit from "./assets/team/abhishek-dixit.jpg";
import prakharGupta from "./assets/team/prakhar-gupta.webp";
import paramjeetBind from "./assets/team/paramjeet-bind.webp";
import mayankAgarwal from "./assets/team/mayank-agarwal.webp";
import shubhamChaudhary from "./assets/team/shubham-chaudhary.jpg";
import aviralSingh from "./assets/team/aviral-singh.webp";

type Item = {
  title: string;
  text: string;
  icon?: string;
  image?: string;
  slug?: string;
};
const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const solutionPath = (s: string) => `/solutions/${slug(s)}`;
const servicePath = (s: string) => `/services/${slug(s)}`;
function navigate(path: string) {
  if (path === location.pathname) return;
  history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}
function go(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const solutions: Item[] = [
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

const sectorData: Item[] = [
  {
    title: "Agriculture & Rural Systems",
    text: "Farming, rural infrastructure, field intelligence and agricultural operations.",
    icon: "leaf",
  },
  {
    title: "Infrastructure & Industrial",
    text: "Construction, industrial assets, inspection, surveying and monitoring.",
    icon: "factory",
  },
  {
    title: "Security & Public Safety",
    text: "Surveillance, reconnaissance, emergency awareness and public-safety operations.",
    icon: "shield",
  },
  {
    title: "Logistics & Delivery",
    text: "Medical, agricultural, emergency and remote delivery operations.",
    icon: "truck",
  },
  {
    title: "Geospatial & Visual Intelligence",
    text: "Surveying, mapping, imaging and geospatial information.",
    icon: "globe",
  },
  {
    title: "Energy & Utilities",
    text: "Power, solar, utilities and associated infrastructure.",
    icon: "energy",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// SERVICES — 4 core offerings: Sale & Integration, Repair & Maintenance,
// Rental Fleets, and Professional Pilot Training.
// ─────────────────────────────────────────────────────────────────────────
type ServiceOffering = {
  title: string;
  description: string;
  visual: string;
  specs?: { label: string; value: string }[];
};
type ServiceStep = { step: string; title: string; description: string };
type ServiceFAQ = { q: string; a: string };
type ServiceContent = {
  slug: string;
  icon: string;
  eyebrow: string;
  title: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  includesHeading: string;
  includesIntro: string;
  includes: ServiceOffering[];
  processHeading: string;
  process: ServiceStep[];
  whyHeading: string;
  why: { title: string; description: string }[];
  pricingHeading: string;
  pricingNote: string;
  pricingCta: string;
  faq: ServiceFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
};
const services: ServiceContent[] = [
  {
    slug: "drone-sale",
    icon: "drone",
    eyebrow: "Drone Sale",
    title: "The right drone, built for the work it needs to do.",
    tagline:
      "Agriculture, mapping, surveillance and custom platforms — supplied, configured and registered, ready for the field.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Book a Demo Flight",
    includesHeading: "Choose by category",
    includesIntro:
      "Every platform is matched to its job — payload, endurance and sensors selected for the environment it will operate in.",
    includes: [
      {
        title: "Agriculture Spraying Drones",
        visual: "leaf",
        description:
          "High-payload spraying platforms for precision input application across crop fields.",
        specs: [
          { label: "Payload", value: "10 – 40 L tank" },
          { label: "Flight Time", value: "18 – 25 min / cycle" },
          { label: "Range", value: "Up to 2 km (VLOS)" },
          { label: "Sensor", value: "RTK-GPS + terrain-follow radar" },
        ],
      },
      {
        title: "Mapping & Survey Drones",
        visual: "map",
        description:
          "Fixed-wing and multirotor platforms for orthomosaics, topographic survey and land digitisation.",
        specs: [
          { label: "Payload", value: "Up to 1.5 kg camera / LiDAR" },
          { label: "Flight Time", value: "35 – 55 min" },
          { label: "Range", value: "Up to 5 km" },
          { label: "Sensor", value: "RGB / multispectral / LiDAR" },
        ],
      },
      {
        title: "Surveillance & Inspection Drones",
        visual: "eye",
        description:
          "Stabilised, low-light-capable platforms for perimeter monitoring and infrastructure inspection.",
        specs: [
          { label: "Payload", value: "Gimbal camera + thermal (optional)" },
          { label: "Flight Time", value: "28 – 40 min" },
          { label: "Range", value: "Up to 7 km" },
          { label: "Sensor", value: "EO/IR gimbal, zoom optics" },
        ],
      },
      {
        title: "Custom & Enterprise-Built Drones",
        visual: "cpu",
        description:
          "Purpose-built configurations and integration for non-standard payloads, mission profiles or enterprise fleets.",
        specs: [
          { label: "Payload", value: "Mission-specific" },
          { label: "Flight Time", value: "Mission-specific" },
          { label: "Range", value: "Mission-specific" },
          { label: "Sensor", value: "Configurable" },
        ],
      },
    ],
    processHeading: "From enquiry to delivery",
    process: [
      { step: "01", title: "Enquiry", description: "Tell us the use case, budget and site conditions." },
      { step: "02", title: "Assessment", description: "We recommend a platform and configuration to match the job." },
      { step: "03", title: "Registration Support", description: "Assistance with DGCA registration and UIN so the drone is legally airworthy before it flies." },
      { step: "04", title: "Delivery & Handover", description: "Platform delivered, tested and handed over with an orientation flight." },
    ],
    whyHeading: "Why buy through OJAS",
    why: [
      { title: "DGCA Registration Assistance", description: "We help you through UIN registration so your drone is compliant from day one." },
      { title: "Warranty & After-Sales", description: "Every platform ships with warranty cover and ongoing service support." },
      { title: "Field-Tested Configurations", description: "Platforms are configured and tested for real operating conditions before delivery." },
      { title: "Financing on Request", description: "EMI / financing options available for eligible buyers." },
    ],
    pricingHeading: "Pricing",
    pricingNote: "Pricing depends on platform, payload and configuration.",
    pricingCta: "Get a Custom Quote",
    faq: [
      { q: "Do you help with DGCA registration?", a: "Yes — we guide you through UIN registration so the drone is legally cleared to fly before delivery." },
      { q: "Can I get a demo before buying?", a: "Yes, demo flights can be arranged at our facility or, where feasible, on-site." },
      { q: "Is financing available?", a: "EMI options are available for eligible buyers on request — ask our team for current terms." },
      { q: "What's covered under warranty?", a: "Standard warranty covers manufacturing defects and core hardware; ask for full terms specific to your platform." },
    ],
    ctaTitle: "Ready to find the right drone for your operation?",
    ctaSubtitle: "Tell us what you're trying to do — we'll recommend a platform and configuration.",
  },
  {
    slug: "drone-repair-maintenance",
    icon: "wrench",
    eyebrow: "Repair & Maintenance",
    title: "Keep your fleet flying, not grounded.",
    tagline:
      "Certified technicians, genuine parts and fast turnaround — for hardware, cameras, batteries and firmware.",
    ctaPrimary: "Book a Repair",
    ctaSecondary: "Request an AMC",
    includesHeading: "What we repair",
    includesIntro: "From a single fix to full fleet upkeep — covered under one roof.",
    includes: [
      { title: "Hardware Repair", visual: "wrench", description: "Motors, ESCs, frames and propellers — diagnosed and replaced with genuine parts." },
      { title: "Camera & Gimbal Repair", visual: "camera", description: "Calibration and repair of gimbal stabilisation and imaging payloads." },
      { title: "Battery Health & Replacement", visual: "bolt", description: "Battery diagnostics, cell health checks and safe replacement." },
      { title: "Firmware & Software Issues", visual: "database", description: "Firmware updates, calibration resets and software troubleshooting." },
    ],
    processHeading: "How servicing works",
    process: [
      { step: "01", title: "Book", description: "Log the issue online or over call — pickup or drop-off, your choice." },
      { step: "02", title: "Diagnose", description: "Certified technicians run a full diagnostic within 48 hours." },
      { step: "03", title: "Repair", description: "Genuine parts used; you're informed before any paid replacement." },
      { step: "04", title: "Return & Test Flight", description: "Unit tested before it's returned to you, ready to fly." },
    ],
    whyHeading: "Why service with OJAS",
    why: [
      { title: "Certified Technicians", description: "Every repair is handled by trained, certified hands." },
      { title: "Genuine Spare Parts", description: "No third-party substitutes — original components only." },
      { title: "48-Hour Diagnostic Promise", description: "You get a clear diagnosis and quote within 48 hours." },
      { title: "Pickup & Drop Available", description: "On-site or courier pickup for eligible locations." },
    ],
    pricingHeading: "AMC Plans",
    pricingNote: "Annual Maintenance Contracts available — fixed-cost coverage instead of pay-per-repair.",
    pricingCta: "Get a Custom Quote",
    faq: [
      { q: "How long does a repair take?", a: "Most repairs are diagnosed within 48 hours; turnaround for the fix itself depends on parts availability." },
      { q: "What is an AMC?", a: "An Annual Maintenance Contract covers scheduled servicing and priority repairs for a fixed annual cost." },
      { q: "Do you offer pickup and drop?", a: "Yes, for eligible locations — ask our team when booking." },
      { q: "Are spare parts genuine?", a: "Yes, we use only genuine or OEM-approved parts for every repair." },
    ],
    ctaTitle: "Don't let downtime ground your operation.",
    ctaSubtitle: "Book a repair or set up an AMC and keep your fleet field-ready.",
  },
  {
    slug: "drone-rental",
    icon: "route",
    eyebrow: "Drone Rental",
    title: "Access the right drone, only when you need it.",
    tagline:
      "Daily, weekly, monthly or seasonal rentals — with or without a pilot, delivered where you operate.",
    ctaPrimary: "Check Availability",
    ctaSecondary: "Get a Rental Quote",
    includesHeading: "Rental categories",
    includesIntro: "Pick the platform for the job — and the duration that fits it.",
    includes: [
      { title: "Agri Spraying Drone Rental", visual: "leaf", description: "Season-based rentals for spraying operations during peak crop cycles." },
      { title: "Survey & Mapping Drone Rental", visual: "map", description: "Short-term access to mapping platforms for one-off or periodic surveys." },
      { title: "Event & Media Drone Rental", visual: "camera", description: "Camera-equipped drones for event coverage and media production." },
      { title: "Industrial Inspection Drone Rental", visual: "factory", description: "Inspection-grade platforms for infrastructure and facility checks." },
    ],
    processHeading: "How rental works",
    process: [
      { step: "01", title: "Choose Duration", description: "Daily, weekly, monthly or full-season — whatever the job needs." },
      { step: "02", title: "Pilot Option", description: "Take the drone self-operate, or add an OJAS pilot." },
      { step: "03", title: "Delivery & Setup", description: "Delivered and set up at your site within the service area." },
      { step: "04", title: "Return", description: "Simple pickup at the end of the rental period." },
    ],
    whyHeading: "Why rent with OJAS",
    why: [
      { title: "Pilot-Included or Self-Operate", description: "Choose the option that fits your team's capability." },
      { title: "Insurance Coverage", description: "Damage coverage terms included with every rental agreement." },
      { title: "On-Site Delivery & Setup", description: "We deliver and set up within our service area." },
      { title: "Transparent Deposit Terms", description: "Clear security deposit terms, explained upfront." },
    ],
    pricingHeading: "Rental Plans",
    pricingNote: "Rates vary by platform, duration and pilot option.",
    pricingCta: "Get a Rental Quote",
    faq: [
      { q: "Can I rent without a pilot?", a: "Yes — self-operate rentals are available if you have a qualified operator." },
      { q: "Is insurance included?", a: "Yes, damage coverage terms are included; full terms are shared at booking." },
      { q: "What's the minimum rental period?", a: "Daily rentals are available; longer terms get better rates." },
      { q: "Do you deliver to the site?", a: "Yes, within our service area — confirm coverage for your location when booking." },
    ],
    ctaTitle: "Get the drone you need, exactly when you need it.",
    ctaSubtitle: "Check availability for your location and dates.",
  },
  {
    slug: "drone-training",
    icon: "network",
    eyebrow: "Drone Training",
    title: "Learn to fly. Get certified. Get to work.",
    tagline: "Structured, instructor-led training — from first flight to professional operation.",
    ctaPrimary: "Enroll Now",
    ctaSecondary: "Request Batch Schedule",
    includesHeading: "Courses offered",
    includesIntro: "Programmes for individuals, operators and organisations.",
    includes: [
      { title: "Basic / Beginner Drone Flying", visual: "drone", description: "Foundational flight training for first-time pilots." },
      {
        title: "Remote Pilot Certificate Course",
        visual: "book",
        description: "Structured preparation for remote pilot certification, covering theory, simulator training, and DGCA curriculum compliance.",
      },
      { title: "Agri-Drone Operator Certification", visual: "leaf", description: "Focused training for agricultural spraying and survey operations." },
      { title: "Corporate / Institutional Batch Training", visual: "network", description: "Custom batch programmes for organisations building in-house drone capability." },
    ],
    processHeading: "Course structure",
    process: [
      { step: "01", title: "Theory", description: "Classroom sessions covering regulations, safety and flight fundamentals." },
      { step: "02", title: "Simulator", description: "Simulator-based practice before real flight time." },
      { step: "03", title: "Practical Flying Hours", description: "Supervised flight hours to build real operating skill." },
      { step: "04", title: "Certification", description: "Certificate issued on successful completion of the programme." },
    ],
    whyHeading: "Why train with OJAS",
    why: [
      { title: "Instructor-Led Programme", description: "Small batches, hands-on instruction throughout." },
      { title: "Theory + Simulator + Practical", description: "A complete path from classroom to real flight." },
      { title: "Certificate on Completion", description: "Documented proof of training completion." },
      { title: "Placement Assistance", description: "Guidance connecting trained pilots to field opportunities." },
    ],
    pricingHeading: "Batches & Fees",
    pricingNote: "Fees vary by course and batch size.",
    pricingCta: "Request Batch Schedule",
    faq: [
      { q: "Do I need prior experience?", a: "No — the beginner course assumes no prior flying experience." },
      { q: "How long is the course?", a: "Duration varies by course; ask our team for the current schedule." },
      { q: "Is certification provided?", a: "A certificate of completion is issued at the end of every programme." },
      { q: "Do you offer batch training for companies?", a: "Yes — corporate and institutional batches can be arranged on request." },
    ],
    ctaTitle: "Start your journey to becoming a certified drone pilot.",
    ctaSubtitle: "Batches are forming — reserve your seat.",
  },
];

const techGroups = [
  {
    title: "Aerial & Remote Sensing",
    icon: "satellite",
    items: [
      "Multispectral Sensors",
      "Drone Data Pipeline",
      "Drone Integration",
      "Edge Computing",
      "LoRaWAN IoT Sensors",
    ],
  },
  {
    title: "Geospatial & Earth Intelligence",
    icon: "globe",
    items: [
      "SfM Orthoprocessing",
      "Sentinel-2 Satellite",
      "ISRO Bhuvan API",
      "GeoTIFF Prescription",
      "Geospatial Database",
      "Cloud Digital Twin Engine",
    ],
  },
  {
    title: "AI, ML & Decision Intelligence",
    icon: "brain",
    items: [
      "AI Disease Classifier",
      "Random Forest + LSTM",
      "Deep Learning CNN",
      "LSTM Time-Series",
      "NLP Multilingual",
      "Price Forecasting AI",
      "Weather-Adaptive AI",
    ],
  },
  {
    title: "Agriculture Intelligence",
    icon: "leaf",
    items: [
      "NDVI / NDRE Algorithm",
      "IMD Weather API",
      "Agmarknet API",
      "Agmarknet Integration",
      "e-NAM Integration",
      "HAL ERP Integration",
    ],
  },
  {
    title: "Autonomy, Fleet & Field Operations",
    icon: "route",
    items: [
      "Reinforcement Learning",
      "GPS Fleet Management",
      "Digital Booking App",
      "Predictive Maintenance",
      "Geofenced Matching",
      "Digital Muster Roll",
      "Offline-First Mobile App",
    ],
  },
  {
    title: "Digital Infrastructure & Trust",
    icon: "database",
    items: [
      "Blockchain Traceability",
      "Blockchain Audit Trail",
      "Worker Verification API",
      "UPI Direct Payment",
      "Cloud Dashboard",
      "Real-Time Dashboard",
      "API Ecosystem",
      "Digital Locker Integration",
      "PM-KUSUM Integration",
    ],
  },
];

const networkNodes = [
  [
    "MILU AI NETWORK",
    "The complete distributed intelligence architecture.",
    "network",
  ],
  ["MILU HUB", "A higher-level coordination and aggregation layer.", "globe"],
  [
    "MILU CENTRE",
    "A substantial operating environment for connected capabilities.",
    "factory",
  ],
  [
    "MILU STATION",
    "A local operational node bringing systems closer to the field.",
    "drone",
  ],
  [
    "MILU POINT",
    "A distributed edge presence where intelligence and services can reach the operating environment.",
    "signal",
  ],
];

const newsSeed = [
  {
    title: "Decentralized UAV Telemetry Grid Deployed in Uttarakhand",
    category: "News",
    date: "2026.09.15",
    text: "OJAS successfully deploys mesh telemetry relays connecting autonomous drone operations across high-altitude Himalayan valley corridors.",
    image: ecosystemImage,
  },
  {
    title: "12,000+ Sq Km Infrastructure Survey Milestone Achieved",
    category: "News",
    date: "2026.08.28",
    text: "Our enterprise drone inspection fleet completes multi-sensor aerial audit for national power grid and highway infrastructure.",
    image: ecosystemImage,
  },
  {
    title: "OJAS Technology Roadmap: Autonomous Edge Inferencing 2027",
    category: "News",
    date: "2026.07.10",
    text: "Strategic engineering roadmap outlining real-time onboard computer vision, obstacle avoidance, and distributed flight compute.",
    image: ecosystemImage,
  },
  {
    title: "High-Precision Crop Intelligence Across 50,000 Hectares",
    category: "Field Stories",
    date: "2026.07.18",
    text: "Multispectral scanning and AI canopy analysis drive a verified 22% reduction in chemical runoff and 18% yield improvement.",
    image: aboutImage,
  },
  {
    title: "LiDAR Topographic Mapping for Dedicated Freight Corridors",
    category: "Field Stories",
    date: "2026.06.22",
    text: "High-density point cloud generation delivers sub-centimeter digital terrain models for rail infrastructure expansion.",
    image: aboutImage,
  },
  {
    title: "Rapid Emergency Response Deployment in Coastal Flood Zones",
    category: "Field Stories",
    date: "2026.06.05",
    text: "Autonomous thermal-imaging UAV swarms deployed within 12 minutes to coordinate rescue operations and perimeter breach tracking.",
    image: aboutImage,
  },
  {
    title: "OJAS Cinematic: High-Altitude Flight Systems in Action",
    category: "Media",
    date: "2026.06.14",
    text: "Official 4K documentary footage showcasing next-generation multirotor durability in sub-zero alpine conditions.",
    image: technologyImage,
  },
  {
    title: "MILU AI Visual Benchmark: 99.4% Micro-Crack Detection",
    category: "Media",
    date: "2026.05.20",
    text: "Benchmark video released illustrating real-time structural defect segmentation on wind turbines and high-voltage pylons.",
    image: technologyImage,
  },
  {
    title: "Aerial Imaging Gallery: High-Resolution Industrial Audits",
    category: "Media",
    date: "2026.04.18",
    text: "Curated collection of 100MP orthomosaics and multispectral composite imagery from northern industrial sectors.",
    image: technologyImage,
  },
  {
    title: "Next-Gen Multispectral Crop Health Neural Classification",
    category: "Technology",
    date: "2026.05.12",
    text: "Deep neural network architecture classifies subtle leaf moisture stress 7 days prior to visual yellowing symptoms.",
    image: technologyImage,
  },
  {
    title: "Distributed Geospatial Pipeline: 45-Minute Orthomosaics",
    category: "Technology",
    date: "2026.04.25",
    text: "GPU-accelerated cloud photogrammetry reduces 10,000-image aerial reconstruction time from 14 hours down to 45 minutes.",
    image: technologyImage,
  },
  {
    title: "Autonomous Swarm Collision Avoidance Algorithm Validated",
    category: "Technology",
    date: "2026.03.30",
    text: "Peer-reviewed swarm decentralization algorithms demonstrate zero packet-loss synchronization under GPS-denied scenarios.",
    image: technologyImage,
  },
  {
    title: "National Aerospace & Defense Conclave Keynote Address",
    category: "Events",
    date: "2026.04.05",
    text: "OJAS leadership presents vision for sovereign indigenous aerospace capabilities and dual-use unmanned aerial systems.",
    image: careersImage,
  },
  {
    title: "Live Tactical Field Demonstration in Dehradun",
    category: "Events",
    date: "2026.03.18",
    text: "Invited enterprise partners observe live autonomous takeoff, waypoint scanning, and automated battery hot-swapping.",
    image: careersImage,
  },
  {
    title: "Academic & Research Consortium Partnership Announcement",
    category: "Events",
    date: "2026.02.26",
    text: "Joint applied R&D initiative established with premier technology institutes to advance hybrid propulsion research.",
    image: careersImage,
  },
];
const teamSeed = [
  {
    name: "Harshit Dixit",
    role: "Head & Chief of Staff",
    department: "Administration",
    image: harshitDixit,
    category: "LEADERSHIP",
  },
  {
    name: "Paramjeet Bind",
    role: "Tech Head – Aircraft & Missile Development",
    department: "Hardware & R&D",
    image: paramjeetBind,
    category: "AEROSPACE & R&D",
  },
  {
    name: "Abhishek Dixit",
    role: "Advisor & Head – Agriculture R&D",
    department: "Agriculture R&D",
    image: abhishekDixit,
    category: "AEROSPACE & R&D",
  },
  {
    name: "Satyam Jha",
    role: "Software Development Engineer",
    department: "IT",
    image: satyamJha,
    category: "TECHNOLOGY & AI",
  },
  {
    name: "Ishan Shrivastava",
    role: "Software Development Engineer",
    department: "IT",
    image: ishanShrivastava,
    category: "TECHNOLOGY & AI",
  },
  {
    name: "Ritesh Kumar",
    role: "Software Development Engineer",
    department: "IT",
    image: riteshKumar,
    category: "TECHNOLOGY & AI",
  },
  {
    name: "Ali Raza",
    role: "Associate Software Engineer",
    department: "IT",
    image: aliRaza,
    category: "TECHNOLOGY & AI",
  },
  {
    name: "Awadhesh Pathak",
    role: "Associate Software Engineer",
    department: "IT",
    image: awadheshPathak,
    category: "TECHNOLOGY & AI",
  },
  {
    name: "Sumit Shukla",
    role: "Software Development Engineer",
    department: "IT",
    image: sumitShukla,
    category: "TECHNOLOGY & AI",
  },
  {
    name: "Shweta Sharma",
    role: "HR & Marketing Manager",
    department: "HR & Marketing",
    image: shwetaSharma,
    category: "OPERATIONS",
  },
  {
    name: "Aditya Srivastava",
    role: "Business Analyst",
    department: "Finance",
    image: adityaSrivastava,
    category: "BUSINESS",
  },
  {
    name: "Prakhar Gupta",
    role: "UI / UX Designer",
    department: "IT",
    image: prakharGupta,
    category: "DESIGN",
  },
  {
    name: "Mayank Agarwal",
    role: "UI / UX Designer",
    department: "IT",
    image: mayankAgarwal,
    category: "DESIGN",
  },
  {
    name: "Shubham Chaudhary",
    role: "Associate Software Engineer",
    department: "IT",
    image: shubhamChaudhary,
    category: "TECHNOLOGY & AI",
  },
  {
    name: "Aviral Singh",
    role: "Digital Marketing Executive",
    department: "Digital Marketing",
    image: aviralSingh,
    category: "MARKETING",
  },
];
const careerSeed = [
  {
    title: "Lead Avionics & Flight Control Engineer",
    text: "Design and validate flight controllers, RTK navigation integration, sensor fusion, and fail-safe autonomy protocols for multi-rotor systems.",
    icon: "cpu",
    department: "AEROSPACE",
    location: "Dehradun Lab",
    type: "Full-Time",
  },
  {
    title: "Senior Computer Vision / Edge AI Engineer",
    text: "Develop low-latency perception models for onboard edge compute (NVIDIA Jetson) delivering real-time anomaly and obstacle segmentation.",
    icon: "brain",
    department: "AI & SOFTWARE",
    location: "Hybrid / Dehradun",
    type: "Full-Time",
  },
  {
    title: "Chief Drone Fleet Operations Lead",
    text: "Direct commercial flight missions, pilot scheduling, airworthiness safety protocols, and DGCA regulatory compliance across national deployments.",
    icon: "drone",
    department: "FIELD",
    location: "Field Deployments",
    type: "Full-Time",
  },
  {
    title: "Geospatial Data Pipeline Engineer",
    text: "Architect automated photogrammetry and LiDAR point cloud pipelines processing terabytes of multi-band aerial telemetry into GIS insights.",
    icon: "map",
    department: "ENGINEERING",
    location: "Remote / Hybrid",
    type: "Full-Time",
  },
  {
    title: "Precision Agronomy Systems Specialist",
    text: "Translate multispectral NDVI, NDRE and thermal aerial data into prescription variable-rate application maps for agriculture cooperatives.",
    icon: "leaf",
    department: "AGRICULTURE",
    location: "Punjab / North India",
    type: "Full-Time",
  },
  {
    title: "UAV Airframe Design & Composite Specialist",
    text: "Carbon-fiber composite fabrication, structural FEA analysis, payload bay modularization, and aerodynamic airframe optimization.",
    icon: "wrench",
    department: "AEROSPACE",
    location: "Dehradun Lab",
    type: "Full-Time",
  },
  {
    title: "Mission Planning & Ground Control Systems Dev",
    text: "Develop telemetry dashboards, BVLOS mission routing, and automated geofencing software interfacing with national airspace systems.",
    icon: "route",
    department: "AI & SOFTWARE",
    location: "Hybrid",
    type: "Full-Time",
  },
  {
    title: "Enterprise Solutions & Defense Liaison",
    text: "Lead enterprise technical proposals and partnership agreements across industrial, energy, and sovereign defense aerospace sectors.",
    icon: "network",
    department: "BUSINESS",
    location: "Delhi NCR / Dehradun",
    type: "Full-Time",
  },
];

function Icon({ name }: { name?: string }) {
  const glyph: Record<string, string> = {
    eye: "◉",
    earth: "◌",
    leaf: "⌁",
    grid: "⌗",
    alert: "◇",
    route: "⌁",
    drone: "✦",
    map: "⌖",
    scan: "◎",
    crop: "⌁",
    truck: "→",
    shield: "◇",
    box: "□",
    wrench: "⌁",
    book: "▱",
    network: "⌘",
    satellite: "✧",
    cpu: "◈",
    signal: "⌁",
    bolt: "ϟ",
    database: "◍",
    brain: "✦",
    target: "⊙",
    factory: "▦",
    energy: "ϟ",
    globe: "◎",
    camera: "▣",
  };
  return (
    <span className={`lineIcon icon-${name}`} aria-hidden="true">
      {glyph[name || ""] || "✦"}
    </span>
  );
}
function Question({ children }: { children: React.ReactNode }) {
  return <div className="sectionQuestion">{children}</div>;
}
function Eyebrow({
  children,
  accent = "gold",
}: {
  children: React.ReactNode;
  accent?: "gold" | "purple";
}) {
  return (
    <div className={`eyebrow ${accent}`}>
      <span />
      {children}
    </div>
  );
}
function CompanyMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="companyMenu">
      <div className="companyMenuInner">
        <div>
          <Eyebrow accent="purple">COMPANY</Eyebrow>
          <h3>
            The people, places
            <br />
            and ideas behind OJAS.
          </h3>
        </div>
        <div className="companyMenuLinks">
          {[
            ["ABOUT", "/about", "What drives OJAS?"],
            ["NETWORK", "/network", "People, places & systems"],
            ["PARTNERS", "/partners", "Building the network together"],
            ["NEWS & MEDIA", "/news", "What is happening in the field?"],
            ["TEAM", "/team", "The people behind OJAS"],
            ["MILU AI", "/milu-ai", "Intelligence that connects"],
          ].map(([a, b, c]) => (
            <button
              key={b}
              onClick={() => {
                onClose();
                navigate(b);
              }}
            >
              <span>{a}</span>
              <small>{c}</small>
              <b>↗</b>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
const navDropdowns: Record<string, { label: string; url: string }[]> = {
  "/services": [
    { label: "Drone Sales", url: "/services/drone-sale" },
    { label: "Repair & Maintenance", url: "/services/drone-repair-maintenance" },
    { label: "Drone Training", url: "/services/drone-training" },
    { label: "Drone Rental", url: "/services/drone-rental" },
  ],
  "/network": [
    { label: "Dehradun Central HQ", url: "/network" },
    { label: "District Drone Ports", url: "/network" },
    { label: "Block Drone Centres", url: "/network" },
    { label: "Verified Facilities Table", url: "/network" },
  ],
};
function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [path, setPath] = useState(location.pathname);
  const [menu, setMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const f = () => setPath(location.pathname);
    addEventListener("popstate", f);
    return () => removeEventListener("popstate", f);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("mobileNavOpen", mobileOpen);
    return () => document.body.classList.remove("mobileNavOpen");
  }, [mobileOpen]);
  const home = path === "/" || path === "/home";
  const links: [string, string, string?][] = [
    ["HOME", "/"],
    ["DRONE CATEGORIES", "/categories"],
    ["SERVICES", "/services"],
    ["MILU AI", "/milu-ai"],
    ["NETWORK", "/network"],
    ["CAREERS", "/careers"],
  ];
  const companyLinks: [string, string][] = [
    ["ABOUT & VALUES", "/about"],
    ["PARTNERS", "/partners"],
    ["NEWS & MEDIA", "/news"],
    ["TEAM", "/team"],
  ];
  const handle = (url: string, section?: string) => {
    setMenu(false);
    setMobileOpen(false);
    if (home && section) go(section);
    else navigate(url);
  };
  return (
    <>
      <header className="navbar">
        <button
          className="brand"
          onClick={() => (home ? go("home") : navigate("/"))}
          aria-label="OJAS home"
        >
          <img src={logo} alt="OJAS" />
        </button>
        <button
          className={`mobileMenuToggle ${mobileOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <i />
          <i />
          <i />
        </button>
        <div className="navDesktopLinks">
          {links.map(([label, url, section]) => (
            <div key={url} className="navItem">
              <button
                className={!home && path === url ? "active" : ""}
                onClick={() => handle(url, section)}
              >
                {label}
                {navDropdowns[url] && <span className="menuCaret">⌄</span>}
              </button>
              {navDropdowns[url] && (
                <div className="navDropdownPanel">
                  {navDropdowns[url].map((d, i) => (
                    <button key={d.label + i} onClick={() => handle(d.url)}>
                      {d.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            className={menu ? "active" : ""}
            onClick={() => setMenu((v) => !v)}
          >
            COMPANY <span className="menuCaret">⌄</span>
          </button>
        </div>
        <div className="navRight">
          <button className="partner" onClick={() => navigate("/contact")}>
            CONTACT <span>→</span>
          </button>
        </div>
      </header>
      <div
        className={`mobileNavOverlay ${mobileOpen ? "is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobileNavHeader">
          <button
            className="mobileNavBrand"
            onClick={() => handle("/")}
            aria-label="OJAS home"
          >
            <img src={logo} alt="OJAS" />
          </button>
          <button
            className="mobileNavClose"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            <span />
            <span />
          </button>
        </div>
        <div className="mobileNavIntro">
          <small>OJAS / NAVIGATION</small>
          <p>Explore the connected system.</p>
        </div>
        <div className="mobileNavLinks">
          {links.map(([label, url, section], i) => (
            <button
              key={url}
              className={!home && path === url ? "active" : ""}
              onClick={() => handle(url, section)}
            >
              <small>{String(i + 1).padStart(2, "0")}</small>
              <span>{label}</span>
              <b>↗</b>
            </button>
          ))}
        </div>
        <div className="mobileCompanyLinks">
          <div>
            <small>COMPANY</small>
            <span>THE OJAS STORY</span>
          </div>
          <div className="mobileCompanyGrid">
            {companyLinks.map(([label, url]) => (
              <button
                key={url}
                className={path === url ? "active" : ""}
                onClick={() => handle(url)}
              >
                {label}
                <b>↗</b>
              </button>
            ))}
          </div>
        </div>
        <div className="mobileNavActions">
          <button className="partner" onClick={() => handle("/contact")}>
            START A CONVERSATION <span>→</span>
          </button>
        </div>
      </div>
      <CompanyMenu
        open={menu}
        onClose={() => {
          setMenu(false);
          setMobileOpen(false);
        }}
      />
    </>
  );
}

function ContactBlock() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Enterprise Solutions");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmittedRef(`OJAS-INQ-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitting(false);
    }, 600);
  };

  return (
    <div className="contactLayout">
      <div className="contactPitch">
        <Eyebrow>CONTACT</Eyebrow>
        <h2>
          Let's build <em>what comes next.</em>
        </h2>
        <p>
          For partnerships, technology conversations, projects, services or
          careers.
        </p>
        <div className="contactDetails">
          <div>
            <small>EMAIL</small>
            <a href="mailto:info@ojasspace.com">info@ojasspace.com</a>
          </div>
          <div>
            <small>PHONE</small>
            <a href="tel:01354316767">0135 431 6767</a>
          </div>
          <div>
            <small>OFFICE</small>
            <span>Imperial Heights, Dehradun, Uttarakhand</span>
          </div>
        </div>
      </div>

      <div className="contactFormWrapper">
        {submittedRef ? (
          <div className="contactForm" style={{ textAlign: "center", padding: "44px 28px" }}>
            <div className="inquirySuccessBadge">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontSize: "24px", color: "#fff", marginBottom: "8px" }}>Technical Brief Received</h3>
            <span className="inquirySuccessRef">{submittedRef}</span>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6", margin: "14px 0 24px" }}>
              Thank you, <strong>{name}</strong>. Your message has been routed to the OJAS aerospace engineering desk. A specialist will follow up within 24 hours.
            </p>
            <button
              className="submitBtn"
              style={{ width: "auto", margin: "0 auto" }}
              onClick={() => {
                setSubmittedRef(null);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
              }}
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="contactFormTerminalHeader">
              <div className="contactFormTerminalBadge">
                <span className="contactFormTerminalDot" />
                TRANSMISSION TERMINAL
              </div>
              <span style={{ fontSize: "11px", color: "var(--muted)", fontFamily: "monospace" }}>SECURE CHANNEL</span>
            </div>

            <div className="formRow">
              <div className="formField">
                <label htmlFor="cnt-name">Your Name *</label>
                <input
                  id="cnt-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
              <div className="formField">
                <label htmlFor="cnt-email">Work Email *</label>
                <input
                  id="cnt-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                />
              </div>
            </div>

            <div className="formRow">
              <div className="formField">
                <label htmlFor="cnt-phone">Phone Number *</label>
                <input
                  id="cnt-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="formField">
                <label htmlFor="cnt-category">Area of Interest</label>
                <select
                  id="cnt-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Enterprise Solutions">Enterprise Aerospace Solutions</option>
                  <option value="Drone Procurement">Drone Fleet Procurement</option>
                  <option value="Drone Maintenance">Repair & Maintenance Operations</option>
                  <option value="Pilot Training">Drone Pilot Training & Certification</option>
                  <option value="MILU AI Platform">MILU AI & Edge Perception</option>
                  <option value="Strategic Partnership">Government / Research Partnership</option>
                </select>
              </div>
            </div>

            <div className="formField">
              <label htmlFor="cnt-message">Brief Details / Requirements *</label>
              <textarea
                id="cnt-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your mission, operational parameters, or goals..."
              />
            </div>

            <button type="submit" className="submitBtn" disabled={submitting}>
              {submitting ? (
                <>
                  <span className="contactFormTerminalDot" />
                  Transmitting Payload...
                </>
              ) : (
                <>
                  Send Message <span>↗</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
function Home() {
  return (
    <>
      <Hero />
      <div className="homeFleetWrapper">
        <InteractiveFleetShowcase />
      </div>
      <Solutions />
    </>
  );
}

function pageLabel() {
  const p = location.pathname;
  if (p === "/sectors") return "SECTORS";
  if (p === "/solutions") return "SOLUTIONS";
  if (p.startsWith("/solutions/")) return "SOLUTION";
  if (p === "/services") return "SERVICES";
  if (p.startsWith("/services/")) return "SERVICE";
  if (p === "/technology") return "TECHNOLOGY";
  if (p === "/milu-ai") return "MILU AI";
  if (p === "/milu-ai-network") return "INFRASTRUCTURE";
  if (p === "/network") return "NETWORK";
  if (p === "/partners") return "PARTNERS";
  if (p === "/news") return "NEWS & MEDIA";
  if (p === "/team") return "TEAM";
  if (p === "/careers") return "CAREERS";
  if (p === "/about") return "ABOUT";
  if (p === "/contact") return "CONTACT";
  return "OJAS";
}
function DetailHero({
  question,
  title,
  description,
  image,
  label,
}: {
  question: string;
  title: React.ReactNode;
  description: string;
  image?: string;
  label?: string;
}) {
  return (
    <section
      className="detailHero"
      style={
        image
          ? {
            backgroundImage: `linear-gradient(90deg,rgba(3,2,8,.94),rgba(3,2,8,.55),rgba(3,2,8,.18)),url(${image})`,
          }
          : {}
      }
    >
      <div>
        <Question>{question}</Question>
        <Eyebrow>{label || pageLabel()}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
function SectionBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="detailBlock">
      <div className="detailBlockHead">
        <Question>{eyebrow}</Question>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
function IconCards({ items }: { items: Item[] }) {
  return (
    <div className="iconCards">
      {items.map((x, i) => (
        <article key={x.title}>
          <div className="iconBubble">
            <Icon name={x.icon} />
          </div>
          <small>0{(i % 9) + 1}</small>
          <h3>{x.title}</h3>
          <p>{x.text}</p>
        </article>
      ))}
    </div>
  );
}
function DetailList({ items }: { items: string[] }) {
  return (
    <div className="detailList">
      {items.map((x, i) => (
        <div key={x}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <b>{x}</b>
          <i>+</i>
        </div>
      ))}
    </div>
  );
}
function StandardPage({
  question,
  title,
  description,
  image,
  children,
}: {
  question: string;
  title: React.ReactNode;
  description: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <DetailHero
        question={question}
        title={title}
        description={description}
        image={image}
      />
      <div className="detailMain">{children}</div>
    </>
  );
}

function SectorsPage() {
  return (
    <StandardPage
      question="Where does OJAS operate?"
      title={
        <>
          Systems for <em>different worlds.</em>
        </>
      }
      description="Sectors describe the contexts in which OJAS applies aerospace systems, intelligence and field capability."
      image={ecosystemImage}
    >
      <SectionBlock
        eyebrow="Six operating environments"
        title={
          <>
            One connected <em>approach.</em>
          </>
        }
      >
        <p className="wideLead">
          Sectors are parallel entry points. A single sector can draw from
          multiple solutions, services and technologies as the mission requires.
        </p>
        <div className="sectorDetailGrid">
          {sectorData.map((x, i) => (
            <article key={x.title}>
              <div className="iconBubble">
                <Icon name={x.icon} />
              </div>
              <small>0{i + 1}</small>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <button onClick={() => navigate("/solutions")}>
                EXPLORE SOLUTIONS <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="The relationship"
        title={
          <>
            Context → capability → <em>action.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Sector",
              text: "The environment or operating context where a requirement exists.",
              icon: "globe",
            },
            {
              title: "Solution",
              text: "The problem or outcome OJAS helps address.",
              icon: "target",
            },
            {
              title: "Service",
              text: "The operational capability a customer can engage OJAS to deliver.",
              icon: "drone",
            },
          ]}
        />
      </SectionBlock>
    </StandardPage>
  );
}

function SolutionsPage() {
  return (
    <StandardPage
      question="What problems do we solve?"
      title={
        <>
          Intelligence <em>for the real world.</em>
        </>
      }
      description="Six solution domains connect OJAS services and technology to concrete problems and outcomes."
      image={ecosystemImage}
    >
      <SectionBlock
        eyebrow="Six solution domains"
        title={
          <>
            Problem → intelligence → <em>action.</em>
          </>
        }
      >
        <p className="wideLead">
          Each solution starts with a real-world requirement and connects
          observation, analysis, operational capability and relevant technology
          around the desired outcome.
        </p>
        <div className="solutionDetailGrid">
          {solutions.map((s, i) => (
            <article
              key={s.title}
              onClick={() => navigate(solutionPath(s.title))}
            >
              <div className="cardMedia">
                {s.image ? <img src={s.image} alt={s.title} loading="lazy" decoding="async" /> : <Icon name="route" />}
              </div>
              <small>0{i + 1}</small>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <button>
                EXPLORE <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}

const solutionInfo: Record<
  string,
  {
    heading: string;
    intro: string;
    cap: string[];
    sectors: string[];
    services: string[];
    tech: string[];
  }
> = {
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
function SolutionPage({ s }: { s: Item }) {
  const d = solutionInfo[s.title];
  return (
    <StandardPage
      question={`Solution / ${s.title}`}
      title={
        <>
          {s.title}
          <br />
          <em>{d.heading}</em>
        </>
      }
      description={d.intro}
      image={s.image}
    >
      <SectionBlock
        eyebrow="The operating model"
        title={
          <>
            Observe. Understand. <em>Act.</em>
          </>
        }
      >
        <div className="solutionFlow">
          <div>
            {[
              [
                "Observe",
                "Capture the right information from the environment.",
                "eye",
              ],
              [
                "Understand",
                "Interpret observations with spatial, operational and intelligent systems.",
                "brain",
              ],
              [
                "Act",
                "Connect insight to people, platforms and systems that can respond.",
                "bolt",
              ],
            ].map(([a, b, ic], i) => (
              <React.Fragment key={a}>
                <article>
                  <div className="iconBubble">
                    <Icon name={ic} />
                  </div>
                  <small>0{i + 1}</small>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </article>
                {i < 2 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Capabilities"
        title={
          <>
            What the solution can <em>enable.</em>
          </>
        }
      >
        <DetailList items={d.cap} />
      </SectionBlock>
      <SectionBlock
        eyebrow="Connected OJAS stack"
        title={
          <>
            Where it connects across the <em>system.</em>
          </>
        }
      >
        <div className="relationshipGrid">
          <div>
            <small>SECTORS</small>
            {d.sectors.map((x) => (
              <b key={x}>{x}</b>
            ))}
          </div>
          <div>
            <small>SERVICES</small>
            {d.services.map((x) => (
              <button key={x} onClick={() => navigate(servicePath(x))}>
                {x}
                <span>↗</span>
              </button>
            ))}
          </div>
          <div>
            <small>TECHNOLOGY</small>
            {d.tech.map((x) => (
              <b key={x}>{x}</b>
            ))}
          </div>
        </div>
      </SectionBlock>
      <button className="largeCta" onClick={() => navigate("/contact")}>
        WORK WITH OJAS →
      </button>
    </StandardPage>
  );
}

function ServicesPage() {
  return (
    <StandardPage
      question="What can OJAS do for you?"
      title={
        <>
          Four services. <em>One fleet, fully supported.</em>
        </>
      }
      description="OJAS Aerospace's core services: Drone Sale, Repair & Maintenance, Rental, and Training — everything needed to acquire, operate and keep a drone fleet field-ready."
      image={careersImage}
    >
      <SectionBlock
        eyebrow="Our services"
        title={
          <>
            Everything a drone <em>needs, in one place.</em>
          </>
        }
      >
        <div className="serviceDirectory">
          {services.map((s, i) => (
            <article key={s.slug} className="serviceOverviewCard">
              <div className="serviceGroupHead">
                <div className="iconBubble">
                  <Icon name={s.icon} />
                </div>
                <div>
                  <small>0{i + 1}</small>
                  <h3>{s.eyebrow}</h3>
                  <p>{s.tagline}</p>
                </div>
              </div>
              <button
                className="serviceOverviewLink"
                onClick={() => navigate(servicePath(s.slug))}
              >
                EXPLORE {s.eyebrow.toUpperCase()} <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
function SpecsTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <dl className="specsTable">
      {specs.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
function ProcessSteps({ steps }: { steps: ServiceStep[] }) {
  return (
    <div className="processSteps">
      {steps.map((s) => (
        <article key={s.step}>
          <small>{s.step}</small>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </article>
      ))}
    </div>
  );
}
function FAQList({ items }: { items: ServiceFAQ[] }) {
  return (
    <div className="serviceFaqList">
      {items.map((f) => (
        <div key={f.q} className="serviceFaqItem">
          <b>{f.q}</b>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  );
}
function ServiceDetailPage({ slug }: { slug: string }) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return <ServicesPage />;
  return (
    <StandardPage
      question={`Service / ${s.eyebrow}`}
      title={<>{s.title}</>}
      description={s.tagline}
      image={s.slug === "drone-training" ? teamFieldDeployment : technologyImage}
    >
      <SectionBlock
        eyebrow={s.includesHeading}
        title={
          <>
            {s.includesIntro}
          </>
        }
      >
        <div className="serviceOfferingGrid">
          {s.includes.map((o) => (
            <article key={o.title} className="serviceOfferingCard">
              <div className="offeringMedia">
                <Icon name={o.visual} />
              </div>
              <h3>{o.title}</h3>
              <p>{o.description}</p>
              {o.specs && <SpecsTable specs={o.specs} />}
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="How it works"
        title={<>{s.processHeading}</>}
      >
        <ProcessSteps steps={s.process} />
      </SectionBlock>
      <SectionBlock eyebrow="Why OJAS" title={<>{s.whyHeading}</>}>
        <IconCards
          items={s.why.map((w) => ({
            title: w.title,
            text: w.description,
            icon: "shield",
          }))}
        />
      </SectionBlock>
      <SectionBlock eyebrow="Pricing" title={<>{s.pricingHeading}</>}>
        <p className="wideLead">{s.pricingNote}</p>
        <button
          className="largeCta"
          onClick={() => triggerInquiry({ title: s.pricingCta, service: s.eyebrow })}
        >
          {s.pricingCta.toUpperCase()} →
        </button>
      </SectionBlock>
      <SectionBlock eyebrow="FAQ" title={<>Common questions.</>}>
        <FAQList items={s.faq} />
      </SectionBlock>
      <div className="serviceFinalCta">
        <h2>{s.ctaTitle}</h2>
        <p>{s.ctaSubtitle}</p>
        <div className="serviceFinalCtaButtons">
          <button
            className="largeCta"
            onClick={() => triggerInquiry({ title: s.ctaPrimary, service: s.eyebrow })}
          >
            {s.ctaPrimary.toUpperCase()} →
          </button>
          <button
            className="largeCtaGhost"
            onClick={() => triggerInquiry({ title: s.ctaSecondary, service: s.eyebrow })}
          >
            {s.ctaSecondary.toUpperCase()}
          </button>
        </div>
      </div>
    </StandardPage>
  );
}

function TechnologyPage() {
  return (
    <StandardPage
      question="How do we make it possible?"
      title={
        <>
          Technology <em>built for the field.</em>
        </>
      }
      description="A coherent working stack across sensing, geospatial intelligence, AI, agriculture, autonomy and digital infrastructure."
      image={technologyImage}
    >
      <SectionBlock
        eyebrow="Technology domains"
        title={
          <>
            A stack designed to <em>connect.</em>
          </>
        }
      >
        <div className="techDomainGrid">
          {techGroups.map((g, i) => (
            <article key={g.title}>
              <div className="iconBubble">
                <Icon name={g.icon} />
              </div>
              <small>0{i + 1}</small>
              <h3>{g.title}</h3>
              <p>
                Working technologies and integrations that support this
                capability domain.
              </p>
              <DetailList items={g.items} />
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Applied R&D"
        title={
          <>
            Research → prototype → deploy → <em>feedback.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Research",
              text: "Explore emerging technologies and identify useful applications.",
              icon: "brain",
            },
            {
              title: "Prototype",
              text: "Build and test systems around real requirements.",
              icon: "cpu",
            },
            {
              title: "Deploy",
              text: "Move useful capability into operational environments.",
              icon: "drone",
            },
            {
              title: "Feedback",
              text: "Use field signals to improve systems and guide future R&D.",
              icon: "network",
            },
          ]}
        />
      </SectionBlock>
    </StandardPage>
  );
}

function MiluPage() {
  const steps = [
    [
      "SENSE",
      "Collect signals from the field and connected systems.",
      "signal",
    ],
    ["UNDERSTAND", "Fuse information and interpret it in context.", "brain"],
    ["PREDICT", "Identify likely changes, risks and opportunities.", "target"],
    [
      "DECIDE",
      "Turn intelligence into clear priorities and recommendations.",
      "cpu",
    ],
    [
      "ACT",
      "Connect decisions to people, services and operational systems.",
      "bolt",
    ],
    [
      "LEARN",
      "Feed outcomes back into the network, services and R&D.",
      "network",
    ],
  ];
  return (
    <StandardPage
      question="How does information become intelligence?"
      title={
        <>
          Intelligence <em>that connects.</em>
        </>
      }
      description="MILU AI is OJAS's intelligence layer: connecting field signals, operational data and context so the network can understand, decide, act and learn."
      image={miluImage}
    >
      <SectionBlock
        eyebrow="How MILU thinks"
        title={
          <>
            Sense → understand → <em>act.</em>
          </>
        }
      >
        <p className="wideLead">
          MILU is not a chatbot or a standalone dashboard. It is an operational
          intelligence layer that connects distributed information to decisions
          and then back to real-world action.
        </p>
        <div className="miluAiFlow">
          {steps.map(([a, b, ic], i) => (
            <React.Fragment key={a}>
              <article>
                <div className="iconBubble">
                  <Icon name={ic} />
                </div>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
              {i < steps.length - 1 && <span className="miluArrow">→</span>}
            </React.Fragment>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="What feeds MILU"
        title={
          <>
            Signals from across the <em>network.</em>
          </>
        }
      >
        <div className="miluSourceGrid">
          <article>
            <Icon name="drone" />
            <h3>Field & aerial data</h3>
            <p>
              UAVs, sensors, imagery and observations from operations in the
              physical world.
            </p>
          </article>
          <article>
            <Icon name="map" />
            <h3>Spatial context</h3>
            <p>
              Geospatial, satellite, weather and environmental information that
              explains where and when things are changing.
            </p>
          </article>
          <article>
            <Icon name="cpu" />
            <h3>Operational systems</h3>
            <p>
              Service activity, CRM/ERP signals, workflows and other business or
              operational information.
            </p>
          </article>
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="The feedback loop"
        title={
          <>
            Services learn. The system <em>improves.</em>
          </>
        }
      >
        <div className="miluFeedback">
          <b>SERVICE</b>
          <span>→</span>
          <b>DATA</b>
          <span>→</span>
          <b>INTELLIGENCE</b>
          <span>→</span>
          <b>DECISION</b>
          <span>→</span>
          <b>ACTION</b>
          <span>→</span>
          <b>OUTCOME</b>
          <span>↺</span>
        </div>
        <p className="wideLead">
          Outcomes and feedback can improve future service delivery, guide
          decision-making and help direct OJAS technology development and
          research.
        </p>
      </SectionBlock>
      <button
        className="networkBanner"
        onClick={() => navigate("/milu-ai-network")}
      >
        EXPLORE MILU AI NETWORK →
      </button>
    </StandardPage>
  );
}

function InfrastructurePage() {
  return (
    <StandardPage
      question="Where does the network live?"
      title={
        <>
          MILU AI <em>Network.</em>
        </>
      }
      description="Distributed infrastructure that brings intelligence, field capability and connected operations closer to where work happens."
      image={ecosystemImage}
    >
      <SectionBlock
        eyebrow="The infrastructure hierarchy"
        title={
          <>
            Intelligence across <em>distance.</em>
          </>
        }
      >
        <div className="networkDetailStack">
          {networkNodes.map(([x, d, ic], i) => (
            <article key={x}>
              <div className="iconBubble">
                <Icon name={ic} />
              </div>
              <small>0{i + 1}</small>
              <h2>{x}</h2>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="What infrastructure enables"
        title={
          <>
            Closer to the <em>operation.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Drone operations",
              text: "Operational environments for deployment, mission preparation and field support.",
              icon: "drone",
            },
            {
              title: "Data & connectivity",
              text: "Connected infrastructure can support data collection, transfer and local context.",
              icon: "signal",
            },
            {
              title: "Training & support",
              text: "Capability can be supported through training, maintenance and operational assistance.",
              icon: "wrench",
            },
            {
              title: "Service delivery",
              text: "Distributed nodes can bring customer-facing services closer to operating environments.",
              icon: "bolt",
            },
          ]}
        />
      </SectionBlock>
      <button className="largeCta" onClick={() => navigate("/network")}>
        EXPLORE THE NETWORK →
      </button>
    </StandardPage>
  );
}

function NetworkPage() {
  return (
    <StandardPage
      question="Who and what is connected?"
      title={
        <>
          A network built <em>beyond the screen.</em>
        </>
      }
      description="The OJAS Network connects people, places, platforms, partners, customers and operations around the wider intelligence system."
      image={ecosystemImage}
    >
      <SectionBlock
        eyebrow="Network layers"
        title={
          <>
            People. Places. Systems. <em>Operations.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "People",
              text: "Engineers, operators, field teams, customers, partners and domain contributors.",
              icon: "network",
            },
            {
              title: "Places",
              text: "MILU infrastructure and the environments in which services and operations occur.",
              icon: "globe",
            },
            {
              title: "Platforms",
              text: "UAVs, sensors, software and other systems connected to missions.",
              icon: "drone",
            },
            {
              title: "Operations",
              text: "Services and field workflows that turn capability into outcomes.",
              icon: "route",
            },
          ]}
        />
      </SectionBlock>
      <SectionBlock
        eyebrow="The national view"
        title={
          <>
            A distributed <em>India network.</em>
          </>
        }
      >
        <div className="networkMapPlaceholder">
          <div className="mapGlow">INDIA</div>
          <span className="node n1" />
          <span className="node n2" />
          <span className="node n3" />
          <span className="node n4" />
          <span className="node n5" />
          <p>
            Interactive network mapping can be populated with verified OJAS
            nodes, capabilities and status as deployment data becomes available.
          </p>
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Infrastructure relationship"
        title={
          <>
            Structure → connection → <em>action.</em>
          </>
        }
      >
        <div className="feedbackLoop">
          <div>
            <Icon name="factory" />
            <b>Infrastructure</b>
          </div>
          <span>→</span>
          <div>
            <Icon name="network" />
            <b>Network</b>
          </div>
          <span>→</span>
          <div>
            <Icon name="brain" />
            <b>MILU AI</b>
          </div>
          <span>→</span>
          <div>
            <Icon name="drone" />
            <b>Services</b>
          </div>
        </div>
      </SectionBlock>
    </StandardPage>
  );
}

function PartnersPage() {
  const partners = [
    [
      "Technology",
      "Technology providers, platforms, sensing systems and digital infrastructure that strengthen the OJAS stack.",
      "cpu",
    ],
    [
      "Agriculture & Industry",
      "Domain organisations that connect OJAS capabilities to real operational environments.",
      "factory",
    ],
    [
      "Institutional",
      "Public-sector, research and institutional relationships supporting broader deployment and capability building.",
      "book",
    ],
    [
      "Deployment",
      "Local operators and implementation relationships that help services reach the field.",
      "drone",
    ],
    [
      "Strategic",
      "Long-term relationships around research, expansion, investment and ecosystem development.",
      "target",
    ],
  ];
  return (
    <StandardPage
      question="Who do we build with?"
      title={
        <>
          Building the network <em>together.</em>
        </>
      }
      description="The OJAS ecosystem brings complementary organisations, capabilities and operating environments into a connected network."
      image={technologyImage}
    >
      <SectionBlock
        eyebrow="Partner ecosystem"
        title={
          <>
            Different strengths. <em>Connected outcomes.</em>
          </>
        }
      >
        <p className="wideLead">
          The ecosystem is the relationship model: different kinds of partners
          contribute different strengths to technology, deployment, operations
          and long-term growth.
        </p>
        <div className="partnerEcosystem">
          <div className="ecosystemCore">
            <span>OJAS</span>
            <small>CONNECTED NETWORK</small>
          </div>
          {partners.map((p, i) => (
            <article key={p[0]} className={`ecoPartner eco${i + 1}`}>
              <Icon name={p[2]} />
              <div>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <h3>{p[0]}</h3>
                <p>{p[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Partner directory"
        title={
          <>
            Explore ways to <em>connect.</em>
          </>
        }
      >
        <p className="wideLead">
          This directory is intentionally distinct from the ecosystem map: it is
          the practical entry point for future partner profiles, programmes and
          enquiries.
        </p>
        <div className="partnerDirectory">
          {partners.map((p, i) => (
            <article key={p[0]}>
              <div className="partnerDirectoryTop">
                <Icon name={p[2]} />
                <small>PARTNER PATH {String(i + 1).padStart(2, "0")}</small>
              </div>
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
              <div className="partnerTags">
                <span>STRATEGIC NETWORK</span>
                <span>REGIONAL ALLIANCE</span>
              </div>
              <button onClick={() => navigate("/contact")}>
                EXPLORE PARTNERSHIP ↗
              </button>
            </article>
          ))}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}

function NewsPage() {
  const [filter, setFilter] = useState("All");
  const filters = [
    "All",
    "News",
    "Field Stories",
    "Media",
    "Technology",
    "Events",
  ];
  const shown =
    filter === "All" ? newsSeed : newsSeed.filter((x) => x.category === filter);
  return (
    <StandardPage
      question="What is happening in the field?"
      title={
        <>
          News, stories & <em>media.</em>
        </>
      }
      description="A structured editorial layer for company developments, field stories, technology updates, events and visual media."
      image={technologyImage}
    >
      <SectionBlock
        eyebrow="Latest"
        title={
          <>
            The OJAS <em>story in motion.</em>
          </>
        }
      >
        <div className="filterBar">
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="newsGrid">
          {shown.map((n, i) => (
            <article key={`${n.category}-${n.title}`}>
              <div
                className="newsImage"
                style={{ backgroundImage: `url(${n.image})` }}
              />
              <div className="newsMeta">
                <span>{n.category}</span>
                <small>{n.date}</small>
              </div>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
              <button>
                READ STORY <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Press & Media Inquiries"
        title={
          <>
            Coverage, field visits & <em>media resources.</em>
          </>
        }
      >
        <p className="wideLead">
          Journalists, industry analysts, and research partners interested in live drone flight demonstrations, high-altitude operational footage, or leadership commentary can reach our communications team directly at <a href="mailto:info@ojasspace.com" style={{ color: "var(--gold2)", textDecoration: "underline" }}>info@ojasspace.com</a>.
        </p>
      </SectionBlock>
    </StandardPage>
  );
}

function TeamPage() {
  const [filter, setFilter] = useState("ALL");

  const filters = [
    "ALL",
    ...Array.from(new Set(teamSeed.map((member) => member.category))),
  ];

  const shown =
    filter === "ALL"
      ? teamSeed
      : teamSeed.filter((member) => member.category === filter);

  return (
    <StandardPage
      question="Who builds it?"
      title={
        <>
          The people <em>behind OJAS.</em>
        </>
      }
      description="The multidisciplinary team building OJAS across technology, aerospace R&D, operations, business, design and field-focused systems."
      image={teamDroneLab}
    >
      <SectionBlock
        eyebrow="Culture & Mission"
        title={
          <>
            From the R&D lab to <em>field execution.</em>
          </>
        }
      >
        <div className="teamDualShowcase">
          <div className="teamDualCard">
            <img src={teamDroneLab} alt="OJAS R&D and MILU Lab Team" />
            <div className="teamDualOverlay">
              <span className="teamDualBadge">CORE R&D & ENGINEERING HUB</span>
              <h3>Aerospace, AI & Drone Port Lab</h3>
              <p>Designing intelligent aerial hardware, autonomous docking systems, and edge AI in-house.</p>
            </div>
          </div>

          <div className="teamDualCard">
            <img src={teamFieldDeployment} alt="OJAS Field Operations and Mountain Missions" />
            <div className="teamDualOverlay">
              <span className="teamDualBadge">FIELD MISSIONS & REGIONAL IMPACT</span>
              <h3>High-Altitude & Grassroots Deployment</h3>
              <p>Empowering local operators, certified pilots, and field technicians across rugged terrain and agriculture.</p>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Our team"
        title={
          <>
            People building <em>the intelligent network.</em>
          </>
        }
      >
        <div className="filterBar">
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="teamGrid">
          {shown.map((member, i) => (
            <article key={member.name} className="teamCard">
              <div className="teamPortrait">
                <img src={member.image} alt={member.name} />
              </div>

              <small>{String(i + 1).padStart(2, "0")}</small>

              <h3>{member.name}</h3>

              <p className="teamRole">{member.role}</p>

              <span>{member.department}</span>
            </article>
          ))}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}

function CareersPage() {
  const [filter, setFilter] = useState("ALL");
  const filters = [
    "ALL",
    "ENGINEERING",
    "AI & SOFTWARE",
    "AEROSPACE",
    "AGRICULTURE",
    "OPERATIONS",
    "FIELD",
    "BUSINESS",
  ];
  const shown =
    filter === "ALL"
      ? careerSeed
      : careerSeed.filter((x) => x.department === filter);
  return (
    <StandardPage
      question="Who wants to build it with us?"
      title={
        <>
          Work where <em>systems meet reality.</em>
        </>
      }
      description="Careers across aerospace, intelligent systems, software, field technology, geospatial systems and business operations."
      image={careersImage}
    >
      <SectionBlock
        eyebrow="Why OJAS"
        title={
          <>
            Build the next <em>layer.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Cross-disciplinary work",
              text: "Work across aerospace, AI, field systems, operations and business technology.",
              icon: "network",
            },
            {
              title: "Real-world systems",
              text: "Build technology intended to operate beyond the screen.",
              icon: "drone",
            },
            {
              title: "Research to deployment",
              text: "Contribute across experimentation, engineering and field learning.",
              icon: "brain",
            },
          ]}
        />
      </SectionBlock>
      <SectionBlock
        eyebrow="Open positions"
        title={
          <>
            Find where you <em>fit.</em>
          </>
        }
      >
        <div className="filterBar">
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="jobGrid">
          {shown.map((x, i) => (
            <article key={x.title}>
              <small>0{i + 1}</small>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <div>
                <span>{x.location} · {x.type}</span>
                <button
                  onClick={() =>
                    triggerInquiry({
                      title: `Application: ${x.title}`,
                      service: "Careers & Talent",
                    })
                  }
                >
                  EXPRESS INTEREST ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}

function AboutPage() {
  return (
    <StandardPage
      question="What drives OJAS?"
      title={
        <>
          Engineering <em>what comes next.</em>
        </>
      }
      description="OJAS is being shaped as a service-led systems company bringing aerospace, intelligent systems, infrastructure and applied R&D together."
      image={aboutImage}
    >
      <SectionBlock
        eyebrow="The OJAS idea"
        title={
          <>
            Service-led. Technology-driven. <em>Intelligence-connected.</em>
          </>
        }
      >
        <p className="wideLead">
          Real customer and field requirements generate service work. Service
          work generates information and signals. Those signals can improve
          decision-making and help guide technology development and research
          direction — creating a feedback loop that improves future services.
        </p>
        <IconCards
          items={[
            {
              title: "Build",
              text: "Develop and integrate aerospace, software, sensing and field systems around real requirements.",
              icon: "factory",
            },
            {
              title: "Deploy",
              text: "Put systems into operational environments where performance can be observed and improved.",
              icon: "drone",
            },
            {
              title: "Learn",
              text: "Use field experience and service signals to guide what should come next.",
              icon: "brain",
            },
          ]}
        />
      </SectionBlock>

      <SectionBlock
        eyebrow="From Lab to Field"
        title={
          <>
            Where engineering meets <em>real-world mission.</em>
          </>
        }
      >
        <div className="storyShowcaseGrid">
          <div className="storyShowcaseCard">
            <div className="storyShowcaseImgWrapper">
              <img src={teamDroneLab} alt="OJAS Engineering Lab and MILU Drone Port" />
              <span className="storyShowcaseTag">OJAS R&D LAB</span>
            </div>
            <div className="storyShowcaseContent">
              <small>SYSTEMS & HARDWARE INTEGRATION</small>
              <h3>MILU Drone Port & Systems Lab</h3>
              <p>
                Our core aerospace and software engineering team designing, assembling, and calibrating advanced autonomous drone platforms with edge AI integration.
              </p>
            </div>
          </div>

          <div className="storyShowcaseCard">
            <div className="storyShowcaseImgWrapper">
              <img src={teamFieldDeployment} alt="OJAS Drone Deployment in Mountain Terrain" />
              <span className="storyShowcaseTag">FIELD OPERATIONS</span>
            </div>
            <div className="storyShowcaseContent">
              <small>HIGH-ALTITUDE & TERRAIN TESTING</small>
              <h3>Ground Missions & Mountain Terrains</h3>
              <p>
                Validating performance in demanding real-world environments—from high-altitude mountain deployments to large-scale precision agricultural operations.
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>

      <div className="aboutCinematic">
        <div>
          <small>OJAS / CINEMATIC STORY</small>
          <h2>Space → Earth → India → Field → Network</h2>
          <p>
            The deeper visual story can move from aerospace systems to the
            connected environments in which OJAS operates.
          </p>
        </div>
      </div>
      <SectionBlock
        eyebrow="What we bring together"
        title={
          <>
            Across disciplines, into <em>systems.</em>
          </>
        }
      >
        <DetailList
          items={[
            "Aerospace and UAV engineering",
            "Software and AI systems",
            "Sensing and geospatial intelligence",
            "Field operations and services",
            "Distributed infrastructure",
            "Applied research and emerging technology",
          ]}
        />
      </SectionBlock>
    </StandardPage>
  );
}
function ContactPage() {
  return (
    <StandardPage
      question="Start a conversation."
      title={
        <>
          Let's build <em>what comes next.</em>
        </>
      }
      description="For partnerships, technology conversations, projects, services or careers."
      image={ecosystemImage}
    >
      <section className="section contact contactModern">
        <ContactBlock />
      </section>
    </StandardPage>
  );
}

function Footer() {
  const cols = [
    [
      "DRONE PLATFORMS",
      [
        ["All Categories", "/categories"],
        ["Agricultural Drones", "/categories"],
        ["Logistics Drones", "/categories"],
        ["Photography Drones", "/categories"],
        ["Industrial Drones", "/categories"],
      ],
    ],
    [
      "CORE SERVICES",
      [
        ["All Services", "/services"],
        ["Drone Sales", "/services/drone-sale"],
        ["Repair & Maintenance", "/services/drone-repair-maintenance"],
        ["Drone Training", "/services/drone-training"],
        ["Drone Rental", "/services/drone-rental"],
      ],
    ],
    [
      "NETWORK & AI",
      [
        ["MILU AI Agro Ecosystem", "/milu-ai"],
        ["Dehradun HQ & Ports", "/network"],
        ["District Drone Ports", "/network"],
        ["Block Drone Centres", "/network"],
      ],
    ],
    [
      "COMPANY",
      [
        ["About & Values", "/about"],
        ["Partnerships", "/partners"],
        ["Leadership & Team", "/team"],
        ["Careers", "/careers"],
        ["Contact HQ", "/contact"],
      ],
    ],
  ];
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <div className="footerLogo">
            <img src={logo} alt="OJAS Aerospace" />
          </div>
          <p>
            <strong>OJAS Aerospace Private Limited</strong>
            <br />
            Engineering the Future. Connecting Intelligence.
            <br />
            Making drone technology, distributed local service access, and digital intelligence practical across India.
          </p>
        </div>
        {cols.map(([h, items]) => (
          <div key={String(h)}>
            <h4>{h as string}</h4>
            {(items as string[][]).map(([a, b]) => (
              <button key={b + a} onClick={() => navigate(b)}>
                {a}
              </button>
            ))}
          </div>
        ))}
        <div>
          <h4>COMMAND HEADQUARTERS</h4>
          <p style={{ fontSize: "12px", color: "var(--muted)", margin: "8px 0" }}>
            Imperial Heights, Near DIT University, Dehradun, Uttarakhand - 248009
            <br />
            Phone: <a href="tel:01354316767" style={{ color: "var(--gold2)" }}>0135 431 6767</a>
            <br />
            Email: <a href="mailto:info@ojasspace.com" style={{ color: "var(--gold2)" }}>info@ojasspace.com</a>
          </p>
          <div className="social">
            <button aria-label="LinkedIn">in</button>
            <button aria-label="X">𝕏</button>
            <button aria-label="Instagram">◎</button>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <span>© 2026 OJAS AEROSPACE PRIVATE LIMITED. ALL RIGHTS RESERVED.</span>
        <span>DGCA & Airspace Compliance</span>
        <span>ENGINEERED & MADE IN INDIA 🇮🇳</span>
      </div>
    </footer>
  );
}

const SEO_MAP: Record<string, { title: string; description: string }> = {
  "/": {
    title: "OJAS Aerospace — Engineering the Future. Connecting Intelligence.",
    description:
      "OJAS Aerospace makes drone technology accessible across India. 4 Drone Categories, 4 Services, Dehradun Headquarters, and the MILU AI Agro Ecosystem.",
  },
  "/categories": {
    title: "Drone Categories — Agricultural, Logistics, Photography & Industrial | OJAS",
    description:
      "Explore OJAS Aerospace's 4 confirmed drone categories: Agricultural crop sprayers, heavy Logistics UAVs, Photography platforms, and Industrial inspection drones.",
  },
  "/services": {
    title: "Drone Services — Sales, Repair, Training & Rental | OJAS Aerospace",
    description:
      "Four core services: Drone Sales, certified Repair & Maintenance, professional Drone Training, and flexible Drone Rental via district Drone Ports.",
  },
  "/milu-ai": {
    title: "MILU AI — Agro AI Ecosystem & Field Intelligence | OJAS Aerospace",
    description:
      "Digital intelligence connected to real-world operations. Sugarcane belt crop monitoring, cadastral mapping, and sugar mill dashboards.",
  },
  "/network": {
    title: "Distributed Network — Drone Ports & Drone Centres | OJAS Aerospace",
    description:
      "Two-level network model: Dehradun Headquarters, district Drone Ports, and block Drone Centres bringing local access across India.",
  },
  "/milu-ai-network": {
    title: "Distributed Network — Drone Ports & Drone Centres | OJAS Aerospace",
    description:
      "Two-level network model: Dehradun Headquarters, district Drone Ports, and block Drone Centres bringing local access across India.",
  },
  "/about": {
    title: "About OJAS Aerospace — Vision, Mission & Core Values | Dehradun HQ",
    description:
      "Engineering the Future. Connecting Intelligence. Learn about our vision, 7 core values, aerospace engineering lab, and leadership.",
  },
  "/contact": {
    title: "Contact OJAS Aerospace — Dehradun Headquarters & Regional Inquiries",
    description:
      "Connect with OJAS Aerospace in Dehradun for drone sales, repairs, training enrollment, rentals, MILU AI, or Drone Centre partnerships.",
  },
  "/careers": {
    title: "Careers — Work Where Systems Meet Reality | OJAS Aerospace",
    description:
      "Careers across aerospace engineering, flight operations, AI software, and field systems at OJAS Aerospace.",
  },
  "/team": {
    title: "Leadership & Team — The People Behind OJAS Aerospace",
    description:
      "Meet the multidisciplinary team building OJAS across aerospace R&D, operations, software, and field missions.",
  },
  "/news": {
    title: "News & Field Updates | OJAS Aerospace",
    description:
      "Company developments, field operations, technology milestones, and media from OJAS Aerospace.",
  },
  "/partners": {
    title: "Partnerships — Building the Network Together | OJAS Aerospace",
    description:
      "Collaborate with OJAS Aerospace on local service delivery, drone rental/sales, pilot training, and technology integration.",
  },
  "/technology": {
    title: "Technology — Built for the Field | OJAS Aerospace",
    description:
      "A coherent working stack across sensing, geospatial intelligence, AI, agriculture, autonomy and digital infrastructure.",
  },
  "/sectors": {
    title: "Sectors — Systems for Different Worlds | OJAS Aerospace",
    description:
      "Operating environments where OJAS applies aerospace systems, real-time edge intelligence, and autonomous field capability.",
  },
  "/solutions": {
    title: "Solutions — Intelligence for the Real World | OJAS Aerospace",
    description:
      "Solution domains connecting OJAS services and technology to concrete problems and field outcomes.",
  },
  "/services/drone-sales": {
    title: "Commercial & Agricultural Drone Sales | OJAS Aerospace",
    description:
      "Procure DGCA-compliant agricultural, logistics, photography, and industrial drones with factory warranty, pilot training, and spare parts support.",
  },
  "/services/drone-sale": {
    title: "Commercial & Agricultural Drone Sales | OJAS Aerospace",
    description:
      "Procure DGCA-compliant agricultural, logistics, photography, and industrial drones with factory warranty, pilot training, and spare parts support.",
  },
  "/services/drone-repair-maintenance": {
    title: "Drone Repair & Maintenance Services | OJAS Aerospace",
    description:
      "Fast turnaround diagnostics, OEM spare parts replacement, and Annual Maintenance Contracts (AMC) across district Drone Ports and block Drone Centres.",
  },
  "/services/drone-training": {
    title: "DGCA Drone Pilot Training & Certification | OJAS Aerospace",
    description:
      "Comprehensive remote pilot training, agricultural spraying applicator courses, and simulator instruction compliant with DGCA RPTO standards.",
  },
  "/services/drone-rental": {
    title: "Drone Rental Fleets — Dry & Wet Lease | OJAS Aerospace",
    description:
      "Flexible drone rentals across agricultural, logistics, photography, and industrial categories for seasonal spraying, mapping, and inspection.",
  },
  "/privacy": {
    title: "Privacy Policy | OJAS Aerospace",
    description:
      "Data governance, agricultural telemetry security, and customer privacy protocols at OJAS Aerospace Private Limited, Dehradun.",
  },
  "/terms": {
    title: "Terms of Service | OJAS Aerospace",
    description:
      "Operational terms governing drone sales, maintenance agreements, pilot training enrollment, and network partner facilities.",
  },
  "/compliance": {
    title: "DGCA & Airspace Compliance Guidelines | OJAS Aerospace",
    description:
      "Strict adherence to Ministry of Civil Aviation Drone Rules 2021, Digital Sky zoning, Type Certification, and agricultural spraying standards.",
  },
};

const FAQ_MAP: Record<string, string> = {
  "/categories": "Which drone category fits your operation?",
  "/services": "What services does OJAS provide?",
  "/milu-ai": "How does aerial data become field intelligence?",
  "/network": "How is the distributed network organized?",
  "/partners": "Who do we build the network with?",
  "/news": "What is happening in the field?",
  "/team": "Who builds OJAS Aerospace?",
  "/careers": "Who wants to build it with us?",
  "/about": "What drives OJAS Aerospace?",
  "/contact": "Connect with OJAS Aerospace",
  "/technology": "How does OJAS connect aerospace technology for the field?",
  "/compliance": "How does OJAS adhere to DGCA and civil aviation frameworks?",
};

function setPageSchema(schema: Record<string, unknown> | null) {
  const id = "page-schema";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!schema) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function applySEO(rawTitle: string, description: string, path: string) {
  const title = `${rawTitle} | OJAS Aerospace`;
  const url = `https://www.ojasaerospace.com${path === "/" ? "/" : path}`;
  document.title = title;
  setMeta('meta[name="description"]', "content", description);
  setMeta('link[rel="canonical"]', "href", url);
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[name="twitter:title"]', "content", title);
  setMeta('meta[name="twitter:description"]', "content", description);
}

function useSEO(path: string) {
  useEffect(() => {
    const known = SEO_MAP[path];
    if (known) {
      applySEO(known.title, known.description, path);
      const q = FAQ_MAP[path];
      setPageSchema(
        q
          ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: known.description,
                },
              },
            ],
          }
          : null
      );
      return;
    }
    const s = solutions.find((x) => solutionPath(x.title) === path);
    if (s) {
      applySEO(`${s.title} | Solutions`, s.text, path);
      setPageSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.title,
        description: s.text,
        provider: {
          "@type": "Organization",
          name: "OJAS Aerospace",
          url: "https://www.ojasaerospace.com/",
        },
        areaServed: "IN",
      });
      return;
    }
    const svc = services.find((x) => servicePath(x.slug) === path);
    if (svc) {
      applySEO(`${svc.eyebrow} | Services`, svc.tagline, path);
      setPageSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: svc.eyebrow,
        description: svc.tagline,
        provider: {
          "@type": "Organization",
          name: "OJAS Aerospace",
          url: "https://www.ojasaerospace.com/",
        },
        areaServed: "IN",
      });
      return;
    }
    applySEO("404 — Airborne Vector Not Found", "The requested flight vector was not found. Return to central base or navigate verified drone categories.", path);
    setPageSchema(null);
  }, [path]);
}

function Router() {
  const [path, setPath] = useState(location.pathname);
  useEffect(() => {
    const f = () => setPath(location.pathname);
    addEventListener("popstate", f);
    return () => removeEventListener("popstate", f);
  }, []);
  useSEO(path);
  if (path === "/" || path === "/home") return <Home />;
  if (path === "/categories" || path === "/drones" || path === "/products") return <CategoriesPage />;
  if (path === "/services") return <ModularServicesPage />;
  if (path === "/milu-ai") return <ModularMiluPage />;
  if (path === "/network" || path === "/milu-ai-network" || path === "/infrastructure") return <ModularNetworkPage />;
  if (path === "/about") return <ModularAboutPage />;
  if (path === "/contact") return <ModularContactPage />;
  if (path === "/partners") return <ModularPartnersPage />;
  if (path === "/news") return <ModularNewsPage />;
  if (path === "/team") return <ModularTeamPage />;
  if (path === "/careers") return <ModularCareersPage />;
  if (path === "/technology") return <ModularTechnologyPage />;
  if (path === "/sectors") return <ModularSectorsPage />;
  if (path === "/solutions") return <SolutionsPage />;
  if (path === "/privacy") return <PrivacyPage />;
  if (path === "/terms") return <TermsPage />;
  if (path === "/compliance") return <CompliancePage />;
  const s = solutions.find((x) => solutionPath(x.title) === path);
  if (s) return <SolutionPage s={s} />;
  const svc = services.find((x) => servicePath(x.slug) === path || (x.slug === "drone-sale" && (path === "/services/drone-sales" || path === "/services/drone-sale")));
  if (svc) return <ServiceDetailPage slug={svc.slug} />;
  return <NotFoundPage />;
}
function FloatingCallButton() {
  return (
    <a
      href="tel:01354316767"
      className="floatCall"
      aria-label="Call OJAS Aerospace at 0135 431 6767"
    >
      <span className="floatCallRing r1" />
      <span className="floatCallRing r2" />
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .5 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
      </svg>
    </a>
  );
}

export default function App() {
  useEffect(() => {
    initScrollReveal();

    const handleUpdate = () => {
      triggerScrollRevealUpdate();
    };

    window.addEventListener("popstate", handleUpdate);
    window.addEventListener("scroll", handleUpdate, { passive: true });

    const observer = new MutationObserver(() => {
      triggerScrollRevealUpdate();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("popstate", handleUpdate);
      window.removeEventListener("scroll", handleUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <SplashScreen />
      <InquiryModal />
      <FloatingCallButton />
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}
