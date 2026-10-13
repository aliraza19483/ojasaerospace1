import React from "react";
import { glyphMap } from "../../constants/icons";

export function Icon({ name }: { name?: string }) {
  return (
    <span className={`lineIcon icon-${name}`} aria-hidden="true">
      {glyphMap[name || ""] || "✦"}
    </span>
  );
}
