import React, { useState } from "react";
import miluImage from "../assets/milu-ai.webp";
import {
  miluEcosystemFeatures,
  dataPlatformSteps,
} from "../constants/milu";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { Icon } from "../components/ui/Icon";
import { triggerInquiry } from "../components/ui/InquiryModal";

export function MiluPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredFeatures =
    filter === "all"
      ? miluEcosystemFeatures
      : miluEcosystemFeatures.filter((f) => f.status.includes(filter));

  return (
    <StandardPage
      question="How does aerial data become field intelligence?"
      title={
        <>
          MILU AI. <em>Intelligence connected to real operations.</em>
        </>
      }
      description="MILU AI connects drone operations, local network infrastructure, and an Agro AI Ecosystem—transforming raw aerial telemetry into geo-referenced, actionable decisions for farmers, operational teams, and enterprise mills."
      image={miluImage}
    >


      {/* Feature Transparency System & Agro AI Ecosystem Grid */}
      <SectionBlock
        eyebrow="Agro AI Ecosystem Capabilities"
        title={
          <>
            Seven capabilities. <em>Transparent maturity stages.</em>
          </>
        }
      >
        <p className="wideLead">
          In adherence to verification guidelines, website copy distinguishes between currently available features, active pilot-stage validations, and planned roadmap capabilities.
        </p>

        {/* Status Filter Tabs */}
        <div className="miluFilterTabs" role="tablist">
          {[
            { id: "all", label: "All Capabilities" },
            { id: "Currently Live", label: "Currently Live" },
            { id: "Pilot Stage", label: "Pilot Stage (Hardoi)" },
            { id: "Under Development", label: "Roadmap / In Development" },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={filter === tab.id}
              className={`miluFilterBtn ${filter === tab.id ? "active" : ""}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="miluFeatureGrid">
          {filteredFeatures.map((feat) => (
            <article key={feat.id} className="miluFeatureCard">
              <div className="featureCardTop">
                <div className="iconBubble">
                  <Icon name={feat.icon} />
                </div>
                <span className={`maturityBadge badge-${feat.statusColor}`}>
                  {feat.status}
                </span>
              </div>

              <small>{feat.tagline}</small>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>

              <div className="featureSubDetails">
                <ul>
                  {feat.details.map((d, i) => (
                    <li key={i}>
                      <span className="dot">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* End-to-End Technology & Data Flow */}
      <SectionBlock
        eyebrow="Data Architecture"
        title={
          <>
            From field activity to <em>useful information.</em>
          </>
        }
      >
        <p className="wideLead">
          The MILU platform manages a seamless data flow starting from drone flight sensors in the field, progressing through analytics pipelines, and delivering outputs via mobile alerts, dashboards, and enterprise APIs.
        </p>

        <div className="dataPlatformFlowGrid">
          {dataPlatformSteps.map((step) => (
            <div key={step.step} className="dataFlowStepCard">
              <div className="flowStepHead">
                <span className="flowStepNum">{step.step}</span>
                <span className="flowStepPhase">{step.phase}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Sample Real-World Decision Support Output */}
        <div className="miluSampleAlertCard">
          <div className="sampleAlertHead">
            <div className="sampleAlertBadge">
              <span className="liveDot" />
              <span>MILU AI TELEMETRY DISPATCH · SAMPLE FARMER ADVISORY</span>
            </div>
            <span className="sampleAlertLoc">HARDOI SUGARCANE COMMAND BELT // PLOT #14</span>
          </div>
          <div className="sampleAlertContent">
            <div className="sampleAlertMetric">
              <small>CANOPY HEALTH INDEX (NDVI)</small>
              <b>0.74 <span style={{ color: "#10b981", fontSize: 13 }}>● Optimal Density</span></b>
              <span>Multispectral drone sensor pass at 45m AGL</span>
            </div>
            <div className="sampleAlertMetric">
              <small>TARGETED ANOMALY DIAGNOSIS</small>
              <b>Early Stage Red Rot Risk: <span style={{ color: "var(--gold2)", fontSize: 13 }}>3.2% East Sector</span></b>
              <span>Early detection prevents cross-plot contagion</span>
            </div>
            <div className="sampleAlertMetric">
              <small>AUTOMATED DISPATCH ACTION</small>
              <b>Prescription Spray Waypoint Transmitted</b>
              <span>Assigned to block Drone Centre pilot for morning sortie</span>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Data Protection, Governance & Enterprise Security */}
      <SectionBlock
        eyebrow="Enterprise Trust & Data Governance"
        title={
          <>
            Security, privacy, and <em>governance by design.</em>
          </>
        }
      >
        <div className="dataTrustGrid">
          <div className="trustCard">
            <Icon name="shield" />
            <h4>Strict Data Protection</h4>
            <p>Role-based access controls, encrypted telemetry in transit, and dedicated tenant isolation for enterprise and mill partners.</p>
          </div>
          <div className="trustCard">
            <Icon name="cpu" />
            <h4>API Integration Support</h4>
            <p>Secure REST APIs enable seamless data synchronization with external farm management and ERP systems where technically supported.</p>
          </div>
          <div className="trustCard">
            <Icon name="target" />
            <h4>Verified Accuracy Protocols</h4>
            <p>AI models for disease and yield projection undergo ongoing ground-truthing and validation against verified field records before full commercial release.</p>
          </div>
        </div>

        <div className="miluCtaBlock">
          <h3>Request a Technical Demonstration of MILU AI</h3>
          <p>Explore how MILU AI can support your agricultural operations, sugar mill command area, or industrial fleet.</p>
          <button
            className="btn goldBtn"
            onClick={() =>
              triggerInquiry({
                title: "MILU AI Demonstration Request",
                service: "MILU AI Agro Ecosystem",
              })
            }
          >
            SCHEDULE TECHNICAL DEMO <b>↗</b>
          </button>
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
