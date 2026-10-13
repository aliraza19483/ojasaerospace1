import React, { useState } from "react";
import { Eyebrow } from "../ui/Eyebrow";

export function ContactBlock() {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [locationState, setLocationState] = useState("Uttarakhand");
  const [district, setDistrict] = useState("");
  const [block, setBlock] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("Agricultural Drones / Spraying");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmittedRef(`OJAS-ENQ-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="contactLayout">
      <div className="contactPitch">
        <Eyebrow>CONNECT WITH OJAS AEROSPACE</Eyebrow>
        <h2>
          Connect with <em>OJAS Aerospace.</em>
        </h2>
        <p>
          Enquire about drone sales, repair & maintenance, pilot training, drone rental, MILU AI, or establishing a Drone Centre in your block.
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
            <small>INSTANT WHATSAPP CONNECT</small>
            <a
              href="https://wa.me/911354316767?text=Hello%20OJAS%20Aerospace%2C%20I%20would%20like%20to%20inquire%20about%20drone%20platforms%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <span>💬</span> Chat with Regional Team ↗
            </a>
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
      </div>

      <div className="contactFormWrapper">
        {submittedRef ? (
          <div className="contactForm" style={{ textAlign: "center", padding: "48px 24px" }}>
            <div className="inquirySuccessBadge">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Enquiry Registered Successfully</h3>
            <span className="inquirySuccessRef">{submittedRef}</span>
            <p>
              Thank you, <strong>{name}</strong>. Your enquiry regarding <strong>{areaOfInterest}</strong> for{" "}
              <strong>{district ? `${district}, ${locationState}` : locationState}</strong> has been received by our regional team.
            </p>
            <p>Our coordinator will connect with you via {contactMethod} within 24 business hours.</p>
            <button
              className="btn goldBtn"
              style={{ marginTop: 18 }}
              onClick={() => {
                setSubmittedRef(null);
                setName("");
                setMessage("");
              }}
            >
              SUBMIT ANOTHER ENQUIRY ↺
            </button>
          </div>
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formRow">
              <label>
                FULL NAME *
                <input
                  required
                  placeholder="e.g. Ramesh Kumar / Anil Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                PREFERRED CONTACT METHOD *
                <select
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="contactSelect"
                >
                  <option value="WhatsApp">WhatsApp Message</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Email">Email</option>
                </select>
              </label>
            </div>

            <div className="formRow">
              <label>
                PHONE / WHATSAPP NUMBER *
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>
                EMAIL ADDRESS
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div className="formRow">
              <label>
                STATE *
                <select
                  value={locationState}
                  onChange={(e) => setLocationState(e.target.value)}
                  className="contactSelect"
                >
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Other State">Other State in India</option>
                </select>
              </label>
              <label>
                DISTRICT *
                <input
                  required
                  placeholder="e.g. Dehradun / Hardoi / Haridwar"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </label>
            </div>

            <div className="formRow">
              <label>
                BLOCK / TEHSIL / VILLAGE
                <input
                  placeholder="e.g. Rupapur / Vikas Nagar / Doiwala"
                  value={block}
                  onChange={(e) => setBlock(e.target.value)}
                />
              </label>

              <label>
                AREA OF INTEREST *
                <select
                  value={areaOfInterest}
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                  className="contactSelect"
                >
                  <option value="Agricultural Drones / Spraying">Agricultural Drones / Crop Spraying</option>
                  <option value="Logistics Drones">Logistics Drones</option>
                  <option value="Photography Drones">Photography Drones</option>
                  <option value="Industrial Drones">Industrial Drones</option>
                  <option value="Drone Sales & Purchase">Drone Sales (Procurement & Sizing)</option>
                  <option value="Repair & Maintenance / AMC">Repair & Maintenance / AMC Support</option>
                  <option value="Drone Pilot Training">Drone Training & Certification Course</option>
                  <option value="Drone Rental">Drone Rental (Dry or Wet Fleet)</option>
                  <option value="MILU AI Agro Ecosystem">MILU AI Agro Ecosystem / Mill Dashboard</option>
                  <option value="Become a Drone Centre Partner">Host or Open a Block Drone Centre</option>
                </select>
              </label>
            </div>

            <label>
              YOUR MESSAGE OR OPERATIONAL DETAILS *
              <textarea
                required
                rows={4}
                placeholder="Briefly describe your requirements (e.g. crop acreage, drone model, project timeline, or questions)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <button type="submit" className="sendEnquiry" disabled={submitting}>
              {submitting ? "SUBMITTING ENQUIRY..." : "TRANSMIT ENQUIRY"} <span>↗</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
