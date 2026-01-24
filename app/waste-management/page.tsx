import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WasteHeroSection } from "@/components/waste-management/hero-section";
import { WasteIntroSection } from "@/components/waste-management/intro-section";
import { WasteSplitSection } from "@/components/waste-management/split-section";
import { WasteStrategySection } from "@/components/waste-management/strategy-section";
import { ServicesCarousel } from "@/lib/services-carousel";

export const metadata = {
  title: "Integrated Waste Management - SSSK Environmental Services",
  description:
    "Environmentally responsible, cost-effective, and operationally efficient waste services for South African industries.",
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
