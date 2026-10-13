import React, { useEffect, useState } from "react";
import { solutions } from "../../constants/solutions";
import { navigate, solutionPath } from "../../utils/navigation";
import { SectionIntro } from "../ui/SectionIntro";

export function SolutionsPreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % solutions.length),
      4300,
    );
    return () => clearInterval(t);
  }, []);

  const s = solutions[index];

  return (
    <section id="solutions" className="section solutions">
      <SectionIntro
        question="What problems do we solve?"
        label="SOLUTIONS"
        title={
          <>
            Intelligence <em>for the real world.</em>
          </>
        }
        action={
          <button
            className="btn goldBtn solutionsHeaderCta"
            onClick={() => navigate("/solutions")}
          >
            VIEW ALL SOLUTIONS <b>→</b>
          </button>
        }
      />
      <p className="sectionLead">
        OJAS applies aerospace systems, sensing, intelligence and field
        infrastructure to complex problems across the physical world.
      </p>
      <div className="solutionCarousel">
        <button
          className="carouselSide"
          onClick={() =>
            setIndex((index - 1 + solutions.length) % solutions.length)
          }
        >
          ←
        </button>
        <div className="featuredSolution">
          <div
            className="featureImage"
            style={
              s.image
                ? {
                    backgroundImage: `linear-gradient(90deg,rgba(3,2,8,.9),rgba(3,2,8,.22)),url(${s.image})`,
                  }
                : {
                    backgroundImage:
                      "radial-gradient(circle at 65% 45%,rgba(232,184,79,.2),transparent 25%),radial-gradient(circle at 35% 60%,rgba(166,92,255,.16),transparent 28%)",
                  }
            }
          />
          <div className="featureCopy">
            <small>0{index + 1} / SOLUTION</small>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <button
              className="textBtn"
              onClick={() => navigate(solutionPath(s.title))}
            >
              EXPLORE SOLUTION <span>↗</span>
            </button>
          </div>
        </div>
        <button
          className="carouselSide"
          onClick={() => setIndex((index + 1) % solutions.length)}
        >
          →
        </button>
      </div>
      <div className="solutionPeek">
        {solutions.map((x, i) => (
          <button
            key={x.title}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          >
            <b>{x.title}</b>
            <small>{x.text}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
