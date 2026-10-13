import React, { useEffect, useRef } from "react";
import { Eyebrow } from "../ui/Eyebrow";
import heroVideo from "../../assets/main_4.mp4";
import { navigate } from "../../utils/navigation";

export function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <section id="home" className="cinematic heroVideoSection">
      <video
        ref={videoRef}
        src={heroVideo}
        className="heroBgVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />


      <div className="particleCopy">
        <Eyebrow>OJAS AEROSPACE</Eyebrow>

        <h1>
          Engineering the Future.
          <br />
          <em>Connecting Intelligence.</em>
        </h1>

        <p>
          Making drone technology, dependable local service access, and the MILU AI Agro ecosystem accessible across India.
        </p>

        <div className="actions">
          <button
            className="btn goldBtn"
            onClick={() => navigate("/categories")}
          >
            ◉ &nbsp; 4 DRONE CATEGORIES <b>↗</b>
          </button>
          <button
            className="btn outlineBtn"
            onClick={() => navigate("/services")}
          >
            4 CORE SERVICES <b>→</b>
          </button>
        </div>
      </div>

      <div className="heroTelemetryBadge">
        <small>OPERATIONAL NETWORK</small>
        <b>DEHRADUN HQ · DISTRICT DRONE PORTS</b>
        <span>DISTRIBUTED FIELD ACCESS</span>
      </div>
    </section>
  );
}
