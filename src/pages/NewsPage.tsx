import React, { useState } from "react";
import technologyImage from "../assets/technology-impact.jpg";
import { newsSeed } from "../constants/news";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";

export function NewsPage() {
  const [filter, setFilter] = useState("All");
  const filters = [
    "All",
    "News",
    "Field Stories",
    "Media",
    "Technology",
    "Events",
  ];
  const shown =
    filter === "All" ? newsSeed : newsSeed.filter((x) => x.category === filter);

  return (
    <StandardPage
      question="What is happening in the field?"
      title={
        <>
          News, stories & <em>media.</em>
        </>
      }
      description="A structured editorial layer for company developments, field stories, technology updates, events and visual media."
      image={technologyImage}
    >
      <SectionBlock
        eyebrow="Latest"
        title={
          <>
            The OJAS <em>story in motion.</em>
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
        <div className="newsGrid">
          {shown.map((n) => (
            <article key={`${n.category}-${n.title}`}>
              <div
                className="newsImage"
                style={{ backgroundImage: `url(${n.image})` }}
              />
              <div className="newsMeta">
                <span>{n.category}</span>
                <small>{n.date}</small>
              </div>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
              <button>
                READ STORY <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Press & Media Inquiries"
        title={
          <>
            Coverage, field visits & <em>media resources.</em>
          </>
        }
      >
        <p className="wideLead">
          Journalists, industry analysts, and research partners interested in live drone flight demonstrations, high-altitude operational footage, or leadership commentary can reach our communications team directly at <a href="mailto:info@ojasspace.com" style={{ color: "var(--gold2)", textDecoration: "underline" }}>info@ojasspace.com</a>.
        </p>
      </SectionBlock>
    </StandardPage>
  );
}
