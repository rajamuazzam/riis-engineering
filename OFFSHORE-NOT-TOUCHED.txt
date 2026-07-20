import styles from "./riis.module.css";

export function OnshoreVisual() {
  return (
    <div className={`${styles.visualFrame} ${styles.onshoreVisual}`} aria-hidden="true">
      <svg viewBox="0 0 720 520" role="img">
        <defs>
          <linearGradient id="onSky" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0a1a28" />
            <stop offset="1" stopColor="#241609" />
          </linearGradient>
          <linearGradient id="onGold" x1="0" x2="1">
            <stop offset="0" stopColor="#ffb247" />
            <stop offset="1" stopColor="#ff6a00" />
          </linearGradient>
          <pattern id="onGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#ffffff" strokeOpacity=".055" />
          </pattern>
        </defs>
        <rect width="720" height="520" fill="url(#onSky)" />
        <rect width="720" height="520" fill="url(#onGrid)" />
        <path d="M30 420h660" stroke="#ff9a2f" strokeOpacity=".45" />
        <path d="M70 420V255h92v165M180 420V190h120v230M323 420V235h84v185M432 420V145h128v275M585 420V276h70v144" fill="#09121b" stroke="#ffc16b" strokeOpacity=".72" strokeWidth="2" />
        <path d="M70 287h92M70 323h92M70 359h92M180 230h120M180 276h120M180 322h120M180 368h120M432 195h128M432 245h128M432 295h128M432 345h128" stroke="#fbd09a" strokeOpacity=".23" />
        <path d="M20 418c110-92 206-92 292 0M312 418c113-102 226-102 338 0" fill="none" stroke="url(#onGold)" strokeWidth="6" />
        <path d="M20 418h630" stroke="#d9e5ef" strokeOpacity=".7" strokeWidth="2" />
        <path d="m90 418 70-92m25 92 70-92m90 92 70-92m25 92 70-92" stroke="#ffae45" strokeOpacity=".55" />
        <circle cx="472" cy="117" r="54" fill="#ff9a2f" fillOpacity=".1" />
        <circle cx="472" cy="117" r="28" fill="#ff9a2f" fillOpacity=".15" />
        <path d="M472 70v94M425 117h94" stroke="#ff9a2f" strokeOpacity=".3" />
        <g fill="url(#onGold)">
          <rect x="74" y="448" width="172" height="8" rx="4" opacity=".8" />
          <rect x="74" y="468" width="270" height="5" rx="2.5" opacity=".35" />
        </g>
      </svg>
      <div className={styles.visualTag}>SITE · STRUCTURE · INFRASTRUCTURE</div>
    </div>
  );
}

export function FeaVisual() {
  const rows = Array.from({ length: 10 });
  const cols = Array.from({ length: 14 });
  return (
    <div className={`${styles.visualFrame} ${styles.feaVisual}`} aria-hidden="true">
      <svg viewBox="0 0 720 520" role="img">
        <defs>
          <radialGradient id="feaHot" cx="58%" cy="63%" r="56%">
            <stop offset="0" stopColor="#ff3d00" />
            <stop offset=".18" stopColor="#ffb000" />
            <stop offset=".36" stopColor="#d8ff00" />
            <stop offset=".58" stopColor="#00d67a" />
            <stop offset=".78" stopColor="#00a6ff" />
            <stop offset="1" stopColor="#102b76" />
          </radialGradient>
          <filter id="feaGlow">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <pattern id="feaGrid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="#3ce6ff" strokeOpacity=".08" />
          </pattern>
        </defs>
        <rect width="720" height="520" fill="#03111a" />
        <rect width="720" height="520" fill="url(#feaGrid)" />
        <path d="M140 390c10-95 60-168 145-208 40-19 90-27 139-20l99 15c42 6 73 42 73 84v72c0 38-30 70-68 73l-257 20c-73 6-137-42-131-36Z" fill="url(#feaHot)" opacity=".9" filter="url(#feaGlow)" />
        {rows.map((_, r) => (
          <path key={`r-${r}`} d={`M150 ${220 + r * 21} C 280 ${170 + r * 18}, 440 ${185 + r * 19}, 585 ${238 + r * 16}`} fill="none" stroke="#d9ffff" strokeOpacity=".45" />
        ))}
        {cols.map((_, c) => (
          <path key={`c-${c}`} d={`M${170 + c * 30} 190 C ${145 + c * 30} 270, ${180 + c * 28} 360, ${215 + c * 25} 420`} fill="none" stroke="#d9ffff" strokeOpacity=".35" />
        ))}
        <circle cx="430" cy="335" r="32" fill="none" stroke="#fff" strokeOpacity=".8" />
        <circle cx="430" cy="335" r="9" fill="#fff" />
        <path d="M462 335h115" stroke="#fff" strokeOpacity=".65" />
        <rect x="564" y="305" width="116" height="60" rx="8" fill="#061823" stroke="#44f0ff" strokeOpacity=".6" />
        <text x="580" y="330" fill="#dffbff" fontSize="13" fontFamily="Arial">DESIGN ITERATION</text>
        <text x="580" y="350" fill="#59f2c3" fontSize="18" fontFamily="Arial" fontWeight="700">03 / 05</text>
        <g transform="translate(75 70)">
          <text fill="#dffbff" fontSize="13" fontFamily="Arial">RESPONSE</text>
          <rect y="18" width="170" height="9" rx="4.5" fill="url(#feaHot)" />
          <text y="49" fill="#7596a8" fontSize="11" fontFamily="Arial">LOW</text>
          <text x="143" y="49" fill="#7596a8" fontSize="11" fontFamily="Arial">HIGH</text>
        </g>
      </svg>
      <div className={styles.visualTag}>MODEL · SIMULATE · ITERATE</div>
    </div>
  );
}

