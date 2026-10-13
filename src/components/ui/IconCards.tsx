import React from "react";
import { Item } from "../../types";
import { Icon } from "./Icon";

export function IconCards({ items }: { items: Item[] }) {
  return (
    <div className="iconCards">
      {items.map((x, i) => (
        <article key={x.title}>
          <div className="iconBubble">
            <Icon name={x.icon} />
          </div>
          <small>0{(i % 9) + 1}</small>
          <h3>{x.title}</h3>
          <p>{x.text}</p>
        </article>
      ))}
    </div>
  );
}
