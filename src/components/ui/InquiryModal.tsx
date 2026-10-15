import React, { useEffect, useState } from "react";
import { submitInquiryForm } from "../../utils/formSubmit";

export type InquiryDetail = {
  title?: string;
  service?: string;
};

export function triggerInquiry(detail?: InquiryDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("ojas:inquire", { detail: detail || {} })
    );
  }
}

const INQUIRY_CATEGORIES = [
  { id: "Agricultural Drones", label: "Agri Spraying", icon: "🌾" },
  { id: "Logistics Drones", label: "Cargo VTOL", icon: "📦" },
  { id: "Photography Drones", label: "Cinema & FPV", icon: "🎥" },
  { id: "Industrial Drones", label: "Industrial UAV", icon: "🏭" },
  { id: "Drone Sales", label: "Drone Sales", icon: "🛒" },
  { id: "Repair & Maintenance", label: "Repair & AMC", icon: "🔧" },
  { id: "Drone Training", label: "Pilot Academy", icon: "🎓" },
  { id: "Drone Rental", label: "Rental Fleet", icon: "🚁" },
  { id: "MILU AI Agro Ecosystem", label: "MILU AI", icon: "🤖" },
  { id: "Drone Centre Partnership", label: "Drone Centre", icon: "📍" },
];

