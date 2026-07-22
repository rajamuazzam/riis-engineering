import "./globals.css";

export const metadata = {
  title: "RIIS Engineering | Offshore Energy & Civil Infrastructure",
  description: "Independent structural, FEA, PMT and civil engineering support for offshore energy and onshore infrastructure.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
