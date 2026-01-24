import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WasteHeroSection } from "@/components/waste-management/hero-section";
import { WasteIntroSection } from "@/components/waste-management/intro-section";
import { WasteSplitSection } from "@/components/waste-management/split-section";
import { WasteStrategySection } from "@/components/waste-management/strategy-section";
import { ServicesCarousel } from "@/lib/services-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated Waste Management & Disposal Solutions | SSSK Environmental Services",
  description:
    "Environmentally responsible, cost-effective, and operationally efficient waste management services for South African industries. Compliant disposal and recycling solutions.",
  keywords: [
    "waste management",
    "waste disposal",
    "industrial waste",
    "waste recycling",
    "hazardous waste",
  ],
  openGraph: {
    title: "Integrated Waste Management & Disposal Solutions",
    description: "Professional waste management and disposal services",
    url: "https://sssksolutions.co.za/waste-management",
    type: "website",
  },
};

export default function WasteManagementPage() {
  return (
    <>
      <Header />
      <main>
        <WasteHeroSection />
        <WasteIntroSection />
        <WasteSplitSection />
        <WasteStrategySection />
        <ServicesCarousel />
      </main>
      <Footer />
    </>
  );
}
