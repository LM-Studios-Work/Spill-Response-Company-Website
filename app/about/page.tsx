import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about/hero-section"
import { OverviewSection } from "@/components/about/overview-section"
import { MissionVisionSection } from "@/components/about/mission-vision-section"
import { QuoteBanner } from "@/components/about/quote-banner"
import { ValuesSection } from "@/components/about/values-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About SSSK Environmental Services - Our Mission & Expertise",
  description:
    "Learn about SSSK Environmental Services. Leading provider of hazardous spill response, environmental remediation, and compliance solutions in South Africa since establishment.",
  keywords: [
    "about SSSK",
    "environmental company South Africa",
    "spill response experts",
    "hazmat specialists",
    "environmental remediation",
  ],
  openGraph: {
    title: "About SSSK Environmental Services",
    description: "Protecting today. Preserving tomorrow. Our mission and values.",
    url: "https://sssksolutions.co.za/about",
    type: "website",
  },
}

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