export function PmtVisual() {
  return (
    <div className={`${styles.visualFrame} ${styles.pmtVisual}`} aria-hidden="true">
      <svg viewBox="0 0 720 520" role="img">
        <defs>
          <linearGradient id="pmtLine" x1="0" x2="1">
            <stop offset="0" stopColor="#17b6ff" />
            <stop offset=".5" stopColor="#38dc92" />
            <stop offset="1" stopColor="#ff8a1f" />
          </linearGradient>
          <pattern id="pmtGrid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0H0V36" fill="none" stroke="#ffffff" strokeOpacity=".05" />
          </pattern>
        </defs>
        <rect width="720" height="520" fill="#07111b" />
        <rect width="720" height="520" fill="url(#pmtGrid)" />
        <path d="M70 360C160 360 155 245 250 245s95 85 190 85 95-150 190-150" fill="none" stroke="url(#pmtLine)" strokeWidth="6" />
        {[
          [70, 360, "SCOPE"],
          [250, 245, "PLAN"],
          [440, 330, "CONTROL"],
          [630, 180, "DELIVER"],
        ].map(([x, y, label], i) => (
          <g key={String(label)}>
            <circle cx={Number(x)} cy={Number(y)} r="20" fill="#07111b" stroke={i === 3 ? "#ff8a1f" : "#62d7ff"} strokeWidth="4" />
            <circle cx={Number(x)} cy={Number(y)} r="6" fill={i === 3 ? "#ff8a1f" : "#62d7ff"} />
            <text x={Number(x)} y={Number(y) + 52} fill="#dce8ef" textAnchor="middle" fontSize="12" fontFamily="Arial">{String(label)}</text>
          </g>
        ))}
        <g transform="translate(72 70)">
          <rect width="170" height="100" rx="12" fill="#0c1b28" stroke="#2bc4ff" strokeOpacity=".5" />
          <text x="18" y="28" fill="#7896aa" fontSize="11" fontFamily="Arial">ENGINEERING PROGRESS</text>
          <text x="18" y="65" fill="#eaf6ff" fontSize="32" fontFamily="Arial" fontWeight="700">74%</text>
          <rect x="18" y="78" width="134" height="7" rx="3.5" fill="#152f40" />
          <rect x="18" y="78" width="99" height="7" rx="3.5" fill="url(#pmtLine)" />
        </g>
        <g transform="translate(474 385)">
          <rect width="174" height="76" rx="12" fill="#0c1b28" stroke="#ff8a1f" strokeOpacity=".55" />
          <text x="18" y="28" fill="#7896aa" fontSize="11" fontFamily="Arial">OPEN DECISIONS</text>
          <text x="18" y="57" fill="#ffad66" fontSize="26" fontFamily="Arial" fontWeight="700">04</text>
        </g>
      </svg>
      <div className={styles.visualTag}>PMP-LED PROJECT CONTROLS</div>
    </div>
  );
}
