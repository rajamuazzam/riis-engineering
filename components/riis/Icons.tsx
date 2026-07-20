import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function OffshoreIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 20 8 8h8l3 12M7 14h10M4 20h16M10 8V4h4v4M3 17c1 .8 2 .8 3 0 1 .8 2 .8 3 0 1 .8 2 .8 3 0 1 .8 2 .8 3 0 1 .8 2 .8 3 0" />
    </svg>
  );
}

export function OnshoreIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18M5 20V9l5-3v14M10 20V4l5 3v13M15 20v-9h4v9M7 12h1M7 15h1M12 9h1M12 12h1M12 15h1" />
    </svg>
  );
}

export function FeaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9M8 5.3l8 13.4M16 5.3 8 18.7" />
    </svg>
  );
}

export function PmtIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 19V5M4 7h5M4 12h9M4 17h15" />
      <circle cx="10" cy="7" r="1.5" />
      <circle cx="14" cy="12" r="1.5" />
      <circle cx="20" cy="17" r="1.5" />
      <path d="M10 7h7v5M14 12h6v5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function FileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

export function RiskIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 2.8 20h18.4L12 3Z" />
      <path d="M12 9v5M12 17h.01" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}
