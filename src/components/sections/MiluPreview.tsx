import React from "react";
import miluImage from "../../assets/milu-ai.webp";
import { navigate } from "../../utils/navigation";
import { Question } from "../ui/Question";
import { Eyebrow } from "../ui/Eyebrow";

export function MiluPreview() {
  return (
    <section id="milu" className="section milu">
      <div className="miluVisual">
        <div
          className="miluBackdrop"
          style={{ backgroundImage: `url(${miluImage})` }}
        />
        <div className="miluCore">
          <span>MILU</span>
          <small>INTELLIGENCE LAYER</small>
        </div>
      </div>
      <div className="miluCopy">
        <Question>How does information become intelligence?</Question>
        <Eyebrow accent="purple">MILU AI</Eyebrow>
        <h2>
          Intelligence <em>that connects.</em>
        </h2>
        <p>
          MILU brings data, systems and field operations together so
          intelligence can move across the network and inform better decisions.
        </p>
        <div className="miluHierarchy">
          {[
            "MILU AI",
            "MILU AI NETWORK",
            "MILU HUB",
            "MILU CENTRE",
            "MILU STATION",
            "MILU POINT",
          ].map((x, i) => (
            <button
              key={x}
              onClick={() =>
                navigate(
                  x === "MILU AI NETWORK" ? "/milu-ai-network" : "/milu-ai",
                )
              }
            >
              <span>0{i + 1}</span>
              <b>{x}</b>
              <i />
            </button>
          ))}
        </div>
        <button className="textBtn" onClick={() => navigate("/milu-ai")}>
          EXPLORE MILU AI <span>↗</span>
        </button>
      </div>
    </section>
  );
}
