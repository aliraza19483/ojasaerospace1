import React from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { navigate } from "../../utils/navigation";

export function CompanyMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="companyMenu">
      <div className="companyMenuInner">
        <div>
          <Eyebrow accent="purple">COMPANY</Eyebrow>
          <h3>
            The people, places
            <br />
            and ideas behind OJAS.
          </h3>
        </div>
        <div className="companyMenuLinks">
          {[
            ["ABOUT", "/about", "What drives OJAS?"],
            ["NETWORK", "/network", "People, places & systems"],
            ["PARTNERS", "/partners", "Building the network together"],
            ["NEWS & MEDIA", "/news", "What is happening in the field?"],
            ["TEAM", "/team", "The people behind OJAS"],
          ].map(([a, b, c]) => (
            <button
              key={b}
              onClick={() => {
                onClose();
                navigate(b);
              }}
            >
              <span>{a}</span>
              <small>{c}</small>
              <b>↗</b>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
