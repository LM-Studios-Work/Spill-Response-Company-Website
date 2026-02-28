import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WasteHeroSection } from "@/components/waste-management/hero-section";
import { WasteIntroSection } from "@/components/waste-management/intro-section";
import { WasteSplitSection } from "@/components/waste-management/split-section";
import { WasteStrategySection } from "@/components/waste-management/strategy-section";
import { WasteCtaBanner } from "@/components/waste-management/cta-banner";
import { ServicesCarousel } from "@/lib/services-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Waste Management Gauteng | Hazardous Waste Disposal",
  description:
    "Specialists in industrial waste management and hazardous waste disposal in Gauteng. We provide integrated waste management solutions, including waste disposal in compliance with NEMA and toxic waste removal.",
  keywords: [
    "Industrial waste management",
    "Hazardous waste disposal",
    "Integrated waste management solutions",
    "NEMA compliance waste disposal",
    "Toxic waste removal services",
    "Commercial waste recycling",
    "Hazardous waste disposal Gauteng",
    "Industrial waste management",
  ],
  openGraph: {
    title: "Industrial Waste Management Gauteng | Hazardous Waste Disposal",
    description:
      "Specialists in industrial waste management and hazardous waste disposal in Gauteng. We provide integrated waste management solutions, including waste disposal in compliance with NEMA and toxic waste removal.",
    url: "https://sssksolutions.co.za/waste-management",
    type: "website",
  },
  alternates: {
    canonical: "https://sssksolutions.co.za/waste-management",
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
        <WasteCtaBanner />
        <ServicesCarousel />
      </main>
      <Footer />
    </>
  );
}
