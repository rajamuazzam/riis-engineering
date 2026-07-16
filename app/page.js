"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const paths = {
  analyse: {
    code: "01",
    title: "ANALYSE",
    subtitle: "STRUCTURAL RESPONSE & CAPACITY",
    image: "/v21-analyse.jpg",
    lead: "Know what governs before you change, strengthen or approve.",
    items: [
      "Structural design and verification",
      "Existing structure reassessment",
      "Integrity, life extension and strengthening",
      "Offshore and brownfield modification",
      "Lifting and temporary condition checks",
    ],
    proof: "SACS · MATHCAD · API · AISC · ISO",
    message: "Hi RIIS Engineering, I would like to discuss a structural analysis or verification scope and fee.",
  },
  develop: {
    code: "02",
    title: "DEVELOP",
    subtitle: "FEA · SIMULATION · R&D",
    image: "/v21-develop.jpg",
    lead: "Use simulation to decide which design deserves the next iteration.",
    items: [
      "Local stress and deformation",
      "Linear and nonlinear FEA",
      "Contact and complex geometry",
      "Concept comparison and optimisation",
      "Simulation-led product development",
    ],
    proof: "ABAQUS · SACS · MATHCAD · API · ISO · DNV",
    message: "Hi RIIS Engineering, I have a design or R&D idea and would like to discuss how FEA can support its development, including scope and fee.",
  },
  deliver: {
    code: "03",
    title: "DELIVER",
    subtitle: "PROJECT MANAGEMENT & TECHNICAL SUPPORT",
    image: "/v21-deliver.jpg",
    lead: "Keep engineering moving with clear scope, control and technical decisions.",
    items: [
      "Scope and deliverable definition",
      "Technical coordination and interfaces",
      "Progress, risk and action tracking",
      "Independent technical review",
      "PMT and engineering decision support",
    ],
    proof: "PMP®-SUPPORTED · SCOPE · PLAN · CONTROL · DELIVER",
    message: "Hi RIIS Engineering, I would like to discuss project management and technical support, including the support arrangement and fee.",
  },
};

