import React from "react";

export function Eyebrow({
  children,
  accent = "gold",
}: {
  children: React.ReactNode;
  accent?: "gold" | "purple";
}) {
  return (
    <div className={`eyebrow ${accent}`}>
      <span />
      {children}
    </div>
  );
}
