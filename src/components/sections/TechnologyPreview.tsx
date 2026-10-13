import React from "react";
import technologyImage from "../../assets/technology-impact.jpg";
import { techGroups } from "../../constants/technology";
import { navigate } from "../../utils/navigation";
import { Question } from "../ui/Question";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";

export function TechnologyPreview() {
  return (
    <section id="technology" className="section technology">
      <div
        className="techBackdrop"
        style={{ backgroundImage: `url(${technologyImage})` }}
      />
      <div className="techCopy">
        <Question>How do we make it possible?</Question>
        <Eyebrow accent="purple">TECHNOLOGY</Eyebrow>
        <h2>
          Technology <em>built for the field.</em>
        </h2>
        <p>
          We develop and integrate aerospace platforms, sensing systems, AI,
          autonomy and field infrastructure — while continuously researching
          what comes next.
        </p>
        <button
          className="btn purpleBtn"
          onClick={() => navigate("/technology")}
        >
          EXPLORE TECHNOLOGY <b>→</b>
        </button>
      </div>
      <div className="techDiagram">
        {techGroups.slice(0, 3).map((g, i) => (
          <div className="techGroup" key={g.title}>
            <div className="techGroupHead">
              <small>0{i + 1}</small>
              <b>{g.title}</b>
            </div>
            <div className="techMiniGrid">
              {g.items.slice(0, 4).map((x) => (
                <div className="techMiniItem" key={x}>
                  <Icon name={g.icon} />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
