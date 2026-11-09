import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = getSiteUrl();
const shareImage = siteUrl
  ? new URL("/opengraph-image", siteUrl).toString()
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Pranav Kulkarni — Software Engineer",
    template: "%s | Pranav Kulkarni",
  },
  description:
    "Pranav Kulkarni is a Computer Science student at BMSCE who builds full-stack and AI applications. Explore BioAuth, a face and voice biometric login system, and other projects.",
  keywords: [
    "Pranav Kulkarni",
    "software engineer",
    "full stack developer",
    "FastAPI",
    "React developer",
    "biometric authentication",
    "BMSCE computer science",
    "BioAuth",
  ],
  applicationName: "Pranav Kulkarni Portfolio",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    title: "Pranav Kulkarni — Software Engineer",
    description:
      "Full-stack and AI projects, including BioAuth: passwordless login with face and voice biometrics.",
    url: siteUrl?.toString(),
    images: shareImage
      ? [
          {
            url: shareImage,
            width: 1200,
            height: 630,
            alt: "Pranav Kulkarni portfolio",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Kulkarni — Software Engineer",
    description:
      "Full-stack and AI projects, including BioAuth: passwordless login with face and voice biometrics.",
    images: shareImage ? [shareImage] : undefined,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101311",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${monoFont.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
