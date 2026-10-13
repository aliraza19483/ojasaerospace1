import React from "react";
import careersImage from "../../assets/careers.jpg";
import { navigate } from "../../utils/navigation";
import { Question } from "../ui/Question";
import { Eyebrow } from "../ui/Eyebrow";

export function CareersPreview() {
  return (
    <section id="careers" className="section careers">
      <div className="careersCopy">
        <Question>Who wants to build it with us?</Question>
        <Eyebrow>CAREERS</Eyebrow>
        <h2>
          Work where <em>systems meet reality.</em>
        </h2>
        <p>
          Join a team building technology for the sky, the field and everything
          connected between them.
        </p>
        <button className="btn goldBtn" onClick={() => navigate("/careers")}>
          EXPLORE CAREERS <b>→</b>
        </button>
      </div>
      <div
        className="careersImage"
        style={{ backgroundImage: `url(${careersImage})` }}
      />
    </section>
  );
}
