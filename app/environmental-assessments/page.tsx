import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AssessmentHeroSection } from "@/components/environmental-assessments/hero-section"
import { NemaSection } from "@/components/environmental-assessments/nema-section"
import { EiaSection } from "@/components/environmental-assessments/eia-section"
import { AssessmentCtaBanner } from "@/components/environmental-assessments/cta-banner"

export const metadata = {
  title: "Environmental Assessments & Regulatory Reporting - SSSK",
  description:
    "Navigating the complexities of South African environmental law. We ensure your documentation is accurate, compliant, and audit-ready.",
}

export default function EnvironmentalAssessmentsPage() {
  return (
    <>
      <Header />
      <main>
        <AssessmentHeroSection />
        <AssessmentCtaBanner />
        <NemaSection />
        <EiaSection />
      </main>
      <Footer />
    </>
  )
}
