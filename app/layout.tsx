import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swedish Network Thailand | Coming Soon",
  description:
    "Connecting the Swedish community in Thailand. Coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-screen font-sans bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
