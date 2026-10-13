import React, { useEffect, useState } from "react";
import { Home } from "../pages/Home";
import { CategoriesPage } from "../pages/CategoriesPage";
import { SectorsPage } from "../pages/SectorsPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ServicePage } from "../pages/ServicePage";
import { TechnologyPage } from "../pages/TechnologyPage";
import { MiluPage } from "../pages/MiluPage";
import { InfrastructurePage } from "../pages/InfrastructurePage";
import { NetworkPage } from "../pages/NetworkPage";
import { PartnersPage } from "../pages/PartnersPage";
import { NewsPage } from "../pages/NewsPage";
import { TeamPage } from "../pages/TeamPage";
import { CareersPage } from "../pages/CareersPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { TermsPage } from "../pages/TermsPage";
import { CompliancePage } from "../pages/CompliancePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { serviceGroups } from "../constants/services";
import { servicePath } from "../utils/navigation";

export function Router() {
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    const f = () => setPath(location.pathname);
    addEventListener("popstate", f);
    return () => removeEventListener("popstate", f);
  }, []);

  if (path === "/" || path === "/home") return <Home />;
  if (path === "/categories" || path === "/drones" || path === "/products")
    return <CategoriesPage />;
  if (path === "/services") return <ServicesPage />;
  if (path === "/milu-ai") return <MiluPage />;
  if (path === "/network" || path === "/milu-ai-network" || path === "/infrastructure")
    return <NetworkPage />;
  if (path === "/about") return <AboutPage />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/partners") return <PartnersPage />;
  if (path === "/news") return <NewsPage />;
  if (path === "/team") return <TeamPage />;
  if (path === "/careers") return <CareersPage />;
  if (path === "/technology") return <TechnologyPage />;
  if (path === "/sectors" || path === "/solutions" || path.startsWith("/solutions/"))
    return <SectorsPage />;
  if (path === "/privacy") return <PrivacyPage />;
  if (path === "/terms") return <TermsPage />;
  if (path === "/compliance") return <CompliancePage />;

  const serviceName = serviceGroups
    .flatMap((g) => g.items)
    .find((x) => servicePath(x) === path);
  if (serviceName) return <ServicePage name={serviceName} />;

  return <NotFoundPage />;
}
