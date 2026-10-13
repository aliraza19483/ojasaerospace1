import { useState } from "react";
import { useEffect, useRef } from "react";
import type { CSSProperties, FormEvent, MouseEvent, ReactNode, SVGProps } from "react";
import "./Solutions.css";
import agriculture from "./assets/photography/agriculture-drone.webp";
import surveillance from "./assets/photography/surveillance.jpg";
import earth from "./assets/photography/earth-satellite.webp";
import infrastructure from "./assets/photography/infrastructure-drone.webp";
import response from "./assets/photography/response-drone.webp";
import logistics from "./assets/photography/logistics-drone.webp";
import about from "./assets/photography/about.webp";
import careers from "./assets/photography/careers-drone.webp";
import miluLogo from "./assets/LOGO.png";

type IconName = "leaf" | "globe" | "eye" | "chip" | "grid" | "route" | "signal" | "shield" | "network";
type CustomStyles = CSSProperties & {
  "--orbit-state"?: "paused" | "running";
  "--stack-index"?: number;
};

const photographs = {
  "precision-agriculture": {
    alt: "Top-down aerial view of agricultural drone operating over field crops",
    credit: "OJAS Aerial Intelligence",
    url: null,
    position: "50% 40%",
  },
  "surveillance-and-reconnaissance": {
    alt: "Commercial surveillance and reconnaissance drone operating outdoors",
    credit: "OJAS Tactical Fleet",
    url: null,
    position: "50% 15%",
  },
  "earth-observation": {
    alt: "Concept image of Earth-observation satellite and multispectral remote sensing",
    credit: "OJAS Space Systems",
    url: null,
    position: "50% 40%",
  },
  "infrastructure-monitoring": {
    alt: "Concept image of an inspection drone surveying a bridge",
    credit: "AI-generated concept",
    url: null,
    position: "50% 10%",
  },
  "disaster-response": {
    alt: "Concept image of a firefighting drone spraying water onto a building fire",
    credit: "AI-generated concept",
    url: null,
    position: "50% 5%",
  },
  "autonomous-logistics": {
    alt: "Concept image of a cargo drone carrying a secured goods parcel",
    credit: "AI-generated concept",
    url: null,
    position: "50% 15%",
  },
};
const solutions = [
  {
    title: "Precision agriculture",
    category: "AGRICULTURE & RURAL SYSTEMS",
    text: "A clearer view of every field. Connect crop observations, sensing and intelligence to make more precise decisions on the ground.",
    image: agriculture,
    tags: ["Crop intelligence", "Precision spraying", "Field mapping"],
    slug: "precision-agriculture",
    icon: "leaf",
  },
  {
    title: "Surveillance & reconnaissance",
    category: "SECURITY & PUBLIC SAFETY",
    text: "Extend situational awareness with aerial observation and intelligence for complex operating environments.",
    image: surveillance,
    tags: ["Aerial observation", "Remote monitoring", "Mission awareness"],
    slug: "surveillance-and-reconnaissance",
    icon: "eye",
  },
  {
    title: "Earth observation",
    category: "GEOSPATIAL INTELLIGENCE",
    text: "Turn aerial imagery and remote-sensing data into a deeper understanding of land, environments and change.",
    image: earth,
    tags: ["Remote sensing", "Geospatial analysis", "Change detection"],
    slug: "earth-observation",
    icon: "globe",
  },
  {
    title: "Infrastructure monitoring",
    category: "INFRASTRUCTURE & INDUSTRIAL",
    text: "Inspect the assets that keep the world moving, from construction sites to energy and utility networks.",
    image: infrastructure,
    tags: ["Asset inspection", "Thermal sensing", "Progress monitoring"],
    slug: "infrastructure-monitoring",
    icon: "grid",
  },
  {
    title: "Disaster response",
    category: "EMERGENCY OPERATIONS",
    text: "Get a timely picture when access is difficult and every moment matters. Support response with aerial and geospatial information.",
    image: response,
    tags: ["Emergency mapping", "Damage assessment", "Situational awareness"],
    slug: "disaster-response",
    icon: "shield",
  },
  {
    title: "Autonomous logistics",
    category: "LOGISTICS & DELIVERY",
    text: "Connect people and essential supplies beyond conventional routes, with mission-led aerial delivery systems.",
    image: logistics,
    tags: ["Medical delivery", "Remote access", "Mission coordination"],
    slug: "autonomous-logistics",
    icon: "route",
  },
] as const;
const technologies = [
  {
    title: "Aerial & remote sensing",
    icon: "signal",
    summary: "Capture the signals that matter.",
    items: [
      "Multispectral sensors",
      "Drone data pipelines",
      "Edge computing",
      "LoRaWAN IoT sensors",
    ],
  },
  {
    title: "Geospatial & Earth intelligence",
    icon: "globe",
    summary: "Give every observation context.",
    items: [
      "Sentinel-2 satellite",
      "ISRO Bhuvan API",
      "Geospatial databases",
      "Cloud digital twins",
    ],
  },
  {
    title: "AI & decision intelligence",
    icon: "chip",
    summary: "Translate complexity into clarity.",
    items: [
      "Deep learning & CNNs",
      "Time-series models",
      "Multilingual NLP",
      "Weather-adaptive AI",
    ],
  },
  {
    title: "Agriculture intelligence",
    icon: "leaf",
    summary: "Connect technology to the field.",
    items: [
      "NDVI / NDRE analysis",
      "IMD weather data",
      "Agmarknet integration",
      "e-NAM integration",
    ],
  },
  {
    title: "Autonomy & fleet operations",
    icon: "route",
    summary: "Coordinate the next move.",
    items: [
      "GPS fleet management",
      "Predictive maintenance",
      "Geofenced matching",
      "Offline-first field apps",
    ],
  },
  {
    title: "Digital infrastructure & trust",
    icon: "grid",
    summary: "Build a connected foundation.",
    items: [
      "Blockchain traceability",
      "Real-time dashboards",
      "API ecosystem",
      "Digital verification",
    ],
  },
];
const technologyPillars = [
  {
    title: "Sense the world.",
    label: "SENSING & CONTEXT",
    icon: "globe",
    text: "From the field to orbit, turn observations into a richer picture of the world.",
    domains: [0, 1],
    tags: ["Remote sensing", "Geospatial data"],
    graphic: "sensing",
  },
  {
    title: "Understand.",
    label: "INTELLIGENCE & INSIGHT",
    icon: "chip",
    text: "Connect signals, recognise patterns and bring clarity to decisions on the ground.",
    domains: [2, 3],
    tags: ["Applied AI", "Field intelligence"],
    graphic: "intelligence",
  },
  {
    title: "Move with purpose.",
    label: "AUTONOMY & CONNECTION",
    icon: "network",
    text: "Bring intelligence into action through coordinated operations and connected systems.",
    domains: [4, 5],
    tags: ["Fleet operations", "Digital infrastructure"],
    graphic: "action",
  },
] as const;
const nodes = [
  {
    name: "Field & aerial data",
    icon: "signal",
    x: 20,
    y: 23,
    text: "UAV imagery, sensors and observations connect the physical environment to the intelligence layer.",
  },
  {
    name: "Spatial context",
    icon: "globe",
    x: 78,
    y: 19,
    text: "Geospatial, satellite, environmental and weather information puts changing conditions in context.",
  },
  {
    name: "Operational signals",
    icon: "route",
    x: 89,
    y: 55,
    text: "Mission and service information helps connect decisions to the realities of field operations.",
  },
  {
    name: "Decision intelligence",
    icon: "chip",
    x: 73,
    y: 84,
    text: "Information and context come together to help teams understand what is happening and decide what comes next.",
  },
  {
    name: "Action in the field",
    icon: "leaf",
    x: 25,
    y: 82,
    text: "Insights inform services and field workflows, connecting intelligence back to practical action.",
  },
  {
    name: "Continuous learning",
    icon: "network",
    x: 10,
    y: 52,
    text: "Feedback from operations helps improve services and guides future technology development and research.",
  },
] as const;
const nodeContexts = [
  {
    label: "OBSERVE",
    tags: ["UAV imagery", "Field sensors", "Observations"],
    outcome:
      "A clearer starting point for understanding conditions on the ground.",
  },
  {
    label: "CONTEXTUALISE",
    tags: ["Satellite data", "Weather", "Geospatial layers"],
    outcome:
      "A connected view of where change is happening and what surrounds it.",
  },
  {
    label: "CONNECT",
    tags: ["Mission context", "Service information", "Field operations"],
    outcome: "Decisions grounded in the needs and constraints of each mission.",
  },
  {
    label: "INTERPRET",
    tags: ["Pattern recognition", "Analysis", "Decision support"],
    outcome:
      "Information that helps teams evaluate possibilities and plan their next step.",
  },
  {
    label: "ACT",
    tags: ["Field workflows", "Services", "Coordination"],
    outcome:
      "A practical connection between an insight and the work it informs.",
  },
  {
    label: "EVOLVE",
    tags: ["Operational feedback", "Learning", "Research"],
    outcome: "Experience from the field informs the next cycle of improvement.",
  },
];
const orbitNodes = nodes.map((node, index) => {
  const angle = ((index * 60 - 90) * Math.PI) / 180;
  return {
    ...node,
    ...nodeContexts[index],
    x: 50 + 35 * Math.cos(angle),
    y: 50 + 35 * Math.sin(angle),
  };
});
const network = [
  {
    name: "MILU AI Network",
    type: "THE CONNECTED ARCHITECTURE",
    text: "The distributed structure connecting intelligence, infrastructure and field capabilities into one operating network.",
  },
  {
    name: "MILU Hub",
    type: "COORDINATION & AGGREGATION",
    text: "A higher-level layer that coordinates activity and brings information together across connected operations.",
  },
  {
    name: "MILU Centre",
    type: "CONNECTED CAPABILITIES",
    text: "An operating environment that brings people, platforms and connected capabilities together.",
  },
  {
    name: "MILU Station",
    type: "LOCAL OPERATIONS",
    text: "A local operational node that brings systems and services closer to the field.",
  },
  {
    name: "MILU Point",
    type: "AT THE EDGE",
    text: "A distributed presence where intelligence and services reach the environments in which work happens.",
  },
];
const services = [
  [
    "Agriculture & crop care",
    "Crop health monitoring, field mapping, precision spraying and agricultural intelligence.",
  ],
  [
    "Survey, mapping & inspection",
    "Aerial mapping, photogrammetry, terrain assessment and asset documentation.",
  ],
  [
    "Monitoring & intelligence",
    "Site observation, change detection and remote-area situational awareness.",
  ],
  [
    "Logistics & emergency response",
    "Delivery support, emergency mapping and rapid aerial information.",
  ],
  [
    "Drone & field operations",
    "Mission planning, flight operations, field data collection and specialised payload operations.",
  ],
  [
    "Media & aerial imaging",
    "Aerial photography, cinematic operations and visual documentation.",
  ],
];
function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths = {
    leaf: (
      <>
        <path d="M5 19C1 8 9 3 21 3c0 12-5 20-16 16Z" />
        <path d="m4 21 12-12M9 16v-5m4 1h5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18M5 6h14M5 18h14" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    chip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    route: (
      <>
        <circle cx="5" cy="6" r="3" />
        <circle cx="15" cy="20.5" r="3" />
        <path d="M8 6h8a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h3" />
      </>
    ),
    signal: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M7 7a7 7 0 0 0 0 10m10-10a7 7 0 0 1 0 10M4 4a11 11 0 0 0 0 16M20 4a11 11 0 0 1 0 16" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    network: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="4" r="2" />
        <circle cx="20" cy="4" r="2" />
        <circle cx="4" cy="20" r="2" />
        <circle cx="20" cy="20" r="2" />
        <path d="m6 6 4 4m4 4 4 4M6 18l4-4m4-4 4-4" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.network}
    </svg>
  );
}
function Label({ children, number }: { children: ReactNode; number: string }) {
  return (
    <div className="hp-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}
function navigate(path: string) {
  if (path === location.pathname) return;
  history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}
function onInternalClick(path: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(path);
  };
}
function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  const isInternal = href.startsWith("/");
  return (
    <a
      className={`hp-link${light ? " hp-link-light" : ""}`}
      href={href}
      onClick={isInternal ? onInternalClick(href) : undefined}
      target={isInternal || href.startsWith("#") ? undefined : "_blank"}
      rel={isInternal || href.startsWith("#") ? undefined : "noopener noreferrer"}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeNode, setActiveNode] = useState(0);
  const [orbitPaused, setOrbitPaused] = useState(false);
  const [orbitVisible, setOrbitVisible] = useState(false);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [activeNetwork, setActiveNetwork] = useState(0);
  const [mailReady, setMailReady] = useState(false);
  const selected = solutions[activeSolution];
  const selectedNode = orbitNodes[activeNode];
  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOrbitVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(orbit);
    return () => observer.disconnect();
  }, []);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; interest: string; message: string } | null>(null);
  const prepareEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");
    const code = `OJAS-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(code);
    setSubmittedData({ name, email, interest, message });
    setMailReady(true);
  };
  return (
    <div className="homepage">
      <section className="hp-solutions hp-section" id="solutions">
        {/* Quick Access Bar for 4 Categories, 4 Services, MILU AI and Network */}
        <div className="hpQuickAccessBar">
          <div
            className="hpQuickItem"
            onClick={() => {
              history.pushState({}, "", "/categories");
              window.dispatchEvent(new PopStateEvent("popstate"));
              window.scrollTo(0, 0);
            }}
          >
            <div className="hpQuickIconWrap">🛸</div>
            <div>
              <span className="hpQuickBadge">CONFIRMED CATEGORIES</span>
              <b>4 Drone Categories</b>
              <small>Agricultural · Logistics · Photography · Industrial ↗</small>
            </div>
          </div>
          <div
            className="hpQuickItem"
            onClick={() => {
              history.pushState({}, "", "/services");
              window.dispatchEvent(new PopStateEvent("popstate"));
              window.scrollTo(0, 0);
            }}
          >
            <div className="hpQuickIconWrap">⚡</div>
            <div>
              <span className="hpQuickBadge">CORE SERVICES</span>
              <b>4 Core Services</b>
              <small>Sales · Repair & Maintenance · Training · Rental ↗</small>
            </div>
          </div>
          <div
            className="hpQuickItem"
            onClick={() => {
              history.pushState({}, "", "/milu-ai");
              window.dispatchEvent(new PopStateEvent("popstate"));
              window.scrollTo(0, 0);
            }}
          >
            <div className="hpQuickIconWrap">🧠</div>
            <div>
              <span className="hpQuickBadge">AGRO AI ECOSYSTEM</span>
              <b>MILU AI Platform</b>
              <small>Hardoi Sugarcane Belt Pilot · Crop Health Alerts ↗</small>
            </div>
          </div>
          <div
            className="hpQuickItem"
            onClick={() => {
              history.pushState({}, "", "/network");
              window.dispatchEvent(new PopStateEvent("popstate"));
              window.scrollTo(0, 0);
            }}
          >
            <div className="hpQuickIconWrap">📡</div>
            <div>
              <span className="hpQuickBadge">TWO-LEVEL NETWORK</span>
              <b>Drone Ports & Centres</b>
              <small>Dehradun HQ · District Ports · Block Centres ↗</small>
            </div>
          </div>
        </div>

        <div className="hp-heading">
          <div>
            <h2>
              Higher perspective.
              <br />
              <em>Real-world possibilities.</em>
            </h2>
          </div>
          <p>
            Connecting aerospace, sensing and intelligence to the places, people
            and challenges that need them most.
          </p>
        </div>
        <div className="solution-workspace">
          <article
            className="solution-feature"
            id="solution-feature"
            aria-labelledby="solution-feature-title"
          >
            <div className="solution-feature-image">
              {solutions.map((item, index) => (
                <img
                  key={item.slug}
                  src={item.image}
                  alt={
                    activeSolution === index ? photographs[item.slug].alt : ""
                  }
                  aria-hidden={activeSolution !== index}
                  data-active={activeSolution === index}
                  style={{ objectPosition: photographs[item.slug].position }}
                  loading="lazy"
                  decoding="async"
                />
              ))}

              <div className="solution-image-count" aria-hidden="true">
                0{activeSolution + 1}
                <span> / 06</span>
              </div>
            </div>
            <div className="solution-feature-body">
              <div aria-live="polite" aria-atomic="true">
                <div key={selected.slug} className="solution-feature-copy">
                  <span className="hp-micro">{selected.category}</span>
                  <h3 id="solution-feature-title">{selected.title}</h3>
                  <p>{selected.text}</p>
                  <div className="solution-feature-tags">
                    {selected.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="solution-feature-footer">
                <ArrowLink
                  href={`/solutions/${selected.slug}`}
                >
                  Explore solution
                </ArrowLink>
                <div className="solution-step-controls">
                  <button
                    type="button"
                    aria-label="Previous solution"
                    aria-controls="solution-feature"
                    onClick={() =>
                      setActiveSolution(
                        (index) =>
                          (index + solutions.length - 1) % solutions.length,
                      )
                    }
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Next solution"
                    aria-controls="solution-feature"
                    onClick={() =>
                      setActiveSolution(
                        (index) => (index + 1) % solutions.length,
                      )
                    }
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </article>
          <div className="solution-choice-panel" id="sectors">
            <div
              className="solution-choice-grid"
              role="group"
              aria-label="Choose a solution"
              onKeyDown={(event) => {
                const buttons = [
                  ...event.currentTarget.querySelectorAll("button"),
                ];
                if (!(event.target instanceof HTMLButtonElement)) return;
                const current = buttons.indexOf(event.target);
                if (current < 0) return;
                const offsets: Record<string, number> = {
                  ArrowRight: 1,
                  ArrowLeft: -1,
                  ArrowDown: 2,
                  ArrowUp: -2,
                };
                let next;
                if (event.key === "Home") next = 0;
                else if (event.key === "End") next = buttons.length - 1;
                else if (event.key in offsets)
                  next =
                    (current + offsets[event.key] + buttons.length) %
                    buttons.length;
                else return;
                event.preventDefault();
                buttons[next].focus();
                setActiveSolution(next);
              }}
            >
              {solutions.map((item, index) => (
                <button
                  type="button"
                  className="solution-choice"
                  key={item.slug}
                  aria-pressed={activeSolution === index}
                  aria-controls="solution-feature"
                  onClick={() => setActiveSolution(index)}
                >
                  <span className="solution-choice-top">
                    <span className="solution-choice-icon">
                      <Icon name={item.icon} />
                    </span>
                    <span className="solution-choice-number">0{index + 1}</span>
                  </span>
                  <span className="solution-choice-title">{item.title}</span>
                  <span className="solution-choice-bottom">
                    <span>{item.tags[0]}</span>
                    <span className="solution-choice-arrow" aria-hidden="true">
                      {activeSolution === index ? "↗" : "→"}
                    </span>
                  </span>
                  <span className="solution-selected-mark" aria-hidden="true" />
                </button>
              ))}
            </div>
            <div className="solution-choice-note">
              <span className="solution-note-dot" />
              <p>
                One connected approach.
                <br />
                <strong>Built around your mission.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hp-technology hp-section" id="technology">
        <header className="section-intro">
          <h2>
            Complex engineering.
            <br />
            <em>Connected by design.</em>
          </h2>
          <p>
            Sense. Understand. Act. Six technology domains, brought together in
            three connected pillars.
          </p>
        </header>
        <div className="technology-pillars">
          {technologyPillars.map((pillar, index) => (
            <article
              className={`pillar-card pillar-${pillar.graphic}`}
              key={pillar.label}
            >
              <div className="pillar-top">
                <span>
                  0{index + 1} / {pillar.label}
                </span>
                <Icon name={pillar.icon} />
              </div>
              <div className="pillar-copy">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <div className="pillar-tags">
                  {pillar.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="pillar-capabilities">
                {pillar.domains.map((domain) => (
                  <div key={technologies[domain].title}>
                    <h4>{technologies[domain].title}</h4>
                    <ul>
                      {technologies[domain].items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="technology-cta">
          <ArrowLink href="/technology" light>
            Explore our technology
          </ArrowLink>
        </div>
      </section>

      <section className="hp-milu hp-section" id="milu">
        <header className="section-intro">
          <h2>
            Many signals. <em>One intelligence.</em>
          </h2>
          <p>
            A connected cycle of observation, understanding and action. Select a
            node to see how it fits into the whole.
          </p>
        </header>
        <div className="milu-workspace">
          <div className="milu-orbit-panel">
            <div
              className="milu-orbit-stage"
              ref={orbitRef}
              style={{
                "--orbit-state":
                  orbitPaused || !orbitVisible ? "paused" : "running",
              } as CustomStyles}
            >
              <div className="milu-track track-outer" />
              <div className="milu-track track-main" />
              <div className="milu-track track-inner" />
              <div
                className="milu-orbit-rotor"
                role="group"
                aria-label="Explore the six MILU connections"
              >
                <svg
                  className="milu-spokes"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  {orbitNodes.map((node, index) => (
                    <path
                      key={node.name}
                      data-active={activeNode === index}
                      d={`M 50 50 L ${node.x} ${node.y}`}
                    />
                  ))}
                </svg>
                {orbitNodes.map((node, index) => (
                  <div
                    className="milu-node-position"
                    key={node.name}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <div className="milu-node-counter">
                      <button
                        className="milu-orbit-node"
                        type="button"
                        aria-pressed={activeNode === index}
                        aria-controls="milu-node-detail"
                        onClick={() => setActiveNode(index)}
                      >
                        <span className="milu-node-top">
                          <Icon name={node.icon} />
                          <small>0{index + 1}</small>
                        </span>
                        <span>{node.name}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="milu-nucleus">
                <div className="milu-nucleus-halo" />
                <img
                  className="milu-nucleus-logo"
                  src={miluLogo}
                  alt="MILU AI"
                />
              </div>
            </div>
            <div className="milu-orbit-toolbar milu-orbit-toolbar--compact">
              <button
                type="button"
                className="milu-motion-toggle"
                aria-pressed={orbitPaused}
                onClick={() => setOrbitPaused((value) => !value)}
              >
                <span aria-hidden="true">{orbitPaused ? "▷" : "Ⅱ"}</span>
                {orbitPaused ? "Resume orbit" : "Pause orbit"}
              </button>
            </div>
          </div>
          <aside
            className="milu-insight"
            id="milu-node-detail"
            aria-labelledby="milu-insight-title"
          >
            
            <div
              className="milu-insight-live"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="milu-insight-copy" key={selectedNode.name}>
                <div className="milu-insight-icon">
                  <Icon name={selectedNode.icon} />
                </div>
                <span className="milu-insight-eyebrow">
                  {selectedNode.label}
                </span>
                <h3 id="milu-insight-title">{selectedNode.name}</h3>
                <p>{selectedNode.text}</p>
                <div className="milu-insight-tags">
                  {selectedNode.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="milu-outcome">
                  <span>WHAT IT ENABLES</span>
                  <p>{selectedNode.outcome}</p>
                </div>
              </div>
            </div>
            <div className="milu-insight-footer">
              <ArrowLink href="/milu-ai" light>
                Discover MILU AI
              </ArrowLink>
              <div className="milu-step-controls">
                <button
                  type="button"
                  aria-label="Previous MILU connection"
                  onClick={() => setActiveNode((index) => (index + 5) % 6)}
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next MILU connection"
                  onClick={() => setActiveNode((index) => (index + 1) % 6)}
                >
                  →
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="hp-network hp-section" id="infrastructure">
        <div className="hp-heading">
          <div>
            
            <h2>
              Closer to the field.
              <br />
              <em>Connected to the whole.</em>
            </h2>
          </div>
          <p>
            People, platforms and places form the MILU AI Network—bringing
            capabilities closer to where work happens.
          </p>
        </div>
        <div className="network-layout">
          <div className="network-layers" aria-label="Infrastructure layers">
            {network.map((item, index) => (
              <button
                key={item.name}
                aria-pressed={activeNetwork === index}
                aria-controls="network-detail"
                onClick={() => setActiveNetwork(index)}
              >
                <span>0{index + 1}</span>
                <strong>{item.name}</strong>
                <i>{activeNetwork === index ? "−" : "+"}</i>
              </button>
            ))}
          </div>
          <div className="network-panel" id="network-detail" aria-live="polite">
            <div className="network-stack" aria-hidden="true">
              {network.map((item, index) => (
                <div
                  key={item.name}
                  className={index === activeNetwork ? "stack-active" : ""}
                  style={{ "--stack-index": index } as CustomStyles}
                >
                  <span>0{index + 1}</span>
                  <Icon name="network" />
                </div>
              ))}
            </div>
            <div className="network-panel-copy">
              <span className="hp-micro">{network[activeNetwork].type}</span>
              <h3>{network[activeNetwork].name}</h3>
              <p>{network[activeNetwork].text}</p>
            </div>
          </div>
        </div>
        <ArrowLink href="/milu-ai-network">
          Explore the network
        </ArrowLink>
      </section>

      <section className="hp-services hp-section" id="services">
        <div>
          <Label number="05">FROM CAPABILITY TO ACTION</Label>
          <h2>
            Your requirement.
            <br />
            <em>Our starting point.</em>
          </h2>
          <p className="services-intro">
            A mission begins with an outcome. Explore services that connect
            planning, capture, analysis and delivery.
          </p>
          <ArrowLink href="/contact" light>
            Tell us about your project
          </ArrowLink>
          <div className="service-method">
            <span>PLAN</span>
            <i />
            <span>CAPTURE</span>
            <i />
            <span>DELIVER</span>
          </div>
        </div>
        <div className="service-list">
          {services.map(([name, text], index) => (
            <details key={name} open={index === 0 ? true : undefined}>
              <summary>
                <span>0{index + 1}</span>
                <h3>{name}</h3>
                <i>+</i>
              </summary>
              <div>
                <p>{text}</p>
                <a href="/contact" onClick={onInternalClick("/contact")}>Discuss this service ↗</a>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="hp-about hp-section" id="company">
        <div className="about-visual">
          <img
            src="/all%20image/drone-assembly-training-lab.jpg"
            alt="OJAS Aerospace Dehradun Engineering Lab — Technical crew and engineers assembling operational agricultural airframe platform"
            loading="lazy"
            decoding="async"
          />
          <span>ENGINEERING / INTELLIGENCE / INFRASTRUCTURE</span>
          <span className="photo-credit about-photo-credit">
            OJAS Central Aerospace Lab · Airframe Assembly & Field Prep
          </span>
        </div>
        <div className="about-copy">
          <Label number="06">THE OJAS PERSPECTIVE</Label>
          <h2>
            Built with purpose.
            <br />
            <em>Looking beyond.</em>
          </h2>
          <p>
            OJAS brings aerospace engineering, intelligent systems and
            infrastructure together. Real requirements inform what we build;
            field experience informs what comes next.
          </p>
          <div className="about-principles">
            <span>Build.</span>
            <span>Deploy.</span>
            <span>Learn.</span>
          </div>
          <ArrowLink href="/about">
            Meet Ojas Aerospace
          </ArrowLink>
        </div>
      </section>
      <section className="hp-careers" id="careers">
        <img
          src={careers}
          alt="3D render of a graphite and silver quadcopter drone"
          loading="lazy"
          decoding="async"
        />
        <div>
          <span className="hp-micro">YOUR NEXT CHAPTER</span>
          <h2>
            The future needs
            <br />
            <em>your perspective.</em>
          </h2>
          <ArrowLink href="/careers" light>
            Explore careers
          </ArrowLink>
        </div>
      </section>

      <section className="hp-contact hp-section" id="contact">
        <div>
          <Label number="07">LET’S MAKE IT HAPPEN</Label>
          <h2>
            What’s on
            <br />
            <em>your horizon?</em>
          </h2>
          <p>
            A project, a partnership, or a question.
            <br />
            Every possibility starts with a conversation.
          </p>
          <a className="contact-email" href="mailto:info@ojasspace.com">
            info@ojasspace.com <span>↗</span>
          </a>
          <a
            className="contact-phone"
            href="tel:01354316767"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 10,
              color: "var(--gold2)",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            <span>📞</span> Helpline: 0135 431 6767 ↗
          </a>
          <div className="office-details">
            <span>FIND US</span>
            <p>
              Imperial Heights
              <br />
              Dehradun, Uttarakhand, India
            </p>
          </div>
        </div>
        {submittedRef ? (
          <div
            className="contactSuccessCard"
            style={{
              textAlign: "center",
              padding: "40px 24px",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(232, 184, 79, 0.3)",
              borderRadius: "14px",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(232, 184, 79, 0.15)",
                border: "1px solid var(--gold2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "var(--gold2)",
              }}
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontSize: "20px", color: "#fff", marginBottom: 8 }}>Enquiry Registered</h3>
            <span
              style={{
                display: "inline-block",
                background: "rgba(232, 184, 79, 0.12)",
                border: "1px solid var(--gold2)",
                color: "var(--gold2)",
                padding: "4px 14px",
                borderRadius: "999px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "13px",
                letterSpacing: "0.08em",
                marginBottom: 14,
              }}
            >
              {submittedRef}
            </span>
            <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", maxWidth: 420, margin: "0 auto 20px", lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: "#fff" }}>{submittedData?.name}</strong>. Your enquiry regarding{" "}
              <strong style={{ color: "var(--gold2)" }}>{submittedData?.interest}</strong> has been logged with our regional team.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
              <a
                href="tel:01354316767"
                className="btn goldBtn"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  fontSize: "13px",
                }}
              >
                <span>📞</span> Call Helpline: 0135 431 6767 ↗
              </a>
              <a
                href={`mailto:info@ojasspace.com?subject=${encodeURIComponent(
                  `Enquiry [${submittedRef}] — ${submittedData?.interest}`
                )}&body=${encodeURIComponent(
                  `Reference: ${submittedRef}\nName: ${submittedData?.name}\nEmail: ${submittedData?.email}\nInterest: ${submittedData?.interest}\n\n${submittedData?.message}`
                )}`}
                className="btn outlineBtn"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  fontSize: "13px",
                }}
              >
                <span>✉</span> Send Email Copy ↗
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmittedRef(null);
                setSubmittedData(null);
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--muted)",
                fontSize: "12px",
                textDecoration: "underline",
                cursor: "pointer",
                padding: "6px 12px",
              }}
            >
              Submit another enquiry ↺
            </button>
          </div>
        ) : (
          <form onSubmit={prepareEmail}>
            <div className="form-row">
              <label htmlFor="sol-name">
                Your name
                <input
                  id="sol-name"
                  name="name"
                  placeholder="Name"
                  required
                  autoComplete="name"
                  maxLength={120}
                />
              </label>
              <label htmlFor="sol-email">
                Email address
                <input
                  id="sol-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                  maxLength={200}
                />
              </label>
            </div>
            <label htmlFor="sol-interest">
              I’m interested in
              <select id="sol-interest" name="interest">
                <option>Project & services</option>
                <option>Technology partnership</option>
                <option>MILU AI Network</option>
                <option>Careers</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label htmlFor="sol-message">
              Tell us a little more
              <textarea
                id="sol-message"
                name="message"
                placeholder="What would you like to build, solve or explore?"
                required
                rows={3}
                maxLength={3000}
              />
            </label>
            <button type="submit" className="contact-submit">
              Prepare enquiry <span>↗</span>
            </button>
            <p className="form-note" role="status">
              {mailReady
                ? "Your email app has been requested. Review and send your enquiry there, or email us directly."
                : "Opens your email app with the details ready for you to review and send."}
            </p>
          </form>
        )}
      </section>
    </div>
  );
}
