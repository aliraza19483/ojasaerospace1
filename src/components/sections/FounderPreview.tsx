import React from "react";
import deveshJha from "../../assets/team/devesh-jha.jpg";
import { Question } from "../ui/Question";
import { Eyebrow } from "../ui/Eyebrow";

function navigate(path: string) {
  if (path === window.location.pathname) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function FounderPreview() {
  return (
    <section id="founder" className="section founderPreviewSection">
      <div className="founderPreviewInner">
        {/* Left — Portrait */}
        <div className="founderPreviewImgWrap">
          <img
            src={deveshJha}
            alt="Devesh Jha — Founder & CEO, OJAS Aerospace"
            loading="lazy"
            decoding="async"
            className="founderPreviewImg"
          />
          <div className="founderPreviewImgOverlay">
            <span className="founderPreviewImgBadge">FOUNDER &amp; CEO</span>
          </div>
          {/* Decorative ring */}
          <div className="founderPreviewRing" aria-hidden="true" />
        </div>

        {/* Right — Content */}
        <div className="founderPreviewContent">
          <Question>Who built OJAS from the ground up?</Question>
          <Eyebrow accent="gold">THE FOUNDER</Eyebrow>

          <h2 className="founderPreviewName">
            Devesh <em>Jha.</em>
          </h2>

          <p className="founderPreviewSub">
            Founder &amp; Chief Executive Officer, OJAS Aerospace
          </p>

          <p className="founderPreviewBio">
            Devesh Jha founded OJAS Aerospace with one conviction — that drone technology must serve real people, real fields, and real missions. Rooted in civil aviation discipline and aerospace engineering, he has built India's most integrated drone operations network: from Dehradun's R&amp;D lab to 15+ states, 500+ certified pilots, and the MILU AI intelligence platform.
          </p>

          <div className="founderPreviewStats">
            <div className="founderPreviewStat">
              <strong>2021</strong>
              <span>Founded</span>
            </div>
            <div className="founderPreviewStat">
              <strong>15+</strong>
              <span>States Active</span>
            </div>
            <div className="founderPreviewStat">
              <strong>500+</strong>
              <span>Pilots Certified</span>
            </div>
            <div className="founderPreviewStat">
              <strong>DGCA</strong>
              <span>RPTO Approved</span>
            </div>
          </div>

          <blockquote className="founderPreviewQuote">
            "We engineer for Indian terrain with zero compromise on safety."
          </blockquote>

          <button
            className="founderPreviewCta"
            onClick={() => navigate("/about")}
          >
            DISCOVER OUR STORY <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
