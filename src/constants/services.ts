import { ServiceGroup } from "../types";

export const coreServices = [
  {
    slug: "drone-sales",
    title: "Drone Sales",
    intro: "Explore and procure agricultural, logistics, photography, and industrial drone platforms configured for field performance.",
    icon: "drone",
  },
  {
    slug: "drone-repair-maintenance",
    title: "Repair & Maintenance",
    intro: "Trained technicians, genuine parts, rapid diagnostics, and preventative AMC servicing across supported drone models.",
    icon: "wrench",
  },
  {
    slug: "drone-training",
    title: "Drone Training",
    intro: "Curriculum-based equipment handling, safety practices, flight simulator hours, and operational skill development.",
    icon: "book",
  },
  {
    slug: "drone-rental",
    title: "Drone Rental",
    intro: "Flexible daily, weekly, and seasonal equipment rentals across categories—available with or without an operator.",
    icon: "route",
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Drone Sales",
    intro: "Agricultural, logistics, photography, and industrial drone platforms supplied, configured, and registered for field deployment.",
    icon: "drone",
    items: [
      "Agricultural Spraying Drones",
      "Logistics & Delivery UAVs",
      "Photography & Cinema Drones",
      "Industrial & Inspection Platforms",
      "DGCA UIN Registration Support",
      "Custom Payload Integration",
    ],
  },
  {
    title: "Repair & Maintenance",
    intro: "Fast turnaround diagnostics, genuine spare parts replacement, and Annual Maintenance Contracts (AMC) via district Drone Ports.",
    icon: "wrench",
    items: [
      "Hardware & Structural Repairs",
      "Camera & Gimbal Diagnostics",
      "Battery Testing & Replacement",
      "Firmware Updates & Recalibration",
      "Annual Maintenance Contracts (AMC)",
      "Emergency Field Support",
    ],
  },
  {
    title: "Drone Training",
    intro: "Foundational and specialized flight instruction emphasizing safety protocols, flight procedures, and field application skills.",
    icon: "book",
    items: [
      "Beginner Flight Fundamentals",
      "Remote Pilot Course Preparation",
      "Agricultural Spraying Operations",
      "Simulator-Based Flight Hours",
      "Institutional Batch Training",
      "Safety & Airspace Regulations",
    ],
  },
  {
    title: "Drone Rental",
    intro: "Cost-effective, on-demand equipment rental for short-term projects or entire agricultural seasons without capital investment.",
    icon: "route",
    items: [
      "Agricultural Spraying Drone Rental",
      "Cinematography Drone Rental",
      "Industrial Inspection Drone Rental",
      "Dry Rental (Equipment Only)",
      "Wet Rental (Pilot Included)",
      "Seasonal / Project-Based Leases",
    ],
  },
];

export const enableServices = [
  "DGCA Compliance & Registration Assistance",
  "UAV Fleet Diagnostics & Maintenance",
  "On-Demand Drone Access — Sales / Rental / Leasing",
];
