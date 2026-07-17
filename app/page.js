"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Gateway() {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gateway-head > *", { opacity: 0, y: 24, duration: .9, stagger: .08, ease: "power3.out" });
      gsap.from(".industry-card", { opacity: 0, y: 38, duration: 1, stagger: .14, ease: "power3.out", delay: .25 });
      gsap.from(".gateway-proof > *", { opacity: 0, y: 18, duration: .7, stagger: .05, delay: .7 });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <main className="gateway-page" ref={scope}>
      <header className="gateway-header">
        <a href="/" className="gateway-brand">
          <strong>RIIS</strong><span>ENGINEERING</span>
        </a>
        <div className="gateway-positioning">
          <b>INDEPENDENT ENGINEERING SOLUTIONS</b>
          <span>STRUCTURAL · FEA / R&D · PMT · CIVIL</span>
        </div>
      </header>

      <section className="gateway-main">
        <div className="gateway-head">
          <h1>CHOOSE <span>YOUR</span> ENGINEERING ENVIRONMENT</h1>
          <i />
          <p>Specialised expertise. Tailored solutions. Measurable results.</p>
        </div>

        <div className="industry-grid">
          <a href="/offshore/" className="industry-card offshore-card">
            <img src="/gateway-offshore.jpg" alt="Offshore platform finite element mesh" />
            <div className="industry-shade" />
            <div className="industry-content">
              <div className="industry-icon">⌁</div>
              <h2>OFFSHORE<br/>ENERGY</h2>
              <p>Structural engineering and analysis for offshore assets and marine structures.</p>
              <ul>
                <li>Platforms & Jackets</li>
                <li>Brownfield & Life Extension</li>
                <li>Structural Integrity</li>
                <li>FEA & Advanced Analysis</li>
                <li>Subsea Structures</li>
                <li>Project Management Support</li>
              </ul>
              <span className="gateway-button">ENTER OFFSHORE <b>→</b></span>
            </div>
          </a>

          <div className="or-badge">OR</div>

          <a href="/onshore/" className="industry-card onshore-card">
            <img src="/gateway-onshore.jpg" alt="Civil infrastructure and building construction" />
            <div className="industry-shade" />
            <div className="industry-content">
              <div className="industry-icon">▥</div>
              <h2>CIVIL &<br/>INFRASTRUCTURE</h2>
              <p>Civil engineering solutions for buildings, infrastructure and onshore developments.</p>
              <ul>
                <li>Buildings & Structures</li>
                <li>Infrastructure Works</li>
                <li>Drainage & Earthworks</li>
                <li>Temporary Works</li>
                <li>Design & Analysis</li>
                <li>Construction Support</li>
              </ul>
              <span className="gateway-button">ENTER ONSHORE <b>→</b></span>
            </div>
          </a>
        </div>

        <div className="gateway-proof">
          <div className="years"><strong>20+</strong><span>YEARS<br/>COLLECTIVE EXPERIENCE</span></div>
          <div><strong>BEM</strong><span>PROFESSIONAL ENGINEER</span></div>
          <div><strong>IEM</strong><span>CORPORATE MEMBER</span></div>
          <div><strong>MBOT</strong><span>PROFESSIONAL TECHNOLOGIST</span></div>
          <div><strong>PMI</strong><span>PMP® PROJECT MANAGEMENT</span></div>
        </div>
      </section>

      <footer className="gateway-footer">
        <div><b>RIIS ENGINEERING</b><span>Engineering clarity for complex structures.</span></div>
        <p>© 2026 RIIS Engineering. All rights reserved.</p>
        <nav><a href="/offshore/">OFFSHORE</a><a href="/onshore/">ONSHORE</a></nav>
      </footer>
    </main>
  );
}
