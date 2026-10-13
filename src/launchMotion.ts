const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t); };

export interface LaunchFrame {
  rocketY: number;
  rocketOpacity: number;
  paths: [string, string, string];
  revealPath: string;
  outerEdge: number;
  revealEdge: number;
}

// Viewport geometry keeps the plume attached to the original rocket at any size.
export function getLaunchFrame(progress: number, width: number, height: number, rocketHeight: number, nextSectionTop = 0): LaunchFrame {
  const launch = clamp(progress / 0.30);
  const rocketY = height * (1.05 - launch * launch * 1.56);
  const cover = smooth((progress - 0.23) / 0.13);
  const nozzle = rocketY + rocketHeight * 0.94 + 9;
  const tip = nozzle * (1 - cover) - height * 1.2 * cover;
  const spread = height * 0.64;
  const center = width / 2;
  const makeSweep = (offset: number) => {
    const y = tip + offset;
    return `M ${center} ${y} C ${center - width * 0.012} ${y + spread * 0.49}, ${width * 0.38} ${y + spread * 0.57}, ${width * 0.19} ${y + spread * 0.72} C ${width * 0.06} ${y + spread * 0.83}, ${-width * 0.03} ${y + spread * 0.9}, ${-width * 0.08} ${y + spread} L ${-width * 0.08} ${height * 3} H ${width * 1.08} V ${y + spread} C ${width * 1.03} ${y + spread * 0.9}, ${width * 0.94} ${y + spread * 0.83}, ${width * 0.81} ${y + spread * 0.72} C ${width * 0.62} ${y + spread * 0.57}, ${center + width * 0.012} ${y + spread * 0.49}, ${center} ${y} Z`;
  };
  const reveal = smooth((progress - 0.34) / 0.38);
  const desiredEdge = height + 160 - reveal * (height + 340);
  // Never uncover pixels still occupied by the hero. The next section's actual
  // position accounts for the sticky stage and mobile minimum heights.
  const edge = nextSectionTop > 0 ? Math.max(desiredEdge, nextSectionTop) : desiredEdge;
  return {
    rocketY,
    rocketOpacity: 1 - smooth((progress - 0.28) / 0.05),
    paths: [makeSweep(0), makeSweep(height * 0.028), makeSweep(height * 0.056)],
    revealPath: `M 0 0 H ${width} V ${edge} Q ${center} ${edge + 130} 0 ${edge} Z`,
    // Useful bounds for verifying complete coverage before the section handoff.
    outerEdge: tip + spread + height * 0.056,
    revealEdge: edge,
  };
}


