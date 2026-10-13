import React from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";
import { sectorData } from "../../constants/sectors";
import { navigate } from "../../utils/navigation";

export function SectorsMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  const handleSelect = (slug: string) => {
    onClose();
    navigate(`/sectors#${slug}`);
    // Smooth scroll to the sector card if already on sectors page
    if (window.location.pathname === "/sectors") {
      setTimeout(() => {
        const el = document.getElementById(slug);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div className="companyMenu sectorsMenuModal" role="dialog" aria-label="Sectors Menu">
      <div className="companyMenuInner sectorsMenuInner">
        <div className="sectorsMenuHeader">
          <Eyebrow accent="gold">OPERATING ENVIRONMENTS</Eyebrow>
          <h3>
            Aerospace systems for
            <br />
            <em>critical sectors.</em>
          </h3>
          <p className="sectorsMenuIntro">
            Explore OJAS field intelligence, autonomous platforms, and sensing
            architectures across mission-critical domains.
          </p>
          <button
            className="btn goldBtn"
            style={{ marginTop: "16px", padding: "10px 20px" }}
            onClick={() => {
              onClose();
              navigate("/sectors");
            }}
          >
            VIEW ALL SECTORS <b>→</b>
          </button>
        </div>
        <div className="sectorsMenuGrid">
          {sectorData.map((sector) => (
            <button
              key={sector.slug}
              className="sectorMenuItem"
              onClick={() => handleSelect(sector.slug)}
            >
              <div className="sectorMenuItemIcon">
                <Icon name={sector.icon} />
              </div>
              <div className="sectorMenuItemCopy">
                <span className="sectorCategoryTag">{sector.categoryLabel}</span>
                <h4>{sector.title}</h4>
                <small>{sector.tagline}</small>
              </div>
              <b className="sectorMenuArrow">↗</b>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
