import "./globals.css";
export const metadata = {
  icons: { icon: "/riis-icon.jpg", apple: "/riis-icon.jpg" },
  title: "RIIS Engineering | Structural Engineering, FEA & PMT Support",
  description: "Independent structural engineering, finite element analysis and project management team support for complex engineering challenges."
};
export default function RootLayout({ children }) { return <html lang="en"><body>{children}</body></html>; }
