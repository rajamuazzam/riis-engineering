import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckIcon,
  FeaIcon,
  OffshoreIcon,
  OnshoreIcon,
  PmtIcon,
  ArrowIcon,
} from "../components/riis/Icons";
import {
  ContactPanel,
  CredentialBand,
  PageFrame,
} from "../components/riis/RiisShell";
import styles from "../components/riis/riis.module.css";

export const metadata: Metadata = {
  title: "RIIS Engineering | Offshore, Onshore, FEA & PMP-led PMT",
  description:
    "Independent engineering support across offshore, onshore, FEA and R&D, and PMP-led project management team services.",
};

const paths = [
  {
    href: "/offshore",
    accent: "blue",
    number: "01",
    icon: OffshoreIcon,
    title: "Offshore",
    kicker: "Existing specialist subpage",
    copy: "Structural engineering for offshore assets, brownfield modification, integrity, subsea and marine operations.",
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
    kicker: "Civil, structural & infrastructure",
    copy: "Engineering for industrial facilities, buildings, foundations, site development and asset rehabilitation.",
    bullets: ["Greenfield & brownfield", "Infrastructure & foundations", "Construction support"],
    cta: "Explore onshore",
  },
  {
    href: "/fea",
    accent: "green",
    number: "03",
    icon: FeaIcon,
    title: "FEA & R&D",
    kicker: "Evidence for better iterations",
    copy: "Simulation-led support for product development, concept validation, failure investigation and optimisation.",
    bullets: ["R&D concept screening", "Prototype & design validation", "Nonlinear and local response"],
    cta: "Explore FEA & R&D",
  },
  {
    href: "/pmt",
    accent: "orange",
    number: "04",
    icon: PmtIcon,
    title: "PMT",
    kicker: "PMP-led project delivery",
    copy: "Project Management Team support using disciplined PMP-style planning, control, coordination and reporting.",
    bullets: ["Scope, schedule & risk", "Technical coordination", "Progress & decision control"],
    cta: "Explore PMT",
  },
];

export default function HomePage() {
  return (
    <PageFrame accent="blue">
      <section className={styles.homeHero}>
        <span className={styles.eyebrow}>Independent engineering solutions</span>
        <h1>
          Choose the expertise your <span>decision</span> needs.
        </h1>
        <p>
          Four focused routes. One senior engineering team. Start with the problem,
          the available information and the decision you need to make.
        </p>
      </section>

      <section className={styles.homePaths} aria-label="RIIS capabilities">
        {paths.map((path) => {
          const Icon = path.icon;
          return (
            <article className={styles.pathCard} data-accent={path.accent} key={path.href}>
              {path.image ? (
                <div className={styles.pathImage}>
                  <img src="/riis/platform-mesh.png" alt="Offshore structural mesh visualisation" />
                </div>
              ) : (
                <div className={styles.miniVisual} />
              )}
              <span className={styles.pathNumber}>{path.number}</span>
              <Icon className={styles.pathIcon} />
              <h2>{path.title}</h2>
              <h3>{path.kicker}</h3>
              <p>{path.copy}</p>
              <div className={styles.pathList}>
                {path.bullets.map((bullet) => (
                  <span key={bullet}><CheckIcon /> {bullet}</span>
                ))}
              </div>
              <Link href={path.href} className={styles.cardLink}>
                {path.cta} <ArrowIcon />
              </Link>
            </article>
          );
        })}
      </section>

      <section className={styles.valueStrip}>
        <div><strong>Problem-first engagement</strong><p>We define the decision before selecting the level of analysis or project support.</p></div>
        <div><strong>Senior technical judgement</strong><p>Engineering conclusions are framed around risk, practicality and the next action.</p></div>
        <div><strong>Flexible scope</strong><p>Engage RIIS for a focused review, defined work package or continuing technical support.</p></div>
      </section>

      <CredentialBand />
      <ContactPanel title="Not sure which service fits? Show us the challenge." />
    </PageFrame>
  );
}
