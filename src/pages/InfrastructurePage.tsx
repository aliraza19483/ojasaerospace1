import React from "react";
import ecosystemImage from "../assets/ecosystem.webp";
import { networkStructure } from "../constants/network";
import { navigate } from "../utils/navigation";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { IconCards } from "../components/ui/IconCards";
import { Icon } from "../components/ui/Icon";

export function InfrastructurePage() {
  return (
    <StandardPage
      question="Where does the network operate?"
      title={
        <>
          Distributed infrastructure. <em>Local field capability.</em>
        </>
      }
      description="Distributed network infrastructure that brings drone equipment, maintenance workshops, trained operators, and connected intelligence closer to where work happens."
      image={ecosystemImage}
    >
      <SectionBlock
        eyebrow="The Two-Level Network Hierarchy"
        title={
          <>
            Headquarters → <em>Drone Ports → Drone Centres</em>
          </>
        }
      >
        <div className="networkDetailStack">
          {networkStructure.map((tier, i) => (
            <article key={tier.name}>
              <div className="iconBubble">
                <Icon name={tier.icon} />
              </div>
              <small>0{i + 1} · {tier.tier}</small>
              <h2>{tier.name}</h2>
              <p>{tier.description}</p>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="What infrastructure enables"
        title={
          <>
            Closer to the <em>operation.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Drone operations",
              text: "Operational environments for deployment, mission preparation, battery charging, and field support.",
              icon: "drone",
            },
            {
              title: "Data & connectivity",
              text: "Connected infrastructure supports flight telemetry, sensor data ingestion, and MILU AI synchronization.",
              icon: "signal",
            },
            {
              title: "Maintenance & spares",
              text: "Certified diagnostic workshops at district Drone Ports ensure rapid turnaround without weeks of transit downtime.",
              icon: "wrench",
            },
            {
              title: "Service delivery",
              text: "Block Drone Centres bring spray booking, equipment rental, and farmer advisory closest to the community.",
              icon: "bolt",
            },
          ]}
        />
      </SectionBlock>
      <button className="largeCta" onClick={() => navigate("/network")}>
        EXPLORE THE NETWORK DIRECTORY →
      </button>
    </StandardPage>
  );
}
