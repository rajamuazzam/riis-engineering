import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowIcon,
  CheckIcon,
  FeaIcon,
  FileIcon,
  OffshoreIcon,
  OnshoreIcon,
  PmtIcon,
  RiskIcon,
  TargetIcon,
} from "../components/riis/Icons";
import { ContactPanel, CredentialBand, PageFrame } from "../components/riis/RiisShell";
import styles from "../components/riis/riis.module.css";

export const metadata: Metadata = {
  title: "RIIS Engineering | Offshore, Onshore, FEA & PMP-led PMT",
  description:
    "Independent engineering solutions for offshore and onshore structures, FEA-led R&D, and PMP-style project management team delivery.",
};

const paths = [
  {
    href: "/offshore",
    accent: "blue",
    number: "01",
    icon: OffshoreIcon,
    title: "Offshore",
    kicker: "Assets · Brownfield · Integrity",
    copy: "Specialist structural engineering for offshore assets, modifications, reassessment, subsea and marine operations.",
    bullets: ["Platforms & jackets", "Brownfield & life extension", "Subsea & marine support"],
    image: true,
    cta: "Enter offshore",
  },
  {
    href: "/onshore",
    accent: "amber",
    number: "02",
    icon: OnshoreIcon,
    title: "Onshore",
    kicker: "Civil · Structural · Infrastructure",
    copy: "Practical engineering for industrial facilities, buildings, foundations, infrastructure and operating sites.",
    bullets: ["Industrial structures", "Infrastructure & foundations", "Construction support"],
    cta: "Explore onshore",
  },
  {
    href: "/fea",
    accent: "green",
    number: "03",
    icon: FeaIcon,
    title: "FEA & R&D",
    kicker: "Simulate · Validate · Innovate",
    copy: "Simulation-led support for research, product development, prototype validation, failure investigation and optimisation.",
    bullets: ["R&D concept screening", "Prototype validation", "Nonlinear & local response"],
    cta: "Explore FEA & R&D",
  },
  {
    href: "/pmt",
    accent: "orange",
    number: "04",
    icon: PmtIcon,
    title: "PMT",
    kicker: "PMP-style project delivery",
    copy: "Project Management Team support using disciplined planning, coordination, risk, schedule and delivery controls.",
    bullets: ["Scope, schedule & risk", "Technical coordination", "Progress & decision control"],
    cta: "Explore PMT",
  },
];

const industries = [
  "Offshore energy",
  "Oil & gas facilities",
  "Petrochemical",
  "Manufacturing",
  "Infrastructure",
  "Product development",
  "Research & universities",
  "Technology startups",
];

const projectTypes = [
  ["Brownfield upgrade", "Structural modification, reassessment and constructability for operating assets."],
  ["Industrial development", "Civil and structural packages for buildings, equipment and infrastructure."],
  ["Product validation", "FEA evidence to improve a concept before prototyping or production."],
  ["Project recovery", "PMP-style planning, action control and coordination to restore delivery confidence."],
];

const software = ["SACS", "Abaqus", "STAAD.Pro", "Inventor", "AutoCAD", "Navisworks", "Mathcad", "MS Project"];

