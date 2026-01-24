import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PollutionHeroSection } from "@/components/pollution-control/hero-section";
import { IntroSection } from "@/components/pollution-control/intro-section";
import { CoreServicesSection } from "@/components/pollution-control/core-services-section";
import { ComplianceSection } from "@/components/pollution-control/compliance-section";
import { PollutionCtaBanner } from "@/components/pollution-control/cta-banner";
import { ServicesCarousel } from "@/lib/services-carousel";

export const metadata: Metadata = {
  title: "Pollution Control & Environmental Remediation | SSSK Environmental Services",
  description:
    "Science-based restoration for contaminated land, watercourses, and industrial sites. Expert site remediation and eco-rehabilitation services across South Africa.",
  keywords: [
    "pollution control",
    "site remediation",
    "contaminated land",
    "environmental restoration",
    "water treatment",
    "soil remediation",
  ],
  openGraph: {
    title: "Pollution Control & Environmental Remediation",
    description: "Science-based environmental restoration and site remediation services",
    url: "https://sssksolutions.co.za/pollution-control",
    type: "website",
  },
};

export default function PollutionControlPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <PollutionHeroSection />
        <IntroSection />
        <CoreServicesSection />
        <ComplianceSection />
        <PollutionCtaBanner />
        <ServicesCarousel />
      </main>
      <Footer />
    </div>
  );
}
