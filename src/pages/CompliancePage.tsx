import React from "react";
import { StandardPage } from "../components/ui/StandardPage";

export function CompliancePage() {
  return (
    <StandardPage
      question="How does OJAS adhere to DGCA and civil aviation frameworks?"
      title={
        <>
          DGCA & Airspace <em>Compliance</em>
        </>
      }
      description="OJAS Aerospace enforces strict adherence to Ministry of Civil Aviation Drone Rules 2021, Digital Sky airspace zoning, Type Certification, and agricultural spraying standards."
    >
      <div className="legalDocWrapper">
        <div className="legalDocSection">
          <h2>1. Regulatory Framework Overview</h2>
          <p>
            Civilian and commercial unmanned aircraft systems (UAS) operating in India are governed
            by the <strong>Drone Rules 2021</strong>, published by the Ministry of Civil Aviation (MoCA)
            and enforced by the Directorate General of Civil Aviation (DGCA). OJAS Aerospace conducts
            all R&D, pilot operations, flight testing, and service dispatch in strict compliance with these rules.
          </p>
        </div>

        <div className="legalDocSection">
          <h2>2. Core Compliance Pillars</h2>

          <h3>A. Digital Sky Airspace Classifications</h3>
          <p>
            All OJAS flight planning begins with automated airspace classification and clearance via the Digital Sky platform:
          </p>
          <div className="airspaceZonesGrid">
            <div className="airspaceZoneCard greenZone">
              <span className="zoneBadge">🟢 GREEN ZONE</span>
              <h4>Up to 400 ft AGL · Zero Permission</h4>
              <p>
                Unrestricted operations outside designated airport buffers. Flight sorties proceed automatically without prior clearance, logged with standard pre-flight SOP checks.
              </p>
            </div>
            <div className="airspaceZoneCard yellowZone">
              <span className="zoneBadge">🟡 YELLOW ZONE</span>
              <h4>Controlled Perimeter · Automated Clearance</h4>
              <p>
                Airspace within 8–12 km of operational airport boundaries or active ATC sectors. Requires automated clearance logged through the Digital Sky portal prior to takeoff.
              </p>
            </div>
            <div className="airspaceZoneCard redZone">
              <span className="zoneBadge">🔴 RED ZONE</span>
              <h4>Restricted Airspace · Central Authorization Only</h4>
              <p>
                Strictly prohibited zones (international frontiers, key defense installations, nuclear centers). OJAS aircraft do not enter red zones unless explicitly commissioned by Central Government agencies.
              </p>
            </div>
          </div>

          <h3>B. Unique Identification Number (UIN) & Type Certification</h3>
          <p>
            All commercial aircraft in our fleet carry valid UIN tags affixed to the fuselage and
            broadcast remote ID telemetry in accordance with DGCA norms. Agricultural, logistics, and
            industrial drones offered for sale or rental adhere to Quality Council of India (QCI)
            and DGCA Type Certification benchmarks.
          </p>

          <h3>C. Remote Pilot Certification (RPC)</h3>
          <p>
            All commercial flight missions deployed through our district Drone Ports and block Drone
            Centres are commanded by DGCA-certified Remote Pilots holding active RPC credentials.
            Our pilot training programs prepare candidates for approved Remote Pilot Training
            Organisation (RPTO) skill tests.
          </p>

          <h3>D. Agricultural Spraying Standard Operating Procedures (SOPs)</h3>
          <p>
            Spray operations across sugarcane, paddy, and horticultural crops follow Central Insecticide
            Board & Registration Committee (CIB&RC) and Ministry of Agriculture guidelines:
          </p>
          <ul>
            <li>Only approved agrochemical formulations diluted to prescribed droplet spectrums.</li>
            <li>Buffer zones maintained around water bodies, dwelling units, and non-target vegetation.</li>
            <li>Real-time weather monitoring to prevent spray drift during wind velocities exceeding 15 km/h.</li>
          </ul>
        </div>

        <div className="legalDocSection">
          <h2>3. Safety Audit & Incident Reporting</h2>
          <p>
            Safety officers at our Dehradun Headquarters conduct scheduled preventive maintenance audits
            across all network ports. Any flight incident, battery thermal anomaly, or airspace deviation
            is documented and submitted through Digital Sky incident reporting workflows within 48 hours.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}
