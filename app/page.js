"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const expertise = {
  structural: {
    code: "01",
    label: "STRUCTURAL ENGINEERING",
    headline: "VERIFY BEFORE YOU MODIFY.",
    summary: "Assessment, design and verification for new and existing load-bearing systems.",
    image: "/structural-project-source.png",
    points: [
      "Structural design and capacity checks",
      "Existing structure reassessment",
      "Brownfield modification and load integration",
      "Integrity, strengthening and life extension",
      "Lifting and temporary condition verification",
    ],
    proof: "SACS · MATHCAD · API · AISC · ISO",
    message: "Hi RIIS Engineering, I would like to discuss a structural engineering scope and fee.",
  },
  fea: {
    code: "02",
    label: "FEA & R&D",
    headline: "UNDERSTAND BEFORE YOU BUILD.",
    summary: "Simulation-led engineering for local response, design development and optimisation.",
    image: "/fea-project-source.png",
    points: [
      "Linear and nonlinear finite element analysis",
      "Local stress, deformation and contact",
      "Concept comparison and design iteration",
      "Engineering-led R&D for load-bearing products",
      "Global-to-local assessment where required",
    ],
    proof: "ABAQUS · SACS · MATHCAD · API · ISO · DNV",
    message: "Hi RIIS Engineering, I have a design or R&D idea and would like to discuss how FEA can support its development, including scope and fee.",
  },
  pmt: {
    code: "03",
    label: "PROJECT MANAGEMENT & TECHNICAL SUPPORT",
    headline: "KEEP THE ENGINEERING MOVING.",
    summary: "Project management discipline and technical coordination for clearer delivery.",
    image: "/pmt-project-source.jpg",
    points: [
      "Scope and deliverable definition",
      "Engineering coordination and interfaces",
      "Progress, risk and action tracking",
      "Independent technical review",
      "PMT and engineering decision support",
    ],
    proof: "PMP®-SUPPORTED · SCOPE · PLAN · CONTROL · DELIVER",
    message: "Hi RIIS Engineering, I would like to discuss project management and technical support, including the support arrangement and fee.",
  },
};

const experience = [
  { title: "OFFSHORE MODIFICATION", sub: "Reassessment · Load integration · Constructability", image: "/gallery-offshore.png", route: "structural" },
  { title: "STRUCTURAL SYSTEMS", sub: "Model · Capacity · Verification", image: "/gallery-structural.png", route: "structural" },
  { title: "FEA & DEVELOPMENT", sub: "Simulation · Iteration · Optimisation", image: "/gallery-fea.png", route: "fea" },
  { title: "SUBSEA COMPONENTS", sub: "Global-local · Load-bearing systems", image: "/gallery-subsea.png", route: "fea" },
  { title: "MARINE & INSTALLATION", sub: "Lifting · Temporary · Offshore execution", image: "/gallery-marine.png", route: "structural" },
  { title: "TECHNICAL DELIVERY", sub: "PMT · Coordination · Assurance", image: "/gallery-technical.png", route: "pmt" },
];