export default function Home() {
  const [active, setActive] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
      });
      gsap.to(".hero-image", {
        scale: 1.06,
        yPercent: -2,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
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
        <a href="#top" className="brand">
          <img src="/riis-navbar-master-transparent.png" alt="RIIS Engineering" />
        </a>
        <div className="nav-links">
          <a href="#services">Expertise</a>
          <a href="#proof">Why RIIS</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setContactOpen(true)}>TALK TO RIIS</button>
      </nav>

      <section className="hero" id="top">
        <img className="hero-image" src="/v21-hero.jpg" alt="Offshore platform structural model with finite element response contours" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">STRUCTURAL · FEA / R&D · PMT</p>
          <h1>ENGINEERING CLARITY<br />FOR COMPLEX STRUCTURES.</h1>
          <p className="hero-sub">Independent structural engineering, finite element analysis and project management support.</p>
          <div className="hero-actions">
            <a href="#services" className="button light">EXPLORE OUR EXPERTISE <span>↗</span></a>
            <button className="button outline" onClick={() => setContactOpen(true)}>TALK TO RIIS</button>
          </div>
          <div className="sequence"><span>STRUCTURE</span><i>→</i><span>MESH</span><i>→</i><b>RESPONSE</b></div>
        </div>
      </section>

      <section className="services-intro section" id="services">
        <div className="section-head reveal">
          <p className="eyebrow">OUR EXPERTISE</p>
          <h2>Three ways RIIS can support your engineering decision.</h2>
        </div>
      </section>

      {Object.entries(paths).map(([key, item], index) => (
        <section className={`service-story ${index % 2 ? "reverse" : ""}`} id={key} key={key}>
          <div className="service-story-copy reveal">
            <p className="eyebrow">{item.code} / {item.subtitle}</p>
            <h2>{key === "analyse" ? "VERIFY BEFORE YOU MODIFY." : key === "develop" ? "UNDERSTAND BEFORE YOU BUILD." : "KEEP THE ENGINEERING MOVING."}</h2>
            <p>{item.lead}</p>
            <button onClick={() => setActive(key)}>EXPLORE {item.title} ↗</button>
          </div>
          <button className="service-story-visual reveal" onClick={() => setActive(key)}>
            <img src={item.image} alt={item.subtitle} />
            <span>{item.code}</span>
          </button>
        </section>
      ))}

      <section className="proof section" id="proof">
        <div className="proof-lead reveal">
          <p className="eyebrow">WHY RIIS</p>
          <h2>Because engineering decisions have consequences.</h2>
        </div>
        <div className="proof-grid reveal">
          <div><strong>20+</strong><span>YEARS<br/>COLLECTIVE EXPERIENCE</span></div>
          <div><strong>P.E.</strong><span>BEM<br/>PROFESSIONAL ENGINEER</span></div>
          <div><strong>M.I.E.M.</strong><span>IEM<br/>CORPORATE MEMBER</span></div>
          <div><strong>Ts.</strong><span>MBOT<br/>PROFESSIONAL TECHNOLOGIST</span></div>
          <div><strong>PMP®</strong><span>PMI<br/>PROJECT MANAGEMENT</span></div>
        </div>
        <div className="proof-strip reveal">
          <span>OFFSHORE</span><span>SUBSEA</span><span>BROWNFIELD</span><span>MARINE</span><span>ONSHORE</span><span>R&D</span>
        </div>
      </section>

      <section className="experience section">
        <div className="section-head reveal">
          <p className="eyebrow">SELECTED EXPERIENCE</p>
          <h2>Close to the problem.</h2>
        </div>
        <div className="experience-grid">
          <button onClick={() => setActive("analyse")}><span>01</span><h3>OFFSHORE MODIFICATION</h3><p>Reassessment · Load integration · Constructability</p><b>↗</b></button>
          <button onClick={() => setActive("develop")}><span>02</span><h3>FEA & ENGINEERING DEVELOPMENT</h3><p>Global-local · Simulation · Optimisation</p><b>↗</b></button>
          <button onClick={() => setActive("analyse")}><span>03</span><h3>STRUCTURAL INTEGRITY</h3><p>Life extension · Anomaly · Strengthening</p><b>↗</b></button>
          <button onClick={() => setActive("deliver")}><span>04</span><h3>TECHNICAL DELIVERY</h3><p>PMT · Coordination · Assurance</p><b>↗</b></button>
        </div>
      </section>

      <section className="validation section">
        <p className="eyebrow reveal">TOOLS & DESIGN BASIS</p>
        <div className="validation-strip reveal">
          <span>SACS</span><span>ABAQUS</span><span>MATHCAD</span><span>API</span><span>AISC</span><span>ISO</span><span>DNV</span><span>AWS</span>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-line" />
        <p className="eyebrow">DRAWING · SKETCH · MODEL · SCREENSHOT · IDEA</p>
        <h2>HAVE SOMETHING<br/>TO SOLVE?</h2>
        <strong>SHOW US.</strong>
        <button className="button light" onClick={() => setContactOpen(true)}>START A DISCUSSION <span>↗</span></button>
      </section>

      <footer>
        <img src="/riis-navbar-master-transparent.png" alt="RIIS Engineering" />
        <p>Structural Engineering · FEA / R&D · Project Management & Technical Support</p>
        <span>© 2026 RIIS Engineering</span>
      </footer>

      <button className="whatsapp" onClick={() => setContactOpen(true)} aria-label="Talk to RIIS">
        <svg viewBox="0 0 32 32"><path d="M16 3a12 12 0 0 0-10.3 18.2L4 28l7-1.8A12 12 0 1 0 16 3Zm0 21.8c-1.9 0-3.7-.5-5.2-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4A9.7 9.7 0 1 1 16 24.8Zm5.3-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3.1 1 4.2.8.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>
      </button>

      {active && (
        <div className="drawer-shell">
          <button className="backdrop" onClick={() => setActive(null)} />
          <aside className="drawer">
            <div className="drawer-top">
              <span>{paths[active].code} / {paths[active].title}</span>
              <button onClick={() => setActive(null)}>×</button>
            </div>
            <div className="drawer-body">
              <p className="eyebrow">{paths[active].subtitle}</p>
              <h2>{paths[active].lead}</h2>
              <div className="drawer-list">
                {paths[active].items.map((x, i) => <div key={x}><span>0{i+1}</span><p>{x}</p></div>)}
              </div>
              {active === "develop" && <div className="flow">CONCEPT → SIMULATE → UNDERSTAND → ITERATE → VERIFY</div>}
              {active === "deliver" && <div className="flow">SCOPE → PLAN → CONTROL → DELIVER</div>}
              <div className="drawer-proof">{paths[active].proof}</div>
              <button className="drawer-cta" onClick={() => { setActive(null); setContactOpen(true); }}>DISCUSS SCOPE & FEE <span>↗</span></button>
            </div>
          </aside>
        </div>
      )}

      {contactOpen && (
        <div className="modal-shell">
          <button className="backdrop" onClick={() => setContactOpen(false)} />
          <div className="contact-card">
            <button className="modal-close" onClick={() => setContactOpen(false)}>×</button>
            <p className="eyebrow">START AN ENGINEERING DISCUSSION</p>
            <h2>Route your enquiry by engineering need.</h2>
            <a href={wa("60178041235", active ? paths[active].message : paths.analyse.message)} target="_blank" rel="noreferrer">
              <span>STRUCTURAL & FEA</span><b>Analysis · Integrity · Offshore · Simulation · R&D</b><i>↗</i>
            </a>
            <a href={wa("601119788718", active ? paths[active].message : paths.deliver.message)} target="_blank" rel="noreferrer">
              <span>PROJECT & TECHNICAL</span><b>Project Management · Coordination · Technical Support</b><i>↗</i>
            </a>
            <small>CONFIDENTIAL · INITIAL DISCUSSION WITHOUT OBLIGATION · SCOPE-DRIVEN FEE</small>
          </div>
        </div>
      )}
    </main>
  );
}
