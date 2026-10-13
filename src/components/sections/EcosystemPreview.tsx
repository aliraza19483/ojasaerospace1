import React from "react";
import ecosystemImage from "../../assets/ecosystem.jpg";
import { navigate } from "../../utils/navigation";
import { Question } from "../ui/Question";
import { Eyebrow } from "../ui/Eyebrow";

export function EcosystemPreview() {
  return (
    <section id="ecosystem" className="section ecosystem">
      <div
        className="ecoRibbons"
        style={{ backgroundImage: `url(${ecosystemImage})` }}
      />
      <div className="ecoCopy">
        <Question>Where does the network come alive?</Question>
        <Eyebrow>NETWORK</Eyebrow>
        <h2>
          From systems <em>to a living network.</em>
        </h2>
        <p>
          Platforms, people, infrastructure and intelligence working together
          across the environments where decisions matter.
        </p>
        <button className="btn goldBtn" onClick={() => navigate("/network")}>
          EXPLORE THE NETWORK <b>→</b>
        </button>
      </div>
    </section>
  );
}
