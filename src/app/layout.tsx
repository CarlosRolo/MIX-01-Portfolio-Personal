import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Carlos Rodríguez — Infrastructure & DevOps Engineer",
  description:
    "Portfolio of Carlos Rodríguez, Telematic Engineer from ESPOCH. Specializing in infrastructure automation, cloud, networking and IoT.",
  openGraph: {
    title: "Carlos Rodríguez — Infrastructure & DevOps Engineer",
    description:
      "Telematic Engineer from ESPOCH specializing in DevOps, cloud infrastructure, networking and IoT.",
    url: "https://carlosrolo.vercel.app",
    siteName: "Carlos Rodríguez Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
