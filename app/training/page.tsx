import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrainingHeroSection } from "@/components/training/hero-section"
import { TrainingIntroSection } from "@/components/training/intro-section"
import { TrainingLocationSection } from "@/components/training/location-section"
import { TrainingSkillsSection } from "@/components/training/skills-section"
import { TrainingComplianceSection } from "@/components/training/compliance-section"
import { TrainingCtaBanner } from "@/components/training/cta-banner"

export const metadata = {
  title: "Spill Kit Training & Environmental Awareness - SSSK",
  description:
    "Equip your team with the practical skills to contain spills instantly. Effective training for compliance and safety.",
}

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
      </main>
      <Footer />
    </>
  )
}
