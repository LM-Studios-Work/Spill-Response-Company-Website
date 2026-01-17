import type React from "react";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSSK Environmental Services - Emergency Spill Response",
  description:
    "Leading environmental protection and hazardous spill remediation services. 24/7 Emergency Response across South Africa.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/sssklogo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/sssklogo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/sssklogo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/sssklogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
