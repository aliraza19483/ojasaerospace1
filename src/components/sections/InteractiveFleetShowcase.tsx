import React, { useState } from "react";
import {
  FLEET_ITEMS,
  GROUND_OPERATION_PROOFS,
  FIELD_VIDEOS,
  DroneFleetItem,
  GroundOperationProof,
  FieldVideoItem,
} from "../../constants/fleetAssets";
import { triggerInquiry } from "../ui/InquiryModal";
import { Icon } from "../ui/Icon";
import { AnimatedCounter } from "../ui/AnimatedCounter";

type FilterTab = "all" | "agricultural" | "vtol-cargo" | "fpv-cinematic" | "fixed-wing" | "field-ops";

export function InteractiveFleetShowcase() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedDroneId, setSelectedDroneId] = useState<string>(FLEET_ITEMS[0].id);
  const [viewMode, setViewMode] = useState<"studio" | "field">("studio");
  const [lightboxProof, setLightboxProof] = useState<GroundOperationProof | null>(null);
  const [activeVideo, setActiveVideo] = useState<FieldVideoItem | null>(null);

  const selectedDrone =
    FLEET_ITEMS.find((d) => d.id === selectedDroneId) || FLEET_ITEMS[0];

  const filteredDrones =
    activeTab === "all"
      ? FLEET_ITEMS
      : activeTab === "field-ops"
      ? []
      : FLEET_ITEMS.filter((d) => d.category === activeTab);

  return (
    <section className="fleetShowcaseSection" id="fleet-showcase">
      <span id="interactive-fleet" style={{ position: "relative", top: -80 }} />
      <div className="fleetShowcaseHeader">
        <div className="eyebrow gold">
          <span />
          HARDWARE & FIELD REALITY SHOWCASE
        </div>
        <h2>
          Precision Engineering. <em>Proven on Indian Soil.</em>
        </h2>
        <p>
          Inspect our confirmed agricultural sprayers, heavy-lift cargo VTOLs, fixed-wing survey aircraft,
          and explore authentic photographic proof from active IFFCO field deployments, Dehradun R&D labs, and pilot academy batches.
        </p>

        {/* ── LIVE SCROLL COUNT-UP TELEMETRY STATS HUD ── */}
        <div className="telemetryLiveBar" aria-label="Live Operational Telemetry Stats">
          <div className="telemetryLiveHeader">
            <span className="telemetryLivePulse" />
            <span className="telemetryLiveTag">VERIFIED OPERATIONAL TELEMETRY &amp; FLIGHT BENCHMARKS</span>
            <span className="telemetryLiveLoc">DEHRADUN HQ // ACTIVE FLEET SORTIES</span>
          </div>
          <div className="telemetryLiveGrid">
            <div className="telemetryLiveCard">
              <div className="telemetryLiveVal">
                <AnimatedCounter value="30 Litres" />
              </div>
              <div className="telemetryLiveLabel">HEXACOPTER TANK CAPACITY</div>
              <div className="telemetryLiveSub">Continuous micron droplet spraying</div>
            </div>

            <div className="telemetryLiveCard">
              <div className="telemetryLiveVal">
                <AnimatedCounter value="65 kg MTOW" />
              </div>
              <div className="telemetryLiveLabel">MAX TAKEOFF WEIGHT</div>
              <div className="telemetryLiveSub">Reinforced carbon-fiber airframe</div>
            </div>

            <div className="telemetryLiveCard">
              <div className="telemetryLiveVal">
                <AnimatedCounter value="35 Acres / charge" />
              </div>
              <div className="telemetryLiveLabel">OPERATIONAL COVERAGE</div>
              <div className="telemetryLiveSub">Single sortie agrochemical cycle</div>
            </div>

            <div className="telemetryLiveCard">
              <div className="telemetryLiveVal">
                <AnimatedCounter value="18-22 Mins" />
              </div>
              <div className="telemetryLiveLabel">FULL-LOAD FLIGHT TIME</div>
              <div className="telemetryLiveSub">Dual intelligent LiPo power rails</div>
            </div>

            <div className="telemetryLiveCard">
              <div className="telemetryLiveVal">
                <AnimatedCounter value="40+ Cadets" />
              </div>
              <div className="telemetryLiveLabel">DGCA GRADUATED PILOTS</div>
              <div className="telemetryLiveSub">RPTO certified academy batches</div>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="fleetFilterTabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === "all"}
            className={`fleetTabBtn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Airframes ({FLEET_ITEMS.length})
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "agricultural"}
            className={`fleetTabBtn ${activeTab === "agricultural" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("agricultural");
              const firstAgri = FLEET_ITEMS.find((d) => d.category === "agricultural");
              if (firstAgri) setSelectedDroneId(firstAgri.id);
            }}
          >
            Agri Spraying (EFT)
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "vtol-cargo"}
            className={`fleetTabBtn ${activeTab === "vtol-cargo" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("vtol-cargo");
              const firstVtol = FLEET_ITEMS.find((d) => d.category === "vtol-cargo");
              if (firstVtol) setSelectedDroneId(firstVtol.id);
            }}
          >
            Heavy Cargo & VTOL
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "fpv-cinematic"}
            className={`fleetTabBtn ${activeTab === "fpv-cinematic" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("fpv-cinematic");
              const firstFpv = FLEET_ITEMS.find((d) => d.category === "fpv-cinematic");
              if (firstFpv) setSelectedDroneId(firstFpv.id);
            }}
          >
            Cinematic & FPV
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "fixed-wing"}
            className={`fleetTabBtn ${activeTab === "fixed-wing" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("fixed-wing");
              const firstFw = FLEET_ITEMS.find((d) => d.category === "fixed-wing");
              if (firstFw) setSelectedDroneId(firstFw.id);
            }}
          >
            Survey & Fixed-Wing
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "field-ops"}
            className={`fleetTabBtn liveOpsBtn ${activeTab === "field-ops" ? "active" : ""}`}
            onClick={() => setActiveTab("field-ops")}
          >
            <span className="liveDot" />
            Field Operations & Proof ({GROUND_OPERATION_PROOFS.length})
          </button>
        </div>
      </div>

      {/* ── MODE 1: AIRFRAME EXPLORER (FOR HARDWARE TABS) ── */}
      {activeTab !== "field-ops" && (
        <div className="fleetExplorer">
          {/* Active Drone Feature Card */}
          <div className="fleetHeroCard">
            <div className="fleetVisualContainer">
              {/* Dual View Toggle if real photo exists */}
              {selectedDrone.realFieldImage && (
                <div className="viewToggleBar">
                  <button
                    className={`viewToggleBtn ${viewMode === "studio" ? "active" : ""}`}
                    onClick={() => setViewMode("studio")}
                  >
                    Studio Spec View
                  </button>
                  <button
                    className={`viewToggleBtn ${viewMode === "field" ? "active" : ""}`}
                    onClick={() => setViewMode("field")}
                  >
                    Field Deployment View
                  </button>
                </div>
              )}

              <div className="fleetImageStage">
                {selectedDrone.realFieldImage && viewMode === "field" ? (
                  <div className="fieldImgWrap">
                    <img
                      src={selectedDrone.realFieldImage}
                      alt={`Field deployment of ${selectedDrone.name}`}
                      className="fleetMainImg fieldImg"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="fieldImgTag">
                      <span>VERIFIED GROUND DEPLOYMENT</span>
                    </div>
                  </div>
                ) : selectedDrone.image.includes(".jpeg") || selectedDrone.image.includes(".jpg") ? (
                  <div className="fieldImgWrap">
                    <img
                      src={selectedDrone.image}
                      alt={selectedDrone.name}
                      className="fleetMainImg fieldImg"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="fieldImgTag">
                      <span>VERIFIED GROUND DEPLOYMENT</span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedDrone.image}
                    alt={selectedDrone.name}
                    className="fleetMainImg studioImg"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>

              {selectedDrone.badge && (
                <div className="fleetBadge">
                  <span>{selectedDrone.badge}</span>
                </div>
              )}
            </div>

            <div className="fleetInfoContainer">
              <div className="fleetEyebrow">{selectedDrone.categoryLabel}</div>
              <h3>{selectedDrone.name}</h3>
              <p className="fleetTagline">{selectedDrone.tagline}</p>
              <p className="fleetDesc">{selectedDrone.description}</p>

              {/* Technical Specifications Matrix */}
              <div className="fleetSpecsGrid">
                {selectedDrone.specs.tankCapacity && (
                  <div className="fleetSpecItem">
                    <small>TANK CAPACITY</small>
                    <b>
                      <AnimatedCounter
                        value={selectedDrone.specs.tankCapacity}
                        triggerKey={selectedDrone.id}
                      />
                    </b>
                  </div>
                )}
                {selectedDrone.specs.payload && (
                  <div className="fleetSpecItem">
                    <small>PAYLOAD</small>
                    <b>
                      <AnimatedCounter
                        value={selectedDrone.specs.payload}
                        triggerKey={selectedDrone.id}
                      />
                    </b>
                  </div>
                )}
                {selectedDrone.specs.endurance && (
                  <div className="fleetSpecItem">
                    <small>FLIGHT TIME</small>
                    <b>
                      <AnimatedCounter
                        value={selectedDrone.specs.endurance}
                        triggerKey={selectedDrone.id}
                      />
                    </b>
                  </div>
                )}
                {selectedDrone.specs.mtow && (
                  <div className="fleetSpecItem">
                    <small>MAX TAKEOFF (MTOW)</small>
                    <b>
                      <AnimatedCounter
                        value={selectedDrone.specs.mtow}
                        triggerKey={selectedDrone.id}
                      />
                    </b>
                  </div>
                )}
                {selectedDrone.specs.coverage && (
                  <div className="fleetSpecItem">
                    <small>FIELD COVERAGE</small>
                    <b>
                      <AnimatedCounter
                        value={selectedDrone.specs.coverage}
                        triggerKey={selectedDrone.id}
                      />
                    </b>
                  </div>
                )}
                {selectedDrone.specs.wingspanOrFrame && (
                  <div className="fleetSpecItem">
                    <small>WINGSPAN / FRAME</small>
                    <b>
                      <AnimatedCounter
                        value={selectedDrone.specs.wingspanOrFrame}
                        triggerKey={selectedDrone.id}
                      />
                    </b>
                  </div>
                )}
                {selectedDrone.specs.operatingRange && (
                  <div className="fleetSpecItem">
                    <small>OPERATIONAL RANGE</small>
                    <b>
                      <AnimatedCounter
                        value={selectedDrone.specs.operatingRange}
                        triggerKey={selectedDrone.id}
                      />
                    </b>
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div className="fleetFeaturesList">
                <h4>Core Operational Features:</h4>
                <ul>
                  {selectedDrone.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div className="fleetActionRow">
                <button
                  className="btn-gold"
                  onClick={() =>
                    triggerInquiry({
                      title: `Inquiry for ${selectedDrone.name}`,
                      service: selectedDrone.categoryLabel,
                    })
                  }
                >
                  Request Quote / Inquire Platform
                </button>
                <button
                  className="btn-glass"
                  onClick={() => setActiveTab("field-ops")}
                >
                  View Field Proof Gallery →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Select Thumbnails Ribbon */}
          <div className="fleetRibbon">
            <span className="fleetRibbonLabel">SELECT AIRFRAME MODEL:</span>
            <div className="fleetRibbonTrack">
              {filteredDrones.map((drone) => (
                <button
                  key={drone.id}
                  className={`fleetThumbnailBtn ${
                    selectedDroneId === drone.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedDroneId(drone.id);
                    setViewMode("studio");
                  }}
                >
                  <img src={drone.image} alt={drone.name} loading="lazy" />
                  <span>{drone.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MODE 2: FIELD OPERATIONS & PROOF GALLERY ── */}
      {activeTab === "field-ops" && (
        <div className="fieldOpsContainer">
          <div className="fieldOpsIntro">
            <div className="fieldOpsStats">
              <div>
                <b>
                  <AnimatedCounter value="100% Genuine" triggerKey="field-ops" />
                </b>
                <span>Field-tested proof on Indian soil</span>
              </div>
              <div>
                <b>IFFCO Certified</b>
                <span>Nano urea & DAP spraying trials</span>
              </div>
              <div>
                <b>
                  <AnimatedCounter value="40+ Academy Cadets" triggerKey="field-ops" />
                </b>
                <span>Graduated in Dehradun training batches</span>
              </div>
              <div>
                <b>Dehradun Labs</b>
                <span>In-house motor propulsion test benches</span>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="fieldProofGrid">
            {GROUND_OPERATION_PROOFS.map((proof) => (
              <div
                key={proof.id}
                className="fieldProofCard"
                onClick={() => setLightboxProof(proof)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setLightboxProof(proof);
                }}
              >
                <div className="fieldProofImgWrapper">
                  <img src={proof.image} alt={proof.title} loading="lazy" decoding="async" />
                  <span className="fieldProofCategoryTag">{proof.eyebrow}</span>
                </div>
                <div className="fieldProofContent">
                  <h4>{proof.title}</h4>
                  <p>{proof.caption}</p>
                  <div className="fieldProofLocation">
                    <span>📍</span> {proof.location}
                  </div>
                  <div className="fieldProofTags">
                    {proof.tags.map((t) => (
                      <span key={t}>#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flight Demonstration Video Cards */}
          <div className="fieldVideosSection">
            <div className="fieldVideosHeader">
              <h3>Flight Demonstration Dispatches (Live Crop Spraying)</h3>
              <p>Watch recorded flight passes of our agricultural sprayers operating over field boundaries.</p>
            </div>
            <div className="fieldVideoGrid">
              {FIELD_VIDEOS.map((vid) => (
                <div key={vid.id} className="fieldVideoCard">
                  <div className="videoWrapper">
                    <video
                      src={vid.videoUrl}
                      controls
                      preload="metadata"
                      playsInline
                    />
                  </div>
                  <div className="fieldVideoMeta">
                    <h4>{vid.title}</h4>
                    <p>{vid.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Photo Inspection */}
      {lightboxProof && (
        <div className="proofLightbox" onClick={() => setLightboxProof(null)}>
          <div
            className="proofLightboxModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="proofLightboxClose"
              onClick={() => setLightboxProof(null)}
              aria-label="Close image lightbox"
            >
              ×
            </button>
            <div className="proofLightboxImgWrap">
              <img src={lightboxProof.image} alt={lightboxProof.title} />
            </div>
            <div className="proofLightboxInfo">
              <small>{lightboxProof.eyebrow}</small>
              <h3>{lightboxProof.title}</h3>
              <p>{lightboxProof.caption}</p>
              <div className="proofLightboxMeta">
                <span>📍 {lightboxProof.location}</span>
                <button
                  className="btn-gold"
                  onClick={() => {
                    setLightboxProof(null);
                    triggerInquiry({
                      title: `Inquiry via ${lightboxProof.title}`,
                      service: "Field Operations & Services",
                    });
                  }}
                >
                  Contact Field Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
