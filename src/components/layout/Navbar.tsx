import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-gold.png";
import { CompanyMenu } from "./CompanyMenu";
import { SectorsMenu } from "./SectorsMenu";
import { ServicesMenu, servicesMenuList } from "./ServicesMenu";
import { navigate, go } from "../../utils/navigation";
import { useTheme } from "../../utils/theme";

export function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [path, setPath] = useState(location.pathname);
  const home = path === "/" || path === "/home";
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const f = () => {
      setPath(location.pathname);
      setMenu(false);
      setServicesOpen(false);
      setSectorsOpen(false);
    };
    addEventListener("popstate", f);
    return () => removeEventListener("popstate", f);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobileNavOpen", mobileOpen);
    return () => document.body.classList.remove("mobileNavOpen");
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        setServicesOpen(false);
        setSectorsOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!menu && !servicesOpen && !sectorsOpen) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const inNav = navRef.current && navRef.current.contains(target);
      const inDropdown = (target as Element).closest?.(".companyMenu");
      if (!inNav && !inDropdown) {
        setMenu(false);
        setServicesOpen(false);
        setSectorsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [menu, servicesOpen, sectorsOpen]);

  const links: [string, string, string?][] = [
    ["HOME", "/"],
    ["CATEGORIES", "/categories"],
    ["SECTORS", "/sectors"],
    ["SERVICES", "/services"],
    ["TECHNOLOGY", "/technology", "technology"],
    ["INFRASTRUCTURE", "/milu-ai-network"],
    ["MILU AI", "/milu-ai", "milu"],
    ["CAREERS", "/careers"],
  ];
  const companyLinks: [string, string][] = [
    ["ABOUT", "/about"],
    ["PARTNERS", "/partners"],
    ["NEWS & MEDIA", "/news"],
    ["TEAM", "/team"],
  ];

  const handle = (url: string, section?: string) => {
    setMenu(false);
    setServicesOpen(false);
    setSectorsOpen(false);
    setMobileOpen(false);
    if (home && section) go(section);
    else navigate(url);
  };

  const toggleSectors = () => {
    setMenu(false);
    setServicesOpen(false);
    setSectorsOpen((v) => !v);
  };

  const toggleServices = () => {
    setMenu(false);
    setSectorsOpen(false);
    setServicesOpen((v) => !v);
  };

  const toggleCompany = () => {
    setServicesOpen(false);
    setSectorsOpen(false);
    setMenu((v) => !v);
  };

  return (
    <>
      <header className="navbar" ref={navRef}>
        <button
          className="brand"
          onClick={() => (home ? go("home") : navigate("/"))}
          aria-label="OJAS home"
        >
          <img src={logo} alt="OJAS" />
        </button>
        <button
          className={`mobileMenuToggle ${mobileOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <i />
          <i />
          <i />
        </button>
        <div className="navDesktopLinks">
          <button
            className={!home && path === "/" ? "active" : ""}
            onClick={() => handle("/")}
          >
            HOME
          </button>
          <button
            className={path === "/categories" ? "active" : ""}
            onClick={() => handle("/categories")}
          >
            CATEGORIES
          </button>
          <div className="navDropdownContainer">
            <button
              className={path === "/sectors" || sectorsOpen ? "active" : ""}
              onClick={toggleSectors}
              aria-expanded={sectorsOpen}
            >
              SECTORS <span className="menuCaret">⌄</span>
            </button>
          </div>
          <div className="navDropdownContainer">
            <button
              className={path === "/services" || path.startsWith("/services/") || servicesOpen ? "active" : ""}
              onClick={toggleServices}
              aria-expanded={servicesOpen}
            >
              SERVICES <span className="menuCaret">⌄</span>
            </button>
          </div>
          {links.slice(4).map(([label, url, section]) => (
            <button
              key={url}
              className={!home && path === url ? "active" : ""}
              onClick={() => handle(url, section)}
            >
              {label}
            </button>
          ))}
          <div className="navDropdownContainer">
            <button
              className={menu ? "active" : ""}
              onClick={toggleCompany}
              aria-expanded={menu}
            >
              COMPANY <span className="menuCaret">⌄</span>
            </button>
          </div>
        </div>
        <div className="navRight">
          <button className="partner" onClick={() => navigate("/contact")}>
            CONTACT <span>→</span>
          </button>
        </div>
      </header>
      <div
        className={`mobileNavOverlay ${mobileOpen ? "is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobileNavHeader">
          <button
            className="mobileNavBrand"
            onClick={() => handle("/")}
            aria-label="OJAS home"
          >
            <img src={logo} alt="OJAS" />
          </button>
          <button
            className="mobileNavClose"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            <span />
            <span />
          </button>
        </div>
        <div className="mobileNavIntro">
          <small>OJAS / NAVIGATION</small>
          <p>Explore the connected system.</p>
        </div>
        <div className="mobileNavLinks">
          {links.map(([label, url, section], i) => (
            <button
              key={url}
              className={!home && path === url ? "active" : ""}
              onClick={() => handle(url, section)}
            >
              <small>{String(i + 1).padStart(2, "0")}</small>
              <span>{label}</span>
              <b>↗</b>
            </button>
          ))}
        </div>
        <div className="mobileCompanyLinks mobileServicesGroup">
          <div>
            <small>CORE SERVICES</small>
            <span>FLEET & OPERATIONS</span>
          </div>
          <div className="mobileCompanyGrid">
            {servicesMenuList.map((svc) => (
              <button
                key={svc.slug}
                className={path === svc.url ? "active" : ""}
                onClick={() => handle(svc.url)}
              >
                <div className="mobileSvcBtnContent">
                  <span className="mobileSvcBadge">{svc.badge}</span>
                  <span className="mobileSvcTitle">{svc.title}</span>
                </div>
                <b>↗</b>
              </button>
            ))}
            <button
              className="mobileAllServicesBtn"
              onClick={() => handle("/services")}
            >
              <span>EXPLORE ALL SERVICES</span>
              <b>→</b>
            </button>
          </div>
        </div>
        <div className="mobileCompanyLinks">
          <div>
            <small>COMPANY</small>
            <span>THE OJAS STORY</span>
          </div>
          <div className="mobileCompanyGrid">
            {companyLinks.map(([label, url]) => (
              <button
                key={url}
                className={path === url ? "active" : ""}
                onClick={() => handle(url)}
              >
                {label}
                <b>↗</b>
              </button>
            ))}
          </div>
        </div>
        <div className="mobileNavActions">
          <button className="partner" onClick={() => handle("/contact")}>
            START A CONVERSATION <span>→</span>
          </button>
          <a
            href="tel:01354316767"
            className="mobileWhatsAppBtn"
            onClick={() => setMobileOpen(false)}
          >
            <span>📞</span> CALL HELPLINE: 0135 431 6767
          </a>
        </div>
      </div>
      <ServicesMenu
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />
      <SectorsMenu
        open={sectorsOpen}
        onClose={() => setSectorsOpen(false)}
      />
      <CompanyMenu
        open={menu}
        onClose={() => {
          setMenu(false);
          setMobileOpen(false);
        }}
      />
    </>
  );
}
