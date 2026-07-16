import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.riis.engineering"),
  title: "RIIS Engineering | Structural Engineering, FEA & PMT Support",
  description: "Specialist structural engineering, finite element analysis (FEA), structural integrity, offshore, subsea, marine operations, brownfield engineering and PMT support.",
  keywords: ["structural engineering", "finite element analysis", "FEA", "offshore structural engineering", "subsea engineering", "structural integrity", "brownfield engineering", "marine operations", "PMT support", "RIIS Engineering"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.riis.engineering",
    siteName: "RIIS Engineering",
    title: "RIIS Engineering | Structural Engineering, FEA & PMT Support",
    description: "Engineering clarity for complex structures.",
    images: [{ url: "/riis-og-image.jpg", width: 1200, height: 630, alt: "RIIS Engineering — Structural Engineering, FEA and PMT Support" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIIS Engineering | Structural Engineering, FEA & PMT Support",
    description: "Engineering clarity for complex structures.",
    images: ["/riis-og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
