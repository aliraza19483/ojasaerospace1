import React from "react";
import logo from "../../assets/logo-gold.png";
import { navigate } from "../../utils/navigation";

export function MobileFooter() {
  return (
    <div className="mobileFooterContainer">
      <div className="mobileFooterBrand">
        <img src={logo} alt="OJAS" />
        <p>
          Engineering intelligent aerospace and field systems that turn
          information into action.
        </p>
      </div>
      <div className="mobileFooterContact">
        <span className="mobileFooterTag">COMMAND HQ</span>
        <p>
          Office 9, Ground Floor, Commercial Building, Imperial Heights, Near DIT
          University, Salan Gaon, Bhagwant Pur
        </p>
        <div className="mobileFooterActions">
          <a href="tel:01354316767" className="mobileFooterBtn">
            📞 0135 431 6767
          </a>
          <a href="mailto:Info@ojasspace.com" className="mobileFooterBtn">
            ✉️ Email Ops
          </a>
        </div>
      </div>
      <div className="mobileFooterMeta">
        <div>
          © 2026 MILU AI DRONE PORT. ALL RIGHTS RESERVED. (v8.1.0-ENTERPRISE)
        </div>
        <div className="mobileFooterMadeIn">ENGINEERED & MADE IN INDIA 🇮🇳</div>
      </div>
    </div>
  );
}
