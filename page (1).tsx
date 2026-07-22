import type { Metadata } from "next";
import {
  CheckIcon,
  FileIcon,
  OnshoreIcon,
  RiskIcon,
  TargetIcon,
} from "../../components/riis/Icons";
import { OnshoreVisual } from "../../components/riis/Visuals";
import {
  ContactPanel,
  CredentialBand,
  PageFrame,
} from "../../components/riis/RiisShell";
import styles from "../../components/riis/riis.module.css";

export const metadata: Metadata = {
  title: "Onshore Civil & Structural Engineering | RIIS",
  description:
    "Civil, structural and infrastructure support for industrial facilities, brownfield rehabilitation, foundations, site development and construction.",
};

const services = [
  ["01", "Industrial structures", "Steel and reinforced-concrete structures, buildings, pipe racks, platforms and equipment-support systems."],
  ["02", "Foundations & dynamic equipment", "Foundations for static and rotating equipment, tanks, packaged systems and heavy industrial loads."],
  ["03", "Site & infrastructure", "Earthworks, drainage, access roads, underground utilities, bunds, slope and shore-protection interfaces."],
  ["04", "Asset rehabilitation", "Condition review, repair strategy, strengthening, brownfield modification and life-extension support."],
  ["05", "Solar PV infrastructure", "Civil and structural support for ground-mounted or rooftop solar development and associated facilities."],
  ["06", "Tender & construction support", "Scope definition, technical evaluation, contractor queries, site coordination, QA/QC and close-out support."],
  ["07", "Independent technical review", "Focused review of design basis, calculations, drawings, specifications, MTO and constructability."],
  ["08", "Project engineering support", "Multidisciplinary interfaces, technical decisions, risk management and delivery assurance."],
];

export default function OnshorePage() {
  return (
    <PageFrame active="onshore" accent="amber">
      <section className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>Civil · Structural · Infrastructure</span>
          <h1>Make the site work. Make the structure <span>last.</span></h1>
          <p className={styles.heroLead}>
            Onshore engineering support for industrial facilities, infrastructure,
            brownfield rehabilitation and project delivery—from early definition to construction.
          </p>
          <div className={styles.heroActions}>
            <a href="#services" className={styles.primaryButton}>Explore capability <CheckIcon /></a>
            <a href="#contact" className={styles.secondaryButton}>Discuss an onshore requirement</a>
          </div>
          <div className={styles.heroProof}>
            <div><strong>Greenfield</strong><span>Concept to EPCC</span></div>
            <div><strong>Brownfield</strong><span>Repair & rehabilitation</span></div>
            <div><strong>Operational sites</strong><span>Practical interfaces</span></div>
          </div>
        </div>
        <OnshoreVisual />
      </section>

      <section className={styles.section} id="services">
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>What RIIS can support</span><h2>From ground condition to operating asset.</h2></div>
          <p>Designed for asset owners, developers, consultants and contractors who need experienced civil and structural input without building a full internal team.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(([n, title, copy]) => (
            <article className={styles.serviceCard} key={n}>
              <OnshoreIcon />
              <span>{n}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Delivery workflow</span><h2>Clear basis. Coordinated design. Buildable output.</h2></div>
          <p>The level of work is matched to the project stage, available information and decision required.</p>
        </div>
        <div className={styles.processGrid}>
          {[
            ["01","Define","Confirm scope, site constraints, interfaces and acceptance criteria."],
            ["02","Investigate","Review available data, site information, surveys and existing records."],
            ["03","Engineer","Develop analysis, design, options and practical construction details."],
            ["04","Assure","Check codes, risks, constructability, quantities and multidisciplinary interfaces."],
            ["05","Support","Respond to tender, contractor, site and close-out requirements."],
          ].map(([n,t,c]) => <div className={styles.processStep} key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></div>)}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Typical outputs</span><h2>Documents the next party can act on.</h2></div>
          <p>Outputs can be tailored for concept selection, tender, detailed design, construction, operation or integrity management.</p>
        </div>
        <div className={styles.outputGrid}>
          {[
            [FileIcon,"Engineering package","Design basis, calculations, drawings, specifications, MTO and technical notes."],
            [TargetIcon,"Decision package","Options, constraints, risks, recommendation and clear basis for approval."],
            [RiskIcon,"Integrity package","Condition assessment, anomaly evaluation, repair or strengthening strategy."],
            [CheckIcon,"Delivery support","Technical evaluation, contractor queries, site verification and completion records."],
          ].map(([Icon,title,copy]) => {
            const C = Icon as typeof FileIcon;
            return <article className={styles.outputCard} key={String(title)}><C /><div><h3>{String(title)}</h3><p>{String(copy)}</p></div></article>;
          })}
        </div>
      </section>

      <section className={styles.engagementSection}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Ways to engage</span><h2>Match the support to the gap.</h2></div>
          <p>Start small, define a work package, or retain senior engineering support through a wider project phase.</p>
        </div>
        <div className={styles.engagementGrid}>
          {[
            ["01","Focused review","A time-boxed review of a design, calculation, drawing, proposal or site issue.",["Independent comments","Priority risks","Recommended next actions"]],
            ["02","Defined work package","A bounded engineering scope with agreed inputs, deliverables and schedule.",["Design or assessment","Controlled deliverables","Clear completion basis"]],
            ["03","Project support","Continuing civil and structural input integrated with the client or contractor team.",["Interface coordination","Technical decisions","Construction and close-out"]],
          ].map(([n,t,c,items]) => <article className={styles.engagementCard} key={String(n)}><span>{String(n)}</span><h3>{String(t)}</h3><p>{String(c)}</p><ul>{(items as string[]).map(i=><li key={i}>{i}</li>)}</ul></article>)}
        </div>
      </section>

      <CredentialBand />
      <ContactPanel title="Have an onshore site, structure or delivery problem?" copy="Share the location, available drawings, photos, scope or immediate concern. RIIS will help define the right next engineering step." />
    </PageFrame>
  );
}
