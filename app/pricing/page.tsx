import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHeroSection } from "@/components/pricing/hero-section"
import { IntroSection } from "@/components/pricing/intro-section"
import { PricingTable } from "@/components/pricing/pricing-table"
import { BenefitsSection } from "@/components/pricing/benefits-section"
import { PricingCtaBanner } from "@/components/pricing/cta-banner"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PricingHeroSection />
        <IntroSection />
        <PricingTable />
        <BenefitsSection />
        <PricingCtaBanner />
      </main>
      <Footer />
    </div>
  )
}
