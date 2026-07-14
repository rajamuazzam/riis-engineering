"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const expertise = [
  ["01", "Structural Engineering", "Design, assessment and verification of load-bearing structures from concept through detailed engineering and modification."],
  ["02", "Finite Element Analysis", "Advanced numerical assessment for local stress, complex geometry, nonlinear behaviour and design optimisation."],
  ["03", "Structural Integrity", "Fitness-for-purpose thinking, anomaly assessment, strengthening concepts and practical life-extension support."],
  ["04", "Offshore & Subsea", "Engineering experience across fixed offshore facilities, subsea structures, brownfield interfaces and deepwater development."],
  ["05", "Marine Operations", "Structural support for lifting, transportation, installation, temporary conditions and construction sequencing."],
  ["06", "Independent Technical Review", "Focused review of design basis, calculations, models, drawings and engineering deliverables."],
  ["07", "Brownfield Engineering", "Modification studies, local checks, constructability and integration with operating facilities."],
  ["08", "PMT Support", "Senior structural engineering input to project management teams, technical evaluation, assurance and delivery governance."],
];

const experience = [
  "Concept, feasibility, FEED and detailed engineering",
  "Fixed offshore platforms and brownfield modifications",
  "Subsea structures and deepwater engineering",
  "In-place analysis, local checks and code verification",
  "Structural integrity, anomaly assessment and strengthening",
  "Lifting, transportation and installation engineering",
  "Equipment skids, supports and load-bearing systems",
  "Constructability, technical evaluation and multidisciplinary interfaces",
];

const workflow = [
  ["01", "DEFINE", "Clarify the problem, load path, interfaces and acceptance criteria."],
  ["02", "MODEL", "Build the right level of representation for the engineering decision."],
  ["03", "ANALYSE", "Evaluate global and local response using appropriate analytical methods."],
  ["04", "VERIFY", "Check assumptions, codes, sensitivities and practical constructability."],
  ["05", "DELIVER", "Communicate clear conclusions, risks and actionable engineering outputs."],
];

const capabilities = [
  "SACS", "Abaqus", "STAAD.Pro", "AutoCAD", "Navisworks", "Autodesk Inventor",
  "API RP 2A", "AISC", "ISO 19901", "DNV", "AWS D1.1", "BS / EN"
];

