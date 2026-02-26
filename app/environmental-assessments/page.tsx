import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AssessmentHeroSection } from "@/components/environmental-assessments/hero-section";
import { NemaSection } from "@/components/environmental-assessments/nema-section";
import { EiaSection } from "@/components/environmental-assessments/eia-section";
import { AssessmentCtaBanner } from "@/components/environmental-assessments/cta-banner";
import { ServicesCarousel } from "@/lib/services-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Impact Assessments (EIA) South Africa | EAP",
  description:
    "Environmental impact assessments (EIA) in South Africa. As environmental assessment practitioners (EAP), we offer environmental compliance consulting, NEMA compliance reporting, and BAR services.",
  keywords: [
    "Environmental impact assessments (EIA)",
    "Environmental compliance consulting",
    "NEMA compliance reporting",
    "Regulatory environmental audits",
    "Environmental assessment practitioner (EAP)",
    "Basic Assessment Report (BAR) services",
    "EIA consultants South Africa",
    "Environmental assessment agencies Gauteng",
  ],
  openGraph: {
    title: "Environmental Impact Assessments (EIA) South Africa | EAP",
    description:
      "Environmental impact assessments (EIA) in South Africa. As environmental assessment practitioners (EAP), we offer environmental compliance consulting, NEMA compliance reporting, and BAR services.",
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
