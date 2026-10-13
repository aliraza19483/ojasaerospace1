import React from "react";
import { Question } from "./Question";

export function SectionBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="detailBlock">
      <div className="detailBlockHead">
        <Question>{eyebrow}</Question>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
