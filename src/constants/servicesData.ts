// ─────────────────────────────────────────────────────────────────────────
// OJAS AEROSPACE — 4 CORE SERVICES DATA
// Consistent services: Drone Sales · Repair & Maintenance · Drone Training · Drone Rental
// ─────────────────────────────────────────────────────────────────────────

export type FAQ = { q: string; a: string };

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Offering = {
  title: string;
  description: string;
  specs?: { label: string; value: string }[];
  image?: string;
  badge?: string;
};

export type ServiceContent = {
  slug: string;
  icon: string;
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
  includes: {
    heading: string;
    intro: string;
    items: Offering[];
  };
  howItWorks: {
    heading: string;
    steps: ProcessStep[];
  };
  whyOjas: {
    heading: string;
    points: { title: string; description: string }[];
  };
  pricing: {
    heading: string;
    note: string;
    cta: string;
  };
  complianceDisclaimer?: string;
  faq: FAQ[];
  cta: {
    title: string;
    subtitle: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

export const services: ServiceContent[] = [
  // ── 1. DRONE SALES ───────────────────────────────────────────────────────
  {
    slug: "drone-sales",
    icon: "drone",
    hero: {
      eyebrow: "Drone Sales",
      title: "The right drone platform, configured for your mission.",
      tagline:
        "Agricultural, logistics, photography, and industrial platforms—supplied, configured, registered, and supported for field dependability.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Schedule a Demonstration",
    image: "/src/assets/photography/agriculture-drone.webp",
  },
  includes: {
    heading: "Explore by confirmed category",
    intro:
      "Product selection is matched to intended use, required payload capability, operational environment, and verified technical specifications.",
    items: [
      {
        title: "Agricultural Drones",
        description:
          "High-capacity spraying and granule dispersion platforms engineered for field reliability in sugarcane, paddy, and orchard operations.",
        specs: [
          { label: "Payload Capacity", value: "10L – 40L liquid tank" },
          { label: "Endurance", value: "18 – 25 min / operational cycle" },
          { label: "Navigation", value: "Centimeter RTK-GNSS + Terrain Radar" },
          { label: "Spray Width", value: "4 – 8 meters swath" },
        ],
        badge: "Agro Sprayers",
      },
      {
        title: "Logistics Drones",
        description:
          "High-endurance aerial transport platforms engineered for point-to-point emergency medical, spare parts, and rural cargo delivery.",
        specs: [
          { label: "Payload Capacity", value: "5 kg to 25 kg cargo" },
          { label: "Flight Radius", value: "15 km to 40 km radius" },
          { label: "Safety System", value: "Dual autopilot + Parachute fail-safe" },
          { label: "Delivery Mode", value: "Rigid pod or winch release" },
        ],
        badge: "Cargo UAVs",
      },
      {
        title: "Photography Drones",
        description:
          "Cinema-grade platforms equipped with multi-axis stabilized camera gimbals for high-resolution visual capture, documentaries, and site documentation.",
        specs: [
          { label: "Camera Sensor", value: "4K / 6K cinema gimbal optics" },
          { label: "Stabilization", value: "3-axis mechanical gimbal (±0.005°)" },
          { label: "Flight Time", value: "35 – 42 min per battery" },
          { label: "Live Feed", value: "Low-latency 1080p HD monitor feed" },
        ],
        badge: "Cinematography",
      },
      {
        title: "Industrial Drones",
        description:
          "Rugged inspection aircraft featuring dual radiometric thermal and high-zoom optical sensors for power utilities, solar arrays, and infrastructure.",
        specs: [
          { label: "Sensor Payload", value: "Dual EO/IR Thermal + 40x Zoom" },
          { label: "Weather Resistance", value: "IP54 / IP55 ingress protection" },
          { label: "Shielding", value: "Electromagnetic immunity for powerlines" },
          { label: "Inspection Type", value: "Structural, thermal & visual photogrammetry" },
        ],
        badge: "Asset Inspection",
      },
    ],
  },
  howItWorks: {
    heading: "From consultation to field deployment",
    steps: [
      { step: "01", title: "Operational Assessment", description: "Define your use case, terrain, payload needs, and target operating budget." },
      { step: "02", title: "Configuration & Sizing", description: "We match the platform, sensor payload, batteries, and charging stations to your operational profile." },
      { step: "03", title: "DGCA & UIN Support", description: "Assistance with Digital Sky registration, UIN guidance, and compliance protocols so your aircraft is legal before first flight." },
      { step: "04", title: "Handover & Orientation Flight", description: "Platform delivered, verified through bench inspection, and handed over with complete orientation training." },
    ],
  },
  whyOjas: {
    heading: "Why procure through OJAS Aerospace",
    points: [
      { title: "DGCA Registration Guidance", description: "Clear, step-by-step assistance with Digital Sky UIN documentation and airworthiness verification." },
      { title: "Network Warranty & Local Support", description: "Backed by our district Drone Ports for warranty claims, fast repairs, and genuine replacement spares." },
      { title: "Field-Calibrated Hardware", description: "Every unit is tested and calibrated for Indian climatic and agricultural operational conditions." },
      { title: "Structured Enterprise Financing", description: "Assistance with institutional financing, leasing, and seasonal payment models for qualified buyers." },
    ],
  },
  pricing: {
    heading: "Procurement & Pricing",
    note: "Pricing depends on platform tier, payload package, battery sets, and generator / charging setups.",
    cta: "Request a Custom Quotation",
  },
  complianceDisclaimer:
    "Product specifications and performance figures represent target or verified manufacturer metrics; all platforms are delivered in compliance with DGCA rules and Type Certification standards.",
  faq: [
    { q: "Do you assist with DGCA UIN registration?", a: "Yes. We guide you through the Digital Sky UIN registration process so your platform is fully compliant before delivery." },
    { q: "Can we request a live flight demonstration?", a: "Yes. Demonstration flights can be arranged at our Dehradun facility or, depending on operational feasibility, directly at your location." },
    { q: "What warranty cover is provided?", a: "All platforms carry standard manufacturer and equipment warranty, backed by diagnostic support at our district Drone Ports." },
    { q: "Are spare batteries and parts readily available?", a: "Yes. Our district-level Drone Ports stock genuine motors, ESCs, carbon arms, nozzles, and intelligent batteries." },
  ],
  cta: {
    title: "Ready to deploy the right drone platform?",
    subtitle: "Tell us about your mission requirements—our aerospace specialists will recommend the ideal setup.",
    primaryLabel: "Request a Quote",
    secondaryLabel: "Schedule a Demonstration",
  },
},

  // ── 2. REPAIR & MAINTENANCE ──────────────────────────────────────────────
  {
    slug: "drone-repair-maintenance",
    icon: "wrench",
    hero: {
      eyebrow: "Repair & Maintenance",
      title: "Keep your fleet flying, not grounded.",
      tagline:
        "Trained technicians, genuine replacement parts, rapid turnaround, and structured preventative maintenance across supported drone models.",
      ctaPrimary: "Book a Repair Inspection",
      ctaSecondary: "Request an AMC Contract",
      image: "/src/assets/photography/infrastructure-drone.webp",
    },
    includes: {
      heading: "Comprehensive maintenance capabilities",
      intro: "From urgent field repairs to scheduled preventative servicing, all supported under one roof.",
      items: [
        {
          title: "Hardware & Structural Repair",
          description: "Motors, ESCs, landing gear, carbon-fiber arms, and propellers inspected, calibrated, and replaced using original parts.",
          badge: "Mechanical",
        },
        {
          title: "Camera & Gimbal Diagnostics",
          description: "Precision calibration of 3-axis mechanical gimbals, optical zoom systems, and radiometric thermal sensor connections.",
          badge: "Optics",
        },
        {
          title: "Battery Health & Power Systems",
          description: "Cell impedance testing, thermal degradation checks, balancing, and safe replacement of high-capacity flight batteries.",
          badge: "Power",
        },
        {
          title: "Firmware, Avionics & Calibration",
          description: "IMU/compass recalibration, flight controller diagnostics, firmware upgrades, and fail-safe safety testing.",
          badge: "Avionics",
        },
      ],
    },
    howItWorks: {
      heading: "How our service process works",
      steps: [
        { step: "01", title: "Log the Issue", description: "Submit your fault report online or via phone. Drop off at a block Drone Centre or ship to a district Drone Port." },
        { step: "02", title: "Diagnostic Audit", description: "Trained technicians conduct a multi-point inspection and share a transparent diagnostic quote within 48 hours." },
        { step: "03", title: "Precision Repair", description: "Defective components are replaced with genuine OEM-approved spares; firmware and telemetry recalibrated." },
        { step: "04", title: "Flight Test & Return", description: "Every repaired unit undergoes a bench test and post-service flight check before handover." },
      ],
    },
    whyOjas: {
      heading: "Why service with OJAS Aerospace",
      points: [
        { title: "Trained Maintenance Technicians", description: "Work performed by experienced technicians adhering to strict aerospace inspection protocols." },
        { title: "Genuine Spare Parts", description: "Original OEM components only—no questionable third-party substitutes that jeopardize flight safety." },
        { title: "District Drone Port Proximity", description: "Local service facilities reduce turnaround time from weeks to days, protecting critical operational windows." },
        { title: "Annual Maintenance Contracts (AMC)", description: "Preventative service schedules, priority queueing, and discounted spare parts for enterprise fleets." },
      ],
    },
    pricing: {
      heading: "Service Pricing & AMC Plans",
      note: "Standard inspection fee applied towards final repair cost. Custom AMC plans available for commercial and agricultural fleets.",
      cta: "Request an AMC Proposal",
    },
    faq: [
      { q: "What is the typical diagnostic turnaround?", a: "Most platforms receive a comprehensive diagnostic report and estimate within 48 business hours of arriving at our service port." },
      { q: "Can I drop off equipment at a block Drone Centre?", a: "Yes. Block-level Drone Centres accept equipment for intake and transit to the district Drone Port workshop." },
      { q: "What does an Annual Maintenance Contract (AMC) cover?", a: "AMCs cover regular preventative health checks, labor costs, firmware audits, and priority turnaround during peak seasons." },
      { q: "Do you test fly the drone before return?", a: "Yes. Every repair is concluded with a hover and sensor check to verify airworthiness before delivery." },
    ],
    cta: {
      title: "Don't let equipment downtime halt operations.",
      subtitle: "Book a diagnostic inspection or secure your fleet with an Annual Maintenance Contract today.",
      primaryLabel: "Book a Repair",
      secondaryLabel: "Request an AMC Contract",
    },
  },

  // ── 3. DRONE TRAINING ────────────────────────────────────────────────────
  {
    slug: "drone-training",
    icon: "book",
    hero: {
      eyebrow: "Drone Training",
      title: "Master the aircraft. Operate responsibly.",
      tagline:
        "Practical, curriculum-focused instruction covering equipment handling, operating procedures, safety practices, and mission skills.",
      ctaPrimary: "Enroll in a Batch",
      ctaSecondary: "Download Course Syllabus",
      image: "/src/assets/careers.webp",
    },
    includes: {
      heading: "Structured course programmes",
      intro: "Comprehensive instruction paths designed for beginners, agricultural operators, and enterprise flight teams.",
      items: [
        {
          title: "Foundational Flight Fundamentals",
          description: "Basic aerodynamics, flight controller mechanics, pre-flight safety checklists, and manual line-of-sight flight control.",
          badge: "Beginner",
        },
        {
          title: "Remote Pilot Training Curriculum",
          description: "Classroom theory, airspace regulations, meteorology, flight simulator hours, and supervised dual-control flight training.",
          badge: "Professional",
        },
        {
          title: "Agricultural Drone Applicator Course",
          description: "Specialized training for agricultural spraying: chemical handling safety, swath calibration, terrain following, and battery management.",
          badge: "Agriculture",
        },
        {
          title: "Enterprise & Institutional Cohorts",
          description: "Custom corporate training batches for organizations establishing in-house drone inspection or aerial survey teams.",
          badge: "Enterprise",
        },
      ],
    },
    howItWorks: {
      heading: "Our training methodology",
      steps: [
        { step: "01", title: "Theory & Regulatory Framework", description: "Classroom sessions covering aviation law, DGCA rules, airspace categorization, and safety SOPs." },
        { step: "02", title: "Flight Simulator Mastery", description: "Extensive simulator hours to build muscle memory, fail-safe reactions, and emergency handling." },
        { step: "03", title: "Supervised Practical Hours", description: "Hands-on flight field practice under instructor supervision, moving from basic hovering to complex routes." },
        { step: "04", title: "Evaluation & Course Completion", description: "Written and practical assessments validating operational readiness; completion certificates awarded." },
      ],
    },
    whyOjas: {
      heading: "Why train with OJAS Aerospace",
      points: [
        { title: "Experienced Flight Instructors", description: "Learn from instructors with hundreds of logged operational flight hours across diverse terrains." },
        { title: "Safety-First Philosophy", description: "Deep emphasis on SOP compliance, weather assessment, battery safety, and public liability awareness." },
        { title: "Modern Aircraft & Simulators", description: "Train on current multirotor platforms and simulation software reflecting real industrial workflows." },
        { title: "Network Operator Pathway", description: "Top performers are considered for pilot deployment opportunities across our Drone Ports and Centres." },
      ],
    },
    pricing: {
      heading: "Batch Schedules & Fees",
      note: "Fee schedules vary by course module, duration, and corporate batch sizing. Subsidized slots available for rural youth batches.",
      cta: "Request Batch Schedule",
    },
    complianceDisclaimer:
      "All claims regarding pilot certification or authorized training apply strictly where official accreditation is in place through partner DGCA-authorized Remote Pilot Training Organisations (RPTOs). Non-certified modules focus on practical equipment handling and operational skills.",
    faq: [
      { q: "Is prior flying experience required to enroll?", a: "No. Our foundational courses start from basic principles and assume zero prior aeronautical background." },
      { q: "What is the duration of the training programmes?", a: "Courses range from intensive 5-day foundational modules to multi-week specialized enterprise applicator courses." },
      { q: "Do you assist with job placement?", a: "While we do not guarantee employment, qualified candidates are prioritized for operational pilot positions in our network." },
      { q: "How is pilot certification granted?", a: "Official Remote Pilot Certificates (RPC) are granted only via authorized RPTO evaluation in full compliance with DGCA rules." },
    ],
    cta: {
      title: "Begin your path in professional drone aviation.",
      subtitle: "New batches forming regularly at our training facilities. Reserve your seat today.",
      primaryLabel: "Enroll in Next Batch",
      secondaryLabel: "Speak with an Advisor",
    },
  },

  // ── 4. DRONE RENTAL ──────────────────────────────────────────────────────
  {
    slug: "drone-rental",
    icon: "route",
    hero: {
      eyebrow: "Drone Rental",
      title: "Access enterprise drone capability on demand.",
      tagline:
        "Flexible daily, weekly, or seasonal rentals across agricultural, logistics, photography, and industrial platforms—with or without an operator.",
      ctaPrimary: "Check Fleet Availability",
      ctaSecondary: "Get a Rental Quote",
      image: "/src/assets/photography/logistics-drone.webp",
    },
    includes: {
      heading: "Fleet availability across categories",
      intro: "Select the exact aircraft configuration, payload, and rental duration that matches your project needs.",
      items: [
        {
          title: "Agricultural Spraying Fleet Rental",
          description: "Seasonal or monthly rentals for farmers, cooperatives, and spray contractors during peak sowing and pest cycles.",
          badge: "Agriculture",
        },
        {
          title: "Cinematography & Media Drone Rental",
          description: "Cinema-grade photography drones with 3-axis gimbals and 4K/6K sensors for commercial shoots and event visual coverage.",
          badge: "Photography",
        },
        {
          title: "Industrial & Inspection Drone Rental",
          description: "Thermal and optical inspection UAVs available for short-term asset monitoring, solar audits, and infrastructure reviews.",
          badge: "Industrial",
        },
        {
          title: "Logistics & Delivery UAV Rental",
          description: "Heavy-payload multirotor platforms for logistics trials, emergency supply demonstrations, and remote transport pilots.",
          badge: "Logistics",
        },
      ],
    },
    howItWorks: {
      heading: "How equipment rental works",
      steps: [
        { step: "01", title: "Select Category & Term", description: "Choose the drone platform and rental period—daily, weekly, monthly, or full crop season." },
        { step: "02", title: "Pilot Option: Dry or Wet", description: "Self-operate if your team holds qualified pilots (Dry Rental), or add an experienced OJAS pilot (Wet Rental)." },
        { step: "03", title: "Briefing & Handover", description: "Equipment inspected, battery sets charged, and handed over at your nearest Drone Port or delivered on site." },
        { step: "04", title: "Return & De-briefing", description: "Straightforward return at the end of the rental term with transparent security deposit settlement." },
      ],
    },
    whyOjas: {
      heading: "Why rent through OJAS Aerospace",
      points: [
        { title: "Zero Capex Burden", description: "Access cutting-edge drone technology without upfront purchase expense or depreciation risk." },
        { title: "Wet & Dry Rental Flexibility", description: "Choose whether you require only equipment or a fully supported aircraft + certified operator crew." },
        { title: "Field-Tested & Pre-Serviced", description: "Every rental aircraft is freshly calibrated, bench-tested, and equipped with healthy battery banks." },
        { title: "Local Drone Centre Dispatch", description: "Pickup and return available through our distributed network of district Drone Ports and block Centres." },
      ],
    },
    pricing: {
      heading: "Rental Plans & Rates",
      note: "Rates vary by drone category, sensor payload, duration, and pilot inclusion. Multi-week and seasonal bookings receive preferential rates.",
      cta: "Request a Rental Rate Card",
    },
    faq: [
      { q: "Can I rent a drone without hiring an OJAS pilot?", a: "Yes (Dry Rental), provided your operator can demonstrate valid pilot qualifications, UIN compliance, and equipment competency." },
      { q: "What is included with the rental package?", a: "Standard packages include the drone aircraft, flight controller, two or more battery sets, fast-charging hub, and transport case." },
      { q: "Is equipment insurance required?", a: "Yes. Comprehensive equipment transit and damage coverage terms are included in all rental agreements." },
      { q: "Can a rental be delivered directly to our field site?", a: "Yes. Delivery and on-site handover can be arranged within our active service districts." },
    ],
    cta: {
      title: "Get the drone capability you need, exactly when you need it.",
      subtitle: "Check fleet availability in your district and get an upfront, transparent quote.",
      primaryLabel: "Check Availability",
      secondaryLabel: "Get a Rental Quote",
    },
  },
];