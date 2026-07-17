"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  ["01","Buildings & Structures","Safe. Functional. Built to last.","Structural design and assessment for buildings, facilities and load-bearing systems.","/onshore-buildings.jpg"],
  ["02","Infrastructure & Earthworks","Strong infrastructure. Sustainable communities.","Infrastructure works, earthworks and development support.","/onshore-infrastructure.jpg"],
  ["03","Drainage & Temporary Works","Plan today. Perform tomorrow.","Drainage solutions, temporary works and practical construction support.","/onshore-drainage.jpg"],
];

const experience = [
  ["Commercial Buildings","Structural design · Analysis · Constructability","/onshore-project1.jpg"],
  ["Infrastructure Works","Roads · Bridges · Utilities","/onshore-project2.jpg"],
  ["Drainage & Earthworks","Drainage systems · Earthworks · Site development","/onshore-project3.jpg"],
  ["Temporary Works & Construction Support","Temporary structures · Installation · Site support","/onshore-project4.jpg"],
];

export default function OnshorePage(){
  const scope = useRef(null);
  const [contactOpen,setContactOpen] = useState(false);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const ctx=gsap.context(()=>{
      gsap.from(".onshore-hero-copy > *",{opacity:0,y:30,duration:.9,stagger:.08,ease:"power3.out"});
      gsap.utils.toArray(".onshore-reveal").forEach(el=>gsap.from(el,{opacity:0,y:36,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 86%"}}));
    },scope);
    return()=>ctx.revert();
  },[]);

  return <main className="onshore-page" ref={scope}>
    <nav className="onshore-nav">
      <a href="/" className="onshore-brand"><strong>RIIS</strong><span>ENGINEERING</span></a>
      <div><a href="#services">Expertise</a><a href="#experience">Experience</a><a href="#credentials">About RIIS</a><a href="#contact">Contact</a></div>
      <button onClick={()=>setContactOpen(true)}>TALK TO RIIS →</button>
    </nav>

    <section className="onshore-hero">
      <img src="/onshore-hero.jpg" alt="Civil engineering and infrastructure" />
      <div className="onshore-hero-shade" />
      <div className="onshore-hero-copy">
        <p>CIVIL ENGINEERING · INFRASTRUCTURE · PROJECT SUPPORT</p>
        <h1>ENGINEERING<br/>FOUNDATIONS<br/>FOR A BETTER<br/>TOMORROW<span>.</span></h1>
        <small>Civil engineering solutions for buildings, infrastructure and onshore developments.</small>
        <div><a href="#services">EXPLORE OUR EXPERTISE →</a><button onClick={()=>setContactOpen(true)}>TALK TO RIIS →</button></div>
      </div>
    </section>

    <section className="onshore-services" id="services">
      {services.map(([n,label,title,copy,image])=><article className="onshore-service onshore-reveal" key={n}>
        <img src={image} alt="" />
        <div className="onshore-service-shade" />
        <span>{n}</span><small>{label}</small><h2>{title}</h2><p>{copy}</p><b>EXPLORE →</b>
      </article>)}
    </section>

    <section className="onshore-why onshore-section" id="credentials">
      <div className="onshore-why-copy onshore-reveal">
        <p>WHY RIIS</p><h2>Because engineering decisions have consequences.</h2>
        <span>We bring engineering judgement, professional accountability and practical delivery experience to each engagement.</span>
      </div>
      <div className="onshore-credentials onshore-reveal">
        <div><strong>20+</strong><span>YEARS COLLECTIVE EXPERIENCE</span></div>
        <div><strong>BEM</strong><span>PROFESSIONAL ENGINEER</span></div>
        <div><strong>IEM</strong><span>CORPORATE MEMBER</span></div>
        <div><strong>MBOT</strong><span>PROFESSIONAL TECHNOLOGIST</span></div>
        <div><strong>PMI</strong><span>PROJECT MANAGEMENT PROFESSIONAL</span></div>
      </div>
      <div className="onshore-sectors"><span>BUILDINGS</span><span>INFRASTRUCTURE</span><span>DRAINAGE</span><span>EARTHWORKS</span><span>TEMPORARY WORKS</span><span>CIVIL DESIGN</span></div>
    </section>

    <section className="onshore-experience onshore-section" id="experience">
      <div className="onshore-section-head onshore-reveal"><p>SELECTED PROFESSIONAL EXPERIENCE</p><h2>Delivering value on the ground.</h2></div>
      <div className="onshore-projects">
        {experience.map(([title,sub,image],i)=><article className="onshore-project onshore-reveal" key={title}>
          <img src={image} alt="" /><div/><span>0{i+1}</span><h3>{title}</h3><p>{sub}</p><b>→</b>
        </article>)}
      </div>
      <p className="onshore-note">SELECTED PROFESSIONAL EXPERIENCE · CLIENT AND PROJECT IDENTITIES WITHHELD WHERE CONFIDENTIALITY APPLIES.</p>
    </section>

    <section className="onshore-tools onshore-section">
      <p>TOOLS & DESIGN BASIS</p>
      <div><span>AutoCAD</span><span>STAAD.Pro</span><span>ETABS</span><span>SAP2000</span><span>Tekla</span><span>BS / EN</span><span>Eurocodes</span><span>CIDB</span></div>
    </section>

    <section className="onshore-contact" id="contact">
      <div><p>HAVE A PROJECT IN MIND?</p><h2>Bring us the civil engineering challenge.</h2><span>Share the available information, required decision and expected deliverable.</span><button onClick={()=>setContactOpen(true)}>START A DISCUSSION →</button></div>
      <img src="/gateway-onshore.jpg" alt="Civil and infrastructure project" />
    </section>

    <footer className="onshore-footer"><a href="/">RIIS ENGINEERING</a><p>Civil Engineering · Infrastructure · Project Support</p><span>© 2026 RIIS Engineering</span></footer>

    {contactOpen && <div className="onshore-modal">
      <button className="onshore-backdrop" onClick={()=>setContactOpen(false)} />
      <div className="onshore-contact-card">
        <button className="onshore-close" onClick={()=>setContactOpen(false)}>×</button>
        <p>START A CIVIL ENGINEERING DISCUSSION</p>
        <h2>Share the onshore engineering need.</h2>
        <a href="https://wa.me/601119788718?text=Hi%20RIIS%20Engineering%2C%20I%20would%20like%20to%20discuss%20a%20civil%20or%20onshore%20engineering%20scope." target="_blank" rel="noreferrer">CIVIL & INFRASTRUCTURE <span>→</span></a>
        <a href="mailto:info@riis.engineering">EMAIL THE PROJECT BRIEF <span>→</span></a>
        <small>CONFIDENTIAL · INITIAL DISCUSSION WITHOUT OBLIGATION · SCOPE-DRIVEN FEE</small>
      </div>
    </div>}
  </main>
}
