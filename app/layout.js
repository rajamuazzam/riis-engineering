import "./globals.css";

export const metadata = {
  title: "RIIS Engineering | Structural Engineering, FEA & PMT Support",
  description:
    "Independent structural engineering, finite element analysis and project management team support for complex engineering challenges.",
  metadataBase: new URL("https://riis.engineering"),
  icons: {
    icon: "/riis-icon.jpg",
    apple: "/riis-icon.jpg",
  },
  openGraph: {
    title: "RIIS Engineering",
    description: "Engineering clarity for complex structures.",
    url: "https://riis.engineering",
    siteName: "RIIS Engineering",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "RIIS Engineering",
    description: "Structural Engineering · Finite Element Analysis · PMT Support",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
