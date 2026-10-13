import React from "react";
import { DetailHero } from "./DetailHero";

export function StandardPage({
  question,
  title,
  description,
  image,
  children,
}: {
  question: string;
  title: React.ReactNode;
  description: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <DetailHero
        question={question}
        title={title}
        description={description}
        image={image}
      />
      <div className="detailMain">{children}</div>
    </>
  );
}
