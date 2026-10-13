import React, { useEffect, useState } from "react";

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

export function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Operational Enquiry");
  const [service, setService] = useState("Agricultural Drones / Spraying");
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
      if (custom.detail?.service) setService(custom.detail.service);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const refCode = `OJAS-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(refCode);
      setSubmitting(false);
    }, 500);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmittedRef(null);
  };

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
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 id="inquiry-title">Enquiry Transmitted</h3>
            <span className="inquirySuccessRef">{submittedRef}</span>
            <p>
              Thank you, <strong>{name || "Customer"}</strong>. Your enquiry regarding{" "}
              <strong>{service}</strong> for <strong>{district ? `${district}, ${stateName}` : stateName}</strong> has been logged with our regional operations desk.
            </p>
            <p>Our coordinator will connect with you via {contactMethod} within 24 business hours.</p>
            <div className="inquirySuccessActions">
              <a href="tel:01354316767" className="inquirySuccessCall">
                CALL CENTRAL COMMAND: 0135 431 6767
              </a>
              <button className="btn outlineBtn" onClick={handleClose}>
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          <form className="inquiryForm" onSubmit={handleSubmit}>
            <div className="inquiryHeader">
              <small>OJAS AEROSPACE / ENQUIRY</small>
              <h3 id="inquiry-title">{title}</h3>
              <p>Connect with our technical and network coordinators.</p>
            </div>

            <div className="formRow">
              <label>
                FULL NAME *
                <input
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                PHONE / MOBILE NUMBER *
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>

            <div className="formRow">
              <label>
                PREFERRED CONTACT *
                <select
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="contactSelect"
                >
                  <option value="Phone Call">Phone Call</option>
                  <option value="Email">Email</option>
                </select>
              </label>

              <label>
                STATE *
                <select
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  className="contactSelect"
                >
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Other State">Other State</option>
                </select>
              </label>
            </div>

            <div className="formRow">
              <label>
                DISTRICT / BLOCK *
                <input
                  required
                  placeholder="e.g. Dehradun / Hardoi / Haridwar"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </label>

              <label>
                CATEGORY / SERVICE *
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="contactSelect"
                >
                  <option value="Agricultural Drones">Agricultural Drones / Spraying</option>
                  <option value="Logistics Drones">Logistics Drones</option>
                  <option value="Photography Drones">Photography Drones</option>
                  <option value="Industrial Drones">Industrial Drones</option>
                  <option value="Drone Sales">Drone Sales</option>
                  <option value="Repair & Maintenance">Repair & Maintenance / AMC</option>
                  <option value="Drone Training">Drone Training Course</option>
                  <option value="Drone Rental">Drone Rental Fleet</option>
                  <option value="MILU AI Agro Ecosystem">MILU AI Agro Ecosystem</option>
                  <option value="Drone Centre Partnership">Drone Centre Partnership</option>
                </select>
              </label>
            </div>

            <label>
              OPERATIONAL DETAILS / TIMELINE *
              <textarea
                required
                rows={3}
                placeholder="Mention acre count, drone model, inspection scope, or preferred date..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <button type="submit" className="btn goldBtn fullWidthBtn" disabled={submitting}>
              {submitting ? "TRANSMITTING..." : "TRANSMIT ENQUIRY ↗"}
            </button>

            <div style={{ textAlign: "center", marginTop: 12 }}>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>Need urgent coordination? </span>
              <a
                href="tel:01354316767"
                style={{ fontSize: 11, color: "var(--gold2)", fontWeight: 600, textDecoration: "none" }}
              >
                📞 Call Command Desk: 0135 431 6767 ↗
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
