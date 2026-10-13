import React, { useState } from "react";
import { droneCategories } from "../constants/droneCategories";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { Icon } from "../components/ui/Icon";
import { triggerInquiry } from "../components/ui/InquiryModal";
import { InteractiveFleetShowcase } from "../components/sections/InteractiveFleetShowcase";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import heroImg from "../assets/photography/agriculture-drone.webp";

export function CategoriesPage() {
  const [selectedId, setSelectedId] = useState<string>("agricultural");
  const selected = droneCategories.find((c) => c.id === selectedId) || droneCategories[0];

  return (
    <StandardPage
      question="Which drone fits your operation?"
      title={
        <>
          Four categories. <em>Every operational mission.</em>
        </>
      }
      description="OJAS Aerospace categorizes its aircraft into four distinct pillars—Agricultural, Logistics, Photography, and Industrial—engineered to meet confirmed operational, regulatory, and environmental requirements."
      image={heroImg}
    >
      {/* Category Selector Tabs */}
      <div className="categoryNavTabs" role="tablist">
        {droneCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={selectedId === cat.id}
            className={`categoryTabBtn ${selectedId === cat.id ? "active" : ""}`}
            onClick={() => setSelectedId(cat.id)}
          >
            <div className="iconBubble">
              <Icon name={cat.icon} />
            </div>
            <div>
              <small>{cat.eyebrow}</small>
              <h3>{cat.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* Active Category Detailed Showcase */}
      <section className="categoryHeroFeature">
        <div className="categoryHeroMedia">
          <img
            src={selected.image}
            alt={`OJAS Aerospace ${selected.title} - Operational Aircraft Platform`}
            loading="lazy"
            decoding="async"
            width="640"
            height="420"
          />
          <div className="categoryMediaBadge">
            <span>CONFIRMED CATEGORY</span>
            <b>{selected.title}</b>
          </div>
        </div>

        <div className="categoryHeroContent">
          <div className="eyebrow gold">
            <span />
            {selected.eyebrow}
          </div>
          <h2>{selected.title}</h2>
          <p className="wideLead">{selected.summary}</p>
          <p>{selected.description}</p>

          <div className="categoryActionBtns">
            <button
              className="btn goldBtn"
              onClick={() =>
                triggerInquiry({
                  title: `${selected.title} Procurement & Inquiry`,
                  service: `Drone Sales — ${selected.title}`,
                })
              }
            >
              PURCHASE INQUIRY <b>↗</b>
            </button>
            <button
              className="btn outlineBtn"
              onClick={() =>
                triggerInquiry({
                  title: `${selected.title} Rental Booking`,
                  service: `Drone Rental — ${selected.title}`,
                })
              }
            >
              RENTAL INQUIRY <b>→</b>
            </button>
          </div>
        </div>
      </section>

      {/* Applications & Technical Specs Grid */}
      <SectionBlock
        eyebrow="Capabilities & Specifications"
        title={
          <>
            Engineered for <em>mission dependability.</em>
          </>
        }
      >
        <div className="categorySpecsGrid">
          <div className="categorySpecsCard">
            <div className="specsCardHead">
              <Icon name="target" />
              <h3>Supported Field Applications</h3>
            </div>
            <ul className="categoryAppList">
              {selected.applications.map((app, i) => (
                <li key={i}>
                  <span className="appCheck">✓</span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="categorySpecsCard">
            <div className="specsCardHead">
              <Icon name="cpu" />
              <h3>Indicative Technical Metrics</h3>
            </div>
            <div className="specsTable">
              {selected.specs.map((sp, i) => (
                <div key={i} className="specRow">
                  <span className="specLabel">{sp.label}</span>
                  <strong className="specVal">
                    <AnimatedCounter value={sp.value} triggerKey={selectedId} />
                  </strong>
                </div>
              ))}
            </div>

            <div className="categoryRegulatoryCallout">
              <small>REGULATORY & COMPLIANCE NOTICE</small>
              <p>{selected.regulatoryNote}</p>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Supported Services for this Category */}
      <SectionBlock
        eyebrow="Supported Service Pathways"
        title={
          <>
            Available through <em>all four service channels.</em>
          </>
        }
      >
        <div className="supportedServicesGrid">
          {selected.supportedServices.map((svc, i) => (
            <div key={i} className="supportedSvcPill">
              <Icon name="bolt" />
              <div>
                <strong>{svc}</strong>
                <small>Available at district Drone Ports</small>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 4-Pillar Operational Comparison Matrix */}
      <SectionBlock
        eyebrow="Side-by-Side Operational Comparison"
        title={
          <>
            Matching airframe class to <em>field requirements.</em>
          </>
        }
      >
        <div className="categoryComparisonTableWrap">
          <table className="categoryComparisonTable">
            <thead>
              <tr>
                <th>Category Pillar</th>
                <th>Typical Payload</th>
                <th>Flight Endurance</th>
                <th>Operational Range</th>
                <th>Primary Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>🌾 Agricultural Spraying</strong></td>
                <td>10 – 50 Litres / kg</td>
                <td>18 – 25 Mins (Full Load)</td>
                <td>3 – 5 km Telemetry</td>
                <td>Paddy, sugarcane, cotton crop protection</td>
              </tr>
              <tr>
                <td><strong>📦 Heavy VTOL & Cargo</strong></td>
                <td>5 – 15 kg Cargo Pod</td>
                <td>2 – 3.5 Hours</td>
                <td>50 – 100+ km BVLOS</td>
                <td>Medical logistics, emergency parcel transit</td>
              </tr>
              <tr>
                <td><strong>🎥 Cinematic & FPV</strong></td>
                <td>Action Cam / 4K Rig</td>
                <td>8 – 22 Mins</td>
                <td>2 – 10 km HD Link</td>
                <td>Close-proximity flythrough, mountain cinematography</td>
              </tr>
              <tr>
                <td><strong>🏭 Industrial Inspection</strong></td>
                <td>1.5 – 8 kg Sensor Pod</td>
                <td>75 Mins – 4 Hours</td>
                <td>20 – 100+ km</td>
                <td>Powerlines, solar farms, cadastral GIS mapping</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* Interactive Fleet Specs & Real Ground Proof Showcase */}
      <InteractiveFleetShowcase />
    </StandardPage>
  );
}
