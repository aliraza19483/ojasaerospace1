import React from "react";
import aboutImage from "../assets/about.jpg";
import technologyImage from "../assets/technology-impact.jpg";
import { serviceGroups } from "../constants/services";
import { navigate } from "../utils/navigation";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { IconCards } from "../components/ui/IconCards";
import { DetailList } from "../components/ui/DetailList";

export function ServicePage({ name }: { name: string }) {
  const group = serviceGroups.find((g) => g.items.includes(name));
  const category = group?.title || "Drone & Field Operations";
  const desc = `${name} is part of OJAS ${category}, connecting a practical customer requirement with planning, capture, processing, analysis and delivery.`;

  return (
    <StandardPage
      question={`Service / ${name}`}
      title={<>{name}</>}
      description={desc}
      image={
        group?.title.includes("Agriculture") ? aboutImage : technologyImage
      }
    >
      <SectionBlock
        eyebrow="What is it?"
        title={
          <>
            A service built around the <em>requirement.</em>
          </>
        }
      >
        <p className="wideLead">
          The service model starts with the customer's task and defines the
          right mission, information, systems and delivery format around it.
        </p>
      </SectionBlock>
      <SectionBlock
        eyebrow="How OJAS works"
        title={
          <>
            Plan → capture → process → <em>deliver.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Plan",
              text: "Define the mission, location, constraints, payload and desired output.",
              icon: "target",
            },
            {
              title: "Capture",
              text: "Collect relevant aerial, spatial, visual or field information.",
              icon: "drone",
            },
            {
              title: "Process",
              text: "Turn raw observations into structured, usable information.",
              icon: "cpu",
            },
            {
              title: "Analyse",
              text: "Apply relevant intelligence and domain context.",
              icon: "brain",
            },
            {
              title: "Deliver",
              text: "Return the agreed output, report, insight or operational result.",
              icon: "bolt",
            },
          ]}
        />
      </SectionBlock>
      <SectionBlock
        eyebrow="Service inventory"
        title={
          <>
            Related capabilities in <em>{category}.</em>
          </>
        }
      >
        <DetailList items={group?.items || [name]} />
      </SectionBlock>
      <SectionBlock
        eyebrow="Connected system"
        title={
          <>
            Relevant sectors and <em>technology.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Sectors",
              text: "Agriculture, infrastructure, security, logistics, geospatial and energy contexts can connect depending on the requirement.",
              icon: "globe",
            },
            {
              title: "Technology",
              text: "UAVs, sensing, geospatial systems, AI, autonomy and digital infrastructure can be combined as needed.",
              icon: "cpu",
            },
            {
              title: "MILU AI",
              text: "Where data and intelligence systems are applicable, service signals can feed the wider OJAS intelligence loop.",
              icon: "brain",
            },
          ]}
        />
      </SectionBlock>
      <button className="largeCta" onClick={() => navigate("/contact")}>
        REQUEST THIS SERVICE →
      </button>
    </StandardPage>
  );
}
