"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const solutions = [
  {
    id: "structural",
    num: "01",
    short: "STRUCTURE CAPACITY?",
    title: "Structural Design & Check",
    intro: "New structures, modifications, equipment supports and load-bearing systems.",
    question: "Does the structure have the capacity for what you need it to do?",
    questions: [
      "Can the structure support a new or revised load?",
      "What governs the design or modification?",
      "Is a local check enough, or is broader reassessment required?",
      "What needs to change to reach a clear engineering decision?",
    ],
    capability: [
      "Structural design and verification",
      "In-place and member assessment",
      "Modification and deck extension checks",
      "Equipment support and load integration",
      "Strengthening concepts and code verification",
    ],
    experience: "Offshore modification",
    method: ["Define the required decision", "Establish loads and load path", "Assess global and local response", "Verify capacity", "Recommend action"],
    tools: "SACS · Mathcad · AutoCAD",
    basis: "API · AISC · ISO",
  },
  {
    id: "fea",
    num: "02",
    short: "UNDERSTAND OR DEVELOP A DESIGN?",
    title: "FEA & Design Development",
    intro: "Simulation, local response, design iteration and engineering-led R&D.",
    question: "What are you trying to learn about the design?",
    questions: [
      "VERIFY A DESIGN — Is it structurally adequate for the required loads?",
      "UNDERSTAND THE RESPONSE — Where do stress, deformation or local behaviour govern?",
      "COMPARE CONCEPTS — How do alternative geometries change structural performance?",
      "DEVELOP & OPTIMISE — Can simulation guide the next design iteration before prototyping or fabrication?",
    ],
    capability: [
      "Understand load paths, local response and governing behaviour",
      "Compare structural response across design concepts",
      "Use simulation findings to guide geometry, stiffness and configuration",
      "Model contact, nonlinear response and complex geometry where relevant",
      "Verify the developed direction against the agreed engineering basis",
    ],
    experience: "FEA & engineering development",
    method: ["Concept", "Simulate", "Understand", "Iterate", "Verify"],
    tools: "Abaqus · SACS · Mathcad",
    basis: "Agreed engineering basis · API · AISC · ISO · DNV",
  },
  {
    id: "integrity",
    num: "03",
    short: "EXISTING STRUCTURE?",
    title: "Existing Structure & Integrity",
    intro: "Reassessment, anomaly evaluation, continued operation and strengthening.",
    question: "Can the existing structure continue to perform safely and practically?",
    questions: [
      "What is the impact of the anomaly or changed condition?",
      "Is continued operation technically supportable?",
      "Where is strengthening actually required?",
      "What assessment level is proportionate to the decision?",
    ],
    capability: [
      "Existing structure reassessment",
      "Anomaly and fitness-for-purpose evaluation",
      "Life-extension engineering support",
      "Strengthening and repair concepts",
      "Focused verification for engineering decisions",
    ],
    experience: "Structural integrity",
    method: ["Review condition", "Define assessment basis", "Assess response", "Verify reserve or deficiency", "Strengthen or accept"],
    tools: "SACS · Abaqus · Mathcad",
    basis: "API RP 2A · API RP 2SIM · ISO",
  },
  {
    id: "offshore",
    num: "04",
    short: "OFFSHORE / BROWNFIELD?",
    title: "Offshore & Brownfield",
    intro: "Platforms, subsea structures, existing interfaces and modification engineering.",
    question: "How do you integrate a new requirement into an existing offshore system?",
    questions: [
      "What existing interfaces control the modification?",
      "Can new loads be integrated without disproportionate strengthening?",
      "What needs to be verified before detailed design?",
      "How should constructability influence the engineering solution?",
    ],
    capability: [
      "Offshore structural assessment",
      "Brownfield modification engineering",
      "Existing interface and load integration",
      "Local checks and structural reassessment",
      "Constructability-led engineering support",
    ],
    experience: "Offshore modification",
    method: ["Understand existing asset", "Define interfaces", "Integrate new loads", "Assess modification", "Resolve constructability"],
    tools: "SACS · AutoCAD · Navisworks",
    basis: "API · AISC · ISO · DNV",
  },
  {
    id: "marine",
    num: "05",
    short: "LIFTING / INSTALLATION?",
    title: "Lifting & Installation",
    intro: "Lifting, transportation, temporary conditions and marine operations.",
    question: "Is the structure verified for the temporary condition that actually governs execution?",
    questions: [
      "What is the governing temporary load condition?",
      "Is the lifting or installation load path clear?",
      "Are temporary supports or rigging interfaces adequate?",
      "What needs to be controlled during execution?",
    ],
    capability: [
      "Lifting structural verification",
      "Transportation and temporary condition checks",
      "Installation engineering support",
      "Rigging and support interface review",
      "Construction sequence and execution input",
    ],
    experience: "Marine & installation",
    method: ["Define operation", "Establish temporary loads", "Verify load path", "Check critical interfaces", "Support execution"],
    tools: "SACS · Mathcad · AutoCAD",
    basis: "DNV · Noble Denton · AISC · AWS",
  },
  {
    id: "support",
    num: "06",
    short: "NEED TECHNICAL SUPPORT?",
    title: "Technical & PMT Support",
    intro: "Independent review, technical evaluation, assurance and engineering decision support.",
    question: "Do you need experienced technical input without building a full internal workstream?",
    questions: [
      "Does the design basis answer the real project need?",
      "Are calculations, models and drawings technically aligned?",
      "What technical risk needs escalation or closure?",
      "What level of engineering support fits the project stage?",
    ],
    capability: [
      "Independent technical review",
      "Design basis and calculation review",
      "Technical evaluation and assurance",
      "Contractor and engineering interface support",
      "PMT engineering decision support",
    ],
    experience: "Technical assurance & project support",
    method: ["Clarify decision", "Review evidence", "Challenge assumptions", "Identify technical risk", "Recommend next action"],
    tools: "SACS · Abaqus · Mathcad · Navisworks",
    basis: "Project design basis · API · AISC · ISO · DNV",
  },
];

