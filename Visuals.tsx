import type { Metadata } from "next";
import {
  CheckIcon,
  FileIcon,
  PmtIcon,
  RiskIcon,
  TargetIcon,
} from "../../components/riis/Icons";
import { PmtVisual } from "../../components/riis/Visuals";
import { ContactPanel, CredentialBand, PageFrame } from "../../components/riis/RiisShell";
import styles from "../../components/riis/riis.module.css";

export const metadata: Metadata = {
  title: "PMP-led Project Management Team Support | RIIS",
  description:
    "PMP-led PMT support for engineering projects: scope, schedule, risk, technical coordination, contractor management, reporting and delivery control.",
};

const services = [
  ["01", "Project setup", "Objectives, scope boundaries, work breakdown, deliverables, responsibilities and execution strategy."],
  ["02", "Engineering schedule", "Deliverable register, dependencies, milestones, review cycles, look-ahead and recovery actions."],
  ["03", "Risk & opportunity", "Risk register, mitigation ownership, technical uncertainty, decisions and opportunity tracking."],
  ["04", "Technical coordination", "Interfaces between disciplines, contractors, vendors, operations, construction and management."],
  ["05", "Contractor oversight", "Progress challenge, technical compliance, action closure, change awareness and performance visibility."],
  ["06", "Tender & procurement support", "Scope clarity, bidder queries, technical evaluation, comparison and recommendation support."],
  ["07", "Progress reporting", "Concise dashboards, forecast, look-ahead, issues, decisions and management-level communication."],
  ["08", "Project recovery", "Re-baseline priorities, unblock decisions, focus critical interfaces and restore delivery rhythm."],
];

export default function PmtPage() {
  return (
    <PageFrame active="pmt" accent="orange">
      <section className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>Project Management Team · PMP-led methods</span>
          <h1>Control the work. Protect the <span>outcome.</span></h1>
          <p className={styles.heroLead}>
            PMT support using disciplined PMP-style planning, integration, risk,
            stakeholder and delivery controls—strengthened by practical engineering judgement.
          </p>
          <div className={styles.heroActions}>
            <a href="#services" className={styles.primaryButton}>Explore PMT support <PmtIcon /></a>
            <a href="#contact" className={styles.secondaryButton}>Discuss project support</a>
          </div>
          <div className={styles.heroProof}>
            <div><strong>PMP-led</strong><span>Structured methods</span></div>
            <div><strong>Engineering-aware</strong><span>Technical interfaces</span></div>
            <div><strong>Decision-focused</strong><span>Visible ownership</span></div>
          </div>
        </div>
        <PmtVisual />
      </section>

      <section className={styles.section} id="services">
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>What PMT support covers</span><h2>Project controls that engineering teams will actually use.</h2></div>
          <p>This is not generic administration. RIIS connects project-management discipline with the technical work, interfaces and decisions driving delivery.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(([n,title,copy]) => <article className={styles.serviceCard} key={n}><PmtIcon /><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>PMP-style delivery cycle</span><h2>Integrate the plan, people, risk and technical decisions.</h2></div>
          <p>The controls are scaled to the project. The aim is visibility and action—not process for its own sake.</p>
        </div>
        <div className={styles.processGrid}>
          {[
            ["01","Initiate","Clarify objectives, stakeholders, success criteria and authority."],
            ["02","Plan","Structure scope, schedule, resources, interfaces, communication and risk."],
            ["03","Execute","Coordinate teams, contractors, information, procurement and technical work."],
            ["04","Control","Track progress, forecast, change, risks, actions, quality and decisions."],
            ["05","Close","Confirm acceptance, records, handover, lessons and outstanding commitments."],
          ].map(([n,t,c]) => <div className={styles.processStep} key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></div>)}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Working controls</span><h2>Simple tools. Clear ownership. Better decisions.</h2></div>
          <p>RIIS can establish the control system or work within the client’s existing templates and governance.</p>
        </div>
        <div className={styles.outputGrid}>
          {[
            [TargetIcon,"Delivery baseline","Scope statement, WBS, milestones, RACI, deliverable register and execution priorities."],
            [RiskIcon,"Risk & decision control","Risk register, action tracker, decision log, change awareness and escalation path."],
            [FileIcon,"Management visibility","Progress dashboard, variance, forecast, look-ahead, issues and management narrative."],
            [CheckIcon,"Technical assurance","Review gates, contractor deliverables, multidisciplinary interfaces and close-out evidence."],
          ].map(([Icon,title,copy]) => { const C=Icon as typeof PmtIcon; return <article className={styles.outputCard} key={String(title)}><C /><div><h3>{String(title)}</h3><p>{String(copy)}</p></div></article>; })}
        </div>
      </section>

      <section className={styles.engagementSection}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Ways to engage</span><h2>Add control where the project needs it most.</h2></div>
          <p>Support can target project setup, a delivery problem or a continuing PMT role.</p>
        </div>
        <div className={styles.engagementGrid}>
          {[
            ["01","Project setup package","Establish the delivery structure before execution accelerates.",["Scope and WBS","Schedule and governance","Risk and reporting system"]],
            ["02","Recovery sprint","A time-boxed intervention for delayed, unclear or poorly coordinated work.",["Critical-path focus","Decision and action closure","Practical recovery plan"]],
            ["03","Embedded PMT support","Ongoing project-management and technical coordination within the delivery team.",["Weekly controls","Contractor coordination","Management reporting"]],
          ].map(([n,t,c,items]) => <article className={styles.engagementCard} key={String(n)}><span>{String(n)}</span><h3>{String(t)}</h3><p>{String(c)}</p><ul>{(items as string[]).map(i=><li key={i}>{i}</li>)}</ul></article>)}
        </div>
      </section>

      <CredentialBand />
      <ContactPanel title="Need stronger control without adding unnecessary bureaucracy?" copy="Share the project stage, current pain points, team structure and reporting needs. RIIS will propose a focused PMP-led PMT support model." />
    </PageFrame>
  );
}
