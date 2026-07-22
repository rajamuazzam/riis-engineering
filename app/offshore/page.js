import { ArrowIcon } from "../../components/riis/Icons";
import { ContactPanel, PageFrame } from "../../components/riis/RiisShell";
import styles from "./offshore.module.css";

const services = [
  {
    no: "01",
    kicker: "STRUCTURAL RESPONSE & CAPACITY",
    title: "VERIFY BEFORE YOU MODIFY.",
    copy: "Know what governs before you change, strengthen or approve an offshore structure.",
    image: "/offshore-native/public/structural.png",
  },
  {
    no: "02",
    kicker: "FEA · SIMULATION · R&D",
    title: "UNDERSTAND BEFORE YOU BUILD.",
    copy: "Use focused simulation to support local design, verification and development decisions.",
    image: "/offshore-native/public/fea.png",
  },
  {
    no: "03",
    kicker: "PROJECT MANAGEMENT & TECHNICAL SUPPORT",
    title: "KEEP THE ENGINEERING MOVING.",
    copy: "Maintain progress through clear scope, coordination, review and technical decisions.",
    image: "/offshore-native/public/pmt.jpg",
  },
];

const experience = [
  ["OFFSHORE BROWNFIELD MODIFICATION", "Assessment · Strengthening · Extension", "/offshore-native/public/exp-offshore.jpg"],
  ["FEA PRODUCT DEVELOPMENT", "Simulation · Optimisation · Verification", "/offshore-native/public/exp-fea.png"],
  ["STRUCTURAL INTEGRITY ASSESSMENT", "Life Extension · Anomaly · Fitness", "/offshore-native/public/exp-integrity.png"],
  ["SUBSEA STRUCTURES & COMPONENTS", "Clamps · Frames · Mudmats · Manifolds", "/offshore-native/public/exp-subsea.png"],
  ["PROJECT DELIVERY & TECHNICAL SUPPORT", "Planning · Coordination · Assurance", "/offshore-native/public/exp-delivery.png"],
];

const credentials = [
  ["/offshore-native/public/logo-bem.png", "BEM", "Professional Engineer"],
  ["/offshore-native/public/logo-iem.png", "IEM", "Corporate Member"],
  ["/offshore-native/public/logo-mbot.png", "MBOT", "Professional Technologist"],
  ["/offshore-native/public/logo-pmi.png", "PMI", "Project Management Professional"],
];

export default function OffshorePage() {
  return (
    <PageFrame active="offshore" accent="blue">
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>OFFSHORE STRUCTURAL · FEA · PMT</p>
          <h1>ENGINEERING CLARITY FOR COMPLEX STRUCTURES<span>.</span></h1>
          <p className={styles.lead}>Independent offshore structural engineering, finite element analysis and project delivery support for brownfield, integrity, subsea and modification scopes.</p>
          <div className={styles.actions}>
            <a href="#expertise" className={styles.primary}>Explore offshore expertise <ArrowIcon /></a>
            <a href="#contact" className={styles.secondary}>Talk to RIIS <ArrowIcon /></a>
          </div>
          <div className={styles.heroMeta}>
            <div><strong>20+</strong><span>Years of experience</span></div>
            <div><strong>Operator-side</strong><span>Technical judgement</span></div>
            <div><strong>Brownfield</strong><span>Practical delivery focus</span></div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src="/offshore-native/public/hero-platform-tight.png" alt="Offshore platform finite element mesh visual" />
          <div className={styles.visualLabel}>OFFSHORE STRUCTURAL ENGINEERING</div>
        </div>
      </section>

      <section className={styles.section} id="expertise">
        <div className={styles.sectionHead}>
          <div><span>CORE OFFSHORE SUPPORT</span><h2>Focused engineering for decisions that matter offshore.</h2></div>
          <p>From first assessment through design verification and delivery support, RIIS helps clients understand structural risk, define the right scope and move forward with confidence.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((item) => (
            <article key={item.no} className={styles.serviceCard}>
              <img src={item.image} alt="" />
              <div className={styles.cardShade} />
              <div className={styles.cardCopy}>
                <span>{item.no}</span>
                <small>{item.kicker}</small>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a href="#contact">Discuss this support <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.credentialSection} id="credentials">
        <div className={styles.credentialLead}>
          <span>ENGINEERING CREDENTIALS</span>
          <h2>Professional accountability backed by practical offshore experience.</h2>
          <p>Support is shaped by structural engineering judgement, project delivery discipline and direct exposure to operator, design and installation environments.</p>
        </div>
        <div className={styles.credentialGrid}>
          {credentials.map(([src, alt, label]) => (
            <div key={label} className={styles.credentialCard}>
              <img src={src} alt={alt} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="experience">
        <div className={styles.sectionHead}>
          <div><span>SELECTED PROFESSIONAL EXPERIENCE</span><h2>Capabilities shaped by real offshore project conditions.</h2></div>
          <p>Typical engagements include assessment, modification, integrity, local verification, subsea structures and technical coordination across multiple project stages.</p>
        </div>
        <div className={styles.experienceGrid}>
          {experience.map(([title, copy, image]) => (
            <article key={title} className={styles.experienceCard}>
              <img src={image} alt="" />
              <div className={styles.cardShade} />
              <div><h3>{title}</h3><p>{copy}</p><ArrowIcon /></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.deliveryBand}>
        <div><span>OFFSHORE DELIVERY FOCUS</span><h2>Analyse. Verify. Coordinate. Deliver.</h2></div>
        <div className={styles.deliveryItems}>
          <div><strong>01</strong><span>Structural assessment</span></div>
          <div><strong>02</strong><span>Design verification</span></div>
          <div><strong>03</strong><span>Brownfield integration</span></div>
          <div><strong>04</strong><span>Technical assurance</span></div>
        </div>
      </section>

      <div className={styles.contactWrap}>
        <ContactPanel
          eyebrow="OFFSHORE ENQUIRY"
          title="Share the offshore challenge. Start with what you have."
          copy="A drawing, SACS model, calculation, inspection finding, modification concept or early-stage scope is enough to begin a focused and confidential discussion."
        />
      </div>
    </PageFrame>
  );
}
