import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SpillHeroSection } from "@/components/spill-response/hero-section"
import { IntroSection } from "@/components/spill-response/intro-section"
import { ServicesGrid } from "@/components/spill-response/services-grid"
import { ResponseProtocol } from "@/components/spill-response/response-protocol"
import { CtaBanner } from "@/components/spill-response/cta-banner"
import { FaqSection } from "@/components/spill-response/faq-section"
import { ImageIcon } from "lucide-react"
import Image from "next/image";

export const metadata: Metadata = {
  title: "Emergency Spill Response & Hazmat Recovery | SSSK Environmental Services",
  description:
    "24/7 Emergency Spill Response for Road, Rail, and Industrial incidents across South Africa. NEMA Compliant & ISO Certified.",
}

export default function EmergencySpillResponsePage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <SpillHeroSection />
        <IntroSection />
        <ServicesGrid />
        <ResponseProtocol />
        


        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}