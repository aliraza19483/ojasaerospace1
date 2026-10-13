import React from "react";
import { StandardPage } from "../components/ui/StandardPage";

export function TermsPage() {
  return (
    <StandardPage
      question="What are the operational and commercial terms of service?"
      title={
        <>
          Terms of <em>Service</em>
        </>
      }
      description="Clear operational terms governing drone sales, maintenance agreements, pilot instruction enrollment, fleet rentals, and network partner facilities."
    >
      <div className="legalDocWrapper">
        <div className="legalDocSection">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing the OJAS Aerospace website (ojasaerospace.com), engaging our commercial drone
            services, procuring hardware, or enrolling in pilot courses, you agree to these Terms of
            Service and all applicable Indian aviation laws.
          </p>
        </div>

        <div className="legalDocSection">
          <h2>2. Commercial Services & Operations</h2>
          <h3>A. Drone Sales & Warranties</h3>
          <p>
            All aircraft supplied across Agricultural, Logistics, Photography, and Industrial categories
            conform to certified manufacturer specifications and Type Certification standards where
            mandated by DGCA. Warranties cover manufacturing defects in accordance with OEM documentation.
          </p>

          <h3>B. Repair & Maintenance</h3>
          <p>
            Maintenance and diagnostics performed at district Drone Ports and block Drone Centres utilize
            OEM-approved diagnostic tools and genuine spares. Customers must maintain complete flight log
            records to preserve maintenance warranties.
          </p>

          <h3>C. Drone Training & Pilot Courses</h3>
          <p>
            Course enrollment is subject to age, medical fitness, and educational prerequisites outlined
            by DGCA for Remote Pilot Certificate (RPC) issuance. Completion of training modules does not
            guarantee license issuance without passing mandatory DGCA-approved knowledge and practical tests.
          </p>

          <h3>D. Drone Fleet Rentals</h3>
          <p>
            Rental units (dry or wet lease) must be operated strictly within approved airspace zones
            (Digital Sky Green/Yellow zones with permissions). Unauthorized operations in Red or prohibited
            zones result in immediate lease cancellation, forfeiture of deposits, and statutory reporting.
          </p>
        </div>

        <div className="legalDocSection">
          <h2>3. Intellectual Property & MILU AI</h2>
          <p>
            All proprietary algorithms, spectral indices, vegetation maps, machine learning models, and
            software interfaces comprising the MILU AI Agro Ecosystem remain the intellectual property
            of OJAS Aerospace Private Limited. Clients receive a non-exclusive license to view and export
            reports generated for their designated farm parcels or enterprise mill zones.
          </p>
        </div>

        <div className="legalDocSection">
          <h2>4. Limitation of Liability & Airspace Safety</h2>
          <p>
            Flight missions are subject to meteorological conditions (wind shear, precipitation, thermal
            updrafts). OJAS Aerospace reserves the right to postpone or abort flight operations when weather
            violates safe operating parameters, with zero liability for agricultural delays resulting from
            force majeure weather conditions.
          </p>
        </div>

        <div className="legalDocSection">
          <h2>5. Governing Law & Jurisdiction</h2>
          <p>
            These terms are governed by the laws of India. Any disputes arising from contracts, purchases,
            or operations with OJAS Aerospace Private Limited shall be subject to the exclusive jurisdiction
            of the competent courts situated in <strong>Dehradun, Uttarakhand, India</strong>.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}
