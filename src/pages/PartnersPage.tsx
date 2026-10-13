import React from "react";
import technologyImage from "../assets/technology-impact.jpg";
import { partnersList } from "../constants/network";
import { navigate } from "../utils/navigation";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { Icon } from "../components/ui/Icon";

export function PartnersPage() {
  return (
    <StandardPage
      question="Who do we build with?"
      title={
        <>
          Building the network <em>together.</em>
        </>
      }
      description="The OJAS ecosystem brings complementary organisations, capabilities and operating environments into a connected network."
      image={technologyImage}
    >
      <SectionBlock
        eyebrow="Partner ecosystem"
        title={
          <>
            Different strengths. <em>Connected outcomes.</em>
          </>
        }
      >
        <p className="wideLead">
          The ecosystem is the relationship model: different kinds of partners
          contribute different strengths to technology, deployment, operations
          and long-term growth.
        </p>
        <div className="partnerEcosystem">
          <div className="ecosystemCore">
            <span>OJAS</span>
            <small>CONNECTED NETWORK</small>
          </div>
          {partnersList.map((p, i) => (
            <article key={p[0]} className={`ecoPartner eco${i + 1}`}>
              <Icon name={p[2]} />
              <div>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <h3>{p[0]}</h3>
                <p>{p[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Partner directory"
        title={
          <>
            Explore ways to <em>connect.</em>
          </>
        }
      >
        <p className="wideLead">
          This directory is intentionally distinct from the ecosystem map: it is
          the practical entry point for future partner profiles, programmes and
          enquiries.
        </p>
        <div className="partnerDirectory">
          {partnersList.map((p, i) => (
            <article key={p[0]}>
              <div className="partnerDirectoryTop">
                <Icon name={p[2]} />
                <small>PARTNER PATH {String(i + 1).padStart(2, "0")}</small>
              </div>
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
              <div className="partnerTags">
                <span>STRATEGIC NETWORK</span>
                <span>REGIONAL ALLIANCE</span>
              </div>
              <button onClick={() => navigate("/contact")}>
                EXPLORE PARTNERSHIP ↗
              </button>
            </article>
          ))}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
