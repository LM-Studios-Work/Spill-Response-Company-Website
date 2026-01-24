import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ComplianceBanner } from "@/components/home/compliance-banner"
import { ServicesSection } from "@/components/home/services-section"
import { ProductsSection } from "@/components/home/products-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SSSK Environmental Services - 24/7 Emergency Spill Response South Africa",
  description:
    "Professional hazardous spill response, pollution control, waste management & environmental assessments. NEMA compliant, ISO 14001 certified. Call 24/7: 071 788 1312",
  keywords: [
    "emergency spill response",
    "hazmat cleanup South Africa",
    "pollution control",
    "waste management",
    "environmental services",
    "spill remediation",
  ],
  openGraph: {
    title: "SSSK Environmental Services - 24/7 Emergency Spill Response",
    description: "Professional hazardous spill response & environmental remediation services",
    url: "https://sssksolutions.co.za",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ComplianceBanner />
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
