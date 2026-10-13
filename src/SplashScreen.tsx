import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "./assets/logo-gold.webp";

const SPLASH_SEEN_KEY = "ojas_splash_seen";

type Particle = {
  angle: number;
  dist: number;
  size: number;
  gold: boolean;
  twinkle: number;
};

export default function SplashScreen() {
  // Skip if already seen this session
  const alreadySeen = typeof sessionStorage !== "undefined" &&
    sessionStorage.getItem(SPLASH_SEEN_KEY) === "1";

  const [visible, setVisible] = useState(!alreadySeen);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const doneRef = useRef(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const dismiss = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    sessionStorage.setItem(SPLASH_SEEN_KEY, "1");
    gsap.to(rootRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        document.body.style.overflow = "";
        setVisible(false);
        window.dispatchEvent(new CustomEvent("splashDone"));
      },
    });
  };

  useEffect(() => {
    // If already seen, fire splashDone immediately so app can initialise
    if (alreadySeen) {
      window.dispatchEvent(new CustomEvent("splashDone"));
      return;
    }

    if (!visible) return;
    document.body.style.overflow = "hidden";
    doneRef.current = false;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cnv: HTMLCanvasElement = canvas;
    const g: CanvasRenderingContext2D = ctx;

    const resize = () => {
      cnv.width = window.innerWidth;
      cnv.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cx = () => cnv.width / 2;
    const cy = () => cnv.height / 2;

    const COUNT =
      window.innerWidth < 480 ? 35 : window.innerWidth < 780 ? 55 : 100;
    const particles: Particle[] = Array.from({ length: COUNT }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const dist =
        260 + Math.random() * Math.max(window.innerWidth, window.innerHeight) * 0.55;
      return {
        angle,
        dist,
        size: 1 + Math.random() * 2.2,
        gold: Math.random() > 0.42,
        twinkle: Math.random() * Math.PI * 2,
      };
    });

    const start = performance.now();
    const CONVERGE_MS = 1650;
    const FADE_START = 1500;
    const FADE_END = 2350;

    function frame(now: number) {
      if (doneRef.current) return;
      const t = now - start;
      g.clearRect(0, 0, cnv.width, cnv.height);
      const convergeT = Math.min(1, t / CONVERGE_MS);
      const eased = 1 - Math.pow(1 - convergeT, 3);
      let fade = 1;
      if (t > FADE_START) {
        fade = Math.max(0, 1 - (t - FADE_START) / (FADE_END - FADE_START));
      }

      particles.forEach((p) => {
        const d = p.dist * (1 - eased);
        const wobble = Math.sin(t * 0.004 + p.twinkle) * (1 - eased) * 8;
        const x = cx() + Math.cos(p.angle) * d + wobble;
        const y = cy() + Math.sin(p.angle) * d + wobble * 0.6;
        const twinkleAlpha = 0.5 + 0.5 * Math.sin(t * 0.006 + p.twinkle);
        const alpha = Math.min(1, fade * (0.35 + 0.5 * twinkleAlpha));

        g.beginPath();
        g.shadowBlur = 8;
        g.shadowColor = p.gold
          ? "rgba(232,184,79,.8)"
          : "rgba(166,92,255,.8)";
        g.fillStyle = p.gold
          ? `rgba(242,196,90,${alpha})`
          : `rgba(166,92,255,${alpha})`;
        g.arc(x, y, p.size, 0, Math.PI * 2);
        g.fill();
      });

      if (!doneRef.current) {
        rafRef.current = requestAnimationFrame(frame);
      }
    }
    rafRef.current = requestAnimationFrame(frame);

    const ctxGsap = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 1.15,
        onComplete: () => {
          doneRef.current = true;
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          sessionStorage.setItem(SPLASH_SEEN_KEY, "1");
          document.body.style.overflow = "";
          setVisible(false);
          window.dispatchEvent(new CustomEvent("splashDone"));
        },
      });
      tlRef.current = tl;

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.7, filter: "blur(6px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.85, ease: "power3.out" }
      )
        .to(
          ringRef.current,
          { opacity: 1, scale: 1.6, duration: 0.9, ease: "power2.out" },
          "-=0.55"
        )
        .to(ringRef.current, { opacity: 0, duration: 0.5 }, "-=0.15")
        .to(
          rootRef.current,
          { opacity: 0, duration: 0.6, ease: "power2.inOut" },
          "+=0.6"
        );
    }, rootRef);

    // Keyboard: Escape to skip
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKey);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ctxGsap.revert();
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="splash" ref={rootRef} role="presentation" aria-hidden="true" onClick={dismiss}>
      <canvas ref={canvasRef} className="splashCanvas" />
      <div className="splashCore">
        <div className="splashRing" ref={ringRef} />
        <img src={logo} alt="OJAS Aerospace Emblem" className="splashLogo" ref={logoRef} />
      </div>
    </div>
  );
}
