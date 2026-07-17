"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const expertise = [
["01","Structural Engineering","Design, assessment and verification of load-bearing structures from concept through detailed engineering and modification."],
["02","Finite Element Analysis","Advanced numerical assessment for local stress, complex geometry, nonlinear behaviour and design optimisation."],
["03","Structural Integrity","Fitness-for-purpose thinking, anomaly assessment, strengthening concepts and practical life-extension support."],
["04","Offshore & Subsea","Engineering experience across fixed offshore facilities, subsea structures, brownfield interfaces and deepwater development."],
["05","Marine Operations","Structural support for lifting, transportation, installation, temporary conditions and construction sequencing."],
["06","Independent Technical Review","Focused review of design basis, calculations, models, drawings and engineering deliverables."],
["07","Brownfield Engineering","Modification studies, local checks, constructability and integration with operating facilities."],
["08","PMT Support","Senior structural engineering input to project management teams, technical evaluation, assurance and delivery governance."]
];
const experience=["Concept, feasibility, FEED and detailed engineering","Fixed offshore platforms and brownfield modifications","Subsea structures and deepwater engineering","In-place analysis, local checks and code verification","Structural integrity, anomaly assessment and strengthening","Lifting, transportation and installation engineering","Equipment skids, supports and load-bearing systems","Constructability, technical evaluation and multidisciplinary interfaces"];
const capabilities=["SACS","Abaqus","STAAD.Pro","AutoCAD","Navisworks","Autodesk Inventor","API RP 2A","AISC","ISO 19901","DNV","AWS D1.1","BS / EN"];