export default function Home() {
  const [active, setActive] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 22,
        duration: 0.85,
        stagger: 0.07,
        ease: "power3.out",
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 22,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = active || contactOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active, contactOpen]);

  const wa = (phone, message) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <main>
      <nav className="navbar">
        <a href="#top" className="brand brand-fea" aria-label="RIIS Engineering">
          <strong>RIIS</strong>
          <span>ENGINEERING</span>
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#trust">About RIIS</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setContactOpen(true)}>TALK TO RIIS →</button>
      </nav>

      <section className="hero" id="top">
        <img className="hero-image" src="/riis-v11-platform-mesh-hero.jpg" alt="RIIS offshore platform finite element mesh visual" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">STRUCTURAL ENGINEERING · FEA / R&D · PMT</p>
          <h1>ENGINEERING<br />CLARITY FOR<br />COMPLEX<br />STRUCTURES<span>.</span></h1>
          <p>Independent structural engineering, finite element analysis and project management support.</p>
          <div className="hero-actions">
            <a className="button light" href="#expertise">EXPLORE OUR EXPERTISE →</a>
            <button className="button outline" onClick={() => setContactOpen(true)}>TALK TO RIIS →</button>
          </div>
        </div>
      </section>

      <section className="expertise-grid" id="expertise">
        {Object.entries(expertise).map(([key, item]) => (
          <button className="expertise-card reveal" key={key} onClick={() => setActive(key)}>
            <img src={item.image} alt={item.label} />
            <div className="expertise-shade" />
            <span>{item.code}</span>
            <small>{item.label}</small>
            <h2>{item.headline}</h2>
            <p>{item.summary}</p>
            <b>EXPLORE →</b>
          </button>
        ))}
      </section>

      <section className="credentials section" id="trust">
        <div className="credential-left reveal">
          <p className="eyebrow">ENGINEERING CREDENTIALS</p>
          <div className="credential-logos">
            <div><strong>BEM</strong><span>PROFESSIONAL ENGINEER</span></div>
            <div><strong>IEM</strong><span>CORPORATE MEMBER</span></div>
            <div><strong>MBOT</strong><span>PROFESSIONAL TECHNOLOGIST</span></div>
            <div><strong>PMI</strong><span>PROJECT MANAGEMENT PROFESSIONAL</span></div>
          </div>
        </div>
        <div className="credential-years reveal">
          <strong>20+</strong>
          <span>YEARS<br />OF COLLECTIVE EXPERIENCE</span>
        </div>
        <div className="credential-sectors reveal">
          <span>OFFSHORE</span><span>MARINE</span><span>SUBSEA</span>
          <span>ONSHORE</span><span>BROWNFIELD</span><span>R&D</span>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-head reveal">
          <p className="eyebrow">SELECTED PROFESSIONAL EXPERIENCE</p>
          <h2>Past project experience.</h2>
        </div>
        <div className="experience-gallery">
          {experience.map((item, i) => (
            <button className="experience-card reveal" key={item.title} onClick={() => setActive(item.route)}>
              <img src={item.image} alt="" />
              <div className="experience-shade" />
              <span>0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.sub}</p>
              <b>↗</b>
            </button>
          ))}
        </div>
        <p className="experience-note">SELECTED PROFESSIONAL EXPERIENCE · CLIENT IDENTITIES WITHHELD WHERE CONFIDENTIALITY APPLIES.</p>
      </section>

      <section className="tools section" id="tools">
        <p className="eyebrow reveal">TOOLS & DESIGN BASIS</p>
        <div className="tools-line reveal">
          <span>SACS</span><span>ABAQUS</span><span>MATHCAD</span><span>API</span><span>AISC</span><span>ISO</span><span>DNV</span><span>AWS</span>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">HAVE SOMETHING TO SOLVE?</p>
          <h2>SHARE YOUR CHALLENGE.<br />WE’LL RESPOND DISCREETLY<br />AND PROFESSIONALLY.</h2>
          <div className="contact-options">
            <button onClick={() => { setActive("structural"); setContactOpen(true); }}>DISCUSS STRUCTURAL →</button>
            <button onClick={() => { setActive("fea"); setContactOpen(true); }}>DISCUSS FEA / R&D →</button>
            <button onClick={() => { setActive("pmt"); setContactOpen(true); }}>DISCUSS PMT →</button>
          </div>
        </div>
        <div className="contact-visual">
          <img src="/gallery-offshore.png" alt="Offshore engineering experience" />
        </div>
      </section>

      <footer>
        <a href="#top" className="brand brand-fea footer-brand">
          <strong>RIIS</strong><span>ENGINEERING</span>
        </a>
        <p>Structural Engineering · FEA / R&D · Project Management & Technical Support</p>
        <span>© 2026 RIIS Engineering</span>
      </footer>

      <button className="whatsapp" onClick={() => setContactOpen(true)} aria-label="Talk to RIIS">
        <svg viewBox="0 0 32 32"><path d="M16 3a12 12 0 0 0-10.3 18.2L4 28l7-1.8A12 12 0 1 0 16 3Zm0 21.8c-1.9 0-3.7-.5-5.2-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4A9.7 9.7 0 1 1 16 24.8Zm5.3-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3.1 1 4.2.8.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>
      </button>

      {active && (
        <div className="drawer-shell">
          <button className="backdrop" onClick={() => setActive(null)} aria-label="Close" />
          <aside className="drawer">
            <div className="drawer-top">
              <span>{expertise[active].code} / {expertise[active].label}</span>
              <button onClick={() => setActive(null)}>×</button>
            </div>
            <div className="drawer-body">
              <img src={expertise[active].image} alt={expertise[active].label} />
              <p className="eyebrow">{expertise[active].label}</p>
              <h2>{expertise[active].headline}</h2>
              <div className="drawer-list">
                {expertise[active].points.map((point, i) => (
                  <div key={point}><span>0{i + 1}</span><p>{point}</p></div>
                ))}
              </div>
              <div className="drawer-proof">{expertise[active].proof}</div>
              <button className="drawer-cta" onClick={() => { setActive(null); setContactOpen(true); }}>DISCUSS SCOPE & FEE ↗</button>
            </div>
          </aside>
        </div>
      )}

      {contactOpen && (
        <div className="modal-shell">
          <button className="backdrop" onClick={() => setContactOpen(false)} aria-label="Close" />
          <div className="contact-card">
            <button className="modal-close" onClick={() => setContactOpen(false)}>×</button>
            <p className="eyebrow">START AN ENGINEERING DISCUSSION</p>
            <h2>Choose the support you need.</h2>
            <a href={wa("60178041235", active ? expertise[active].message : expertise.structural.message)} target="_blank" rel="noreferrer">
              <span>STRUCTURAL & FEA</span>
              <b>Analysis · Integrity · Offshore · Simulation · R&D</b>
              <i>↗</i>
            </a>
            <a href={wa("601119788718", active ? expertise[active].message : expertise.pmt.message)} target="_blank" rel="noreferrer">
              <span>PROJECT & TECHNICAL</span>
              <b>Project Management · Coordination · Technical Support</b>
              <i>↗</i>
            </a>
            <small>CONFIDENTIAL · INITIAL DISCUSSION WITHOUT OBLIGATION · SCOPE-DRIVEN FEE</small>
          </div>
        </div>
      )}
    </main>
  );
}
