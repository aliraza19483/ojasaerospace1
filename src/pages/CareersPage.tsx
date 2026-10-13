import React, { useState } from "react";
import careersImage from "../assets/careers.jpg";
import { careerSeed } from "../constants/careers";
import { navigate } from "../utils/navigation";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { IconCards } from "../components/ui/IconCards";

export function CareersPage() {
  const [filter, setFilter] = useState("ALL");
  const filters = [
    "ALL",
    "ENGINEERING",
    "AI & SOFTWARE",
    "AEROSPACE",
    "AGRICULTURE",
    "OPERATIONS",
    "FIELD",
    "BUSINESS",
  ];
  const shown =
    filter === "ALL"
      ? careerSeed
      : careerSeed.filter((_, i) => {
          const map = [
            "AEROSPACE",
            "AI & SOFTWARE",
            "FIELD",
            "BUSINESS",
            "ENGINEERING",
            "AGRICULTURE",
            "OPERATIONS",
            "ENGINEERING",
          ];
          return map[i] === filter;
        });

  return (
    <StandardPage
      question="Who wants to build it with us?"
      title={
        <>
          Work where <em>systems meet reality.</em>
        </>
      }
      description="Careers across aerospace, intelligent systems, software, field technology, geospatial systems and business operations."
      image={careersImage}
    >
      <SectionBlock
        eyebrow="Why OJAS"
        title={
          <>
            Build the next <em>layer.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Cross-disciplinary work",
              text: "Work across aerospace, AI, field systems, operations and business technology.",
              icon: "network",
            },
            {
              title: "Real-world systems",
              text: "Build technology intended to operate beyond the screen.",
              icon: "drone",
            },
            {
              title: "Research to deployment",
              text: "Contribute across experimentation, engineering and field learning.",
              icon: "brain",
            },
          ]}
        />
      </SectionBlock>
      <SectionBlock
        eyebrow="Open positions"
        title={
          <>
            Find where you <em>fit.</em>
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
        <div className="jobGrid">
          {shown.map((x, i) => (
            <article key={x.title}>
              <small>0{i + 1}</small>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <div>
                <span>{x.type || "Full-Time"} · {x.location || "Dehradun Lab"}</span>
                <button onClick={() => navigate("/contact")}>
                  EXPRESS INTEREST ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
