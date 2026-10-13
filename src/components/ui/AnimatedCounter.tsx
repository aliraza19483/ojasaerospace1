import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
  triggerKey?: string | number;
  prefix?: string;
  suffix?: string;
}

function parseSegments(raw: string) {
  const regex = /(\d+(?:\.\d+)?)/g;
  const segments: Array<
    | { type: "text"; text: string }
    | { type: "number"; target: number; decimals: number; original: string }
  > = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        text: raw.slice(lastIndex, match.index),
      });
    }
    const numStr = match[1];
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    segments.push({
      type: "number",
      target,
      decimals,
      original: numStr,
    });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < raw.length) {
    segments.push({
      type: "text",
      text: raw.slice(lastIndex),
    });
  }

  return segments;
}

// Helper to produce initial 0 state (e.g. "0 Litres", "0 kg", "0-0 Mins", "0+ Cadets")
function getZeroedString(raw: string): string {
  const segments = parseSegments(raw);
  return segments
    .map((seg) => (seg.type === "text" ? seg.text : (0).toFixed(seg.decimals)))
    .join("");
}

// Cubic ease out for realistic telemetry dial acceleration/deceleration
function easeOutQuad(t: number): number {
  return t * (2 - t);
}

export function AnimatedCounter({
  value,
  duration = 1100,
  className = "",
  triggerKey,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const rawStr = String(value);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [displayValue, setDisplayValue] = useState<string>(() => getZeroedString(rawStr));
  const [isBooting, setIsBooting] = useState(false);

  // 1. Observe when element scrolls into viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Animate count-up whenever inView is true or triggerKey / value changes
  useEffect(() => {
    if (!inView) {
      setDisplayValue(getZeroedString(rawStr));
      return;
    }

    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayValue(rawStr);
      return;
    }

    const segments = parseSegments(rawStr);
    const hasNumbers = segments.some((s) => s.type === "number");

    if (!hasNumbers) {
      setDisplayValue(rawStr);
      return;
    }

    setIsBooting(true);
    let startTime: number | null = null;
    let animId: number;

    const updateFrame = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const linearProgress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutQuad(linearProgress);

      const formatted = segments
        .map((seg) => {
          if (seg.type === "text") return seg.text;
          const current = Math.min(seg.target, easedProgress * seg.target);
          return seg.decimals > 0
            ? current.toFixed(seg.decimals)
            : Math.round(current).toString();
        })
        .join("");

      setDisplayValue(formatted);

      if (linearProgress < 1) {
        animId = requestAnimationFrame(updateFrame);
      } else {
        setDisplayValue(rawStr);
        setIsBooting(false);
      }
    };

    animId = requestAnimationFrame(updateFrame);

    return () => {
      cancelAnimationFrame(animId);
      setIsBooting(false);
    };
  }, [inView, rawStr, triggerKey, duration]);

  return (
    <span
      ref={containerRef}
      className={`telemetryCounter ${isBooting ? "telemetryBooting" : "telemetrySettled"} ${className}`}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
