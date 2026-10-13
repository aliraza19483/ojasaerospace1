import React from "react";
import careersImage from "../assets/careers.webp";
import { services } from "../constants/servicesData";
import { navigate, servicePath } from "../utils/navigation";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { Icon } from "../components/ui/Icon";
import { triggerInquiry } from "../components/ui/InquiryModal";

const SERVICE_MEDIA: Record<
  string,
  { image: string; alt: string; badge: string; isTransparent?: boolean }
> = {
  "drone-sales": {
    image:
      "/Agri%20drone/EFT%20G630%2030%20Litre%20Agriculture%20Hexacopter%20Drone.png",
    alt: "EFT G630 Agricultural Drone Platform - OJAS Sales Airframe",
    badge: "OEM Platform Sales",
    isTransparent: true,
  },
  "drone-repair-maintenance": {
    image:
      "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.50%20AM%20(1).jpeg",
    alt: "In-House Propulsion Motor Dynamometer Test Cage with OJAS Aerospace Logo",
    badge: "Propulsion & Diagnostics Bay",
  },
  "drone-training": {
    image:
      "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.53%20AM%20(1).jpeg",
    alt: "RPTO Pilot Training Batch Graduation with Fleet Airframes",
    badge: "Certified Flight Academy",
  },
  "drone-rental": {
    image:
      "/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.00%20AM.jpeg",
    alt: "Agricultural Drone Spraying Deployment with IFFCO Nano Nutrients",
    badge: "Turnkey Field Fleet",
  },
};

export function ServicesPage() {
  return (
    <StandardPage
      question="What services does OJAS provide?"
      title={
        <>
          Four core services. <em>Complete lifecycle support.</em>
        </>
      }
      description="OJAS Aerospace structures its service delivery around four confirmed pillars: Drone Sales, certified Repair & Maintenance, professional Drone Training, and flexible Drone Rental—bringing dependable support closer through local Drone Ports and Centres."
      image={careersImage}
    >
      <SectionBlock
        eyebrow="Core Service Portfolio"
        title={
          <>
            From procurement to <em>field upkeep and operations.</em>
          </>
        }
      >
        <p className="wideLead">
          Whether you need to purchase agricultural sprayers, service an enterprise fleet, rent equipment for a peak crop season, or train operators, OJAS provides dependable, local support.
        </p>

        <div className="fourServicesGrid">
          {services.map((svc, i) => {
            const media = SERVICE_MEDIA[svc.slug];
            return (
              <article key={svc.slug} className="fourServiceCard">
                {media && (
                  <div className="fourServiceMedia">
                    <img
                      src={media.image}
                      alt={media.alt}
                      className={
                        media.isTransparent
                          ? "serviceImgTransparent"
                          : "serviceImgCover"
                      }
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="serviceMediaBadge">{media.badge}</span>
                  </div>
                )}
                <div className="fourServiceHead">
                  <div className="iconBubble">
                    <Icon name={svc.icon} />
                  </div>
                  <small>0{i + 1} / SERVICE</small>
                  <h3>{svc.hero.eyebrow}</h3>
                  <p>{svc.hero.tagline}</p>
                </div>

                <div className="fourServiceIncludes">
                  <small>WHAT WE DELIVER</small>
                  <ul>
                    {svc.includes.items.map((item, idx) => (
                      <li key={idx}>
                        <span className="dot">•</span>
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {svc.complianceDisclaimer && (
                  <div className="serviceComplianceNote">
                    <small>COMPLIANCE NOTICE</small>
                    <p>{svc.complianceDisclaimer}</p>
                  </div>
                )}

                <div className="fourServiceActions">
                  <button
                    className="btn goldBtn fullWidthBtn"
                    onClick={() => navigate(servicePath(svc.slug))}
                  >
                    EXPLORE {svc.hero.eyebrow.toUpperCase()} <b>→</b>
                  </button>
                  <button
                    className="btn outlineBtn fullWidthBtn"
                    onClick={() =>
                      triggerInquiry({
                        title: `${svc.hero.eyebrow} Inquiry`,
                        service: svc.hero.eyebrow,
                      })
                    }
                  >
                    {svc.hero.ctaPrimary} ↗
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive Fleet Showcase Teaser */}
        <div className="fleetTeaserCallout">
          <div className="fleetTeaserText">
            <span className="fleetTeaserBadge">AIRFRAME INVENTORY & SCHEMATICS</span>
            <h3>Explore the Complete Interactive Fleet Showcase</h3>
            <p>
              Inspect technical blueprints, payload capacities, telemetry specs, and live flight field footage across our Agricultural, Logistics VTOL, Cinematic FPV, and Fixed-Wing UAVs.
            </p>
          </div>
          <button
            className="btn goldBtn"
            onClick={() => navigate("/categories")}
          >
            LAUNCH FLEET VIEWER <b>→</b>
          </button>
        </div>
      </SectionBlock>

      {/* Why Choose the Service Model */}
      <SectionBlock
        eyebrow="The Service Commitment"
        title={
          <>
            Dependable, transparent, and <em>locally accessible.</em>
          </>
        }
      >
        <div className="serviceGuarantees">
          <div className="guaranteeCard">
            <Icon name="shield" />
            <h4>DGCA Compliance Guidance</h4>
            <p>Every sale and training cohort operates within civil aviation regulations and Digital Sky registration protocols.</p>
          </div>
          <div className="guaranteeCard">
            <Icon name="wrench" />
            <h4>Genuine Spare Parts</h4>
            <p>Direct OEM-backed replacement motors, ESCs, nozzles, and avionics stocked at district Drone Ports.</p>
          </div>
          <div className="guaranteeCard">
            <Icon name="factory" />
            <h4>District-Level Workshop Access</h4>
            <p>Eliminate weeks of shipping downtime by servicing your drone directly in your district.</p>
          </div>
          <div className="guaranteeCard">
            <Icon name="leaf" />
            <h4>Flexible Capex Options</h4>
            <p>Choose between outright purchase, seasonal rental, and pay-per-acre spray operations.</p>
          </div>
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
