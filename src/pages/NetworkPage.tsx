import React, { useState } from "react";
import ecosystemImage from "../assets/ecosystem.webp";
import {
  networkStructure,
  sampleFacilities,
  networkAdvantages,
  whoWeServe,
} from "../constants/network";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { Icon } from "../components/ui/Icon";
import { triggerInquiry } from "../components/ui/InquiryModal";

export function NetworkPage() {
  const [activePersona, setActivePersona] = useState(whoWeServe[0].id);
  const currentPersona = whoWeServe.find((p) => p.id === activePersona) || whoWeServe[0];

  return (
    <StandardPage
      question="How is the network organized?"
      title={
        <>
          A two-level network. <em>Local access across India.</em>
        </>
      }
      description="OJAS Aerospace's network model connects Dehradun Headquarters with district-level Drone Ports and block-level Drone Centres—bringing drone technology, repair, training, and digital intelligence directly to operating areas."
      image={ecosystemImage}
    >
      {/* Network Structure Hierarchy */}
      <SectionBlock
        eyebrow="The Two-Level Network Hierarchy"
        title={
          <>
            Headquarters → <em>Drone Ports → Drone Centres</em>
          </>
        }
      >
        <p className="wideLead">
          Rather than operating solely out of a distant metropolitan office, OJAS distributes technical capability, spare parts, and certified pilots across districts and blocks.
        </p>

        <div className="networkHierarchyGrid">
          {networkStructure.map((tier, idx) => (
            <article key={tier.name} className="networkTierCard">
              <div className="tierCardHead">
                <div className="iconBubble">
                  <Icon name={tier.icon} />
                </div>
                <small>TIER 0{idx + 1} · {tier.level}</small>
                <h3>{tier.name}</h3>
                <span className="tierRoleBadge">{tier.role}</span>
              </div>
              <p>{tier.description}</p>
              <div className="tierCapabilities">
                <small>CORE RESPONSIBILITIES</small>
                <ul>
                  {tier.capabilities.map((cap, i) => (
                    <li key={i}>
                      <span className="check">✓</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* Why the Network Model Matters */}
      <SectionBlock
        eyebrow="Strategic Rationale"
        title={
          <>
            Why the network model <em>makes the difference.</em>
          </>
        }
      >
        <div className="networkAdvantagesGrid">
          {networkAdvantages.map((adv) => (
            <div key={adv.title} className="networkAdvantageCard">
              <div className="advIcon">
                <Icon name={adv.icon} />
              </div>
              <small>{adv.tagline}</small>
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Verified Facility Directory with Status Transparency */}
      <SectionBlock
        eyebrow="Network Presence & Facility Directory"
        title={
          <>
            Verified nodes across <em>Uttarakhand & Uttar Pradesh.</em>
          </>
        }
      >
        <div className="facilityDirectoryCallout">
          <small>TRANSPARENCY POLICY</small>
          <p>
            In accordance with company guidelines, facilities are published with verified district, block, address, and confirmed operational status. Facilities are marked as Operational only when verified on the ground.
          </p>
        </div>

        <div className="facilitiesTableWrapper">
          <table className="facilitiesTable">
            <thead>
              <tr>
                <th>Facility Name</th>
                <th>Type</th>
                <th>District / Block</th>
                <th>Status</th>
                <th>Available Services</th>
                <th>Contact / Location</th>
              </tr>
            </thead>
            <tbody>
              {sampleFacilities.map((fac) => (
                <tr key={fac.name}>
                  <td>
                    <strong>{fac.name}</strong>
                  </td>
                  <td>
                    <span className={`facilityTypeTag tag-${fac.type.toLowerCase().replace(/\s+/g, "")}`}>
                      {fac.type}
                    </span>
                  </td>
                  <td>
                    {fac.district}, {fac.state}
                    {fac.block && <small><br />Block: {fac.block}</small>}
                  </td>
                  <td>
                    <span
                      className={`statusTag ${
                        fac.status === "Verified Operational"
                          ? "statusLive"
                          : fac.status === "Pilot Deployment"
                          ? "statusPilot"
                          : "statusPlanned"
                      }`}
                    >
                      {fac.status}
                    </span>
                  </td>
                  <td>
                    <ul className="miniSvcList">
                      {fac.services.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <span className="facContact">{fac.contact}</span>
                    <small className="facAddress"><br />{fac.address}</small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* On-the-Ground Distributed Network Validation */}
      <SectionBlock
        eyebrow="Ground Verification Proof"
        title={
          <>
            Distributed operations. <em>Rooted in local communities.</em>
          </>
        }
      >
        <p className="wideLead">
          Our district Drone Ports and block Drone Centres maintain direct daily touchpoints with agricultural cooperatives, rural village heads, and aerospace maintenance benches.
        </p>

        <div className="networkFieldGallery">
          <div className="networkFieldCard">
            <div className="networkFieldImgWrapper">
              <img
                src="/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.02%20AM.jpeg"
                alt="Community outreach with rural farmers and OJAS Aerospace & HAL initiative banner"
                loading="lazy"
                decoding="async"
              />
              <span className="networkFieldBadge">BLOCK DRONE CENTRE PRESENCE</span>
            </div>
            <div className="networkFieldInfo">
              <small>COMMUNITY OUTREACH & ADOPTION</small>
              <h4>Grassroots Farmer Interaction & Joint Initiative</h4>
              <p>
                Field demonstration cohort organized under the joint initiative by OJAS Aerospace and HAL, educating local sugarcane and crop farmers on drone spraying economics and booking workflows.
              </p>
            </div>
          </div>

          <div className="networkFieldCard">
            <div className="networkFieldImgWrapper">
              <img
                src="/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.50%20AM%20(1).jpeg"
                alt="Central Engineering Lab & Propulsion Rig in Dehradun"
                loading="lazy"
                decoding="async"
              />
              <span className="networkFieldBadge">TIER 1 DEHRADUN HQ</span>
            </div>
            <div className="networkFieldInfo">
              <small>CENTRAL AEROSPACE FACILITY</small>
              <h4>Propulsion Diagnostics & Rapid Spares Hub</h4>
              <p>
                Headquarters engineering bay equipped with motor dynamometer rigs and avionics diagnostic suites, supplying calibrated replacement parts across district Drone Ports.
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Who We Serve Personas */}
      <SectionBlock
        eyebrow="Target Ecosystem"
        title={
          <>
            Who we serve across <em>the distributed network.</em>
          </>
        }
      >
        <div className="personaTabsBar" role="tablist">
          {whoWeServe.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={activePersona === p.id}
              className={`personaTabBtn ${activePersona === p.id ? "active" : ""}`}
              onClick={() => setActivePersona(p.id)}
            >
              <Icon name={p.icon} />
              <span>{p.title}</span>
            </button>
          ))}
        </div>

        <div className="activePersonaCard">
          <div className="personaCardMain">
            <small>{currentPersona.tagline}</small>
            <h3>{currentPersona.title}</h3>
            <p className="wideLead">{currentPersona.description}</p>
            <div className="personaBenefits">
              <small>KEY DELIVERABLES & IMPACT</small>
              <ul>
                {currentPersona.benefits.map((b, i) => (
                  <li key={i}>
                    <span className="dot">✦</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="btn goldBtn"
              onClick={() =>
                triggerInquiry({
                  title: `${currentPersona.title} Inquiry`,
                  service: currentPersona.title,
                })
              }
            >
              {currentPersona.cta} <b>↗</b>
            </button>
          </div>
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
