import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TrainingHeroSection } from "@/components/training/hero-section";
import { TrainingIntroSection } from "@/components/training/intro-section";
import { TrainingLocationSection } from "@/components/training/location-section";
import { TrainingSkillsSection } from "@/components/training/skills-section";
import { TrainingComplianceSection } from "@/components/training/compliance-section";
import { TrainingCtaBanner } from "@/components/training/cta-banner";
import { ServicesCarousel } from "@/lib/services-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spill Kit Training Courses South Africa | Hazmat Response",
  description:
    "On-site spill kit and hazmat response training courses in South Africa. We also offer environmental awareness training and corporate spill containment courses for industrial safety compliance.",
  keywords: [
    "Spill kit training",
    "Hazmat response training",
    "Environmental awareness training",
    "Corporate spill containment courses",
    "Industrial safety compliance training",
    "Spill kit training courses South Africa",
    "On-site hazmat training",
  ],
  openGraph: {
    title: "Spill Kit Training Courses South Africa | Hazmat Response",
    description:
      "On-site spill kit and hazmat response training courses in South Africa. We also offer environmental awareness training and corporate spill containment courses for industrial safety compliance.",
    url: "https://sssksolutions.co.za/training",
    type: "website",
  },
  alternates: {
    canonical: "https://sssksolutions.co.za/training",
  },
};

export default function TrainingPage() {
  return (
    <>
      <Header />
      <main>
        <TrainingHeroSection />
        <TrainingIntroSection />
        <TrainingLocationSection />
        <TrainingSkillsSection />
        <TrainingComplianceSection />
        <TrainingCtaBanner />
        <ServicesCarousel />
      </main>
      <Footer />
    </>
  );
}
