import React from "react";
import aboutImage from "../../assets/about.jpg";
import { navigate } from "../../utils/navigation";
import { Question } from "../ui/Question";
import { Eyebrow } from "../ui/Eyebrow";

export function AboutPreview() {
  return (
    <section id="about" className="section about">
      <div
        className="aboutImage"
        style={{ backgroundImage: `url(${aboutImage})` }}
      />
      <div className="aboutCopy">
        <Question>What drives OJAS?</Question>
        <Eyebrow accent="purple">ABOUT OJAS</Eyebrow>
        <h2>
          Engineering <em>what comes next.</em>
        </h2>
        <p>
          OJAS brings aerospace engineering, intelligent systems and
          infrastructure thinking together to build, deploy and evolve
          technologies for the physical world.
        </p>
        <button className="textBtn" onClick={() => navigate("/about")}>
          DISCOVER OJAS <span>→</span>
        </button>
      </div>
    </section>
  );
}
