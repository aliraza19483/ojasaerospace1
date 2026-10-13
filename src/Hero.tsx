import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getLaunchFrame } from "./launchMotion";
import { isMotionReduced, onMotionChange } from "./motion";
import "./Hero.css";
import heroVideo from "./assets/main_4.mp4";
import earthNightPoster from "./assets/earth-night.webp";
import rocket from "./assets/ojas-rocket.svg";
import satellite from "./assets/satelight.webp";

const ROTATING_TERMS = [
  "INTELLIGENCE.",
  "AUTONOMY.",
  "AGRO ECOSYSTEMS.",
  "DISTRIBUTED FLEETS.",
  "SOVEREIGN DEFENCE.",
  "REAL OPERATIONS.",
];

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t); };

export default function Hero() {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  const [termIndex, setTermIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setTermIndex((prev) => (prev + 1) % ROTATING_TERMS.length);
        setFlipping(false);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const scene = sceneRef.current;
    if (!track || !stage || !scene) return;
    const sweep = scene.querySelector<SVGSVGElement>(".exhaust-sweep");
    const layers = scene.querySelectorAll<SVGPathElement>(".sweep-layer");
    const revealShape = scene.querySelector<SVGPathElement>(".sweep-reveal-shape");
    const rocketImage = scene.querySelector<HTMLImageElement>(".launch-rocket img");
    if (!sweep || !revealShape || !rocketImage) return;
    let frame = 0;
    const render = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const progress = isMotionReduced() ? 0 : clamp(-rect.top / track.offsetHeight);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const motion = getLaunchFrame(progress, width, height, rocketImage.offsetWidth * 213 / 109, rect.bottom);
      stage.style.setProperty("--copy-opacity", String(1 - ease((progress - 0.04) / 0.16)));
      stage.style.setProperty("--copy-y", `${-progress * 60}px`);
      scene.style.setProperty("--rocket-y", `${motion.rocketY}px`);
      scene.style.setProperty("--rocket-opacity", String(motion.rocketOpacity));
      sweep.setAttribute("viewBox", `0 0 ${width} ${height}`);
      layers.forEach((path, index) => path.setAttribute("d", motion.paths[index]));
      revealShape.setAttribute("d", motion.revealPath);
      scene.style.visibility = progress > 0 && progress < 1 && rect.top <= 1 && !isMotionReduced() ? "visible" : "hidden";

      for (const selector of [".hero-content", ".hero-bottom"]) {
        const content = stage.querySelector<HTMLElement>(selector);
        if (content) content.inert = progress > 0.2;
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };

    const video = backgroundVideoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;
    }

    const playEarthVideo = () => {
      const v = backgroundVideoRef.current;
      if (!v) return;
      v.muted = true;
      v.playbackRate = 1;
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    };

    const handleVideoEnded = () => {
      const v = backgroundVideoRef.current;
      if (v) {
        v.currentTime = 0;
        playEarthVideo();
      }
    };

    const handleVisibility = () => {
      if (!document.hidden) {
        playEarthVideo();
      }
    };

    if (video) {
      video.addEventListener("loadedmetadata", playEarthVideo);
      video.addEventListener("canplay", playEarthVideo);
      video.addEventListener("ended", handleVideoEnded);
    }

    playEarthVideo();
    render();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("pointerdown", playEarthVideo, { passive: true });
    window.addEventListener("keydown", playEarthVideo, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    const offMotion = onMotionChange(schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(stage);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pointerdown", playEarthVideo);
      window.removeEventListener("keydown", playEarthVideo);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (video) {
        video.removeEventListener("loadedmetadata", playEarthVideo);
        video.removeEventListener("canplay", playEarthVideo);
        video.removeEventListener("ended", handleVideoEnded);
      }
      offMotion();
    };
  }, []);

  const openFilm = () => {
    dialogRef.current?.showModal();
    videoRef.current?.play().catch(() => {});
  };

  return <>
    <section className="launch-track" ref={trackRef} id="home" aria-label="Ojas Aerospace introduction">
      <div className="hero" ref={stageRef}>
        <video ref={backgroundVideoRef} className="hero-video" src={heroVideo} poster={earthNightPoster} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
       
        <div className="hero-content">
          <div className="eyebrow">OJAS AEROSPACE</div>
          <h1>
            ENGINEERING THE FUTURE.<br />
            CONNECTING{" "}
            <span
              className={`heroDynamicTerm ${flipping ? "isFlippingOut" : "isFlippingIn"}`}
              aria-live="polite"
            >
              <span className="heroDynamicText">{ROTATING_TERMS[termIndex]}</span>
              <span className="heroDynamicCursor" aria-hidden="true" />
            </span>
          </h1>
          <p>Making useful drone technology and digital intelligence accessible<br className="desktop-break" /> across communities, businesses and industries in India.</p>
          <div className="hero-actions">
            <a className="explore-button" href="/categories" onClick={(e) => { e.preventDefault(); history.pushState({}, "", "/categories"); window.dispatchEvent(new PopStateEvent("popstate")); window.scrollTo(0,0); }}>Explore Drone Categories <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a>
            <button className="story-button" onClick={openFilm}><span className="play-disc"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m9 5 11 7-11 7z"/></svg></span> Watch our story</button>
          </div>
        </div>
        <div className="hero-satellite"><img src={satellite} alt="Satellite in Earth orbit" /><p>SPACE TECHNOLOGY<br />FOR A BRIGHTER TOMORROW</p></div>
        <div className="hero-bottom">
          <a className="scroll-cue" href="#solutions"><span>SCROLL<br />TO LAUNCH</span><i /><span className="scroll-target">○</span></a>
        </div>
        {createPortal(<div ref={sceneRef} className="launch-scene" aria-hidden="true">
          <div className="launch-rocket"><img src={rocket} alt="OJAS Aerospace Launch Vehicle" /></div>
          <svg className="exhaust-sweep" preserveAspectRatio="none" focusable="false">
            <defs><clipPath id="launch-sweep-reveal" clipPathUnits="userSpaceOnUse"><path className="sweep-reveal-shape" /></clipPath></defs>
            <g clipPath="url(#launch-sweep-reveal)">
              <path className="sweep-layer sweep-layer-back" />
              <path className="sweep-layer sweep-layer-middle" />
              <path className="sweep-layer sweep-layer-front" />
            </g>
          </svg>
        </div>, document.body)}
      </div>
    </section>
    <dialog ref={dialogRef} className="story-dialog" onClose={() => videoRef.current?.pause()} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}>
      <div className="story-dialog-heading"><span>OJAS AEROSPACE / OUR HORIZON</span><button onClick={() => dialogRef.current?.close()} aria-label="Close film">×</button></div>
      <video ref={videoRef} src={heroVideo} controls playsInline preload="none" />
    </dialog>
  </>;
}