const experience = {
  "Offshore modification": {
    title: "Offshore Modification",
    text: "Structural reassessment and integration of deck extensions, equipment loads and brownfield interfaces on existing offshore facilities.",
    tags: "REASSESSMENT · LOCAL CHECKS · CONSTRUCTABILITY",
    detail: [
      "Existing platform and interface review",
      "New load integration and governing load cases",
      "Global and local structural checks",
      "Modification and strengthening concepts",
      "Constructability and installation considerations",
    ],
  },
  "FEA & engineering development": {
    title: "FEA & Engineering Development",
    text: "Simulation-led assessment and design development of complex load-bearing components and structural systems.",
    tags: "FEA · R&D · DESIGN ITERATION · OPTIMISATION",
    detail: [
      "Understand structural behaviour and governing response",
      "Compare concepts, geometries and structural configurations",
      "Develop local finite element models for complex load-bearing components",
      "Use simulation findings to guide progressive design iteration",
      "Verify the developed direction against the agreed engineering basis",
    ],
  },
  "Structural integrity": {
    title: "Structural Integrity",
    text: "Assessment of existing structures for continued operation, anomaly response and strengthening requirements.",
    tags: "LIFE EXTENSION · ANOMALY · STRENGTHENING",
    detail: [
      "Condition and anomaly review",
      "Reassessment of existing structural capacity",
      "Continued-operation and life-extension support",
      "Strengthening and repair concepts",
      "Engineering decision support",
    ],
  },
  "Marine & installation": {
    title: "Marine & Installation",
    text: "Structural verification for lifting, temporary conditions, transportation and offshore installation.",
    tags: "LIFTING · TEMPORARY · INSTALLATION",
    detail: [
      "Temporary and operational load definition",
      "Lifting and support load-path verification",
      "Transportation and installation checks",
      "Critical interface assessment",
      "Execution and construction support",
    ],
  },
  "Technical assurance & project support": {
    title: "Technical Assurance & Project Support",
    text: "Focused technical review, evaluation and project engineering support for scopes requiring senior structural input.",
    tags: "REVIEW · ASSURANCE · PMT SUPPORT",
    detail: [
      "Design basis and engineering deliverable review",
      "Technical evaluation and contractor interface",
      "Calculation, model and drawing alignment",
      "Risk and decision-focused technical input",
      "Flexible support for evolving engineering scopes",
    ],
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [panel, setPanel] = useState(null);
  const [layer, setLayer] = useState("overview");
  const [competenceOpen, setCompetenceOpen] = useState(false);
  const [competenceLayer, setCompetenceLayer] = useState("menu");
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const panelRef = useRef(null);

  const active = solutions.find((item) => item.id === panel);
  const activeExperience = active ? experience[active.experience] : null;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".engineering-visual",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.65,
        },
      });

      tl.to(".visual-loads", { opacity: 1, y: 0, duration: 1 })
        .to(".visual-beam", { attr: { d: "M85 215 Q300 248 515 215" }, duration: 1 }, "<")
        .to(".visual-mesh", { opacity: 1, duration: 1 })
        .to(".visual-contour", { opacity: 0.88, duration: 1 }, "<0.15")
        .to(".visual-critical", { opacity: 1, scale: 1, duration: 0.8 })
        .to(".visual-decision", { opacity: 1, y: 0, duration: 0.8 });

      gsap.utils.toArray(".visual-beat").forEach((beat, index) => {
        ScrollTrigger.create({
          trigger: beat,
          start: "top 55%",
          end: "bottom 45%",
          toggleClass: { targets: beat, className: "is-active" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const open = panel || competenceOpen || whatsAppOpen;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [panel, competenceOpen, whatsAppOpen]);

  const openSolution = (id) => {
    setPanel(id);
    setLayer("overview");
  };

  const closeSolution = () => {
    setPanel(null);
    setLayer("overview");
  };

  const whatsappMessage = active?.id === "fea"
    ? "Hi RIIS Engineering, I have a design / R&D idea and would like to discuss whether FEA can support its development, including the scope and fee."
    : active
      ? `Hi RIIS Engineering, I would like to discuss a ${active.title} scope and fee.`
      : "Hi RIIS Engineering, I would like to discuss an engineering scope and fee.";

  const whatsappUrl = (phone) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#top" aria-label="RIIS Engineering home">
          <img src="/riis-navbar-master-transparent.png" alt="RIIS Engineering" />
        </a>
        <div className="nav-links">
          <a href="#solve">Solutions</a>
          <a href="#trust">Competence</a>
          <a href="#experience">Experience</a>
        </div>
        <button className="nav-cta" onClick={() => setWhatsAppOpen(true)}>
          Discuss scope & fee
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">STRUCTURAL ENGINEERING · FEA · PMT SUPPORT</p>
          <h1>
            Got a structural
            <br />
            problem?
          </h1>
          <h2>We analyse it. Verify it. Help you decide.</h2>
          <p className="hero-text">
            Structural engineering and simulation-led design development for complex
            load-bearing systems, offshore facilities, engineering modifications
            and R&D of structural products.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#solve">
              Find my engineering need <Arrow />
            </a>
            <button className="button secondary" onClick={() => setWhatsAppOpen(true)}>
              Discuss scope & fee
            </button>
          </div>
          <p className="hero-note">
            CONFIDENTIAL · SCOPE-DRIVEN · INITIAL DISCUSSION WITHOUT OBLIGATION
          </p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-grid" />
          <svg viewBox="0 0 650 620">
            <defs>
              <linearGradient id="heroContour" x1="0" x2="1">
                <stop offset="0" stopColor="#1b5db4" />
                <stop offset=".42" stopColor="#13b9d5" />
                <stop offset=".72" stopColor="#f1d331" />
                <stop offset="1" stopColor="#f15b2a" />
              </linearGradient>
            </defs>
            <g className="hero-wire">
              <path d="M110 470 L185 140 L325 90 L470 145 L545 470" />
              <path d="M110 470 L545 470 M185 140 L470 145 M150 300 L505 300" />
              <path d="M110 470 L325 90 L545 470 M185 140 L505 300 M470 145 L150 300" />
              <path d="M150 300 L545 470 M505 300 L110 470" />
            </g>
            <path className="hero-fea" d="M325 90 L470 145 L505 300 L545 470 L325 410 Z" fill="url(#heroContour)" />
            <g className="hero-nodes">
              {[["110","470"],["185","140"],["325","90"],["470","145"],["545","470"],["150","300"],["505","300"],["325","410"]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />)}
            </g>
          </svg>
          <div className="hero-readout">
            <span>STRUCTURAL RESPONSE</span>
            <b>PROBLEM → ANALYSIS → DECISION</b>
          </div>
        </div>
      </section>

      <section className="solve section" id="solve">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">START WITH THE PROBLEM</p>
            <h2>What do you need to solve?</h2>
          </div>
          <p>
            Choose the engineering question closest to your scope. The technical
            depth is there when you need it.
          </p>
        </div>

        <div className="solution-grid">
          {solutions.map((item) => (
            <button className="solution-card reveal" key={item.id} onClick={() => openSolution(item.id)}>
              <span className="solution-num">{item.num}</span>
              <strong>{item.short}</strong>
              <h3>{item.title}</h3>
              <p>{item.intro}</p>
              <span className="explore">EXPLORE <Arrow /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="engineering-visual">
        <div className="visual-sticky">
          <div className="visual-copy">
            <p className="eyebrow">ENGINEERING, NOT JUST ANALYSIS</p>
            <div className="visual-beat">
              <span>01</span>
              <h2>Understand the structure.</h2>
              <p>Establish the system, the interfaces and the load path.</p>
            </div>
            <div className="visual-beat">
              <span>02</span>
              <h2>Analyse the response.</h2>
              <p>Use the right level of modelling to identify global and local behaviour.</p>
            </div>
            <div className="visual-beat visual-decision">
              <span>03</span>
              <h2>Make the engineering decision.</h2>
              <p>Analysis is only useful when it leads to a clear engineering decision.</p>
            </div>
          </div>

          <div className="visual-model" aria-hidden="true">
            <svg viewBox="0 0 600 430">
              <defs>
                <linearGradient id="responseContour" x1="0" x2="1">
                  <stop offset="0" stopColor="#1554a1" />
                  <stop offset=".36" stopColor="#11b7d4" />
                  <stop offset=".7" stopColor="#efd02f" />
                  <stop offset="1" stopColor="#f05a28" />
                </linearGradient>
                <radialGradient id="responseGlow">
                  <stop offset="0" stopColor="#ff4b21" stopOpacity=".95" />
                  <stop offset="1" stopColor="#ff4b21" stopOpacity="0" />
                </radialGradient>
              </defs>
              <g className="visual-structure">
                <path className="visual-beam" d="M85 215 Q300 215 515 215" />
                <path d="M105 215 L105 360 M495 215 L495 360 M105 360 L495 360" />
                <path d="M105 360 L200 215 M200 215 L300 360 M300 360 L400 215 M400 215 L495 360" />
              </g>
              <g className="visual-loads">
                {[170, 255, 345, 430].map((x) => (
                  <g key={x}>
                    <path d={`M${x} 65 L${x} 165`} />
                    <path d={`M${x - 9} 150 L${x} 165 L${x + 9} 150`} />
                  </g>
                ))}
              </g>
              <g className="visual-mesh">
                {Array.from({ length: 9 }).map((_, i) => <path key={`v${i}`} d={`M${100 + i * 50} 205 L${100 + i * 50} 365`} />)}
                {Array.from({ length: 6 }).map((_, i) => <path key={`h${i}`} d={`M100 ${220 + i * 28} L500 ${220 + i * 28}`} />)}
              </g>
              <path className="visual-contour" d="M85 215 Q300 248 515 215 L495 360 L105 360 Z" fill="url(#responseContour)" />
              <circle className="visual-critical" cx="392" cy="252" r="72" fill="url(#responseGlow)" />
            </svg>
            <div className="visual-readout">
              <span>RIIS / ENGINEERING SEQUENCE</span>
              <b>LOAD PATH → RESPONSE → DECISION</b>
            </div>
          </div>
        </div>
      </section>

      <section className="trust section" id="trust">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">WHY TRUST RIIS?</p>
            <h2>Engineering competence you can rely on.</h2>
          </div>
          <p>
            Professional standing, relevant engineering depth and delivery
            discipline — presented simply, with detail available on demand.
          </p>
        </div>

        <div className="trust-grid reveal">
          <div className="trust-cell">
            <strong>20+ YEARS</strong>
            <span>COLLECTIVE PROFESSIONAL EXPERIENCE</span>
          </div>
          <div className="trust-cell credential-cell">
            <strong>P.E. · M.I.E.M.</strong>
            <strong>Ts. · PMP®</strong>
            <span>PROFESSIONAL STANDING</span>
          </div>
          <div className="trust-cell">
            <strong>OFFSHORE · SUBSEA</strong>
            <strong>BROWNFIELD · MARINE</strong>
            <span>SECTOR DEPTH</span>
          </div>
          <div className="trust-cell">
            <strong>STRUCTURAL · FEA</strong>
            <strong>INTEGRITY · PMT</strong>
            <span>CORE COMPETENCE</span>
          </div>
        </div>

        <div className="trust-footer reveal">
          <p>
            RIIS is supported by professionally recognised engineering personnel
            with structural analysis, FEA and project delivery experience across
            complex engineering scopes.
          </p>
          <button className="text-link" onClick={() => { setCompetenceOpen(true); setCompetenceLayer("menu"); }}>
            Explore engineering competence <Arrow />
          </button>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">RELEVANT EXPERIENCE</p>
            <h2>Experience close to the problem.</h2>
          </div>
          <p>
            Selected experience families reflect the collective professional
            experience of the RIIS engineering team.
          </p>
        </div>

        <div className="experience-list">
          {Object.entries(experience).slice(0, 4).map(([key, item], index) => (
            <button
              className="experience-row reveal"
              key={key}
              onClick={() => {
                const related = solutions.find((solution) => solution.experience === key);
                if (related) {
                  setPanel(related.id);
                  setLayer("experience");
                }
              }}
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.tags}</small>
              </div>
              <Arrow />
            </button>
          ))}
        </div>

        <p className="experience-note reveal">
          Client and project identities are withheld where confidentiality applies.
        </p>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy reveal">
          <p className="eyebrow">START WITH A DISCUSSION</p>
          <h2>Have an engineering problem to solve?</h2>
          <p>
            Share a drawing, model, design basis, early-stage design idea or simply
            describe the problem. We can first discuss the scope, the engineering
            decision required and the appropriate level of assessment.
          </p>
          <div className="commercial-line">
            <span>01 SHARE THE PROBLEM</span>
            <span>02 DISCUSS THE SCOPE</span>
            <span>03 ALIGN THE ENGINEERING APPROACH & FEE</span>
          </div>
          <p className="fee-note">
            Scope-driven fee · Fee aligned to engineering effort and agreed
            deliverables · Initial discussion without obligation
          </p>
          <button className="button contact-button" onClick={() => setWhatsAppOpen(true)}>
            Discuss scope & fee <Arrow />
          </button>
        </div>
        <div className="contact-mark reveal" aria-hidden="true">
          <span>RIIS</span>
          <b>ENGINEERING CLARITY<br />FOR COMPLEX STRUCTURES.</b>
        </div>
      </section>

      <footer>
        <img src="/riis-navbar-master-transparent.png" alt="RIIS Engineering" />
        <p>Structural Engineering · FEA · PMT Support</p>
        <span>© 2026 RIIS Engineering</span>
      </footer>

      <button className="floating-whatsapp" onClick={() => setWhatsAppOpen(true)} aria-label="Discuss on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3a12 12 0 0 0-10.3 18.2L4 28l7-1.8A12 12 0 1 0 16 3Zm0 21.8c-1.9 0-3.7-.5-5.2-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4A9.7 9.7 0 1 1 16 24.8Zm5.3-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3.1 1 4.2.8.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" />
        </svg>
      </button>

      {panel && active && (
        <div className="drawer-shell" ref={panelRef}>
          <button className="drawer-backdrop" onClick={closeSolution} aria-label="Close panel" />
          <aside className="drawer">
            <div className="drawer-top">
              <button
                className="drawer-nav"
                onClick={() => layer === "overview" ? closeSolution() : setLayer("overview")}
              >
                {layer === "overview" ? "CLOSE" : "BACK"}
              </button>
              <span>{active.num} / {active.title.toUpperCase()}</span>
              <button className="drawer-close" onClick={closeSolution}>×</button>
            </div>

            {layer === "overview" && (
              <div className="drawer-content">
                <p className="eyebrow">YOUR ENGINEERING QUESTION</p>
                <h2>{active.question}</h2>
                <div className="question-list">
                  {active.questions.map((q) => <p key={q}>→ {q}</p>)}
                </div>
                <div className="drawer-actions">
                  <button onClick={() => setLayer("capability")}>How RIIS approaches this <Arrow /></button>
                  {active.id === "fea" && <button onClick={() => setLayer("rnd")}>Develop & optimise a design <Arrow /></button>}
                  <button onClick={() => setLayer("experience")}>View relevant experience <Arrow /></button>
                  <button className="commercial-action" onClick={() => setLayer("commercial")}>Discuss scope & fee <Arrow /></button>
                </div>
              </div>
            )}

            {layer === "capability" && (
              <div className="drawer-content">
                <p className="eyebrow">CAPABILITY & APPROACH</p>
                <h2>{active.title}</h2>
                <div className="capability-list">
                  {active.capability.map((item, index) => (
                    <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
                  ))}
                </div>
                <button className="method-link" onClick={() => setLayer("method")}>
                  View engineering method <Arrow />
                </button>
                <button className="method-link" onClick={() => setLayer("experience")}>
                  View relevant experience <Arrow />
                </button>
              </div>
            )}

            {layer === "method" && (
              <div className="drawer-content">
                <p className="eyebrow">ENGINEERING METHOD</p>
                <h2>From problem to decision.</h2>
                <div className="method-flow">
                  {active.method.map((item, index) => (
                    <div key={item}>
                      <span>0{index + 1}</span>
                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>
                <div className="technical-validation">
                  <div><span>TYPICAL TOOLS</span><b>{active.tools}</b></div>
                  <div><span>DESIGN BASIS EXPOSURE</span><b>{active.basis}</b></div>
                </div>
                <button className="method-link" onClick={() => setLayer("commercial")}>
                  Discuss the appropriate assessment level & fee <Arrow />
                </button>
              </div>
            )}

            {layer === "rnd" && active.id === "fea" && (
              <div className="drawer-content">
                <p className="eyebrow">SIMULATION-LED R&D</p>
                <h2>Use FEA to guide the next design decision.</h2>
                <p className="drawer-lead">Do not simulate just to produce a contour plot. Use simulation to understand behaviour, challenge assumptions and decide which design direction deserves the next iteration.</p>
                <div className="rnd-insight">
                  <p>What is the structure actually doing under load?</p>
                  <p>What changes when the geometry changes?</p>
                  <p>Where is material working — and where is it not?</p>
                  <p>Which design direction deserves the next iteration?</p>
                </div>
                <div className="method-flow">
                  {["Concept", "Simulate", "Understand", "Iterate", "Verify"].map((item, index) => (
                    <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
                  ))}
                </div>
                <div className="rnd-outcomes">
                  <div><span>UNDERSTAND BEHAVIOUR</span><p>Identify load paths, local response and governing behaviour.</p></div>
                  <div><span>COMPARE CONCEPTS</span><p>Evaluate structural response across design alternatives.</p></div>
                  <div><span>GUIDE ITERATION</span><p>Use simulation findings to inform geometry, stiffness and configuration.</p></div>
                  <div><span>VERIFY THE DIRECTION</span><p>Assess the developed design against the agreed engineering basis.</p></div>
                </div>
                <div className="rnd-commercial">
                  <p className="eyebrow">EARLY-STAGE IDEA OR EVOLVING DESIGN?</p>
                  <h3>A staged scope can align engineering effort and fee with design maturity.</h3>
                  <div><span>01 EXPLORE</span><span>02 SIMULATE</span><span>03 DEVELOP</span><span>04 VERIFY</span></div>
                </div>
                <button className="button drawer-whatsapp" onClick={() => setWhatsAppOpen(true)}>Discuss your design idea <Arrow /></button>
              </div>
            )}

            {layer === "experience" && activeExperience && (
              <div className="drawer-content">
                <p className="eyebrow">RELEVANT EXPERIENCE</p>
                <h2>{activeExperience.title}</h2>
                <p className="drawer-lead">{activeExperience.text}</p>
                <p className="experience-tags">{activeExperience.tags}</p>
                <div className="capability-list">
                  {activeExperience.detail.map((item, index) => (
                    <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
                  ))}
                </div>
                <p className="drawer-disclaimer">
                  Collective professional experience. Project and client identities
                  are withheld where confidentiality applies.
                </p>
                <button className="method-link" onClick={() => setLayer("method")}>
                  Explore engineering approach <Arrow />
                </button>
              </div>
            )}

            {layer === "commercial" && (
              <div className="drawer-content">
                <p className="eyebrow">ENGAGEMENT APPROACH</p>
                <h2>Scope first. Fee aligned to the engineering need.</h2>
                <p className="drawer-lead">
                  Engineering scopes vary in complexity, available information and
                  required deliverables. We review the problem first and discuss
                  the commercial approach before proceeding.
                </p>
                <div className="engagement-options">
                  <div>
                    <span>01</span>
                    <h3>Initial scope discussion</h3>
                    <p>A short discussion to understand the problem and available information.</p>
                    <b>WITHOUT OBLIGATION</b>
                  </div>
                  <div>
                    <span>02</span>
                    <h3>Defined-scope engineering</h3>
                    <p>For calculations, structural checks, FEA, reviews or defined deliverables.</p>
                    <b>FEE BASED ON AGREED SCOPE</b>
                  </div>
                  <div>
                    <span>03</span>
                    <h3>Flexible engineering support</h3>
                    <p>For evolving brownfield, PMT or progressive technical support needs.</p>
                    <b>ARRANGEMENT DISCUSSED TO SUIT SUPPORT</b>
                  </div>
                </div>
                <button className="button drawer-whatsapp" onClick={() => setWhatsAppOpen(true)}>
                  Discuss scope & fee on WhatsApp <Arrow />
                </button>
              </div>
            )}
          </aside>
        </div>
      )}

      {competenceOpen && (
        <div className="drawer-shell">
          <button className="drawer-backdrop" onClick={() => setCompetenceOpen(false)} aria-label="Close competence panel" />
          <aside className="drawer competence-drawer">
            <div className="drawer-top">
              <button
                className="drawer-nav"
                onClick={() => competenceLayer === "menu" ? setCompetenceOpen(false) : setCompetenceLayer("menu")}
              >
                {competenceLayer === "menu" ? "CLOSE" : "BACK"}
              </button>
              <span>ENGINEERING COMPETENCE</span>
              <button className="drawer-close" onClick={() => setCompetenceOpen(false)}>×</button>
            </div>

            {competenceLayer === "menu" && (
              <div className="drawer-content">
                <p className="eyebrow">WHY TRUST RIIS?</p>
                <h2>Professional standing. Technical depth. Delivery discipline.</h2>
                <div className="competence-menu">
                  <button onClick={() => setCompetenceLayer("standing")}><span>01</span><b>Professional standing</b><Arrow /></button>
                  <button onClick={() => setCompetenceLayer("technical")}><span>02</span><b>Technical capability</b><Arrow /></button>
                  <button onClick={() => setCompetenceLayer("tools")}><span>03</span><b>Methods, tools & design basis</b><Arrow /></button>
                </div>
              </div>
            )}

            {competenceLayer === "standing" && (
              <div className="drawer-content">
                <p className="eyebrow">PROFESSIONAL STANDING</p>
                <h2>Professionally recognised engineering and delivery competence.</h2>
                <div className="credential-list">
                  <div><strong>P.E.</strong><p>Professional Engineer</p><span>Board of Engineers Malaysia · BEM</span></div>
                  <div><strong>M.I.E.M.</strong><p>Corporate Member</p><span>The Institution of Engineers, Malaysia · IEM</span></div>
                  <div><strong>Ts.</strong><p>Professional Technologist</p><span>Malaysia Board of Technologists · MBOT</span></div>
                  <div><strong>PMP®</strong><p>Project Management Professional</p><span>Project Management Institute · PMI</span></div>
                </div>
              </div>
            )}

            {competenceLayer === "technical" && (
              <div className="drawer-content">
                <p className="eyebrow">TECHNICAL CAPABILITY</p>
                <h2>Structural depth across complex engineering scopes.</h2>
                <div className="technical-groups">
                  <div><span>STRUCTURAL</span><p>Global analysis · Reassessment · Modification · Supports · Strengthening</p></div>
                  <div><span>FEA & DESIGN DEVELOPMENT</span><p>Simulation · Local response · R&D · Design iteration · Optimisation · Nonlinear · Contact</p></div>
                  <div><span>INTEGRITY</span><p>Anomaly assessment · Life extension · Fitness-for-purpose · Repair concepts</p></div>
                  <div><span>DELIVERY</span><p>Brownfield · Marine operations · Technical assurance · PMT support</p></div>
                </div>
              </div>
            )}

            {competenceLayer === "tools" && (
              <div className="drawer-content">
                <p className="eyebrow">TECHNICAL VALIDATION LAYER</p>
                <h2>Tools and standards support the method — they do not replace engineering judgement.</h2>
                <div className="technical-groups">
                  <div><span>STRUCTURAL ANALYSIS</span><p>SACS Connect</p></div>
                  <div><span>FINITE ELEMENT ANALYSIS</span><p>Abaqus</p></div>
                  <div><span>ENGINEERING CALCULATION</span><p>Mathcad</p></div>
                  <div><span>DESIGN & REVIEW</span><p>AutoCAD · Inventor · Navisworks</p></div>
                  <div><span>DESIGN BASIS EXPOSURE</span><p>API · AISC · ISO · DNV · AWS</p></div>
                </div>
                <p className="drawer-disclaimer">
                  Applicable codes, standards, tools and assessment level are selected
                  to suit the agreed scope and engineering decision required.
                </p>
              </div>
            )}
          </aside>
        </div>
      )}

      {whatsAppOpen && (
        <div className="whatsapp-modal">
          <button className="whatsapp-backdrop" onClick={() => setWhatsAppOpen(false)} aria-label="Close WhatsApp options" />
          <div className="whatsapp-card">
            <button className="whatsapp-close" onClick={() => setWhatsAppOpen(false)}>×</button>
            <p className="eyebrow">DISCUSS SCOPE & FEE</p>
            <h2>Choose an Engineering Desk.</h2>
            <p>
              Initial scope discussion is without obligation. Share the problem,
              available information and the engineering decision you need to make.
            </p>
            <a href={whatsappUrl("60178041235")} target="_blank" rel="noreferrer">
              <span>ENGINEERING DESK A</span><b>WhatsApp +60 17-804 1235</b><Arrow />
            </a>
            <a href={whatsappUrl("601119788718")} target="_blank" rel="noreferrer">
              <span>ENGINEERING DESK B</span><b>WhatsApp +60 11-1978 8718</b><Arrow />
            </a>
            <small>SCOPE-DRIVEN · CONFIDENTIAL DISCUSSION · FEE ALIGNED TO AGREED ENGINEERING EFFORT</small>
          </div>
        </div>
      )}
    </main>
  );
}
