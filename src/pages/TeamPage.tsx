import React, { useState } from "react";
import teamDroneLab from "../assets/team-drone-lab.jpg";
import teamFieldDeployment from "../assets/team-field-deployment.jpg";
import { teamSeed } from "../constants/team";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";

export function TeamPage() {
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
          {shown.map((member, i) =>
            member.category === "FOUNDER" ? (
              <article key={member.name} className="teamCard founderCard">
                <div className="founderCardPortrait">
                  <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
                  <div className="founderCardImgBadge">FOUNDER &amp; CEO</div>
                </div>
                <div className="founderCardBody">
                  <small className="founderCardNum">{String(i + 1).padStart(2, "0")}</small>
                  <h3>{member.name}</h3>
                  <p className="founderCardRole">{member.role}</p>
                  {member.credential && (
                    <span className="founderCardCredential">{member.credential}</span>
                  )}
                  <p className="founderCardBio">
                    Devesh Jha founded OJAS Aerospace with a singular mission — to make drone technology practically useful and accessible across India. With a background rooted in civil aviation rigor and aerospace engineering discipline, he has built a multi-state operational network spanning agriculture, logistics, and defence-support sectors. His vision drives OJAS's Drone Port network, MILU AI platform, and farmer-first deployment philosophy.
                  </p>
                  <div className="founderCardStats">
                    <div className="founderCardStat">
                      <strong>2021</strong><span>Founded</span>
                    </div>
                    <div className="founderCardStat">
                      <strong>15+</strong><span>States</span>
                    </div>
                    <div className="founderCardStat">
                      <strong>500+</strong><span>Pilots Trained</span>
                    </div>
                    <div className="founderCardStat">
                      <strong>DGCA</strong><span>RPTO Certified</span>
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              <article key={member.name} className="teamCard">
                <div className="teamPortrait">
                  <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
                </div>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <h3>{member.name}</h3>
                <p className="teamRole">{member.role}</p>
                <span>{member.department}</span>
              </article>
            )
          )}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
