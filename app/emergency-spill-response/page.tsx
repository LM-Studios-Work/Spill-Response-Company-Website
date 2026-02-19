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
  title:
    "24/7 Emergency Spill Response & Hazmat Recovery | SSSK Environmental Services",
  description:
    "Rapid 24/7 emergency spill response for road, rail, and industrial incidents across South Africa. NEMA compliance. Call 071 788 1312",
  keywords: [
    "emergency spill response",
    "hazmat recovery",
    "spill cleanup",
    "24/7 emergency",
    "NEMA compliance",
    "road spill",
    "rail spill",
    "industrial spill",
  ],
  openGraph: {
    title: "24/7 Emergency Spill Response & Hazmat Recovery",
    description: "Professional hazmat remediation and spill response services",
    url: "https://sssksolutions.co.za/emergency-spill-response",
    type: "website",
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
