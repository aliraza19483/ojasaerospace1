import React, { useState } from "react";
import { Eyebrow } from "../ui/Eyebrow";

const CONTACT_CATEGORIES = [
  { id: "Agricultural Drones / Spraying", label: "Agri Spraying", icon: "🌾" },
  { id: "Logistics Drones", label: "Cargo VTOL", icon: "📦" },
  { id: "Photography Drones", label: "Cinema & FPV", icon: "🎥" },
  { id: "Industrial Drones", label: "Industrial UAV", icon: "🏭" },
  { id: "Drone Sales & Purchase", label: "Drone Sales", icon: "🛒" },
  { id: "Repair & Maintenance / AMC", label: "Repair & AMC", icon: "🔧" },
  { id: "Drone Pilot Training", label: "Pilot Academy", icon: "🎓" },
  { id: "Drone Rental", label: "Drone Rental", icon: "🚁" },
  { id: "MILU AI Agro Ecosystem", label: "MILU AI", icon: "🤖" },
  { id: "Become a Drone Centre Partner", label: "Drone Centre", icon: "📍" },
];

export function ContactBlock() {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("Phone Call");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [locationState, setLocationState] = useState("Uttarakhand");
  const [district, setDistrict] = useState("");
  const [block, setBlock] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("Agricultural Drones / Spraying");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const cleanDigits = phone.replace(/\D/g, "");
  const isPhoneValid = cleanDigits.length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmittedRef(`OJAS-ENQ-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitting(false);
    }, 600);
  };

  return (
    <div className="contactLayout">
      <div className="contactPitch">
        <Eyebrow>CONNECT WITH OJAS AEROSPACE</Eyebrow>
        <h2>
          Connect with <em>OJAS Aerospace.</em>
        </h2>
        <p>
          Enquire about drone sales, repair &amp; maintenance, pilot training, drone rental, MILU AI, or establishing a Drone Centre in your block.
        </p>

        <div className="contactDetails">
          <div>
            <small>HEADQUARTERS</small>
            <span>Imperial Heights, Near DIT University, Dehradun, Uttarakhand - 248009</span>
          </div>
          <div>
            <small>TELEPHONE / HELPLINE</small>
            <a href="tel:01354316767">0135 431 6767</a>
          </div>
          <div>
            <small>OFFICIAL EMAIL</small>
            <a href="mailto:info@ojasspace.com">info@ojasspace.com</a>
          </div>
          <div>
            <small>DISTRICT HUBS</small>
            <span>Dehradun, Haridwar (Uttarakhand) · Hardoi (Uttar Pradesh)</span>
          </div>
        </div>

        {/* Stylized Headquarters Terminal Card */}
        <div className="hqTerminalCard">
          <div className="hqTerminalHeader">
            <span className="hqCoordBadge">GPS: 30°18'59.4"N · 78°01'55.9"E</span>
            <span className="hqAltBadge">640m AMSL</span>
          </div>
          <div className="hqTerminalBody">
            <h4>Dehradun Central Headquarters &amp; R&amp;D Bay</h4>
            <p>
              Imperial Heights, Near DIT University, Mussoorie Diversion Road, Dehradun, Uttarakhand - 248009
            </p>
            <div className="hqTransitInfo">
              <span>✈ 32 km from Jolly Grant Airport (DED)</span>
              <span>🚆 12 km from Dehradun Railway Station</span>
            </div>
            <div className="hqHoursInfo">
              <small>ENGINEERING &amp; VISITOR HOURS</small>
              <span>Mon – Sat: 09:30 – 18:30 IST · Prior clearance required for propulsion bay</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Imperial+Heights+Near+DIT+University+Dehradun+Uttarakhand+248009"
              target="_blank"
              rel="noopener noreferrer"
              className="hqMapsBtn"
            >
              <span>📍</span> NAVIGATE VIA GOOGLE MAPS ↗
            </a>
          </div>
        </div>
      </div>

      <div className="contactFormWrapper">
        {submittedRef ? (
          <div className="contactForm" style={{ textAlign: "center", padding: "44px 28px" }}>
            <div className="inquirySuccessBadge">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="contactFormTerminalBadge" style={{ justifyContent: "center", marginBottom: 8 }}>
              <span className="contactFormTerminalDot" />
              TRANSMISSION RECORDED
            </div>
            <h3 style={{ fontSize: "24px", color: "#fff", margin: "6px 0 10px" }}>Enquiry Registered</h3>
            <span className="inquirySuccessRef">{submittedRef}</span>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6", maxWidth: 440, margin: "0 auto 16px" }}>
              Thank you, <strong>{name}</strong>. Your requirement regarding <strong>{areaOfInterest}</strong> for{" "}
              <strong>{district ? `${district}, ${locationState}` : locationState}</strong> has been received by our regional team.
            </p>
            <p style={{ fontSize: "12.5px", color: "var(--muted)" }}>
              Our operations coordinator will connect with you via <strong>{contactMethod}</strong> within 24 business hours.
            </p>
            <div className="successActionGrid">
              <a href="tel:01354316767" className="successActionBtn callBtn">
                <span>📞</span> CALL HELPLINE: 0135 431 6767
              </a>
              <button
                className="successActionBtn resetBtn"
                onClick={() => {
                  setSubmittedRef(null);
                  setName("");
                  setPhone("");
                  setEmail("");
                  setMessage("");
                }}
              >
                SUBMIT ANOTHER ENQUIRY ↺
              </button>
            </div>
          </div>
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="contactFormTerminalHeader">
              <div className="contactFormTerminalBadge">
                <span className="contactFormTerminalDot" />
                CENTRAL FLIGHT DESK DISPATCH
              </div>
              <span style={{ fontSize: "11px", color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}>
                SECURE SSL
              </span>
            </div>

            {/* Area of Interest Choice Chips */}
            <div className="formCategorySection">
              <div className="formCategoryLabel">// SELECT FOCUS AREA OR PLATFORM *</div>
              <div className="categoryChipsGrid">
                {CONTACT_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`categoryChip ${areaOfInterest === cat.id ? "active" : ""}`}
                    onClick={() => setAreaOfInterest(cat.id)}
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
                <label htmlFor="cnt-name">// FULL NAME *</label>
                <input
                  id="cnt-name"
                  required
                  placeholder="e.g. Ramesh Kumar / Anil Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>

              <div className="formField">
                <label htmlFor="cnt-phone">
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
                    id="cnt-phone"
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

            {/* Email & Contact Preference */}
            <div className="formRow">
              <div className="formField">
                <label htmlFor="cnt-email">
                  <span>// EMAIL ADDRESS</span>
                  <span className="labelOptional">Optional</span>
                </label>
                <input
                  id="cnt-email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className="formField">
                <label htmlFor="cnt-method">// PREFERRED CONTACT *</label>
                <div className="customSelectWrapper">
                  <select
                    id="cnt-method"
                    value={contactMethod}
                    onChange={(e) => setContactMethod(e.target.value)}
                  >
                    <option value="Phone Call">Phone Call</option>
                    <option value="WhatsApp Message">WhatsApp Message</option>
                    <option value="Email">Official Email</option>
                  </select>
                  <span className="customSelectArrow">▼</span>
                </div>
              </div>
            </div>

            {/* State, District & Block */}
            <div className="formRow">
              <div className="formField">
                <label htmlFor="cnt-state">// STATE *</label>
                <div className="customSelectWrapper">
                  <select
                    id="cnt-state"
                    value={locationState}
                    onChange={(e) => setLocationState(e.target.value)}
                  >
                    <option value="Uttarakhand">Uttarakhand (Central Base)</option>
                    <option value="Uttar Pradesh">Uttar Pradesh (Sugarcane Corridor)</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Other State">Other State in India</option>
                  </select>
                  <span className="customSelectArrow">▼</span>
                </div>
              </div>

              <div className="formField">
                <label htmlFor="cnt-dist">// DISTRICT / TEHSIL *</label>
                <input
                  id="cnt-dist"
                  required
                  placeholder="e.g. Dehradun / Hardoi / Haridwar"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
            </div>

            <div className="formField">
              <label htmlFor="cnt-block">
                <span>// BLOCK / TEHSIL / VILLAGE</span>
                <span className="labelOptional">Optional</span>
              </label>
              <input
                id="cnt-block"
                placeholder="e.g. Rupapur / Vikas Nagar / Doiwala"
                value={block}
                onChange={(e) => setBlock(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="formField">
              <label htmlFor="cnt-msg">
                <span>// OPERATIONAL DETAILS / SPECIFICATION *</span>
                <span className="labelOptional">Scope &amp; timeline</span>
              </label>
              <textarea
                id="cnt-msg"
                required
                rows={4}
                placeholder="Briefly describe your requirements (crop acreage, drone models, flight dates, or questions)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="submitBtn" disabled={submitting}>
              {submitting ? (
                <>
                  <span className="submitBtnSpinner" />
                  <span>DISPATCHING SPECIFICATION...</span>
                </>
              ) : (
                <>
                  <span>TRANSMIT OPERATIONAL ENQUIRY</span>
                  <span>↗</span>
                </>
              )}
            </button>

            <div className="formUrgentBar">
              <span>Direct regional helpline:</span>
              <a href="tel:01354316767">📞 0135 431 6767 (Mon-Sat 09:30-18:30 IST) ↗</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
