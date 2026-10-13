import React from "react";
import { CinematicHero } from "../components/sections/CinematicHero";
import { TechnologyPreview } from "../components/sections/TechnologyPreview";
import { MiluPreview } from "../components/sections/MiluPreview";
import { EcosystemPreview } from "../components/sections/EcosystemPreview";
import { ImpactPreview } from "../components/sections/ImpactPreview";
import { AboutPreview } from "../components/sections/AboutPreview";
import { CareersPreview } from "../components/sections/CareersPreview";
import { ContactPreview } from "../components/sections/ContactPreview";

export function Home() {
  return (
    <>
      <CinematicHero />
      <TechnologyPreview />
      <MiluPreview />
      <EcosystemPreview />
      <ImpactPreview />
      <AboutPreview />
      <CareersPreview />
      <ContactPreview />
    </>
  );
}
