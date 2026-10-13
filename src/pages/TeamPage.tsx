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
          {shown.map((member, i) => (
            <article key={member.name} className="teamCard">
              <div className="teamPortrait">
                <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
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
