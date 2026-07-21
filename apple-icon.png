import type { Metadata } from "next";
import {
  CheckIcon,
  FeaIcon,
  FileIcon,
  RiskIcon,
  TargetIcon,
} from "../../components/riis/Icons";
import { FeaVisual } from "../../components/riis/Visuals";
import { ContactPanel, CredentialBand, PageFrame } from "../../components/riis/RiisShell";
import styles from "../../components/riis/riis.module.css";

export const metadata: Metadata = {
  title: "FEA & R&D Engineering Support | RIIS",
  description:
    "Finite element analysis for R&D, product development, concept screening, prototype validation, failure investigation and design optimisation.",
};

const services = [
  ["01", "R&D concept screening", "Compare concepts before committing to detailed design, tooling, prototype or fabrication."],
  ["02", "Product development", "Understand load paths, stiffness, deformation and stress to guide the next design iteration."],
  ["03", "Prototype validation", "Use simulation to identify critical zones, test assumptions and focus physical testing."],
  ["04", "Nonlinear response", "Contact, large deformation, material nonlinearity and other behaviours beyond simple linear checks."],
  ["05", "Local stress & connections", "Detailed assessment of joints, interfaces, weld regions, bolts, brackets and complex geometry."],
  ["06", "Failure investigation", "Reconstruct likely loading and response to support root-cause thinking and corrective action."],
  ["07", "Design optimisation", "Reduce weight, improve stiffness, remove hotspots and compare practical geometry changes."],
  ["08", "Independent verification", "A second technical view of modelling assumptions, boundary conditions, loads and conclusions."],
];

export default function FeaPage() {
  return (
    <PageFrame active="fea" accent="green">
      <section className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>Simulation · Product development · R&D</span>
          <h1>Turn uncertainty into <span>evidence.</span></h1>
          <p className={styles.heroLead}>
            Advanced FEA for innovators, product developers and engineering teams who
            need to understand behaviour before spending on the next iteration.
          </p>
          <div className={styles.heroActions}>
            <a href="#services" className={styles.primaryButton}>Explore FEA support <FeaIcon /></a>
            <a href="#contact" className={styles.secondaryButton}>Discuss an R&D problem</a>
          </div>
          <div className={styles.heroProof}>
            <div><strong>Before prototype</strong><span>Screen concepts</span></div>
            <div><strong>During development</strong><span>Guide iteration</span></div>
            <div><strong>After a failure</strong><span>Investigate response</span></div>
          </div>
        </div>
        <FeaVisual />
      </section>

      <section className={styles.section} id="services">
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Where FEA creates value</span><h2>Analyse the question—not just the model.</h2></div>
          <p>RIIS starts by defining what decision the simulation must support. Model detail, assumptions and outputs are then built around that decision.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(([n,title,copy]) => <article className={styles.serviceCard} key={n}><FeaIcon /><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>R&D simulation loop</span><h2>Each model should improve the next decision.</h2></div>
          <p>The workflow is deliberately iterative. Results are converted into practical design actions rather than left as contour plots.</p>
        </div>
        <div className={styles.processGrid}>
          {[
            ["01","Frame","Define the failure mode, uncertainty or comparison to be resolved."],
            ["02","Represent","Select the geometry, material, contacts, loads and constraints that matter."],
            ["03","Simulate","Run appropriate linear, nonlinear, sensitivity or comparative analyses."],
            ["04","Interpret","Separate numerical effects from meaningful engineering behaviour."],
            ["05","Iterate","Recommend the next geometry, test, material or development action."],
          ].map(([n,t,c]) => <div className={styles.processStep} key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></div>)}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>What to send / what you receive</span><h2>Start rough. Finish with a defensible recommendation.</h2></div>
          <p>A complete CAD model is not always required. Early engagement can begin from sketches, photographs, dimensions, load estimates or test observations.</p>
        </div>
        <div className={styles.outputGrid}>
          {[
            [TargetIcon,"Useful starting inputs","Problem statement, intended use, geometry, material, loads, constraints, failure evidence or test data."],
            [FileIcon,"Model basis","Assumptions, idealisations, boundary conditions, material model and analysis limitations."],
            [FeaIcon,"Engineering results","Response plots, critical locations, sensitivities, comparisons and governing behaviour."],
            [CheckIcon,"Design direction","Prioritised changes, next iteration, testing focus and unresolved risks."],
          ].map(([Icon,title,copy]) => { const C=Icon as typeof FeaIcon; return <article className={styles.outputCard} key={String(title)}><C /><div><h3>{String(title)}</h3><p>{String(copy)}</p></div></article>; })}
        </div>
      </section>

      <section className={styles.engagementSection}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Ways to engage</span><h2>Use simulation at the right investment level.</h2></div>
          <p>The scope can grow with the maturity of the product and the confidence required.</p>
        </div>
        <div className={styles.engagementGrid}>
          {[
            ["01","Feasibility sprint","A focused first model to test whether the idea is viable and identify dominant behaviour.",["Rapid concept screen","Key assumptions","Go / refine / stop direction"]],
            ["02","Development study","Iterative analysis across design options, interfaces and sensitivities.",["Comparative simulations","Design refinement","Engineering report"]],
            ["03","Independent verification","A review or parallel assessment before release, fabrication or testing.",["Model review","Sensitivity checks","Independent conclusion"]],
          ].map(([n,t,c,items]) => <article className={styles.engagementCard} key={String(n)}><span>{String(n)}</span><h3>{String(t)}</h3><p>{String(c)}</p><ul>{(items as string[]).map(i=><li key={i}>{i}</li>)}</ul></article>)}
        </div>
      </section>

      <CredentialBand />
      <ContactPanel title="Developing a product or investigating a structural response?" copy="Send the idea, sketch, CAD, photo, test result or observed problem. RIIS will help frame the simulation around the decision that matters." />
    </PageFrame>
  );
}
