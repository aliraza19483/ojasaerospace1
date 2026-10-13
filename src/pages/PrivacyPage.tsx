import React from "react";
import { StandardPage } from "../components/ui/StandardPage";

export function PrivacyPage() {
  return (
    <StandardPage
      question="How do we handle your privacy and operational data?"
      title={
        <>
          Privacy <em>Policy</em>
        </>
      }
      description="OJAS Aerospace Private Limited is committed to transparent, secure, and compliant data governance across our aircraft operations, MILU AI telemetry, and customer communications."
    >
      <div className="legalDocWrapper">
        <div className="legalDocSection">
          <h2>1. Corporate Identity & Scope</h2>
          <p>
            This Privacy Policy applies to all services, web applications, remote sensing platforms,
            and field operations conducted by <strong>OJAS Aerospace Private Limited</strong> (CIN
            registered in India), headquartered at:
          </p>
          <div className="legalHighlightBox">
            <strong>Registered Office & Command HQ:</strong>
            <br />
            Office 9, Ground Floor, Commercial Building, Imperial Heights, Near DIT University,
            Salan Gaon, Bhagwant Pur, Dehradun, Uttarakhand - 248009, India.
            <br />
            Telephone: +91 135 431 6767 | Email: info@ojasspace.com
          </div>
        </div>

        <div className="legalDocSection">
          <h2>2. Information We Collect</h2>
          <h3>A. Customer & Inquiry Details</h3>
          <p>
            When you submit an operational inquiry via our website, WhatsApp link, phone, or service
            port, we collect your name, phone number, email address, physical location (State, District,
            Block), and equipment interest (Categories, Services, Training, Partnerships).
          </p>

          <h3>B. Flight Telemetry & Geospatial Data (MILU AI)</h3>
          <p>
            In the execution of precision spraying, surveying, or crop monitoring missions, our aircraft
            capture flight logs, GPS waypoints, multispectral imagery, and plot boundary coordinates.
            This data is used strictly for generating agricultural health maps, yield estimations, and
            operational flight logs.
          </p>
        </div>

        <div className="legalDocSection">
          <h2>3. Data Protection & Agricultural Confidentiality</h2>
          <p>
            Agricultural land data, cane mill delivery estimates, and proprietary field boundary
            coordinates collected during pilot programs (including our Hardoi sugarcane belt operations)
            are strictly confidential. We do not sell, rent, or lease farmer or enterprise plot telemetry
            to third-party advertisers.
          </p>
          <ul>
            <li>All telemetry transmission is encrypted using standard industry transport protocols (TLS/HTTPS).</li>
            <li>Access to sugar mill dashboards and grower records is restricted by multi-factor enterprise authentication.</li>
            <li>Field survey imagery is retained only for the duration required to complete agricultural analysis and regulatory flight auditing.</li>
          </ul>
        </div>

        <div className="legalDocSection">
          <h2>4. Regulatory Compliance & Law Enforcement</h2>
          <p>
            As a commercial UAV enterprise operating in Indian airspace, OJAS Aerospace complies with all
            applicable statutory disclosure requests by the Directorate General of Civil Aviation (DGCA),
            Ministry of Civil Aviation (MoCA), or law enforcement agencies under Digital Sky and Drone Rules 2021.
          </p>
        </div>

        <div className="legalDocSection">
          <h2>5. Inquiries & Data Officer</h2>
          <p>
            For questions regarding this policy, to request data correction, or to exercise privacy rights,
            contact our Compliance Officer at <strong>info@ojasspace.com</strong> with the subject line
            <em>"Privacy Request — Dehradun Desk"</em>.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}
