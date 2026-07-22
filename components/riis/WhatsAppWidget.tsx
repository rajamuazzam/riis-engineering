"use client";

import { useEffect, useState } from "react";
import styles from "./riis.module.css";

const primaryNumber = "601152555858";
const secondaryNumber = "60178821235";

const options = [
  {
    label: "Request Proposal",
    number: primaryNumber,
    message: "Hello RIIS Engineering. I would like to request a proposal for our engineering project.",
  },
  {
    label: "Discuss New Project",
    number: primaryNumber,
    message: "Hello RIIS Engineering. I would like to discuss a new structural engineering project.",
  },
  {
    label: "General Enquiry",
    number: secondaryNumber,
    message: "Hello RIIS Engineering. I have a general enquiry regarding your engineering services.",
  },
];

function openWhatsApp(number: string, message: string) {
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > Math.max(180, window.innerHeight * 0.2)) setVisible(true);
    };
    const timer = window.setTimeout(() => setVisible(true), 7000);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (dismissed || !visible) return null;

  return (
    <aside className={styles.whatsappWrap} aria-label="WhatsApp engineering enquiry">
      <button
        className={styles.whatsappClose}
        type="button"
        aria-label="Close WhatsApp panel"
        onClick={() => setDismissed(true)}
      >
        ×
      </button>

      <button
        className={styles.whatsappLauncher}
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className={styles.whatsappIcon} aria-hidden="true">◔</span>
        <span>
          <strong>Need Structural Advice?</strong>
          <small>Talk to the RIIS engineering team</small>
        </span>
      </button>

      {expanded && (
        <div className={styles.whatsappMenu}>
          {options.map((option) => (
            <button
              type="button"
              key={option.label}
              onClick={() => openWhatsApp(option.number, option.message)}
            >
              <span>{option.label}</span><b>→</b>
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
