import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpillHeroSection } from "@/components/spill-response/hero-section";
import { IntroSection } from "@/components/spill-response/intro-section";
import { ServicesGrid } from "@/components/spill-response/services-grid";
import { ResponseProtocol } from "@/components/spill-response/response-protocol";
import { CtaBanner } from "@/components/spill-response/cta-banner";
import { FaqSection } from "@/components/spill-response/faq-section";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { ServicesCarousel } from "@/lib/services-carousel";

export const metadata: Metadata = {
  title: "Emergency Spill Response Gauteng | 24/7 Hazmat Cleanup Company",
  description:
    "24/7 emergency spill response services in Gauteng. Fast hazmat recovery for road, rail & industrial incidents. Spill cleanup company near me. Operating in NEMA compliance.",
  keywords: [
    "Emergency spill response",
    "Hazmat recovery",
    "Spill cleanup company",
    "24/7 hazardous material cleanup",
    "Industrial spill containment",
    "Road spill response services",
    "Rail spill cleanup",
    "Emergency spill response Gauteng",
    "Hazmat cleanup company near me",
  ],
  openGraph: {
    title: "Emergency Spill Response Gauteng | 24/7 Hazmat Cleanup Company",
    description:
      "24/7 emergency spill response services in Gauteng. Fast hazmat recovery for road, rail & industrial incidents. Spill cleanup company near me. Operating in NEMA compliance.",
    url: "https://sssksolutions.co.za/emergency-spill-response",
    type: "website",
  },
  alternates: {
    canonical: "https://sssksolutions.co.za/emergency-spill-response",
  },
};

export default function EmergencySpillResponsePage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <SpillHeroSection />
        <IntroSection />
        <ServicesGrid />
        <ResponseProtocol />
        <FaqSection />
        <CtaBanner />
        <ServicesCarousel />
      </main>
      <Footer />
    </div>
  );
}