export default function Home(){
 const scope=useRef(null); const canvasRef=useRef(null); const [whatsAppOpen,setWhatsAppOpen]=useState(false);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
   gsap.from(".hero-kicker, .hero-title span, .hero-copy, .hero-actions",{y:34,opacity:0,duration:1.05,stagger:.1,ease:"power3.out"});
   gsap.utils.toArray(".reveal").forEach(el=>gsap.from(el,{y:58,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 84%"}}));
   gsap.utils.toArray(".service-card").forEach((card,i)=>gsap.from(card,{y:70,opacity:0,duration:.8,delay:(i%4)*.06,scrollTrigger:{trigger:card,start:"top 88%"}}));
   const steps=gsap.utils.toArray(".workflow-step");
   const tl=gsap.timeline({scrollTrigger:{trigger:".workflow-pin",start:"top top",end:"+=2400",scrub:1,pin:true}});
   steps.forEach((step,i)=>{tl.to(".workflow-progress",{width:`${(i+1)*20}%`,ease:"none"},i).to(step,{opacity:1,y:0,scale:1},i).to(step,{opacity:i===steps.length-1?1:.22},i+.75)});
   gsap.to(".mesh-panel",{rotateY:18,rotateX:-7,scale:1.08,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
  },scope);
  const canvas=canvasRef.current,c=canvas.getContext("2d"); let raf,nodes=[];
  const resize=()=>{const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=canvas.clientWidth*dpr;canvas.height=canvas.clientHeight*dpr;c.setTransform(dpr,0,0,dpr,0,0);nodes=Array.from({length:44},(_,i)=>({x:(i%8)/7*canvas.clientWidth,y:Math.floor(i/8)/5*canvas.clientHeight,phase:Math.random()*Math.PI*2}))};
  const draw=(t=0)=>{c.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);nodes.forEach((n,i)=>{const x=n.x+Math.sin(t*.00055+n.phase)*10,y=n.y+Math.cos(t*.00045+n.phase)*8;n.dx=x;n.dy=y;for(let j=i+1;j<nodes.length;j++){const m=nodes[j];if(m.dx===undefined)continue;const d=Math.hypot(x-m.dx,y-m.dy);if(d<155){c.strokeStyle=`rgba(93,154,255,${.22*(1-d/155)})`;c.lineWidth=.8;c.beginPath();c.moveTo(x,y);c.lineTo(m.dx,m.dy);c.stroke()}}const grad=c.createRadialGradient(x,y,0,x,y,16);grad.addColorStop(0,"rgba(255,126,61,.95)");grad.addColorStop(.28,"rgba(96,154,255,.58)");grad.addColorStop(1,"rgba(96,154,255,0)");c.fillStyle=grad;c.beginPath();c.arc(x,y,16,0,Math.PI*2);c.fill()});raf=requestAnimationFrame(draw)};
  resize();draw();window.addEventListener("resize",resize);return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);ctx.revert()}
 },[]);
 return <main ref={scope}>
  <nav className="nav"><a className="brand" href="/"><span className="brand-mark">R</span><span>RIIS <b>ENGINEERING</b></span></a><div className="nav-links"><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#engagements">Engagements</a><a href="#contact" className="nav-cta">Discuss a project</a></div></nav>
  <section id="home" className="hero section"><canvas ref={canvasRef} className="hero-canvas"/><div className="hero-grid"/><div className="hero-content"><p className="eyebrow hero-kicker">STRUCTURAL ENGINEERING · FEA · PMT SUPPORT</p><h1 className="hero-title"><span>Engineering clarity</span><span>for complex structures.</span></h1><p className="hero-copy">RIIS brings focused structural engineering, advanced analysis and practical project support to challenging load-bearing systems and offshore environments.</p><div className="hero-actions"><a href="#expertise" className="button primary">Explore our expertise</a><button className="button ghost" onClick={() => setWhatsAppOpen(true)}>Discuss via WhatsApp</button></div></div><div className="mesh-panel"><div className="mesh-caption"><span>01</span> STRUCTURE → MESH → RESPONSE</div><div className="mesh-core">{Array.from({length:11}).map((_,i)=><i key={i}/>)}</div></div><div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div></section>
  <section className="intro section"><div className="section-label">ABOUT RIIS</div><div className="intro-copy reveal"><h2>Senior engineering thinking. Direct, focused delivery.</h2><p>RIIS is a specialist engineering practice supported by experienced structural engineering professionals with broad exposure across offshore, subsea, marine, brownfield and industrial projects.</p></div><div className="intro-note reveal"><span>TEAM-BASED EXPERIENCE</span><p>Public capability is presented collectively. Individual credentials can be shared privately where required.</p></div></section>
  <section id="expertise" className="services section"><div className="section-heading reveal"><div><p className="eyebrow">OUR EXPERTISE</p><h2>From global behaviour<br/>to local detail.</h2></div><p>Engineering support shaped around the actual decision, risk and load path—not unnecessary complexity.</p></div><div className="service-grid">{expertise.map(([n,t,d])=><article className="service-card" key={n}><span className="service-num">{n}</span><h3>{t}</h3><p>{d}</p><span className="card-arrow">↗</span></article>)}</div></section>
  <section className="workflow-pin"><div className="workflow-wrap"><p className="eyebrow">ENGINEERING WORKFLOW</p><h2>Define. Model. Analyse. Verify. Deliver.</h2><div className="workflow-line"><div className="workflow-progress"/></div><div className="workflow-steps">{["DEFINE","MODEL","ANALYSE","VERIFY","DELIVER"].map((s,i)=><div className="workflow-step" key={s}><span>0{i+1}</span><strong>{s}</strong><p>{["Clarify the problem, load path, interfaces and acceptance criteria.","Build the right level of representation for the engineering decision.","Evaluate global and local response using appropriate analytical methods.","Check assumptions, codes, sensitivities and practical constructability.","Communicate clear conclusions, risks and actionable engineering outputs."][i]}</p></div>)}</div></div></section>
  <section id="experience" className="experience section"><div className="section-heading reveal"><div><p className="eyebrow">SELECTED TEAM EXPERIENCE</p><h2>Experience behind<br/>the capability.</h2></div><p>This section represents the collective professional experience of the engineering team and is not presented as a claim that every project was contracted to RIIS.</p></div><div className="experience-layout"><div className="experience-visual reveal"><div className="orbit"><span>STRUCTURE</span><span>FEA</span><span>INTEGRITY</span></div><div className="experience-center">RIIS</div></div><div className="experience-list">{experience.map((x,i)=><div className="experience-item reveal" key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p></div>)}</div></div></section>
  <section id="engagements" className="engagements section"><div className="section-heading reveal"><div><p className="eyebrow">CURRENT ENGAGEMENTS</p><h2>Active work.<br/>Discreet by design.</h2></div><p>Only RIIS-contracted work belongs here. Client and project identities can remain confidential unless disclosure is authorised.</p></div><div className="engagement-grid"><article className="engagement-card reveal"><div className="status"><i/> IN PROGRESS</div><span className="type">CONFIDENTIAL ENGAGEMENT</span><h3>Structural Assessment</h3><p>Independent assessment and engineering verification for a load-bearing system.</p></article><article className="engagement-card reveal"><div className="status muted"><i/> AVAILABLE SLOT</div><span className="type">NEXT ENGAGEMENT</span><h3>Engineering Support</h3><p>This card is ready to be replaced with the next verified RIIS engagement.</p></article></div><p className="disclaimer reveal">Placeholder content above should be replaced only with verified RIIS projects.</p></section>
  <section className="capabilities section"><div className="section-heading reveal"><div><p className="eyebrow">TECHNICAL CAPABILITY</p><h2>Tools support judgement.<br/>They do not replace it.</h2></div></div><div className="capability-cloud reveal">{capabilities.map(x=><span key={x}>{x}</span>)}</div></section>
  <section id="contact" className="contact section"><div className="contact-inner reveal"><p className="eyebrow">CONFIDENTIAL ENQUIRY</p><h2>Bring us the engineering challenge.</h2><p>Share the problem, available data and required decision. NDA-based discussions can be arranged prior to detailed technical data exchange.</p><div className="contact-actions">
            <a href="mailto:info@riis.engineering" className="button primary">info@riis.engineering</a>
            <button className="button ghost" onClick={() => setWhatsAppOpen(true)}>Discuss via WhatsApp</button>
          </div></div></section>
  {whatsAppOpen && <div className="whatsapp-panel">
    <button className="panel-close" onClick={()=>setWhatsAppOpen(false)}>×</button>
    <p className="eyebrow">CHOOSE AN ENGINEERING DESK</p>
    <h3>Discuss the engineering need.</h3>
    <p>Initial discussion is confidential and without obligation. Fee is aligned to the agreed scope.</p>
    <a href="https://wa.me/60178041235?text=Hi%20RIIS%20Engineering%2C%20I%20would%20like%20to%20discuss%20an%20offshore%20structural%20or%20FEA%20scope." target="_blank" rel="noreferrer"><span>01</span><strong>STRUCTURAL & FEA</strong><b>→</b></a>
    <a href="https://wa.me/601119788718?text=Hi%20RIIS%20Engineering%2C%20I%20would%20like%20to%20discuss%20offshore%20project%20management%20or%20technical%20support." target="_blank" rel="noreferrer"><span>02</span><strong>PROJECT & TECHNICAL</strong><b>→</b></a>
  </div>}
  <button className="whatsapp-float" onClick={()=>setWhatsAppOpen(v=>!v)}>WA</button>
  <footer><div className="brand"><span className="brand-mark">R</span><span>RIIS <b>ENGINEERING</b></span></div><p>Structural Engineering · Finite Element Analysis · PMT Support</p><span>© 2026 RIIS Engineering</span></footer>
 </main>
}