export function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Operational Enquiry");
  const [service, setService] = useState("Agricultural Drones");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("Phone Call");
  const [stateName, setStateName] = useState("Uttarakhand");
  const [district, setDistrict] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    const handleInquire = (e: Event) => {
      const custom = e as CustomEvent<InquiryDetail>;
      if (custom.detail?.title) setTitle(custom.detail.title);
      if (custom.detail?.service) {
        // match category or default to first
        const matched = INQUIRY_CATEGORIES.find(
          (c) => custom.detail?.service?.toLowerCase().includes(c.id.toLowerCase()) ||
                 c.label.toLowerCase().includes(custom.detail?.service?.toLowerCase() || "")
        );
        setService(matched ? matched.id : custom.detail.service);
      }
      setSubmittedRef(null);
      setOpen(true);
    };

    window.addEventListener("ojas:inquire", handleInquire);
    return () => window.removeEventListener("ojas:inquire", handleInquire);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  if (!open) return null;

  const cleanDigits = phone.replace(/\D/g, "");
  const isPhoneValid = cleanDigits.length >= 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const refCode = `OJAS-REQ-${Math.floor(1000 + Math.random() * 9000)}`;

    await submitInquiryForm({
      name,
      phone,
      service,
      state: stateName,
      district,
      contactMethod,
      message,
      referenceCode: refCode,
      formType: "inquiry_modal",
    });

    setSubmittedRef(refCode);
    setSubmitting(false);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmittedRef(null);
  };

  const waSummary = encodeURIComponent(
    `Hello OJAS Aerospace, I submitted an operational inquiry on your portal [Ref: ${submittedRef}]:\nName: ${name}\nMobile: +91 ${phone}\nService: ${service}\nLocation: ${district ? `${district}, ${stateName}` : stateName}\nPreferred Contact: ${contactMethod}\nRequirement: ${message}`
  );

  return (
    <div
      className="inquiryModalOverlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div className="inquiryModalBox" onClick={(e) => e.stopPropagation()}>
        <button
          className="modalCloseBtn"
          onClick={handleClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {submittedRef ? (
          <div className="inquirySuccess">
            <div className="inquirySuccessBadge">
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="contactFormTerminalBadge" style={{ justifyContent: "center", marginBottom: 8 }}>
              <span className="contactFormTerminalDot" />
              TRANSMISSION VERIFIED &amp; DISPATCHED
            </div>
            <h3 id="inquiry-title">Enquiry Transmitted</h3>
            <span className="inquirySuccessRef">{submittedRef}</span>
            <p>
              Thank you, <strong>{name || "Customer"}</strong>. Your operational brief for{" "}
              <strong>{service}</strong> in <strong>{district ? `${district}, ${stateName}` : stateName}</strong> has been logged directly with the regional technical command desk at <code>info@ojasspace.com</code>.
            </p>
            <p style={{ fontSize: "12.5px", color: "var(--muted)" }}>
              Our field coordinator will reach out via <strong>{contactMethod}</strong> within 24 business hours.
            </p>

            <div className="successActionGrid">
              <a
                href={`https://wa.me/911354316767?text=${waSummary}`}
                target="_blank"
                rel="noopener noreferrer"
                className="successActionBtn"
                style={{
                  background: "#25D366",
                  color: "#081b0f",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <span>💬</span> DIRECT WHATSAPP CONFIRMATION ↗
              </a>
              <a href="tel:01354316767" className="successActionBtn callBtn">
                <span>📞</span> CALL COMMAND DESK: 0135 431 6767
              </a>
              <button className="successActionBtn resetBtn" onClick={handleClose}>
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          <form className="inquiryFormModern" onSubmit={handleSubmit}>
            <div className="contactFormTerminalHeader">
              <div className="contactFormTerminalBadge">
                <span className="contactFormTerminalDot" />
                OPERATIONAL DISPATCH TERMINAL
              </div>
              <span style={{ fontSize: "11px", color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}>
                SECURE 256-BIT
              </span>
            </div>

            <div className="inquiryHeader" style={{ textAlign: "left", marginBottom: 4 }}>
              <h3 id="inquiry-title" style={{ fontSize: "22px", margin: "0 0 4px 0", color: "#fff" }}>
                {title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "13px", margin: 0 }}>
                Direct aerospace hardware, field operation &amp; pilot training inquiry desk.
              </p>
            </div>

            {/* Category / Service Chips */}
            <div className="formCategorySection">
              <div className="formCategoryLabel">// SELECT AIRFRAME OR SERVICE CATEGORY *</div>
              <div className="categoryChipsGrid">
                {INQUIRY_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`categoryChip ${service === cat.id ? "active" : ""}`}
                    onClick={() => setService(cat.id)}
                  >
                    <span className="categoryChipIcon">{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Phone Number */}
            <div className="formRow">
              <div className="formField">
                <label htmlFor="inq-name">// YOUR FULL NAME *</label>
                <input
                  id="inq-name"
                  required
                  placeholder="e.g. Ramesh Kumar / Anil Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>

              <div className="formField">
                <label htmlFor="inq-phone">
                  <span>// MOBILE NUMBER *</span>
                  {isPhoneValid && (
                    <span className="phoneValidIndicator" style={{ position: "static", transform: "none" }}>
                      ✓ VALID
                    </span>
                  )}
                </label>
                <div className="phoneInputGroup">
                  <span className="phonePrefixBadge">🇮🇳 +91</span>
                  <input
                    id="inq-phone"
                    required
                    type="tel"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={14}
                    autoComplete="tel"
                  />
                </div>
              </div>
            </div>

            {/* State & District */}
            <div className="formRow">
              <div className="formField">
                <label htmlFor="inq-state">// OPERATIONAL STATE *</label>
                <div className="customSelectWrapper">
                  <select
                    id="inq-state"
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                  >
                    <option value="Uttarakhand">Uttarakhand (HQ Base)</option>
                    <option value="Uttar Pradesh">Uttar Pradesh (Sugarcane Corridor)</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Other State in India">Other State in India</option>
                  </select>
                  <span className="customSelectArrow">▼</span>
                </div>
              </div>

              <div className="formField">
                <label htmlFor="inq-district">// DISTRICT / TEHSIL *</label>
                <input
                  id="inq-district"
                  required
                  placeholder="e.g. Dehradun / Hardoi / Haridwar"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
            </div>

            {/* Contact Preference Chips */}
            <div className="formField">
              <label>
                <span>// PREFERRED CONTACT PATHWAY *</span>
                <span className="labelOptional">Coordinate via</span>
              </label>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["Phone Call", "WhatsApp Message", "Official Email"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    className={`categoryChip ${contactMethod === mode ? "active" : ""}`}
                    onClick={() => setContactMethod(mode)}
                  >
                    {mode === "Phone Call" ? "📞 " : mode === "WhatsApp Message" ? "💬 " : "✉️ "}
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Message / Scope */}
            <div className="formField">
              <label htmlFor="inq-msg">
                <span>// OPERATIONAL SCOPE / TIMELINE *</span>
                <span className="labelOptional">Acreage, dates, or drone model</span>
              </label>
              <textarea
                id="inq-msg"
                required
                rows={3}
                placeholder="Mention crop acreage, required spray schedule, training batch size, or procurement specs..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="submitBtn" disabled={submitting}>
              {submitting ? (
                <>
                  <span className="submitBtnSpinner" />
                  <span>LOGGING WITH FLIGHT DESK...</span>
                </>
              ) : (
                <>
                  <span>TRANSMIT SPECIFICATION DIRECTLY</span>
                  <span>↗</span>
                </>
              )}
            </button>

            <div className="formUrgentBar">
              <span>Need immediate clearance?</span>
              <a href="tel:01354316767">📞 Direct Command Desk: 0135 431 6767 ↗</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

