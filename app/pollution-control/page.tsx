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
  title: "Environmental Remediation Services in South Africa | Pollution Control",
  description:
    "Leading environmental remediation company in South Africa. We offer pollution control services, site remediation, contaminated land cleanup, and soil remediation. Site remediation contractors.",
  keywords: [
    "Environmental remediation",
    "Pollution control services",
    "Site remediation",
    "Contaminated land cleanup",
    "Soil remediation services",
    "Watercourse pollution restoration",
    "Industrial eco-rehabilitation",
    "Environmental remediation companies South Africa",
    "Site remediation contractors",
  ],
  openGraph: {
    title: "Environmental Remediation Services in South Africa | Pollution Control",
    description:
      "Leading environmental remediation company in South Africa. We offer pollution control services, site remediation, contaminated land cleanup, and soil remediation. Site remediation contractors.",
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
