import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PollutionHeroSection } from "@/components/pollution-control/hero-section"
import { IntroSection } from "@/components/pollution-control/intro-section"
import { CoreServicesSection } from "@/components/pollution-control/core-services-section"
import { ComplianceSection } from "@/components/pollution-control/compliance-section"
import { PollutionCtaBanner } from "@/components/pollution-control/cta-banner"

export const metadata: Metadata = {
  title: "Pollution Control & Site Remediation - SSSK Environmental Services",
  description:
    "Science-based restoration for contaminated land, watercourses, and industrial sites. Expert remediation and eco-rehabilitation services.",
}

export default function PollutionControlPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <PollutionHeroSection />
        <IntroSection />
        <CoreServicesSection />
        <ComplianceSection />
        <PollutionCtaBanner />
      </main>
      <Footer />
    </div>
  )
}
