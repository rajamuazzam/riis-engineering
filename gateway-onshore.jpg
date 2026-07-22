import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, LockIcon } from "./Icons";
import { contact, credentials } from "./content";
import styles from "./riis.module.css";

export type Accent = "blue" | "amber" | "green" | "orange";

export function Brand() {
  return (
    <Link href="/" className={styles.brand} aria-label="RIIS Engineering home">
      <img className={styles.brandLogo} src="/riis-logo-fea-header.png" alt="RIIS Engineering" />
    </Link>
  );
}

export function Header({ active }: { active?: string }) {
  return (
    <header className={styles.header}>
      <Brand />
      <nav className={styles.nav} aria-label="Primary navigation">
        <Link className={active === "offshore" ? styles.activeNav : ""} href="/offshore">Offshore</Link>
        <Link className={active === "onshore" ? styles.activeNav : ""} href="/onshore">Onshore</Link>
        <Link className={active === "fea" ? styles.activeNav : ""} href="/fea">FEA &amp; R&amp;D</Link>
        <Link className={active === "pmt" ? styles.activeNav : ""} href="/pmt">PMT</Link>
      </nav>
      <a className={styles.headerCta} href={contact.whatsappUrl} target="_blank" rel="noreferrer">
        Discuss a requirement <ArrowIcon />
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Brand />
      <p>Offshore · Onshore · FEA / R&amp;D · PMP-led PMT support</p>
      <p>© 2026 RIIS Engineering</p>
    </footer>
  );
}

export function CredentialBand() {
  return (
    <section className={styles.credentialBand} aria-label="Professional credentials">
      <div className={styles.credentialIntro}>
        <span>Senior engineering judgement</span>
        <strong>Practical outputs for real decisions.</strong>
      </div>
      <div className={styles.credentials}>
        {credentials.map((item) => (
          <div key={item.value} className={styles.credential}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactPanel({
  eyebrow = "CONFIDENTIAL ENQUIRY",
  title = "Bring the problem. Start with what you have.",
  copy = "A drawing, sketch, model, photo, schedule or early-stage idea is enough to begin a focused discussion.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className={styles.contactPanel} id="contact">
      <div>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div className={styles.confidential}><LockIcon /> Confidential discussion · NDA available</div>
      </div>
      <div className={styles.contactActions}>
        <a className={styles.primaryButton} href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          Start a discussion <ArrowIcon />
        </a>
        <a className={styles.secondaryButton} href={contact.emailUrl}>
          Send an email <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

export function PageFrame({
  children,
  active,
  accent,
}: {
  children: ReactNode;
  active?: string;
  accent: Accent;
}) {
  return (
    <main className={`${styles.page} ${styles[`accent_${accent}`]}`}>
      <div className={styles.noise} />
      <Header active={active} />
      {children}
      <Footer />
    </main>
  );
}