export default function HomePage() {
  return (
    <PageFrame accent="blue">
      <section className={styles.homeHeroV2}>
        <div className={styles.heroGridGlow} aria-hidden="true" />
        <span className={styles.eyebrow}>Independent engineering solutions</span>
        <h1>
          Engineering confidence. <span>Delivered.</span>
        </h1>
        <p>
          Senior engineering judgement for complex structures, product development and project delivery—scaled to the exact decision you need to make.
        </p>
        <div className={styles.heroActionsCenter}>
          <a href="#capabilities" className={styles.primaryButton}>Explore capabilities <ArrowIcon /></a>
          <a href="#contact" className={styles.secondaryButton}>Discuss a requirement</a>
        </div>
        <div className={styles.heroSignalRow}>
          <span>STRUCTURAL</span><i />
          <span>FEA / R&amp;D</span><i />
          <span>PMP-STYLE PMT</span><i />
          <span>CIVIL</span>
        </div>
      </section>

      <section className={styles.homePaths} id="capabilities" aria-label="RIIS capabilities">
        {paths.map((path) => {
          const Icon = path.icon;
          return (
            <article className={styles.pathCard} data-accent={path.accent} key={path.href}>
              {path.image ? (
                <div className={styles.pathImage}>
                  <img src="/riis/platform-mesh.png" alt="Offshore structural mesh visualisation" />
                </div>
              ) : (
                <div className={styles.miniVisual}><Icon /></div>
              )}
              <span className={styles.pathNumber}>{path.number}</span>
              <Icon className={styles.pathIcon} />
              <h2>{path.title}</h2>
              <h3>{path.kicker}</h3>
              <p>{path.copy}</p>
              <div className={styles.pathList}>
                {path.bullets.map((bullet) => <span key={bullet}><CheckIcon /> {bullet}</span>)}
              </div>
              <Link href={path.href} className={styles.cardLink}>{path.cta} <ArrowIcon /></Link>
            </article>
          );
        })}
      </section>

      <section className={styles.trustStatement}>
        <span className={styles.eyebrow}>Why RIIS</span>
        <h2>Not more engineering. The right engineering.</h2>
        <div className={styles.trustGrid}>
          <div><TargetIcon /><strong>Problem-first</strong><p>We define the decision before selecting the level of analysis or support.</p></div>
          <div><RiskIcon /><strong>Risk-aware</strong><p>Recommendations balance safety, compliance, practicality, schedule and cost.</p></div>
          <div><CheckIcon /><strong>Senior-led</strong><p>Work is shaped by experienced engineering judgement, not template production.</p></div>
          <div><PmtIcon /><strong>Delivery-minded</strong><p>Outputs are structured so the next engineer, manager or contractor can act.</p></div>
        </div>
      </section>

      <section className={styles.darkBandSection}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Industries we support</span><h2>Engineering that crosses sector boundaries.</h2></div>
          <p>RIIS combines offshore experience, civil and structural capability, advanced simulation and project controls to support both established industries and emerging products.</p>
        </div>
        <div className={styles.industryGrid}>
          {industries.map((industry, index) => <div key={industry}><span>{String(index + 1).padStart(2, "0")}</span><strong>{industry}</strong></div>)}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Typical engagements</span><h2>Bring a problem, project or product.</h2></div>
          <p>RIIS can join at concept stage, during detailed delivery, when a design needs independent review, or when a project requires recovery and stronger technical control.</p>
        </div>
        <div className={styles.projectFeatureGrid}>
          {projectTypes.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowIcon />
            </article>
          ))}
        </div>
      </section>

      <section className={styles.capabilityStats}>
        <div><strong>20+</strong><span>Years collective experience</span></div>
        <div><strong>4</strong><span>Integrated core services</span></div>
        <div><strong>1</strong><span>Senior-led point of accountability</span></div>
        <div><strong>100%</strong><span>Engineering-focused delivery</span></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Engineering tools</span><h2>Industry platforms. Independent thinking.</h2></div>
          <p>Software supports the engineering process; it does not replace judgement. Tools are selected according to the structure, behaviour and decision required.</p>
        </div>
        <div className={styles.softwareGrid}>{software.map((tool) => <div key={tool}>{tool}</div>)}</div>
      </section>

      <section className={styles.knowledgePanel}>
        <div>
          <span className={styles.eyebrow}>Engineering knowledge</span>
          <h2>Insights built from real engineering decisions.</h2>
          <p>Technical articles, case studies and design insights will turn project experience into useful guidance for asset owners, engineers, manufacturers and researchers.</p>
        </div>
        <div className={styles.knowledgeCards}>
          <div><FileIcon /><span>Case studies</span><strong>Coming soon</strong></div>
          <div><FeaIcon /><span>Engineering insights</span><strong>Coming soon</strong></div>
        </div>
      </section>

      <CredentialBand />
      <ContactPanel title="Show us the challenge. We will define the engineering route." />
    </PageFrame>
  );
}
