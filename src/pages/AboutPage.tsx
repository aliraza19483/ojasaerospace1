import React from "react";
import aboutImage from "../assets/about.webp";
import teamDroneLab from "../assets/team-drone-lab.webp";
import teamFieldDeployment from "../assets/team-field-deployment.webp";
import deveshJha from "../assets/team/devesh-jha.jpg";
import { coreValues } from "../constants/values";
import { StandardPage } from "../components/ui/StandardPage";
import { SectionBlock } from "../components/ui/SectionBlock";
import { Icon } from "../components/ui/Icon";
import { MilestoneTimeline } from "../components/sections/MilestoneTimeline";


export function AboutPage() {
  return (
    <StandardPage
      question="What drives OJAS Aerospace?"
      title={
        <>
          Engineering the Future. <em>Connecting Intelligence.</em>
        </>
      }
      description="OJAS Aerospace Private Limited connects drone hardware, local service infrastructure, and digital intelligence into a distributed network—making drone technology more accessible, reliable, and practical across India."
      image={aboutImage}
    >
      {/* Vision & Mission */}
      <SectionBlock
        eyebrow="Vision & Mission"
        title={
          <>
            Technology built to solve <em>real operational needs.</em>
          </>
        }
      >
        <div className="visionMissionGrid">
          <div className="visionCard">
            <div className="vmIcon">
              <Icon name="target" />
            </div>
            <small>OUR VISION</small>
            <h3>Useful drone technology accessible to all.</h3>
            <p>
              To make useful drone technology and digital intelligence more accessible to communities, businesses, and industries across India.
            </p>
          </div>

          <div className="missionCard">
            <div className="vmIcon">
              <Icon name="drone" />
            </div>
            <small>OUR MISSION</small>
            <h3>Products, network & technology-led solutions.</h3>
            <p>
              To provide suitable drone products and services, build a dependable network of district Drone Ports and block Drone Centres, and develop technology-led solutions that address real operational needs.
            </p>
          </div>
        </div>

        <div className="approachCallout">
          <small>OUR APPROACH</small>
          <h3>An integrated approach beyond standalone hardware</h3>
          <p>
            We bring together equipment, local service access, operator skills, maintenance support, and digital platforms. The goal is not only to supply drones, but also to make their use more practical and supportable over time.
          </p>
        </div>
      </SectionBlock>

      {/* Chronological Milestone Roadmap */}
      <SectionBlock
        eyebrow="Chronological Progression"
        title={
          <>
            From aeromechanics R&D to <em>nationwide operations.</em>
          </>
        }
      >
        <p className="wideLead">
          Trace OJAS Aerospace's systematic engineering journey from early CFD simulations in Dehradun through the commissioning of our propulsion dynamometer rig to multi-state field execution.
        </p>
        <MilestoneTimeline />
      </SectionBlock>

      {/* 7 Core Values */}
      <SectionBlock
        eyebrow="Core Values"
        title={
          <>
            The principles that guide <em>every operation.</em>
          </>
        }
      >
        <div className="coreValuesGrid">
          {coreValues.map((val) => (
            <article key={val.title} className="coreValueCard">
              <div className="valCardHead">
                <div className="iconBubble">
                  <Icon name={val.icon} />
                </div>
                <small>{val.tagline}</small>
                <h3>{val.title}</h3>
              </div>
              <p>{val.description}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* Founder's Perspective & Aviation Discipline */}
      <SectionBlock
        eyebrow="From the Founder's Desk"
        title={
          <>
            Airmanship & <em>aerospace safety culture.</em>
          </>
        }
      >
        <div className="founderQuoteCard">
          <div className="founderCardHeader">
            <span className="aviationWingsBadge">✈ CIVIL AVIATION RIGOR · ATMANIRBHAR AEROSPACE</span>
          </div>
          <blockquote>
            “Unmanned aviation cannot be treated as toy engineering. Every airframe we prototype, every motor we stress-test on our Dehradun dynamometer, and every flight corridor we designate carries the same strict airmanship, flight checklists, and safety tolerances that govern commercial aircraft flight decks. We engineer for Indian terrain with zero compromise on safety.”
          </blockquote>
          <div className="founderSignoff">
            <div className="founderAvatar">
              <img
                src={deveshJha}
                alt="Devesh Jha — Founder & CEO, OJAS Aerospace"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <strong>Devesh Jha — Founder & CEO</strong>
              <span>OJAS Aerospace Private Limited · Dehradun Central Command</span>
            </div>
          </div>
        </div>
      </SectionBlock>
      {/* Founder Spotlight */}
      <SectionBlock
        eyebrow="The Visionary Behind OJAS"
        title={
          <>
            Meet the <em>Founder.</em>
          </>
        }
      >
        <div className="founderSpotlight">
          <div className="founderSpotlightImg">
            <img
              src={deveshJha}
              alt="Devesh Jha, Founder & CEO of OJAS Aerospace"
              loading="lazy"
              decoding="async"
            />
            <div className="founderSpotlightBadge">FOUNDER &amp; CEO</div>
          </div>
          <div className="founderSpotlightContent">
            <div className="founderSpotlightName">
              <h2>Devesh Jha</h2>
              <p className="founderSpotlightTitle">Founder &amp; Chief Executive Officer, OJAS Aerospace</p>
            </div>
            <p className="founderSpotlightBio">
              Devesh Jha is the visionary entrepreneur who founded OJAS Aerospace with a singular mission — to make drone technology practically useful and accessible across India's diverse terrain and industries. With a background rooted in civil aviation rigor and deep aerospace engineering discipline, he has steered OJAS from a Dehradun R&amp;D lab to a multi-state operational network spanning agriculture, logistics, and defence-support sectors.
            </p>
            <p className="founderSpotlightBio">
              Under his leadership, OJAS has built India's distributed Drone Port and Drone Centre network, deployed precision spraying across sugarcane and paddy belts, and incubated the MILU AI platform for autonomous mission intelligence. Devesh brings together aerospace safety culture, Atmanirbhar Bharat manufacturing philosophy, and ground-up farmer partnerships — creating a company that is as much a movement as it is a business.
            </p>
            <div className="founderStatRow">
              <div className="founderStat">
                <strong>2021</strong>
                <span>Company Founded</span>
              </div>
              <div className="founderStat">
                <strong>15+</strong>
                <span>States Operational</span>
              </div>
              <div className="founderStat">
                <strong>500+</strong>
                <span>Pilots Trained</span>
              </div>
              <div className="founderStat">
                <strong>DGCA</strong>
                <span>RPTO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Lab to Field Story */}
      <SectionBlock
        eyebrow="From Lab to Field"
        title={
          <>
            Where aerospace R&D meets <em>grassroots execution.</em>
          </>
        }
      >
        <div className="storyShowcaseGrid">
          {/* Card 1: R&D Lab & Safety Cage */}
          <div className="storyShowcaseCard">
            <div className="storyShowcaseImgWrapper">
              <img
                src="/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.50%20AM%20(1).jpeg"
                alt="Propulsion motor test cage with official OJAS aerospace branding at Dehradun central lab"
                loading="lazy"
                decoding="async"
              />
              <span className="storyShowcaseTag">DEHRADUN LAB</span>
            </div>
            <div className="storyShowcaseContent">
              <small>CENTRAL R&D & PROPULSION DYNAMOMETER</small>
              <h3>Dehradun Engineering Lab & Propulsion Rig</h3>
              <p>
                Our central facility in Dehradun, Uttarakhand, conducts precision motor dynamometer testing, ESC calibration, and structural airframe prototyping under strict aerospace safety protocols.
              </p>
            </div>
          </div>

          {/* Card 2: RPTO Academy Batch */}
          <div className="storyShowcaseCard">
            <div className="storyShowcaseImgWrapper">
              <img
                src="/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.42.53%20AM%20(1).jpeg"
                alt="RPTO Academy batch of 40+ drone pilot students and instructors with agricultural drones"
                loading="lazy"
                decoding="async"
              />
              <span className="storyShowcaseTag">PILOT ACADEMY</span>
            </div>
            <div className="storyShowcaseContent">
              <small>DGCA RPTO TRAINING EXCELLENCE</small>
              <h3>Remote Pilot Academy & Graduating Cadets</h3>
              <p>
                Nurturing India's next generation of certified commercial remote pilots with rigorous ground theory, simulator flight hours, and hands-on agricultural spraying applicator certifications.
              </p>
            </div>
          </div>

          {/* Card 3: Grassroots Field Operations */}
          <div className="storyShowcaseCard">
            <div className="storyShowcaseImgWrapper">
              <img
                src="/all%20image/WhatsApp%20Image%202026-09-22%20at%2011.45.02%20AM.jpeg"
                alt="Field outreach with farmers holding official OJAS Aerospace and HAL banner"
                loading="lazy"
                decoding="async"
              />
              <span className="storyShowcaseTag">GROUND PROOF</span>
            </div>
            <div className="storyShowcaseContent">
              <small>DISTRICT PORTS & BLOCK CENTRES</small>
              <h3>Grassroots Execution & Farmer Partnerships</h3>
              <p>
                Working hand-in-hand with agricultural cooperatives, village growers, and enterprise sugar mills—bringing high-tech aerial precision directly to rural India's farming communities.
              </p>
            </div>
          </div>

          {/* Card 4: Aviation Cockpit Experience */}
          <div className="storyShowcaseCard">
            <div className="storyShowcaseImgWrapper">
              <img
                src={deveshJha}
                alt="Flight leadership in aircraft cockpit with aviation headsets"
                loading="lazy"
                decoding="async"
              />
              <span className="storyShowcaseTag">AVIATION ROOTS</span>
            </div>
            <div className="storyShowcaseContent">
              <small>PILOT MINDSET & AEROSPACE FOUNDATION</small>
              <h3>Aeronautical Heritage & Flight Discipline</h3>
              <p>
                Founded and steered by aviation practitioners with deep cockpit and flight operations background, ensuring every unmanned drone system is built with civil aviation rigor and airmanship.
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>
    </StandardPage>
  );
}