export default function Home() {
  const scope = useRef(null);
  const canvasRef = useRef(null);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils.toArray(".animate-in").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 34, opacity: 0.45 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      gsap.utils.toArray(".workflow-step").forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0.35 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: step,
              start: "top 78%",
              end: "bottom 52%",
              scrub: true,
            },
          }
        );
      });

      gsap.to(".mesh-panel", {
        rotateY: 14,
        rotateX: -5,
        scale: 1.05,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, scope);

    const canvas = canvasRef.current;
    const c = canvas?.getContext("2d");
    let raf;
    let nodes = [];

    if (!canvas || !c) return () => ctx.revert();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({ length: 44 }, (_, i) => ({
        x: (i % 8) / 7 * canvas.clientWidth,
        y: Math.floor(i / 8) / 5 * canvas.clientHeight,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t = 0) => {
      c.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      nodes.forEach((n, i) => {
        const x = n.x + Math.sin(t * 0.00055 + n.phase) * 10;
        const y = n.y + Math.cos(t * 0.00045 + n.phase) * 8;
        n.dx = x;
        n.dy = y;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          if (m.dx === undefined) continue;
          const d = Math.hypot(x - m.dx, y - m.dy);
          if (d < 155) {
            c.strokeStyle = `rgba(93,154,255,${0.22 * (1 - d / 155)})`;
            c.lineWidth = 0.8;
            c.beginPath();
            c.moveTo(x, y);
            c.lineTo(m.dx, m.dy);
            c.stroke();
          }
        }

        const grad = c.createRadialGradient(x, y, 0, x, y, 16);
        grad.addColorStop(0, "rgba(255,126,61,.95)");
        grad.addColorStop(0.28, "rgba(96,154,255,.58)");
        grad.addColorStop(1, "rgba(96,154,255,0)");
        c.fillStyle = grad;
        c.beginPath();
        c.arc(x, y, 16, 0, Math.PI * 2);
        c.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      ctx.revert();
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hi RIIS Engineering, I would like to discuss an engineering requirement."
  );

  return (
    <main ref={scope}>
      <nav className="nav">
        <a className="brand-logo" href="#home" aria-label="RIIS Engineering home">
          <img src="/riis-mark-transparent.png" alt="RIIS Engineering" />
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#engagements">Engagements</a>
          <a href="#contact" className="nav-cta">Discuss a project</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-grid" />
        <div className="hero-content">
          <p className="eyebrow hero-animate">STRUCTURAL ENGINEERING · FEA · PMT SUPPORT</p>
          <h1 className="hero-title hero-animate">Engineering clarity<br />for complex structures.</h1>
          <p className="hero-copy hero-animate">
            RIIS brings focused structural engineering, advanced analysis and practical
            project support to challenging load-bearing systems and offshore environments.
          </p>
          <div className="hero-actions hero-animate">
            <a href="#expertise" className="button primary">Explore our expertise</a>
            <button className="button ghost" onClick={() => setWhatsAppOpen(true)}>
              Discuss via WhatsApp
            </button>
          </div>
        </div>

        <div className="mesh-panel" aria-hidden="true">
          <div className="mesh-caption"><span>01</span> STRUCTURE → MESH → RESPONSE</div>
          <div className="mesh-core">
            {Array.from({ length: 11 }).map((_, i) => <i key={i} />)}
          </div>
        </div>

        <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro section">
        <div className="section-label">ABOUT RIIS</div>
        <div className="intro-copy animate-in">
          <h2>Senior engineering thinking. Direct, focused delivery.</h2>
          <p>
            RIIS is a specialist engineering practice supported by experienced structural
            engineering professionals with broad exposure across offshore, subsea, marine,
            brownfield and industrial projects.
          </p>
        </div>
        <div className="intro-note animate-in">
          <span>TEAM-BASED EXPERIENCE</span>
          <p>
            Public capability is presented collectively. Individual credentials can be
            shared privately where required.
          </p>
        </div>
      </section>

      <section id="expertise" className="services section">
        <div className="section-heading animate-in">
          <div>
            <p className="eyebrow">OUR EXPERTISE</p>
            <h2>From global behaviour<br />to local detail.</h2>
          </div>
          <p>
            Engineering support shaped around the actual decision, risk and load path—not
            unnecessary complexity.
          </p>
        </div>
        <div className="service-grid">
          {expertise.map(([n, t, d]) => (
            <article className="service-card animate-in" key={n}>
              <span className="service-num">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section section">
        <div className="section-heading animate-in">
          <div>
            <p className="eyebrow">ENGINEERING WORKFLOW</p>
            <h2>Define. Model. Analyse. Verify. Deliver.</h2>
          </div>
          <p>A clear engineering path from problem definition to actionable output.</p>
        </div>

        <div className="workflow-grid">
          {workflow.map(([n, title, description]) => (
            <article className="workflow-step" key={n}>
              <span>{n}</span>
              <div className="workflow-node" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience section">
        <div className="section-heading animate-in">
          <div>
            <p className="eyebrow">SELECTED TEAM EXPERIENCE</p>
            <h2>Experience behind<br />the capability.</h2>
          </div>
          <p>
            This represents the collective professional experience of the engineering team
            and is not presented as a claim that every project was contracted to RIIS.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item, i) => (
            <div className="experience-item animate-in" key={item}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="engagements" className="engagements section">
        <div className="section-heading animate-in">
          <div>
            <p className="eyebrow">CURRENT ENGAGEMENTS</p>
            <h2>Active work.<br />Discreet by design.</h2>
          </div>
          <p>
            Only RIIS-contracted work belongs here. Client and project identities can remain
            confidential unless disclosure is authorised.
          </p>
        </div>

        <div className="engagement-grid">
          <article className="engagement-card animate-in">
            <div className="status"><i /> IN PROGRESS</div>
            <span className="type">CONFIDENTIAL ENGAGEMENT</span>
            <h3>Structural Assessment</h3>
            <p>Independent assessment and engineering verification for a load-bearing system.</p>
          </article>
          <article className="engagement-card animate-in">
            <div className="status muted"><i /> AVAILABLE SLOT</div>
            <span className="type">NEXT ENGAGEMENT</span>
            <h3>Engineering Support</h3>
            <p>Discuss the structural problem, available data and required decision with RIIS.</p>
          </article>
        </div>
        <p className="disclaimer">Current engagement content must remain limited to verified RIIS work.</p>
      </section>

      <section className="capabilities section">
        <div className="section-heading animate-in">
          <div>
            <p className="eyebrow">TECHNICAL CAPABILITY</p>
            <h2>Tools support judgement.<br />They do not replace it.</h2>
          </div>
        </div>
        <div className="capability-cloud animate-in">
          {capabilities.map((x) => <span key={x}>{x}</span>)}
        </div>
      </section>

      <section className="codes-ticker" aria-label="Engineering codes and standards experience">
        <div className="ticker-track">
          <span>API RP 2A</span><b>·</b><span>AISC</span><b>·</b>
          <span>ISO 19901</span><b>·</b><span>DNV</span><b>·</b>
          <span>AWS D1.1</span><b>·</b><span>BS / EN 1993</span><b>·</b>
          <span>API RP 2A</span><b>·</b><span>AISC</span><b>·</b>
          <span>ISO 19901</span><b>·</b><span>DNV</span><b>·</b>
          <span>AWS D1.1</span><b>·</b><span>BS / EN 1993</span><b>·</b>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-inner animate-in">
          <p className="eyebrow">CONFIDENTIAL ENQUIRY</p>
          <h2>Bring us the engineering challenge.</h2>
          <p>
            Share the problem, available data and required decision. NDA-based discussions
            can be arranged prior to detailed technical data exchange.
          </p>
          <div className="contact-actions">
            <a href="mailto:info@riis.engineering" className="button primary">
              info@riis.engineering
            </a>
            <button className="button ghost" onClick={() => setWhatsAppOpen(true)}>
              Discuss via WhatsApp
            </button>
          </div>

          <div className="contact-footer">
            <p>Structural Engineering · Finite Element Analysis · PMT Support</p>
            <span>© {new Date().getFullYear()} RIIS Engineering</span>
          </div>
        </div>
      </section>

      <button
        className="whatsapp-float"
        onClick={() => setWhatsAppOpen((open) => !open)}
        aria-label="Discuss with RIIS on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="whatsapp-icon"
        >
          <path
            fill="currentColor"
            d="M16.04 3.2A12.67 12.67 0 0 0 5.3 22.6L3.6 28.8l6.35-1.66a12.7 12.7 0 1 0 6.09-23.94Zm0 22.95a10.5 10.5 0 0 1-5.35-1.47l-.38-.23-3.77.99 1-3.67-.25-.38a10.48 10.48 0 1 1 8.75 4.76Zm5.75-7.86c-.31-.16-1.86-.92-2.15-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55a9.42 9.42 0 0 1-1.74-2.17c-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.67.76.24 1.44.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z"
          />
        </svg>
      </button>

      {whatsAppOpen && (
        <div className="whatsapp-panel" role="dialog" aria-modal="true" aria-label="Discuss with RIIS">
          <button className="panel-close" onClick={() => setWhatsAppOpen(false)} aria-label="Close">
            ×
          </button>
          <p className="eyebrow">DISCUSS WITH RIIS</p>
          <h3>Select an engineering desk.</h3>
          <p>Continue an initial engineering discussion through WhatsApp.</p>

          <a
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/60178041235?text=${whatsappMessage}`}
          >
            <span>01</span><strong>Engineering Desk 01</strong><b>↗</b>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/601119788718?text=${whatsappMessage}`}
          >
            <span>02</span><strong>Engineering Desk 02</strong><b>↗</b>
          </a>
        </div>
      )}
</main>
  );
}
