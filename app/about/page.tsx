import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about/hero-section"
import { OverviewSection } from "@/components/about/overview-section"
import { MissionVisionSection } from "@/components/about/mission-vision-section"
import { QuoteBanner } from "@/components/about/quote-banner"
import { ValuesSection } from "@/components/about/values-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutHeroSection />
        <OverviewSection />
        <MissionVisionSection />
        <QuoteBanner />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  )
}
