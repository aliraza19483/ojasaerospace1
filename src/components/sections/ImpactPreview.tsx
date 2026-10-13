import React from "react";
import technologyImage from "../../assets/technology-impact.jpg";
import { Question } from "../ui/Question";
import { Eyebrow } from "../ui/Eyebrow";

export function ImpactPreview() {
  const metrics = [
    ["500K+", "ACRES MONITORED"],
    ["150K+", "FARMS IMPACTED"],
    ["25K+", "DRONE OPERATIONS"],
    ["28+", "STATES"],
    ["500+", "DISTRICTS"],
    ["200+", "PARTNERS"],
  ];

  return (
    <section id="impact" className="section impact">
      <div
        className="impactVisual"
        style={{ backgroundImage: `url(${technologyImage})` }}
      />
      <div className="impactHead">
        <div>
          <Question>What happens when intelligence reaches the field?</Question>
          <Eyebrow>IMPACT</Eyebrow>
          <h2>
            Built for the <em>real world.</em>
          </h2>
        </div>
        <p>
          The system matters because it changes what people can see, understand
          and do.
        </p>
      </div>
      <div className="metricGrid">
        {metrics.map(([value, label], i) => (
          <div className="metric" key={label}>
            <small>0{i + 1}</small>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
