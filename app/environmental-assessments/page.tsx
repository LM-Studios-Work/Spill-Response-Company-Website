import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AssessmentHeroSection } from "@/components/environmental-assessments/hero-section";
import { NemaSection } from "@/components/environmental-assessments/nema-section";
import { EiaSection } from "@/components/environmental-assessments/eia-section";
import { AssessmentCtaBanner } from "@/components/environmental-assessments/cta-banner";
import { ServicesCarousel } from "@/lib/services-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Assessments & Regulatory Reporting | SSSK Environmental Services",
  description:
    "Expert environmental impact assessments (EIA) and NEMA compliance reporting. Navigate South African environmental law with confidence. Audit-ready documentation.",
  keywords: [
    "environmental assessments",
    "EIA",
    "NEMA compliance",
    "environmental reporting",
    "regulatory compliance",
  ],
  openGraph: {
    title: "Environmental Assessments & Regulatory Reporting",
    description: "Professional environmental impact assessments and compliance reporting",
    url: "https://sssksolutions.co.za/environmental-assessments",
    type: "website",
  },
};

export default function EnvironmentalAssessmentsPage() {
  return (
    <>
      <Header />
      <main>
        <AssessmentHeroSection />
        <AssessmentCtaBanner />
        <NemaSection />
        <EiaSection />
        <ServicesCarousel />
      </main>
      <Footer />
    </>
  );
}
