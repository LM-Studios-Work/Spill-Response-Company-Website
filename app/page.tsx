import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ComplianceBanner } from "@/components/home/compliance-banner"
import { ServicesSection } from "@/components/home/services-section"
import { ProductsSection } from "@/components/home/products-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

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
