import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHeroSection } from "@/components/contact/hero-section"
import { ContactFormSection } from "@/components/contact/form-section"
import { EmergencyBanner } from "@/components/contact/emergency-banner"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactHeroSection />
        <ContactFormSection />
        <EmergencyBanner />
      </main>
      <Footer />
    </div>
  )
}
