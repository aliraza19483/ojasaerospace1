import React from "react";
import { pageLabel } from "../../utils/navigation";
import { Question } from "./Question";
import { Eyebrow } from "./Eyebrow";
import { Breadcrumbs, CrumbItem } from "./Breadcrumbs";

export function DetailHero({
  question,
  title,
  description,
  image,
  label,
  breadcrumbItems,
}: {
  question: string;
  title: React.ReactNode;
  description: string;
  image?: string;
  label?: string;
  breadcrumbItems?: CrumbItem[];
}) {
  return (
    <section
      className="detailHero"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(90deg,rgba(3,2,8,.94),rgba(3,2,8,.55),rgba(3,2,8,.18)),url(${image})`,
            }
          : {}
      }
    >
      <div>
        <Breadcrumbs items={breadcrumbItems} />
        <Question>{question}</Question>
        <Eyebrow>{label || pageLabel()}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
