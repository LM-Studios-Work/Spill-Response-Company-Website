import type React from "react";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSSK Environmental Services - 24/7 Emergency Spill Response & Hazmat Remediation",
  description:
    "Leading environmental protection and hazardous spill remediation services. 24/7 Emergency Response, pollution control, waste management, and environmental assessments across South Africa. NEMA compliant & ISO certified.",
  generator: "v0.app",
  metadataBase: new URL("https://sssksolutions.co.za"),
  alternates: {
    canonical: "https://sssksolutions.co.za",
  },
  keywords: [
    "spill response",
    "hazmat remediation",
    "emergency spill cleanup",
    "pollution control",
    "waste management",
    "environmental assessments",
    "South Africa",
    "NEMA compliance",
    "ISO 14001",
    "hazardous materials",
    "environmental services",
  ],
  authors: [{ name: "SSSK Environmental Services" }],
  creator: "SSSK Environmental Services",
  publisher: "SSSK Environmental Services",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://sssksolutions.co.za",
    siteName: "SSSK Environmental Services",
    title: "SSSK Environmental Services - 24/7 Emergency Spill Response & Hazmat Remediation",
    description:
      "Leading environmental protection and hazardous spill remediation services. 24/7 Emergency Response, pollution control, waste management, and environmental assessments across South Africa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SSSK Environmental Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSSK Environmental Services - 24/7 Emergency Spill Response",
    description:
      "Leading environmental protection and hazardous spill remediation services across South Africa.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a3a3a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/sssklogo.png" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'SSSK Environmental Services',
              image: 'https://sssksolutions.co.za/sssklogo.png',
              description:
                'Leading environmental protection and hazardous spill remediation services across South Africa',
              telephone: '+27-71-788-1312',
              email: 'info@sssksolutions.co.za',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Industrial Park Drive',
                addressLocality: 'Kempton Park',
                postalCode: '1619',
                addressCountry: 'ZA',
              },
              url: 'https://sssksolutions.co.za',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              sameAs: [
                'https://www.facebook.com/ssskenvironmental',
                'https://www.linkedin.com/company/sssk-environmental',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '150',
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
