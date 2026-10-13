import React from "react";
import { Item } from "../types";
import { solutionInfo } from "../constants/solutions";
import { navigate, servicePath } from "../utils/navigation";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { DetailList } from "../components/ui/DetailList";
import { Icon } from "../components/ui/Icon";

export function SolutionPage({ s }: { s: Item }) {
  const d = solutionInfo[s.title];
  if (!d) return null;

  return (
    <StandardPage
      question={`Solution / ${s.title}`}
      title={
        <>
          {s.title}
          <br />
          <em>{d.heading}</em>
        </>
      }
      description={d.intro}
      image={s.image}
    >
      <SectionBlock
        eyebrow="The operating model"
        title={
          <>
            Observe. Understand. <em>Act.</em>
          </>
        }
      >
        <div className="solutionFlow">
          <div>
            {[
              [
                "Observe",
                "Capture the right information from the environment.",
                "eye",
              ],
              [
                "Understand",
                "Interpret observations with spatial, operational and intelligent systems.",
                "brain",
              ],
              [
                "Act",
                "Connect insight to people, platforms and systems that can respond.",
                "bolt",
              ],
            ].map(([a, b, ic], i) => (
              <React.Fragment key={a}>
                <article>
                  <div className="iconBubble">
                    <Icon name={ic} />
                  </div>
                  <small>0{i + 1}</small>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </article>
                {i < 2 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Capabilities"
        title={
          <>
            What the solution can <em>enable.</em>
          </>
        }
      >
        <DetailList items={d.cap} />
      </SectionBlock>
      <SectionBlock
        eyebrow="Connected OJAS stack"
        title={
          <>
            Where it connects across the <em>system.</em>
          </>
        }
      >
        <div className="relationshipGrid">
          <div>
            <small>SECTORS</small>
            {d.sectors.map((x) => (
              <b key={x}>{x}</b>
            ))}
          </div>
          <div>
            <small>SERVICES</small>
            {d.services.map((x) => (
              <button key={x} onClick={() => navigate(servicePath(x))}>
                {x}
                <span>↗</span>
              </button>
            ))}
          </div>
          <div>
            <small>TECHNOLOGY</small>
            {d.tech.map((x) => (
              <b key={x}>{x}</b>
            ))}
          </div>
        </div>
      </SectionBlock>
      <button className="largeCta" onClick={() => navigate("/contact")}>
        WORK WITH OJAS →
      </button>
    </StandardPage>
  );
}
