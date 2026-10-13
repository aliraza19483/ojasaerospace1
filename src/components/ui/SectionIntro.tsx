import React from "react";
import { Question } from "./Question";
import { Eyebrow } from "./Eyebrow";

export function SectionIntro({
  question,
  title,
  label = "OJAS",
  accent = "gold",
  action,
}: {
  question: string;
  title: React.ReactNode;
  label?: string;
  accent?: "gold" | "purple";
  action?: React.ReactNode;
}) {
  return (
    <div className="sectionIntro">
      <div>
        <Question>{question}</Question>
        <Eyebrow accent={accent}>{label}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {action && <div className="sectionIntroAction">{action}</div>}
    </div>
  );
}
