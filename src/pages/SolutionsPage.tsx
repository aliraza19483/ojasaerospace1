import React from "react";
import ecosystemImage from "../assets/ecosystem.jpg";
import { solutions } from "../constants/solutions";
import { navigate, solutionPath } from "../utils/navigation";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { Icon } from "../components/ui/Icon";

export function SolutionsPage() {
  return (
    <StandardPage
      question="What problems do we solve?"
      title={
        <>
          Intelligence <em>for the real world.</em>
        </>
      }
      description="Six solution domains connect OJAS services and technology to concrete problems and outcomes."
      image={ecosystemImage}
    >
      <SectionBlock
        eyebrow="Six solution domains"
        title={
          <>
            Problem → intelligence → <em>action.</em>
          </>
        }
      >
        <p className="wideLead">
          Each solution starts with a real-world requirement and connects
          observation, analysis, operational capability and relevant technology
          around the desired outcome.
        </p>
        <div className="solutionDetailGrid">
          {solutions.map((s, i) => (
            <article
              key={s.title}
              onClick={() => navigate(solutionPath(s.title))}
            >
              <div className="cardMedia">
                {s.image ? <img src={s.image} alt={s.title} loading="lazy" decoding="async" /> : <Icon name="route" />}
              </div>
              <small>0{i + 1}</small>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <button>
                EXPLORE <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
