import React, { useState, useEffect } from "react";
import ecosystemImage from "../assets/ecosystem.jpg";
import { sectorData, sectorCategories } from "../constants/sectors";
import { navigate } from "../utils/navigation";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { IconCards } from "../components/ui/IconCards";
import { Icon } from "../components/ui/Icon";

type CardTab = "applications" | "capabilities" | "tech";

export function SectorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {}
  );
  const [activeTabs, setActiveTabs] = useState<Record<string, CardTab>>({});

  const toggleExpand = (slug: string) => {
    setExpandedCards((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  useEffect(() => {
    // Check if there is a hash in the URL on mount
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setExpandedCards((prev) => ({ ...prev, [hash]: true }));
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 250);
    }
  }, []);

  const filteredSectors =
    selectedCategory === "all"
      ? sectorData
      : sectorData.filter((s) => s.category === selectedCategory);

  const setTab = (slug: string, tab: CardTab) => {
    setActiveTabs((prev) => ({ ...prev, [slug]: tab }));
  };

  return (
    <StandardPage
      question="Where does OJAS operate?"
      title={
        <>
          Systems for <em>different worlds.</em>
        </>
      }
      description="Sectors describe the high-stakes contexts in which OJAS applies aerospace systems, real-time edge intelligence, and autonomous field capability."
      image={ecosystemImage}
    >
      <SectionBlock
        eyebrow="Six operating environments"
        title={
          <>
            Autonomous intelligence <em>engineered for scale.</em>
          </>
        }
      >
        <p className="wideLead">
          Sectors represent critical operational domains. Each sector integrates
          custom sensor payloads, autonomous flight profiles, and machine intelligence
          to deliver decisive tactical and economic advantages.
        </p>

        {/* Category Filter Pills & Selector */}
        <div className="sectorFilterContainer">
          <div className="sectorFilterLabel">
            <small>FILTER BY DOMAIN</small>
          </div>
          <div className="sectorFilterPills" role="tablist">
            {sectorCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`sectorFilterBtn ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                {cat.id === "all" ? (
                  <span className="filterCount">{sectorData.length}</span>
                ) : (
                  <span className="filterCount">
                    {sectorData.filter((s) => s.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sector Rich Cards Grid */}
        <div className="sectorRichGrid">
          {filteredSectors.map((sector) => {
            const currentTab = activeTabs[sector.slug] || "applications";
            const isExpanded = !!expandedCards[sector.slug];
            return (
              <article
                key={sector.slug}
                id={sector.slug}
                className={`sectorRichCard ${isExpanded ? "isExpanded" : "isCollapsed"}`}
                onClick={() => toggleExpand(sector.slug)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
              >
                {/* Media Banner */}
                <div className="sectorCardMedia">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    loading="lazy"
                    className="sectorCardImage"
                  />
                  <div className="sectorCardMediaOverlay" />
                  <div className="sectorCardBadges">
                    <span className="sectorCategoryPill">
                      {sector.categoryLabel}
                    </span>
                    <span className="sectorIndexBadge">
                      0{sectorData.findIndex((s) => s.slug === sector.slug) + 1}
                    </span>
                  </div>
                </div>

                {/* Card Header & Content */}
                <div className="sectorCardContent">
                  <div className="sectorCardHeader">
                    <div className="iconBubble">
                      <Icon name={sector.icon} />
                    </div>
                    <div className="sectorTitleBlock">
                      <small className="sectorSlugEyebrow">OPERATIONAL CONTEXT</small>
                      <h3 className="sectorCardTitle">{sector.title}</h3>
                    </div>
                    <div className={`sectorCardChevron ${isExpanded ? "expanded" : ""}`}>
                      <span>⌄</span>
                    </div>
                  </div>

                  <p className="sectorTagline">{sector.tagline}</p>

                  {isExpanded && (
                    <div
                      className="sectorExpandedDetails"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="sectorText">{sector.text}</p>

                      {/* Authoritative Metrics Section */}
                      <div className="sectorMetricsGrid">
                        {sector.metrics.map((metric, mi) => (
                          <div key={mi} className="sectorMetricBox">
                            <div className="metricValue">{metric.value}</div>
                            <div className="metricLabel">{metric.label}</div>
                            <p className="metricDesc">{metric.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Tab/Accordion Section within Card */}
                      <div className="sectorCardTabs">
                        <div className="sectorTabHeaders">
                          <button
                            type="button"
                            className={`sectorTabBtn ${
                              currentTab === "applications" ? "active" : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setTab(sector.slug, "applications");
                            }}
                          >
                            Mission Applications
                          </button>
                          <button
                            type="button"
                            className={`sectorTabBtn ${
                              currentTab === "capabilities" ? "active" : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setTab(sector.slug, "capabilities");
                            }}
                          >
                            System Capabilities
                          </button>
                          <button
                            type="button"
                            className={`sectorTabBtn ${
                              currentTab === "tech" ? "active" : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setTab(sector.slug, "tech");
                            }}
                          >
                            Integrated Tech
                          </button>
                        </div>

                        <div className="sectorTabBody">
                          {currentTab === "applications" && (
                            <ul className="sectorFeatureList">
                              {sector.applications.map((app, idx) => (
                                <li key={idx}>
                                  <span className="listBullet">✦</span>
                                  <span>{app}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {currentTab === "capabilities" && (
                            <ul className="sectorFeatureList">
                              {sector.capabilities.map((cap, idx) => (
                                <li key={idx}>
                                  <span className="listBullet">⚡</span>
                                  <span>{cap}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {currentTab === "tech" && (
                            <div className="sectorTechChips">
                              {sector.integratedTech.map((tech, idx) => (
                                <span key={idx} className="sectorTechChip">
                                  <Icon name="drone" />
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Action CTA */}
                      <div className="sectorCardFooter">
                        <button
                          type="button"
                          className="btn goldBtn sectorDeployBtn"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/contact");
                          }}
                        >
                          DEPLOY IN SECTOR <span>→</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="The relationship"
        title={
          <>
            Context → capability → <em>action.</em>
          </>
        }
      >
        <IconCards
          items={[
            {
              title: "Sector",
              text: "The operational theater and operating context where critical demands exist.",
              icon: "globe",
            },
            {
              title: "Technology",
              text: "The autonomous aerial platforms, sensing payloads, and AI edge intelligence.",
              icon: "target",
            },
            {
              title: "Service",
              text: "The turnkey airborne flight operations, telemetry pipelines, and field deployment models.",
              icon: "drone",
            },
          ]}
        />
      </SectionBlock>
    </StandardPage>
  );
}
