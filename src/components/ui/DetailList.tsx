import React from "react";

export function DetailList({ items }: { items: string[] }) {
  return (
    <div className="detailList">
      {items.map((x, i) => (
        <div key={x}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <b>{x}</b>
          <i>+</i>
        </div>
      ))}
    </div>
  );
}
