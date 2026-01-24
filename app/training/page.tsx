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
  title: "Spill Kit Training & Environmental Awareness | SSSK Environmental Services",
  description:
    "Comprehensive spill kit training and environmental awareness programs. Equip your team with practical skills for instant spill containment and regulatory compliance.",
  keywords: [
    "spill training",
    "hazmat training",
    "compliance training",
    "environmental training",
    "safety training",
  ],
  openGraph: {
    title: "Spill Kit Training & Environmental Awareness",
    description: "Professional spill response and environmental awareness training",
    url: "https://sssksolutions.co.za/training",
    type: "website",
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
