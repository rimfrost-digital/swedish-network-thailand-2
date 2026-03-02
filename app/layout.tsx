import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Svenska Företagare i Thailand | Affärsnätverk",
  description:
    "Ett affärsnätverk byggt av företagare – för företagare i Thailand. Varma kontakter, ärliga erfarenheter och praktisk vägledning.",
  keywords: [
    "svenska företagare",
    "thailand",
    "affärsnätverk",
    "entreprenörer",
    "nätverk",
    "bangkok",
  ],
  openGraph: {
    title: "Svenska Företagare i Thailand",
    description:
      "Ett affärsnätverk byggt av företagare – för företagare i Thailand.",
    type: "website",
    locale: "sv_SE",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e40af",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
