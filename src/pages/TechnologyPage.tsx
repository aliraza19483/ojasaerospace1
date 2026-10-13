import React from "react";
import technologyImage from "../assets/technology-impact.jpg";
import { techGroups } from "../constants/technology";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { IconCards } from "../components/ui/IconCards";
import { DetailList } from "../components/ui/DetailList";
import { Icon } from "../components/ui/Icon";

export function TechnologyPage() {
  return (
    <StandardPage
      question="How do we make it possible?"
      title={
        <>
          Technology <em>built for the field.</em>
        </>
      }
      description="A coherent working stack across sensing, geospatial intelligence, AI, agriculture, autonomy and digital infrastructure."
      image={technologyImage}
    >
      <SectionBlock
        eyebrow="Technology domains"
        title={
          <>
            A stack designed to <em>connect.</em>
          </>
        }
      >
        <div className="techDomainGrid">
          {techGroups.map((g, i) => (
            <article key={g.title}>
              <div className="iconBubble">
                <Icon name={g.icon} />
              </div>
              <small>0{i + 1}</small>
              <h3>{g.title}</h3>
              <p>
                Working technologies and integrations that support this
                capability domain.
              </p>
              <DetailList items={g.items} />
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Applied R&D"
        title={
          <>
            Research → prototype → deploy → <em>feedback.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Research",
              text: "Explore emerging technologies and identify useful applications.",
              icon: "brain",
            },
            {
              title: "Prototype",
              text: "Build and test systems around real requirements.",
              icon: "cpu",
            },
            {
              title: "Deploy",
              text: "Move useful capability into operational environments.",
              icon: "drone",
            },
            {
              title: "Feedback",
              text: "Use field signals to improve systems and guide future R&D.",
              icon: "network",
            },
          ]}
        />
      </SectionBlock>
    </StandardPage>
  );
}
