import React from "react";
import logo from "../../assets/logo-gold.png";
import { navigate } from "../../utils/navigation";
import { MobileFooter } from "./MobileFooter";

export function Footer() {
  const cols: [string, [string, string][]][] = [
    [
      "DRONE PLATFORMS",
      [
        ["All Categories", "/categories"],
        ["Agricultural Drones", "/categories"],
        ["Logistics Drones", "/categories"],
        ["Photography Drones", "/categories"],
        ["Industrial Drones", "/categories"],
      ],
    ],
    [
      "CORE SERVICES",
      [
        ["All Services", "/services"],
        ["Drone Sales", "/services/drone-sale"],
        ["Repair & Maintenance", "/services/drone-repair-maintenance"],
        ["Drone Training", "/services/drone-training"],
        ["Drone Rental", "/services/drone-rental"],
      ],
    ],
    [
      "NETWORK & AI",
      [
        ["MILU AI Agro Ecosystem", "/milu-ai"],
        ["Dehradun HQ & Ports", "/network"],
        ["District Drone Ports", "/network"],
        ["Block Drone Centres", "/network"],
        ["Verified Facilities Table", "/network"],
      ],
    ],
    [
      "COMPANY",
      [
        ["About & Core Values", "/about"],
        ["Partnerships", "/partners"],
        ["Leadership & Team", "/team"],
        ["Careers", "/careers"],
        ["Contact Command HQ", "/contact"],
      ],
    ],
  ];

  return (
    <>
      <footer className="footer">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerLogo">
              <img src={logo} alt="OJAS Aerospace" />
            </div>
            <p>
              <strong>OJAS Aerospace Private Limited</strong>
              <br />
              Engineering the Future. Connecting Intelligence.
              <br />
              Making drone technology, distributed local service access, and digital intelligence practical across India.
            </p>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <h4>{h}</h4>
              {items.map(([a, b]) => (
                <button key={b + a} onClick={() => navigate(b)}>
                  {a}
                </button>
              ))}
            </div>
          ))}
          <div className="footerContact">
            <h4>COMMAND HEADQUARTERS</h4>
            <ul className="footerContactList">
              <li className="footerContactItem">
                <span className="footerContactIcon">📍</span>
                <span>
                  Office 9, Ground Floor, Commercial Building, Imperial Heights
                </span>
              </li>
              <li className="footerContactItem">
                <span className="footerContactIcon">🏁</span>
                <span>Near DIT University, Salan Gaon, Bhagwant Pur, Dehradun, Uttarakhand - 248009</span>
              </li>
              <li className="footerContactItem">
                <span className="footerContactIcon">📞</span>
                <a href="tel:01354316767">0135 431 6767</a>
              </li>
              <li className="footerContactItem">
                <span className="footerContactIcon">✉️</span>
                <a href="mailto:info@ojasspace.com">info@ojasspace.com</a>
              </li>
              <li className="footerContactItem">
                <span className="footerContactIcon">🕒</span>
                <span>Mon – Sat: 09:00 to 18:00 IST · Command Desk</span>
              </li>
            </ul>
          </div>
          <div>
            <h4>FOLLOW US</h4>
            <div className="social">
              <button aria-label="LinkedIn">in</button>
              <button aria-label="X">𝕏</button>
              <button aria-label="Instagram">◎</button>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL & META BAR */}
        <div className="footerBottom">
          <div>
            © 2026 OJAS AEROSPACE PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="legalLinks">
            <button onClick={() => navigate("/privacy")}>Privacy Policy</button>
            <button onClick={() => navigate("/terms")}>Terms of Service</button>
            <button onClick={() => navigate("/compliance")}>DGCA Compliance</button>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">XML Sitemap</a>
          </div>
          <div className="madeInIndia">ENGINEERED & MADE IN INDIA 🇮🇳</div>
        </div>
      </footer>

      {/* MOBILE FOOTER */}
      <div className="mobileOnly">
        <MobileFooter />
      </div>
    </>
  );
}
