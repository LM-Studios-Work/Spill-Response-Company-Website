import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PricingHeroSection } from "@/components/pricing/hero-section";
import { IntroSection } from "@/components/pricing/intro-section";
import { PricingTable } from "@/components/pricing/pricing-table";
import { BenefitsSection } from "@/components/pricing/benefits-section";
import { PricingCtaBanner } from "@/components/pricing/cta-banner";
import { ServicesCarousel } from "@/lib/services-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans & Service Packages | SSSK Environmental Services",
  description:
    "Transparent pricing for emergency spill response, pollution control, waste management, and training services. Get a custom quote for your business needs.",
  keywords: [
    "pricing",
    "service packages",
    "quotes",
    "service costs",
    "emergency response pricing",
  ],
  openGraph: {
    title: "Pricing Plans & Service Packages",
    description: "Transparent pricing for environmental services",
    url: "https://sssksolutions.co.za/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PricingHeroSection />
        <IntroSection />
        <PricingTable />
        <BenefitsSection />
        <PricingCtaBanner />
        <ServicesCarousel />
      </main>
      <Footer />
    </div>
  );
}
